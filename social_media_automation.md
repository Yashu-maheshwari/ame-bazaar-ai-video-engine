# AI Reel Production Director: Social Media Automation Architecture (V2)

> **Document Status**: Production Freeze Architecture & Automation Roadmap  
> **Source of Truth**: [`V2_SPECIFICATION.md`](file:///C:/Users/user/antigravity/AI-REEL-VIDEO-DESIGN/V2_SPECIFICATION.md)  
> **Runtime Environment**: Google AI Studio & Antigravity IDE  
> **Generation Engine**: Google Flow / Google Veo Video Generation Pipeline  

---

## 1. System Overview & Core Philosophy

The **AI Reel Production Director** is a modular, continuity-first production planning and prompt compiler system designed for short-form multi-scene video Reels (~15–30 seconds, 3 connected scenes).

### The Realism & Continuity Hierarchy
All scene planning, asset resolution, and prompt compilation adhere to this strict hierarchy:
$$\text{REALISM} > \text{LOCATION AUTHENTICITY} > \text{CHARACTER CONSISTENCY} > \text{CONTINUITY} > \text{CONTENT CLARITY} > \text{CINEMATIC STYLE}$$

### Privacy & Reference Asset Security
* **No Public URLs**: Private/personal identity anchors, physical coaching center references, and store environment images are identified by structured internal **Asset IDs** (e.g. `WIFE_TEACHER_MASTER`, `REAL_STORE_MASTER`) and managed locally. They are never exposed via public links.
* **Native Flow Identity**: Where applicable, native platform identity anchors (e.g., Native Google Flow / Gemini Avatar) serve as the primary source of truth without requiring separate manual image uploads.

---

## 2. Four Production Profiles

| Profile ID | Profile Name | Target Use Case | Identity Source | Location Mode |
| :--- | :--- | :--- | :--- | :--- |
| **`wife-teacher`** | **Wife AI Teacher** | 15s educational coaching Reels (Maths, Accounts, Science, English) in front of an authentic whiteboard. | `WIFE_TEACHER_MASTER` (Indian educator identity anchor) | `COACHING_CENTER_MASTER` (Physical Location Lock) |
| **`ame-bazaar`** | **AME Bazaar AI Influencer** | Organic fashion creator Reels visiting the real family garments store in Kirari, Delhi. | `AME_BAZAAR_INFLUENCER_MASTER` (Indian creator identity anchor) | `REAL_STORE_MASTER` (Physical Location Lock) |
| **`maheshwari-counsel`** | **Maheshwari Counsel (Lawyer AI)** | Educational legal-information Reels explaining concepts simply to common citizens. | **Native Google Flow Avatar** (Formal advocate persona) | `Realistic Professional Legal Setting` (Topic-appropriate) |
| **`no-person`** | **No-Person Cinematic** | Ultra-high-end product showcases, fabric textures, and atmospheric commercial B-roll. | **Zero Humans** (No avatars, no faces) | `NO_PERSON_CINEMATIC_STYLE_ANCHOR` (Style-Locked) |

---

## 3. Profile-Specific Production Rules

### 3.1 Wife AI Teacher (Coaching Centre)
* **Educational Vocabulary**: Natural Delhi Hinglish in Latin script (*Maths*, *chapter*, *concept*, *formula*, *solve*, *marks*, *exam*, *trick*, *step*). Avoid Devanagari script for reliable TTS synthesis.
* **Whiteboard Continuity**: Whiteboard position, border, and height remain locked to `COACHING_CENTER_MASTER`.
* **Pedagogical Naturalness**: Natural educator demeanor with marker in hand, alternating between student address and whiteboard explanation.

### 3.2 AME Bazaar AI Influencer
* **Store Authenticity**: Source of truth is the real AME Bazaar store in Kirari, Delhi (entrance, racks, billing counter). Never invent a generic luxury showroom or redesign store architecture.
* **Product Boundaries**: Strictly garments (**Men's wear**, **Women's wear**, **Kids' wear**). Never invent grocery, electronics, or unrelated items.
* **Claim-Safety Mandate**: Prohibit auto-generated superlatives (*"best prices"*, *"number one in India"*, *"cheapest in Delhi"*). Use grounded creator phrasing (*"Guys, agar aap women's wear dekh rahe ho, AME Bazaar mein ek baar collection check kar sakte ho."*).
* **Smartphone Aesthetic**: Eye-level handheld camera with natural micro-movement, organic autofocus, and realistic ambient lighting.

### 3.3 Maheshwari Counsel (Lawyer AI)
* **Native Flow Identity**: Prompts compile around the user's native Google Flow / Gemini avatar without requiring manual master reference uploads.
* **Advocate Appearance**: Formal black advocate coat, crisp white shirt, professional legal presence, realistic human proportions (no influencer styling, no superhero styling, no beauty filters).
* **Source of Truth Rule**: Treat user-supplied legal text as truth. Strictly avoid inventing statutes, sections, case laws, judgments, penalties, or procedures.
* **Claim-Safety**: Never claim *"top advocate"*, *"guaranteed win"*, or *"100% case victory"*. Keep content strictly educational.

### 3.4 No-Person Cinematic (Style-Locked)
* **Zero Humans Mandate**: Zero people, no avatars, no faces, no presenters.
* **Style-Locking**: Multi-reference mode locking lighting temperature, shallow macro depth-of-field, color grading, and lens characteristics across all scenes.
* **Audio**: Atmospheric cinematic audio / ambient sound effects. Spoken dialogue is omitted.

---

## 4. Permanent Reference & Asset Hierarchy

```text
[Master Identity Anchors]
   ├── WIFE_TEACHER_MASTER               (Teacher Identity & Persona)
   ├── AME_BAZAAR_INFLUENCER_MASTER      (Fashion Creator Identity)
   └── Native Google Flow Avatar         (Advocate Identity Source)

[Master Environment Anchors]
   ├── COACHING_CENTER_MASTER            (Classroom & Fixed Whiteboard)
   ├── REAL_STORE_MASTER                 (Kirari Store Layout, Racks, Counter)
   ├── Professional Legal Setting        (Topic-Adaptive Chambers / Office)
   └── NO_PERSON_CINEMATIC_STYLE_ANCHOR  (Cinematic Lighting & Lens Continuity)

[Voice Anchors (Optional / TTS Ready)]
   ├── WIFE_TEACHER_VOICE_MASTER         (Natural Delhi Hinglish Teacher)
   ├── AME_BAZAAR_INFLUENCER_VOICE       (Casual Social-Media Creator)
   ├── Indian Advocate Voice             (Calm, Knowledgeable Legal Tone)
   └── Atmospheric Audio                 (No Speech / Cinematic Ambience)
```

---

## 5. Frame-to-Frame Continuity Engine

The system enforces a 3-scene frame chaining sequence (~5 seconds per scene, ~15–30 seconds total):

```text
[Scene 1: Hook & Setup]
   ├── Reference: Master Reference(s) or Native Avatar Anchor
   ├── Generation: Render Scene 1 in Google Flow (~5s)
   └── Save Artifact: frame_scene_1.png

[Scene 2: Core Concept / Demonstration]
   ├── Reference: Master Reference(s) + frame_scene_1.png
   ├── Generation: Render Scene 2 in Google Flow (~5s)
   └── Save Artifact: frame_scene_2.png

[Scene 3: Takeaway & Call to Action]
   ├── Reference: Master Reference(s) + frame_scene_2.png
   ├── Generation: Render Scene 3 in Google Flow (~5s)
   └── Save Artifact: frame_scene_3.png
```

---

## 6. Google Flow / Veo Prompt Compiler

Every generated prompt is compiled in a strict, non-duplicated order with dialogue strictly separated:

$$\text{Identity Anchor} \rightarrow \text{Environment Reference} \rightarrow \text{Continuity Frame Link} \rightarrow \text{Action} \rightarrow \text{Camera Direction} \rightarrow \text{Realism Spec} \rightarrow \text{Negative Constraints}$$

* **Anti-Duplication**: Prohibits repetitive phrasing (e.g. never outputs *"Influencer performs Influencer stands..."*).
* **Lightweight Lip-Sync Note**: Visual prompts include only a concise lip movement instruction, keeping full dialogue in the structured `dialogue` JSON property.

---

## 7. Legal & Educational Fact-Source Rules

1. **Verified-Source-Only Mandate**: The AI compiler must never present unverified facts or invent statutory provisions.
2. **No Invention Rule**: If specific legal sections, case citations, or syllabus derivations are not provided, the compiler uses general educational concepts.
3. **Verification Required Flag**: Any factual assertion requiring statutory confirmation is marked with `[Requires statutory verification]` prior to publication.

---

## 8. Realism & Visual Integrity Rules

* **Natural Skin Texture**: Realistic pores, natural Indian skin tones, and organic imperfections.
* **No Plastic AI Skin**: Strict negative prompting against beauty filters, uncanny airbrushing, and wax-like surfaces.
* **Organic Motion**: Natural blinking, realistic eye saccades, natural breathing micro-movement, and authentic fabric draping.
* **Smartphone & Locked Camera Language**: Handheld smartphone framing for influencers; stable locked tripod framing for teachers and legal counsel; macro rack focus for cinematic product sequences.

---

## 9. Quality Assurance (QA) Engine

The automated QA engine ([`src/lib/qaCheck.ts`](file:///C:/Users/user/antigravity/AI-REEL-VIDEO-DESIGN/src/lib/qaCheck.ts)) runs 10+ deterministic checks before presenting a plan:
1. `Location / Style Lock Check`: Validates physical location lock or style-lock active state.
2. `3-Scene Structure Check`: Verifies exactly 3 connected scenes generated.
3. `Master Character & Persona Check`: Confirms identity anchor binding.
4. `Master Environment Check`: Verifies location anchor or setting specification.
5. `Voice / Audio Anchor Check`: Ensures voice profile or atmospheric audio definition.
6. `Continuity Frame Linking Check`: Enforces `frame_scene_1.png` and `frame_scene_2.png` references for Scenes 2 & 3.
7. `Dialogue & Visual Action Completeness`: Validates presence of dialogue and action descriptions.
8. `Camera Instruction Specificity`: Confirms shot type, distance, angle, and movement.
9. `Continuity Instruction Specificity`: Checks continuity guidance text.
10. `Zero-Human Check (Profile 4)`: Validates zero-human compliance for No-Person Cinematic plans.

---

## 10. Manual Operator SOP (Standard Operating Procedure)

```text
[Step 1: Select Profile & Enter Topic]
   └── Open Reel Director UI -> Select preset -> Enter concept.

[Step 2: Generate & Review Production Plan]
   └── Check QA score (must be >= 90% and Production Ready).
   └── Review dialogue and Google Flow prompts.

[Step 3: Google Flow Execution]
   ├── Scene 1: Paste Prompt -> Attach Master References -> Generate -> Export frame_scene_1.png
   ├── Scene 2: Paste Prompt -> Attach Master References + frame_scene_1.png -> Generate -> Export frame_scene_2.png
   └── Scene 3: Paste Prompt -> Attach Master References + frame_scene_2.png -> Generate -> Export frame_scene_3.png

[Step 4: Post-Production & Assembly]
   ├── Concatenate scenes (Scene 1 + Scene 2 + Scene 3 = ~15s video).
   ├── Overlay audio/dialogue track (voice recording or optional TTS layer).
   └── Review visual continuity, lip sync, and claim safety before posting.
```

---

## 11. Current Phase vs. Future Automation Phases

```mermaid
flowchart TD
    subgraph Phase1["Current Phase: Manual Production (Validated V2)"]
        A[User Concept Input] --> B[AI Reel Production Director]
        B --> C[Structured Plan & QA Verification]
        C --> D[Operator in Google Flow / Veo]
        D --> E[Concatenation & Manual Social Media Publish]
    end

    subgraph Phase2["Future Phase: API & n8n Automation"]
        F[Scheduled / Webhook Trigger] --> G[Headless AI Reel Compiler API]
        G --> H[n8n Workflow Orchestrator]
        H --> I[Google Flow / Veo Automated Generation Node]
        I --> J[Video Stitching & Optional ElevenLabs Audio Node]
        J --> K[Instagram Graph API / YouTube Shorts Publisher]
    end
```

### Future Automation Notes
* **Optional ElevenLabs Layer**: ElevenLabs voice cloning can serve as an optional post-processing audio synthesis step for automated pipelines.
* **n8n Orchestration**: The structured JSON output schema is directly consumable by n8n HTTP Request and Function nodes.

---

## 12. Known Limitations & Manual Verification Boundary

| Area | Application-Enforced (Deterministic) | Operator Manual Verification (Stochastic Video Engine) |
| :--- | :--- | :--- |
| **Prompt Structure** | Exact ordering, anti-duplication, and parameter consistency. | Visual check that Veo follows prompt weights without drifting. |
| **Continuity Linking** | Enforces `frame_scene_N.png` chain in instructions. | Operator must export the exact last frame of Scene $N-1$ and feed it to Scene $N$. |
| **Claim Safety** | Eliminates exaggerated claims and superlatives in copy. | Operator ensures on-screen graphics (if any) match claim-safe copy. |
| **Visual Artifacts** | Prohibits plastic skin and morphing in negative prompts. | Operator inspects video for physical artifacts, limb warping, or facial drift. |
| **Fact Accuracy** | Prevents invented statutes or false claims in prompts. | Legal/educational content must be verified against primary sources before posting. |

> **Critical Note on AI Video Generation**: Video generation models inherently possess stochastic variance. The AI Reel Production Director guarantees prompt and continuity structure upstream; final visual QA remains the responsibility of the operator.

---

## 13. Antigravity Implementation Notes

* **Porting Compatibility**: All backend rules in [`server.ts`](file:///C:/Users/user/antigravity/AI-REEL-VIDEO-DESIGN/server.ts) and types in [`src/types.ts`](file:///C:/Users/user/antigravity/AI-REEL-VIDEO-DESIGN/src/types.ts) are self-contained and ready for Antigravity sidecar, rule, or skill encapsulation.
* **Zero Regression Principle**: Any future profile additions must extend the existing schema without altering the validation logic of Profiles 1–4.
