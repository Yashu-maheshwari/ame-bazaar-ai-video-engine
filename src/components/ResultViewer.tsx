import React, { useState } from 'react';
import { FastReelPlan, FastScene } from '../types';
import { Camera, Copy, CheckCircle2, AlertTriangle, ShieldCheck, Volume2, Film, Layers, ChevronDown, ChevronUp } from 'lucide-react';

interface ResultViewerProps {
  plan: FastReelPlan;
}

export default function ResultViewer({ plan }: ResultViewerProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showQADetails, setShowQADetails] = useState(false);

  const handleCopyPrompt = (prompt: string, idx: number) => {
    navigator.clipboard.writeText(prompt);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const qa = plan.qaResult;

  return (
    <div className="w-full flex flex-col gap-8 animate-in fade-in duration-300">
      
      {/* Production QA Header Banner */}
      <section className={`rounded-2xl border p-5 shadow-xs transition-all ${
        qa?.isProductionReady 
          ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950' 
          : 'bg-amber-50/80 border-amber-200 text-amber-950'
      }`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {qa?.isProductionReady ? (
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-xs">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold shadow-xs">
                <AlertTriangle className="w-6 h-6" />
              </div>
            )}

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-extrabold tracking-tight">
                  {qa?.isProductionReady ? '✓ Production Ready Plan' : '⚠ Missing Reference / QA Warning'}
                </h2>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                  qa?.isProductionReady ? 'bg-emerald-200 text-emerald-800' : 'bg-amber-200 text-amber-900'
                }`}>
                  QA Score: {qa?.scorePercentage || 100}%
                </span>
              </div>
              <p className="text-xs text-neutral-600 mt-0.5">
                {plan.environmentLock 
                  ? 'Location Lock Active (REAL_LOCATION_LOCK = true) • Permanent master identity anchors enforced'
                  : 'Location Lock Inactive'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowQADetails(!showQADetails)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-neutral-300/80 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 shadow-xs"
          >
            {showQADetails ? 'Hide QA Breakdown' : 'View QA Checklist'}
            {showQADetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* QA Breakdown Checklist */}
        {showQADetails && qa && (
          <div className="mt-4 pt-4 border-t border-neutral-200/80 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            {qa.checks.map((check) => (
              <div 
                key={check.id} 
                className={`p-2.5 rounded-lg border flex items-start gap-2 ${
                  check.passed ? 'bg-emerald-100/50 border-emerald-200 text-emerald-900' : 'bg-amber-100/50 border-amber-200 text-amber-900'
                }`}
              >
                {check.passed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="font-bold">{check.rule}</div>
                  {check.details && <div className="text-[11px] opacity-80 mt-0.5 font-mono">{check.details}</div>}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Hook Section */}
      <section className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-xs">
        <h2 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Opening Hook</h2>
        <p className="text-xl font-bold text-neutral-900 leading-snug">"{plan.hook}"</p>
      </section>

      {/* Verified Source Fact Sheet for Legal Content */}
      {plan.verifiedFacts && plan.verifiedFacts.length > 0 && (
        <section className="bg-indigo-50/70 rounded-2xl border border-indigo-200 p-5 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-indigo-200/80 pb-2.5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-700" />
              <h3 className="text-sm font-bold text-indigo-950">Verified Source Fact Sheet (Mandatory Legal Grounding)</h3>
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-300">
              Source-First Architecture
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            {plan.verifiedFacts.map((fact) => (
              <div key={fact.id} className="bg-white p-3 rounded-xl border border-indigo-200 shadow-2xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-extrabold px-1.5 py-0.5 rounded bg-indigo-900 text-white">
                    {fact.id}
                  </span>
                  <span className="text-[11px] text-neutral-500 font-mono">
                    {fact.citation || fact.source}
                  </span>
                </div>
                <p className="text-xs font-medium text-neutral-900 leading-relaxed pt-0.5">
                  {fact.proposition}
                </p>
                {fact.sourceUrl && (
                  <div className="text-[10px] text-indigo-600 truncate pt-1 font-mono">
                    Source: {fact.sourceUrl}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Scene Cards */}
      <section className="space-y-6">
        {plan.scenes.map((scene, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm relative space-y-5">
            
            {/* Header Badge */}
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-extrabold text-base shadow-xs">
                  {scene.sceneNumber || idx + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Scene {scene.sceneNumber || idx + 1} Production Instructions</h3>
                  <span className="text-xs text-neutral-500 font-mono">Estimated Duration: ~5 seconds</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {scene.factIds && scene.factIds.length > 0 && (
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Facts: {scene.factIds.join(', ')}
                  </span>
                )}
                <span className="px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold flex items-center gap-1">
                  <Film className="w-3.5 h-3.5" />
                  Google Flow Sequence
                </span>
              </div>
            </div>

            {/* Dialogue & Visual Action */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/80">
                <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                  <Volume2 className="w-4 h-4 text-neutral-600" />
                  Spoken Dialogue (Delhi Hinglish)
                </div>
                <p className="text-base font-semibold text-neutral-900 italic leading-relaxed">"{scene.dialogue}"</p>
              </div>

              <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/80">
                <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1.5">
                  <Camera className="w-4 h-4 text-neutral-600" />
                  Visual Action
                </div>
                <p className="text-sm font-medium text-neutral-800 leading-relaxed">{scene.visualAction}</p>
              </div>
            </div>

            {/* MASTER REFERENCES vs CONTINUITY REFERENCE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Permanent Master References */}
              <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-amber-700" />
                    Permanent Master References
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-900">
                    LOCKED IDENTITY
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-amber-950">
                  <div className="flex items-center justify-between font-mono bg-amber-100/60 px-2.5 py-1.5 rounded-md">
                    <span className="font-semibold">Character Master:</span>
                    <span className="font-bold text-amber-900">{scene.masterReferences?.characterMaster || 'WIFE_TEACHER_MASTER'}</span>
                  </div>
                  <div className="flex items-center justify-between font-mono bg-amber-100/60 px-2.5 py-1.5 rounded-md">
                    <span className="font-semibold">Environment Master:</span>
                    <span className="font-bold text-amber-900">{scene.masterReferences?.environmentMaster || 'COACHING_CENTER_MASTER'}</span>
                  </div>
                  {scene.masterReferences?.voiceMaster && (
                    <div className="flex items-center justify-between font-mono bg-amber-100/60 px-2.5 py-1.5 rounded-md">
                      <span className="font-semibold">Voice Master:</span>
                      <span className="font-bold text-amber-900">{scene.masterReferences.voiceMaster}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Continuity Reference */}
              <div className="bg-indigo-50/70 p-4 rounded-xl border border-indigo-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wider flex items-center gap-1">
                    <Layers className="w-4 h-4 text-indigo-700" />
                    Continuity Reference (Previous Frame)
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-200 text-indigo-900">
                    FRAME-TO-FRAME
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-indigo-950">
                  <div className="bg-indigo-100/60 p-2 rounded-md font-mono font-bold text-indigo-900">
                    Reference Frame: {scene.continuityReference || 'None (Initial Setup)'}
                  </div>
                  <p className="text-xs leading-relaxed opacity-90">
                    {scene.continuityInstruction}
                  </p>
                </div>
              </div>

            </div>

            {/* Camera Continuity & Shot Instructions */}
            {scene.cameraInstruction && (
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-xs space-y-1">
                <span className="font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1">
                  <Camera className="w-3.5 h-3.5 text-slate-600" />
                  Camera & Framing Continuity:
                </span>
                <p className="text-slate-700 font-medium">{scene.cameraInstruction}</p>
              </div>
            )}

            {/* Google Flow Prompt */}
            <div className="bg-neutral-900 rounded-xl p-4 relative group space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Exact Google Flow Production Prompt</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 font-mono">
                    Multi-Reference Mode
                  </span>
                </div>

                <button 
                  onClick={() => handleCopyPrompt(scene.googleFlowPrompt, idx)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors text-xs font-medium"
                  title="Copy Prompt"
                >
                  <Copy className="w-3.5 h-3.5" />
                  {copiedIndex === idx ? 'Copied!' : 'Copy Prompt'}
                </button>
              </div>

              <p className="text-sm text-neutral-200 font-mono leading-relaxed whitespace-pre-wrap selection:bg-neutral-700">
                {scene.googleFlowPrompt}
              </p>
            </div>

            {/* Negative Continuity Constraints & Final Frame */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {scene.negativeConstraints && (
                <div className="bg-rose-50/70 p-3 rounded-xl border border-rose-200 text-rose-950">
                  <span className="font-bold uppercase tracking-wider text-rose-800 block mb-1">
                    Negative Continuity Constraints:
                  </span>
                  <p className="opacity-90">{scene.negativeConstraints}</p>
                </div>
              )}

              <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-200 text-emerald-950 flex items-center justify-between">
                <div>
                  <span className="font-bold uppercase tracking-wider text-emerald-800 block mb-0.5">
                    Final Frame To Save:
                  </span>
                  <p className="font-mono font-bold text-emerald-900">{scene.finalFrameToSave}</p>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-200 text-emerald-900">
                  SAVE FOR SCENE {scene.sceneNumber ? scene.sceneNumber + 1 : idx + 2}
                </span>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-xs">
        <h2 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Call To Action (CTA)</h2>
        <p className="text-lg font-bold text-neutral-900">{plan.cta}</p>
      </section>

    </div>
  );
}
