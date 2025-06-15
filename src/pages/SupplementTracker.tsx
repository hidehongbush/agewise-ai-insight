import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/lib/LanguageContext';
import { HugeiconsIcon } from '@hugeicons/react';
import { 
  BookOpenIcon,
  PiIcon as PillIcon,
  ShieldIcon as ShieldCheckIcon,
  ChartIcon as ChartBarIcon,
  FilterIcon, 
  ArrowUpIcon, 
  BrainIcon, 
  HeartAddIcon as HeartIcon, 
  BulbIcon, 
  ClockIcon, 
  StethoscopeIcon, 
  ComputerDesk02Icon as ComputerIcon,
  CheckmarkCircleIcon as CheckCircleIcon,
  RankingIcon as WarningIcon,
  Task01Icon as TaskIcon,

  GlobalSearchIcon
} from '@hugeicons/core-free-icons';
import { getSupplementDatabase, getSupplementCategories, SupplementData } from '@/data/supplementData';
import { getFoodDatabase, getFoodCategories, FoodData } from '@/data/foodData';
import SupplementDatabase from '@/components/features/supplement/SupplementDatabase';
import FoodDatabase from '@/components/features/food/FoodDatabase';
import SupplementForm from '@/components/features/supplement/SupplementForm';
import SupplementList from '@/components/features/supplement/SupplementList';

// Spline viewer 타입 선언
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url?: string;
      };
    }
  }
}

interface Supplement {
  id: string;
  name: string;
  time: string;
  taken: boolean;
  category: string;
  addedDate: Date;
  notes?: string;
  effects?: string[];
  sideEffects?: string[];
}



