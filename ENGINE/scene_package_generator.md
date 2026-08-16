# AME Bazaar AI Video Engine - Scene Package Generator Module
Version: 1.0

# SCENE PACKAGE GENERATOR MODULE

--------------------------------------------------
PURPOSE
--------------------------------------------------

The Scene Package Generator Module processes a completed Production Plan and converts each chronological scene outline into a fully detailed, structured Scene Package object conforming to `OUTPUT/scene_package_specification.md` for handoff to the Prompt Compiler.

--------------------------------------------------
1. INPUT PARSING & SCHEMAS
--------------------------------------------------

The generator consumes:
- **Campaign Brief & Production Plan**: Scene timelines, goals, and reference asset requirements.
- **Reference Index Schema**: Mapping verified IDs (`R001`, `RV001`, `P001`). Unverified or absent assets must return `MISSING_REFERENCE`.
- **Continuity Engine**: State alignment metrics for camera vector tracking, model wardrobe preservation, and environment configurations.

--------------------------------------------------
2. OUTPUT STRUCTURING (SCENE PACKAGE OBJECT)
--------------------------------------------------

For every scene in the timeline, the generator compiles the following dataset:

### Scene Metadata
- **Scene ID**: Chronological index identifier (e.g., `SCENE_01`).
- **Scene Goal**: Narrative objective.
- **Scene Duration**: Start and end timestamps in seconds.
- **Sequence Mapping**: Pointers to `previous_scene_id` and `next_scene_id`.

### Environment & Reference Mappings
- **Showroom Zone**: Target section (e.g., Women's Section, Billing Counter).
- **Asset Links**: Exact Reference IDs (e.g., `R002`, `R004`). If required reference is unavailable, output `MISSING_REFERENCE`.

### Character Setup
- **Character Identity**: Locked properties (Model ID, wardrobe fabrics, styling, accessories).
- **Coordinates & Action**: Physical starting and ending coordinate states, gaze tracking direction, expressions.

### Camera & Motion Vectors
- **Aperture & Lens**: Lens millimeters, height calibration, framing (e.g., Close-up).
- **Movement Path**: Trajectory speed, focus target, motion direction vector.

### Narrative & Audio
- **Audio Channels**: Voice-over script, ambient sound overlays, dialogue, music themes.

### Continuity locks
- **Memory Check**: Ending frame state of Scene N-1 mapped to starting frame state of Scene N.
- **Locked Elements**: List of properties that must remain completely unchanged (e.g., wardrobe pattern, rack positions).

---

--------------------------------------------------
3. PROMPT COMPILER HANDOFF SCHEMA
--------------------------------------------------

Every compiled scene package must terminate with this handoff block:

```yaml
---
PROMPT_COMPILER_INPUT:
  scene_id: "SCENE_01"
  environment_grounding:
    zone: "Women's Section"
    references:
      - "R004"
      - "RV001"
  character_grounding:
    wardrobe: "Dark crimson silk saree with gold embroidery borders"
    starting_pose: "Standing profile view facing left toward rack"
  camera_vector:
    lens: "35mm"
    movement: "Slow tracking push-in"
    direction: "Forward"
  target_compilation_template: "google_flow_standard.md"
---
```

Do not generate the final prompt string inside the Scene Package Generator. It is reserved for the Prompt Compiler.
