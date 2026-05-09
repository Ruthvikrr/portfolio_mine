import { env, pipeline } from "@xenova/transformers";
import { config } from "./config.js";

// Ensure Vercel Serverless doesn't crash from Read-Only Filesystem errors
env.cacheDir = "/tmp/";
import { pool, vectorToSql } from "./db.js";

// We keep a singleton instance of the pipeline
let embedderInstance = null;

export async function embedQuery(query) {
  if (!embedderInstance) {
    embedderInstance = await pipeline("feature-extraction", "Xenova/bge-small-en-v1.5");
  }
  const result = await embedderInstance(query, { pooling: "mean", normalize: true });
  return Array.from(result.data);
}

export async function retrieveTopChunks(queryVector, limit = 5) {
  const vectorSql = vectorToSql(queryVector);
  const { rows } = await pool.query(
    `SELECT id, content, metadata, (embedding <=> $1::vector) AS distance
     FROM kb_chunks
     ORDER BY embedding <=> $1::vector
     LIMIT $2`,
    [vectorSql, limit],
  );

  return rows.map((r) => ({
    ...r,
    similarity: 1 - Number(r.distance),
  }));
}
