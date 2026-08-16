import React, { useState, useEffect } from 'react';
import { Sparkles, Loader2, Play, ShieldCheck, CheckCircle2, Film } from 'lucide-react';
import { generateReelPlan } from '../api';
import { FastReelPlan, ProductionPreset, PermanentAsset } from '../types';
import { loadPermanentAssets, getAssetsForPreset } from '../lib/assetsStorage';
import { runProductionQA } from '../lib/qaCheck';
import PermanentAssetsManager from './PermanentAssetsManager';
import ResultViewer from './ResultViewer';

const PRODUCTION_PRESETS: ProductionPreset[] = [
  {
    id: 'wife-teacher',
    label: 'Wife AI Teacher (Coaching)',
    prompt: "Teacher explaining the 3 golden rules of journal entries.",
    characterAsset: 'WIFE_TEACHER_MASTER',
    environmentAsset: 'COACHING_CENTER_MASTER',
    voiceAsset: 'WIFE_TEACHER_VOICE_MASTER',
    environmentLock: true,
    continuityMode: 'strict',
    cameraMode: 'locked',
    description: 'Continuity-locked coaching centre reel with permanent teacher avatar & location anchor.'
  },
  {
    id: 'ame-bazaar',
    label: 'AME Bazaar AI Influencer',
    prompt: "AME Bazaar mein women's collection ka natural Instagram Reel.",
    characterAsset: 'AME_BAZAAR_INFLUENCER_MASTER',
    environmentAsset: 'REAL_STORE_MASTER',
    voiceAsset: 'AME_BAZAAR_INFLUENCER_VOICE',
    environmentLock: true,
    continuityMode: 'strict',
    cameraMode: 'adaptive',
    description: 'Realistic Instagram Reels for AME Bazaar family garments store in Kirari Delhi with real store layout and permanent Indian fashion creator.'
  },
  {
    id: 'maheshwari-counsel',
    label: 'Maheshwari Counsel (Lawyer AI)',
    prompt: "Trademark infringement kya hota hai?",
    characterAsset: 'Native Google Flow Avatar',
    environmentAsset: 'Topic-Appropriate Legal Setting',
    voiceAsset: 'Indian Advocate Voice (Natural Hinglish)',
    environmentLock: true,
    continuityMode: 'strict',
    cameraMode: 'locked',
    description: 'Realistic educational legal-information Reels using Native Google Flow Avatar in advocate attire (black coat, white shirt) with 3-scene continuity.'
  },
  {
    id: 'ai-influencer',
    label: 'AI Influencer',
    prompt: "AI fashion influencer talking about sustainable fashion trends in ethnic wear.",
    characterAsset: 'INFLUENCER_MODEL_MASTER',
    environmentAsset: 'STUDIO_LOFT_MASTER',
    voiceAsset: 'INFLUENCER_VOICE_MASTER',
    environmentLock: false,
    continuityMode: 'normal',
    cameraMode: 'adaptive',
    description: 'Trendy lifestyle influencer with consistent facial identity.'
  },
  {
    id: 'no-person',
    label: 'No-Person Cinematic (Style-Locked)',
    prompt: "Premium Fabric Textures",
    characterAsset: 'NONE (Zero People)',
    environmentAsset: 'NO_PERSON_CINEMATIC_STYLE_ANCHOR',
    voiceAsset: 'Atmospheric Cinematic Audio (No Speech)',
    environmentLock: false,
    continuityMode: 'strict',
    cameraMode: 'adaptive',
    description: 'High-end product showcase & atmospheric B-roll with style-locked lighting, lens continuity, and zero people.'
  }
];

export default function ReelDirector() {
  const [prompt, setPrompt] = useState('Teacher explaining the 3 golden rules of journal entries.');
  const [profile, setProfile] = useState('wife-teacher');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<FastReelPlan | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [assets, setAssets] = useState<PermanentAsset[]>([]);

  useEffect(() => {
    setAssets(loadPermanentAssets());
  }, []);

  const activePreset = PRODUCTION_PRESETS.find(p => p.id === profile) || PRODUCTION_PRESETS[0];

  const handleProfileSelect = (presetId: string) => {
    setProfile(presetId);
    const selected = PRODUCTION_PRESETS.find(p => p.id === presetId);
    if (selected) {
      setPrompt(selected.prompt);
    }
  };

  const handleGenerate = async (submitPrompt: string) => {
    if (!submitPrompt.trim()) return;
    
    setIsGenerating(true);
    setError(null);
    setResult(null);

    try {
      const plan = await generateReelPlan(submitPrompt, profile);
      
      // Run Production QA Check on generated plan
      const qaResult = runProductionQA(plan, profile);
      const enrichedPlan: FastReelPlan = {
        ...plan,
        presetProfile: profile,
        qaResult
      };

      setResult(enrichedPlan);
    } catch (err: any) {
      setError(err.message || "An error occurred while generating the plan.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-neutral-900 flex items-center justify-center text-white font-bold shadow-xs">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-neutral-900">AI Reel Production Director</h1>
                <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-extrabold uppercase tracking-widest">
                  V2 Google Flow
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Continuity Engine Active
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8">
        
        {/* Hero Banner */}
        <section className="w-full max-w-4xl mx-auto space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              Continuity-First Production Planner
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              Generates frame-to-frame continuous Google Flow production instructions locked to permanent character, location, and voice anchors.
            </p>
          </div>

          {/* Profile Selectors */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {PRODUCTION_PRESETS.map((p) => (
              <button
                key={p.id}
                onClick={() => handleProfileSelect(p.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  profile === p.id 
                    ? 'bg-neutral-900 text-white shadow-md scale-102' 
                    : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Preset Chips */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Preset Concept:</span>
            <button
              onClick={() => setPrompt(activePreset.prompt)}
              className="px-3.5 py-1.5 rounded-full bg-white border border-neutral-300 text-xs font-semibold text-neutral-800 hover:border-neutral-400 hover:bg-neutral-100 transition-colors shadow-2xs"
            >
              "{activePreset.prompt}"
            </button>
          </div>
        </section>

        {/* Permanent Reference Assets Manager */}
        <section className="w-full max-w-4xl mx-auto">
          <PermanentAssetsManager 
            assets={assets} 
            activeProfile={profile} 
            onAssetsUpdate={(updated) => setAssets(updated)} 
          />
        </section>

        {/* Prompt Input & Trigger */}
        <section className="w-full max-w-4xl mx-auto space-y-4">
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-2.5 flex flex-col sm:flex-row gap-2 relative">
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter reel concept or lesson topic..."
              className="flex-grow resize-none rounded-xl border-0 bg-transparent px-4 py-3 text-neutral-900 focus:ring-0 text-base placeholder:text-neutral-400 outline-none min-h-[70px]"
              rows={2}
            />
            <div className="flex flex-col justify-end p-1">
              <button
                onClick={() => handleGenerate(prompt)}
                disabled={isGenerating || !prompt.trim()}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-6 font-bold text-white transition-all hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-xs"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Directing Production...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    Generate Production Plan
                  </>
                )}
              </button>
            </div>
          </div>
          
          {error && (
            <div className="p-4 rounded-xl bg-red-50 text-red-700 border border-red-200 text-sm font-medium">
              {error}
            </div>
          )}
        </section>

        {/* Results Section */}
        {result && (
          <section className="w-full max-w-5xl mx-auto border-t border-neutral-200 pt-8">
            <ResultViewer plan={result} />
          </section>
        )}

      </main>
    </div>
  );
}
