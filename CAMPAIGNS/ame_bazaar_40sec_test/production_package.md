# AME Bazaar AI Video Engine - Grounded Production Package
Version: 1.1

# AME BAZAAR — 40 SECOND REEL (GROUNDED EDITION)
**Campaign ID**: `CAM_TEST_40SEC_001`

---

## 1. CAMPAIGN BRIEF
- **Goal**: Showcase AME Bazaar's retail showroom and custom saree/tailoring collection using real physical evidence.
- **Audience**: Women seeking festive collections in North West Delhi (Kirari).
- **Featured Product**: `PRODUCT_REFERENCE_REQUIRED` (Premium Saree).
- **Offer / Message**: "Custom tailoring & bridal draping designs at AME Bazaar, Mubarakpur Road."
- **Video Duration**: 40 seconds.
- **Platform**: Instagram Reels (9:16 vertical format).
- **Tone**: Elegant, premium, realistic fashion commercial.
- **CTA**: Visit AME Bazaar at Mubarakpur Road, Kirari, Delhi or message via WhatsApp (+91 99535 69533).

---

## 2. PRODUCTION PLAN (TIMELINE)
- **Timeline**: 8 scenes, exactly 5.0 seconds per scene.
  - `Scene 01` (0-5s): Entrance Hook. Pushing doors open.
  - `Scene 02` (5-10s): Interior Showroom Overview. Walking past display racks.
  - `Scene 03` (10-15s): Product Selection. Approaching hero saree display.
  - `Scene 04` (15-20s): Product Texture Close-up. Touching fabric.
  - `Scene 05` (20-25s): Fit / Drape Mirror Check. Inspecting garment drape.
  - `Scene 06` (25-30s): Checkout Counter checkout. Handoff of shopping bag.
  - `Scene 07` (30-35s): Store Exit transition. Stepping onto pavement.
  - `Scene 08` (35-40s): Graphic End-Frame CTA. Logo watermark with WhatsApp contact info.

---

## 3. VERIFIED VS. MISSING REFERENCES

### Verified References
- **R001** (Logo URL: `https://amebazaar.in/wp-content/themes/ame-bazaar/assets/images/logo.png`) - Verified brand logo.

