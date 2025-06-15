"use client";

import React from 'react';

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface LogoCarouselProps {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const LogoCarousel = ({
  heading = "",
  logos = [
    {
      id: "logo-1",
      description: "PubMed",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/US-NLM-PubMed-Logo.svg",
      className: "h-6 w-auto",
    },
    {
      id: "logo-2", 
      description: "Nature",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Nature_journal_logo.svg",
      className: "h-6 w-auto",
    },
    {
      id: "logo-3",
      description: "Science Magazine",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/db/American_Association_for_the_Advancement_of_Science_logo.svg",
      className: "h-6 w-auto",
    },
    {
      id: "logo-4",
      description: "NIH National Institute on Aging",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/76/US-NIH-NIA-Logo.svg",
      className: "h-6 w-auto",
    },
    {
      id: "logo-5",
      description: "Administration on Aging",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/AoA-logo.svg",
      className: "h-6 w-auto",
    },

    {
      id: "logo-7",
      description: "NIH",
      image: "https://www.nih.gov/sites/all/themes/nih/images/nih-logo-color.png",
      className: "h-6 w-auto",
    },

  ],
}: LogoCarouselProps) => {
  // 로고를 여러 번 복제해서 무한 스크롤 효과
  const duplicatedLogos = [...logos, ...logos, ...logos];

  // CSS 애니메이션을 head에 추가
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes logoScroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-33.333%);
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

      return (
      <section className="py-2" style={{ backgroundColor: '#171717' }}>
        {heading && (
          <div className="container flex flex-col items-center text-center">
            <h2 className="my-1 text-2xl font-medium lg:text-3xl" style={{ color: '#e5e7eb' }}>
              {heading}
            </h2>
          </div>
        )}
        <div className="pt-0 md:pt-0 lg:pt-1">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl overflow-hidden" style={{ zIndex: 5 }}>
          <div 
            className="flex items-center space-x-12"
            style={{
              animation: 'logoScroll 15s linear infinite',
              width: 'max-content',
              zIndex: 20,
              position: 'relative'
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex shrink-0 items-center justify-center"
                style={{ minWidth: '100px' }}
              >
                <img
                  src={logo.image}
                  alt={logo.description}
                  className={logo.className}
                  style={{ 
                    filter: 'grayscale(100%) brightness(2.5) contrast(1.5)',
                    color: '#e5e7eb',
                    zIndex: 10,
                    opacity: 1
                  }}
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#171717] to-transparent" style={{ zIndex: 5 }}></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#171717] to-transparent" style={{ zIndex: 5 }}></div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel; 