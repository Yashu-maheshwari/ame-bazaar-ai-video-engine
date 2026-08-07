# AME Bazaar AI Video Engine - CONTEXT LOADER
Version: 1.0

# CONTEXT LOADER

--------------------------------------------------
MISSION
--------------------------------------------------

The Context Loader is responsible for minimizing token usage.

Never load the complete repository. Load only the minimum knowledge required for the current task.

--------------------------------------------------
OPERATIONAL WORKFLOW
--------------------------------------------------

Every request begins with a Repository Scan.

Determine:
1. Project Type
2. Required Knowledge Modules
3. Required Reference Assets
4. Required Templates
5. Required Engine Modules
6. Build Context Package
7. Pass Context Package to Decision Engine

--------------------------------------------------
CONTEXT PACKAGE STANDARD
--------------------------------------------------

The Context Package contains only:
- Required Knowledge Files
- Required Reference Assets
- Required Templates
- Required Engine Rules

Never include unnecessary files.

--------------------------------------------------
TOKEN OPTIMIZATION RULES
--------------------------------------------------
- **Minimize Scope**: Select files strictly by matching tags and campaign requirements.
- **Reference Over Inclusion**: Reference path URLs instead of copying content.
- **No Duplicate Loads**: Never reload files already present in the Context Package.

--------------------------------------------------
MODULE LOADING PRIORITY
--------------------------------------------------
1. **SYSTEM** (`SYSTEM/system.md`, `SYSTEM/operating_rules.md`)
2. **PROJECT WORKFLOW** (`WORKFLOWS/project_workflow.md`)
3. **KNOWLEDGE SCHEMA** (`KNOWLEDGE/knowledge_schema.md`)
4. **Required Knowledge** (Matched campaign/product/store specs)
5. **Required References** (Matched asset indices)
6. **Decision Engine** (`ENGINE/decision_engine.md`)
7. **Prompt Compiler** (`ENGINE/prompt_compiler.md`)

--------------------------------------------------
OUTPUT STANDARD
--------------------------------------------------
Every Context Loader run must output:
- **Loaded Modules**: List of relative paths included.
- **Skipped Modules**: List of directories/files ignored.
- **Reason**: Rationale for selection (e.g., target product type match).
- **Estimated Token Reduction**: Calculation of token savings vs. full repository load.
