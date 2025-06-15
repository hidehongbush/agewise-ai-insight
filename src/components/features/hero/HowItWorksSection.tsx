import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { 
  Search01Icon,
  ArtificialIntelligenceIcon,
  TaskIcon,
  MicroscopeIcon,
  DatabaseIcon,
  ChartMediumIcon,
  ArrowRight01Icon
} from '@hugeicons/core-free-icons';
import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: Search01Icon,
      title: t.howItWorks.steps.step1.title,
      description: t.howItWorks.steps.step1.description,
      iconColor: '#3b82f6'
    },
    {
      number: "02",
      icon: ArtificialIntelligenceIcon,
      title: t.howItWorks.steps.step2.title,
      description: t.howItWorks.steps.step2.description,
      iconColor: '#8b5cf6'
    },
    {
      number: "03",
      icon: TaskIcon,
      title: t.howItWorks.steps.step3.title,
      description: t.howItWorks.steps.step3.description,
      iconColor: '#10b981'
    }
  ];

  const techFeatures = [
    {
      icon: DatabaseIcon,
      title: t.howItWorks.technicalFeatures.database.title,
      description: t.howItWorks.technicalFeatures.database.description
    },
    {
      icon: MicroscopeIcon,
      title: t.howItWorks.technicalFeatures.verification.title,
      description: t.howItWorks.technicalFeatures.verification.description
    },
    {
      icon: ChartMediumIcon,
      title: t.howItWorks.technicalFeatures.personalization.title,
      description: t.howItWorks.technicalFeatures.personalization.description
    }
  ];

  return (
    <section className="py-24 relative bg-[#171717]">
      
      <div className="container mx-auto px-6 max-w-6xl relative">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 text-sm font-medium rounded-full mb-3">
            {t.howItWorks.badge}
          </span>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            {t.howItWorks.title}{' '}
            <span className="text-purple-400">
              {t.howItWorks.titleHighlight}
            </span>
          </h2>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* Interactive workflow diagram */}
        <div className="mb-24">
          <div className="relative max-w-4xl mx-auto">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-[75px] left-[calc(16.67%+48px)] h-1 w-[calc(33.33%-96px)] bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
            <div className="hidden md:block absolute top-[75px] left-[calc(50%+48px)] h-1 w-[calc(33.33%-96px)] bg-gradient-to-r from-purple-500/50 to-emerald-500/50"></div>
            
            {/* Workflow steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step circle with number */}
                  <div className="absolute top-0 -left-2 w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center z-20">
                    <span className="text-lg font-semibold" style={{ color: step.iconColor }}>{step.number}</span>
                  </div>
                  
                  {/* Card */}
                  <div className="pt-8 pl-8 pr-4 pb-6 bg-white/[0.03] border border-white/10 rounded-xl relative">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${step.iconColor}10` }}>
                      <HugeiconsIcon 
                        icon={step.icon} 
                        className="w-6 h-6" 
                        style={{ color: step.iconColor }}
                      />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Interactive demo preview */}
        <div className="mb-24 rounded-xl border border-white/10 overflow-hidden">
          <div className="w-full rounded-xl bg-neutral-900 px-6 py-4 border-b border-white/10 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-white/60 text-sm font-medium">{t.howItWorks.demo.title}</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-7 h-[400px]">
            {/* Chat interface mockup */}
            <div className="col-span-4 border-r border-white/10 p-4 flex flex-col">
              <div className="flex-1 space-y-4 overflow-hidden">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 flex-shrink-0 mr-3"></div>
                  <div className="bg-neutral-800 rounded-lg p-3 text-white text-sm max-w-[80%]">
                    <p>{t.howItWorks.demo.chatMessages.question}</p>
                  </div>
                </div>
                
                <div className="flex items-start justify-end">
                  <div className="bg-purple-500/20 rounded-lg p-3 text-white text-sm max-w-[80%]">
                    <p>{t.howItWorks.demo.chatMessages.searching} <span className="animate-pulse">●</span></p>
                  </div>
                </div>
                
                <div className="flex items-start justify-end">
                  <div className="bg-purple-500/20 rounded-lg p-3 text-white text-sm max-w-[80%]">
                    <p>{t.howItWorks.demo.chatMessages.response}</p>
                    <p className="mt-2">{t.howItWorks.demo.chatMessages.details}</p>
                    <div className="mt-3 pt-2 border-t border-white/20 text-xs text-white/60">
                      {t.howItWorks.demo.chatMessages.sources.title}
                      <p>{t.howItWorks.demo.chatMessages.sources.source1}</p>
                      <p>{t.howItWorks.demo.chatMessages.sources.source2}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-2 flex">
                <input type="text" className="flex-1 bg-neutral-800 border border-white/10 rounded-lg py-2 px-4 text-white" placeholder={t.howItWorks.demo.placeholder} disabled />
                <button className="ml-2 px-4 py-2 bg-purple-500 text-white rounded-lg" disabled>{t.howItWorks.demo.sendButton}</button>
              </div>
            </div>
            
            {/* Side panel - Research sources */}
            <div className="col-span-3 p-4">
              <h4 className="text-white font-medium mb-3 flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                {t.howItWorks.demo.sidePanel.title}
              </h4>
              
              <div className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-neutral-800 p-3 rounded-lg border border-white/10">
                    <div className="text-sm text-white font-medium mb-1">Nature Aging {2023 + item}</div>
                    <div className="text-xs text-white/60 line-clamp-2">{item === 1 ? t.howItWorks.demo.sidePanel.items.description1 : item === 2 ? t.howItWorks.demo.sidePanel.items.description2 : t.howItWorks.demo.sidePanel.items.description3}</div>
                    <div className="flex items-center mt-2">
                      <span className="text-xs text-purple-400">{t.howItWorks.demo.sidePanel.reliability}</span>
                      <span className="mx-2 text-white/30">•</span>
                      <span className="text-xs text-white/60">{t.howItWorks.demo.sidePanel.citations}: {150 + item * 40}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Technical features */}
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold text-white text-center mb-12">
            {t.howItWorks.technicalFeatures.title}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techFeatures.map((feature, index) => (
              <div key={index} className="p-6 border border-white/10 bg-white/[0.02] rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <HugeiconsIcon icon={feature.icon} className="w-6 h-6 text-purple-400" />
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                
                <p className="text-sm text-white/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA button */}
        <div className="mt-16 text-center">
          <Link
            to="/chat"
            className="inline-flex items-center gap-2 px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-all duration-300"
          >
            {t.howItWorks.cta.button}
            <HugeiconsIcon icon={ArrowRight01Icon} className="w-5 h-5 ml-1" />
          </Link>
          
          <div className="mt-4 text-white/50 text-sm">
            {t.howItWorks.cta.note}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 