import React, { useState, useRef } from 'react';
import { CheckCircle2, Upload, Eye, Volume2, Image as ImageIcon, ShieldCheck, RefreshCw, X } from 'lucide-react';
import { PermanentAsset } from '../types';
import { savePermanentAsset } from '../lib/assetsStorage';

interface PermanentAssetsManagerProps {
  assets: PermanentAsset[];
  activeProfile: string;
  onAssetsUpdate: (updatedAssets: PermanentAsset[]) => void;
}

export default function PermanentAssetsManager({ assets, activeProfile, onAssetsUpdate }: PermanentAssetsManagerProps) {
  const [previewingAsset, setPreviewingAsset] = useState<PermanentAsset | null>(null);
  const [editingAssetId, setEditingAssetId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (activeProfile === 'maheshwari-counsel') {
    return (
      <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <h3 className="text-base font-bold text-neutral-900">Maheshwari Counsel — Native Avatar Workflow</h3>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold border border-indigo-200">
              Native Google Flow Avatar
            </span>
          </div>
          <span className="text-xs text-emerald-600 font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> No image upload required
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-900 font-mono">PRIMARY IDENTITY</span>
              <span className="text-[10px] font-mono text-neutral-400 uppercase">Native Flow</span>
            </div>
            <h4 className="text-sm font-bold text-neutral-900">Native Google Flow Avatar</h4>
            <p className="text-xs text-neutral-600">
              The user's native Google Flow / Gemini avatar is the primary identity source. The director builds copy-paste ready prompts around this native avatar across all scenes.
            </p>
          </div>

          <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-neutral-900 font-mono">ADVOCATE PERSONA</span>
              <span className="text-[10px] font-mono text-neutral-400 uppercase">Appearance</span>
            </div>
            <h4 className="text-sm font-bold text-neutral-900">Formal Legal Attire</h4>
            <p className="text-xs text-neutral-600">
              Black advocate coat, crisp white shirt, formal legal demeanor, natural Indian appearance, realistic human proportions without beauty filters or influencer styling.
            </p>
          </div>

          <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-900 font-mono">CONTINUITY ENGINE</span>
              <span className="text-[10px] font-mono text-neutral-400 uppercase">Chaining</span>
            </div>
            <h4 className="text-sm font-bold text-neutral-900">3-Scene Frame Chaining</h4>
            <p className="text-xs text-neutral-600">
              Scene 1 saves <code className="text-xs bg-neutral-200 px-1 py-0.5 rounded text-neutral-800">frame_scene_1.png</code> $\rightarrow$ Scene 2 references it and saves <code className="text-xs bg-neutral-200 px-1 py-0.5 rounded text-neutral-800">frame_scene_2.png</code> $\rightarrow$ Scene 3 completes the legal takeaway.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const profileAssets = assets.filter(a => a.presetId === activeProfile || (activeProfile === 'wife-teacher' && a.id.startsWith('WIFE_')) || (activeProfile === 'ame-bazaar' && (a.id.startsWith('AME_') || a.id.startsWith('REAL_STORE') || a.id.startsWith('R001_'))));

  if (profileAssets.length === 0) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingAssetId) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      const targetAsset = assets.find(a => a.id === editingAssetId);
      if (targetAsset) {
        const updated = savePermanentAsset({
          ...targetAsset,
          previewUrl: dataUrl,
          isLocked: true,
          updatedAt: new Date().toISOString()
        });
        onAssetsUpdate(updated);
      }
      setEditingAssetId(null);
    };
    reader.readAsDataURL(file);
  };

  const triggerUpload = (assetId: string) => {
    setEditingAssetId(assetId);
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 p-5 shadow-sm space-y-4">
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*,audio/*" 
        className="hidden" 
      />

      <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <h3 className="text-base font-bold text-neutral-900">Permanent Reference Assets</h3>
          <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 font-medium">
            REAL_LOCATION_LOCK = true
          </span>
        </div>
        <span className="text-xs text-neutral-400">
          Locked master references applied to all generated scenes
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {profileAssets.map((asset) => (
          <div 
            key={asset.id} 
            className="group relative bg-neutral-50 rounded-xl border border-neutral-200 p-4 transition-all hover:border-neutral-300 hover:shadow-xs flex flex-col justify-between gap-3"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  ✓ Reference locked
                </span>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{asset.type}</span>
              </div>

              <div className="font-bold text-sm text-neutral-900 font-mono tracking-tight">{asset.id}</div>
              <p className="text-xs text-neutral-500 mt-1 line-clamp-2">{asset.description}</p>
            </div>

            {/* Thumbnail preview if available */}
            {asset.previewUrl && (
              <div className="relative h-24 w-full rounded-lg overflow-hidden bg-neutral-200 border border-neutral-300/60">
                <img 
                  src={asset.previewUrl} 
                  alt={asset.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
            )}

            {asset.type === 'voice' && !asset.previewUrl && (
              <div className="h-16 w-full rounded-lg bg-indigo-50/60 border border-indigo-100 flex items-center justify-center gap-2 text-indigo-700 text-xs font-medium">
                <Volume2 className="w-4 h-4 text-indigo-600" />
                <span>Voice Anchor Active (Natural Delhi Hinglish)</span>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center gap-2 pt-1 border-t border-neutral-200/60">
              <button
                onClick={() => triggerUpload(asset.id)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-xs font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors"
              >
                <Upload className="w-3.5 h-3.5 text-neutral-500" />
                {asset.previewUrl ? 'Replace' : 'Upload'}
              </button>
              
              {asset.previewUrl && (
                <button
                  onClick={() => setPreviewingAsset(asset)}
                  className="inline-flex items-center justify-center p-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                  title="Preview Asset"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Preview */}
      {previewingAsset && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-xl border border-neutral-200 relative">
            <button 
              onClick={() => setPreviewingAsset(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h4 className="text-lg font-bold text-neutral-900">{previewingAsset.id}</h4>
            </div>
            <p className="text-sm text-neutral-600">{previewingAsset.description}</p>
            {previewingAsset.previewUrl && (
              <div className="rounded-xl overflow-hidden border border-neutral-200 max-h-80 bg-black flex items-center justify-center">
                <img src={previewingAsset.previewUrl} alt={previewingAsset.name} className="max-h-80 object-contain" />
              </div>
            )}
            <div className="flex justify-end pt-2">
              <button 
                onClick={() => setPreviewingAsset(null)}
                className="px-4 py-2 bg-neutral-900 text-white rounded-xl text-sm font-semibold hover:bg-neutral-800"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
