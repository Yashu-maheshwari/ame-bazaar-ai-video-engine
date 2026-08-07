# AME Bazaar AI Video Engine Subsystem

## Purpose
The AME Bazaar AI Video Engine is an independent software subsystem inside the AME Bazaar AI OS designed to transform campaign goals and product libraries into complete, cinematic, production-ready AI video compilation packages.

## Architecture
This subsystem is structured as a decoupled engine consisting of discrete modules to enforce single responsibility, maximize token efficiency, and preserve visual and narrative continuity across multi-scene cinematic commercial productions.

## Folder Structure
```text
ai_video_engine/
├── SYSTEM/           # Core role definitions and operating rules
│   ├── system.md
│   └── operating_rules.md
├── ENGINE/           # Project analysis and compilation components
│   ├── decision_engine.md
│   └── prompt_compiler.md
├── KNOWLEDGE/        # Database mappings and schema standards
│   └── knowledge_schema.md
├── WORKFLOWS/        # Subsystem lifecycle and git policies
│   ├── project_workflow.md
│   └── git_policy.md
├── TEMPLATES/        # Prompt templates (model-specific / custom)
├── REFERENCE/        # Store angles and visual reference assets
├── OUTPUT/           # Storyboards, scene lists, and compile outputs
└── DOCS/             # Subsystem internal documentation
```

## Module Responsibilities
- **SYSTEM**: Handles role validation, filmmaking principles, and visual continuity constraints.
- **ENGINE**: Evaluates briefs (Decision Engine) and compiles final packages (Prompt Compiler) for video models.
- **KNOWLEDGE**: Standardizes directory layouts, relationship mapping, and file metadata rules.
- **WORKFLOWS**: Defines step-by-step task processing, local verification, and Git push sequence policies.

## Execution Flow
1. **Decision Engine**: User request → Project & Production analysis report generated.
2. **User Approval**: Production plan confirmed by user.
3. **Prompt Compiler**: Compilation pipeline loaded → Storyboard, Shot List, prompts compiled.
4. **Git Persistence**: Output saved locally, committed, and pushed.

## Repository Standards
- File naming: Lowercase, underscore-separated (e.g., `brand_bible.md`).
- File headers: Must contain version, metadata frontmatter, owner, and dependency fields.
- Pushes: Never leave changes unpushed.

## Roadmap
1. [x] Subsystem Architecture Setup
2. [ ] Brand Bible & Design Tokens Integration
3. [ ] Showroom Angles & Reference Assets Map
4. [ ] Character Consistency Profiles Creation
5. [ ] First Campaign Production Brief run
