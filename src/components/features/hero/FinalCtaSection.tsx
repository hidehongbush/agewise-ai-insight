import React from 'react';
import { Link } from 'react-router-dom';
import { HugeiconsIcon } from '@hugeicons/react';
import { 
  ChatGptIcon,
  GlobalSearchIcon
} from '@hugeicons/core-free-icons';
import { useLanguage } from '@/lib/LanguageContext';

const FinalCtaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 relative bg-[#171717] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute -top-40 left-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-[100px] -translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            {t.finalCta.title}
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
           {t.finalCta.subtitle}
          </p>
          
          {/* Two main buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/chat"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-medium rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg min-w-[200px] justify-center"
            >
              <HugeiconsIcon icon={ChatGptIcon} className="w-5 h-5" />
              {t.finalCta.buttons.chat}
            </Link>
            
            <Link
              to="/latest-trends"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-medium rounded-xl shadow-lg min-w-[200px] justify-center"
            >
              <HugeiconsIcon icon={GlobalSearchIcon} className="w-5 h-5" />
              {t.finalCta.buttons.latestTrends}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection; 