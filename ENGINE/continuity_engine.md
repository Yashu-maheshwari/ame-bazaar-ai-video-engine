# AME Bazaar AI Video Engine - CINEMATIC CONTINUITY ENGINE
Version: 1.0

# CINEMATIC CONTINUITY ENGINE

--------------------------------------------------
MISSION
--------------------------------------------------

The Cinematic Continuity Engine ensures that independently generated video clips maintain identical visual, narrative, and technical properties, creating the illusion of a single, continuous, real-world camera shoot inside the AME Bazaar showroom.

--------------------------------------------------
1. CONTINUITY RULES
--------------------------------------------------

### Visual Continuity
- Wardrobe, hair, makeup, accessories, and products must match frame-to-frame.
- Background customers, rack placements, and merchandise ordering must remain static unless a scene action details a change.

### Camera Continuity
- Match lens sizes (e.g., standard 35mm), focal lengths, and aperture depths.
- Keep the camera axis stable; avoid crossing the 180-degree line.

### Lighting Continuity
- Maintain light color temperature (warm spots, cool ambient fill) and shadow directions.
- Keep exposure levels locked between scene junctions.

---

--------------------------------------------------
2. TRANSITION RULES
--------------------------------------------------

Every scene junction must specify:
- **Transition In / Out**: Describe the matching mechanical transition (e.g., whip pan, match cut, continuous tracking).
- **Exit & Entry Directions**: If the camera moves Right-to-Left in Scene N's exit, it must continue Right-to-Left in Scene N+1's entry.
- **Exit & Entry Positions**: Track the coordinates of characters in the frame at boundary cuts.

--------------------------------------------------
3. CAMERA & VISUAL MEMORY parameters
--------------------------------------------------
The engine locks and tracks the following properties across scenes:
- `current_lens_mm`: (Default: 35mm)
- `camera_height`: (Default: Eye-level / 1.5m)
- `movement_speed`: (Default: Slow handheld pan / 0.5 m/s)
- `focus_target`: (Default: Main character/garment texture)
- `environment_state`: (Exposed racks, billing counters, wood panels, floor tiles)

--------------------------------------------------
4. GOOGLE FLOW INTEGRATION RULES
--------------------------------------------------
Every compiled prompt package must output a **Continuity Reference block**:
```text
Previous Scene End State: [Describe ending frame camera positioning & character pose]
Current Scene Start State: [Match previous end state exactly]
Next Scene Target State: [Define target ending frame parameters for the next compiler run]
```
No prompt may be generated in isolation.
