import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { 
  ChatGptIcon, 
  GoogleGeminiIcon,
  ArtificialIntelligenceIcon,
  CheckmarkCircle01Icon,
  CancelCircleIcon,
  LinkIcon
} from '@hugeicons/core-free-icons';
import { useLanguage } from '@/lib/LanguageContext';

const ComparisonSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative bg-[#171717]">
      {/* CSS 애니메이션 스타일 추가 */}
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .animate-spin {
            animation: spin 1s linear infinite;
          }
          
          .animate-pulse {
            animation: pulse 2s ease-in-out infinite;
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}
      </style>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-8">
          <p className="text-emerald-400 font-medium mb-2">{t.comparison.title}</p>
          <h2 className="text-2xl font-semibold text-white mb-4">
            {t.comparison.subtitleQuestion} <span className="text-emerald-400">{t.comparison.subtitleHighlight}</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-2">
            {t.comparison.subtitle}
          </p>
          <p className="text-white text-base inline-block bg-neutral-800/50 px-3 py-1 rounded-md border border-white/10">
            {t.comparison.questionPrompt}
          </p>
        </div>

        {/* File Comparison Style Interface */}
        <div className="bg-neutral-900 border border-white/20 rounded-xl overflow-hidden shadow-2xl mb-16">
          {/* Header with file tabs */}
          <div className="flex">
            {/* ChatGPT Tab */}
            <div className="flex-1 bg-neutral-800 border-r border-white/20">
              <div className="flex items-center gap-3 p-4 border-b border-white/10">
                <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
                  <HugeiconsIcon icon={ChatGptIcon} size={16} color="#10B981" />
                </div>
                <span className="text-white font-medium">{t.comparison.chatgpt.label}</span>
                <div className="ml-auto text-xs text-white/40">{t.comparison.chatgpt.beforeLabel}</div>
              </div>
            </div>

            {/* VS Divider */}
            <div className="w-20 bg-neutral-700 flex items-center justify-center border-b border-white/10">
              <div className="bg-neutral-600 text-white/80 text-xs font-medium px-3 py-1 rounded">
                vs
              </div>
            </div>

            {/* Age-Wise AI Tab */}
            <div className="flex-1 bg-emerald-900/20 border-l border-emerald-500/20">
              <div className="flex items-center gap-3 p-4 border-b border-emerald-500/20">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <HugeiconsIcon icon={ArtificialIntelligenceIcon} size={16} color="#10B981" />
                </div>
                <span className="text-white font-medium">{t.comparison.ageWiseAi.label}</span>
                <div className="ml-auto text-xs text-emerald-400">{t.comparison.ageWiseAi.afterLabel}</div>
              </div>
            </div>
          </div>

          {/* Content Comparison */}
          <div className="flex min-h-[350px]">
            {/* ChatGPT Response */}
            <div className="flex-1 p-6 border-r border-white/20 bg-neutral-900/50">
              <div className="text-white/80 text-sm mb-6 leading-relaxed">
                "{t.comparison.chatgpt.response}"
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CancelCircleIcon} size={16} color="#EF4444" />
                  <span className="text-white/60 text-xs">{t.comparison.chatgpt.issues.noSource}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CancelCircleIcon} size={16} color="#EF4444" />
                  <span className="text-white/60 text-xs">{t.comparison.chatgpt.issues.outdated}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={16} color="#10B981" />
                  <span className="text-white/60 text-xs">{t.comparison.chatgpt.issues.general}</span>
                </div>
              </div>
            </div>

            {/* VS Line */}
            <div className="w-20 bg-neutral-700/50 flex items-center justify-center">
              <div className="w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            </div>

            {/* Age-Wise AI Response */}
            <div className="flex-1 p-6 bg-emerald-900/10">
              <div className="text-white/80 text-sm mb-6 leading-relaxed">
                "{t.comparison.ageWiseAi.response}"
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={16} color="#10B981" />
                  <span className="text-white/60 text-xs">{t.comparison.ageWiseAi.features.latestResearch}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={16} color="#10B981" />
                  <span className="text-white/60 text-xs">{t.comparison.ageWiseAi.features.sourcesProvided}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} size={16} color="#10B981" />
                  <span className="text-white/60 text-xs">{t.comparison.ageWiseAi.features.specificGuidance}</span>
                </div>
              </div>

              <div className="border-t border-emerald-500/20 pt-4">
                <div className="text-xs text-emerald-400 mb-2 flex items-center gap-1">
                  <HugeiconsIcon icon={LinkIcon} size={12} />
                  <span>{t.comparison.ageWiseAi.references.title}</span>
                </div>
                <div className="text-xs text-white/60 space-y-1">
                  <p>{t.comparison.ageWiseAi.references.ref1}</p>
                  <p>{t.comparison.ageWiseAi.references.ref2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Differences */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">
            {t.comparison.differences.title}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center mx-auto mb-4">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-lg bg-blue-500/20 blur"></div>
                  <div className="relative w-72 h-96 rounded-lg border border-white/10 bg-neutral-900 p-4 shadow-xl flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-3">
                      <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
                      <span className="text-sm text-white/80">{t.comparison.differences.realTimeSearch.title}</span>
                    </div>
                    
                    {/* Search Results */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 p-2 bg-emerald-500/10 rounded">
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                        <div className="flex-1">
                          <div className="text-xs text-emerald-300">PubMed</div>
                          <div className="text-xs text-white/50">{t.researchProgress.searchStatus.papersSearched}</div>
                        </div>
                        <div className="text-xs text-emerald-400">✓</div>
                      </div>
                      
                      <div className="flex items-center gap-2 p-2 bg-blue-500/10 rounded">
                        <div className="h-3 w-3 border border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        <div className="flex-1">
                          <div className="text-xs text-blue-300">Nature Aging</div>
                          <div className="text-xs text-white/50">{t.researchProgress.searchStatus.searching}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 p-2 bg-white/5 rounded">
                        <div className="h-3 w-3 border border-white/30 border-t-transparent rounded-full animate-spin"></div>
                        <div className="flex-1">
                          <div className="text-xs text-white/70">Science</div>
                          <div className="text-xs text-white/50">{t.researchProgress.searchStatus.waiting}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="border-t border-white/10 pt-3 mt-auto">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-sm text-blue-400 font-medium">247</div>
                          <div className="text-xs text-white/50">{t.researchProgress.searchStatus.totalPapers}</div>
                        </div>
                        <div>
                          <div className="text-sm text-emerald-400 font-medium">31</div>
                          <div className="text-xs text-white/50">{t.researchProgress.searchStatus.yearFilter}</div>
                        </div>
                      </div>
                      
                      <div className="mt-3 h-1 w-full bg-white/10 rounded">
                        <div className="h-full bg-blue-500 rounded" style={{width: '75%'}}></div>
                      </div>
                      <div className="text-xs text-white/40 mt-1 text-center">{t.researchProgress.searchStatus.progressLabel}</div>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="text-white font-medium mb-2">{t.comparison.differences.realTimeSearch.title}</h4>
              <p className="text-white/60 text-sm">{t.comparison.differences.realTimeSearch.description}</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mx-auto mb-4">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-lg bg-emerald-500/20 blur"></div>
                  <div className="relative w-72 h-96 rounded-lg border border-white/10 bg-neutral-900 shadow-xl flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-2 border-b border-white/10 p-3">
                      <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                      <span className="text-sm text-white/80">{t.comparison.differences.reliableSources.title}</span>
                    </div>
                    
                    {/* Paper Results */}
                    <div className="p-3 space-y-2 flex-1">
                      <div className="border border-emerald-500/20 rounded p-2 bg-emerald-500/5">
                        <div className="text-xs text-emerald-300 mb-1">
                          NAD+ precursor supplementation in aging...
                        </div>
                        <div className="text-xs text-white/50">
                          Nature Aging • 2024 • IF: 28.5
                        </div>
                      </div>
                      
                      <div className="border border-blue-500/20 rounded p-2 bg-blue-500/5">
                        <div className="text-xs text-blue-300 mb-1">
                          Clinical efficacy of NMN supplementation...
                        </div>
                        <div className="text-xs text-white/50">
                          Cell Metabolism • 2024 • IF: 31.2
                        </div>
                      </div>
                      
                      <div className="border border-white/10 rounded p-2 bg-white/5">
                        <div className="text-xs text-white/70 mb-1">
                          Longevity benefits of nicotinamide...
                        </div>
                        <div className="text-xs text-white/50">
                          Science • 2024 • IF: 56.9
                        </div>
                      </div>
                    </div>
                    
                    {/* Footer Stats */}
                    <div className="border-t border-white/10 p-3 mt-auto">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className="text-sm text-emerald-400 font-medium">31</div>
                          <div className="text-xs text-white/50">{t.researchProgress.searchStatus.yearFilter}</div>
                        </div>
                        <div>
                          <div className="text-sm text-blue-400 font-medium">247</div>
                          <div className="text-xs text-white/50">{t.researchProgress.searchStatus.totalPapers}</div>
                        </div>
                        <div>
                          <div className="text-sm text-white/70 font-medium">38.9</div>
                          <div className="text-xs text-white/50">{t.researchProgress.searchStatus.averageIF}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="text-white font-medium mb-2">{t.comparison.differences.reliableSources.title}</h4>
              <p className="text-white/60 text-sm">{t.comparison.differences.reliableSources.description}</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mx-auto mb-4">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-xl bg-white/10 blur"></div>
                  <div className="relative w-72 h-96 rounded-lg border border-white/10 bg-neutral-900 shadow-2xl overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-2 border-b border-white/10 p-3">
                      <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                      <span className="text-sm text-white/80">{t.comparison.differences.practicalAdvice.title}</span>
                    </div>
                    
                    {/* User Profile */}
                    <div className="p-3 bg-neutral-800/40 border-b border-white/10">
                      <div className="flex justify-between text-xs">
                        <span className="text-white/70">Age: 35-45</span>
                        <span className="text-white/50">Weight: 70kg</span>
                        <span className="text-emerald-300">Goals: Longevity</span>
                      </div>
                    </div>
                    
                    {/* Daily Schedule */}
                    <div className="p-3 flex-1">
                      <div className="space-y-3">
                        {/* Morning */}
                                                  <div className="border-l-2 border-white/30 pl-2">
                            <div className="text-xs text-emerald-300 font-medium mb-1">{t.comparison.differences.practicalAdvice.schedule.morning}</div>
                          <div className="space-y-1">
                            <div className="flex justify-between items-center p-1 bg-neutral-800/40 rounded">
                              <span className="text-xs text-white/80">{t.researchProgress.practicalAdvice.supplements.nmn}</span>
                              <span className="text-xs text-white/60">{t.researchProgress.practicalAdvice.dosages.nmn}</span>
                            </div>
                            <div className="flex justify-between items-center p-1 bg-neutral-800/40 rounded">
                              <span className="text-xs text-white/80">{t.researchProgress.practicalAdvice.supplements.vitaminD3}</span>
                              <span className="text-xs text-white/60">{t.researchProgress.practicalAdvice.dosages.vitaminD3}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Lunch */}
                                                  <div className="border-l-2 border-white/30 pl-2">
                            <div className="text-xs text-emerald-300 font-medium mb-1">{t.comparison.differences.practicalAdvice.schedule.lunch}</div>
                          <div className="flex justify-between items-center p-1 bg-neutral-800/40 rounded">
                            <span className="text-xs text-white/80">{t.researchProgress.practicalAdvice.supplements.omega3}</span>
                            <span className="text-xs text-white/60">{t.researchProgress.practicalAdvice.dosages.omega3}</span>
                          </div>
                        </div>
                        
                        {/* Evening */}
                                                  <div className="border-l-2 border-white/30 pl-2">
                            <div className="text-xs text-emerald-300 font-medium mb-1">{t.comparison.differences.practicalAdvice.schedule.evening}</div>
                          <div className="flex justify-between items-center p-1 bg-neutral-800/40 rounded">
                            <span className="text-xs text-white/80">{t.researchProgress.practicalAdvice.supplements.resveratrol}</span>
                            <span className="text-xs text-white/60">{t.researchProgress.practicalAdvice.dosages.resveratrol}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Warning & Stats */}
                    <div className="p-3 border-t border-white/10 bg-neutral-800/50">
                      <div className="bg-red-500/20 border border-red-500/30 rounded p-2 mb-2">
                        <div className="text-xs text-red-300 font-medium mb-1">⚠️ {t.researchProgress.interactions.title}</div>
                        <div className="text-xs text-white/60">{t.researchProgress.interactions.warningExample}</div>
                      </div>
                      
                      <div className="flex justify-between text-xs">
                        <span className="text-white/40">{t.researchProgress.interactions.totalSupplements}</span>
                        <span className="text-emerald-400">{t.researchProgress.interactions.monthlyCost}</span>
                        <span className="text-white/70">{t.researchProgress.interactions.safetyScore}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="text-white font-medium mb-2">{t.comparison.differences.practicalAdvice.title}</h4>
              <p className="text-white/60 text-sm">{t.comparison.differences.practicalAdvice.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection; 