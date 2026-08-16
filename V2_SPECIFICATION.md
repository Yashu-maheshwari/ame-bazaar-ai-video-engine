# V2 Specification: AI Reel Production Director
**System Architecture, Continuity Engine & Production Compiler Freeze Specification**

> **Document Status**: Production Freeze Specification  
> **Target Runtime**: Google AI Studio & Antigravity  
> **Scope**: Validated Production Workflows for `Wife AI Teacher`, `AME Bazaar AI Influencer`, and `Maheshwari Counsel (Lawyer AI)`  
> **Engine Compatibility**: Google Flow / Google Veo Video Generation Pipeline  

---

## 1. System Overview & Core Philosophy

The **AI Reel Production Director** is a continuity-first production planning and prompt compiler system engineered to generate short-form multi-scene video Reels (~15–30 seconds, 3 connected scenes) using Google Flow.

### The Realism & Continuity Hierarchy
All scene planning and prompt compilation strictly adhere to the following priority hierarchy:
$$\text{REALISM} > \text{LOCATION AUTHENTICITY} > \text{CHARACTER CONSISTENCY} > \text{CONTINUITY} > \text{CONTENT CLARITY} > \text{CINEMATIC STYLE}$$

---

## 2. Production Profiles

### Profile 1: Wife AI Teacher (Coaching Centre)
* **Primary Goal**: Create realistic, engaging, educationally sound 15-second coaching Reels where an Indian female teacher explains concepts (Maths, Accounts, Science, English) in front of an authentic coaching centre whiteboard.
* **Persona**: Relatable, confident, friendly North Indian coaching educator.
* **Environment**: Real physical coaching centre classroom in Delhi with fixed whiteboard position, realistic ambient lighting, and teaching furniture.

