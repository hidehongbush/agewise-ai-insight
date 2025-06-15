import React from 'react';
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from '@hugeicons/react';
import { ZapIcon, HourglassIcon } from '@hugeicons/core-free-icons';
import { useLanguage } from "@/lib/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-40 pb-0 relative overflow-hidden min-h-[50vh] flex items-center" style={{ backgroundColor: '#171717' }}>
      <div className="container mx-auto px-6 text-center relative z-10 mt-12">
        <h1 className="hero-title mb-6 max-w-4xl mx-auto" style={{ lineHeight: '68px' }}>
          {t.hero.title}<br />
          {t.hero.titleMiddle} <span 
            className="italic" 
            style={{ 
              textShadow: '2px 2px 0px #10b981, 4px 4px 0px rgba(16, 185, 129, 0.3)' 
            }}
          >{t.hero.titleHighlight}</span> <HugeiconsIcon icon={HourglassIcon} size={48} color="#10b981" className="inline-block" />
        </h1>
        
        <div className="mb-8 max-w-2xl mx-auto">
          <p className="hero-subtitle font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
            {t.hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
