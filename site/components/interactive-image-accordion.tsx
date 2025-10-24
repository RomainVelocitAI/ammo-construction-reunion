"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Construction',
    subtitle: 'Bâtissons votre avenir',
    description: 'Construction complète de maisons individuelles, villas de luxe et bâtiments commerciaux. Expertise en construction traditionnelle et modulaire à La Réunion.',
    features: ['Maisons individuelles', 'Villas de luxe', 'Bâtiments commerciaux', 'Construction modulaire'],
    imageUrl: '/construction-metal.jpg',
  },
  {
    id: 2,
    title: 'Rénovation',
    subtitle: 'Redonnez vie à vos espaces',
    description: 'Rénovation complète ou partielle de votre habitat. Modernisation, mise aux normes et transformation de vos espaces intérieurs et extérieurs.',
    features: ['Rénovation complète', 'Mise aux normes', 'Modernisation', 'Économies d\'énergie'],
    imageUrl: '/renovation.jpg',
  },
  {
    id: 3,
    title: 'Extension',
    subtitle: 'Agrandissez vos horizons',
    description: 'Création d\'espaces supplémentaires adaptés à vos besoins. Extensions harmonieuses qui valorisent votre patrimoine immobilier.',
    features: ['Extension horizontale', 'Surélévation', 'Véranda', 'Garage'],
    imageUrl: '/extension.jpg',
  },
  {
    id: 4,
    title: 'Extérieur',
    subtitle: 'Sublimez vos espaces',
    description: 'Aménagement complet de vos espaces extérieurs. Terrasses, piscines, jardins et clôtures pour un cadre de vie exceptionnel.',
    features: ['Terrasses', 'Piscines', 'Jardins paysagers', 'Clôtures et portails'],
    imageUrl: '/exterieur.jpg',
  },
  {
    id: 5,
    title: 'Entretien',
    subtitle: 'Préservez votre patrimoine',
    description: 'Maintenance préventive et corrective pour préserver la qualité et la valeur de votre bien immobilier dans le temps.',
    features: ['Maintenance préventive', 'Réparations', 'Ravalement', 'Traitement anti-humidité'],
    imageUrl: '/entretien.jpg',
  },
];

