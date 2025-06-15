import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { SearchIcon, FilterIcon } from '@hugeicons/core-free-icons';
import { SupplementData } from '@/data/supplementData';
import SupplementCard from './SupplementCard';

interface SupplementDatabaseProps {
  supplements: SupplementData[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: Array<{ id: string; name: string }>;
  onViewDetails: (supplement: SupplementData) => void;
  onAddToList: (supplement: SupplementData) => void;
  onAskAI: (supplement: SupplementData) => void;
}

const SupplementDatabase: React.FC<SupplementDatabaseProps> = ({
  supplements,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
  onViewDetails,
  onAddToList,
  onAskAI
}) => {
  return (
    <div 
      className="container mx-auto px-6 pb-20"
      style={{ fontFamily: 'Inter' }}
    >
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
            placeholder="영양제 검색..."
            className="w-full pl-10 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-green-400/30 focus:border-green-400/30 transition-all text-sm"
          />
        </div>
        <div className="relative">
          <HugeiconsIcon 
            icon={FilterIcon} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" 
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="pl-10 pr-8 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-green-400/30 focus:border-green-400/30 transition-all text-sm min-w-[160px] appearance-none cursor-pointer"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id} className="bg-gray-700 text-white">
                {category.name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* 영양제 카드 그리드 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {supplements.map((supplement) => (
          <SupplementCard
            key={supplement.id}
            supplement={supplement}
            onViewDetails={onViewDetails}
            onAddToList={onAddToList}
            onAskAI={onAskAI}
          />
        ))}
      </div>
    </div>
  );
};

export default SupplementDatabase; 