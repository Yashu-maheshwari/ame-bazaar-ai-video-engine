# AME Bazaar AI Video Engine - KNOWLEDGE METADATA STANDARD
Version: 1.0

# KNOWLEDGE METADATA STANDARD

--------------------------------------------------
PURPOSE
--------------------------------------------------

You are the Knowledge Standard Architect.

Your responsibility is to create one universal metadata standard that every knowledge document inside the AI Video Engine must follow.

Never create business knowledge. Create only the metadata specification.

--------------------------------------------------
1. UNIVERSAL METADATA SCHEMA (FRONTMATTER)
--------------------------------------------------

Every knowledge document must begin with the following frontmatter header block:

```yaml
---
title: "[Name of the Knowledge Document]"
module: "[BRAND | STORE | PRODUCTS | CHARACTERS | FILM | CAMPAIGNS | ASSETS | TEMPLATES]"
version: "X.Y.Z"
status: "[Draft | Approved | Obsolete]"
owner: "[Role Name, e.g., Production Designer]"
created: "YYYY-MM-DD"
last_updated: "YYYY-MM-DD"
source: "[Source of Truth, e.g., Store Walkthrough, Owner Interview, Supplier Catalog]"
confidence: "[High | Medium | Low]"
dependencies:
  - "[Relative path to dependency file 1]"
  - "[Relative path to dependency file 2]"
used_by:
  - "[Relative path to user file 1]"
  - "[Relative path to user file 2]"
tags:
  - "[tag1]"
  - "[tag2]"
review_cycle: "[Annual | Seasonal | Per Campaign]"
change_history:
  - version: "X.Y.Z"
    date: "YYYY-MM-DD"
    author: "[Role / Name]"
    description: "[Summary of change]"
---
```

--------------------------------------------------
2. STANDARD DOCUMENT LAYOUT
--------------------------------------------------

Below the Universal Metadata Schema, every document must follow this exact section hierarchy:

```markdown
# [Title matches Frontmatter title]

## Overview
A brief, high-level summary of what this document covers and what system capabilities it enables.

## Purpose
The specific rationale behind this knowledge document and which production decisions or compile pipelines depend on it.

## Core Knowledge
The atomic, structured facts, parameters, mappings, or directories. Use tables, definitions, or lists to optimize for readability and AI extraction.

## Rules
Strict guidelines, constraints, and instructions that govern the usage of this knowledge (e.g., product selection combinations, continuity checks).

## Relationships
Visual or list-based maps showing how this knowledge links to other modules in the subsystem (e.g., Product -> Campaign).

## References
Verified links to static image/video assets, schema specs, or source docs in the repository.

## Version History
Detailed markdown table showing the historical revisions matching the `change_history` metadata.
```

--------------------------------------------------
3. VERSIONING RULES
--------------------------------------------------

The engine uses Semantic Versioning (`Major.Minor.Patch`) for all knowledge documents:

- **Major (X.0.0)**: Major architectural changes, layout reorganizations, or brand-wide identity shifts that break backwards compatibility.
- **Minor (0.Y.0)**: New seasonal collections added, new camera lenses registered, new characters cast, or new operational steps integrated without breaking existing structures.
- **Patch (0.0.Z)**: Typo corrections, URL updates, metadata adjustments, or minor fact updates (e.g., small price edits).

--------------------------------------------------
4. REPOSITORY STANDARDS
--------------------------------------------------
- **Modularity**: One file per responsibility (e.g., `women_sarees.md`, not `women_wardrobe.md`).
- **File Names**: Lowercase only, underscore-separated, ending in `.md`.
- **References**: All reference files must link locally using relative markdown links (e.g., `../assets/store_front.png`).

--------------------------------------------------
5. VALIDATION CHECKLIST
--------------------------------------------------
- [ ] Universal YAML frontmatter exists and is fully populated.
- [ ] No duplicate facts exist elsewhere in the repository.
- [ ] Section order strictly matches standard document layout.
- [ ] Semantic versioning rules are followed and recorded in frontmatter and layout.
- [ ] Internal file links and image/video assets paths are verified.