// --- Accordion Item Component ---
interface AccordionItemProps {
  item: typeof accordionItems[0];
  isActive: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
  isMobile: boolean;
  isTablet: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter, onClick, isMobile, isTablet }) => {
  // Dynamic width calculation based on viewport
  const getWidth = () => {
    if (isMobile) {
      return isActive ? 'w-[160px]' : 'w-[35px]';
    } else if (isTablet) {
      return isActive ? 'w-[300px]' : 'w-[50px]';
    } else {
      return isActive ? 'w-[400px]' : 'w-[60px]';
    }
  };

  // Dynamic height based on viewport
  const getHeight = () => {
    if (isMobile) {
      return 'h-[250px]';
    } else if (isTablet) {
      return 'h-[350px]';
    } else {
      return 'h-[450px]';
    }
  };

  return (
    <div
      className={`
        relative ${getHeight()} rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${getWidth()}
      `}
      onMouseEnter={!isMobile ? onMouseEnter : undefined}
      onClick={isMobile ? onClick : undefined}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Caption Text */}
      <span
        className={`
          absolute text-white ${isMobile ? 'text-sm' : 'text-lg'} font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0' // Active state: horizontal, bottom-center
              // Inactive state: vertical, positioned at the bottom, for all screen sizes
              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};


// --- Main App Component ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Initialize with actual window width if available (client-side)
  const getInitialMobileState = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640;
    }
    return false;
  };

  const getInitialTabletState = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      return width >= 640 && width < 1024;
    }
    return false;
  };

  const [isMobile, setIsMobile] = useState(getInitialMobileState);
  const [isTablet, setIsTablet] = useState(getInitialTabletState);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark that we're on the client to handle hydration
    setIsClient(true);

    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const activeItem = accordionItems[activeIndex];

  // Use actual detected values directly
  const effectiveIsMobile = isMobile;
  const effectiveIsTablet = isTablet;

  return (
    <div className={`bg-white font-sans ${effectiveIsMobile ? 'pt-20' : effectiveIsTablet ? 'pt-28' : 'pt-48 xl:pt-52'}`}>
      <section className={`container mx-auto ${effectiveIsMobile ? 'px-4 py-8' : effectiveIsTablet ? 'px-6 py-12' : 'px-6 py-20'}`}>
        <div className={`flex ${effectiveIsMobile || effectiveIsTablet ? 'flex-col' : 'flex-row'} items-center justify-between ${effectiveIsMobile ? 'gap-8' : effectiveIsTablet ? 'gap-10' : 'gap-12'}`}>

          {/* Left Side: Text Content - Dynamic based on selection */}
          <div className={`w-full ${!effectiveIsMobile && !effectiveIsTablet ? 'md:w-1/2' : ''} ${effectiveIsMobile || effectiveIsTablet ? 'text-center' : 'text-left'}`}>
            <span className={`inline-block px-4 py-1 bg-gradient-to-r from-amber-600/10 to-yellow-600/10 border border-amber-600/40 rounded-full text-amber-600 ${effectiveIsMobile ? 'text-xs' : 'text-sm'} font-semibold mb-6 uppercase tracking-wider`}>
              {activeItem.title}
            </span>
            <h1 className={`${effectiveIsMobile ? 'text-2xl' : effectiveIsTablet ? 'text-4xl' : 'text-6xl'} font-bold leading-tight tracking-tighter`}>
              <span className="bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
                Maîtrise d'Œuvre
              </span>
              <br />
              <span className="text-gray-900">
                Construction & Rénovation à La Réunion
              </span>
            </h1>
            <p className={`mt-6 ${effectiveIsMobile ? 'text-sm' : effectiveIsTablet ? 'text-base' : 'text-lg'} text-gray-600 max-w-xl ${effectiveIsMobile || effectiveIsTablet ? 'mx-auto' : 'mx-0'}`}>
              {activeItem.description}
            </p>

            {/* Features list */}
            <div className={`mt-6 space-y-2 ${effectiveIsMobile || effectiveIsTablet ? 'max-w-sm mx-auto' : ''}`}>
              {activeItem.features.map((feature, index) => (
                <div key={index} className={`flex items-center gap-2 ${effectiveIsMobile || effectiveIsTablet ? 'justify-center' : ''}`}>
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${effectiveIsMobile ? 'text-sm' : 'text-base'} text-gray-700`}>{feature}</span>
                </div>
              ))}
            </div>

            <div className={`mt-8 flex ${effectiveIsMobile ? 'flex-col' : 'flex-row'} gap-4 ${effectiveIsMobile || effectiveIsTablet ? 'justify-center' : 'justify-start'}`}>
              <a
                href="#contact"
                className="relative inline-block px-6 sm:px-8 py-3 overflow-hidden group text-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 transition-transform duration-300 group-hover:scale-105"></span>
                <span className={`relative text-white font-bold tracking-wider ${effectiveIsMobile ? 'text-sm' : 'text-base'}`}>
                  DEVIS GRATUIT
                </span>
              </a>
              <a
                href="#realisations"
                className={`inline-block px-6 sm:px-8 py-3 border-2 border-amber-500 text-amber-600 font-bold tracking-wider hover:bg-amber-500/10 transition-all duration-300 text-center ${effectiveIsMobile ? 'text-sm' : 'text-base'}`}
              >
                NOS PROJETS
              </a>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className={`w-full ${!effectiveIsMobile && !effectiveIsTablet ? 'md:w-1/2' : ''} ${effectiveIsMobile ? 'overflow-hidden' : 'overflow-x-auto'}`}>
            {/* Responsive accordion container */}
            <div className={`flex flex-row items-center ${effectiveIsMobile ? 'justify-center gap-1' : effectiveIsTablet ? 'justify-center gap-2' : 'justify-center gap-4'} ${effectiveIsMobile ? 'px-2' : effectiveIsTablet ? 'p-3' : 'p-4'} ${effectiveIsMobile ? 'max-w-full' : 'min-w-max'}`}>
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                  onClick={() => handleItemClick(index)}
                  isMobile={effectiveIsMobile}
                  isTablet={effectiveIsTablet}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}