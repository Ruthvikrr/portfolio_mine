# RAG System — Interview Prep

Purpose: concise end-to-end guide to Retrieval-Augmented Generation (RAG) used in this repository, with architecture, key components, code pointers, and common interview Q&A.

## 1. High-level Overview
- Goal: combine a retrieval system (vector search over documents) with a large language model (LLM) so the model can answer questions grounded in a knowledge base.
- Flow: ingest → embed → store vectors → user query → embed query → retrieve top-k chunks → build prompt with context → LLM generates answer (often streamed).

## 2. Architecture & Components (conceptual)
- Ingestion: parse documents (PDF, DOCX, GitHub, text), chunk into passages, optionally filter/normalize.
- Embedding: convert chunks and queries to fixed-size vectors using an embedding model.
- Vector store: persistent store of embeddings + metadata (e.g., `pgvector` in Postgres). Supports nearest-neighbor search.
- Retriever: executes a top-k nearest neighbor query (k is the number of chunks returned per query).
- Reranker / Similarity scoring: optional step to re-score or filter retrieved chunks.
- Prompt builder: composes system prompt + retrieved context + user question and history.
- LLM / Chat model: consumes the prompt and emits streamed or batch responses.
- Tooling & SSE: server side may stream tokens via Server-Sent Events to the client.

## 3. Implementation Notes (this repo)
- Embedding pipeline: implemented in `rag-api/src/retrieval.js` using a Xenova pipeline model (`Xenova/bge-small-en-v1.5`) for query embeddings.
- Retriever: simple pgvector nearest-neighbor query in `rag-api/src/retrieval.js` (orders by `embedding <=> $1::vector`). See [rag-api/src/retrieval.js](rag-api/src/retrieval.js#L19).
- Top-k (`k`) used: default and explicit call is 5. The server calls `retrieveTopChunks(queryVector, 5)` in [rag-api/src/server.js](rag-api/src/server.js#L85) and the retriever signature also defaults to 5.
- Vector store: Postgres table `kb_chunks` with an `embedding` column; query uses `LIMIT` to control k.
- Prompting & routing: system/user prompt composition lives in `rag-api/src/prompt.js`; model routing logic is in the server code that chooses model options per query.
- Streaming: the server streams model output to clients using SSE in `rag-api/src/server.js`.

## 4. Key Files to Review (quick links)
- Retriever & embedding: [rag-api/src/retrieval.js](rag-api/src/retrieval.js#L19)
- Server (chat handler, top-k call, SSE streaming): [rag-api/src/server.js](rag-api/src/server.js#L1-L120)
- Prompt building: [rag-api/src/prompt.js](rag-api/src/prompt.js)
- Ingestion / embedding storage: [rag-api/src/embed-and-store.js](rag-api/src/embed-and-store.js)
- DB helpers: [rag-api/src/db.js](rag-api/src/db.js)

## 5. Important Concepts to Explain in an Interview
- Vector embeddings: numeric representations that preserve semantic similarity; choose model tradeoffs (speed vs. quality).
- Similarity metric: `pgvector` supports cosine/inner product/Euclidean; the repo uses the `<=>` operator (distance) and converts to a similarity score by `1 - distance`.
- Chunking strategy: window size, overlap, and why overlap helps long-context answers.
- Top-k retrieval: choosing `k` balances context richness vs. prompt length and noise—common values 3–10.
- Relevance thresholding: use a similarity threshold to avoid returning unrelated context.
- Prompt engineering: how to format retrieved chunks (source citation, truncation, ordering) and system instructions to avoid hallucination.
- Latency considerations: embedding and DB search latency; options: pre-compute embeddings, use approximate nearest neighbor (ANN) stores.
- Security & freshness: access control on KB, update pipelines for new docs, vector reindexing.

## 6. Typical Interview Questions & Suggested Answers
- Q: "Why use RAG instead of finetuning an LLM?"
  - A: RAG enables immediate knowledge updates without full-model retraining and keeps token costs lower by only conditioning on small relevant context.
- Q: "How do you choose `k`?"
  - A: Start with 3–5; increase if answers lack context, reduce if prompts exceed token limits or noise increases. Also use similarity thresholds and reranking.
- Q: "How to prevent hallucinations?"
  - A: Provide clear system instructions, include retrieved evidence with citations, enforce answer formats asking model to say "I don't know" when evidence is insufficient, and set a similarity floor.
- Q: "How to scale retrieval?"
  - A: Move to ANN indexes (FAISS, Milvus, Pinecone), partitioning, sharding, or use Postgres with tuned indexes; cache popular queries.

## 7. Short Code Walkthrough (what to point at during the interview)
1. `embedQuery()` in `rag-api/src/retrieval.js` — shows the embedding model and normalization.
2. `retrieveTopChunks()` in `rag-api/src/retrieval.js` — shows the SQL used for nearest-neighbor and the `LIMIT` (k).
3. `/chat` handler in `rag-api/src/server.js` — shows full flow: embed query → retrieveTopChunks(queryVector, 5) → build prompt → stream model output.

## 8. Diagrams (ASCII)
User → Server → embedQuery() → Postgres (kb_chunks) ← ingest pipeline
                                         ↓
                                   retrieveTopK (k=5)
                                         ↓
                                 prompt builder → LLM → streamed response

## 9. Practical Tips for the Interview
- Be able to explain tradeoffs: retrieval size (k), embedding model selection, vector store selection, latency vs. accuracy.
- Walk through a concrete example: question → show how similarity orders chunks → how answers reference chunk evidence.
- Prepare to recommend improvements: add reranker, semantic filters, ephemeral caching, and evaluation metrics (precision@k, MRR, answer-grounding rate).

## 10. Quick Further Reading (one-liners)
- RAG paper & blog posts: retrieval-augmented generation overview.
- Vector DB docs: `pgvector`, FAISS, Milvus, Pinecone.
- Prompting best practices: context window management and system messages.

---
File created: `RAG_INTERVIEW_PREP.md` — open it for copy/paste into your notes or to print.
