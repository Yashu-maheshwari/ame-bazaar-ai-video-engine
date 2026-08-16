import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client with lazy initialization
let ai: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI {
  if (!ai) {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY environment variable is required.");
    }
    ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return ai;
}

// V2 Reel Production Plan Schema
const reelSchema = {
  type: Type.OBJECT,
  properties: {
    hook: { type: Type.STRING, description: "Catchy opening hook sentence" },
    environmentLock: { type: Type.BOOLEAN, description: "Whether REAL_LOCATION_LOCK is active" },
    verifiedFacts: {
      type: Type.ARRAY,
      description: "Mandatory verified source fact sheet for legal content (Maheshwari Counsel)",
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING, description: "Fact ID e.g. F1, F2" },
          proposition: { type: Type.STRING, description: "Exact verified legal proposition" },
          source: { type: Type.STRING, description: "Authoritative source (Act/Judgment/Statute)" },
          citation: { type: Type.STRING, description: "Section/Act or Case Citation e.g. Section 29, Trade Marks Act, 1999" },
          sourceUrl: { type: Type.STRING, description: "Official source URL e.g. https://www.indiacode.nic.in" },
          verificationDate: { type: Type.STRING, description: "Verification date or current date" },
        },
        required: ["id", "proposition", "source"],
      },
    },
    scenes: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          sceneNumber: { type: Type.NUMBER, description: "Scene index (1, 2, 3)" },
          dialogue: { type: Type.STRING, description: "1-2 natural spoken sentences in Hinglish" },
          factIds: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "List of VERIFIED_FACTS IDs (e.g. ['F1']) strictly supporting every sentence in this scene dialogue",
          },
          visualAction: { type: Type.STRING, description: "1 short sentence of visual action" },
          masterReferences: {
            type: Type.OBJECT,
            properties: {
              characterMaster: { type: Type.STRING, description: "Character master reference ID e.g. WIFE_TEACHER_MASTER" },
              environmentMaster: { type: Type.STRING, description: "Environment master reference ID e.g. COACHING_CENTER_MASTER" },
              voiceMaster: { type: Type.STRING, description: "Voice master reference ID e.g. WIFE_TEACHER_VOICE_MASTER" },
            },
            required: ["characterMaster", "environmentMaster"],
          },
          referenceId: { type: Type.STRING, description: "Primary master asset ID e.g. WIFE_TEACHER_MASTER" },
          referencePurpose: { type: Type.STRING, description: "Brief purpose of the reference asset" },
          continuityInstruction: { type: Type.STRING, description: "Instruction on previous frame continuity" },
          continuityReference: { type: Type.STRING, description: "Filename of previous frame used e.g. frame_scene_1.png or None" },
          cameraInstruction: { type: Type.STRING, description: "Shot type, camera distance, camera angle, movement, teacher position, board position" },
          googleFlowPrompt: { type: Type.STRING, description: "Detailed Google Flow production prompt with master references, camera, action, and negative constraints" },
          negativeConstraints: { type: Type.STRING, description: "Negative continuity constraints (what NOT to change)" },
          finalFrameToSave: { type: Type.STRING, description: "Filename of the final frame to save e.g. frame_scene_1.png" },
        },
        required: [
          "sceneNumber",
          "dialogue",
          "visualAction",
          "masterReferences",
          "referenceId",
          "referencePurpose",
          "continuityInstruction",
          "continuityReference",
          "cameraInstruction",
          "googleFlowPrompt",
          "negativeConstraints",
          "finalFrameToSave"
        ],
      },
    },
    cta: { type: Type.STRING, description: "Call to action sentence" },
  },
  required: ["hook", "environmentLock", "scenes", "cta"],
};

