import fs from "fs/promises";
import path from "path";

function inferSection(text) {
  const t = text.toLowerCase();
  if (/experience|intern|full-time|company|aspl|utl/.test(t)) return "experience";
  if (/project|built|deployed|delivery|app|website|hrms|career-ops|iot/.test(t)) return "project";
  if (/skill|stack|react|python|node|postgres|docker|nginx|langchain|rag/.test(t)) return "skills";
  if (/name|about|who i am|background|education|location|bca|cicms/.test(t)) return "identity";
  if (/contact|email|phone|linkedin|github|reach/.test(t)) return "contact";
  return "identity";
}

function extractKeywords(text) {
  const stop = new Set([
    "the", "and", "for", "with", "that", "this", "from", "into", "your", "have", "been", "are", "was",
    "will", "about", "into", "over", "used", "using", "across", "under", "each", "only", "what", "when",
    "a", "an", "of", "in", "to", "on", "by", "as"
  ]);
  const words = (text.toLowerCase().match(/[a-z0-9+.#-]{3,}/g) || [])
    .filter((w) => !stop.has(w))
    .slice(0, 30);
  return [...new Set(words)].slice(0, 12);
}

function cleanText(raw) {
  return raw
    .replace(/\u0007/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function splitByParagraphs(text) {
  return text
    .split(/\n/)
    .map((p) => cleanText(p))
    .filter(Boolean);
}

function parseQaChunks(paragraphs) {
  const qaChunks = [];
  for (let i = 0; i < paragraphs.length; i++) {
    const p = paragraphs[i];
    if (/^(q|question)\s*[:.-]/i.test(p)) {
      const a = paragraphs[i + 1] || "";
      const qaText = `${p} ${/^(a|answer)\s*[:.-]/i.test(a) ? a : ""}`.trim();
      if (qaText.length > 20) {
        qaChunks.push({
          type: "qa",
          section: inferSection(qaText),
          keywords: extractKeywords(qaText),
          content: qaText,
        });
      }
    }
  }
  return qaChunks;
}

function parseFactChunks(paragraphs) {
  const chunks = [];
  const maxLen = 900;

  let current = "";
  let currentSection = "identity";

  for (const p of paragraphs) {
    if (/^section\s*\d+/i.test(p) || /^##\s+/.test(p) || /^\d+\./.test(p) || /^[A-Z\s]+$/.test(p)) {
      if (current.trim()) {
        const content = cleanText(current);
        chunks.push({
          type: "fact",
          section: currentSection,
          keywords: extractKeywords(content),
          content,
        });
        current = "";
      }
      currentSection = inferSection(p);
      continue;
    }

    if ((current + " " + p).length > maxLen) {
      const content = cleanText(current);
      if (content) {
        chunks.push({
          type: "fact",
          section: currentSection,
          keywords: extractKeywords(content),
          content,
        });
      }
      // Smart Chunking: 30-word overlap
      const overlapWords = current.split(" ").slice(-30).join(" ");
      current = overlapWords + " " + p;
      currentSection = inferSection(p);
    } else {
      current = `${current} ${p}`.trim();
      currentSection = inferSection(current);
    }
  }

  if (current.trim()) {
    const content = cleanText(current);
    chunks.push({
      type: "fact",
      section: currentSection,
      keywords: extractKeywords(content),
      content,
    });
  }

  return chunks;
}

async function main() {
  const inputPath = process.argv[2];
  const outputPath = process.argv[3] || "./data/chunks.json";

  if (!inputPath) {
    throw new Error("Usage: node src/ingest-text.js <input.txt> [output.json]");
  }

  const dataBuffer = await fs.readFile(inputPath, "utf-8");
  
  // Extract paragraphs (PDFs often have weird line breaks, we might need to handle single newlines)
  // Re-join broken sentences
  const cleanedFullText = dataBuffer.replace(/([a-z])\n([a-z])/ig, "$1 $2");
  const paragraphs = splitByParagraphs(cleanedFullText);

  const qa = parseQaChunks(paragraphs);
  const facts = parseFactChunks(paragraphs);

  const merged = [...qa, ...facts]
    .filter((c) => c.content && c.content.length > 20)
    .map((c, idx) => ({ id: idx + 1, ...c }));

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, JSON.stringify(merged, null, 2), "utf-8");

  console.log(`Created ${merged.length} chunks at ${outputPath}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
