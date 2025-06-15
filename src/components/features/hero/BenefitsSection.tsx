import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { 
  ShieldIcon,
  RefreshIcon,
  Settings02Icon,
  StarIcon,
  ClockIcon,
  Award01Icon,
  Book01Icon,
  HealthIcon
} from '@hugeicons/core-free-icons';
import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: ShieldIcon,
      title: t.benefits.items.scientific.title,
      description: t.benefits.items.scientific.description,
      iconColor: '#10b981'
    },
    {
      icon: RefreshIcon,
      title: t.benefits.items.realTime.title,
      description: t.benefits.items.realTime.description,
      iconColor: '#3b82f6'
    },
    {
      icon: Settings02Icon,
      title: t.benefits.items.comprehensive.title,
      description: t.benefits.items.comprehensive.description,
      iconColor: '#8b5cf6'
    },
    {
      icon: StarIcon,
      title: t.benefits.items.free.title,
      description: t.benefits.items.free.description,
      iconColor: '#f97316'
    }
  ];

  return (
    <section className="py-24 relative bg-[#171717]">
      
      <div className="container mx-auto px-6 max-w-6xl relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-400/10 text-emerald-400 text-sm font-medium rounded-full mb-3">
            {t.benefits.badge}
          </span>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            {t.benefits.title}{' '}
            <span className="text-emerald-400">
              {t.benefits.titleHighlight}
            </span>
          </h2>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t.benefits.subtitle}
          </p>
        </div>

        {/* Featured benefit - Large highlight */}
        <div className="mb-16 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-emerald-950/30 to-neutral-900/0">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-400/10 mb-6">
                <HugeiconsIcon icon={Book01Icon} className="h-6 w-6 text-emerald-400" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                {t.benefits.featured.title}
              </h3>
              
              <p className="text-white/70 mb-6">
                {t.benefits.featured.description}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-emerald-400/10 flex items-center justify-center">
                    <span className="text-xs text-emerald-400">✓</span>
                  </div>
                  <span className="text-white">{t.benefits.featured.features.feature1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-emerald-400/10 flex items-center justify-center">
                    <span className="text-xs text-emerald-400">✓</span>
                  </div>
                  <span className="text-white">{t.benefits.featured.features.feature2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-emerald-400/10 flex items-center justify-center">
                    <span className="text-xs text-emerald-400">✓</span>
                  </div>
                  <span className="text-white">{t.benefits.featured.features.feature3}</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-neutral-950/40 flex items-center justify-center p-10">
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 opacity-30 blur"></div>
                <div className="relative aspect-[4/3] w-full max-w-sm rounded-lg border border-white/10 bg-neutral-900 p-4 shadow-2xl">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-3">
                    <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
                    <span className="text-sm text-white/70">PubMed 최신 논문 검색 결과</span>
                  </div>
                  
                  <div className="space-y-3">
                    {[...Array(3)].map((_, idx) => (
                      <div key={idx} className="flex gap-2">
                        <div className="h-8 w-8 flex-shrink-0 rounded bg-white/5 flex items-center justify-center">
                          <span className="text-xs text-emerald-400">{idx+1}</span>
                        </div>
                        <div>
                          <div className="h-2 w-32 bg-white/10 rounded mb-1"></div>
                          <div className="h-1.5 w-20 bg-white/5 rounded"></div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="mt-6 border-t border-white/10 pt-3">
                      <div className="h-2 w-full bg-white/10 rounded mb-2"></div>
                      <div className="h-2 w-4/5 bg-white/10 rounded mb-2"></div>
                      <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits grid - Modern 2x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                  <HugeiconsIcon 
                    icon={benefit.icon} 
                    className="w-6 h-6" 
                    style={{ color: benefit.iconColor }}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Visual stats section */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-white text-center mb-12">
            {t.benefits.stats.title}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="relative rounded-xl border border-white/10 bg-white/[0.02] p-6 text-center">
              <div className="absolute -inset-px bg-gradient-to-b from-emerald-500/20 to-transparent rounded-xl opacity-50 pointer-events-none"></div>
              <div className="relative">
                <HugeiconsIcon icon={ClockIcon} className="h-8 w-8 text-emerald-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{t.benefits.stats.timeSaved.value}</div>
                <p className="text-white/60 text-sm">{t.benefits.stats.timeSaved.label}</p>
              </div>
            </div>
            
            <div className="relative rounded-xl border border-white/10 bg-white/[0.02] p-6 text-center">
              <div className="absolute -inset-px bg-gradient-to-b from-blue-500/20 to-transparent rounded-xl opacity-50 pointer-events-none"></div>
              <div className="relative">
                <HugeiconsIcon icon={Award01Icon} className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{t.benefits.stats.reliability.value}</div>
                <p className="text-white/60 text-sm">{t.benefits.stats.reliability.label}</p>
              </div>
            </div>
            
            <div className="relative rounded-xl border border-white/10 bg-white/[0.02] p-6 text-center">
              <div className="absolute -inset-px bg-gradient-to-b from-purple-500/20 to-transparent rounded-xl opacity-50 pointer-events-none"></div>
              <div className="relative">
                <HugeiconsIcon icon={HealthIcon} className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{t.benefits.stats.healthImprovement.value}</div>
                <p className="text-white/60 text-sm">{t.benefits.stats.healthImprovement.label}</p>
              </div>
            </div>
            
            <div className="relative rounded-xl border border-white/10 bg-white/[0.02] p-6 text-center">
              <div className="absolute -inset-px bg-gradient-to-b from-orange-500/20 to-transparent rounded-xl opacity-50 pointer-events-none"></div>
              <div className="relative">
                <HugeiconsIcon icon={StarIcon} className="h-8 w-8 text-orange-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{t.benefits.stats.freeAccess.value}</div>
                <p className="text-white/60 text-sm">{t.benefits.stats.freeAccess.label}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonial/quote section */}
        <div className="mt-24 rounded-xl border border-white/10 bg-white/[0.02] p-10">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 mb-6 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center">
                <span className="text-2xl text-white">"</span>
              </div>
            </div>
            
            <blockquote className="text-xl md:text-2xl text-white text-center max-w-3xl mx-auto mb-6 font-light">
              "{t.benefits.testimonial.quote}"
            </blockquote>
            
            <div className="text-white font-medium">{t.benefits.testimonial.author}</div>
            <div className="text-white/60 text-sm">{t.benefits.testimonial.position}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 