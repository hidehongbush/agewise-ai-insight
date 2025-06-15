import React from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/features/hero/HeroSection';
import ChatInterface from '@/components/features/chat/ChatInterface';
import LogoCarousel from '@/components/features/hero/LogoCarousel';
import FeaturesSection from '@/components/features/hero/FeaturesSection';
import ComparisonSection from '@/components/features/hero/ComparisonSection';
import FaqSection from '@/components/features/hero/FaqSection';
import FinalCtaSection from '@/components/features/hero/FinalCtaSection';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#171717' }}>
      <Navbar />
      <HeroSection />
      <LogoCarousel />
      <ChatInterface />
      <FeaturesSection />
      <ComparisonSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
};

export default Index;
