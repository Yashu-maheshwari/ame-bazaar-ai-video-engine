# AME Bazaar AI Video Engine — Future Roadmap

## Vision

Build a low-cost, prompt-first AI video production system that can turn a one-line idea into realistic, frame-connected short-form videos with minimal human effort.

The user should not need to invent scripts, scenes, camera directions, continuity instructions, captions, or creative concepts. The system should generate the production plan and the exact prompts/assets required. The human should mainly copy/paste, upload the required references, generate, review, and publish.

## Primary Use Cases

1. **Advocacy / Maheshwari Counsel**
   - Use the user's consistent avatar/presenter identity.
   - Generate educational legal Reels.
   - Keep the presenter visually and vocally consistent across recurring content.

2. **Coaching Center**
   - Use the wife's consistent avatar/presenter identity.
   - Generate educational, motivational, parent-facing and student-facing Reels.
   - Keep the presenter identity consistent across recurring content.

3. **AME Bazaar**
   - Create a dedicated fictional/brand-owned AI fashion influencer identity.
   - Combine the influencer with real AME Bazaar store/product references.
   - Real store/location/product assets remain authoritative; AI may create movement, camera work and presentation around those references.

4. **No-Person Content**
   - Product, store, educational, cinematic and informational Reels without an avatar.

5. **Future Independent Creator Channel**
   - Use a separate creator identity and content strategy for a potential monetized channel.

## Current Production Target

For the current phase, Google Flow is the primary manual generation tool.

The immediate goal is NOT API automation. The immediate goal is to prove a repeatable manual workflow that produces realistic, non-generic, frame-connected Reels.

Target workflow:

IDEA → AI-generated creative plan → reference selection → Flow prompt → generate clip → capture/save best end frame → use end frame + next scene reference → generate next clip → repeat → assemble Reel.

## Frame-to-Frame Continuity Standard

Each scene should maintain continuity through a reference chain:

- Previous scene end frame = continuity anchor.
- Current real-world reference = location/product/brand anchor.
- Avatar/character reference = identity anchor when a person is present.
- Prompt = action, camera, timing, dialogue/audio direction and transition intent.

Do not treat every scene as an unrelated generation.

The system should prefer short connected clips over one large uncontrolled generation when continuity matters.

## Google Flow Strategy

Use the strongest Flow feature/model combination available in the user's account at generation time.

Preferred controls when supported:

- First-frame to video.
- First + last-frame generation where supported.
- Ingredients/references.
- Avatar/character references where supported.
- Generated end frames reused as references for the next scene.
- Scene/clip extension only when it preserves the required continuity and does not degrade audio/visual quality.

Model/feature availability can change. The engine must check current Flow capabilities rather than hard-code assumptions.

## Audio Strategy

First test native Flow/Veo audio because current Veo generations support native sound, ambience and dialogue in supported configurations.

If a particular workflow produces unreliable speech/audio, use a separate voice layer (for example ElevenLabs or another suitable TTS provider) and synchronize it during assembly.

Audio quality is part of realism; it is not an afterthought.

## Realism Standard

The goal is:

- natural human presentation
- believable lighting and motion
- realistic camera movement
- consistent identity
- realistic store/product geometry
- natural speech and timing
- realistic ambient sound where appropriate
- no unnecessary "AI look"
- no invented store architecture when real references exist

The system should optimize for believable and professionally produced content, not make claims that AI-generated content is impossible to detect.

## Reference Asset Standard

Every important reference should have:

- stable reference ID
- human-readable filename
- category
- description
- preferred usage
- variants where necessary

Example:

`R003_STORE_ENTRANCE_FRONT_01.jpg`

`R004_WOMENS_SECTION_WIDE_01.jpg`

`R001_AME_BAZAAR_LOGO.png`

The GitHub repository is the knowledge/source-of-truth layer. Google Flow receives the actual uploaded media plus the generated prompt; the repository is not currently a live runtime connection to Flow.

## Prompt-First User Experience

