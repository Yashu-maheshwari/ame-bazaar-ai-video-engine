import { PermanentAsset } from '../types';

// Default pre-seeded permanent reference assets
const DEFAULT_ASSETS: PermanentAsset[] = [
  {
    id: 'WIFE_TEACHER_MASTER',
    name: 'Wife Teacher Master Identity',
    type: 'character',
    description: 'Exact teacher facial identity, hair, Indian skin texture, clothing reference & teaching persona.',
    isLocked: true,
    updatedAt: new Date().toISOString(),
    presetId: 'wife-teacher',
    previewUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'COACHING_CENTER_MASTER',
    name: 'Coaching Centre Master Location',
    type: 'environment',
    description: 'Real coaching-centre classroom, walls, whiteboard position, ceiling lights & furniture spatial anchor.',
    isLocked: true,
    updatedAt: new Date().toISOString(),
    presetId: 'wife-teacher',
    previewUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'WIFE_TEACHER_VOICE_MASTER',
    name: 'Wife Teacher Voice Master',
    type: 'voice',
    description: 'Natural Delhi/North Indian female teacher voice specs, warm Hinglish cadence & natural pauses.',
    isLocked: true,
    updatedAt: new Date().toISOString(),
    presetId: 'wife-teacher',
  },
  {
    id: 'AME_BAZAAR_INFLUENCER_MASTER',
    name: 'AME Bazaar Influencer Master Identity',
    type: 'character',
    description: 'Permanent Indian fashion creator identity: natural Indian facial features, warm skin tone, stylish natural hair, casual creator persona (no plastic skin).',
    isLocked: true,
    updatedAt: new Date().toISOString(),
    presetId: 'ame-bazaar',
    previewUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'REAL_STORE_MASTER',
    name: 'AME Bazaar Real Store Environment',
    type: 'environment',
    description: 'Real family garments store in Kirari Delhi: entrance, men\'s/women\'s/kids\' clothing racks, shelves, billing counter & authentic store layout.',
    isLocked: true,
    updatedAt: new Date().toISOString(),
    presetId: 'ame-bazaar',
    previewUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'AME_BAZAAR_INFLUENCER_VOICE',
    name: 'AME Bazaar Influencer Voice Master',
    type: 'voice',
    description: 'Natural Indian female influencer voice, conversational Delhi Hinglish, friendly & casual social-media tone (no TV ad voice, no US/UK accent).',
    isLocked: true,
    updatedAt: new Date().toISOString(),
    presetId: 'ame-bazaar',
  },
  {
    id: 'LAWYER_AVATAR_MASTER',
    name: 'Lawyer Avatar Master Identity',
    type: 'character',
    description: 'Permanent Indian lawyer avatar identity: exact facial identity, natural Indian skin texture, hairstyle, professional legal persona (no plastic skin, no AI beauty filter).',
    isLocked: true,
    updatedAt: new Date().toISOString(),
    presetId: 'maheshwari-counsel',
    previewUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'LAWYER_OFFICE_CHAMBERS_MASTER',
    name: 'Lawyer Chambers Master Location',
    type: 'environment',
    description: 'Realistic professional lawyer office/chambers environment: wooden desk, legal bookshelves, warm ambient lighting & authoritative spatial anchor.',
    isLocked: true,
    updatedAt: new Date().toISOString(),
    presetId: 'maheshwari-counsel',
    previewUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'LAWYER_VOICE_MASTER',
    name: 'Lawyer Voice Master',
    type: 'voice',
    description: 'Professional Indian lawyer voice, calm, knowledgeable, approachable, authoritative but not intimidating, natural Indian English + Hinglish.',
    isLocked: true,
    updatedAt: new Date().toISOString(),
    presetId: 'maheshwari-counsel',
  },
  {
    id: 'INFLUENCER_MODEL_MASTER',
    name: 'AI Influencer Character Master',
    type: 'character',
    description: 'Consistent lifestyle influencer facial identity, hairstyle & camera presence.',
    isLocked: true,
    updatedAt: new Date().toISOString(),
    presetId: 'ai-influencer',
    previewUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'COFFEE_SHOP_MASTER',
    name: 'Cinematic Coffee Shop Environment',
    type: 'environment',
    description: 'High-end coffee shop interior, pour-over bar, warm lighting b-roll anchor.',
    isLocked: true,
    updatedAt: new Date().toISOString(),
    presetId: 'no-person',
    previewUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&auto=format&fit=crop&q=80'
  }
];

const STORAGE_KEY = 'ai_reel_director_permanent_assets_v2';

export function loadPermanentAssets(): PermanentAsset[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return DEFAULT_ASSETS;
    const parsed: PermanentAsset[] = JSON.parse(data);
    // Ensure all default assets exist in loaded state
    const assetMap = new Map<string, PermanentAsset>();
    DEFAULT_ASSETS.forEach(a => assetMap.set(a.id, a));
    parsed.forEach(a => assetMap.set(a.id, a));
    return Array.from(assetMap.values());
  } catch {
    return DEFAULT_ASSETS;
  }
}

export function savePermanentAsset(updatedAsset: PermanentAsset): PermanentAsset[] {
  const current = loadPermanentAssets();
  const idx = current.findIndex(a => a.id === updatedAsset.id);
  let next: PermanentAsset[];
  if (idx !== -1) {
    next = [...current];
    next[idx] = { ...updatedAsset, updatedAt: new Date().toISOString() };
  } else {
    next = [...current, { ...updatedAsset, updatedAt: new Date().toISOString() }];
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch (e) {
    console.error('Failed to save asset to localStorage', e);
  }
  return next;
}

export function getAssetsForPreset(presetId: string, allAssets: PermanentAsset[]): PermanentAsset[] {
  return allAssets.filter(a => a.presetId === presetId || a.id.toLowerCase().includes(presetId));
}
