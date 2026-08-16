# AME Bazaar AI Video Engine - REFERENCE ASSET STANDARD
Version: 1.0

# REFERENCE ASSET STANDARD

--------------------------------------------------
MISSION
--------------------------------------------------

Reference Assets are the highest priority visual knowledge of the AI Video Engine. This document defines how reference images and reference videos are collected, stored, indexed, and selected for Google Flow prompt generation.

Prompts must always use reference assets before descriptive text whenever available.

--------------------------------------------------
1. REFERENCE FOLDER STRUCTURE
--------------------------------------------------

Visual references must be organized under the `REFERENCE/` directory as follows:

```text
REFERENCE/
├── store/                  # Store layout & sections (Exterior, Entrance, Counter, Sections)
├── camera/                 # Gear & movement calibration assets
├── lighting/               # Ambient, spotlighting, & color temperature standards
└── products/               # Garment, fabric texture, & product closeups
```

--------------------------------------------------
2. REFERENCE TYPE STANDARDS
--------------------------------------------------

### Store Exterior / Entrance
- **Purpose**: Grounding the reel hook/intro.
- **Required Media**: JPG/PNG (High Resolution).
- **Recommended Quantity**: 3 angles.
- **Orientation**: Wide (16:9) & Vertical (9:16).
- **Naming**: `store_exterior_wide_001.jpg`, `store_entrance_front_001.jpg`.
- **Location**: `REFERENCE/store/`.

### Sections (Women's, Men's, Kids')
- **Purpose**: Background environmental continuity.
- **Required Media**: Tracking MP4/WebM videos & static JPGs.
- **Recommended Quantity**: 2 videos, 5 images per section.
- **Orientation**: Vertical (9:16).
- **Naming**: `women_section_wide_001.jpg`, `kids_section_walkthrough_001.mp4`.
- **Location**: `REFERENCE/store/`.

### Product / Fabric Close-ups
- **Purpose**: High-detail product showcases.
- **Required Media**: Macro JPG images.
- **Recommended Quantity**: 3 per hero garment.
- **Orientation**: Macro close-ups.
- **Naming**: `fabric_silk_saree_macro_001.jpg`, `product_kurti_embroidery_001.jpg`.
- **Location**: `REFERENCE/products/`.

---

--------------------------------------------------
3. METADATA STANDARD
--------------------------------------------------

Every reference asset listed in the index must contain:

```yaml
---
reference_id: "REF_STORE_ENTRANCE_001"
location: "REFERENCE/store/store_entrance_front_001.jpg"
category: "Store Entrance"
scene_usage: "Diwali Campaign Intro, Store Entrance Tracking"
camera_angle: "Eye Level / Tracking"
lighting_condition: "Warm interior spot, overcast exterior ambient"
confidence: "High"
verified: true
last_updated: 2026-08-08
---
```

--------------------------------------------------
4. ASSET SELECTION RULES
--------------------------------------------------
1. **Scenario Matching**: The context loader must extract assets tagged with the specific target category matching the brief's location requirements.
2. **Confidence Check**: Only reference assets with `verified: true` and `confidence: High` may be passed to the Prompt Compiler.

--------------------------------------------------
5. REFERENCE USAGE RULES
--------------------------------------------------
1. **Never Invent Showrooms**: If an angle or section reference does not exist, the compiler must default to the nearest verified parent section (e.g., matching the broad "Women's Section" wide angle if the "Trial Room Entrance" is missing).
2. **Aesthetic Lock**: Lighting and rack arrangements in reference images must be directly targeted in the prompt descriptions to ensure models do not generate fantasy display layouts.

--------------------------------------------------
6. GOOGLE FLOW INTEGRATION RULES
--------------------------------------------------
- Prompts compiled under the prompt standard must explicitly output reference links in the prompt structure block:
  `[Reference Asset ID: REF_STORE_ENTRANCE_001] -> target layout initialization.`
- The compiler maps these IDs to local paths or public URLs so the reasoning engine knows which input images/videos to feed the Google Flow model.
