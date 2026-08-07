# AME Bazaar AI Video Engine - GOOGLE FLOW PROMPT STANDARD
Version: 1.0

# GOOGLE FLOW PROMPT STANDARD

--------------------------------------------------
MISSION
--------------------------------------------------

The final output of the AI Video Engine is a production-ready Google Flow prompt.

Every AI assistant must generate prompts using this standard. Never invent a new prompt format.

--------------------------------------------------
OBJECTIVE
--------------------------------------------------

Generate prompts that produce the real AME Bazaar showroom, consistent characters, continuous camera movement, connected scenes, and realistic commercial footage.

--------------------------------------------------
PROMPT STRUCTURE
--------------------------------------------------

Every Google Flow prompt package must follow this exact section hierarchy:

### 1. Production Goal
- **Campaign**: [e.g., Diwali Festive Launch 2026]
- **Target Platform**: [e.g., Instagram Reel (9:16)]
- **Total Estimated Duration**: [e.g., 15 seconds]

### 2. Scene Goal
- **Scene Number**: [e.g., Scene 01 of 03]
- **Scene Objective**: [e.g., Establish local trust and showroom entry]

### 3. Reference Assets
- **Store Reference Image**: `[relative_path_to_store_front_image]`
- **Product Reference Image**: `[relative_path_to_garment_close_up]`
- **Character Consistency Image**: `[relative_path_to_model_mugshot]`

### 4. Store Identity
- Description of the physical Kirari Delhi showroom layout, display shelves, and signs based on the Store Bible.

### 5. Character Identity
- Descriptions of actors (faces, body proportions, clothing, hair, makeup) based on Character consistency profiles.

### 6. Camera Language
- Lens size, perspective, physical camera movements, focal target, and autofocus rules based on Camera Bible rules.

### 7. Lighting
- Ambient light description, exposure adjustments, and color temperatures based on Lighting rules.

### 8. Actions
- High-fidelity physical movement description of characters in the scene, frame-by-frame pacing.

### 9. Dialogue
- Spoken on-camera dialogue (if any).

### 10. Voice Over
- Narration script mapping directly to scene timestamps.

### 11. Transition From Previous Scene
- Physical starting frame match instructions matching the ending frame of the previous scene.

### 12. Transition To Next Scene
- Ending frame target instructions designed to match the starting frame of the subsequent scene.

### 13. Negative Prompt
- Disallowed states: `CGI, 3D render, cartoon, fantasy, unnatural faces, robotic movement, teleportation, wardrobe resetting, lighting shifts`.

### 14. Quality Checklist
- Brand consistency: [ ]
- Store consistency: [ ]
- Character consistency: [ ]
- Seamless transitions: [ ]
- Camera continuity: [ ]
- Lighting continuity: [ ]

--------------------------------------------------
CONTINUITY
--------------------------------------------------

Every scene must continue naturally. Never reset store, characters, lighting, camera, product arrangement, or customer positions. Scene N must begin exactly where Scene N-1 ended.
