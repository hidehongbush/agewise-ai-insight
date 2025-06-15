import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleLanguageChange = (lang: 'ko' | 'en') => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav 
      className="backdrop-blur-md border-b border-white/10 fixed top-0 w-full z-50"
      style={{ backgroundColor: 'rgba(23, 23, 23, 0.9)' }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-6 h-6 grid grid-cols-3 gap-px">
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                <div className="w-1.5 h-1.5"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              </div>
              <span className="nav-text text-lg">Agewise</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link to="/">
              <Button variant="ghost" className={`${isActiveRoute('/') ? 'text-white hover:!text-white hover:!bg-transparent' : 'text-white/70 hover:text-white hover:bg-transparent'} nav-text px-0 h-auto transition-colors`}>
                {t.navbar.home}
              </Button>
            </Link>
            
            <Link to="/chat">
              <Button variant="ghost" className={`${isActiveRoute('/chat') ? 'text-white hover:!text-white hover:!bg-transparent' : 'text-white/70 hover:text-white hover:bg-transparent'} nav-text px-0 h-auto transition-colors`}>
                {t.navbar.chat}
              </Button>
            </Link>
            
            <Link to="/latest-trends">
              <Button variant="ghost" className={`${isActiveRoute('/latest-trends') ? 'text-white hover:!text-white hover:!bg-transparent' : 'text-white/70 hover:text-white hover:bg-transparent'} nav-text px-0 h-auto transition-colors`}>
                {t.navbar.latestTrends}
              </Button>
            </Link>
            
            <Link to="/supplement-tracker" title="영양제를 체계적으로 관리하고 과학적 근거를 기반으로 정보를 제공받으세요">
              <Button variant="ghost" className={`${isActiveRoute('/supplement-tracker') ? 'text-white hover:!text-white hover:!bg-transparent' : 'text-white/70 hover:text-white hover:bg-transparent'} nav-text px-0 h-auto transition-colors`}>
                {t.navbar.supplementTracker}
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative" ref={dropdownRef}>
              <Button
                variant="ghost"
                onClick={toggleLanguageDropdown}
                className="text-white/70 hover:text-white hover:bg-transparent nav-text px-3 h-auto flex items-center space-x-2 group transition-colors"
              >
                <Globe className="w-4 h-4 group-hover:text-white" />
                <span>{language === 'ko' ? '한국어' : 'Eng'}</span>
                <ChevronDown className={`w-3 h-3 group-hover:text-white transition-transform duration-200 ${
                  isLanguageDropdownOpen ? 'rotate-180' : ''
                }`} />
              </Button>
              
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-black/95 backdrop-blur-md border border-gray-600/30 rounded-lg shadow-lg overflow-hidden">
                  <button
                    onClick={() => handleLanguageChange('ko')}
                    className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 flex items-center justify-between ${
                      language === 'ko' 
                        ? 'text-white bg-white/10 font-medium' 
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>한국어</span>
                    {language === 'ko' && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 flex items-center justify-between ${
                      language === 'en' 
                        ? 'text-white bg-white/10 font-medium' 
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>English</span>
                    {language === 'en' && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </button>
                </div>
              )}
            </div>
            
            <Link to="/chat">
              <Button className="bg-white text-black hover:bg-gray-100 nav-text px-6 py-2 rounded-full h-10 transition-all duration-200">
                {t.navbar.startForFree}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
