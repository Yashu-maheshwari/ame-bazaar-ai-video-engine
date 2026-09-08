# AME Bazaar AI Video Engine - AI INSTRUCTION PROTOCOL
Version: 1.0

# AI INSTRUCTION PROTOCOL

--------------------------------------------------
PURPOSE
--------------------------------------------------

This document is the official entry point for every AI system (ChatGPT, Gemini, Claude, Antigravity, and future AI assistants) interacting with the AME Bazaar AI Video Engine.

Never begin repository processing without reading this protocol.

--------------------------------------------------
MISSION
--------------------------------------------------

The objective is to generate Google Flow prompts that produce realistic, connected commercial videos inside the original AME Bazaar showroom.

The repository is the permanent source of truth. The AI model is only responsible for reasoning over repository knowledge.

--------------------------------------------------
EXECUTION ORDER
--------------------------------------------------

Always execute the following order:
1. Read `SYSTEM/` (system rules, operating rules).
2. Read `WORKFLOWS/` (project workflow, git policy).
3. Read `KNOWLEDGE/knowledge_schema.md` (knowledge database rules).
4. Read `ENGINE/context_loader.md` (token optimization details).
5. Identify the user request.
6. Load ONLY the required knowledge modules.
7. Read `TEMPLATES/google_flow_standard.md`.
8. Compile the production package.
9. Generate the final Google Flow prompt.

Never skip this sequence.

--------------------------------------------------
CONTEXT LOADING
--------------------------------------------------

Never load the complete repository. Only load the files required for the requested task. Avoid unnecessary context, reuse existing knowledge, and minimize token consumption.

--------------------------------------------------
REFERENCE FIRST
--------------------------------------------------

If reference images or reference videos exist, they always have higher priority than descriptive text. Never redesign the AME Bazaar showroom or invent layouts. Always preserve:
- Store layout
- Lighting setup
- Character appearances
- Camera language
- Brand identity

--------------------------------------------------
CONTINUITY
--------------------------------------------------

Treat every commercial as one continuous production. Scene 02 must continue Scene 01, and Scene 03 must continue Scene 02. Never restart the environment or change wardrobe, lighting, camera style, or showroom unless explicitly requested.

--------------------------------------------------
OUTPUT STANDARD
--------------------------------------------------

The final output must always be a **Google Flow Production Package** containing:
1. Production Goal
2. Scene Goal
3. Reference Assets
4. Google Flow Prompt
5. Transition Notes
6. Quality Checklist

--------------------------------------------------
TOKEN OPTIMIZATION
--------------------------------------------------

Never duplicate repository knowledge. Reference existing modules whenever possible, and only include information necessary for the requested scene.

--------------------------------------------------
SUCCESS
--------------------------------------------------

The protocol is successful when any supported AI can generate consistent Google Flow prompts from the repository without relying on previous conversation history.

--------------------------------------------------
RECOVERED CONTEXT & OPERATIONAL GUIDES
--------------------------------------------------

For comprehensive recovered project history, architectural decisions, and ecosystem context:
- See `PROJECT_CONTEXT_RECOVERY.md` (file:///C:/Users/admin/antigravity/AI-REEL-VIDEO-DESIGN/PROJECT_CONTEXT_RECOVERY.md)
- See `AGENTS_CONTEXT.md` (file:///C:/Users/admin/antigravity/AI-REEL-VIDEO-DESIGN/AGENTS_CONTEXT.md) for quick operational onboarding
