import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from "@/lib/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="text-white py-16" style={{ backgroundColor: '#171717' }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 grid grid-cols-3 gap-px">
              <div className="w-2 h-2 bg-white rounded-sm"></div>
              <div className="w-2 h-2 bg-white rounded-sm"></div>
              <div className="w-2 h-2 bg-white rounded-sm"></div>
              <div className="w-2 h-2 bg-white rounded-sm"></div>
              <div className="w-2 h-2 bg-white rounded-sm"></div>
              <div className="w-2 h-2 bg-white rounded-sm"></div>
              <div className="w-2 h-2 bg-white rounded-sm"></div>
              <div className="w-2 h-2"></div>
              <div className="w-2 h-2 bg-white rounded-sm"></div>
            </div>
            <span className="text-2xl font-medium text-white">AgeWise</span>
          </div>
          <p className="text-white/70 mb-12 leading-relaxed max-w-2xl">
            {t.footer.description}
          </p>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-wrap justify-center gap-8 text-white/70">
              <Link 
                to="/terms-of-service" 
                className="hover:text-white transition-colors cursor-pointer"
              >
                {t.footer.informationList.terms}
              </Link>
              <Link 
                to="/privacy-policy" 
                className="hover:text-white transition-colors cursor-pointer"
              >
                {t.footer.informationList.privacy}
              </Link>
              <Link 
                to="/contact-us" 
                className="hover:text-white transition-colors cursor-pointer"
              >
                {t.footer.informationList.contact}
              </Link>
            </div>
            <p className="text-white/60">© 2025 AgeWise. All rights reserved.</p>
            <p className="text-sm text-white/50 max-w-2xl text-center leading-relaxed">
              {t.footer.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
