# AME Bazaar AI Video Engine - Visual Asset Audit Report
Version: 1.0

# VISUAL ASSET AUDIT REPORT
**Campaign Link**: `CAMPAIGNS/ame_bazaar_40sec_test/`

---

## 1. WORKSPACE ACCESS LIMITATION
> [!WARNING]
> **GMB ASSETS NOT AVAILABLE IN WORKSPACE**
>
> The Google Business Profile / Google My Business (GMB) API or local downloads for AME Bazaar media uploads are not integrated or accessible within the current offline development container environment. No external live photos or dashboard image lists could be parsed.

---

## 2. AVAILABLE CANDIDATES
- **Asset**: `logo.png`
  - **File**: `https://amebazaar.in/wp-content/themes/ame-bazaar/assets/images/logo.png`
  - **What it shows**: Custom typographic branding logo for Apparel Maheshwari Enterprises (AME Bazaar).
  - **Confidence**: High (Directly mapped from `config/business_config.json` and site QA configurations).
  - **Potential Reference ID**: `R001`
  - **Google Flow Usefulness**: High (Used as standard logo layer watermark overlay for commercial end-frames).

---

## 3. LOW-CONFIDENCE CANDIDATES
- **Asset**: `mixkit-fashion-woman-with-silver-dress-in-a-studio-setting-40292-large.mp4`
  - **File**: `https://assets.mixkit.co/videos/preview/mixkit-fashion-woman-with-silver-dress-in-a-studio-setting-40292-large.mp4`
  - **What it shows**: A model in a silver dress in a studio setting.
  - **Confidence**: Low (Stock video fallback configured in the main AI OS system, not representative of the real AME Bazaar showroom environment).
  - **Potential Reference ID**: None (Do not use to ground AME Bazaar showroom architecture).
  - **Google Flow Usefulness**: Low.

---

## 4. MISSING
All critical visual assets required to realistically recreate the physical AME Bazaar showroom are currently missing from the local workspace:
- **R002** (Store Exterior Photo) - **MISSING**
- **R003** (Store Entrance Photo) - **MISSING**
- **R004** (Women's Section Wide Photo/Video) - **MISSING**
- **R005** (Saree Display Photo) - **MISSING**
- **R006** (Billing Counter Photo) - **MISSING**
- **R007** (Shopping Bag Photo) - **MISSING**
- **P001** (Saree Fabric Closeup Photo) - **MISSING**
- **C001** (Model/Character Sheet) - **MISSING**

---

## 5. RECOMMENDED CAPTURES
To satisfy the missing reference index, the store operations team must run the **Store Data Collection Protocol** to capture:
1. **R002 & R003**: Front exterior and main entrance transition tracking video.
2. **R004 & R005**: Wide corner photos of the ethnic wear section and targeted product hanger closeups.
3. **R006 & R007**: Close-up of the checkout counter and flat lay of the branded paper shopping bag.
