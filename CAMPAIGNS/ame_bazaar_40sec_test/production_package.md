# AME Bazaar AI Video Engine - Grounded Production Package
Version: 3.0

# AME BAZAAR — 40 SECOND REEL (AUTHENTICITY EDITION)
**Campaign ID**: `CAM_TEST_40SEC_001`

---

## 1. CAMPAIGN BRIEF
- **Goal**: Showcase the physical showroom layout of AME Bazaar using real physical evidence, walking viewers through the store with absolute fidelity.
- **Audience**: Shoppers in North West Delhi (Kirari) looking for family fashion.
- **Featured Product**: None (Focus on store layout and sections).
- **Offer / Message**: "Complete family fashion showroom at Mubarakpur Road, Kirari."
- **Video Duration**: 40 seconds.
- **Platform**: Instagram Reels (9:16 vertical format).
- **Tone**: Cinematic, realistic, steady walk-through.
- **CTA**: Visit AME Bazaar at Mubarakpur Road, Kirari, Delhi or message via WhatsApp (+91 99535 69533).

---

## 2. AUTHENTICITY POLICY
To prevent artificial intelligence from hallucinating or modifying the real-world appearance of AME Bazaar, all production assets must conform to these three levels:

1. **REAL FOOTAGE**: Mandatory when available and suitable. Use original raw video frames directly from `store_walkthrough_vertical_01.mp4` instead of running generative models.
2. **REFERENCE-GROUNDED AI**: Allowed only when identity can be maintained. AI must serve strictly as a camera-motion or animation layer. It is prohibited from changing showroom architecture, signage, walls, counters, flooring, or lighting.
3. **GENERATIVE RECONSTRUCTION**: strictly prohibited. The engine must never request AI models to reconstruct the showroom from text prompts alone or substitute generic retail environments.

---

## 3. PRODUCTION PLAN (TIMELINE)
- **Timeline**: 8 scenes, exactly 5.0 seconds per scene.
  - `Scene 01` (0-5s): Entrance Door Hook. **[REAL FOOTAGE]**
  - `Scene 02` (5-10s): Kids' Section Walkthrough. **[REFERENCE-GROUNDED AI / REAL FOOTAGE PREFERRED]**
  - `Scene 03` (10-15s): Men's Section Overview. **[REFERENCE-GROUNDED AI / REAL FOOTAGE PREFERRED]**
  - `Scene 04` (15-20s): Girls' & Women's Section. **[REFERENCE-GROUNDED AI / REAL FOOTAGE PREFERRED]**
  - `Scene 05` (20-25s): Trial Room Passage. **[REFERENCE-GROUNDED AI / REAL FOOTAGE PREFERRED]**
  - `Scene 06` (25-30s): Billing Counter Approach. **[REFERENCE-GROUNDED AI / REAL FOOTAGE PREFERRED]**
  - `Scene 07` (30-35s): Checkout Counter Close-Up. **[REFERENCE-GROUNDED AI / REAL FOOTAGE PREFERRED]**
  - `Scene 08` (35-40s): Graphic End-Frame CTA. **[REFERENCE-GROUNDED AI]**

---

## 4. VERIFIED REFERENCES USED
- **R001**: `brand/logo.png`
- **R002**: `store/store_exterior_wide_landscape_01.jpeg`
- **R003**: `store/store_entrance_portrait_01.jpeg`
- **R004**: `store/girls_section_shelves_landscape_01.jpeg`
- **R006**: `store/billing_counter_portrait_01.jpeg`
- **R007**: `store/trial_room_washroom_wide_landscape_01.jpeg`
- **RV001**: `video/store_walkthrough_vertical_01.mp4`

---

## 5. SCENE BLUEPRINTS

### Scene 01 (0.0s – 5.0s)
- **Scene ID**: `SC_01`
- **Duration**: 5.0s
- **Story Purpose**: Establish physical entry hook.
- **Authenticity Level**: `REAL FOOTAGE`
- **Source Reference IDs**: `RV001`
- **Reference Asset Filenames**: `store_walkthrough_vertical_01.mp4`
- **Starting Visual State**: Looking at AME Bazaar facade and entry steps.
- **Ending Visual State**: Pushing the door open, stepping inside.
- **Camera Movement**: Slow forward tracking dolly.
- **Subject/Action**: Walk up blue steps and push glass door open.
- **Environment Continuity**: Real storefront architecture and posters.
- **Handoff Action**: Do not generate. Clip the first 5 seconds directly from `store_walkthrough_vertical_01.mp4`.
- **Exact Google Flow Prompt**: `REAL FOOTAGE PREFERRED. Do not generate. Use original video clip from RV001 (0:00 - 0:05).`
- **Transition Instruction**: Match-cut on crossing door threshold.
- **Negative Constraints**: No AI rendering.