The desired final user experience is:

> Give one short idea → receive a complete ready-to-generate Reel package.

The user should not need to supply creative direction unless they want to override the AI.

Example input:

`AME Bazaar ke liye women's monsoon fashion par ek 30 sec Reel banao.`

Expected package:

- concept
- hook
- script
- scene plan
- avatar selection
- reference selection
- continuity chain
- exact Google Flow prompts
- voice/audio direction
- captions
- CTA
- posting copy

## Content Director — Planned Core Module

The next major engine layer is a Content Director / Creative Director.

Its job is to convert a one-line user idea into a complete production package.

It should decide:

- content angle
- hook
- story structure
- presenter/avatar vs no-person mode
- scene count
- reference assets
- frame-to-frame continuity plan
- Flow generation method
- audio approach
- CTA
- final Reel structure

This module should reduce dependence on human creativity.

## Development Strategy

### Phase 1 — Blueprint / Prototype

Use Google AI Studio first to prototype and validate the Content Director and prompt-generation workflow.

Objectives:

- validate the UX
- validate the one-line prompt → production package logic
- test scene/continuity data structures
- test avatar/reference selection logic
- minimize Antigravity token consumption

Do not spend significant Antigravity tokens before the blueprint is stable.

### Phase 2 — Manual Google Flow Proof of Concept

Before building API automation, manually prove one short Reel end-to-end.

Initial POC should be approximately 20 seconds and use:

- one consistent avatar/presenter where applicable
- real AME Bazaar reference imagery for store scenes
- frame-to-frame continuity
- native Flow audio if quality is acceptable
- external voice only if required

Success criteria:

- looks like a believable real-world marketing video
- same identity remains consistent
- store looks like the real AME Bazaar store
- scene transitions feel connected
- audio is usable
- process is repeatable

### Phase 3 — Antigravity Implementation

After the AI Studio blueprint and manual Flow POC are validated, use Antigravity to implement the production-grade repository changes.

Antigravity should implement, not repeatedly redesign, the already validated architecture.

All meaningful changes must be committed and pushed to this repository.

### Phase 4 — Repeatable Manual Content Factory

Create reusable content recipes for:

- Advocacy
- Coaching
- AME Bazaar
- Creator/influencer
- No-person content

The operator should only provide a short topic/idea.

### Phase 5 — API Automation

Only after the manual system is reliable, investigate APIs/MCP/automation for supported providers.

Target future pipeline:

Idea → Content Director → Script → Avatar/Voice → Flow/Video generation → Assembly → QC → Ready-to-post output.

Automation must be provider-agnostic where practical so the system can change video providers without rebuilding the whole engine.

## Cost Strategy

Start manually with the existing Google Flow access and available credits.

Current Google AI Pro allocation is 1,000 Google Flow credits per Pro subscriber per month. If three separate Pro accounts are available, that represents 3,000 monthly credits across those accounts, subject to each account's own allocation and current Google terms. Credits do not automatically become one pooled account balance.

Prioritize cheap/fast models for experimentation and reserve high-cost Quality generations for shots where quality materially matters.

Do not buy additional services until the POC proves that the workflow creates useful content.

## Repository as Long-Term Memory

This roadmap is intentionally stored in GitHub so that a future AI assistant (ChatGPT, Gemini, Claude, Antigravity, or another authorized development agent) can reconstruct the project's direction without relying on chat history.

Future agents must read this roadmap together with:

- `README.md`
- `manifest.md`
- `DOCS/CURRENT_STATUS.md`
- `DOCS/NEXT_TASK.md`
- `KNOWLEDGE/brand_bible.md`
- `REFERENCE/reference_index.md`
- relevant `ENGINE/` specifications
- relevant campaign production packages

## Immediate Next Step

Do NOT start API automation yet.

First create and validate the Content Director + Frame Reference Chain blueprint in Google AI Studio. Then perform one manual 20-second Google Flow POC. Only after the POC is accepted should Antigravity implement the validated design.
