# AME Bazaar AI Video Engine - SCENE PACKAGE SPECIFICATION
Version: 1.0

# SCENE PACKAGE SPECIFICATION

--------------------------------------------------
PURPOSE
--------------------------------------------------

The Scene Package is the universal production object of the AI Video Engine. The Prompt Compiler never directly generates a Google Flow prompt; it first compiles this Scene Package. This serves as the permanent production record of the scene.

--------------------------------------------------
SCENE PACKAGE STRUCTURE
--------------------------------------------------

Every Scene Package must follow this exact schema:

```yaml
---
scene_metadata:
  scene_id: "SCENE_XXX"
  scene_name: "[Descriptive Scene Name]"
  scene_goal: "[Objective of this scene in the commercial]"
  duration: "[Duration in seconds, e.g., 5s]"
  story_position: "[e.g., Hook / Mid / CTA]"
  previous_scene_id: "SCENE_YYY"
  next_scene_id: "SCENE_ZZZ"

reference_assets:
  required_images:
    - "[relative_path_to_reference_image]"
  required_videos:
    - "[relative_path_to_reference_video]"
  store_references:
    - "REF_STORE_ZONE_XXX"
  product_references:
    - "REF_PRODUCT_YYY"
  character_references:
    - "REF_CHARACTER_ZZZ"

environment:
  store_zone: "[e.g., Women's Section / Billing Counter]"
  lighting: "[e.g., Warm spotlights, cool natural ambient]"
  time: "[e.g., Afternoon]"
  weather: "[e.g., Indoor Studio / Overcast daylight]"
  crowd_level: "[e.g., Sparse / Busy]"

characters:
  primary_character:
    name: "[Character ID/Name]"
    wardrobe: "[Detail garment colors, fit, fabric patterns]"
    accessories: "[Jewelry, bags, footwear]"
    expression: "[Emotion targeted, e.g., Joyful/Surprised]"
    eye_direction: "[Focal point of eyes, e.g., Camera lens]"
  supporting_characters: []

camera:
  lens: "[e.g., 35mm f/1.8 cinematic prime]"
  height: "[e.g., Eye-level / 1.5m]"
  movement: "[e.g., Handheld slow tracking forward]"
  speed: "[e.g., 0.5 m/s]"
  direction: "[e.g., Push-in]"
  focus: "[e.g., Shallow Depth of Field on product texture]"
  framing: "[e.g., Medium Shot]"

action:
  primary_action: "[Step-by-step description of character action]"
  secondary_action: "[Background/ambient action details]"
  product_interaction: "[How characters touch/hold/present products]"
  walking_direction: "[Direction of walk relative to camera plane]"
  hand_movement: "[Specific gestures or hand grips]"
  product_movement: "[Visual path of the garment/product]"

audio:
  voice_over: "[Narration script]"
  dialogue: "[Spoken dialogue on-camera]"
  ambient_sound: "[e.g., Subtle showroom bustle, soft murmurs]"
  music_mood: "[e.g., Modern ambient acoustic, premium traditional]"

continuity:
  transition_in: "[Cut/Match/Pan from previous scene]"
  transition_out: "[Cut/Match/Pan to next scene]"
  previous_scene_memory: "[Last frame properties of previous scene]"
  next_scene_hint: "[First frame target properties of next scene]"

google_flow:
  compiled_prompt: "[The final optimized Google Flow prompt string]"
  negative_prompt: "CGI, 3D render, cartoon, robotic motion, teleports, wardrobe shifts"
  quality_notes: "[Target rendering resolution and aspect ratios]"

quality_check:
  store_consistency: false
  character_consistency: false
  lighting_consistency: false
  camera_consistency: false
  brand_consistency: false
  reference_assets_present: false
  continuity_verified: false
---
```
