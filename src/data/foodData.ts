import { Translations } from '@/lib/translations';

export interface FoodData {
  id: string;
  name: string;
  description: string;
  servingSize: string;
  benefits: string;
  evidence: string;
  source: string;
  category: string;
  evidenceLevel: 'high' | 'medium' | 'emerging';
  nutritionHighlights: string[];
  cookingTips?: string[];
  warnings?: string[];
  bestTimesToEat?: string;
  storage?: string;
}

export const getFoodDatabase = (t: any): FoodData[] => [
  // 항산화 음식들
  {
    id: 'blueberries',
    name: t.pages.foodDatabase.foods.blueberries.name,
    description: t.pages.foodDatabase.foods.blueberries.description,
    servingSize: t.pages.foodDatabase.foods.blueberries.servingSize,
    benefits: t.pages.foodDatabase.foods.blueberries.benefits,
    evidence: t.pages.foodDatabase.foods.blueberries.evidence,
    source: t.pages.foodDatabase.foods.blueberries.source,
    category: 'antioxidant',
    evidenceLevel: 'high',
    nutritionHighlights: t.pages.foodDatabase.foods.blueberries.nutritionHighlights,
    bestTimesToEat: t.pages.foodDatabase.foods.blueberries.bestTimesToEat,
    storage: t.pages.foodDatabase.foods.blueberries.storage,
    cookingTips: t.pages.foodDatabase.foods.blueberries.cookingTips,
    warnings: t.pages.foodDatabase.foods.blueberries.warnings
  },
  {
    id: 'dark_chocolate',
    name: t.pages.foodDatabase.foods.dark_chocolate.name,
    description: t.pages.foodDatabase.foods.dark_chocolate.description,
    servingSize: t.pages.foodDatabase.foods.dark_chocolate.servingSize,
    benefits: t.pages.foodDatabase.foods.dark_chocolate.benefits,
    evidence: t.pages.foodDatabase.foods.dark_chocolate.evidence,
    source: t.pages.foodDatabase.foods.dark_chocolate.source,
    category: 'antioxidant',
    evidenceLevel: 'high',
    nutritionHighlights: t.pages.foodDatabase.foods.dark_chocolate.nutritionHighlights,
    bestTimesToEat: t.pages.foodDatabase.foods.dark_chocolate.bestTimesToEat,
    storage: t.pages.foodDatabase.foods.dark_chocolate.storage,
    cookingTips: t.pages.foodDatabase.foods.dark_chocolate.cookingTips,
    warnings: t.pages.foodDatabase.foods.dark_chocolate.warnings
  },
  {
    id: 'green_tea',
    name: t.pages.foodDatabase.foods.green_tea.name,
    description: t.pages.foodDatabase.foods.green_tea.description,
    servingSize: t.pages.foodDatabase.foods.green_tea.servingSize,
    benefits: t.pages.foodDatabase.foods.green_tea.benefits,
    evidence: t.pages.foodDatabase.foods.green_tea.evidence,
    source: t.pages.foodDatabase.foods.green_tea.source,
    category: 'antioxidant',
    evidenceLevel: 'high',
    nutritionHighlights: t.pages.foodDatabase.foods.green_tea.nutritionHighlights,
    bestTimesToEat: t.pages.foodDatabase.foods.green_tea.bestTimesToEat,
    storage: t.pages.foodDatabase.foods.green_tea.storage,
    cookingTips: t.pages.foodDatabase.foods.green_tea.cookingTips,
    warnings: t.pages.foodDatabase.foods.green_tea.warnings
  },

  // 오메가3 풍부 음식들
  {
    id: 'salmon',
    name: t.pages.foodDatabase.foods.salmon.name,
    description: t.pages.foodDatabase.foods.salmon.description,
    servingSize: t.pages.foodDatabase.foods.salmon.servingSize,
    benefits: t.pages.foodDatabase.foods.salmon.benefits,
    evidence: t.pages.foodDatabase.foods.salmon.evidence,
    source: t.pages.foodDatabase.foods.salmon.source,
    category: 'omega3',
    evidenceLevel: 'high',
    nutritionHighlights: t.pages.foodDatabase.foods.salmon.nutritionHighlights,
    bestTimesToEat: t.pages.foodDatabase.foods.salmon.bestTimesToEat,
    storage: t.pages.foodDatabase.foods.salmon.storage,
    cookingTips: t.pages.foodDatabase.foods.salmon.cookingTips,
    warnings: t.pages.foodDatabase.foods.salmon.warnings
  },
  {
    id: 'walnuts',
    name: t.pages.foodDatabase.foods.walnuts.name,
    description: t.pages.foodDatabase.foods.walnuts.description,
    servingSize: t.pages.foodDatabase.foods.walnuts.servingSize,
    benefits: t.pages.foodDatabase.foods.walnuts.benefits,
    evidence: t.pages.foodDatabase.foods.walnuts.evidence,
    source: t.pages.foodDatabase.foods.walnuts.source,
    category: 'omega3',
    evidenceLevel: 'high',
    nutritionHighlights: t.pages.foodDatabase.foods.walnuts.nutritionHighlights,
    bestTimesToEat: t.pages.foodDatabase.foods.walnuts.bestTimesToEat,
    storage: t.pages.foodDatabase.foods.walnuts.storage,
    cookingTips: t.pages.foodDatabase.foods.walnuts.cookingTips,
    warnings: t.pages.foodDatabase.foods.walnuts.warnings
  },

  // 항염 음식들
  {
    id: 'turmeric',
    name: t.pages.foodDatabase.foods.turmeric.name,
    description: t.pages.foodDatabase.foods.turmeric.description,
    servingSize: t.pages.foodDatabase.foods.turmeric.servingSize,
    benefits: t.pages.foodDatabase.foods.turmeric.benefits,
    evidence: t.pages.foodDatabase.foods.turmeric.evidence,
    source: t.pages.foodDatabase.foods.turmeric.source,
    category: 'antiInflammatory',
    evidenceLevel: 'high',
    nutritionHighlights: t.pages.foodDatabase.foods.turmeric.nutritionHighlights,
    bestTimesToEat: t.pages.foodDatabase.foods.turmeric.bestTimesToEat,
    storage: t.pages.foodDatabase.foods.turmeric.storage,
    cookingTips: t.pages.foodDatabase.foods.turmeric.cookingTips,
    warnings: t.pages.foodDatabase.foods.turmeric.warnings
  },
  {
    id: 'ginger',
    name: t.pages.foodDatabase.foods.ginger.name,
    description: t.pages.foodDatabase.foods.ginger.description,
    servingSize: t.pages.foodDatabase.foods.ginger.servingSize,
    benefits: t.pages.foodDatabase.foods.ginger.benefits,
    evidence: t.pages.foodDatabase.foods.ginger.evidence,
    source: t.pages.foodDatabase.foods.ginger.source,
    category: 'antiInflammatory',
    evidenceLevel: 'high',
    nutritionHighlights: t.pages.foodDatabase.foods.ginger.nutritionHighlights,
    bestTimesToEat: t.pages.foodDatabase.foods.ginger.bestTimesToEat,
    storage: t.pages.foodDatabase.foods.ginger.storage,
    cookingTips: t.pages.foodDatabase.foods.ginger.cookingTips,
    warnings: t.pages.foodDatabase.foods.ginger.warnings
  },

  // 뇌 건강 음식들
  {
    id: 'avocado',
    name: t.pages.foodDatabase.foods.avocado.name,
    description: t.pages.foodDatabase.foods.avocado.description,
    servingSize: t.pages.foodDatabase.foods.avocado.servingSize,
    benefits: t.pages.foodDatabase.foods.avocado.benefits,
    evidence: t.pages.foodDatabase.foods.avocado.evidence,
    source: t.pages.foodDatabase.foods.avocado.source,
    category: 'brainHealth',
    evidenceLevel: 'high',
    nutritionHighlights: t.pages.foodDatabase.foods.avocado.nutritionHighlights,
    bestTimesToEat: t.pages.foodDatabase.foods.avocado.bestTimesToEat,
    storage: t.pages.foodDatabase.foods.avocado.storage,
    cookingTips: t.pages.foodDatabase.foods.avocado.cookingTips,
    warnings: t.pages.foodDatabase.foods.avocado.warnings
  },
  {
    id: 'spinach',
    name: t.pages.foodDatabase.foods.spinach.name,
    description: t.pages.foodDatabase.foods.spinach.description,
    servingSize: t.pages.foodDatabase.foods.spinach.servingSize,
    benefits: t.pages.foodDatabase.foods.spinach.benefits,
    evidence: t.pages.foodDatabase.foods.spinach.evidence,
    source: t.pages.foodDatabase.foods.spinach.source,
    category: 'brainHealth',
    evidenceLevel: 'high',
    nutritionHighlights: t.pages.foodDatabase.foods.spinach.nutritionHighlights,
    bestTimesToEat: t.pages.foodDatabase.foods.spinach.bestTimesToEat,
    storage: t.pages.foodDatabase.foods.spinach.storage,
    cookingTips: t.pages.foodDatabase.foods.spinach.cookingTips,
    warnings: t.pages.foodDatabase.foods.spinach.warnings
  },

  // 심혈관 건강 음식들
  {
    id: 'oats',
    name: t.pages.foodDatabase.foods.oats.name,
    description: t.pages.foodDatabase.foods.oats.description,
    servingSize: t.pages.foodDatabase.foods.oats.servingSize,
    benefits: t.pages.foodDatabase.foods.oats.benefits,
    evidence: t.pages.foodDatabase.foods.oats.evidence,
    source: t.pages.foodDatabase.foods.oats.source,
    category: 'cardiovascular',
    evidenceLevel: 'high',
    nutritionHighlights: t.pages.foodDatabase.foods.oats.nutritionHighlights,
    bestTimesToEat: t.pages.foodDatabase.foods.oats.bestTimesToEat,
    storage: t.pages.foodDatabase.foods.oats.storage,
    cookingTips: t.pages.foodDatabase.foods.oats.cookingTips,
    warnings: t.pages.foodDatabase.foods.oats.warnings
  },
  {
    id: 'olive_oil',
    name: t.pages.foodDatabase.foods.olive_oil.name,
    description: t.pages.foodDatabase.foods.olive_oil.description,
    servingSize: t.pages.foodDatabase.foods.olive_oil.servingSize,
    benefits: t.pages.foodDatabase.foods.olive_oil.benefits,
    evidence: t.pages.foodDatabase.foods.olive_oil.evidence,
    source: t.pages.foodDatabase.foods.olive_oil.source,
    category: 'cardiovascular',
    evidenceLevel: 'high',
    nutritionHighlights: t.pages.foodDatabase.foods.olive_oil.nutritionHighlights,
    bestTimesToEat: t.pages.foodDatabase.foods.olive_oil.bestTimesToEat,
    storage: t.pages.foodDatabase.foods.olive_oil.storage,
    cookingTips: t.pages.foodDatabase.foods.olive_oil.cookingTips,
    warnings: t.pages.foodDatabase.foods.olive_oil.warnings
  },

  // 장 건강 음식들
  {
    id: 'kimchi',
    name: t.pages.foodDatabase.foods.kimchi.name,
    description: t.pages.foodDatabase.foods.kimchi.description,
    servingSize: t.pages.foodDatabase.foods.kimchi.servingSize,
    benefits: t.pages.foodDatabase.foods.kimchi.benefits,
    evidence: t.pages.foodDatabase.foods.kimchi.evidence,
    source: t.pages.foodDatabase.foods.kimchi.source,
    category: 'gutHealth',
    evidenceLevel: 'high',
    nutritionHighlights: t.pages.foodDatabase.foods.kimchi.nutritionHighlights,
    bestTimesToEat: t.pages.foodDatabase.foods.kimchi.bestTimesToEat,
    storage: t.pages.foodDatabase.foods.kimchi.storage,
    cookingTips: t.pages.foodDatabase.foods.kimchi.cookingTips,
    warnings: t.pages.foodDatabase.foods.kimchi.warnings
  },
  {
    id: 'greek_yogurt',
    name: t.pages.foodDatabase.foods.greek_yogurt.name,
    description: t.pages.foodDatabase.foods.greek_yogurt.description,
    servingSize: t.pages.foodDatabase.foods.greek_yogurt.servingSize,
    benefits: t.pages.foodDatabase.foods.greek_yogurt.benefits,
    evidence: t.pages.foodDatabase.foods.greek_yogurt.evidence,
    source: t.pages.foodDatabase.foods.greek_yogurt.source,
    category: 'gutHealth',
    evidenceLevel: 'high',
    nutritionHighlights: t.pages.foodDatabase.foods.greek_yogurt.nutritionHighlights,
    bestTimesToEat: t.pages.foodDatabase.foods.greek_yogurt.bestTimesToEat,
    storage: t.pages.foodDatabase.foods.greek_yogurt.storage,
    cookingTips: t.pages.foodDatabase.foods.greek_yogurt.cookingTips,
    warnings: t.pages.foodDatabase.foods.greek_yogurt.warnings
  },

  // 항노화 종합 음식들
  {
    id: 'pomegranate',
    name: t.pages.foodDatabase.foods.pomegranate.name,
    description: t.pages.foodDatabase.foods.pomegranate.description,
    servingSize: t.pages.foodDatabase.foods.pomegranate.servingSize,
    benefits: t.pages.foodDatabase.foods.pomegranate.benefits,
    evidence: t.pages.foodDatabase.foods.pomegranate.evidence,
    source: t.pages.foodDatabase.foods.pomegranate.source,
    category: 'antiAging',
    evidenceLevel: 'high',
    nutritionHighlights: t.pages.foodDatabase.foods.pomegranate.nutritionHighlights,
    bestTimesToEat: t.pages.foodDatabase.foods.pomegranate.bestTimesToEat,
    storage: t.pages.foodDatabase.foods.pomegranate.storage,
    cookingTips: t.pages.foodDatabase.foods.pomegranate.cookingTips,
    warnings: t.pages.foodDatabase.foods.pomegranate.warnings
  },
  {
    id: 'sweet_potato',
    name: t.pages.foodDatabase.foods.sweet_potato.name,
    description: t.pages.foodDatabase.foods.sweet_potato.description,
    servingSize: t.pages.foodDatabase.foods.sweet_potato.servingSize,
    benefits: t.pages.foodDatabase.foods.sweet_potato.benefits,
    evidence: t.pages.foodDatabase.foods.sweet_potato.evidence,
    source: t.pages.foodDatabase.foods.sweet_potato.source,
    category: 'antiAging',
    evidenceLevel: 'high',
    nutritionHighlights: t.pages.foodDatabase.foods.sweet_potato.nutritionHighlights,
    bestTimesToEat: t.pages.foodDatabase.foods.sweet_potato.bestTimesToEat,
    storage: t.pages.foodDatabase.foods.sweet_potato.storage,
    cookingTips: t.pages.foodDatabase.foods.sweet_potato.cookingTips,
    warnings: t.pages.foodDatabase.foods.sweet_potato.warnings
  }
];

