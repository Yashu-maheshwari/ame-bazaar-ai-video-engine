# AI Agent Operational Context — AI REEL VIDEO DESIGN

> **Audience**: Autonomous AI coding and reasoning agents interacting with this repository.  
> **Source of Truth**: [`PROJECT_CONTEXT_RECOVERY.md`](file:///C:/Users/admin/antigravity/AI-REEL-VIDEO-DESIGN/PROJECT_CONTEXT_RECOVERY.md) and [`V2_SPECIFICATION.md`](file:///C:/Users/admin/antigravity/AI-REEL-VIDEO-DESIGN/V2_SPECIFICATION.md)  
> **Status**: Production Freeze & Verified Context  

---

## 1. What This Project Is

**AI REEL VIDEO DESIGN** (also known as **AI Video OS V2** / **AI Reel Production Director**) is a continuity-first production planning and prompt compiler application. It compiles structured, 3-scene (~15–30s total) short-form video Reel plans for execution on **Google Flow / Google Veo**.

The system prevents temporal drift, facial warping, and environmental distortion across scenes by chaining reference frames (`frame_scene_1.png` into Scene 2, `frame_scene_2.png` into Scene 3).

---

## 2. Four Production Profiles

1. **`wife-teacher` (Wife AI Teacher)**:
   - Relatable Indian female educator in a physical Delhi coaching center.
   - Whiteboard position, room lighting, and teaching desk are locked.
   - Natural Hinglish dialogue with pedagogical vocabulary.
2. **`ame-bazaar` (AME Bazaar AI Influencer)**:
   - Authentic Indian creator visiting the real AME Bazaar garments store in Kirari, Delhi.
   - Physical location lock on store entrance, racks, and billing counter.
   - Garments only (Men's, Women's, Kids' wear). Prohibits superlatives and fake claims.
3. **`maheshwari-counsel` (Maheshwari Counsel - Lawyer AI)**:
   - Formal Indian advocate persona (black coat, white shirt) using native Google Flow / Gemini avatar.
   - **Source-First Mandate**: Every dialogue sentence must trace back via `factIds` to the structured `verifiedFacts` sheet with authoritative citations (India Code / Supreme Court judgments).
   - **BCI Guardrails**: Mandatory hard block on client solicitation, fee mentions, victory claims, or consultation booking.
4. **`no-person` (No-Person Cinematic)**:
   - Macro apparel details, fabric textures, and atmospheric B-roll.
   - Zero humans, zero presenters. Style-locked camera and color grade.

---

## 3. How The System Is Structured

- **Frontend (`src/`)**: React 19 + Vite 6 + Tailwind CSS 4.
  - [`src/components/ReelDirector.tsx`](file:///C:/Users/admin/antigravity/AI-REEL-VIDEO-DESIGN/src/components/ReelDirector.tsx): Studio UI to select profile, prompt topic, and compile plan.
  - [`src/components/ResultViewer.tsx`](file:///C:/Users/admin/antigravity/AI-REEL-VIDEO-DESIGN/src/components/ResultViewer.tsx): Scene prompt cards, camera instructions, frame chain links, and QA scores.
  - [`src/components/PermanentAssetsManager.tsx`](file:///C:/Users/admin/antigravity/AI-REEL-VIDEO-DESIGN/src/components/PermanentAssetsManager.tsx): Master asset locker.
- **Backend Server ([`server.ts`](file:///C:/Users/admin/antigravity/AI-REEL-VIDEO-DESIGN/server.ts))**: Express 4 server calling Gemini 2.5 Flash via `@google/genai`, enforcing structured JSON (`reelSchema`).
- **QA Engine ([`src/lib/qaCheck.ts`](file:///C:/Users/admin/antigravity/AI-REEL-VIDEO-DESIGN/src/lib/qaCheck.ts))**: 10+ deterministic quality checks scoring production readiness. Score must be >= 90% to be production-ready.
- **Subsystems**:
  - `ENGINE/`: Decision engine, prompt compiler, continuity rules, production planner.
  - `KNOWLEDGE/`: Brand bible, reference standards, legal source registry.
  - `WORKFLOWS/`: Google Flow handoff protocol, store collection protocol.
  - `REFERENCE/`: Reference catalog indexing 18 physical store visual assets.

---

## 4. What Has Already Been Implemented

- Full React 19 web application with profile selection, interactive prompt cards, and one-click copy actions.
- Express server supporting Gemini 2.5 Flash API with schema-governed output.
- Complete QA engine with 10+ validation rules enforcing location lock, frame chaining, dialogue presence, and legal fact sheet verification.
- Permanent BCI non-solicitation rules and Source-First Legal Content Pipeline.
- Local n8n instance (port 5678) with active 27-node Social Media Automation Engine and 5-stage daily morning sync pipeline.
- 4 global MCP servers: `github-mcp-server`, `n8n-mcp`, `meta-ads`, and `playwright`.

---

## 5. What Must NOT Be Changed Casually

1. **DO NOT weaken the Realism & Continuity Hierarchy**:
   $$\text{REALISM} > \text{LOCATION AUTHENTICITY} > \text{CHARACTER CONSISTENCY} > \text{CONTINUITY} > \text{CONTENT CLARITY} > \text{CINEMATIC STYLE}$$
2. **DO NOT alter the 3-Scene Frame Chaining Structure**: Scene 2 must reference `frame_scene_1.png` and Scene 3 must reference `frame_scene_2.png`.
3. **DO NOT invent fake legal remedies or remove BCI guardrails**: For Maheshwari Counsel, legal propositions must remain grounded in `verifiedFacts` with statutory citations. Never allow promotional CTAs.
4. **DO NOT invent store environments**: The physical store in Kirari, Delhi is the permanent source of truth. Do not convert it into a generic Western luxury boutique.
5. **DO NOT embed spoken dialogue directly into visual prompt strings**: Keep dialogue in the `dialogue` property, leaving `googleFlowPrompt` for visual/action/lighting/camera directions with brief lip-sync notes.
6. **DO NOT expose secrets**: Never print, commit, or copy API keys, tokens, passwords, private keys, or `.env` values.

---

## 6. Available Tools & MCP Servers

- **`github-mcp-server`**: Manage Git repos, issues, pull requests, and code search on GitHub.
- **`n8n-mcp`**: Interface directly with the local n8n instance at `http://localhost:5678` (query, validate, test workflows).
- **`meta-ads`**: Query Meta Graph and Ads APIs for campaigns, adsets, creatives, and audience insights.
- **`playwright`**: Run headless Chromium browser automation to inspect web pages, test UI rendering, and capture screenshots.
- **Skills**: `ame-ai-discovery-content-engine` (16-layer content optimizer), `ame-pragmatic-execution-optimizer` (fast execution governor), `digital-retail-growth-specialist` (Kirari retail marketing), and `outcome-loop` (iterative goal completion).

---

## 7. Key Project Files Reference

- **Specifications**: [`V2_SPECIFICATION.md`](file:///C:/Users/admin/antigravity/AI-REEL-VIDEO-DESIGN/V2_SPECIFICATION.md) & [`social_media_automation.md`](file:///C:/Users/admin/antigravity/AI-REEL-VIDEO-DESIGN/social_media_automation.md)
- **AI Entry Protocol**: [`ai_instruction_protocol.md`](file:///C:/Users/admin/antigravity/AI-REEL-VIDEO-DESIGN/ai_instruction_protocol.md)
- **Recovered Master Context**: [`PROJECT_CONTEXT_RECOVERY.md`](file:///C:/Users/admin/antigravity/AI-REEL-VIDEO-DESIGN/PROJECT_CONTEXT_RECOVERY.md)
- **Backend**: [`server.ts`](file:///C:/Users/admin/antigravity/AI-REEL-VIDEO-DESIGN/server.ts)
- **Types**: [`src/types.ts`](file:///C:/Users/admin/antigravity/AI-REEL-VIDEO-DESIGN/src/types.ts)
- **QA Engine**: [`src/lib/qaCheck.ts`](file:///C:/Users/admin/antigravity/AI-REEL-VIDEO-DESIGN/src/lib/qaCheck.ts)
- **UI Components**: [`src/components/`](file:///C:/Users/admin/antigravity/AI-REEL-VIDEO-DESIGN/src/components/)

---

## 8. What Remains Pending

1. Dry run of the local Reel Director UI via `npm run dev` and verification of generation for all 4 profiles.
2. Ingesting additional physical reference photos for Kirari store showroom racks and teacher whiteboard into `REFERENCE/assets/`.
3. Phase 2 headless video compilation API connecting `server.ts` output to n8n webhook nodes once automated video generation APIs are activated.

---

## 9. For Deeper Context

For full historical rationale, backup provenance, and architectural context, see:
- [`PROJECT_CONTEXT_RECOVERY.md`](file:///C:/Users/admin/antigravity/AI-REEL-VIDEO-DESIGN/PROJECT_CONTEXT_RECOVERY.md)
