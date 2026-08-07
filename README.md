# AME Bazaar AI Video Engine

## Purpose
The AME Bazaar AI Video Engine is an open-source, AI-first documentation framework designed to be the single source of truth for generating professional, cinematic commercial video prompts. By storing production rules, storytelling parameters, and visual reference schemas directly in a structured repository, it enables reasoning engines (like ChatGPT, Gemini, Claude, and Antigravity) to build consistent, continuous multi-scene video prompts without relying on long, repetitive chats.

## Architecture
This subsystem separates cinematic reasoning, platform constraints, and product/brand knowledge into independent, decoupled files:
- **SYSTEM**: Core roles, filmmaker principles, and operating rules.
- **ENGINE**: Operational pipelines including the Context Loader (token optimization) and Decision Engine.
- **KNOWLEDGE**: Standard layouts, database schemas, and metadata frontmatter conventions.
- **WORKFLOWS**: Execution steps and Git push policies.
- **TEMPLATES**: Model-specific structures (e.g., Google Flow Prompt Standard).

## Quick Start
To generate a new video production package, load this repository into your AI system's context and issue the following prompt:
```text
Read the repository instruction protocol, understand the system architecture, and follow the workflows to compile a Google Flow Production Package for: [Insert Campaign Brief Here]
```

## Repository Structure
```text
ame-bazaar-ai-video-engine/
├── SYSTEM/                 # Core role and operating guidelines
│   ├── system.md
│   └── operating_rules.md
├── ENGINE/                 # Subsystem modules
│   ├── decision_engine.md
│   ├── prompt_compiler.md
│   └── context_loader.md
├── KNOWLEDGE/              # Schema and metadata standards
│   ├── knowledge_schema.md
│   └── metadata_standard.md
├── WORKFLOWS/              # Execution flows and Git rules
│   ├── project_workflow.md
│   └── git_policy.md
├── TEMPLATES/              # Output format definitions
│   └── google_flow_standard.md
├── REFERENCE/              # Visual reference assets (images, videos)
├── OUTPUT/                 # Compiled production outputs
├── DOCS/                   # Subsidiary documentation
│   └── project_vision.md
├── ai_instruction_protocol.md  # Official entry point for AI systems
├── LICENSE                 # MIT License
└── README.md               # Main repository documentation
```

## Execution Flow
1. **AI Instruction Protocol**: AI reads the entry point protocol.
2. **Context Loader**: Scans the repository and loads only the required campaign/product files (minimizing tokens).
3. **Decision Engine**: Generates a Project Analysis and Production Strategy Report.
4. **User Approval**: User verifies the strategy.
5. **Prompt Compiler**: Generates the final multi-scene production package matching the Google Flow Prompt Standard.

## How AI Systems Should Use This Repository
Every AI assistant or autonomous developer agent interacting with this repository MUST:
1. **Read `ai_instruction_protocol.md`** first to establish execution order.
2. **Scan `SYSTEM/` and `ENGINE/`** to understand parameters and guidelines.
3. **Load only the required knowledge** matching the target campaign or product type.
4. **Generate the final Google Flow Production Package** (Production Brief, Storyboard, Scene List, prompts, transitions, VO, editing notes) conforming to the `TEMPLATES/google_flow_standard.md` format.
5. **Preserve strict scene continuity** across frames (no wardrobe resets, lighting changes, or showroom teleports).
6. **Prioritize reference assets** over descriptive text. Use the Reference Asset Index to ground scenes in reality rather than inventing visuals.

## Roadmap
1. [x] Core Architecture & Modularity Setup
2. [x] AI Instruction Protocol & Context Loader Implementation
3. [ ] Brand Bible & Color Schemes Mappings
4. [ ] Store Showroom Angles Reference Asset Map
5. [ ] First Pilot Production Campaign Run