### Scene 02 (5.0s – 10.0s)
- **Scene ID**: `SC_02`
- **Duration**: 5.0s
- **Story Purpose**: Show Kids' clothing display.
- **Authenticity Level**: `REFERENCE-GROUNDED AI / REAL FOOTAGE PREFERRED`
- **Source Reference IDs**: `R007-C`, `RV001`
- **Reference Asset Filenames**: `kids_boy_section_landscape_01.jpeg`, `store_walkthrough_vertical_01.mp4`
- **Starting Visual State**: Entrance vestibule looking at children's display.
- **Ending Visual State**: Facing the boys' clothes racks.
- **Camera Movement**: Pan left-to-right.
- **Subject/Action**: Camera pans across hanging garment bags.
- **Exact Google Flow Prompt**: `REAL FOOTAGE PREFERRED. If generating: Cinematic 9:16 vertical, 35mm lens. Use the supplied AME Bazaar kids section reference image kids_boy_section_landscape_01.jpeg and walkthrough video store_walkthrough_vertical_01.mp4 as the authoritative environment references. Preserve the exact wooden hangers, Funny Boy garment bags, and boxes. Do not reconstruct or redesign the showroom architecture. Camera pans slowly from left to right showing the kids section. Photorealistic.`
- **Transition Instruction**: Continuous pan linking to Men's racks.
- **Negative Constraints**: No generic replacement showroom, no luxury redesign.

### Scene 03 (10.0s – 15.0s)
- **Scene ID**: `SC_03`
- **Duration**: 5.0s
- **Story Purpose**: Introduce Men's collection racks.
- **Authenticity Level**: `REFERENCE-GROUNDED AI / REAL FOOTAGE PREFERRED`
- **Source Reference IDs**: `R007-B`, `RV001`
- **Reference Asset Filenames**: `mens_section_shirts_landscape_01.jpeg`, `store_walkthrough_vertical_01.mp4`
- **Starting Visual State**: Standing at men's shirt display.
- **Ending Visual State**: Angled view of folded shirt boxes.
- **Camera Movement**: Tilt down.
- **Exact Google Flow Prompt**: `REAL FOOTAGE PREFERRED. If generating: Cinematic 9:16 vertical, 35mm lens. Use the supplied AME Bazaar men's section reference image mens_section_shirts_landscape_01.jpeg and walkthrough video store_walkthrough_vertical_01.mp4 as the authoritative environment references. Preserve the exact white folding table surface, packed shirt boxes, and brand logos on shelves. Do not invent shelves, walls, or logos. Camera tilts down slowly. Photorealistic.`
- **Transition Instruction**: Match cut on the white tabletop surface.
- **Negative Constraints**: No high-end boutique layouts.

### Scene 04 (15.0s – 20.0s)
- **Scene ID**: `SC_04`
- **Duration**: 5.0s
- **Story Purpose**: Show Girls' and Women's shelves.
- **Authenticity Level**: `REFERENCE-GROUNDED AI / REAL FOOTAGE PREFERRED`
- **Source Reference IDs**: `R004`, `RV001`
- **Reference Asset Filenames**: `girls_section_shelves_landscape_01.jpeg`, `store_walkthrough_vertical_01.mp4`
- **Starting Visual State**: Front view of shelves (Eva, Mishu).
- **Ending Visual State**: Close view of folded piles.
- **Camera Movement**: Push-in tracking.
- **Exact Google Flow Prompt**: `REAL FOOTAGE PREFERRED. If generating: Cinematic 9:16 vertical, 35mm lens. Use the supplied AME Bazaar showroom reference image girls_section_shelves_landscape_01.jpeg and walkthrough video store_walkthrough_vertical_01.mp4 as the authoritative environment references. Preserve the exact shelving layout, JMD packages, and folded clothing. Do not replace the actual store with a generic fashion store. Camera pushes in slowly. Photorealistic.`
- **Transition Instruction**: Cut on shelf edge line.
- **Negative Constraints**: No generic departments.

