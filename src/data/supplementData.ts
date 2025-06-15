import { Translations } from '@/lib/translations';

export interface SupplementData {
  id: string;
  name: string;
  description: string;
  dosage: string;
  benefits: string;
  evidence: string;
  source: string;
  category: string;
  evidenceLevel: 'high' | 'medium' | 'emerging';
  userLevel: 'beginner' | 'intermediate' | 'advanced';
  interactions?: string[];
  warnings?: string[];
}

export const getSupplementDatabase = (t: any): SupplementData[] => [
  // David Sinclair 2024 프로토콜 기반
  {
    id: 'nmn',
    name: t.pages.supplementTracker.nmn.title,
    description: t.pages.supplementTracker.nmn.description,
    dosage: t.pages.supplementTracker.nmn.dosage,
    benefits: t.pages.supplementTracker.nmn.benefits,
    evidence: t.pages.supplementTracker.nmn.evidence,
    source: t.pages.supplementTracker.nmn.source,
    category: 'antiAging',
    evidenceLevel: 'high',
    userLevel: 'advanced',
    warnings: t.pages.supplementTracker.nmn.warnings
  },
  {
    id: 'resveratrol',
    name: t.pages.supplementTracker.resveratrol.title,
    description: t.pages.supplementTracker.resveratrol.description,
    dosage: t.pages.supplementTracker.resveratrol.dosage,
    benefits: t.pages.supplementTracker.resveratrol.benefits,
    evidence: t.pages.supplementTracker.resveratrol.evidence,
    source: t.pages.supplementTracker.resveratrol.source,
    category: 'antiAging',
    evidenceLevel: 'high',
    userLevel: 'intermediate',
    interactions: t.pages.supplementTracker.resveratrol.interactions
  },
  {
    id: 'fisetin',
    name: t.pages.supplementTracker.fisetin.title,
    description: t.pages.supplementTracker.fisetin.description,
    dosage: t.pages.supplementTracker.fisetin.dosage,
    benefits: t.pages.supplementTracker.fisetin.benefits,
    evidence: t.pages.supplementTracker.fisetin.evidence,
    source: t.pages.supplementTracker.fisetin.source,
    category: 'antiAging',
    evidenceLevel: 'high',
    userLevel: 'advanced',
    warnings: t.pages.supplementTracker.fisetin.warnings,
    interactions: t.pages.supplementTracker.fisetin.interactions
  },
  {
    id: 'spermidine',
    name: t.pages.supplementTracker.spermidine.title,
    description: t.pages.supplementTracker.spermidine.description,
    dosage: t.pages.supplementTracker.spermidine.dosage,
    benefits: t.pages.supplementTracker.spermidine.benefits,
    evidence: t.pages.supplementTracker.spermidine.evidence,
    source: t.pages.supplementTracker.spermidine.source,
    category: 'antiAging',
    evidenceLevel: 'high',
    userLevel: 'intermediate',
    warnings: t.pages.supplementTracker.spermidine.warnings,
    interactions: t.pages.supplementTracker.spermidine.interactions
  },
  {
    id: 'taurine',
    name: t.pages.supplementTracker.taurine.title,
    description: t.pages.supplementTracker.taurine.description,
    dosage: t.pages.supplementTracker.taurine.dosage,
    benefits: t.pages.supplementTracker.taurine.benefits,
    evidence: t.pages.supplementTracker.taurine.evidence,
    source: t.pages.supplementTracker.taurine.source,
    category: 'antiAging',
    evidenceLevel: 'high',
    userLevel: 'beginner',
    warnings: t.pages.supplementTracker.taurine.warnings,
    interactions: t.pages.supplementTracker.taurine.interactions
  },
  // 기본 필수 영양제들
  {
    id: 'vitaminD',
    name: t.pages.supplementTracker.vitaminD.title,
    description: t.pages.supplementTracker.vitaminD.description,
    dosage: t.pages.supplementTracker.vitaminD.dosage,
    benefits: t.pages.supplementTracker.vitaminD.benefits,
    evidence: t.pages.supplementTracker.vitaminD.evidence,
    source: t.pages.supplementTracker.vitaminD.source,
    category: 'immuneSupport',
    evidenceLevel: 'high',
    userLevel: 'beginner',
    warnings: t.pages.supplementTracker.vitaminD.warnings,
    interactions: t.pages.supplementTracker.vitaminD.interactions
  },
  {
    id: 'omega3',
    name: t.pages.supplementTracker.omega3.title,
    description: t.pages.supplementTracker.omega3.description,
    dosage: t.pages.supplementTracker.omega3.dosage,
    benefits: t.pages.supplementTracker.omega3.benefits,
    evidence: t.pages.supplementTracker.omega3.evidence,
    source: t.pages.supplementTracker.omega3.source,
    category: 'cardiovascularHealth',
    evidenceLevel: 'high',
    userLevel: 'beginner',
    warnings: t.pages.supplementTracker.omega3.warnings,
    interactions: t.pages.supplementTracker.omega3.interactions
  },
  {
    id: 'magnesium',
    name: t.pages.supplementTracker.magnesium.title,
    description: t.pages.supplementTracker.magnesium.description,
    dosage: t.pages.supplementTracker.magnesium.dosage,
    benefits: t.pages.supplementTracker.magnesium.benefits,
    evidence: t.pages.supplementTracker.magnesium.evidence,
    source: t.pages.supplementTracker.magnesium.source,
    category: 'sleepQuality',
    evidenceLevel: 'high',
    userLevel: 'beginner',
    warnings: t.pages.supplementTracker.magnesium.warnings,
    interactions: t.pages.supplementTracker.magnesium.interactions
  },
  // 추가 영양제들
  {
    id: 'quercetin',
    name: t.pages.supplementTracker.quercetin.title,
    description: t.pages.supplementTracker.quercetin.description,
    dosage: t.pages.supplementTracker.quercetin.dosage,
    benefits: t.pages.supplementTracker.quercetin.benefits,
    evidence: t.pages.supplementTracker.quercetin.evidence,
    source: t.pages.supplementTracker.quercetin.source,
    category: 'immuneSupport',
    evidenceLevel: 'high',
    userLevel: 'intermediate',
    warnings: t.pages.supplementTracker.quercetin.warnings,
    interactions: t.pages.supplementTracker.quercetin.interactions
  },
  {
    id: 'coq10',
    name: t.pages.supplementTracker.coq10.title,
    description: t.pages.supplementTracker.coq10.description,
    dosage: t.pages.supplementTracker.coq10.dosage,
    benefits: t.pages.supplementTracker.coq10.benefits,
    evidence: t.pages.supplementTracker.coq10.evidence,
    source: t.pages.supplementTracker.coq10.source,
    category: 'energyMetabolism',
    evidenceLevel: 'high',
    userLevel: 'intermediate',
    warnings: t.pages.supplementTracker.coq10.warnings,
    interactions: t.pages.supplementTracker.coq10.interactions
  },
  {
    id: 'curcumin',
    name: t.pages.supplementTracker.curcumin.title,
    description: t.pages.supplementTracker.curcumin.description,
    dosage: t.pages.supplementTracker.curcumin.dosage,
    benefits: t.pages.supplementTracker.curcumin.benefits,
    evidence: t.pages.supplementTracker.curcumin.evidence,
    source: t.pages.supplementTracker.curcumin.source,
    category: 'antiAging',
    evidenceLevel: 'high',
    userLevel: 'beginner',
    warnings: t.pages.supplementTracker.curcumin.warnings,
    interactions: t.pages.supplementTracker.curcumin.interactions
  },
  // 새로운 영양제들
  {
    id: 'berberine',
    name: t.pages.supplementTracker.berberine.title,
    description: t.pages.supplementTracker.berberine.description,
    dosage: t.pages.supplementTracker.berberine.dosage,
    benefits: t.pages.supplementTracker.berberine.benefits,
    evidence: t.pages.supplementTracker.berberine.evidence,
    source: t.pages.supplementTracker.berberine.source,
    category: 'energyMetabolism',
    evidenceLevel: 'high',
    userLevel: 'intermediate',
    warnings: t.pages.supplementTracker.berberine.warnings,
    interactions: t.pages.supplementTracker.berberine.interactions
  },
  {
    id: 'ashwagandha',
    name: t.pages.supplementTracker.ashwagandha.title,
    description: t.pages.supplementTracker.ashwagandha.description,
    dosage: t.pages.supplementTracker.ashwagandha.dosage,
    benefits: t.pages.supplementTracker.ashwagandha.benefits,
    evidence: t.pages.supplementTracker.ashwagandha.evidence,
    source: t.pages.supplementTracker.ashwagandha.source,
    category: 'stressManagement',
    evidenceLevel: 'high',
    userLevel: 'beginner',
    warnings: t.pages.supplementTracker.ashwagandha.warnings,
    interactions: t.pages.supplementTracker.ashwagandha.interactions
  },
  {
    id: 'rhodiola',
    name: t.pages.supplementTracker.rhodiola.title,
    description: t.pages.supplementTracker.rhodiola.description,
    dosage: t.pages.supplementTracker.rhodiola.dosage,
    benefits: t.pages.supplementTracker.rhodiola.benefits,
    evidence: t.pages.supplementTracker.rhodiola.evidence,
    source: t.pages.supplementTracker.rhodiola.source,
    category: 'stressManagement',
    evidenceLevel: 'high',
    userLevel: 'intermediate',
    warnings: t.pages.supplementTracker.rhodiola.warnings,
    interactions: t.pages.supplementTracker.rhodiola.interactions
  },
  {
    id: 'probiotics',
    name: t.pages.supplementTracker.probiotics.title,
    description: t.pages.supplementTracker.probiotics.description,
    dosage: t.pages.supplementTracker.probiotics.dosage,
    benefits: t.pages.supplementTracker.probiotics.benefits,
    evidence: t.pages.supplementTracker.probiotics.evidence,
    source: t.pages.supplementTracker.probiotics.source,
    category: 'gutHealth',
    evidenceLevel: 'high',
    userLevel: 'beginner',
    warnings: t.pages.supplementTracker.probiotics.warnings,
    interactions: t.pages.supplementTracker.probiotics.interactions
  },
  {
    id: 'zinc',
    name: t.pages.supplementTracker.zinc.title,
    description: t.pages.supplementTracker.zinc.description,
    dosage: t.pages.supplementTracker.zinc.dosage,
    benefits: t.pages.supplementTracker.zinc.benefits,
    evidence: t.pages.supplementTracker.zinc.evidence,
    source: t.pages.supplementTracker.zinc.source,
    category: 'immuneSupport',
    evidenceLevel: 'high',
    userLevel: 'beginner',
    warnings: t.pages.supplementTracker.zinc.warnings,
    interactions: t.pages.supplementTracker.zinc.interactions
  },
  {
    id: 'selenium',
    name: t.pages.supplementTracker.selenium.title,
    description: t.pages.supplementTracker.selenium.description,
    dosage: t.pages.supplementTracker.selenium.dosage,
    benefits: t.pages.supplementTracker.selenium.benefits,
    evidence: t.pages.supplementTracker.selenium.evidence,
    source: t.pages.supplementTracker.selenium.source,
    category: 'immuneSupport',
    evidenceLevel: 'high',
    userLevel: 'beginner',
    warnings: t.pages.supplementTracker.selenium.warnings,
    interactions: t.pages.supplementTracker.selenium.interactions
  },
  {
    id: 'b_complex',
    name: t.pages.supplementTracker.b_complex.title,
    description: t.pages.supplementTracker.b_complex.description,
    dosage: t.pages.supplementTracker.b_complex.dosage,
    benefits: t.pages.supplementTracker.b_complex.benefits,
    evidence: t.pages.supplementTracker.b_complex.evidence,
    source: t.pages.supplementTracker.b_complex.source,
    category: 'energyMetabolism',
    evidenceLevel: 'high',
    userLevel: 'beginner',
    warnings: t.pages.supplementTracker.b_complex.warnings,
    interactions: t.pages.supplementTracker.b_complex.interactions
  },
  {
    id: 'alpha_lipoic_acid',
    name: t.pages.supplementTracker.alpha_lipoic_acid.title,
    description: t.pages.supplementTracker.alpha_lipoic_acid.description,
    dosage: t.pages.supplementTracker.alpha_lipoic_acid.dosage,
    benefits: t.pages.supplementTracker.alpha_lipoic_acid.benefits,
    evidence: t.pages.supplementTracker.alpha_lipoic_acid.evidence,
    source: t.pages.supplementTracker.alpha_lipoic_acid.source,
    category: 'antiAging',
    evidenceLevel: 'high',
    userLevel: 'intermediate',
    warnings: t.pages.supplementTracker.alpha_lipoic_acid.warnings,
    interactions: t.pages.supplementTracker.alpha_lipoic_acid.interactions
  },
  {
    id: 'green_tea_extract',
    name: t.pages.supplementTracker.green_tea_extract.title,
    description: t.pages.supplementTracker.green_tea_extract.description,
    dosage: t.pages.supplementTracker.green_tea_extract.dosage,
    benefits: t.pages.supplementTracker.green_tea_extract.benefits,
    evidence: t.pages.supplementTracker.green_tea_extract.evidence,
    source: t.pages.supplementTracker.green_tea_extract.source,
    category: 'antiAging',
    evidenceLevel: 'high',
    userLevel: 'beginner',
    warnings: t.pages.supplementTracker.green_tea_extract.warnings,
    interactions: t.pages.supplementTracker.green_tea_extract.interactions
  },
  // 추가 영양제들 - 더 많은 종류 추가
  {
    id: 'metformin',
    name: t.pages.supplementTracker.metformin.title,
    description: t.pages.supplementTracker.metformin.description,
    dosage: t.pages.supplementTracker.metformin.dosage,
    benefits: t.pages.supplementTracker.metformin.benefits,
    evidence: t.pages.supplementTracker.metformin.evidence,
    source: t.pages.supplementTracker.metformin.source,
    category: 'antiAging',
    evidenceLevel: 'high',
    userLevel: 'advanced',
    warnings: t.pages.supplementTracker.metformin.warnings,
    interactions: t.pages.supplementTracker.metformin.interactions
  },
  {
    id: 'rapamycin',
    name: t.pages.supplementTracker.rapamycin.title,
    description: t.pages.supplementTracker.rapamycin.description,
    dosage: t.pages.supplementTracker.rapamycin.dosage,
    benefits: t.pages.supplementTracker.rapamycin.benefits,
    evidence: t.pages.supplementTracker.rapamycin.evidence,
    source: t.pages.supplementTracker.rapamycin.source,
    category: 'antiAging',
    evidenceLevel: 'high',
    userLevel: 'advanced',
    warnings: t.pages.supplementTracker.rapamycin.warnings,
    interactions: t.pages.supplementTracker.rapamycin.interactions
  },
  {
    id: 'prebiotics',
    name: t.pages.supplementTracker.prebiotics.title,
    description: t.pages.supplementTracker.prebiotics.description,
    dosage: t.pages.supplementTracker.prebiotics.dosage,
    benefits: t.pages.supplementTracker.prebiotics.benefits,
    evidence: t.pages.supplementTracker.prebiotics.evidence,
    source: t.pages.supplementTracker.prebiotics.source,
    category: 'gutHealth',
    evidenceLevel: 'high',
    userLevel: 'beginner',
    warnings: t.pages.supplementTracker.prebiotics.warnings,
    interactions: t.pages.supplementTracker.prebiotics.interactions
  }
];

export interface CategoryInfo {
  id: string;
  name: string;
  icon: any;
}

export const getSupplementCategories = (t: any, icons: any): CategoryInfo[] => [
  { id: 'all', name: t.pages.supplementTracker.selectCategory, icon: icons.FilterIcon },
  { id: 'antiAging', name: t.pages.supplementTracker.antiAging, icon: icons.TrendingUpIcon },
  { id: 'cognitiveHealth', name: t.pages.supplementTracker.cognitiveHealth, icon: icons.BrainIcon },
  { id: 'cardiovascularHealth', name: t.pages.supplementTracker.cardiovascularHealth, icon: icons.HeartIcon },
  { id: 'immuneSupport', name: t.pages.supplementTracker.immuneSupport, icon: icons.ShieldCheckIcon },
  { id: 'energyMetabolism', name: t.pages.supplementTracker.energyMetabolism, icon: icons.LightBulbIcon },
  { id: 'sleepQuality', name: t.pages.supplementTracker.sleepQuality, icon: icons.ClockIcon },
  { id: 'stressManagement', name: t.pages.supplementTracker.stressManagement, icon: icons.StethoscopeIcon },
  { id: 'gutHealth', name: '장 건강', icon: icons.ComputerIcon },
]; 