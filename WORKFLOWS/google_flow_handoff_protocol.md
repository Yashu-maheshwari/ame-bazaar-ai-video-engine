# AME Bazaar AI Video Engine - Google Flow Handoff Protocol
Version: 1.0

# GOOGLE FLOW HANDOFF PROTOCOL

--------------------------------------------------
PURPOSE
--------------------------------------------------

This protocol defines the operational workflow for taking compiled production packages from this repository and executing the actual video generation inside the Google Flow tool.

--------------------------------------------------
1. HANDOFF WORKFLOW SEQUENCE
--------------------------------------------------
1. **Receive Production Package**: Load the generated `production_package.md` containing the scene-by-scene blueprints.
2. **Identify Target Scene**: Process each scene sequentially (Scene 01 through Scene 08).
3. **Collect Reference IDs**: Identify listed references (e.g., `R003`, `C001`, `P001`) required for the current scene.
4. **Locate Media Files**: Retrieve the actual photographic/video files corresponding to those IDs under the local `REFERENCE/` library.
5. **Upload to Google Flow**: Manually upload the reference media files into the Google Flow input slots.
6. **Paste Scene Prompt**: Copy the compiled text prompt from the scene package and paste it into the Google Flow prompt field.
7. **Generate Scene**: Run the generator to produce the raw 5-second video clip.
8. **Review Result**: Pass the generated clip through the Quality Gate.
9. **Save Approved Scene**: Export and store the approved clip as `scene_[number].mp4`.
10. **Extract Continuity Frame**: Capture the final frame of the approved clip.
11. **Chain to Next Scene**: Feed the saved final frame as the starting seed/reference image for the next scene's generation.
12. **Final Assembly**: Concatenate the approved clips in sequential order.

---

--------------------------------------------------
2. REFERENCE ASSET UPLOAD CHECKLIST
--------------------------------------------------
> [!IMPORTANT]
> **Reference IDs are pointers, not automatic Google Flow attachments.** Google Flow cannot access your GitHub repository directly. You must locate the physical files on your local drive and upload them manually.

For every scene generation, verify:
- [ ] Correct scene prompt copied.
- [ ] Environment references (`R002`-`R006`) uploaded.
- [ ] Product references (`P001`) uploaded.
- [ ] Character/Model references (`C001`) uploaded.
- [ ] Seed frame from previous scene uploaded.
- [ ] 9:16 vertical aspect ratio checked.
- [ ] Low-motion scale (0.3-0.5) selected.

--------------------------------------------------
3. QUALITY GATE CRITERIA
--------------------------------------------------
Reject the generated clip and re-generate if:
- Store racks, flooring, or lighting layouts shift unexpectedly between frames.
- Character wardrobe patterns, hairstyle, or facial features alter.
- The camera angle or position jumps abruptly from the ending state of the previous clip.
- Motion artifacts (teleportation, morphing, or chaotic physics) occur.

--------------------------------------------------
4. FINAL ASSEMBLY & EXPORT
--------------------------------------------------
- **File Naming**: Save approved scene clips as `scene_01.mp4`, `scene_02.mp4`, etc.
- **Transitional Cuts**: Match-cuts must be aligned exactly at scene boundaries. Apply a 0.2-second cross-dissolve when transitioning to graphic cards.
- **Export Specifications**: Export the finished reel at 1080x1950 (9:16 vertical), 30fps or 60fps, utilizing standard H.264 MP4 wrappers.
