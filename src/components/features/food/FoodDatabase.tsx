import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { SearchIcon, FilterIcon } from '@hugeicons/core-free-icons';
import { FoodData, FoodCategoryInfo } from '@/data/foodData';
import { useLanguage } from '@/lib/LanguageContext';
import FoodCard from './FoodCard';

interface FoodDatabaseProps {
  foods: FoodData[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: FoodCategoryInfo[];
  onViewDetails: (food: FoodData) => void;
  onAskAI: (food: FoodData) => void;
}

const FoodDatabase: React.FC<FoodDatabaseProps> = ({
  foods,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
  onViewDetails,
  onAskAI
}) => {
  const { t } = useLanguage();
  
  return (
    <div 
      className="container mx-auto px-6 pb-20"
      style={{ fontFamily: 'Inter' }}
    >
      {/* 헤더 섹션 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">{t.pages.foodDatabase.headerTitle}</h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          {t.pages.foodDatabase.headerSubtitle}
        </p>
      </div>

      {/* 카테고리 필터 */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-white/20 border-white/30 text-white shadow-lg'
                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20'
            }`}
          >
            <HugeiconsIcon icon={category.icon} className="w-4 h-4" />
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        ))}
      </div>

      {/* 검색 및 필터 */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1 relative">
          <HugeiconsIcon 
            icon={SearchIcon} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" 
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.pages.foodDatabase.searchPlaceholder}
            className="w-full pl-10 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-green-400/30 focus:border-green-400/30 transition-all text-sm"
          />
        </div>
      </div>

      {/* 검색 결과 표시 */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <p className="text-white/60 text-sm">
            {foods.length}{t.pages.foodDatabase.searchResultsCount}
            {searchQuery && (
              <span className="text-green-400 font-medium"> "{searchQuery}"</span>
            )}
          </p>
          {selectedCategory !== 'all' && (
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-sm">{t.pages.foodDatabase.categoryFilter}</span>
              <span className="text-green-400 font-medium text-sm">
                {categories.find(c => c.id === selectedCategory)?.name}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* 음식 카드 그리드 */}
      {foods.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              onViewDetails={onViewDetails}
              onAskAI={onAskAI}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
            <HugeiconsIcon icon={SearchIcon} className="w-10 h-10 text-white/30" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{t.pages.foodDatabase.noResultsTitle}</h3>
          <p className="text-white/60">{t.pages.foodDatabase.noResultsDescription}</p>
        </div>
      )}
    </div>
  );
};

export default FoodDatabase; 