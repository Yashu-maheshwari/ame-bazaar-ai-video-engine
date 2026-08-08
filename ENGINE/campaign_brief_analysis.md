# AME Bazaar AI Video Engine - Campaign Brief Analysis Module
Version: 1.0

# CAMPAIGN BRIEF ANALYSIS MODULE

--------------------------------------------------
PURPOSE
--------------------------------------------------

The Campaign Brief Analysis Module converts a raw, unstructured user video/reel request into a structured Campaign Production Brief. This analysis is executed before generating the Scene Package or final Google Flow prompts.

--------------------------------------------------
1. INPUT ANALYSIS PIPELINE
--------------------------------------------------

The reasoning model must parse the incoming brief to extract:
- **Campaign Goal**: Primary marketing objective.
- **Target Audience**: Demographic focus (e.g., Women in West Delhi, Local Families).
- **Featured Product**: Specific clothing item or collection (e.g., Women's Kurti, Kids' Raincoats).
- **Offer / Message**: Key value proposition (e.g., Custom tailoring, Monsoon discounts).
- **Video Duration**: Total duration in seconds (e.g., 30s, 40s, 60s).
- **Platform**: Destination network (e.g., Instagram Reels, YouTube Shorts).
- **Aspect Ratio**: Target frame dimensions (e.g., Vertical 9:16, Landscape 16:9).
- **Tone**: Aesthetic mood (e.g., Premium, Festive, Energetic).
- **Story Idea**: High-level visual narrative.
- **Call to Action (CTA)**: Targeted user action (e.g., WhatsApp inquiry, Store visit).

> [!IMPORTANT]
> **No business facts may be invented.** If any properties are absent from the user request, they must be marked as `UNKNOWN` or mapped with explicit, minimum assumptions.

--------------------------------------------------
2. PRODUCTION & SCENE SEQUENCING
--------------------------------------------------

Based on the duration (defaulting to 5 seconds per scene), determine:
- **Scene Count**: Total scenes required (e.g., 6 scenes for a 30s reel).
- **Story Arc**:
  - `Scene 1`: Opening Hook (0-5s)
  - `Scene 2-3`: Product Reveal / Texture Close-up (5-15s)
  - `Scene 4`: Store / Customer / Tailoring Interaction (15-20s)
  - `Scene 5`: Brand Moment (20-25s)
  - `Scene 6`: Final Call to Action (25-30s)

--------------------------------------------------
3. REFERENCE & CONTINUITY CHECKS
--------------------------------------------------
- **Reference Check**: Look up required layout, product, or logo identifiers in `KNOWLEDGE/reference_index_schema.md`. Mark unavailable assets as `MISSING`. Never invent Reference IDs.
- **Continuity Lock**: Map starting and ending frames between scene boundaries. Scene N must begin exactly where Scene N-1 ended.

--------------------------------------------------
4. OUTPUT SPECIFICATION (CAMPAIGN PRODUCTION BRIEF)
--------------------------------------------------

The output must be structured under this template schema:

```markdown
# CAMPAIGN PRODUCTION BRIEF: [Campaign ID, e.g., CAM_2026_001]

- **Campaign Goal**: [Goal]
- **Audience**: [Audience]
- **Product**: [Product]
- **Duration**: [Duration]
- **Platform**: [Platform]
- **Aspect Ratio**: [Aspect Ratio]
- **Tone**: [Tone]
- **Scene Count**: [Count]

## Story Arc & Scene Sequence
1. **Scene 1 (Hook)**: [Description] (Starts at 0s)
2. **Scene 2 (Product focus)**: [Description]
3. **Scene 3 (Interaction)**: [Description]
4. **Scene 4 (CTA / Logo)**: [Description] (Ends at [Duration])

## Reference Mappings
- **Logo ID**: [e.g., R001 | MISSING]
- **Store IDs**: [e.g., R004, R005 | MISSING]
- **Product IDs**: [e.g., P001 | MISSING]

## Continuity Requirements
- [Locked wardrobe parameters, lighting values, camera trajectory instructions]

## Audio & Narrative Details
- **Voice-over**: [Voice-over text]
- **Dialogue**: [Dialogue or WhatsApp markers]
- **Music Mood**: [Music theme]

## Gaps & Production Risks
- **Missing Information**: [List of UNKNOWN elements]
- **Risks**: [e.g., missing video references for Kids wear section]
```
