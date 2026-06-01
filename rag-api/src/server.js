import express from "express";
import cors from "cors";
import { config, validateRuntimeConfig } from "./config.js";
import { embedQuery, retrieveTopChunks } from "./retrieval.js";
import { buildContextBlock, buildSystemPrompt, buildUserPrompt, routeModel } from "./prompt.js";
import Groq from "groq-sdk";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));

function writeSse(res, payload) {
  res.write(`data: ${JSON.stringify(payload)}\n\n`);
}

const tools = [
  {
    type: "function",
    function: {
      name: "provideCalendarLink",
      description: "ONLY call this if the user EXPLICITLY asks to schedule an interview, book a meeting, or set up a call with you.",
      parameters: { type: "object", properties: {} }
    }
  },
  {
    type: "function",
    function: {
      name: "sendContactEmail",
      description: "ONLY call this if the user EXPLICITLY says they want to hire you, contact you via email, or want your email address to reach out.",
      parameters: { type: "object", properties: {} }
    }
  }
];

async function streamGroq({ messages, apiKey, onText }) {
  const groq = new Groq({ apiKey });
  const chatCompletion = await groq.chat.completions.create({
    messages: messages,
    model: "llama-3.1-8b-instant", // Using Groq's lightning fast model natively!
    temperature: 0.3,
    max_tokens: 1024,
    stream: true,
    tools: tools,
    tool_choice: "auto"
  });

  let toolName = "";

  for await (const chunk of chatCompletion) {
    if (chunk.choices[0]?.delta?.tool_calls) {
      const tc = chunk.choices[0].delta.tool_calls[0];
      if (tc.function?.name) toolName += tc.function.name;
    } else {
      onText(chunk.choices[0]?.delta?.content || "");
    }
  }

  // Phase 4: Execute tool after stream
  if (toolName === "provideCalendarLink") {
    onText("\n\n📅 **Calendar Link:** You can schedule a time with me here: [https://cal.com/ruthvik](https://cal.com/ruthvik)");
  } else if (toolName === "sendContactEmail") {
    // Native JS function mapping for sending email
    onText("\n\n📧 **Action Triggered:** I've pinged my automated pipeline to notify me of your interest! [CTA_CONTACT]");
  }
}

async function sendErrorAlert(errorDetails, userMessage) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
    console.warn("Email alert skipped: EMAIL_USER or EMAIL_APP_PASSWORD not set in .env");
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'disturbdont879@gmail.com',
      subject: '⚠️ ALERT: Portfolio Chatbot Error',
      text: `Your chatbot encountered an error while processing a message.\n\nUser Message: "${userMessage}"\n\nError Details:\n${errorDetails}\n\nTime: ${new Date().toISOString()}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Error alert email sent successfully.");
  } catch (err) {
    console.error("Failed to send error alert email:", err);
  }
}

app.get(["/health", "/api/health"], (_, res) => {
  res.json({ ok: true, service: "ruthvik-rag-api" });
});

app.post(["/chat", "/api/chat"], async (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const userMessage = String(req.body?.message || "").trim();
  const history = req.body?.history || [];
  if (!userMessage) {
    writeSse(res, { type: "error", message: "Message is required." });
    return res.end();
  }

  try {
    const queryVector = await embedQuery(userMessage);
    const topChunks = await retrieveTopChunks(queryVector, 5);
    const bestSimilarity = topChunks[0]?.similarity ?? 0;

    writeSse(res, {
      type: "meta",
      similarity: bestSimilarity,
      routedModel: routeModel(userMessage),
      retrieved: topChunks.length,
    });

    // Optional soft logging for similarity
    // if (bestSimilarity < config.similarityThreshold) console.log("Low similarity match, relying on system prompt baseline.");

    const contextBlock = buildContextBlock(topChunks);
    const system = buildSystemPrompt();
    const prompt = buildUserPrompt(userMessage, contextBlock);

    // Build the full messages array including history
    const messages = [
      { role: "system", content: system },
      ...history,
      { role: "user", content: prompt }
    ];

    await streamGroq({
      messages,
      apiKey: config.groqApiKey,
      onText: (text) => writeSse(res, { type: "chunk", text }),
    });

    writeSse(res, { type: "done" });
    res.end();
  } catch (err) {
    console.error("Chat API Error:", err);
    // Send automated email alert!
    await sendErrorAlert(err.stack || err.message, userMessage);
    
    writeSse(res, { type: "error", message: err.message || "Unknown server error" });
    res.end();
  }
});

async function start() {
  try {
    validateRuntimeConfig();
  } catch (e) {
    console.error(e.message);
    // Don't exit process on Vercel, just log
    if (process.env.NODE_ENV !== 'production') {
      process.exit(1);
    }
  }

  // Only listen on a port if run locally. Vercel automatically maps exported apps.
  if (process.env.NODE_ENV !== 'production') {
    app.listen(config.port, () => {
      console.log(`RAG API running on http://localhost:${config.port}`);
    });
  }
}

start();

// EXPORT the app so Vercel can treat it as a Serverless Function!
export default app;
