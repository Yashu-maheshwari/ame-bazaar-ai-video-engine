import { FastReelPlan } from './types';

export async function generateReelPlan(prompt: string, profile: string): Promise<FastReelPlan> {
  const response = await fetch('/api/generate-reel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt, profile }),
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.details || errData.error || 'Failed to generate reel plan.');
  }

  return response.json();
}
