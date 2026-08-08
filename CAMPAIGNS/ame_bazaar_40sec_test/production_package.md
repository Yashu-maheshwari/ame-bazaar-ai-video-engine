# AME Bazaar AI Video Engine - Grounded Production Package
Version: 1.2

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
  - `Scene 01` (0-5s): Entrance Hook. Pushing doors open. **[UNBLOCKED]**
  - `Scene 02` (5-10s): Interior Showroom Overview. Walking past display racks. **[UNBLOCKED]**
  - `Scene 03` (10-15s): Product Selection. Approaching hero saree display. **[BLOCKED - MISSING R005]**
  - `Scene 04` (15-20s): Product Texture Close-up. Touching fabric. **[BLOCKED - MISSING P001]**
  - `Scene 05` (20-25s): Fit / Drape Mirror Check. Inspecting garment drape. **[BLOCKED - MISSING R005]**
  - `Scene 06` (25-30s): Checkout Counter checkout. Handoff of shopping bag. **[UNBLOCKED - ENV ONLY]**
  - `Scene 07` (30-35s): Store Exit transition. Stepping onto pavement. **[UNBLOCKED]**
  - `Scene 08` (35-40s): Graphic End-Frame CTA. Logo watermark with WhatsApp contact info. **[UNBLOCKED]**

---

## 3. VERIFIED VS. MISSING REFERENCES

### Verified References
- **R001**: `brand/logo.png` - AME Bazaar Logo.
- **R002**: `store/store_exterior_wide_landscape_01.jpeg` - Wide storefront.
- **R003**: `store/store_entrance_portrait_01.jpeg` - Vertical entrance door.
- **R004**: `store/girls_section_shelves_landscape_01.jpeg` - Girls/Women's Display Section.
- **R006**: `store/billing_counter_portrait_01.jpeg` - Cashier / Billing Counter.
- **RV001**: `video/store_walkthrough_vertical_01.mp4` - Video Walkthrough reference.

### Missing References
- **R005** (Saree Display Area) - **MISSING_REFERENCE**
- **R007** (Shopping Bag physical structure) - **MISSING_REFERENCE**
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

### Scene 01 (0.0s – 5.0s) - **[UNBLOCKED]**
- **Flow Upload Requirements**:
  - **R001** (`brand/logo.png`): Brand watermark.
  - **R003** (`store/store_entrance_portrait_01.jpeg`): Authoritative storefront entrance environment.
  - **RV001** (`video/store_walkthrough_vertical_01.mp4`): Video guide for tracking/spatial layout.
  - **C001** (Model Sheet): **CHARACTER_REFERENCE_REQUIRED** (Required to lock model appearance).
- **Google Flow Prompt**: `Cinematic 9:16 vertical, 35mm lens. Use the supplied AME Bazaar showroom entrance reference image R003 and video walkthrough RV001 as the authoritative environment references. Preserve the exact store entrance architecture, glass doors, blue steps, signage, lighting, and spatial layout. A model based on C001 (CHARACTER_REFERENCE_REQUIRED) walks toward the glass entrance doors on an overcast day. Camera tracks forward slowly behind her at eye-level (1.5m). Pushing the door open, interior lighting from inside the showroom spills outward onto her shoulders. Realistic, photorealistic.`

---

### Scene 02 (5.0s – 10.0s) - **[UNBLOCKED]**
- **Flow Upload Requirements**:
  - **R004** (`store/girls_section_shelves_landscape_01.jpeg`): Authoritative showroom rack layout.
  - **RV001** (`video/store_walkthrough_vertical_01.mp4`): Spatial tracking video.
  - **C001** (Model Sheet): **CHARACTER_REFERENCE_REQUIRED**.
  - **Scene 01 Ending Frame**: Used as starting seed.
- **Google Flow Prompt**: `Cinematic 9:16 vertical, 35mm lens. Use the supplied AME Bazaar showroom reference image R004 and walkthrough video RV001 as the authoritative environment references. Preserve the exact ceiling lighting, white panels, box racks, clothing shelves, and spatial layout of the store. The model based on C001 (CHARACTER_REFERENCE_REQUIRED) walks slowly past the display racks. Her hand lightly brushes the sleeves of garments hanging on racks. Camera pans slowly left-to-right at eye-level (1.5m). Photorealistic.`

