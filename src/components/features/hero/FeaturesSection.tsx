import React from 'react';
import { Link } from 'react-router-dom';
import { HugeiconsIcon } from '@hugeicons/react';
import { 
  ChatGptIcon, 
  GlobalSearchIcon, 
  Medicine01Icon, 
  ArtificialIntelligenceIcon,
  ArrowRight01Icon,
  SentIcon,
  Search01Icon,
  PlusSignIcon,
  Calendar01Icon,
  BarChartIcon,
  ActivityIcon,
  BookmarkIcon,
  ShieldIcon,
  BrainIcon,
  TestTubeIcon,
  LinkIcon,
  CheckmarkCircle01Icon,
  ClockIcon,
  AlertIcon
} from '@hugeicons/core-free-icons';
import { useLanguage } from '@/lib/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const FeaturesSection = () => {
  const { t } = useLanguage();

  // 각 기능별 데모 UI 컴포넌트들
  const AIChatDemo = () => (
    <div className="relative overflow-hidden h-[380px]">
      <div className="relative bg-neutral-900 rounded-lg border border-white/10 p-4 h-full flex flex-col">
        <div className="border-b border-white/10 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <HugeiconsIcon icon={ChatGptIcon} className="w-4 h-4 text-white/70" />
            <span className="text-sm text-white font-medium">{t.features.demos.aiChat.title}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-white/60">{t.features.demos.aiChat.subtitle}</span>
          </div>
        </div>
        
        <div className="flex-1 space-y-2">
          <div className="flex gap-2">
            <div className="bg-white/5 rounded p-1.5 max-w-[70%]">
              <p className="text-xs text-white">{t.features.demos.aiChat.messages.question1}</p>
            </div>
          </div>
          
          <div className="flex gap-2 justify-end">
            <div className="bg-white/10 rounded p-1.5 max-w-[75%]">
              <p className="text-xs text-white mb-1">
                {t.features.demos.aiChat.messages.response1}
              </p>
              <div className="text-xs text-white/60 mb-1">
                {t.features.demos.aiChat.messages.details1}
              </div>
              <div className="text-xs text-white/40">
                {t.features.demos.aiChat.messages.sources1}
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <div className="bg-white/5 rounded p-1.5 max-w-[70%]">
              <p className="text-xs text-white">{t.features.demos.aiChat.messages.question2}</p>
            </div>
          </div>
          
          <div className="flex gap-2 justify-end">
            <div className="bg-white/10 rounded p-1.5 max-w-[75%]">
              <p className="text-xs text-white mb-1">{t.features.demos.aiChat.messages.response2}</p>
              <div className="w-full h-8 bg-white/20 rounded border flex items-center justify-center mb-1">
                <span className="text-xs text-white/60">{t.features.demos.aiChat.messages.preview}</span>
              </div>
              <div className="text-xs text-white/40">
                {t.features.demos.aiChat.messages.process}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 pt-3 border-t border-white/10 mt-4">
          <input 
            className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-white/50 focus:border-white/30 focus:outline-none"
            placeholder={t.features.demos.aiChat.placeholder}
            readOnly
          />
          <button className="bg-white/10 hover:bg-white/20 rounded p-2 transition-colors">
            <HugeiconsIcon icon={SentIcon} className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );

  const ResearchTrendsDemo = () => (
    <div className="relative overflow-hidden h-[380px]">
      <div className="relative bg-neutral-900 rounded-lg border border-white/10 p-4 h-full flex flex-col">
        <div className="border-b border-white/10 pb-2 mb-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-white">{t.features.demos.researchTrends.title}</h3>
              <span className="text-xs text-white/60">{t.features.demos.researchTrends.subtitle}</span>
            </div>
            <button className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded text-white/70">
              {t.features.demos.researchTrends.refreshButton}
            </button>
          </div>
        </div>
        
        <div className="flex-1 space-y-1.5">
          <div className="bg-white/5 border border-white/10 rounded p-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-white">#1</span>
              <span className="text-xs px-1 py-0.5 rounded bg-white/20 text-white/80">Nature</span>
              <span className="text-xs text-white/50">2024</span>
              <div className="ml-auto flex items-center gap-1">
                <div className="w-6 h-1 bg-white/20 rounded overflow-hidden">
                  <div className="h-full bg-white/60" style={{width: '95%'}}></div>
            </div>
                <span className="text-xs text-white/50">95%</span>
            </div>
            </div>
            <h4 className="text-xs text-white">
              {t.features.demos.researchTrends.items.title1}
            </h4>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded p-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-white">#2</span>
              <span className="text-xs px-1 py-0.5 rounded bg-white/20 text-white/80">Cell</span>
              <span className="text-xs text-white/50">2024</span>
              <div className="ml-auto flex items-center gap-1">
                <div className="w-6 h-1 bg-white/20 rounded overflow-hidden">
                  <div className="h-full bg-white/60" style={{width: '88%'}}></div>
            </div>
                <span className="text-xs text-white/50">88%</span>
            </div>
            </div>
            <h4 className="text-xs text-white">
              {t.features.demos.researchTrends.items.title2}
            </h4>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded p-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-white">#3</span>
              <span className="text-xs px-1 py-0.5 rounded bg-white/20 text-white/80">Science</span>
              <span className="text-xs text-white/50">2024</span>
              <div className="ml-auto flex items-center gap-1">
                <div className="w-6 h-1 bg-white/20 rounded overflow-hidden">
                  <div className="h-full bg-white/60" style={{width: '82%'}}></div>
            </div>
                <span className="text-xs text-white/50">82%</span>
            </div>
            </div>
            <h4 className="text-xs text-white">
              {t.features.demos.researchTrends.items.title3}
            </h4>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded p-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-white">#4</span>
              <span className="text-xs px-1 py-0.5 rounded bg-white/20 text-white/80">NEJM</span>
              <span className="text-xs text-white/50">2024</span>
              <div className="ml-auto flex items-center gap-1">
                <div className="w-6 h-1 bg-white/20 rounded overflow-hidden">
                  <div className="h-full bg-white/60" style={{width: '79%'}}></div>
                </div>
                <span className="text-xs text-white/50">79%</span>
            </div>
            </div>
            <h4 className="text-xs text-white">
              {t.features.demos.researchTrends.items.title4}
            </h4>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded p-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-white">#5</span>
              <span className="text-xs px-1 py-0.5 rounded bg-white/20 text-white/80">BMJ</span>
              <span className="text-xs text-white/50">2024</span>
              <div className="ml-auto flex items-center gap-1">
                <div className="w-6 h-1 bg-white/20 rounded overflow-hidden">
                  <div className="h-full bg-white/60" style={{width: '76%'}}></div>
                </div>
                <span className="text-xs text-white/50">76%</span>
            </div>
            </div>
            <h4 className="text-xs text-white">
              {t.features.demos.researchTrends.items.title5}
            </h4>
          </div>
          </div>
          
        <div className="p-2 bg-white/10 rounded border border-white/20 mt-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-white/70">{t.features.demos.researchTrends.summary.title}</span>
          </div>
          <p className="text-xs text-white/80">
            {t.features.demos.researchTrends.summary.content}
          </p>
        </div>
        
        <div className="flex gap-2 pt-3 border-t border-white/10 mt-4">
          <input 
            className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-white/50 focus:border-white/30 focus:outline-none"
            placeholder={t.features.demos.researchTrends.placeholder}
            readOnly
          />
          <button className="bg-white/10 hover:bg-white/20 rounded p-2 transition-colors">
            <HugeiconsIcon icon={Search01Icon} className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );

  const SupplementTrackerDemo = () => (
    <div className="relative overflow-hidden h-[380px]">
      <div className="relative bg-neutral-900 rounded-lg border border-white/10 p-4 h-full flex flex-col">
        <div className="border-b border-white/10 pb-2 mb-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-white">{t.features.demos.supplementTracker.title}</h3>
              <span className="text-xs text-white/60">{t.features.demos.supplementTracker.subtitle}</span>
            </div>
            <span className="text-xs text-white/50">11/28</span>
          </div>
        </div>
        
        {/* 3탭 시스템 */}
        <div className="flex gap-1 mb-3">
          <div className="px-2 py-1 text-xs bg-white/20 text-white rounded border border-white/30">{t.features.demos.supplementTracker.tabs.supplements}</div>
          <div className="px-2 py-1 text-xs bg-white/10 text-white/60 rounded">{t.features.demos.supplementTracker.tabs.foods}</div>
          <div className="px-2 py-1 text-xs bg-white/10 text-white/60 rounded">{t.features.demos.supplementTracker.tabs.myList}</div>
        </div>
        
        <div className="flex-1">
          {/* 영양제 카드 간소화 */}
          <div className="bg-white/5 rounded border border-white/10 p-3 mb-3">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-base font-bold text-white italic">{t.features.demos.supplementTracker.nmn.title}</h3>
              <span className="px-2 py-1 text-xs rounded bg-white/20 text-white/80 border border-white/30">
                {t.features.demos.supplementTracker.nmn.category}
              </span>
            </div>
            
            <p className="text-xs text-white/70 mb-3 leading-relaxed">
              {t.features.demos.supplementTracker.nmn.description}
            </p>
            
            <div className="mb-3">
              <h4 className="text-xs text-white/60 mb-2">{t.features.demos.supplementTracker.nmn.benefits.title}</h4>
              <div className="flex flex-wrap gap-1">
                {t.features.demos.supplementTracker.nmn.benefits.items.map((item, index) => (
                  <span key={index} className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded">{item}</span>
                ))}
              </div>
          </div>
          
            <div className="flex gap-2">
              <button className="flex-1 bg-white/5 border border-white/20 rounded p-1.5 flex items-center justify-center gap-1 text-white text-xs hover:bg-white/10 transition-colors">
                <HugeiconsIcon icon={Search01Icon} className="w-3 h-3" />
                {t.features.demos.supplementTracker.nmn.buttons.viewDetails}
              </button>
              <button className="bg-white/5 border border-white/20 rounded p-1.5 hover:bg-white/10 transition-colors">
                <HugeiconsIcon icon={ActivityIcon} className="w-3 h-3 text-white/70" />
              </button>
              <button className="bg-white/10 border border-white/30 rounded p-1.5 hover:bg-white/20 transition-colors">
                <HugeiconsIcon icon={PlusSignIcon} className="w-3 h-3 text-white" />
              </button>
            </div>
          </div>
          
          {/* 간단한 리스트 */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs text-white">{t.features.demos.supplementTracker.otherItems.blueberry}</span>
                <span className="px-1 py-0.5 text-xs bg-white/20 text-white/70 rounded">Antioxidant</span>
              </div>
              <button className="text-xs text-white/60 hover:text-white">{t.features.demos.supplementTracker.nmn.buttons.add}</button>
            </div>
            
            <div className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs text-white">{t.features.demos.supplementTracker.otherItems.resveratrol}</span>
                <span className="px-1 py-0.5 text-xs bg-white/20 text-white/70 rounded">SIRT1</span>
              </div>
              <button className="text-xs text-white/60 hover:text-white">{t.features.demos.supplementTracker.nmn.buttons.add}</button>
            </div>
            
            <div className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs text-white">{t.features.demos.supplementTracker.otherItems.vitaminD3}</span>
                <span className="px-1 py-0.5 text-xs bg-white/20 text-white/70 rounded">Essential</span>
              </div>
              <button className="text-xs text-white/60 hover:text-white">{t.features.demos.supplementTracker.nmn.buttons.add}</button>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 pt-3 border-t border-white/10 mt-4">
          <input 
            className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-white/50 focus:border-white/30 focus:outline-none"
            placeholder={t.features.demos.supplementTracker.placeholder}
            readOnly
          />
          <button className="bg-white/10 hover:bg-white/20 rounded p-2 transition-colors">
            <HugeiconsIcon icon={Search01Icon} className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );

  const features = [
    {
      id: "ai-chat",
      icon: ChatGptIcon,
      title: t.features.items.aiChat.title,
      description: t.features.items.aiChat.description,
      badge: t.features.items.aiChat.badge,
      link: '/chat',
      demo: <AIChatDemo />,
      details: [
        "GPT-4o based high-quality responses",
        "Real-time web search with latest data",
        "18 trusted academic databases integration",
        "Scientifically verified answers with sources",
        "Magic API aging simulation integration"
      ]
    },
    {
      id: "latest-trends",
      icon: GlobalSearchIcon,
      title: t.features.items.latestTrends.title,
      description: t.features.items.latestTrends.description,
      badge: t.features.items.latestTrends.badge,
      link: '/latest-trends',
      demo: <ResearchTrendsDemo />,
      details: [
        "Parallel search for latest research collection",
        "Reliability-based research priority sorting",
        "AI advanced summary auto-generation",
        "Duplicate removal and quality filtering"
      ]
    },
    {
      id: "supplement-tracker",
      icon: Medicine01Icon,
      title: t.features.items.supplementTracker.title,
      description: t.features.items.supplementTracker.description,
      badge: t.features.items.supplementTracker.badge,
      link: '/supplement-tracker',
      demo: <SupplementTrackerDemo />,
      details: [
        "David Sinclair protocol-based supplement DB",
        "16 scientifically verified anti-aging foods",
        "Personal intake management and interaction check",
        "AI-based personalized supplement consultation"
      ]
    }
  ];

  return (
    <section className="py-24 relative bg-[#171717]">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16">
          
          <h2 className="text-2xl font-semibold text-white mb-4">
            {t.features.title} <span className="text-emerald-400">{t.features.titleHighlight}</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        {/* Features tabs */}
        <Tabs defaultValue={features[0].id} className="w-full mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:h-[380px]">
            <div className="lg:col-span-2">
              <TabsList className="flex flex-col w-full h-full bg-transparent space-y-2">
                {features.map((feature) => (
                  <TabsTrigger 
                    key={feature.id} 
                    value={feature.id}
                    className={cn(
                      "flex items-start justify-start h-auto p-4 text-left rounded-lg border border-white/10 bg-white/[0.01] transition-all w-full",
                      "data-[state=active]:border-emerald-500/30 data-[state=active]:bg-emerald-500/5",
                      "hover:border-white/20 hover:bg-white/[0.02]"
                    )}
                  >
                    <div className="flex gap-3 w-full">
                      <div className="mt-0.5 flex-shrink-0">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                          <HugeiconsIcon 
                            icon={feature.icon} 
                            className="w-5 h-5 text-emerald-400"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-base font-medium text-white truncate">{feature.title}</h3>
                          <span className="px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-emerald-500/20 text-emerald-400 flex-shrink-0">
                            {feature.badge}
                          </span>
                        </div>
                        {feature.description && (
                          <p className="text-xs text-white/60 line-clamp-2">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <div className="lg:col-span-3 h-full">
              {features.map((feature) => (
                <TabsContent key={feature.id} value={feature.id} className="mt-0 data-[state=inactive]:hidden h-full">
                  <div className="h-full">
                    {feature.demo}
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>

        {/* Problem vs Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">{t.features.problemSolution.problemTitle}</h3>
            
            <div className="space-y-4">
                              <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm font-bold mt-0.5">✕</div>
                  <div>
                    <p className="text-white font-medium mb-1">{t.features.problemSolution.problems.unverified.title}</p>
                    <p className="text-white/60 text-sm">{t.features.problemSolution.problems.unverified.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm font-bold mt-0.5">✕</div>
                  <div>
                    <p className="text-white font-medium mb-1">{t.features.problemSolution.problems.timeWaste.title}</p>
                    <p className="text-white/60 text-sm">{t.features.problemSolution.problems.timeWaste.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm font-bold mt-0.5">✕</div>
                  <div>
                    <p className="text-white font-medium mb-1">{t.features.problemSolution.problems.healthRisk.title}</p>
                    <p className="text-white/60 text-sm">{t.features.problemSolution.problems.healthRisk.description}</p>
                  </div>
                </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">{t.features.problemSolution.solutionTitle}</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold mt-0.5">✓</div>
                <div>
                  <p className="text-white font-medium mb-1">{t.features.problemSolution.solutions.scientific.title}</p>
                  <p className="text-white/60 text-sm">{t.features.problemSolution.solutions.scientific.description}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold mt-0.5">✓</div>
                <div>
                  <p className="text-white font-medium mb-1">{t.features.problemSolution.solutions.personalized.title}</p>
                  <p className="text-white/60 text-sm">{t.features.problemSolution.solutions.personalized.description}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold mt-0.5">✓</div>
                <div>
                  <p className="text-white font-medium mb-1">{t.features.problemSolution.solutions.comprehensive.title}</p>
                  <p className="text-white/60 text-sm">{t.features.problemSolution.solutions.comprehensive.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 