const SupplementTracker = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [supplements, setSupplements] = useState<Supplement[]>([]);
  const [activeTab, setActiveTab] = useState<'database' | 'tracker' | 'food'>('food');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSupplementDetails, setSelectedSupplementDetails] = useState<SupplementData | null>(null);
  const [foodSearchQuery, setFoodSearchQuery] = useState('');
  const [selectedFoodCategory, setSelectedFoodCategory] = useState<string>('all');
  const [selectedFoodDetails, setSelectedFoodDetails] = useState<FoodData | null>(null);
  const [newSupplement, setNewSupplement] = useState({
    name: '',
    time: '',
    notes: ''
  });


  // 영양제 데이터베이스와 카테고리 정보
  const supplementDatabase = getSupplementDatabase(t);
  const categories = getSupplementCategories(t, {
    FilterIcon, ArrowUpIcon, BrainIcon, HeartIcon, ShieldCheckIcon,
    BulbIcon, ClockIcon, StethoscopeIcon, ComputerIcon
  });

  // 음식 데이터베이스와 카테고리 정보
  const foodDatabase = getFoodDatabase(t);
  const foodCategories = getFoodCategories(t, {
    FilterIcon, ArrowUpIcon, BrainIcon, HeartIcon, ShieldCheckIcon,
    BulbIcon, ClockIcon, StethoscopeIcon, ComputerIcon
  });

  // 로컬 스토리지에서 데이터 로드
  useEffect(() => {
    const savedSupplements = localStorage.getItem('supplements');
    if (savedSupplements) {
      const parsed = JSON.parse(savedSupplements);
      setSupplements(parsed.map((s: any) => ({ ...s, addedDate: new Date(s.addedDate) })));
    }
  }, []);

  // 로컬 스토리지에 데이터 저장
  useEffect(() => {
    if (supplements.length > 0) {
      localStorage.setItem('supplements', JSON.stringify(supplements));
    }
  }, [supplements]);



  // 필터링된 영양제 목록
  const filteredSupplements = supplementDatabase.filter(supplement => {
    const matchesSearch = supplement.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         supplement.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         supplement.benefits.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || supplement.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // 필터링된 음식 목록
  const filteredFoods = foodDatabase.filter(food => {
    const matchesSearch = food.name.toLowerCase().includes(foodSearchQuery.toLowerCase()) ||
                         food.description.toLowerCase().includes(foodSearchQuery.toLowerCase()) ||
                         food.benefits.toLowerCase().includes(foodSearchQuery.toLowerCase());
    const matchesCategory = selectedFoodCategory === 'all' || food.category === selectedFoodCategory;
    return matchesSearch && matchesCategory;
  });

  // 영양제 추가 함수
  const addSupplement = () => {
    if (newSupplement.name && newSupplement.time) {
      const supplement: Supplement = {
        id: Date.now().toString(),
        ...newSupplement,
        category: 'antiAging', // 기본 카테고리 설정
        taken: false,
        addedDate: new Date(),
      };
      setSupplements([...supplements, supplement]);
      setNewSupplement({ name: '', time: '', notes: '' });
    }
  };

  // 영양제 삭제 함수
  const deleteSupplement = (id: string) => {
    setSupplements(supplements.filter(s => s.id !== id));
  };

  // 복용 상태 토글
  const toggleTaken = (id: string) => {
    setSupplements(supplements.map(supplement =>
      supplement.id === id ? { ...supplement, taken: !supplement.taken } : supplement
    ));
  };

  // AI 상담하기 함수
  const handleAskAI = (supplement: SupplementData) => {
    const aiMessage = `${supplement.name}${t.chat.supplementMessage}`;
    navigate('/chat', { 
      state: { 
        initialMessage: aiMessage 
      }
    });
  };

  // 음식 AI 상담하기 함수
  const handleFoodAskAI = (food: FoodData) => {
    const aiMessage = `${food.name}${t.chat.foodMessage}`;
    navigate('/chat', { 
      state: { 
        initialMessage: aiMessage 
      }
    });
  };

  // 상호작용 체크 함수
  const checkInteractions = () => {
    const warnings: Array<{supplements: string[], warning: string, severity: 'low' | 'medium' | 'high'}> = [];
    const takenSupplements = supplements.map(s => s.name.toLowerCase());
    
    if (takenSupplements.includes('resveratrol') && takenSupplements.includes('omega-3')) {
      warnings.push({
        supplements: ['Resveratrol', 'Omega-3'],
        warning: t.pages.supplementTracker.resveratrol_omega3_interaction,
        severity: 'medium'
      });
    }
    
    return warnings;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#171717', fontFamily: 'Inter' }}>
      {/* Spline 3D 배경 */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none'
      }}>
        <spline-viewer 
          url="https://prod.spline.design/aKGpMB18avQjK9vR/scene.splinecode" 
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </div>

      <Navbar />
      
      <div className="relative z-20 pt-20">
        {/* 탭 네비게이션 */}
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: 'food', label: t.pages.foodDatabase.tabs.foodDatabase, icon: ChartBarIcon },
              { id: 'database', label: t.pages.foodDatabase.tabs.supplementDatabase, icon: BookOpenIcon },
              { id: 'tracker', label: t.pages.foodDatabase.tabs.mySupplements, icon: PillIcon }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white/20 border-white/30 text-white shadow-lg'
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <HugeiconsIcon icon={tab.icon} className="w-4 h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 영양제 데이터베이스 탭 */}
        {activeTab === 'database' && (
          <SupplementDatabase
            supplements={filteredSupplements}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
            onViewDetails={setSelectedSupplementDetails}
            onAddToList={(supplement) => {
              setNewSupplement({
                name: supplement.name,
                time: '',
                notes: supplement.dosage.replace('권장량: ', '').replace('Recommended: ', '')
              });
              setActiveTab('tracker');
            }}
            onAskAI={handleAskAI}
          />
        )}

        {/* 내 영양제 트래커 탭 */}
        {activeTab === 'tracker' && (
          <div className="container mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
              
              {/* 영양제 추가 폼 */}
              <div className="lg:col-span-4">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 min-h-[500px] sm:min-h-[600px] lg:h-[600px] flex flex-col">
                  <div className="flex items-center gap-3 mb-6 sm:mb-8">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <HugeiconsIcon icon={PillIcon} className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-semibold text-white">{t.pages.mySupplements.addSupplement}</h2>
                  </div>
                  
                  <div className="flex-1">
                    <SupplementForm
                      newSupplement={newSupplement}
                      setNewSupplement={setNewSupplement}
                      onAdd={addSupplement}
                    />
                  </div>
                </div>
              </div>

              {/* 영양제 목록 */}
              <div className="lg:col-span-5">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 min-h-[500px] sm:min-h-[600px] lg:h-[600px] flex flex-col">
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                        <HugeiconsIcon icon={TaskIcon} className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                      </div>
                      <h2 className="text-lg sm:text-xl font-semibold text-white">{t.pages.mySupplements.mySupplementsList}</h2>
                    </div>
                    <div className="px-2 sm:px-3 py-1 bg-white/10 rounded-full">
                      <span className="text-xs sm:text-sm text-white/80 font-medium">{supplements.length}{t.pages.mySupplements.itemCount}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-h-0">
                    <SupplementList
                      supplements={supplements}
                      onToggleTaken={toggleTaken}
                      onDelete={deleteSupplement}
                    />
                  </div>
                </div>
              </div>

              {/* 상호작용 체크 */}
              <div className="lg:col-span-3">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 min-h-[500px] sm:min-h-[600px] lg:h-[600px] flex flex-col">
                  <div className="flex items-center gap-3 mb-6 sm:mb-8">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <HugeiconsIcon icon={ShieldCheckIcon} className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-semibold text-white">{t.pages.mySupplements.interactions}</h2>
                  </div>

                  <div className="flex-1 min-h-0 overflow-y-auto pr-2">
                    {supplements.length === 0 ? (
                      <div className="flex flex-col justify-center items-center text-center py-12">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                          <HugeiconsIcon icon={GlobalSearchIcon} className="w-8 h-8 text-white/30" />
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">{t.pages.mySupplements.noInteractionsMessage}</p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {/* 복용 영양제 요약 */}
                                                  <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              {t.pages.mySupplements.currentTaking}
                            </h3>
                            <div className="space-y-3">
                              {supplements.slice(0, 3).map(supplement => (
                                <div key={supplement.id} className="flex items-center justify-between py-1">
                                  <span className="text-white text-sm font-medium">{supplement.name}</span>
                                  <span className="text-white/50 text-xs bg-white/10 px-2 py-1 rounded-full">{
                                    supplement.time === '아침' ? t.pages.mySupplements.general.morning :
                                    supplement.time === '점심' ? t.pages.mySupplements.general.afternoon :
                                    supplement.time === '저녁' ? t.pages.mySupplements.general.evening :
                                    supplement.time === 'morning' ? t.pages.mySupplements.general.morning :
                                    supplement.time === 'afternoon' ? t.pages.mySupplements.general.afternoon :
                                    supplement.time === 'evening' ? t.pages.mySupplements.general.evening :
                                    supplement.time
                                  }</span>
                                </div>
                              ))}
                              {supplements.length > 3 && (
                                <div className="text-white/60 text-xs pt-2 border-t border-white/10">
                                  +{supplements.length - 3}{t.pages.mySupplements.moreItems}
                                </div>
                              )}
                            </div>
                          </div>

                        {/* 상호작용 결과 */}
                        {checkInteractions().length === 0 ? (
                          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/30 rounded-2xl p-6 text-center">
                            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                              <HugeiconsIcon icon={CheckCircleIcon} className="w-6 h-6 text-green-400" />
                            </div>
                            <p className="text-green-300 font-semibold text-sm mb-1">{t.pages.mySupplements.safeStatus}</p>
                            <p className="text-green-200/80 text-xs">{t.pages.mySupplements.warningDescription}</p>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            {checkInteractions().map((interaction, index) => (
                              <div key={index} className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/30 rounded-2xl p-5">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                                    <HugeiconsIcon icon={WarningIcon} className="w-4 h-4 text-red-400" />
                                  </div>
                                  <span className="text-red-300 font-semibold text-sm">{t.pages.mySupplements.warningNeeded}</span>
                                </div>
                                <p className="text-white text-sm font-medium mb-2">{interaction.supplements.join(' + ')}</p>
                                <p className="text-red-200/90 text-xs leading-relaxed">{interaction.warning}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 음식 데이터베이스 탭 */}
        {activeTab === 'food' && (
          <FoodDatabase
            foods={filteredFoods}
            searchQuery={foodSearchQuery}
            setSearchQuery={setFoodSearchQuery}
            selectedCategory={selectedFoodCategory}
            setSelectedCategory={setSelectedFoodCategory}
            categories={foodCategories}
            onViewDetails={setSelectedFoodDetails}
            onAskAI={handleFoodAskAI}
          />
        )}
      </div>

      {/* 음식 상세 정보 모달 */}
      {selectedFoodDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white pr-4">{selectedFoodDetails.name}</h2>
                <button
                  onClick={() => setSelectedFoodDetails(null)}
                  className="p-2 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">🥗 {t.pages.foodDatabase.detailModal.detailDescription}</h3>
                  <p className="text-white/80 leading-relaxed">{selectedFoodDetails.description}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      🍽️ {t.pages.foodDatabase.detailModal.servingSize}
                    </h3>
                    <p className="text-white/80">{selectedFoodDetails.servingSize}</p>
                    {selectedFoodDetails.bestTimesToEat && (
                      <p className="text-green-300 text-sm mt-2">
                        ⏰ {
                          selectedFoodDetails.bestTimesToEat === '아침' ? t.pages.mySupplements.general.morning :
                          selectedFoodDetails.bestTimesToEat === '점심' ? t.pages.mySupplements.general.afternoon :
                          selectedFoodDetails.bestTimesToEat === '저녁' ? t.pages.mySupplements.general.evening :
                          selectedFoodDetails.bestTimesToEat === 'morning' ? t.pages.mySupplements.general.morning :
                          selectedFoodDetails.bestTimesToEat === 'afternoon' ? t.pages.mySupplements.general.afternoon :
                          selectedFoodDetails.bestTimesToEat === 'evening' ? t.pages.mySupplements.general.evening :
                          selectedFoodDetails.bestTimesToEat
                        }
                      </p>
                    )}
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      🔬 {t.pages.foodDatabase.detailModal.researchEvidence}
                    </h3>
                    <p className="text-green-300 font-medium">{selectedFoodDetails.evidence}</p>
                    <p className="text-blue-300 text-sm mt-2">{selectedFoodDetails.source}</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    ✨ {t.pages.foodDatabase.detailModal.keyBenefits}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedFoodDetails.benefits.split(', ').map((benefit, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-400/30"
                      >
                        {benefit.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-400/30">
                  <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center gap-2">
                    🧬 {t.pages.foodDatabase.detailModal.coreNutrients}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedFoodDetails.nutritionHighlights.map((nutrient, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                      >
                        {
                          nutrient === '아침' ? t.pages.mySupplements.general.morning :
                          nutrient === '점심' ? t.pages.mySupplements.general.afternoon :
                          nutrient === '저녁' ? t.pages.mySupplements.general.evening :
                          nutrient === 'morning' ? t.pages.mySupplements.general.morning :
                          nutrient === 'afternoon' ? t.pages.mySupplements.general.afternoon :
                          nutrient === 'evening' ? t.pages.mySupplements.general.evening :
                          nutrient
                        }
                      </span>
                    ))}
                  </div>
                </div>

                {selectedFoodDetails.cookingTips && selectedFoodDetails.cookingTips.length > 0 && (
                  <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-400/30">
                    <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center gap-2">
                      👩‍🍳 {t.pages.foodDatabase.detailModal.cookingTips}
                    </h3>
                    <ul className="space-y-1">
                      {selectedFoodDetails.cookingTips.map((tip, index) => (
                        <li key={index} className="text-purple-200 text-sm flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedFoodDetails.storage && (
                  <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-400/30">
                    <h3 className="text-lg font-semibold text-yellow-300 mb-3 flex items-center gap-2">
                      📦 {t.pages.foodDatabase.detailModal.storage}
                    </h3>
                    <p className="text-yellow-200 text-sm">{selectedFoodDetails.storage}</p>
                  </div>
                )}

                {selectedFoodDetails.warnings && selectedFoodDetails.warnings.length > 0 && (
                  <div className="bg-red-500/10 rounded-xl p-4 border border-red-400/30">
                    <h3 className="text-lg font-semibold text-red-300 mb-3 flex items-center gap-2">
                      ⚠️ {t.pages.foodDatabase.detailModal.warnings}
                    </h3>
                    <ul className="space-y-1">
                      {selectedFoodDetails.warnings.map((warning, index) => (
                        <li key={index} className="text-red-200 text-sm flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          {
                            warning === '아침' ? t.pages.mySupplements.general.morning :
                            warning === '점심' ? t.pages.mySupplements.general.afternoon :
                            warning === '저녁' ? t.pages.mySupplements.general.evening :
                            warning === 'morning' ? t.pages.mySupplements.general.morning :
                            warning === 'afternoon' ? t.pages.mySupplements.general.afternoon :
                            warning === 'evening' ? t.pages.mySupplements.general.evening :
                            warning
                          }
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={() => {
                      handleFoodAskAI(selectedFoodDetails);
                      setSelectedFoodDetails(null);
                    }}
                    className="flex-1 px-4 sm:px-6 py-3 bg-white text-black font-medium rounded-xl hover:bg-white/90 transition-all duration-300"
                  >
                    {t.pages.foodDatabase.askAIButton}
                  </button>
                  <button
                    onClick={() => setSelectedFoodDetails(null)}
                    className="px-4 sm:px-6 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-colors"
                  >
                    {t.pages.foodDatabase.closeButton}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 영양제 상세 정보 모달 */}
      {selectedSupplementDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white pr-4">{selectedSupplementDetails.name}</h2>
                <button
                  onClick={() => setSelectedSupplementDetails(null)}
                  className="p-2 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">📋 {t.pages.foodDatabase.detailModal.detailDescription}</h3>
                  <p className="text-white/80 leading-relaxed">{selectedSupplementDetails.description}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      💊 {t.pages.supplementTracker.dosageGuidance}
                    </h3>
                    <p className="text-white/80">{selectedSupplementDetails.dosage}</p>
                    <p className="text-white/60 text-sm mt-2">
                      ⚠️ {t.pages.mySupplements.consultWarning}
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      🔬 {t.pages.foodDatabase.detailModal.researchEvidence}
                    </h3>
                    <p className="text-green-300 font-medium">{selectedSupplementDetails.evidence}</p>
                    <p className="text-blue-300 text-sm mt-2">{selectedSupplementDetails.source}</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    ✨ {t.pages.foodDatabase.detailModal.keyBenefits}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedSupplementDetails.benefits.split(', ').map((benefit, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-400/30"
                      >
                        {benefit.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedSupplementDetails.warnings && selectedSupplementDetails.warnings.length > 0 && (
                  <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-400/30">
                    <h3 className="text-lg font-semibold text-yellow-300 mb-3 flex items-center gap-2">
                      ⚠️ {t.pages.foodDatabase.detailModal.warnings}
                    </h3>
                    <ul className="space-y-1">
                      {selectedSupplementDetails.warnings.map((warning, index) => (
                        <li key={index} className="text-yellow-200 text-sm flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          {
                            warning === '아침' ? t.pages.mySupplements.general.morning :
                            warning === '점심' ? t.pages.mySupplements.general.afternoon :
                            warning === '저녁' ? t.pages.mySupplements.general.evening :
                            warning === 'morning' ? t.pages.mySupplements.general.morning :
                            warning === 'afternoon' ? t.pages.mySupplements.general.afternoon :
                            warning === 'evening' ? t.pages.mySupplements.general.evening :
                            warning
                          }
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedSupplementDetails.interactions && selectedSupplementDetails.interactions.length > 0 && (
                  <div className="bg-red-500/10 rounded-xl p-4 border border-red-400/30">
                    <h3 className="text-lg font-semibold text-red-300 mb-3 flex items-center gap-2">
                      🚫 {t.pages.supplementTracker.warningInteractions}
                    </h3>
                    <ul className="space-y-1">
                      {selectedSupplementDetails.interactions.map((interaction, index) => (
                        <li key={index} className="text-red-200 text-sm flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span>
                          {
                            interaction === '아침' ? t.pages.mySupplements.general.morning :
                            interaction === '점심' ? t.pages.mySupplements.general.afternoon :
                            interaction === '저녁' ? t.pages.mySupplements.general.evening :
                            interaction === 'morning' ? t.pages.mySupplements.general.morning :
                            interaction === 'afternoon' ? t.pages.mySupplements.general.afternoon :
                            interaction === 'evening' ? t.pages.mySupplements.general.evening :
                            interaction
                          }
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-400/30">
                  <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center gap-2">
                    💡 {t.pages.mySupplements.takingTips.title}
                  </h3>
                  <div className="space-y-2 text-blue-200 text-sm">
                    <p>• {t.pages.mySupplements.takingTips.tip1}</p>
                    <p>• {t.pages.mySupplements.takingTips.tip2}</p>
                    <p>• {t.pages.mySupplements.takingTips.tip3}</p>
                    <p>• {t.pages.mySupplements.takingTips.tip4}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={() => {
                      setNewSupplement({
                        name: selectedSupplementDetails.name,
                        time: '',
                        notes: selectedSupplementDetails.dosage.replace('권장량: ', '').replace('Recommended: ', '')
                      });
                      setSelectedSupplementDetails(null);
                      setActiveTab('tracker');
                    }}
                    className="flex-1 px-4 sm:px-6 py-3 bg-white text-black font-medium rounded-xl hover:bg-white/90 transition-all duration-300"
                  >
                    {t.pages.foodDatabase.addToListButton}
                  </button>
                  <button
                    onClick={() => setSelectedSupplementDetails(null)}
                    className="px-4 sm:px-6 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-colors"
                  >
                    {t.pages.foodDatabase.closeButton}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default SupplementTracker; 