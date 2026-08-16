<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# AME Bazaar AI Video Engine & Reel Production Director (V2)

## 1. Project Overview
The **AME Bazaar AI Video Engine** is a continuity-first production planning, prompt compiler, and AI Reel Production Director designed to generate high-fidelity, visually consistent, multi-scene short-form video Reels (~15–30 seconds, 3 connected scenes) using Google Flow and Google Veo.

---

## 2. Production Profiles

The system supports four validated V2 production profiles:

1. **Wife AI Teacher (Coaching Centre)**: 15s educational coaching Reels (Maths, Accounts, Science, English) in front of an authentic coaching centre whiteboard (`WIFE_TEACHER_MASTER` + `COACHING_CENTER_MASTER`).
2. **AME Bazaar AI Influencer**: Authentic fashion creator Reels visiting the real family garments store in Kirari, Delhi with physical location lock (`AME_BAZAAR_INFLUENCER_MASTER` + `REAL_STORE_MASTER`).
3. **Maheshwari Counsel (Lawyer AI)**: Educational legal-information Reels using the user's **Native Google Flow / Gemini Avatar** in formal advocate attire (black coat, white shirt) with topic-appropriate legal environment.
4. **No-Person Cinematic (Style-Locked)**: Ultra-high-end product showcases and atmospheric B-roll with zero humans and locked lighting/lens continuity (`NO_PERSON_CINEMATIC_STYLE_ANCHOR`).

---

## 3. Key Documentation

* [`V2_SPECIFICATION.md`](V2_SPECIFICATION.md): Complete frozen V2 system specification, input/output schemas, master asset references, continuity rules, and QA checklists.
* [`social_media_automation.md`](social_media_automation.md): Comprehensive social media automation architecture, manual Google Flow SOP, fact-source rules, and n8n integration roadmap.

---

## 4. Run & Deploy Locally

### Prerequisites
* **Node.js** (v18+)
* **Gemini API Key**

### Getting Started
1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Configure environment variables**:
   Create a `.env` file (or copy `.env.example`):
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=3000
   ```
3. **Run local development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

---

## 5. Repository Execution Pipeline
$$\text{User Concept / Topic} \rightarrow \text{AI Reel Director} \rightarrow \text{Automated QA Engine} \rightarrow \text{3-Scene Google Flow Prompt Package} \rightarrow \text{Frame-to-Frame Generation (Veo)} \rightarrow \text{Publish}$$
