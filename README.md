# AME Bazaar AI Video Engine - AI Navigation Guide

## 1. Project Overview
The AME Bazaar AI Video Engine is a specialized, open-source, AI-first documentation framework. It serves as a machine-readable blueprint for generating high-fidelity, visually consistent, multi-scene cinematic commercial video prompts.

## 2. Purpose
This repository acts as the permanent knowledge database. It replaces repetitive, long prompt instruction blocks, allowing reasoning engines (such as Gemini, ChatGPT, Claude, and Antigravity) to understand cinematic requirements, store layout structures, and prompt styles on-demand.

## 3. Repository Architecture
The system decouples core reasoning, execution workflow pipelines, and brand/visual assets into distinct modules to maintain single responsibility and minimize token overhead.

## 4. Repository Folder Map
- [`SYSTEM/`](file:///D:/Projects/ame-bazaar-ai-video-engine/SYSTEM/): Core roles ([`system.md`](file:///D:/Projects/ame-bazaar-ai-video-engine/SYSTEM/system.md)), search priorities ([`operating_rules.md`](file:///D:/Projects/ame-bazaar-ai-video-engine/SYSTEM/operating_rules.md)), and model constraints ([`ai_access_protocol.md`](file:///D:/Projects/ame-bazaar-ai-video-engine/SYSTEM/ai_access_protocol.md)).
- [`ENGINE/`](file:///D:/Projects/ame-bazaar-ai-video-engine/ENGINE/): Decision and loader logic ([`context_loader.md`](file:///D:/Projects/ame-bazaar-ai-video-engine/ENGINE/context_loader.md), [`decision_engine.md`](file:///D:/Projects/ame-bazaar-ai-video-engine/ENGINE/decision_engine.md), [`prompt_compiler.md`](file:///D:/Projects/ame-bazaar-ai-video-engine/ENGINE/prompt_compiler.md)).
- [`KNOWLEDGE/`](file:///D:/Projects/ame-bazaar-ai-video-engine/KNOWLEDGE/): Data standards ([`knowledge_schema.md`](file:///D:/Projects/ame-bazaar-ai-video-engine/KNOWLEDGE/knowledge_schema.md)) and document schemas ([`metadata_standard.md`](file:///D:/Projects/ame-bazaar-ai-video-engine/KNOWLEDGE/metadata_standard.md)).
- [`WORKFLOWS/`](file:///D:/Projects/ame-bazaar-ai-video-engine/WORKFLOWS/): Operational steps ([`project_workflow.md`](file:///D:/Projects/ame-bazaar-ai-video-engine/WORKFLOWS/project_workflow.md)) and push sequences ([`git_policy.md`](file:///D:/Projects/ame-bazaar-ai-video-engine/WORKFLOWS/git_policy.md)).
- [`TEMPLATES/`](file:///D:/Projects/ame-bazaar-ai-video-engine/TEMPLATES/): Layout specifications ([`google_flow_standard.md`](file:///D:/Projects/ame-bazaar-ai-video-engine/TEMPLATES/google_flow_standard.md)).
- [`REFERENCE/`](file:///D:/Projects/ame-bazaar-ai-video-engine/REFERENCE/): Showroom and product reference media.
- [`OUTPUT/`](file:///D:/Projects/ame-bazaar-ai-video-engine/OUTPUT/): Scene plans, scripts, and compiled prompt packages.
- [`DOCS/`](file:///D:/Projects/ame-bazaar-ai-video-engine/DOCS/): subsidiary project briefs and roadmap logs.

## 5. AI Quick Start
> [!IMPORTANT]
> **If you are an AI assistant, read repository files in this exact sequence:**
> 1. Read [`ai_instruction_protocol.md`](file:///D:/Projects/ame-bazaar-ai-video-engine/ai_instruction_protocol.md) (execution entry point).
> 2. Read [`SYSTEM/ai_access_protocol.md`](file:///D:/Projects/ame-bazaar-ai-video-engine/SYSTEM/ai_access_protocol.md) (model constraints).
> 3. Read [`manifest.md`](file:///D:/Projects/ame-bazaar-ai-video-engine/manifest.md) (module relationships).
> 4. Load [`ENGINE/context_loader.md`](file:///D:/Projects/ame-bazaar-ai-video-engine/ENGINE/context_loader.md) (token optimization rules).
> 5. Load only files flagged by the Context Loader matching user request parameters. **Never scan the entire repository.**

## 6. Human Quick Start
To generate video prompts using this engine with ChatGPT, Gemini, or Claude:
1. Clone this repository locally or reference its public link.
2. In your AI prompt, tell the assistant: *"Load the AME Bazaar AI Video Engine repository. Read the `ai_instruction_protocol.md` and follow the guidelines to generate a cinematic production package for [Insert Brief here]."*
3. The AI will parse the repository rules, analyze the brief, and generate standard output templates.

## 7. Repository Execution Pipeline
`SYSTEM Rules` → `AI Access Protocol` → `Context Loader` → `Decision Engine (Brief Analysis)` → `User Strategy Approval` → `Prompt Compiler (Google Flow Prompt)` → `Git Push & Save`.

## 8. Context Loading Strategy
Refer to [`ENGINE/context_loader.md`](file:///D:/Projects/ame-bazaar-ai-video-engine/ENGINE/context_loader.md). AI must dynamically filter and load only target modules (e.g., loading only `KNOWLEDGE/products/women_sarees.md` when building a Saree campaign).

## 9. Google Flow Production Pipeline
Prompts are compiled to follow the exact sections in [`TEMPLATES/google_flow_standard.md`](file:///D:/Projects/ame-bazaar-ai-video-engine/TEMPLATES/google_flow_standard.md), creating clean, copy-pasteable prompt blocks containing camera movement, lighting, and scene actions.

## 10. Reference Asset Workflow
Descriptive text is secondary. Prompt compilers must ground scenes in real-world assets listed under the Reference Asset Index before adding fictional descriptions.

## 11. Scene Continuity Philosophy
Wardrobe, lighting, actors, and showroom display structures are locked. Scene N's starting frame must match the ending frame criteria of Scene N-1.

## 12. Token Optimization Philosophy
Avoid copying instruction files. Refer to structural files using file links and path references to minimize context token consumption.

## 13. Repository Standards
- File names: lowercase, underscore-separated.
- Metadata: YAML frontmatter required.
- Refactors: Modularity enforced, single responsibility per file.

## 14. Current Development Roadmap
- [x] Dedicated subsystem repo setup.
- [x] AI Access and Instruction Protocols.
- [x] Repository Manifest & Context Loader logic.
- [ ] Brand Bible & Design Tokens database.
- [ ] Showroom Layout Map & Reference Asset Index.

## 15. Contribution Guidelines
Submit Pull Requests containing singular feature extensions. Ensure modifications update [`DOCS/CHANGELOG.md`](file:///D:/Projects/ame-bazaar-ai-video-engine/DOCS/CHANGELOG.md) and conform to the metadata schemas.