export interface FoodCategoryInfo {
  id: string;
  name: string;
  icon: any;
  description: string;
}

export const getFoodCategories = (t: any, icons: any): FoodCategoryInfo[] => [
  { 
    id: 'all', 
    name: t.pages.foodDatabase.categories.all, 
    icon: icons.FilterIcon,
    description: '모든 항노화 음식 보기'
  },
  { 
    id: 'antioxidant', 
    name: t.pages.foodDatabase.categories.antioxidant, 
    icon: icons.ShieldCheckIcon,
    description: '활성산소를 제거하는 강력한 항산화 성분'
  },
  { 
    id: 'omega3', 
    name: t.pages.foodDatabase.categories.omega3, 
    icon: icons.BrainIcon,
    description: '뇌 건강과 염증 감소에 도움'
  },
  { 
    id: 'antiInflammatory', 
    name: t.pages.foodDatabase.categories.antiInflammatory, 
    icon: icons.HeartIcon,
    description: '만성 염증을 줄이는 천연 항염 성분'
  },
  { 
    id: 'brainHealth', 
    name: t.pages.foodDatabase.categories.brainHealth, 
    icon: icons.BulbIcon,
    description: '인지 기능과 기억력 향상'
  },
  { 
    id: 'cardiovascular', 
    name: t.pages.foodDatabase.categories.cardiovascular, 
    icon: icons.StethoscopeIcon,
    description: '심장과 혈관 건강 개선'
  },
  { 
    id: 'gutHealth', 
    name: t.pages.foodDatabase.categories.gutHealth, 
    icon: icons.ComputerIcon,
    description: '장내 미생물 균형과 소화 개선'
  },
  { 
    id: 'antiAging', 
    name: t.pages.foodDatabase.categories.comprehensiveAntiAging, 
    icon: icons.ClockIcon,
    description: '전반적인 노화 방지 효과'
  }
]; 