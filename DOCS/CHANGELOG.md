# CHANGELOG.md - Subsystem Revision History

- **Last Updated:** 2026-08-08
- **Version:** 1.13.0
- **Owner:** AI Video Engine Core
- **Purpose:** Tracks revisions, architectural updates, and schema changes in the independent AI Video Engine repository.

---

## Change Log

### [1.13.0] - 2026-08-08
#### Changed
- Fixed first test campaign reference grounding under `CAMPAIGNS/ame_bazaar_40sec_test/production_package.md` to enforce evidence-first environment locks, model tags, and asset verification checks.

### [1.12.0] - 2026-08-08
#### Added
- Created the first test campaign assets under `CAMPAIGNS/ame_bazaar_40sec_test/production_package.md` detailing the scene packages and prompt guides.

### [1.11.0] - 2026-08-08
#### Added
- Implemented `ENGINE/scene_package_generator.md` defining schema parsers, output mapping structures, and prompt handoff blocks for scene compilation.

### [1.10.0] - 2026-08-08
#### Added
- Implemented `ENGINE/production_planner.md` defining timeline layouts, coordinate trackers, visual lock strategies, and output schemas for production planning.

### [1.9.0] - 2026-08-08
#### Added
- Implemented `ENGINE/campaign_brief_analysis.md` establishing input parsing parameters, scene sequencing structures, and missing info flags for campaign generation.

### [1.8.0] - 2026-08-08
#### Added
- Implemented `KNOWLEDGE/reference_index_schema.md` establishing the permanent ID-based schema and selection rules for store, camera, and product references.

### [1.7.0] - 2026-08-08
#### Added
- Implemented `KNOWLEDGE/brand_bible.md` defining core visual identity, design guidelines, logo usage constraints, color palettes, and visual presentation styles.

### [1.6.0] - 2026-08-08
#### Added
- Implemented `OUTPUT/scene_package_specification.md` defining the self-contained structural schema for the compiler's primary output packages.

### [1.5.0] - 2026-08-08
#### Added
- Implemented `ENGINE/continuity_engine.md` defining lens configurations, visual memory constraints, scene transition rules, and Google Flow prompt integration parameters.

### [1.4.0] - 2026-08-08
#### Added
- Implemented `WORKFLOWS/store_collection_protocol.md` defining capture sequence parameters, checklists, and naming standards for physical store data collection.

### [1.3.0] - 2026-08-08
#### Added
- Implemented `KNOWLEDGE/reference_standard.md` defining folder structures, asset parameters, naming schemas, and integration rules for visual reference media.

### [1.2.0] - 2026-08-08
#### Changed
- Rewrote the main repository `README.md` as an AI-first navigation guide to standardize entry paths and context loading strategies for any reasoning engine.

### [1.1.0] - 2026-08-08
#### Added
- Implemented `SYSTEM/ai_access_protocol.md` defining the rules and constraints for multi-scene reels and platform-agnostic compilation.

### [1.0.0] - 2026-08-08
#### Added
- Migrated codebase to a dedicated repository (`Yashu-maheshwari/ame-bazaar-ai-video-engine`).
- Implemented `manifest.md` mapping out the complete subsystem index, executions, and dependency graphs.
- Persisted the core subsystem modules (`SYSTEM`, `ENGINE`, `KNOWLEDGE`, `WORKFLOWS`, `TEMPLATES`, `DOCS`).
