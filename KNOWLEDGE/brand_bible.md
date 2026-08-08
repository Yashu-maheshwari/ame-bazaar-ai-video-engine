---
title: "AME Bazaar Brand Bible"
module: "BRAND"
version: "1.0.0"
status: "Approved"
owner: "Brand Director"
created: "2026-08-08"
last_updated: "2026-08-08"
source: "config/business_config.json, docs/BUSINESS_OPERATING_MANUAL.md, docs/AI_MEMORY.md"
confidence: "High"
dependencies: []
used_by:
  - "manifest.md"
tags:
  - "brand-identity"
  - "logo"
  - "typography"
  - "colors"
review_cycle: "Annual"
change_history:
  - version: "1.0.0"
    date: "2026-08-08"
    author: "Brand Director"
    description: "Initial release of the AME Bazaar Brand Bible."
---

# AME Bazaar Brand Bible

## Overview
This document defines the permanent visual identity, design rules, and aesthetic parameters of AME Bazaar for AI video generation. It is the single source of truth for ensuring consistent brand presentation across all generated campaigns and commercial video clips.

## Purpose
The AME Bazaar Brand Bible guides the Prompt Compiler to enforce brand integrity in generated video outputs. By defining logo constraints, color systems, product displays, and visual tone, it prevents AI models from inventing or distorting the brand's visual identity.

## Core Knowledge

### 1. Brand Identity & Name
- **Brand Name**: AME Bazaar (Apparel Maheshwari Enterprises Bazaar).
- **Pronunciation**: "A-M-E Bazaar".
- **Visual Translation**: The name represents a modern, welcoming, yet premium family department store bridging traditional Indian attire and contemporary wear.

### 2. Logo Rules
- **Official URL**: `https://amebazaar.in/wp-content/themes/ame-bazaar/assets/images/logo.png`
- **watermark Overlay Public ID (Cloudinary)**: `CLOUDINARY_LOGO_PUBLIC_ID` (dynamically overlaid at the bottom-right corner of promotional assets).
- **Placement in Video**: Storefront entrance signage must display the primary logo. Post-production or prompt packages must include a final frame featuring the AME Bazaar logo and WhatsApp CTA.
- **AI Rules**: Never alter the lettering, font, or relative spacing of the logo.

### 3. Primary & Secondary Colors
- **Accent/Primary Red**: `#e53e3e` (Warm, vibrant Crimson Red; used for action triggers and brand focus highlights).
- **Primary Blue**: `#2b6cb0` (Trustworthy, elegant Cobalt Blue; represents quality and reliable craftsmanship).
- **Accent Green**: `#38a169` (Fresh Emerald Green; typically associated with WhatsApp CTA markers).
- **Accent Orange**: `#dd6b20` (Warm Amber/Orange; used for ratings, reviews, and festive guides).
- **Aesthetic Tone**: Colors must feel trustworthy, elegant, and grounded in a fashion retail identity. Avoid overly bright or chaotic color mixtures.

### 4. Typography
- **Primary Web/Display Font**: Astra/Astra Child default theme typography (system-standard readable modern sans-serif).
- **Print / On-Screen overlay Typography**: Clean, high-legibility sans-serif fonts.
- **AI Rule**: Screen overlays (such as captions) must use modern, medium-weight sans-serif styling. Do not use decorative or script fonts for text overlays.

### 5. Signage
- **Entrance Signage**: Bold, clear, backlit sign reading "AME Bazaar" in white lettering against a premium dark or warm-wooden facade.
- **Directional/Section Signage**: Minimalist plaques designating "Women's Section", "Men's Section", "Kids Section", and "Custom Tailoring".

### 6. Packaging & Shopping Bags
- **Bags**: Durable, eco-friendly paper shopping bags in solid matte white or kraft brown with the crimson red AME Bazaar logo printed centrally on both sides.
- **Garment Boxes**: Premium boxes with clean folding lines, utilizing the same crimson logo brand aesthetic.

### 7. Staff Branding
- **Attire**: Professional, smart-casual attire. Staff members must look approachable, well-groomed, and helpful.
- **Name Tags**: Minimalist name tags with the AME Bazaar logo.

### 8. Product Presentation Style
- **Ethnic Wear (Sarees/Lehengas)**: Displayed on high-quality wooden hangers or draped elegantly on mannequins under warm accent lighting to emphasize texture, sheen, and embroidery detail.
- **Casual Wear (Shirts/Kurtis)**: Folded neatly on wooden shelving units or hung uniformly on clothes racks grouped by color gradients.

### 9. Visual Tone & Cinematography
- **Visual Style**: Premium, warm, elegant, clean, and organized.
- **Cinematography**: Slow, smooth tracking shots, gentle pans, and shallow depth of field to isolate product textures (such as Giza cotton, silk, and embroidery).
- **Lighting**: Bright warm spotlighting on hero clothes mixed with soft, clean ambient white fill.

---

## Rules
1. **Never Invent Names**: The brand must always be presented exactly as "AME Bazaar".
2. **Color Constraint**: Do not introduce neon, pastel, or highly saturated yellow/green palettes for store signage. Stick to the primary Crimson Red, Cobalt Blue, and warm wood tones.
3. **No Over-Branding**: Keep watermarks and logos limited to official positions (such as storefront signage, uniform chest pockets, shopping bags, and end CTAs). Do not place floating logo overlays inside the visual narrative scene.

## Relationships
- `manifest.md` references KNOWLEDGE modules to compile campaign assets.
- `KNOWLEDGE/brand_bible.md` shapes the wardrobe and environment configurations compiled in `OUTPUT/scene_package_specification.md`.

## References
- Business Config: [business_config.json](file:///D:/Projects/AME%20BAZAAR/config/business_config.json)
- Store Address: Mubarakpur Road, Kirari, Delhi - 110086.

## Version History

| Version | Date | Author | Description |
| :--- | :--- | :--- | :--- |
| 1.0.0 | 2026-08-08 | Brand Director | Initial release of the AME Bazaar Brand Bible. |
