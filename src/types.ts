export interface MasterReferences {
  characterMaster: string;
  environmentMaster: string;
  voiceMaster?: string;
}

export interface VerifiedFact {
  id: string;
  proposition: string;
  source: string;
  citation?: string;
  sourceUrl?: string;
  verificationDate?: string;
}

export interface FastScene {
  sceneNumber: number;
  dialogue: string;
  visualAction: string;
  masterReferences: MasterReferences;
  referenceId: string;
  referencePurpose: string;
  continuityInstruction: string;
  continuityReference: string;
  cameraInstruction: string;
  googleFlowPrompt: string;
  negativeConstraints?: string;
  finalFrameToSave: string;
  factIds?: string[];
}

export interface QACheckItem {
  id: string;
  rule: string;
  passed: boolean;
  details?: string;
}

export interface ProductionQAResult {
  isProductionReady: boolean;
  scorePercentage: number;
  checks: QACheckItem[];
}

export interface FastReelPlan {
  hook: string;
  environmentLock: boolean;
  presetProfile: string;
  scenes: FastScene[];
  cta: string;
  verifiedFacts?: VerifiedFact[];
  qaResult?: ProductionQAResult;
}

export interface ProductionPreset {
  id: string;
  label: string;
  prompt: string;
  characterAsset?: string;
  environmentAsset?: string;
  voiceAsset?: string;
  environmentLock: boolean;
  continuityMode: "strict" | "normal";
  cameraMode: "locked" | "adaptive";
  description?: string;
}

export interface PermanentAsset {
  id: string;
  name: string;
  type: 'character' | 'environment' | 'voice';
  description: string;
  previewUrl?: string;
  isLocked: boolean;
  updatedAt: string;
  presetId: string;
}