### Profile 2: AME Bazaar AI Influencer
* **Primary Goal**: Create realistic social-media marketing Reels that look like an authentic Indian fashion creator visited the real AME Bazaar family garments store in Kirari, Delhi and recorded organic smartphone footage.
* **Persona**: Natural, stylish, relatable Indian fashion creator (not a generic AI model, not an infomercial host).
* **Environment**: Real AME Bazaar family garments store (Men's wear, Women's wear, Kids' wear) in Kirari, Delhi.

### Profile 3: Maheshwari Counsel (Lawyer AI)
* **Primary Goal**: Create realistic educational legal-information Reels (15–30 seconds, exactly 3 connected scenes) using the user's NATIVE GOOGLE FLOW / GEMINI AVATAR workflow.
* **Identity Source**: The native avatar is the primary identity source. No manual `LAWYER_AVATAR_MASTER` image upload is required. The system automatically creates accurate, copy-paste-ready Google Flow prompts around the native avatar.
* **Advocate Persona**: Professional Indian advocate in formal black advocate coat and white shirt, natural Indian appearance, realistic human proportions (no influencer styling, no cinematic superhero styling, no artificial beauty filter).
* **Environment**: Topic-appropriate, realistic professional legal environment (e.g. consultation office, quiet chambers background, clean neutral bookshelf backdrop).

### Profile 4: No-Person Cinematic (Style-Locked)
* **Primary Goal**: Ultra-high-end product showcases, atmospheric textures, and commercial B-roll with locked lighting, shallow depth-of-field, and lens continuity without human presenters.
* **Continuity Strategy**: Style-Locked (Multi-reference mode linking visual temperature, focal depth, and composition across frames `frame_scene_1.png` and `frame_scene_2.png`).
* **Zero Humans Mandate**: Zero people, no avatars, no faces, no presenters. Audio is thematic ambient / atmospheric audio.

---

## 3. Input & Output Contract

### 3.1 Input Format
The production compiler accepts a user prompt specifying the concept or topic:
```json
{
  "prompt": "string (e.g. 'Teacher explaining the 3 golden rules of journal entries' or 'AME Bazaar women's collection ke liye 15 second natural Instagram Reel banao.' or 'Trademark infringement kya hota hai?' or 'Premium Fabric Textures')",
  "profile": "wife-teacher | ame-bazaar | maheshwari-counsel | no-person"
}
```

### 3.2 Output Schema (JSON)
The AI Director compiles a structured JSON plan matching the following schema:

```typescript
interface FastReelPlan {
  hook: string;                      // Catchy, claim-safe opening spoken hook or atmospheric title
  environmentLock: boolean;          // Strictly true for real physical locations
  presetProfile?: string;            // 'wife-teacher' | 'ame-bazaar' | 'maheshwari-counsel' | 'no-person'
  scenes: FastScene[];               // Exactly 3 connected scenes (~5s each)
  cta: string;                       // Grounded, local/educational call to action
  qaResult?: ProductionQAResult;     // Automated compliance check result
}

interface FastScene {
  sceneNumber: number;               // 1, 2, 3
  dialogue: string;                  // 1-2 spoken Hinglish sentences in English script
  visualAction: string;              // Precise, non-duplicated visual action description
  masterReferences: {
    characterMaster: string;         // Permanent character master ID
    environmentMaster: string;       // Permanent environment master ID
    voiceMaster?: string;            // Permanent voice anchor ID
  };
  referenceId: string;               // Primary reference asset ID for the scene
  referencePurpose: string;          // Brief explanation of reference anchor usage
  continuityInstruction: string;     // Explicit frame-to-frame continuity guidance
  continuityReference: string;       // Filename of previous frame (or 'None' for Scene 1)
  cameraInstruction: string;         // Shot type, framing, movement, lighting
  googleFlowPrompt: string;          // Copy-paste-ready compiled production prompt
  negativeConstraints: string;       // Strict negative prompt instructions
  finalFrameToSave: string;          // e.g. 'frame_scene_1.png'
}
```

---

## 4. Master Reference Assets & Anchors

### 4.1 Character Masters & Identity Anchors
* `WIFE_TEACHER_MASTER`: Permanent facial structure, Indian skin texture, natural hair, teacher attire (saree/kurti), and educator presence.
* `AME_BAZAAR_INFLUENCER_MASTER`: Permanent facial identity, Indian skin tone, natural texture (no plastic AI skin or beauty filters), stylish casual Indian fashion creator wardrobe.
* `Native Google Flow Avatar (Advocate Persona)`: The user's native Google Flow / Gemini avatar is the primary identity source. The system compiles prompts around this native avatar framing it in formal advocate attire (black advocate coat, crisp white shirt). No manual master image upload is required.

### 4.2 Environment References
* `COACHING_CENTER_MASTER`: Real coaching centre classroom layout, fixed whiteboard position on wall, ceiling fluorescent lighting, wall paint/texture, and teaching furniture.
* `REAL_STORE_MASTER`: Real AME Bazaar store in Kirari, Delhi. Authentic entrance, interior garment racks, aisles, ceiling lighting, and billing counter.
* `Realistic Professional Legal Setting`: Topic-appropriate, realistic professional legal environment (consultation room, quiet chambers, neat legal bookshelf backdrop, warm professional lighting).

### 4.3 Voice Masters
* `WIFE_TEACHER_VOICE_MASTER`: Natural North Indian female teacher voice, crisp pronunciation, confident pacing, spoken in conversational Delhi Hinglish (English script).
* `AME_BAZAAR_INFLUENCER_VOICE`: Natural Indian female creator voice, casual, conversational, social-media native Hinglish tone (no TV infomercial voice, no foreign/US/UK accent).
* `Indian Advocate Voice (Natural Hinglish)`: Professional Indian lawyer voice, calm, knowledgeable, approachable, authoritative but not intimidating, natural Indian English + Hinglish.

---

## 5. Scene-Specific Reference Breakdown

### 5.1 Wife AI Teacher Sequence
1. **Scene 1 (Hook & Core Rule Introduction)**:
   * *Master References*: `WIFE_TEACHER_MASTER` + `COACHING_CENTER_MASTER` + `WIFE_TEACHER_VOICE_MASTER`
   * *Continuity*: None (Initial Setup)
   * *Save Frame*: `frame_scene_1.png`
2. **Scene 2 (Whiteboard Demonstration / Application)**:
   * *Master References*: `WIFE_TEACHER_MASTER` + `COACHING_CENTER_MASTER` + `WIFE_TEACHER_VOICE_MASTER`
   * *Continuity Frame*: `frame_scene_1.png`
   * *Save Frame*: `frame_scene_2.png`
3. **Scene 3 (Summary & Practice Call-to-Action)**:
   * *Master References*: `WIFE_TEACHER_MASTER` + `COACHING_CENTER_MASTER` + `WIFE_TEACHER_VOICE_MASTER`
   * *Continuity Frame*: `frame_scene_2.png`
   * *Save Frame*: `frame_scene_3.png`

### 5.2 AME Bazaar AI Influencer Sequence
1. **Scene 1 (Real Store Entrance Greeting)**:
   * *Master References*: `AME_BAZAAR_INFLUENCER_MASTER` + `REAL_STORE_MASTER (Entrance / Exterior Reference)`
   * *Continuity*: None (Initial Setup)
   * *Save Frame*: `frame_scene_1.png`
2. **Scene 2 (In-Store Garment Rack Browsing)**:
   * *Master References*: `AME_BAZAAR_INFLUENCER_MASTER` + `REAL_STORE_MASTER (Women's / Men's / Kids' Section Reference)`
   * *Continuity Frame*: `frame_scene_1.png`
   * *Save Frame*: `frame_scene_2.png`
3. **Scene 3 (Billing Counter Area & Visit Call-to-Action)**:
   * *Master References*: `AME_BAZAAR_INFLUENCER_MASTER` + `REAL_STORE_MASTER (Interior & Billing Counter Reference)`
   * *Continuity Frame*: `frame_scene_2.png`
   * *Save Frame*: `frame_scene_3.png`

### 5.3 Maheshwari Counsel (Lawyer AI) Sequence
1. **Scene 1 (Legal Hook / Problem Statement)**:
   * *Primary Anchor*: Native Google Flow Avatar in black advocate coat and white shirt
   * *Setting*: Topic-appropriate realistic legal environment
   * *Continuity*: None (Native Avatar Initial Setup)
   * *Save Frame*: `frame_scene_1.png`
2. **Scene 2 (Core Legal Concept Explanation & Simple Everyday Example)**:
   * *Primary Anchor*: Native Google Flow Avatar in black advocate coat and white shirt
   * *Setting*: Same professional legal environment
   * *Continuity Frame*: `frame_scene_1.png`
   * *Save Frame*: `frame_scene_2.png`
3. **Scene 3 (Practical Takeaway & Educational CTA)**:
   * *Primary Anchor*: Native Google Flow Avatar in black advocate coat and white shirt
   * *Setting*: Same professional legal environment
   * *Continuity Frame*: `frame_scene_2.png`
   * *Save Frame*: `frame_scene_3.png`

### 5.4 No-Person Cinematic (Style-Locked) Sequence
1. **Scene 1 (Atmospheric / Macro Texture Initialization)**:
   * *Style Anchor*: `NO_PERSON_CINEMATIC_STYLE_ANCHOR` (Macro depth of field, warm low-key lighting, rack focus)
   * *Continuity*: Style initialization
   * *Save Frame*: `frame_scene_1.png`
2. **Scene 2 (Complementary Texture & Tracking Continuity)**:
   * *Style Reference*: `frame_scene_1.png` (Lighting temperature and shallow depth-of-field chained)
   * *Continuity Frame*: `frame_scene_1.png`
   * *Save Frame*: `frame_scene_2.png`
3. **Scene 3 (Structured Composition & Camera Motion Takeaway)**:
   * *Style Reference*: `frame_scene_2.png` (Visual, lighting, and object tone chaining)
   * *Continuity Frame*: `frame_scene_2.png`
   * *Save Frame*: `frame_scene_3.png`

---

## 6. Prompt Compiler Architecture

### 6.1 Strict Google Flow Prompt Ordering
For Maheshwari Counsel, every compiled Google Flow prompt follows this exact sequence:
```text
Identity: Native Google Flow Avatar, maintain consistent Indian advocate identity across all scenes.
+
Appearance: Black advocate coat, crisp white shirt, formal professional legal appearance, realistic human proportions (no influencer styling, no cinematic superhero styling, no artificial beauty filter).
+
Continuity: [Scene 1: Initial Native Avatar anchor / Scene 2 & 3: Visual continuity linked directly to frame_scene_X.png].
+
Environment: [Realistic professional legal environment matching topic].
+
Action: [visualAction]. Natural lip synchronization for professional Hinglish legal explanation.
+
Camera: [cameraInstruction].
+
Realism: Natural facial expressions, natural blinking, natural eye and head movement, natural hand gestures, natural body movement, natural lighting, realistic video (no plastic skin, no uncanny facial features).
+
Negative constraints: [negativeConstraints].
```

### 6.2 Anti-Duplication Enforcement
The compiler strictly prohibits redundant prefixes (e.g. never produce *"Influencer performs Influencer stands..."* or *"Advocate performs Advocate speaks..."*). Visual action strings appear exactly once.

### 6.3 Separation of Dialogue from Visual Prompts
Spoken dialogue is compiled into the `dialogue` JSON property. The visual prompt only includes lightweight lip-sync guidance (e.g. *"Natural lip synchronization for professional Hinglish legal explanation"*), preventing bloated generation artifacts.

---

## 7. Profile-Specific Production Rules

### 7.1 Wife AI Teacher: Board & Educational Accuracy Rules
1. **Vocabulary Standard**: Natural Delhi Hinglish in English script. Use standard terms: *Maths* (never *Ganit*), *chapter*, *concept*, *formula*, *equation*, *question*, *solve*, *marks*, *exam*, *trick*, *step*.
2. **Devanagari Ban**: Do not output pure Devanagari script in dialogue or prompts; keep spoken text in Latin script Hinglish for reliable TTS synthesis.
3. **Whiteboard Spatial Anchor**: Whiteboard position is fixed. Never change whiteboard height, border, or wall location between scenes.
4. **Pedagogical Naturalness**: Teacher must maintain natural hand gestures holding a marker, turning between students and whiteboard organically.

### 7.2 AME Bazaar AI Influencer: Store Authenticity & Claim Safety Rules
1. **Store Authenticity**: AME Bazaar is a real family fashion store in Kirari, Delhi. Never transform it into a luxury glass mall, generic showroom, or department store.
2. **Product Boundaries**: Permitted categories are strictly **Men's wear**, **Women's wear**, and **Kids' wear**. Strictly no grocery, food, electronics, or unrelated goods.
3. **Claim Safety Mandate**: Never auto-generate unverified marketing superlatives such as *"India's number one store"*, *"cheapest in Delhi"*, *"best prices in India"*, or *"most popular brand"*. Use authentic conversational phrases: *"Guys, agar aap women's wear dekh rahe ho, AME Bazaar mein ek baar collection check kar sakte ho."*
4. **Smartphone Realism**: Use handheld, eye-level smartphone camera framing with natural depth of field and authentic in-store fluorescent/ambient lighting.

### 7.3 Maheshwari Counsel (Lawyer AI): Legal Accuracy & Source of Truth Rules
1. **Source of Truth Rule**: Treat the user's supplied legal information as the source of truth.
2. **Strict Non-Invention Mandate**: Strictly do NOT invent sections, statutes, case laws, judgments, penalties, limitation periods, procedures, legal rights, deadlines, court rules, or legal conclusions.
3. **Unverified Topics**: If the user provides only a topic and no verified legal information, generate a simple educational structure and clearly mark any facts that require statutory verification before publication (e.g. *'[Requires statutory verification]'*).
4. **Claim Safety Mandate**: Never claim *"best lawyer"*, *"top advocate"*, *"guaranteed victory"*, or *"100% win rate"*. Keep output purely educational and informational.
5. **Language**: Natural Indian English + Hinglish with accessible legal terms (*trademark*, *notice*, *infringement*, *registration*, *contract*).
6. **Persona**: Informative, professional, calm, conversational, and authoritative without sounding promotional. A genuine lawyer-created educational Reel, NOT an AI-generated advertisement.

---

## 8. Quality Assurance (QA) Checklist

### 8.1 Automated Application-Enforced Checks
The internal QA engine evaluates each plan across 10+ validation checkpoints:
- [x] `REAL_LOCATION_LOCK == true`
- [x] Exactly 3 connected scenes generated
- [x] Scene 1 has `continuityReference == 'None (Initial Setup)'`
- [x] Scene 2 links to `frame_scene_1.png`
- [x] Scene 3 links to `frame_scene_2.png`
- [x] Valid Character Master attached to every scene
- [x] Valid Environment Master attached to every scene
- [x] Valid Voice Master attached to every scene
- [x] Spoken dialogue non-empty and conversational
- [x] Camera instructions specify shot type, distance, and movement
- [x] Negative constraints explicitly populated on every scene

---

## 9. Boundary Specification: Enforced Rules vs Manual Visual Verification

| Aspect | A) Application-Enforced (Deterministic) | B) Manual Verification Required (Google Flow / Veo) |
| :--- | :--- | :--- |
| **Prompt Structure** | Assembles exact sequence: Identity + Environment + Frame + Action + Camera + Realism + Negatives. | Visual confirmation that Veo follows prompt weights without drifting. |
| **Asset Tagging** | Enforces reference IDs (`WIFE_TEACHER_MASTER`, `REAL_STORE_MASTER`, etc.). | Verifying that the uploaded reference image in Google Flow is clear and properly bound. |
| **Continuity File Linking** | Assigns `frame_scene_N.png` chains correctly. | Ensuring the user exports the exact last frame of Scene $N-1$ and uploads it as Scene $N$ input. |
| **Claim Safety** | Eliminates exaggerated claims and superlatives from generated copy. | Verifying that any text rendered inside the video does not contain typos or hallucinations. |
| **Board / Store Identity** | Mandates exact room/store layout retention in prompts. | Checking that Veo did not hallucinate extra doors, random mannequins, or shifted boards. |
| **Facial & Skin Texture** | Prohibits AI beauty filters and plastic skin in negative prompts. | Visually verifying that Veo generates natural skin pores and realistic facial micro-expressions. |
| **Lip Sync & TTS** | Generates natural Hinglish dialogue script. | Syncing generated audio tracks with Veo video output in post-production. |