---

### Scene 03 (10.0s – 15.0s) - **[BLOCKED]**
- **Flow Upload Requirements**:
  - **R005** (Saree Display): **MISSING_REFERENCE** (Blocked: Saree Display environment is unverified).
  - **C001** (Model Sheet): **CHARACTER_REFERENCE_REQUIRED**.
  - **Scene 02 Ending Frame**: Used as starting seed.
- **Google Flow Prompt**: `Blocked due to missing environment reference R005.`

---

### Scene 04 (15.0s – 20.0s) - **[BLOCKED]**
- **Flow Upload Requirements**:
  - **P001** (Saree Fabric Closeup): **MISSING_REFERENCE** (Blocked: Saree product is unverified).
- **Google Flow Prompt**: `Blocked due to missing product reference P001.`

---

### Scene 05 (20.0s – 25.0s) - **[BLOCKED]**
- **Flow Upload Requirements**:
  - **R005** (Saree Display): **MISSING_REFERENCE** (Blocked: Saree display area is unverified).
  - **C001** (Model Sheet): **CHARACTER_REFERENCE_REQUIRED**.
  - **Scene 04 Ending Frame**: Used as starting seed.
- **Google Flow Prompt**: `Blocked due to missing environment reference R005.`

---

### Scene 06 (25.0s – 30.0s) - **[UNBLOCKED - ENV ONLY]**
- **Flow Upload Requirements**:
  - **R001** (`brand/logo.png`): Brand watermark.
  - **R006** (`store/billing_counter_portrait_01.jpeg`): Authoritative cashier desk.
  - **R007** (Shopping Bag): **MISSING_REFERENCE** (Specific bag layout unverified; use generic white paper bag placeholder).
  - **C001** (Model Sheet): **CHARACTER_REFERENCE_REQUIRED**.
  - **Scene 05 Ending Frame**: Used as starting seed (Or mock frame if preceding scenes blocked).
- **Google Flow Prompt**: `Cinematic 9:16 vertical, 35mm lens. Use the supplied AME Bazaar counter reference image R006 as the authoritative environment reference. Preserve the exact glass counter, wooden framing, LED shelf lighting, and background "Bazaar" logo posters. The model based on C001 (CHARACTER_REFERENCE_REQUIRED) stands at the counter. The cashier hands her a clean white paper shopping bag featuring the red AME Bazaar logo R001. Camera slowly pushes in. Photorealistic.`

---

### Scene 07 (30.0s – 35.0s) - **[UNBLOCKED]**
- **Flow Upload Requirements**:
  - **R001** (`brand/logo.png`): Brand watermark.
  - **R003** (`store/store_entrance_portrait_01.jpeg`): Authoritative entrance door environment.
  - **C001** (Model Sheet): **CHARACTER_REFERENCE_REQUIRED**.
  - **Scene 06 Ending Frame**: Used as starting seed.
- **Google Flow Prompt**: `Cinematic 9:16 vertical, 35mm lens. Use the supplied AME Bazaar entrance reference image R003 as the authoritative environment reference. Preserve the exact door layout, blue steps, and entry facade. The model based on C001 (CHARACTER_REFERENCE_REQUIRED) carrying the white paper shopping bag walks toward the glass doors and pushes them open, stepping onto the outdoor pavement. Camera tracks backward slowly ahead of her. Photorealistic.`

---

### Scene 08 (35.0s – 40.0s) - **[UNBLOCKED]**
- **Flow Upload Requirements**:
  - **R001** (`brand/logo.png`): Brand watermark.
- **Google Flow Prompt**: `Premium motion graphic end frame, 9:16 vertical. Clean dark background. The AME Bazaar logo animates centrally, transitioning to show: "Visit us at Mubarakpur Road, Kirari" and a WhatsApp icon next to "+91 99535 69533" in white and emerald-green text. Static clean display.`
