# Rahul Sharma - Work Sample Portfolio

Prepared for hiring managers and technical interview loops.

---

## Candidate Snapshot

- **Name:** Rahul Sharma  
- **Profile:** Data Scientist / AI Engineer  
- **Experience:** 5+ years in production ML, GenAI systems, and applied analytics  
- **Core themes:** Agentic AI, RAG, multimodal pipelines, MLOps, cloud deployment

---

## Project 01 - SkillSpring (TrainPI)

### Overview
SkillSpring is a full-stack AI learning and career guidance platform that helps users turn unstructured learning material into actionable outcomes. It includes content distillation, assessment generation, mastery tracking, career matching, and roadmap planning.

### Problem Solved
Learners and career switchers often have fragmented material and no reliable path from "learning content" to "role-ready action plan." SkillSpring addresses this gap through integrated learning + career intelligence.

### End-to-End System Scope
1. Learner uploads PDF and interacts with chat/distiller APIs.
2. Backend performs chunking, retrieval, and structured generation.
3. User receives summaries, quizzes, flashcards, lessons, and diagnostics.
4. Career layer parses resume, maps skills to O*NET roles, and generates upgrade plans.
5. Dashboard tracks progress, recommendations, and mastery state over time.

### Architecture Diagram
- `assets/artitecture_diagram/skillspring_sa_hl.pdf`
- `assets/artitecture_diagram/skillspring_sa.pdf`

### Demo
- https://skillspring001.vercel.app/

### GitHub
- https://github.com/rahul370139/easylearn

### Tech Stack
- Next.js, FastAPI, Groq, Cohere embeddings, Supabase Postgres/pgvector, Docker, Vercel

### Business Impact Narrative
- Converts passive content consumption into guided learning plans.
- Bridges education and employability using role-based skill-gap workflows.
- Provides recruiter-friendly proof of practical AI system design and deployment.

---

## Project 02 - AI Cargo

### Overview
AI Cargo is an agentic risk intelligence platform for pharmaceutical cold-chain shipments. It combines deterministic compliance rules and ML predictions, then orchestrates mitigation workflows through tool-using agents with human-in-the-loop controls.

### Problem Solved
Temperature-sensitive logistics requires immediate, compliant, and auditable decisions. Manual intervention is often slow and inconsistent for medium/high risk events.

### End-to-End System Scope
1. Ingest telemetry windows from Supabase with fallback data support.
2. Engineer risk features and score windows via deterministic + XGBoost fusion.
3. Route medium/high/critical events to LangGraph orchestration.
4. Execute specialized tools (compliance, routing, scheduling, insurance, triage, approvals, notifications).
5. Surface outcomes in FastAPI + React dashboard with traceability and audit logs.

### Architecture Diagram
- `assets/artitecture_diagram/aicargo_sa.pdf`
- `assets/artitecture_diagram/aicargo_df.pdf`

### Demo
- https://ai-cargo-monitor-prod.vercel.app/

### GitHub
- https://github.com/rahul370139/SmithAgenticAIChallenge

### Tech Stack
- Python, FastAPI, LangGraph, XGBoost, SHAP, Optuna, Supabase, React, Tailwind

### Business Impact Narrative
- Improves intervention speed for high-risk cold-chain incidents.
- Adds compliance transparency through RAG-backed validation and logging.
- Demonstrates practical agentic orchestration with governed human approval.

---

## Project 03 - Doc2Data

### Overview
Doc2Data is a healthcare document-to-JSON extraction platform that processes CMS-1500 and UB-04 forms using lane-based extraction, alignment, OCR, validation, and targeted rescue logic.

### Problem Solved
Healthcare form extraction is noisy and expensive when every document is forced through the same OCR pipeline. Doc2Data adapts extraction strategy per document type and quality signal.

### End-to-End System Scope
1. Upload PDF/image through Next.js frontend.
2. LangGraph identifies form type and chooses extraction lane (widgets, digital text, scan OCR, generic).
3. Alignment + OCR pipeline executes with quality gates.
4. Validation pass identifies uncertain fields.
5. Targeted VLM rescue runs only on selected fields.
6. Final output returns structured fields, metadata, validation notes, and debug traces.

### Architecture Diagram
- `assets/artitecture_diagram/doc2data_sa.pdf`

### Demo
- https://thinkray.space

### GitHub
- https://github.com/rahul370139/doc2data

### Tech Stack
- FastAPI, Next.js, LangGraph, Florence-2 OCR, VLM rescue, Docker

### Business Impact Narrative
- Reduces extraction time from multi-minute runs to production-viable latency.
- Improves reliability with lane routing, validation, and confidence-aware rescue.
- Produces integration-ready JSON for downstream healthcare workflows.

---

## Comparative Strength Across Work Samples

- **SkillSpring:** Product-oriented full-stack GenAI with learning + career intelligence.
- **AI Cargo:** Agentic operations and compliance under real-world risk constraints.
- **Doc2Data:** Multimodal document AI with robust extraction and quality controls.

Together, these projects show system design depth across user-facing UX, AI orchestration, data pipelines, and production delivery.

---

## Link Placeholders (To Be Finalized)

- AI Cargo demo: `Added`
- Additional repository links (if needed): `[Add GitHub Link]`
- External architecture links (if moved): `[Add External URL]`

---

## Contact

- Email: rahul11s@umd.edu  
- LinkedIn: https://linkedin.com/in/rahul-sharma--  
- GitHub: https://github.com/rahul370139  