> **Critical Note on AI Video Capabilities**:  
> Video generation models (including Google Veo) inherently possess stochastic output variance. The AI Reel Production Director eliminates structural, prompt, and reference errors upstream, but physical artifacting, limb transitions, and background warping must still be visually audited by human operators.

---

## 10. Manual Google Flow Production Workflow (Step-by-Step)

When operating Google Flow / Google Veo with this production plan, follow this standard operating procedure:

```text
[Step 1: Upload Reference Assets]
   ├── Upload Character Master (e.g. WIFE_TEACHER_MASTER.png)
   └── Upload Environment Master (e.g. COACHING_CENTER_MASTER.png / REAL_STORE_MASTER.png)

[Step 2: Render Scene 1]
   ├── Copy & Paste Scene 1 Google Flow Prompt
   ├── Attach Scene 1 Master References
   ├── Generate Scene 1 Video (~5 seconds)
   └── Save the final frame as: frame_scene_1.png

[Step 3: Render Scene 2]
   ├── Copy & Paste Scene 2 Google Flow Prompt
   ├── Attach Master References + frame_scene_1.png (as Continuity Reference)
   ├── Generate Scene 2 Video (~5 seconds)
   └── Save the final frame as: frame_scene_2.png

[Step 4: Render Scene 3]
   ├── Copy & Paste Scene 3 Google Flow Prompt
   ├── Attach Master References + frame_scene_2.png (as Continuity Reference)
   └── Generate Scene 3 Video (~5 seconds)

[Step 5: Post-Production Assembly]
   ├── Concatenate Scene 1 + Scene 2 + Scene 3 (15s total)
   ├── Lay down TTS/Voiceover generated from dialogue strings
   └── Export final Reel for Instagram / YouTube Shorts
```

---

## 11. Freeze Verification & Sign-off

This document represents the finalized, validated V2 architecture for the AI Reel Production Director. All future modifications or Antigravity porting must preserve the schema, asset anchors, prompt ordering, claim safety, and continuity protocols specified herein.
