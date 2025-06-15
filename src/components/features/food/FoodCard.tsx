import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { 
  ChatGptIcon, 
  Add01Icon, 
  SearchIcon
} from '@hugeicons/core-free-icons';
import { FoodData } from '@/data/foodData';
import { useLanguage } from '@/lib/LanguageContext';

interface FoodCardProps {
  food: FoodData;
  onViewDetails: (food: FoodData) => void;
  onAskAI: (food: FoodData) => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ 
  food, 
  onViewDetails, 
  onAskAI 
}) => {
  const { t } = useLanguage();
  
  const getCategoryInfo = (category: string) => {
    const categoryMap: { [key: string]: { name: string; color: string; bgColor: string } } = {
      antioxidant: { name: t.pages.foodDatabase.categoryNames.antioxidant, color: '#10b981', bgColor: 'rgba(16, 185, 129, 0.1)' },
      omega3: { name: t.pages.foodDatabase.categoryNames.omega3, color: '#3b82f6', bgColor: 'rgba(59, 130, 246, 0.1)' },
      antiInflammatory: { name: t.pages.foodDatabase.categoryNames.antiInflammatory, color: '#ef4444', bgColor: 'rgba(239, 68, 68, 0.1)' },
      brainHealth: { name: t.pages.foodDatabase.categoryNames.brainHealth, color: '#8b5cf6', bgColor: 'rgba(139, 92, 246, 0.1)' },
      cardiovascular: { name: t.pages.foodDatabase.categoryNames.cardiovascular, color: '#f59e0b', bgColor: 'rgba(245, 158, 11, 0.1)' },
      gutHealth: { name: t.pages.foodDatabase.categoryNames.gutHealth, color: '#06b6d4', bgColor: 'rgba(6, 182, 212, 0.1)' },
      antiAging: { name: t.pages.foodDatabase.categoryNames.antiAging, color: '#84cc16', bgColor: 'rgba(132, 204, 22, 0.1)' }
    };
    return categoryMap[category] || { name: '기타', color: '#6b7280', bgColor: 'rgba(107, 114, 128, 0.1)' };
  };

  const categoryInfo = getCategoryInfo(food.category);
  
  return (
    <div
      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
      onClick={() => onViewDetails(food)}
      style={{ fontFamily: 'Inter' }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 
            className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors italic"
            style={{ 
              textShadow: '2px 2px 0px #10b981, 4px 4px 0px rgba(16, 185, 129, 0.3)' 
            }}
          >
            {food.name}
          </h3>
          <div 
            className="px-2 py-1 rounded-full text-xs font-medium"
            style={{ 
              backgroundColor: categoryInfo.bgColor,
              color: categoryInfo.color,
              border: `1px solid ${categoryInfo.color}`
            }}
          >
            {categoryInfo.name}
          </div>
        </div>
        
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-green-400 text-xs font-medium">{t.pages.foodDatabase.detailModal.servingSize}</span>
          </div>
          <p className="text-white/80 text-sm font-medium">{food.servingSize}</p>
        </div>

        <p className="text-white/70 text-sm mb-4 line-clamp-2">
          {food.description}
        </p>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white/60 text-sm">{t.pages.foodDatabase.detailModal.keyBenefits}</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {food.benefits.split(', ').slice(0, 3).map((benefit, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-white/10 text-white/80 rounded-md text-xs"
              >
                {benefit.trim()}
              </span>
            ))}
            {food.benefits.split(', ').length > 3 && (
              <span className="px-2 py-1 text-white/60 text-xs">
                +{food.benefits.split(', ').length - 3}{t.pages.common.showMore}
              </span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white/60 text-sm">{t.pages.foodDatabase.detailModal.coreNutrients}</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {food.nutritionHighlights.slice(0, 3).map((nutrient, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs border border-blue-400/30"
              >
                {nutrient}
              </span>
            ))}
            {food.nutritionHighlights.length > 3 && (
              <span className="px-2 py-1 text-blue-300/60 text-xs">
                +{food.nutritionHighlights.length - 3}{t.pages.common.showMore}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(food);
            }}
            className="flex-1 px-3 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-green-500/20 hover:border-green-400/30 hover:text-green-300 transition-colors text-sm font-medium flex items-center justify-center gap-1.5"
          >
            <HugeiconsIcon icon={SearchIcon} className="w-4 h-4" />
            <span>{t.pages.foodDatabase.viewDetailsButton}</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAskAI(food);
            }}
            title="AI에게 이 음식에 대해 질문하기"
            className="px-3 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-green-500/20 hover:border-green-400/30 hover:text-green-300 transition-colors text-sm font-medium flex items-center justify-center"
          >
            <HugeiconsIcon icon={ChatGptIcon} className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard; 