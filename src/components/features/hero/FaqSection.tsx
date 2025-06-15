import React, { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { 
  ArrowDown01Icon,
  ArrowUp01Icon,
  SearchIcon,
  SettingsIcon,
  MessageIcon
} from '@hugeicons/core-free-icons';
import { useLanguage } from '@/lib/LanguageContext';
import { Link } from 'react-router-dom';

const FaqSection = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t.faq.items.q1.question,
      answer: t.faq.items.q1.answer
    },
    {
      question: t.faq.items.q2.question,
      answer: t.faq.items.q2.answer
    },
    {
      question: t.faq.items.q3.question,
      answer: t.faq.items.q3.answer
    },
    {
      question: t.faq.items.q4.question,
      answer: t.faq.items.q4.answer
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  // Group FAQs into two columns for desktop layout
  const leftColumnFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightColumnFaqs = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <section className="py-24 relative bg-[#171717]">
      
      <div className="container mx-auto px-6 max-w-6xl relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full mb-3">
            {t.faq.badge}
          </span>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            {t.faq.title}{' '}
            <span className="text-blue-400">
              {t.faq.titleHighlight}
            </span>
          </h2>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Tabs with content */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left column */}
          <div className="space-y-4">
            <div className="p-1.5 bg-blue-500/10 rounded-full w-fit mb-6">
              <HugeiconsIcon icon={SearchIcon} className="w-5 h-5 text-blue-400" />
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-4">
              {t.faq.columns.general}
            </h3>
            
            <div className="space-y-3">
              {leftColumnFaqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-white/10 rounded-lg overflow-hidden"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between bg-white/[0.03] transition-all duration-300"
                  >
                    <h3 className="text-base font-medium text-white pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${openIndex === index ? 'bg-blue-500/20' : 'bg-white/5'} transition-colors duration-300`}>
                        <HugeiconsIcon 
                          icon={openIndex === index ? ArrowUp01Icon : ArrowDown01Icon}
                          className="w-4 h-4 text-white/80"
                        />
                      </div>
                    </div>
                  </button>

                  {/* Answer */}
                  <div className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <div className="p-5 pt-1 border-t border-white/10 bg-white/[0.01]">
                      <p className="text-white/60 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right column */}
          <div className="space-y-4">
            <div className="p-1.5 bg-blue-500/10 rounded-full w-fit mb-6">
              <HugeiconsIcon icon={SettingsIcon} className="w-5 h-5 text-blue-400" />
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-4">
              {t.faq.columns.service}
            </h3>
            
            <div className="space-y-3">
              {rightColumnFaqs.map((faq, index) => {
                const actualIndex = index + leftColumnFaqs.length;
                return (
                  <div 
                    key={actualIndex}
                    className="border border-white/10 rounded-lg overflow-hidden"
                  >
                    {/* Question */}
                    <button
                      onClick={() => toggleFaq(actualIndex)}
                      className="w-full p-5 text-left flex items-center justify-between bg-white/[0.03] transition-all duration-300"
                    >
                      <h3 className="text-base font-medium text-white pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${openIndex === actualIndex ? 'bg-blue-500/20' : 'bg-white/5'} transition-colors duration-300`}>
                          <HugeiconsIcon 
                            icon={openIndex === actualIndex ? ArrowUp01Icon : ArrowDown01Icon}
                            className="w-4 h-4 text-white/80"
                          />
                        </div>
                      </div>
                    </button>

                    {/* Answer */}
                    <div className={`
                      overflow-hidden transition-all duration-300 ease-in-out
                      ${openIndex === actualIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}>
                      <div className="p-5 pt-1 border-t border-white/10 bg-white/[0.01]">
                        <p className="text-white/60 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Help box */}
        <div className="mt-16 bg-blue-950/20 border border-blue-500/20 rounded-xl p-8">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                  <HugeiconsIcon icon={MessageIcon} className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {t.faq.helpBox.title}
                </h3>
              </div>
              
              <p className="text-white/70 mb-6 md:mb-0 md:pr-8">
                {t.faq.helpBox.description}
              </p>
            </div>
            
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Link 
                to="/chat" 
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
              >
                {t.faq.helpBox.button}
              </Link>
            </div>
          </div>
        </div>
        
        {/* Quick links */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/supplement-tracker" className="text-white/60 hover:text-blue-400 transition-colors text-sm flex items-center">
            <span className="w-1 h-1 rounded-full bg-blue-400 mr-2"></span>
            {t.faq.quickLinks.supplementTracker}
          </Link>
          <Link to="/latest-trends" className="text-white/60 hover:text-blue-400 transition-colors text-sm flex items-center">
            <span className="w-1 h-1 rounded-full bg-blue-400 mr-2"></span>
            {t.faq.quickLinks.latestTrends}
          </Link>
          <Link to="/" className="text-white/60 hover:text-blue-400 transition-colors text-sm flex items-center">
            <span className="w-1 h-1 rounded-full bg-blue-400 mr-2"></span>
            {t.faq.quickLinks.serviceIntro}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 