### Scene 05 (20.0s – 25.0s)
- **Scene ID**: `SC_05`
- **Duration**: 5.0s
- **Story Purpose**: Show back aisle and trial room entrances.
- **Authenticity Level**: `REFERENCE-GROUNDED AI / REAL FOOTAGE PREFERRED`
- **Source Reference IDs**: `R007`, `RV001`
- **Reference Asset Filenames**: `trial_room_washroom_wide_landscape_01.jpeg`, `store_walkthrough_vertical_01.mp4`
- **Starting Visual State**: Looking down Trial Room corridor.
- **Ending Visual State**: Close on wood door paneling.
- **Camera Movement**: Dolly forward.
- **Exact Google Flow Prompt**: `REAL FOOTAGE PREFERRED. If generating: Cinematic 9:16 vertical, 35mm lens. Use the supplied AME Bazaar reference image trial_room_washroom_wide_landscape_01.jpeg and walkthrough video store_walkthrough_vertical_01.mp4 as the authoritative environment references. Preserve the exact glossy white panels, trial room wood door, wash room door, and AC vent layout. Camera dollies forward down the aisle. Photorealistic.`
- **Transition Instruction**: Sweep right to checkout.
- **Negative Constraints**: No luxury wood sliding doors.

### Scene 06 (25.0s – 30.0s)
- **Scene ID**: `SC_06`
- **Duration**: 5.0s
- **Story Purpose**: Billing Counter approach.
- **Authenticity Level**: `REFERENCE-GROUNDED AI / REAL FOOTAGE PREFERRED`
- **Source Reference IDs**: `R006`, `RV001`
- **Reference Asset Filenames**: `billing_counter_portrait_01.jpeg`, `store_walkthrough_vertical_01.mp4`
- **Starting Visual State**: Approaching the counter display.
- **Ending Visual State**: Static facing checkout counter.
- **Camera Movement**: Dolly approach.
- **Exact Google Flow Prompt**: `REAL FOOTAGE PREFERRED. If generating: Cinematic 9:16 vertical, 35mm lens. Use the supplied AME Bazaar billing counter reference image billing_counter_portrait_01.jpeg and walkthrough video store_walkthrough_vertical_01.mp4 as the authoritative environment references. Preserve the glass counter, wooden frame, LED shelf strip lights, and background Bazaar posters. Do not replace the real counter with a modern POS system. Camera walks forward to stop at the counter. Photorealistic.`
- **Transition Instruction**: Match cut on glass reflection.
- **Negative Constraints**: No barcode scanners.

### Scene 07 (30.0s – 35.0s)
- **Scene ID**: `SC_07`
- **Duration**: 5.0s
- **Story Purpose**: Focus on marble desk textures.
- **Authenticity Level**: `REFERENCE-GROUNDED AI / REAL FOOTAGE PREFERRED`
- **Source Reference IDs**: `R006-C`, `RV001`
- **Reference Asset Filenames**: `billing_counter_marble_landscape_01.jpeg`, `store_walkthrough_vertical_01.mp4`
- **Starting Visual State**: Angled view of marbled counters.
- **Ending Visual State**: Close on gold borders.
- **Camera Movement**: Pan left-to-right.
- **Exact Google Flow Prompt**: `REAL FOOTAGE PREFERRED. If generating: Cinematic 9:16 vertical, 35mm lens. Use the supplied AME Bazaar counter reference image billing_counter_marble_landscape_01.jpeg and walkthrough video store_walkthrough_vertical_01.mp4 as the authoritative environment references. Preserve the exact grey-brown marble counter, gold trim, and belt display case. Camera pans slowly left-to-right. Photorealistic.`
- **Transition Instruction**: Dissolve to end logo.
- **Negative Constraints**: No logo changes.

### Scene 08 (35.0s – 40.0s)
- **Scene ID**: `SC_08`
- **Duration**: 5.0s
- **Story Purpose**: Outro brand display.
- **Authenticity Level**: `REFERENCE-GROUNDED AI`
- **Source Reference IDs**: `R001`
- **Reference Asset Filenames**: `brand/logo.png`
- **Starting Visual State**: Fade-in brand screen.
- **Ending Visual State**: Displaying static contact details.
- **Camera Movement**: Static graphic frame.
- **Exact Google Flow Prompt**: `Premium motion graphic end frame, 9:16 vertical. Clean dark background. The AME Bazaar logo based on the supplied brand logo brand/logo.png animates centrally, transitioning to show: "Visit us at Mubarakpur Road, Kirari" and a WhatsApp icon next to "+91 99535 69533" in white and emerald-green text. Static clean display.`
- **Transition Instruction**: End of video reel.
- **Negative Constraints**: No logo modification.