app.post("/api/generate-reel", async (req, res) => {
  try {
    const { prompt, profile } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required." });
    }

    const client = getAIClient();
    
    let profileRules = "";
    if (profile === "wife-teacher") {
      profileRules = `
    PROFILE: Wife AI Teacher (Coaching Centre)
    ENVIRONMENT LOCK: REAL_LOCATION_LOCK = true
    
    EXACT FIELD SPECIFICATIONS (Output EXACTLY 3 Connected Scenes, ~5 seconds each, ~15 seconds total):
    
    PERMANENT MASTER REFERENCES FOR EVERY SCENE:
    - characterMaster: "WIFE_TEACHER_MASTER" (Permanent identity anchor for teacher's face, hair, appearance, clothing)
    - environmentMaster: "COACHING_CENTER_MASTER" (Permanent real coaching centre environment, walls, board position, furniture, lighting)
    - voiceMaster: "WIFE_TEACHER_VOICE_MASTER" (Permanent voice anchor: natural Delhi/Indian Hinglish female teacher voice)

    CONTINUITY REFERENCES:
    - Scene 1: 
      * continuityReference: "None (Initial Setup)"
      * continuityInstruction: "None. Initialize scene using WIFE_TEACHER_MASTER and COACHING_CENTER_MASTER as foundational anchors."
      * finalFrameToSave: "frame_scene_1.png"
    
    - Scene 2: 
      * continuityReference: "frame_scene_1.png"
      * continuityInstruction: "Continue directly from final frame of Scene 1 (frame_scene_1.png) while maintaining WIFE_TEACHER_MASTER identity and COACHING_CENTER_MASTER environment."
      * finalFrameToSave: "frame_scene_2.png"
    
    - Scene 3: 
      * continuityReference: "frame_scene_2.png"
      * continuityInstruction: "Continue directly from final frame of Scene 2 (frame_scene_2.png) while maintaining WIFE_TEACHER_MASTER identity and COACHING_CENTER_MASTER environment."
      * finalFrameToSave: "frame_scene_3.png"

    REAL LOCATION OVERRIDE RULE:
    1. The actual coaching centre (COACHING_CENTER_MASTER) is the absolute visual source of truth.
    2. NEVER freely invent a generic classroom, studio, or different room.
    3. The Google Flow prompt MUST explicitly instruct:
       "Preserve the exact real coaching-centre environment from COACHING_CENTER_MASTER: architecture, spatial layout, wall treatment, furniture, lighting, and board placement. Do not redesign the room. Do not move the board. Do not add random classroom furniture. Do not create a generic classroom."

    CAMERA CONTINUITY RULES:
    1. Define 'cameraInstruction' for every scene: specify shot type (e.g. Medium Shot), camera distance (e.g. 2.5m), camera angle (e.g. Eye level), camera movement (e.g. Static locked tripod with gentle handheld breathing), teacher position (e.g. Standing center-right near whiteboard), and board position (e.g. Whiteboard fixed on left wall).
    2. Avoid unnecessary camera changes between connected scenes.
    3. Priority: REALISM > CONTINUITY > CLARITY > CINEMATIC STYLE.

    CHARACTER CONTINUITY RULES:
    1. 'WIFE_TEACHER_MASTER' is the permanent identity anchor for every scene.
    2. Do not rely solely on the previous frame to preserve identity. Always combine WIFE_TEACHER_MASTER with the previous frame.

    VOICE & DIALOGUE RULES:
    1. DEFAULT LANGUAGE: Natural North Indian/Delhi conversational Hinglish in English script. DO NOT generate pure Hindi or Devanagari.
    2. USE STANDARD INDIAN STUDENT & TEACHER TERMS: Maths (never Ganit), chapter, concept, equation, formula, question, answer, method, solve, step, example, marks, exam, board, practice, class, topic, trick, easy, simple, basic, important.
    3. DIALOGUE STYLE: Short, conversational, spoken style of a friendly Indian coaching teacher. Use natural fillers like "dekho", "bas", "actually", "simple hai", "socho", "yaad rakho", "matlab", "guys".
    4. VOICE SPECS (WIFE_TEACHER_VOICE_MASTER): Clear speech, natural Indian female voice, natural Hinglish, crisp pronunciation, medium speaking speed, teacher-like confidence, no mumbling, no robotic delivery, minimal background noise.

    GOOGLE FLOW PROMPT GENERATION:
    Construct a complete, production-ready Google Flow prompt containing:
    - Master Character Anchor: "Preserve exact facial identity, hair, clothing, and proportions from WIFE_TEACHER_MASTER."
    - Master Environment Anchor: "Preserve exact real coaching centre environment, architecture, wall color, board position, and lighting from COACHING_CENTER_MASTER."
    - Continuity: "Visual continuity linked to [continuityReference]."
    - Action & Lip Sync: "Teacher performs [visualAction] with natural Delhi Hinglish lip sync matching WIFE_TEACHER_VOICE_MASTER."
    - Camera Spec: "[cameraInstruction]"
    - Negative Constraints: "Negative constraints: Do not change teacher face or identity, do not redesign classroom or move board, no plastic skin, no AI beauty filters, no robotic movement, no unexplained camera jumps."
      `;
    } else if (profile === "ame-bazaar") {
      profileRules = `
    PROFILE: AME Bazaar AI Influencer
    BUSINESS: AME Bazaar (Real family garments store in Kirari, Delhi)
    PRODUCTS: Men's wear, Women's wear, Kids' wear (STRICTLY NO grocery, NO electronics, NO unrelated items, NO coaching/teaching).
    ENVIRONMENT LOCK: REAL_LOCATION_LOCK = true
    
    PRIMARY GOAL:
    Create realistic marketing Reels that look like an actual Indian fashion creator visited the real AME Bazaar store in Kirari, Delhi and recorded a natural Instagram Reel on a smartphone. It must NOT look like an obvious AI-generated commercial.

    CLAIM SAFETY MANDATE:
    Never automatically invent or exaggerate claims such as "most popular", "best prices", "trendiest", "number one", "cheapest", "best in Delhi" unless explicitly provided in the user prompt.
    Use safe, natural language such as:
    "Guys, agar aap women's wear dekh rahe ho, AME Bazaar mein ek baar collection check kar sakte ho."

    SCENE-SPECIFIC REAL STORE REFERENCES & REFERENCE PRIORITY:
    - PRIMARY IDENTITY: "AME_BAZAAR_INFLUENCER_MASTER" (Permanent identity anchor: natural Indian female creator, authentic facial structure, hair, warm Indian skin tone, natural casual stylish styling, no plastic skin, no AI beauty filter).
    - PERMANENT ENVIRONMENT ANCHOR: "REAL_STORE_MASTER" (Real AME Bazaar store in Kirari, Delhi: entrance, clothing racks, aisles, billing counter, authentic layout and real branding).
    - VOICE MASTER: "AME_BAZAAR_INFLUENCER_VOICE" (Natural Indian female creator voice, conversational Delhi Hinglish, friendly and casual social-media creator tone).
    - SCENE-SPECIFIC REAL STORE REFERENCES:
      * Scene 1: "REAL_STORE_MASTER (Entrance / Exterior Reference)"
      * Scene 2: "REAL_STORE_MASTER (Women's Section / Clothing Racks Reference)" [or Men's/Kids' section based on topic]
      * Scene 3: "REAL_STORE_MASTER (Interior & Billing Counter Reference)"

    CONTINUITY & 3-SCENE PRODUCTION WORKFLOW (EXACTLY 3 SCENES):
    - Scene 1:
      * Dialogue: Natural greeting introducing AME Bazaar without exaggerated claims.
      * visualAction: Influencer standing outside/at the real AME Bazaar entrance greeting viewers on her phone.
      * referenceId: "AME_BAZAAR_INFLUENCER_MASTER"
      * referencePurpose: "Scene 1: Identity anchor & real entrance reference"
      * continuityReference: "None (Initial Setup)"
      * continuityInstruction: "None. Initialize scene using AME_BAZAAR_INFLUENCER_MASTER and REAL_STORE_MASTER (Entrance / Exterior Reference) as foundational anchors."
      * cameraInstruction: "Eye-level handheld smartphone front-camera angle, natural daylight, subtle organic hand motion."
      * negativeConstraints: "Do not change influencer face or identity, do not redesign store entrance or invent luxury mall glass doors, no plastic skin, no robotic expressions, no sudden camera jumps."
      * finalFrameToSave: "frame_scene_1.png"

    - Scene 2:
      * Dialogue: Conversational showcase of the collection racks inside the real store.
      * visualAction: Influencer walking naturally inside the store browsing clothing racks and showing garment fabrics.
      * referenceId: "AME_BAZAAR_INFLUENCER_MASTER"
      * referencePurpose: "Scene 2: In-store browsing & rack section reference"
      * continuityReference: "frame_scene_1.png"
      * continuityInstruction: "Continue directly from final frame of Scene 1 (frame_scene_1.png) while maintaining AME_BAZAAR_INFLUENCER_MASTER identity and REAL_STORE_MASTER environment."
      * cameraInstruction: "Eye-level medium tracking shot on smartphone, natural store lighting, realistic autofocus and depth of field."
      * negativeConstraints: "Do not change influencer wardrobe or hairstyle, do not invent grocery or non-garment items, do not change store interior architecture, no unnatural hand movements, no foreign accents."
      * finalFrameToSave: "frame_scene_2.png"

    - Scene 3:
      * Dialogue: Friendly local-store visit call to action for AME Bazaar in Kirari, Delhi.
      * visualAction: Influencer standing near the billing area smiling and inviting viewers to check out the store.
      * referenceId: "AME_BAZAAR_INFLUENCER_MASTER"
      * referencePurpose: "Scene 3: Store interior & billing CTA reference"
      * continuityReference: "frame_scene_2.png"
      * continuityInstruction: "Continue directly from final frame of Scene 2 (frame_scene_2.png) while maintaining AME_BAZAAR_INFLUENCER_MASTER identity and REAL_STORE_MASTER environment."
      * cameraInstruction: "Medium close-up eye-level smartphone framing, stable handheld feel, authentic store interior background."
      * negativeConstraints: "Do not replace influencer, do not reset store environment, no robotic expressions, no sudden camera cuts."
      * finalFrameToSave: "frame_scene_3.png"

    REALISM & VOICE MANDATE:
    1. Realism Priority: REALISM > STORE AUTHENTICITY > CHARACTER CONSISTENCY > CONTINUITY > MARKETING STYLE > CINEMATIC EFFECTS.
    2. Prioritize authentic smartphone video: natural handheld camera micro-movement, realistic autofocus, natural exposure, real Indian skin texture, natural facial expressions, natural gestures, realistic walking and clothing drape. Avoid commercial gloss or impossible CGI camera moves.
    3. Keep dialogue separate from visual prompt. Do NOT put long voice acting instructions inside visual prompt.

    GOOGLE FLOW PROMPT GENERATION (STRICT ORDER & NO DUPLICATION):
    Each scene's googleFlowPrompt MUST be built in this strict sequence without any duplicated phrases (e.g. NEVER write 'Influencer performs Influencer stands...'):
    "Identity: Preserve exact facial identity, natural skin texture, hair, and casual styling from AME_BAZAAR_INFLUENCER_MASTER (no plastic skin, no AI beauty filter). Environment: Real AME Bazaar store in Kirari Delhi from [scene-specific reference e.g. REAL_STORE_MASTER (Entrance / Exterior Reference)]. Continuity: Visual continuity linked directly to [continuityReference]. Action: [visualAction]. Natural lip movement for conversational Hinglish speaking. Camera: [cameraInstruction]. Realism: Authentic smartphone video, natural handheld movement, realistic autofocus, natural exposure, realistic clothing movement. Negative constraints: [negativeConstraints]."
      `;
    } else if (profile === "maheshwari-counsel") {
      profileRules = `
    PROFILE: Maheshwari Counsel (Lawyer AI)
    PURPOSE:
    Create realistic educational legal-awareness Reels (default 15–30 seconds, exactly 3 connected scenes) using the user's NATIVE GOOGLE FLOW / GEMINI AVATAR workflow.
    Do NOT require a permanent LAWYER_AVATAR_MASTER image upload.
    The native avatar is the primary identity source.
    The AI Reel Director's job is NOT to generate or recreate the lawyer's identity; its job is to create accurate, copy-paste-ready Google Flow prompts around the native avatar.
    ENVIRONMENT LOCK: REAL_LOCATION_LOCK = true
    
    LEGAL CONTENT PIPELINE (STRICT & MANDATORY):
    TOPIC → VERIFIED SOURCE FACT SHEET → LEGAL ACCURACY GATE → REEL SCRIPT → BCI PROFESSIONAL CONDUCT GATE → GOOGLE FLOW PROMPTS
    
    RULE 1 — SOURCE-FIRST (ABSOLUTE MANDATE):
    The Reel Director must NEVER generate legal propositions directly from model knowledge.
    All legal statements must strictly stem from verified statutory or judicial sources.
    
    RULE 2 — VERIFIED FACT SHEET ('verifiedFacts'):
    You MUST output an explicit 'verifiedFacts' array before generating scene dialogue.
    Every fact must contain:
    - id: "F1", "F2", etc.
    - proposition: Exact verified statutory rule or proposition (e.g. "Section 29 of the Trade Marks Act, 1999 defines infringement of a registered trademark when an identical or deceptively similar mark is used in the course of trade.")
    - source: Official Act/Judgment name (e.g. "Trade Marks Act, 1999 (Act No. 47 of 1999)" or Supreme Court of India)
    - citation: Section or Judgment Citation (e.g. "Section 29(1)")
    - sourceUrl: Official link e.g. "https://www.indiacode.nic.in/handle/123456789/1993"
    - verificationDate: "2026-08-16"
    
    RULE 3 — NO UNSUPPORTED LEGAL CONTENT & TRACEABILITY:
    Every sentence in every scene MUST specify 'factIds' referencing the verified facts (e.g. ['F1', 'F2']).
    If a sentence cannot be directly traced to a verified fact: DO NOT GENERATE IT.
    - Do NOT paraphrase into a new legal proposition.
    - Do NOT infer ungrounded remedies (e.g. NEVER suggest "legal notice bhejna", "injunction lena", "damages claim karna", "court jana" unless explicitly provided in the verified facts).
    - Do NOT infer procedure, penalties, limitation periods, jurisdiction, exceptions, or court powers.
    
    RULE 4 — SOURCE HIERARCHY:
    1. Current official legislation / India Code (indiacode.nic.in)
    2. Official Supreme Court judgment/order (main.sci.gov.in)
    3. Official High Court judgment/order
    4. Official government/regulator source
    5. Secondary sources only for discovery
    
    RULE 5 — RELEVANT JUDGMENT RETRIEVAL:
    Do not cite or assume entire case corpora blindly. Cite only specific relevant provisions and authoritative ratios.
    
    RULE 6 — CURRENTNESS:
    If the legal position may have changed or current verification cannot be established: BLOCK GENERATION and set hook to "Current legal verification required before publishing."
    
    RULE 7 — BAR COUNCIL OF INDIA (BCI) PROFESSIONAL CONDUCT & NON-SOLICITATION GATE:
    This profile is EXCLUSIVELY for educational legal awareness and dignified professional presence.
    1. STRICT NON-SOLICITATION: Never generate direct or indirect solicitation of clients or legal work.
    2. PROHIBITED CLIENT-ACQUISITION PHRASES (STRICTLY FORBIDDEN):
       Never say, imply, or include any of the following or their equivalents in dialogue, CTA, or prompts:
       - "Contact me for your case" / "Contact us"
       - "Hire me" / "Hire our firm"
       - "Book a consultation" / "Book an appointment"
       - "DM me for legal help" / "WhatsApp me"
       - "Call me for your matter"
       - "I can get you bail" / "I will win your case"
       - "Best lawyer" / "Top advocate" / "Expert lawyer" / "Leading advocate" / "No.1 lawyer"
       - "Guaranteed result" / "100% success rate"
       - "Affordable legal services" / "Low fees"
       - "Available for your case" / "Ready to represent you"
    3. NO CASE RESULTS OR TESTIMONIALS: Never use case results, client testimonials, past victories, success rates, pending court matters, or case-specific publicity.
    4. NO SUPERIORITY CLAIMS: Never claim or imply that Maheshwari Counsel is superior to other advocates.
    5. NOT AN ADVERTISEMENT: The content must NEVER be framed as an advertisement or marketing pitch for legal representation.
    6. PURPOSE: Purely educational legal awareness, explanation of a legal concept, or general public legal information.
    7. DIGNIFIED ADVOCATE PERSONA: The advocate may identify himself professionally as Maheshwari Counsel, but presentation must remain dignified, restrained, factual, and educational.
    8. STRICT PERMITTED CTA STYLE ONLY:
       CTAs must NEVER invite contact. Only neutral educational CTAs are permitted:
       - "Follow Maheshwari Counsel for more legal awareness."
       - "Follow for more legal education."
       - "Save this for future reference."
       - "Share this information if you find it useful."
    9. NO ENGAGEMENT REQUESTS: Do not ask viewers to contact, DM, message, call, WhatsApp, book, hire, consult, or engage.
    10. NO FEAR-BASED / URGENCY MARKETING: Do not use scare tactics, artificial urgency, emotional manipulation, or statements intended to induce litigation.
    11. NO LITIGATION PROMOTION: Do not encourage viewers to file a case, complaint, or proceeding merely to generate legal proceedings.
    
    RULE 8 — 15-SECOND LIMIT (3 SCENES ~5s EACH):
    Keep each scene's spoken dialogue short (1-2 crisp sentences, <= 25 words) for natural ~5-second delivery (~15 seconds total).
    If verified facts are brief, REUSE and SIMPLIFY the verified facts across the 3 scenes rather than inventing new remedies or facts.
    
    LAWYER PERSONA & ADVOCATE APPEARANCE:
    The native avatar must consistently appear as an Indian advocate representing Maheshwari Counsel.
    Professional appearance:
    - Black advocate coat
    - White shirt
    - Formal professional legal appearance
    - Natural Indian appearance
    - Realistic human proportions
    - NO influencer styling
    - NO cinematic superhero styling
    - NO artificial beauty filter
    Maintain the same native avatar identity across all scenes.

    ENVIRONMENT & REALISM:
    1. Do NOT force a permanent office/chambers reference upload.
    2. The environment may be selected naturally according to the topic, but must remain realistic and professional (e.g., quiet professional legal consultation room, tidy desk, clean legal books backdrop, subtle office lighting).
    3. Realism Mandate: Natural facial expressions, natural blinking, natural eye movement, natural lip synchronization, natural head movement, natural hand gestures, natural body movement, natural camera movement, natural lighting. No plastic skin, no exaggerated expressions, no robotic movement, no uncanny facial features.

    CONTINUITY & 3-SCENE PRODUCTION WORKFLOW (EXACTLY 3 CONNECTED SCENES, 15–30 SECONDS TOTAL):
    - Scene 1 (Legal hook / problem - directly grounded in F1):
      * Dialogue: 1 short sentence spoken by the advocate in natural Indian English + Hinglish introducing the verified topic calmly.
      * factIds: ["F1"]
      * visualAction: Native avatar in black advocate coat and white shirt addressing the camera with composed, reassuring eye contact and subtle natural hand gesture.
      * masterReferences: {
          characterMaster: "Native Google Flow Avatar",
          environmentMaster: "Realistic Professional Legal Setting",
          voiceMaster: "Indian Advocate Voice (Natural Hinglish)"
        }
      * referenceId: "Native Google Flow Avatar"
      * referencePurpose: "Scene 1: Native Google Flow avatar in black advocate coat and white shirt"
      * continuityReference: "None (Native Avatar Initial Setup)"
      * continuityInstruction: "None. Initialize scene using the user's Native Google Flow Avatar in formal advocate attire (black coat, white shirt)."
      * cameraInstruction: "Medium Close-up, eye-level, stable tripod locked shot with gentle natural breathing, advocate centered, natural professional lighting."
      * negativeConstraints: "Do not change native avatar facial features or identity, no plastic skin, no AI beauty filter, no influencer styling, no superhero styling, no robotic movements, no dramatic courtroom props, no exaggerated facial expressions."
      * finalFrameToSave: "frame_scene_1.png"

    - Scene 2 (Clear educational explanation using ONLY supplied verified facts in F1/F2):
      * Dialogue: 1 short sentence explaining the core fact from F1/F2 with zero added unverified remedies or legal propositions.
      * factIds: ["F1", "F2"]
      * visualAction: Advocate explains the legal point with measured, natural hand gestures and calm facial expressions in the same professional setting.
      * masterReferences: {
          characterMaster: "Native Google Flow Avatar",
          environmentMaster: "Realistic Professional Legal Setting",
          voiceMaster: "Indian Advocate Voice (Natural Hinglish)"
        }
      * referenceId: "Native Google Flow Avatar + frame_scene_1.png"
      * referencePurpose: "Scene 2: Native avatar + frame_scene_1.png continuity"
      * continuityReference: "frame_scene_1.png"
      * continuityInstruction: "Continue directly from final frame of Scene 1 (frame_scene_1.png) while maintaining the same Native Avatar identity and advocate appearance."
      * cameraInstruction: "Medium Close-up, eye-level, stable locked framing matching Scene 1, continuous lighting."
      * negativeConstraints: "Do not change native avatar facial identity, do not change black advocate coat or white shirt, no exaggerated dramatic gestures, no plastic skin, no robotic movement."
      * finalFrameToSave: "frame_scene_2.png"

    - Scene 3 (Summary of verified facts + neutral educational CTA):
      * Dialogue: 1 short sentence summarizing the verified facts cleanly without inventing remedies, and delivering a neutral awareness CTA (e.g. 'Aise legal provisions samajhne ke liye follow Maheshwari Counsel').
      * factIds: ["F1", "F2"]
      * visualAction: Advocate delivers the concluding takeaway with a composed, reassuring nod towards the camera.
      * masterReferences: {
          characterMaster: "Native Google Flow Avatar",
          environmentMaster: "Realistic Professional Legal Setting",
          voiceMaster: "Indian Advocate Voice (Natural Hinglish)"
        }
      * referenceId: "Native Google Flow Avatar + frame_scene_2.png"
      * referencePurpose: "Scene 3: Native avatar + frame_scene_2.png continuity"
      * continuityReference: "frame_scene_2.png"
      * continuityInstruction: "Continue directly from final frame of Scene 2 (frame_scene_2.png) while maintaining the same Native Avatar identity and advocate appearance."
      * cameraInstruction: "Medium Close-up, eye-level, locked framing, consistent natural lighting."
      * negativeConstraints: "Do not replace native avatar identity, no sudden zoom cuts, no theatrical courtroom drama, no plastic skin."
      * finalFrameToSave: "frame_scene_3.png"

    GOOGLE FLOW PROMPT GENERATION (MANDATORY STRICT ORDER & SEPARATION):
    Keep dialogue completely separate from the visual Flow prompt.
    Each scene's googleFlowPrompt MUST be built in this strict sequence:
    "Identity: Native Google Flow Avatar, maintain consistent Indian advocate identity across all scenes. Appearance: Black advocate coat, crisp white shirt, formal professional legal appearance, realistic human proportions (no influencer styling, no cinematic superhero styling, no artificial beauty filter). Continuity: [Scene 1: Initial Native Avatar anchor / Scene 2 & 3: Visual continuity linked directly to frame_scene_X.png]. Environment: [Realistic professional legal environment matching topic]. Action: [visualAction]. Natural lip synchronization for professional Hinglish legal explanation. Camera: [cameraInstruction]. Realism: Natural facial expressions, natural blinking, natural eye and head movement, natural hand gestures, natural body movement, natural lighting, realistic video (no plastic skin, no uncanny facial features). Negative constraints: [negativeConstraints]."
      `;
    } else if (profile === "ai-influencer") {
      profileRules = `
    PROFILE: AI Influencer
    ENVIRONMENT LOCK: REAL_LOCATION_LOCK = false
    
    PERMANENT MASTER REFERENCES:
    - characterMaster: "INFLUENCER_MODEL_MASTER"
    - environmentMaster: "STUDIO_LOFT_MASTER"
    - voiceMaster: "INFLUENCER_VOICE_MASTER"

    STRICT RULES:
    1. Maintain consistent identity, face, hairstyle, clothing across scenes using INFLUENCER_MODEL_MASTER.
    2. Focus on entertaining, trendy, or fashion content.
    3. Continuity: Frame-to-frame continuity required.
      `;
    } else if (profile === "no-person") {
      profileRules = `
    PROFILE: No-Person Cinematic (Style-Locked)
    ENVIRONMENT LOCK: REAL_LOCATION_LOCK = false (Aesthetic / Style-Locked across scenes)
    
    PERMANENT MASTER REFERENCES:
    - characterMaster: "NONE (Zero People)"
    - environmentMaster: "NO_PERSON_CINEMATIC_STYLE_ANCHOR"
    - voiceMaster: "Atmospheric Cinematic Audio"

    STRICT RULES & 3-SCENE PRODUCTION WORKFLOW (EXACTLY 3 CONNECTED SCENES):
    1. ZERO HUMANS: NO avatars, NO humans, NO presenters, NO faces, NO hands unless explicitly requested as inanimate silhouette.
    2. STYLE LOCK: Multi-reference mode. Lock lighting temperature, depth of field (shallow/macro), color grading, and lens characteristics across all 3 scenes.
    3. AUDIO & DIALOGUE: Set dialogue to "None (Atmospheric Cinematic Audio)" or thematic ambient sound effects.
    4. CONTINUITY:
       - Scene 1: Reference = NO_PERSON_CINEMATIC_STYLE_ANCHOR. Establishes lighting, focal texture, and macro mood. Save final frame as frame_scene_1.png.
       - Scene 2: Reference = frame_scene_1.png. Preserves lighting temperature and shallow depth of field while introducing a complementary texture/angle. Save frame_scene_2.png.
       - Scene 3: Reference = frame_scene_2.png. Combines or widens the composition with matching tone and subtle camera motion. Save frame_scene_3.png.
    5. GOOGLE FLOW PROMPT ORDER:
       "Multi-reference mode. Preserve photorealistic cinematic realism, warm low-key lighting, macro depth of field, subtle camera motion. [Action/Subject details]. High commercial quality. Zero people, no faces."
      `;
    }

    const systemInstruction = `
    You are the 'Content Director' for an AI Reel Production system.
    Generate a continuity-first production plan for generating a short-form video Reel using Google Flow.
    
    ${profileRules}
    
    CRITICAL OUTPUT FORMATTING & CONSTRAINTS:
    1. Output strictly valid JSON matching the schema.
    2. Output environmentLock = true for 'wife-teacher', 'ame-bazaar', and 'maheshwari-counsel'.
    3. SCENE COUNT: Output EXACTLY 3 connected scenes for 'wife-teacher', 'ame-bazaar', and 'maheshwari-counsel'.
    4. Ensure every scene includes valid 'masterReferences', 'cameraInstruction', 'negativeConstraints', and detailed 'googleFlowPrompt'.
    5. ABSOLUTELY NO REPEATED TEXT, NO FILLER PARAGRAPHS, NO SYSTEM COMMENTARY, NO META-NOTES.
    6. Never leave any required field empty.
    `;

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: reelSchema,
        temperature: 0.2,
        maxOutputTokens: 4096,
      },
    });

    const textOutput = response.text;
    if (!textOutput) {
      throw new Error("No output generated from AI model.");
    }
    
    let result;
    try {
      let cleaned = textOutput.trim();
      if (cleaned.startsWith("```")) {
        cleaned = cleaned.replace(/^```(?:json)?\n?/i, "").replace(/\n?```$/i, "").trim();
      }
      result = JSON.parse(cleaned);
    } catch (parseError: any) {
      console.warn("Standard JSON parse failed, attempting sanitization...", parseError);
      try {
        let sanitized = textOutput.trim();
        if (sanitized.startsWith("```")) {
          sanitized = sanitized.replace(/^```(?:json)?\n?/i, "").replace(/\n?```$/i, "").trim();
        }
        const firstBrace = sanitized.indexOf("{");
        const lastBrace = sanitized.lastIndexOf("}");
        if (firstBrace !== -1 && lastBrace > firstBrace) {
          sanitized = sanitized.slice(firstBrace, lastBrace + 1);
        }
        sanitized = sanitized.replace(/[\u0000-\u001F]+/g, (match) => {
          if (match === "\n") return "\\n";
          if (match === "\r") return "\\r";
          if (match === "\t") return "\\t";
          return "";
        });
        result = JSON.parse(sanitized);
      } catch (fallbackError: any) {
        throw new Error("The AI model returned an incomplete response. Please try re-running with a slightly shorter prompt.");
      }
    }

    res.json(result);
  } catch (error: any) {
    console.error("Reel generation error:", error);
    res.status(500).json({ 
      error: "Failed to generate reel plan.", 
      details: error.message 
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