### Missing References
- **R002** (Store Exterior) - **MISSING_REFERENCE**
- **R003** (Store Entrance) - **MISSING_REFERENCE**
- **R004** (Women's Section Wide) - **MISSING_REFERENCE**
- **R005** (Saree Display) - **MISSING_REFERENCE**
- **R006** (Billing Counter) - **MISSING_REFERENCE**
- **R007** (Shopping Bag) - **MISSING_REFERENCE**
- **P001** (Saree Fabric Closeup) - **MISSING_REFERENCE**
- **C001** (Model Character Sheet) - **MISSING_REFERENCE**

---

## 4. CONTINUITY PLAN & INTER-SCENE LINKS

- **Previous Scene Ending Frame**: Locked coordinates of camera exit vector.
- **Current Scene Starting Frame**: Must align identically with the preceding exit frame.
- **Current Action**: Narrative movement.
- **Current Ending Frame**: Target freeze-state for rendering.
- **Next Scene Starting Requirement**: Input frame for seed generation.
- **Continuity Locks**: Model hair, clothing fabric weave, rack layouts, flooring texture, ceiling panel lighting.

---

## 5. GOOGLE FLOW WORKFLOW & PROMPTS

### User Google Flow Workflow
1. Open Google Flow.
2. Upload the listed reference image/video files for the target scene.
3. Paste the corresponding scene prompt into the text prompt field.
4. Generate the scene clip.
5. Save the final frame of the generated video clip.
6. Use that saved final frame as the starting reference for the next scene to maintain absolute visual continuity.

---

### Scene 01 (0.0s – 5.0s)
- **Flow Upload Requirements**:
  - **R001** (`logo.png`): Brand watermark.
  - **R003** (Store Entrance): **MISSING_REFERENCE** (Required to ground the entrance environment).
  - **C001** (Model Sheet): **CHARACTER_REFERENCE_REQUIRED** (Required to lock model appearance).
- **Google Flow Prompt**: `Cinematic 9:16 vertical, 35mm lens. Use the supplied AME Bazaar showroom entrance reference image/video R003 as the primary environment reference. Preserve its exact entrance architecture, door layout, lighting, branding and spatial relationships. A model based on C001 (CHARACTER_REFERENCE_REQUIRED) walks toward the glass entrance doors on an overcast day. Camera tracks forward slowly behind her at eye-level (1.5m). Pushing the door open, interior spotlighting spills outward onto her shoulders. Realistic, photorealistic.`

---

### Scene 02 (5.0s – 10.0s)
- **Flow Upload Requirements**:
  - **R004** (Women's Section Wide): **MISSING_REFERENCE** (Required to ground floor racks and layouts).
  - **C001** (Model Sheet): **CHARACTER_REFERENCE_REQUIRED**.
  - **Scene 01 Ending Frame**: Used as starting seed.
- **Google Flow Prompt**: `Cinematic 9:16 vertical, 35mm lens. Use the supplied AME Bazaar showroom reference image/video R004 as the primary environment reference. Preserve its exact layout, racks, flooring, lighting, and spatial relationships. The model based on C001 (CHARACTER_REFERENCE_REQUIRED) walks slowly past the ethnic wear section. Her hand lightly brushes the sleeves of garments hanging on racks. Camera pans slowly left-to-right at eye-level (1.5m). Photorealistic.`

---

### Scene 03 (10.0s – 15.0s)
- **Flow Upload Requirements**:
  - **R005** (Saree Display): **MISSING_REFERENCE** (Required to ground targeted display zone).
  - **C001** (Model Sheet): **CHARACTER_REFERENCE_REQUIRED**.
  - **Scene 02 Ending Frame**: Used as starting seed.
- **Google Flow Prompt**: `Cinematic 9:16 vertical, 35mm lens. Use the supplied AME Bazaar showroom reference image R005 as the primary environment reference. Preserve its exact rack structure, lighting, and product arrangement. The model based on C001 (CHARACTER_REFERENCE_REQUIRED) stops in front of the saree display. She reaches out with her right hand to touch a saree (PRODUCT_REFERENCE_REQUIRED). Steady dolly tracking. Photorealistic.`

---

### Scene 04 (15.0s – 20.0s)
- **Flow Upload Requirements**:
  - **P001** (Saree Fabric Closeup): **MISSING_REFERENCE** (Required to ground color, silk weave, and gold embroidery patterns).
- **Google Flow Prompt**: `Cinematic 9:16 vertical macro shot, 50mm lens. Extreme close-up of a hand's fingers gently tracing the gold embroidery details of a saree (PRODUCT_REFERENCE_REQUIRED) based on the supplied product reference image P001. Preserve fabric texture, sheen, and thread patterns exactly. Slow macro slider movement left-to-right. Photorealistic.`

---

### Scene 05 (20.0s – 25.0s)
- **Flow Upload Requirements**:
  - **R005** (Saree Display): **MISSING_REFERENCE**.
  - **C001** (Model Sheet): **CHARACTER_REFERENCE_REQUIRED**.
  - **Scene 04 Ending Frame**: Used as starting seed.
- **Google Flow Prompt**: `Cinematic 9:16 vertical, 35mm lens. Use the supplied AME Bazaar reference image R005 as the primary environment reference. The model based on C001 (CHARACTER_REFERENCE_REQUIRED) stands in front of the showroom mirror. She holds the saree (PRODUCT_REFERENCE_REQUIRED) based on P001 draped over her shoulder. Static camera angle. Photorealistic.`

---

### Scene 06 (25.0s – 30.0s)
- **Flow Upload Requirements**:
  - **R001** (`logo.png`): Brand watermark.
  - **R006** (Billing Counter): **MISSING_REFERENCE** (Required to ground desk and payment zone).
  - **R007** (Shopping Bag): **MISSING_REFERENCE** (Required to ground the white paper bag structure).
  - **C001** (Model Sheet): **CHARACTER_REFERENCE_REQUIRED**.
  - **Scene 05 Ending Frame**: Used as starting seed.
- **Google Flow Prompt**: `Cinematic 9:16 vertical, 35mm lens. Use the supplied AME Bazaar counter reference image R006 as the primary environment reference. The model based on C001 (CHARACTER_REFERENCE_REQUIRED) stands at the counter. The cashier hands her a shopping bag (R007) with the AME Bazaar logo (R001). Camera slowly pushes in. Photorealistic.`

---

### Scene 07 (30.0s – 35.0s)
- **Flow Upload Requirements**:
  - **R001** (`logo.png`): Brand watermark.
  - **R003** (Store Entrance): **MISSING_REFERENCE**.
  - **R007** (Shopping Bag): **MISSING_REFERENCE**.
  - **C001** (Model Sheet): **CHARACTER_REFERENCE_REQUIRED**.
  - **Scene 06 Ending Frame**: Used as starting seed.
- **Google Flow Prompt**: `Cinematic 9:16 vertical, 35mm lens. Use the supplied AME Bazaar entrance reference image R003 as the primary environment reference. The model based on C001 (CHARACTER_REFERENCE_REQUIRED) carrying the shopping bag (R007) walks toward the glass doors and pushes them open, stepping onto the pavement. Camera tracks backward slowly ahead of her. Photorealistic.`

---

### Scene 08 (35.0s – 40.0s)
- **Flow Upload Requirements**:
  - **R001** (`logo.png`): Brand watermark.
- **Google Flow Prompt**: `Premium motion graphic end frame, 9:16 vertical. Clean dark background. The AME Bazaar logo animates centrally, transitioning to show: "Visit us at Mubarakpur Road, Kirari" and a WhatsApp icon next to "+91 99535 69533" in white and emerald-green text. Static clean display.`
