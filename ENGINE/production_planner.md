# AME Bazaar AI Video Engine - Production Planner Module
Version: 1.0

# PRODUCTION PLANNER MODULE

--------------------------------------------------
PURPOSE
--------------------------------------------------

The Production Planner Module converts a Campaign Production Brief into a scene-by-scene Production Plan. It acts as the bridging pipeline executing continuity logic and reference asset allocation prior to Scene Package compilation.

--------------------------------------------------
1. TIMELINE & SCENE LAYOUT STRATEGY
--------------------------------------------------

- **Timeline Integrity**: The planner must distribute scene durations so that their sum exactly matches the requested campaign duration.
- **Timestamp Tracking**:
  - `Scene 01`: 0s to 5s
  - `Scene 02`: 5s to 10s
  - `Scene 03`: 10s to 16s (Adjust dynamically to meet target time)

--------------------------------------------------
2. STORY & CAMERA CONTINUITY LOCK
--------------------------------------------------

To ensure the final reel looks like a single uninterrupted camera shoot:
- **Camera Start/End Coordinates**: Explicitly track camera physical start and end locations in the showroom.
- **Character Start/End Coordinates**: Lock character position and posture at the beginning and end of each clip.
- **Visual Memory Lock**:
  - *Identical Elements*: Store layout, background racks, ceiling lighting, floor textures, model wardrobe, and accessories.
  - *Dynamic Elements*: Focus distance, camera position (pan path), garment interaction, or product presentation.

--------------------------------------------------
3. REFERENCE SELECTION & SAFEGUARDS
--------------------------------------------------
- **Reference Indexing**: Map exact Reference IDs from `KNOWLEDGE/reference_index_schema.md` (e.g., `R002`, `RV001`, `P001`).
- **Safety Fallback**: If a reference asset is missing or unverified in the index, return `MISSING_REFERENCE`. Do not invent placeholders or assume an imaginary asset exists.

---

--------------------------------------------------
4. PRODUCTION PLAN TEMPLATE SCHEMA
--------------------------------------------------

The planner generates a structured output package following this schema:

```markdown
# CAMPAIGN PRODUCTION PLAN: [Campaign ID]

## Timeline & Reference Summary
- **Total Duration**: [Duration]
- **Target Platform**: [Platform]
- **Aspect Ratio**: [Aspect Ratio]

---

### Scene [ID, e.g., 01]
- **Story Purpose**: [e.g., Opening Hook / Hook interest in Kurtis]
- **Duration**: [e.g., 0s to 5s (5s)]
- **Start State**:
  - **Camera**: [Position, height, direction, lens, framing]
  - **Character**: [Pose, wardrobe details, gaze direction]
  - **Product**: [State, fold, layout position]
- **Main Action**:
  - **Character Action**: [Gently tracing fabric seam]
  - **Product Focus**: [Embroidery detail on collar]
  - **Camera Movement**: [Shallow focus push-in at 0.5 m/s]
- **Reference Assets Required**:
  - Store: [ID | MISSING_REFERENCE]
  - Product: [ID | MISSING_REFERENCE]
- **End State**:
  - **Camera**: [Ending position and angle]
  - **Character**: [Final pose at the boundary frame]
- **Connection to Scene [Next ID]**: [Detail match cut, whip pan direction, or tracking path continuation]

---

### Final Scene
- **Story Purpose**: [Call to Action / Branding End-frame]
- **Duration**: [e.g., 25s to 30s (5s)]
- **Start State**: [Must align with previous scene's end state]
- **Final Action**: [Character smiles toward camera, presents custom tailoring card or WhatsApp info]
- **Final Camera State**: [Static lock at eye level]
- **Final Brand State**: [Overlay logo R001 with WhatsApp contact +91 99535 69533]
- **Reference Assets Required**: [R001 (Logo), Store CTA background]

---

## Quality Gate Checklist
- [ ] Total scene durations sum exactly to target seconds.
- [ ] Every scene defines a clear Start and End state.
- [ ] Camera lenses and heights match across adjacent scene junctions.
- [ ] No Reference IDs are invented.
```
