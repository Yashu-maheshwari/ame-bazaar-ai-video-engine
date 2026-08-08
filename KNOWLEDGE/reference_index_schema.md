---
title: "Reference Index Schema"
module: "ASSETS"
version: "1.0.0"
status: "Approved"
owner: "Assets Manager"
created: "2026-08-08"
last_updated: "2026-08-08"
source: "KNOWLEDGE/reference_standard.md"
confidence: "High"
dependencies:
  - "KNOWLEDGE/reference_standard.md"
used_by:
  - "manifest.md"
tags:
  - "reference"
  - "assets"
  - "index"
  - "schema"
review_cycle: "Seasonal"
change_history:
  - version: "1.0.0"
    date: "2026-08-08"
    author: "Assets Manager"
    description: "Initial release of the Reference Index Schema."
---

# Reference Index Schema

## Overview
This document defines the permanent ID-based system for indexing all real AME Bazaar visual references. It enables reasoning engines to map precise reference assets to Google Flow prompts without relying on assumptions.

## Purpose
The Reference Index Schema standardizes asset metadata, categorization, and identification to prevent reasoning models from inventing asset identifiers or assuming files exist when they are not physically present in the repository.

## Core Knowledge

### 1. Reference ID Format
- **Logo/General Assets**: `R001`, `R002`, `R003`...
- **Variants/Alternative Angles**: `R004-A`, `R004-B`...
- **Video Reference Assets**: `RV001`, `RV002`...
- **Product Reference Assets**: `P001`, `P002`...
- **Character Reference Assets**: `C001`, `C002`...

### 2. Required Metadata Schema
Every asset registered in the reference index must define:
```yaml
---
reference_id: "[R001 | RV001 | P001]"
file_name: "[relative_path_to_file, e.g., REFERENCE/store/store_exterior_001.jpg]"
asset_type: "[Logo | Store Photo | Store Video | Product Photo | Product Video | Character | Camera | Lighting | Texture | Packaging]"
category: "[Exterior | Entrance | Interior Wide | Women's Section | Men's Section | Kids Section | Billing Counter | Trial Room | Racks | Shelves | Ceiling | Floor | Lighting | Signage | Walking Path | Staff Area]"
description: "[Detailed visual description of contents]"
physical_location: "[Coordinates or descriptive path in the physical showroom]"
purpose: "[Role in prompt generation, e.g., Hook grounding]"
camera_angle: "[e.g., Eye-level wide]"
orientation: "[Landscape 16:9 | Vertical 9:16 | Square 1:1]"
resolution: "[e.g., 3840x2160]"
capture_date: "YYYY-MM-DD"
verification_status: "[Verified | Unverified]"
google_flow_usage: "[Parameters mapping to Google Flow configurations]"
related_references:
  - "[ID of related reference]"
continuity_usage: "[Instructions for preservation across scenes]"
notes: "[Any additional constraints]"
---
```

---

## Rules

### 1. AI Selection Rules
When generating a Google Flow scene:
1. Identify the required visual environment.
2. Search the Reference Index.
3. Select the minimum required references.
4. Return the Reference IDs.
5. Tell the user exactly which files must be uploaded to Google Flow.
6. Never invent a Reference ID.
7. Never assume a reference exists.
8. If required evidence is missing, mark it as `MISSING`.

### 2. Google Flow Output Requirement
Every production package must explicitly list required reference assets before the final prompt:
```text
REFERENCE ASSETS REQUIRED:
- R002 — Store entrance
- R004 — Women's section wide
- RV001 — Store walkthrough
```

### 3. Continuity Rule
Reference assets used in one scene must be reused in subsequent scenes whenever appropriate. Track:
- `previous_scene_references`
- `current_scene_references`
- `next_scene_references`

## Relationships
- Links directly to `KNOWLEDGE/reference_standard.md` to map category definitions.
- Governs how Prompt Compiler compiles inputs in `OUTPUT/scene_package_specification.md`.

## References
- Reference Asset Standard: [reference_standard.md](file:///D:/Projects/ame-bazaar-ai-video-engine/KNOWLEDGE/reference_standard.md)

## Version History

| Version | Date | Author | Description |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-08-08 | Assets Manager | Initial release of the Reference Index Schema. |
