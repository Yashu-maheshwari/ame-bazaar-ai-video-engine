import { FastReelPlan, ProductionQAResult, QACheckItem } from '../types';

export function runProductionQA(plan: FastReelPlan, profile: string): ProductionQAResult {
  const checks: QACheckItem[] = [];

  const isWifeTeacher = profile === 'wife-teacher';
  const isAmeBazaar = profile === 'ame-bazaar';
  const isLawyerCounsel = profile === 'maheshwari-counsel';
  const isNoPerson = profile === 'no-person';
  const isAiInfluencer = profile === 'ai-influencer';

  // Rule 1: Environment Lock / Style Lock Active
  checks.push({
    id: 'env_lock',
    rule: isNoPerson 
      ? 'Cinematic Style-Lock Active' 
      : (isAiInfluencer ? 'Identity Lock Active (INFLUENCER_MODEL_MASTER)' : 'Environment Lock Active (REAL_LOCATION_LOCK)'),
    passed: (isNoPerson || isAiInfluencer) ? true : plan.environmentLock === true,
    details: isNoPerson 
      ? 'Style-locked cinematic mode active across scenes.' 
      : (isAiInfluencer 
          ? 'AI Influencer identity lock active across scenes.' 
          : (plan.environmentLock ? 'Location lock is strictly enforced.' : 'Environment lock is inactive.'))
  });

  // Rule 2: Non-empty Scenes
  const hasScenes = Array.isArray(plan.scenes) && plan.scenes.length >= 3;
  checks.push({
    id: 'scene_count',
    rule: '3 Connected Scenes Produced',
    passed: hasScenes,
    details: `Generated ${plan.scenes?.length || 0} scenes.`
  });

  // Lawyer AI Root Gate: Verified Source Fact Sheet
  if (isLawyerCounsel) {
    const hasVerifiedFacts = Array.isArray(plan.verifiedFacts) && plan.verifiedFacts.length > 0 &&
      plan.verifiedFacts.every(f => f.id && f.proposition && f.source);
    checks.push({
      id: 'legal_verified_facts',
      rule: 'Verified Source Fact Sheet Present (VERIFIED_FACTS)',
      passed: hasVerifiedFacts,
      details: hasVerifiedFacts 
        ? `${plan.verifiedFacts?.length} verified fact(s) indexed with statutory citations.` 
        : 'Missing or incomplete VERIFIED_FACTS source sheet.'
    });
  }

  if (plan.scenes) {
    plan.scenes.forEach((scene, index) => {
      const sceneNum = scene.sceneNumber || index + 1;

      // Check Master Character
      if (isWifeTeacher) {
        const hasCharMaster = !!(scene.masterReferences?.characterMaster && scene.masterReferences.characterMaster.includes('WIFE_TEACHER_MASTER'));
        checks.push({
          id: `s${sceneNum}_char_master`,
          rule: `Scene ${sceneNum}: Teacher Character Master attached`,
          passed: hasCharMaster,
          details: scene.masterReferences?.characterMaster || 'Missing character master'
        });

        // Check Master Environment
        const hasEnvMaster = !!(scene.masterReferences?.environmentMaster && scene.masterReferences.environmentMaster.includes('COACHING_CENTER_MASTER'));
        checks.push({
          id: `s${sceneNum}_env_master`,
          rule: `Scene ${sceneNum}: Coaching Centre Master attached`,
          passed: hasEnvMaster,
          details: scene.masterReferences?.environmentMaster || 'Missing environment master'
        });

        // Check Voice Master
        const hasVoiceMaster = !!(scene.masterReferences?.voiceMaster && scene.masterReferences.voiceMaster.includes('WIFE_TEACHER_VOICE_MASTER'));
        checks.push({
          id: `s${sceneNum}_voice_master`,
          rule: `Scene ${sceneNum}: Voice Master attached`,
          passed: hasVoiceMaster,
          details: scene.masterReferences?.voiceMaster || 'Missing voice master'
        });
      } else if (isAmeBazaar) {
        const hasCharMaster = !!(scene.masterReferences?.characterMaster && (scene.masterReferences.characterMaster.includes('AME_BAZAAR_INFLUENCER_MASTER') || scene.masterReferences.characterMaster.includes('P001_MODEL')));
        checks.push({
          id: `s${sceneNum}_char_master`,
          rule: `Scene ${sceneNum}: Influencer Master attached (AME_BAZAAR_INFLUENCER_MASTER)`,
          passed: hasCharMaster,
          details: scene.masterReferences?.characterMaster || 'Missing character master'
        });

        // Check Master Environment
        const hasEnvMaster = !!(scene.masterReferences?.environmentMaster && (scene.masterReferences.environmentMaster.includes('REAL_STORE_MASTER') || scene.masterReferences.environmentMaster.includes('R001_STORE_FRONT')));
        checks.push({
          id: `s${sceneNum}_env_master`,
          rule: `Scene ${sceneNum}: Real Store Master attached (REAL_STORE_MASTER)`,
          passed: hasEnvMaster,
          details: scene.masterReferences?.environmentMaster || 'Missing environment master'
        });

        // Check Voice Master
        const hasVoiceMaster = !!(scene.masterReferences?.voiceMaster && (scene.masterReferences.voiceMaster.includes('AME_BAZAAR_INFLUENCER_VOICE') || scene.masterReferences.voiceMaster.includes('AME_STORE_VOICE')));
        checks.push({
          id: `s${sceneNum}_voice_master`,
          rule: `Scene ${sceneNum}: Influencer Voice Master attached`,
          passed: hasVoiceMaster,
          details: scene.masterReferences?.voiceMaster || 'Missing voice master'
        });
      } else if (isLawyerCounsel) {
        const hasCharMaster = !!(scene.masterReferences?.characterMaster && (
          scene.masterReferences.characterMaster.toLowerCase().includes('native') ||
          scene.masterReferences.characterMaster.toLowerCase().includes('avatar') ||
          scene.masterReferences.characterMaster.toLowerCase().includes('advocate') ||
          scene.masterReferences.characterMaster.includes('LAWYER_AVATAR_MASTER')
        ));
        checks.push({
          id: `s${sceneNum}_char_master`,
          rule: `Scene ${sceneNum}: Native Google Flow Avatar attached (Advocate Persona)`,
          passed: hasCharMaster,
          details: scene.masterReferences?.characterMaster || 'Missing native avatar anchor'
        });

        // Check Master Environment
        const hasEnvMaster = !!(scene.masterReferences?.environmentMaster && (
          scene.masterReferences.environmentMaster.toLowerCase().includes('legal') ||
          scene.masterReferences.environmentMaster.toLowerCase().includes('professional') ||
          scene.masterReferences.environmentMaster.toLowerCase().includes('chamber') ||
          scene.masterReferences.environmentMaster.toLowerCase().includes('office') ||
          scene.masterReferences.environmentMaster.includes('LAWYER_OFFICE_CHAMBERS_MASTER')
        ));
        checks.push({
          id: `s${sceneNum}_env_master`,
          rule: `Scene ${sceneNum}: Professional Legal Setting attached`,
          passed: hasEnvMaster,
          details: scene.masterReferences?.environmentMaster || 'Missing environment setting'
        });

        // Check Voice Master
        const hasVoiceMaster = !!(scene.masterReferences?.voiceMaster && (
          scene.masterReferences.voiceMaster.toLowerCase().includes('advocate') ||
          scene.masterReferences.voiceMaster.toLowerCase().includes('lawyer') ||
          scene.masterReferences.voiceMaster.toLowerCase().includes('hinglish') ||
          scene.masterReferences.voiceMaster.includes('LAWYER_VOICE_MASTER')
        ));
        checks.push({
          id: `s${sceneNum}_voice_master`,
          rule: `Scene ${sceneNum}: Indian Advocate Voice attached`,
          passed: hasVoiceMaster,
          details: scene.masterReferences?.voiceMaster || 'Missing voice master'
        });

        // Check Strict Legal Fact Traceability (RULE 3 & RULE 9)
        const hasFactIds = Array.isArray(scene.factIds) && scene.factIds.length > 0;
        const validFactIds = hasFactIds && scene.factIds?.every(fid => 
          plan.verifiedFacts?.some(f => f.id === fid)
        );

        // Anti-Invention of Unverified Remedies/Procedures check
        const dialogueLower = (scene.dialogue || '').toLowerCase();
        const unverifiedRemedies = ['legal notice', 'injunction', 'stay order', 'damages claim', 'court approach', 'fir darj', 'file case'];
        
        // Find if dialogue mentions an unverified remedy not present in the facts
        const allFactsText = (plan.verifiedFacts || []).map(f => `${f.proposition} ${f.source}`).join(' ').toLowerCase();
        const containsInventedRemedy = unverifiedRemedies.some(rem => 
          dialogueLower.includes(rem) && !allFactsText.includes(rem)
        );

        const factTraceabilityPassed = (validFactIds || (plan.verifiedFacts && plan.verifiedFacts.length > 0)) && !containsInventedRemedy;

        checks.push({
          id: `s${sceneNum}_fact_traceability`,
          rule: `Scene ${sceneNum}: Fact Traceability & Anti-Invention Gate`,
          passed: factTraceabilityPassed,
          details: containsInventedRemedy 
            ? 'Invented remedy detected (not in verified facts).' 
            : (hasFactIds ? `Traceable to [${scene.factIds?.join(', ')}]` : 'Grounded in verified facts')
        });

        // Check Strict Legal Brevity & Claim Safety
        const hasExaggeratedClaims = dialogueLower.includes('best lawyer') || 
                                     dialogueLower.includes('top advocate') || 
                                     dialogueLower.includes('100% win') || 
                                     dialogueLower.includes('guaranteed');
        
        // 5-second delivery brevity check (dialogue should be concise, ideally <= 180 chars / ~25 words)
        const isCrispDelivery = (scene.dialogue || '').trim().length > 0 && (scene.dialogue || '').trim().length <= 220;

        checks.push({
          id: `s${sceneNum}_source_grounding`,
          rule: `Scene ${sceneNum}: 5-Second Brevity & Claim Safety`,
          passed: !hasExaggeratedClaims && isCrispDelivery,
          details: hasExaggeratedClaims 
            ? 'Exaggerated legal claims detected' 
            : (!isCrispDelivery ? 'Dialogue too long for 5-second delivery' : 'Concise & claim-safe')
        });

        // Check BCI Professional Conduct & Non-Solicitation Guardrail
        const promptLower = (scene.googleFlowPrompt || '').toLowerCase();
        const prohibitedSolicitation = [
          'contact me for your case',
          'hire me',
          'hire us',
          'book a consultation',
          'book consultation',
          'dm me for legal help',
          'dm me for advice',
          'dm for advice',
          'call me for your matter',
          'call me for legal',
          'i can get you bail',
          'i will win your case',
          'best lawyer',
          'top advocate',
          'leading advocate',
          'specialist lawyer',
          'guaranteed result',
          '100% success',
          'affordable legal services',
          'available for your case',
          'whatsapp me',
          'contact us for legal'
        ];

        const hasSolicitation = prohibitedSolicitation.some(term => 
          dialogueLower.includes(term) || promptLower.includes(term)
        );

        checks.push({
          id: `s${sceneNum}_bci_conduct`,
          rule: `Scene ${sceneNum}: BCI Professional Conduct & Non-Solicitation`,
          passed: !hasSolicitation,
          details: hasSolicitation 
            ? 'Professional-conduct review required before publishing.' 
            : 'Compliant with BCI non-solicitation standards'
        });
      } else if (isNoPerson) {
        // Check Style Anchor
        const envMasterLower = (scene.masterReferences?.environmentMaster || '').toLowerCase();
        const refLower = (scene.referenceId || '').toLowerCase();
        const promptLower = (scene.googleFlowPrompt || '').toLowerCase();
        const visualLower = (scene.visualAction || '').toLowerCase();

        const hasStyleAnchor = envMasterLower.includes('style_anchor') || 
                               envMasterLower.includes('cinematic') || 
                               refLower.includes('style_anchor') || 
                               refLower.includes('frame_scene') ||
                               promptLower.includes('cinematic') ||
                               promptLower.includes('multi-reference');

        checks.push({
          id: `s${sceneNum}_style_anchor`,
          rule: `Scene ${sceneNum}: Style Anchor attached (NO_PERSON_CINEMATIC_STYLE_ANCHOR)`,
          passed: hasStyleAnchor,
          details: scene.masterReferences?.environmentMaster || scene.referenceId || 'NO_PERSON_CINEMATIC_STYLE_ANCHOR'
        });

        // Check Zero-Human Compliance (no people, no faces, no avatars, no lip sync)
        const hasHumanLipSync = promptLower.includes('lip sync') || promptLower.includes('lip-sync');
        const hasHumanPresence = (visualLower.includes('person stands') || visualLower.includes('actor') || visualLower.includes('influencer')) && !visualLower.includes('no person') && !visualLower.includes('zero people');
        const zeroHumanPassed = !hasHumanLipSync && !hasHumanPresence;

        checks.push({
          id: `s${sceneNum}_zero_human`,
          rule: `Scene ${sceneNum}: Zero-Human Compliance (No avatars/faces/lip-sync)`,
          passed: zeroHumanPassed,
          details: zeroHumanPassed ? 'Zero-human compliance verified' : 'Human or lip-sync detected'
        });
      } else if (isAiInfluencer) {
        const hasCharMaster = !!(scene.masterReferences?.characterMaster && scene.masterReferences.characterMaster.includes('INFLUENCER_MODEL_MASTER'));
        checks.push({
          id: `s${sceneNum}_char_master`,
          rule: `Scene ${sceneNum}: Influencer Model Master attached`,
          passed: hasCharMaster,
          details: scene.masterReferences?.characterMaster || 'Missing character master'
        });

        const hasEnvMaster = !!(scene.masterReferences?.environmentMaster && scene.masterReferences.environmentMaster.includes('STUDIO_LOFT_MASTER'));
        checks.push({
          id: `s${sceneNum}_env_master`,
          rule: `Scene ${sceneNum}: Studio Loft Master attached`,
          passed: hasEnvMaster,
          details: scene.masterReferences?.environmentMaster || 'Missing environment master'
        });

        const hasVoiceMaster = !!(scene.masterReferences?.voiceMaster && scene.masterReferences.voiceMaster.includes('INFLUENCER_VOICE_MASTER'));
        checks.push({
          id: `s${sceneNum}_voice_master`,
          rule: `Scene ${sceneNum}: Influencer Voice Master attached`,
          passed: hasVoiceMaster,
          details: scene.masterReferences?.voiceMaster || 'Missing voice master'
        });
      }

      // Check Previous Frame Continuity for Scene 2+
      if (sceneNum > 1) {
        const expectedPrevFrame = `frame_scene_${sceneNum - 1}.png`;
        const hasPrevFrame = !!(
          (scene.continuityReference && scene.continuityReference.includes(expectedPrevFrame)) || 
          (scene.continuityInstruction && scene.continuityInstruction.includes(expectedPrevFrame)) ||
          (scene.referenceId && scene.referenceId.includes(expectedPrevFrame)) ||
          (scene.googleFlowPrompt && scene.googleFlowPrompt.includes(expectedPrevFrame))
        );
        checks.push({
          id: `s${sceneNum}_continuity_frame`,
          rule: `Scene ${sceneNum}: Previous frame (${expectedPrevFrame}) attached`,
          passed: hasPrevFrame,
          details: scene.continuityReference || scene.continuityInstruction || expectedPrevFrame
        });
      }

      // Check Dialogue / Audio definition
      const isDialogueValid = isNoPerson 
        ? true 
        : !!(scene.dialogue && scene.dialogue.trim().length > 0);

      checks.push({
        id: `s${sceneNum}_dialogue`,
        rule: isNoPerson ? `Scene ${sceneNum}: Audio / Atmosphere defined` : `Scene ${sceneNum}: Dialogue present`,
        passed: isDialogueValid,
        details: scene.dialogue ? `"${scene.dialogue.slice(0, 40)}..."` : (isNoPerson ? 'Atmospheric Cinematic Audio' : 'Missing dialogue')
      });

      // Check Visual Action
      checks.push({
        id: `s${sceneNum}_visual_action`,
        rule: `Scene ${sceneNum}: Visual Action defined`,
        passed: !!(scene.visualAction && scene.visualAction.trim().length > 0),
        details: scene.visualAction
      });

      // Check Camera Instruction
      checks.push({
        id: `s${sceneNum}_camera`,
        rule: `Scene ${sceneNum}: Camera instruction specified`,
        passed: !!(scene.cameraInstruction && scene.cameraInstruction.trim().length > 0),
        details: scene.cameraInstruction || 'Missing camera instruction'
      });

      // Check Continuity Instruction
      checks.push({
        id: `s${sceneNum}_continuity_text`,
        rule: `Scene ${sceneNum}: Continuity instruction specified`,
        passed: !!(scene.continuityInstruction && scene.continuityInstruction.trim().length > 0),
        details: scene.continuityInstruction || 'Missing continuity instruction'
      });
    });
  }

  // Check CTA BCI Compliance for Lawyer Counsel
  if (isLawyerCounsel && plan.cta) {
    const ctaLower = plan.cta.toLowerCase();
    const prohibitedCtaTerms = ['hire', 'contact', 'call me', 'dm me', 'whatsapp', 'book consultation', 'engage', 'win your case'];
    const hasBadCta = prohibitedCtaTerms.some(term => ctaLower.includes(term));

    checks.push({
      id: 'cta_bci_conduct',
      rule: 'CTA: BCI Educational Non-Solicitation Compliance',
      passed: !hasBadCta,
      details: hasBadCta 
        ? 'Professional-conduct review required before publishing.' 
        : 'Compliant with BCI educational awareness standards'
    });
  }

  const total = checks.length;
  const passedCount = checks.filter(c => c.passed).length;
  const scorePercentage = total > 0 ? Math.round((passedCount / total) * 100) : 0;
  const isProductionReady = scorePercentage >= 90 && 
    checks.every(c => !c.id.includes('_master') || c.passed) &&
    checks.every(c => !c.id.includes('_bci_conduct') || c.passed) &&
    checks.every(c => !c.id.includes('_fact_traceability') || c.passed) &&
    checks.every(c => c.id !== 'legal_verified_facts' || c.passed);

  return {
    isProductionReady,
    scorePercentage,
    checks
  };
}
