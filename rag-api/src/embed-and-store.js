import fs from "fs/promises";
import { pipeline } from "@xenova/transformers";
import { config, validateRuntimeConfig } from "./config.js";
import { pool, vectorToSql } from "./db.js";

async function main() {
  // Bypassing OpenAI validation since we are using local models
  // validateRuntimeConfig();

  const inputPath = process.argv[2] || "./data/chunks.json";
  const raw = await fs.readFile(inputPath, "utf-8");
  const chunks = JSON.parse(raw);

  if (!Array.isArray(chunks) || chunks.length === 0) {
    throw new Error("No chunks found. Run ingest logs first.");
  }

  console.log("Loading AI model. This might take 10 seconds the first time...");
  const embedder = await pipeline("feature-extraction", "Xenova/bge-small-en-v1.5");

  // await pool.query("DELETE FROM kb_chunks"); // Commented out to allow additive ingestion (DOCX + GitHub)

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];

    const result = await embedder(chunk.content, { pooling: "mean", normalize: true });
    // result.data is a Float32Array containing the 384 dimensions
    const embedding = Array.from(result.data);
    const embeddingSql = vectorToSql(embedding);

    await pool.query(
      `INSERT INTO kb_chunks (content, metadata, embedding) VALUES ($1, $2::jsonb, $3::vector)`,
      [chunk.content, JSON.stringify({ type: chunk.type, section: chunk.section, keywords: chunk.keywords || [] }), embeddingSql],
    );

    console.log(`Stored chunk ${i + 1}/${chunks.length}`);
  }

  await pool.end();
  console.log("Embedding + storage complete.");
}

main().catch(async (err) => {
  console.error(err.message);
  await pool.end();
  process.exit(1);
});
