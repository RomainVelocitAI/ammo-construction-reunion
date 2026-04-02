"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Conception',
    subtitle: 'Donnez forme à vos idées',
    description: 'Plans architecturaux, modélisation 3D, permis de construire, études techniques et accompagnement dossiers de subventions.',
    features: ['Plans architecturaux', 'Modélisation 3D', 'Permis de construire', 'Subventions'],
    imageUrl: '/service-conception.jpg',
  },
  {
    id: 2,
    title: 'Maîtrise d\'Œuvre',
    subtitle: 'Pilotez votre projet',
    description: 'Coordination de l\'ensemble des intervenants, OPC, suivi technique et contrôle qualité. Votre projet piloté de A à Z.',
    features: ['Coordination de projet', 'OPC', 'Suivi de chantier', 'Pilotage technique'],
    imageUrl: '/construction-metal.jpg',
  },
  {
    id: 3,
    title: 'Contractant Général',
    subtitle: 'Un seul contrat, tous les métiers',
    description: 'Rénovation, extension, gros œuvre et projets d\'envergure. Un seul interlocuteur pour l\'ensemble des corps de métier.',
    features: ['Rénovation complète', 'Extension sur-mesure', 'Gros œuvre', 'Projets d\'envergure'],
    imageUrl: '/renovation.jpg',
  },
  {
    id: 4,
    title: 'Second Œuvre & Finitions',
    subtitle: 'Le détail qui fait la différence',
    description: 'Peinture, agencement, meubles sur mesure, terrasses, pergolas, carports, bardage, jardins et piscines.',
    features: ['Conception', 'Maîtrise d\'Œuvre', 'Contractant Général', 'Second Œuvre & Finitions'],
    imageUrl: '/exterieur.jpg',
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
    <div className={`bg-background font-sans overflow-x-hidden ${effectiveIsMobile ? 'pt-20' : effectiveIsTablet ? 'pt-28' : 'pt-48 xl:pt-52'}`}>
      <section className={`container mx-auto ${effectiveIsMobile ? 'px-4 py-8' : effectiveIsTablet ? 'px-6 py-12' : 'px-6 py-20'}`}>
        <div className={`flex ${effectiveIsMobile || effectiveIsTablet ? 'flex-col' : 'flex-row'} items-center justify-between ${effectiveIsMobile ? 'gap-8' : effectiveIsTablet ? 'gap-10' : 'gap-12'}`}>

          {/* Left Side: Text Content - Dynamic based on selection */}
          <div className={`w-full ${!effectiveIsMobile && !effectiveIsTablet ? 'md:w-1/2' : ''} ${effectiveIsMobile || effectiveIsTablet ? 'text-center' : 'text-left'}`}>
            <span className={`inline-block px-4 py-1 bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/40 rounded-full text-secondary ${effectiveIsMobile ? 'text-xs' : 'text-sm'} font-semibold mb-6 uppercase tracking-wider`}>
              Construction & Rénovation
            </span>
            <h1 className={`${effectiveIsMobile ? 'text-2xl' : effectiveIsTablet ? 'text-4xl' : 'text-6xl'} font-bold leading-tight tracking-tighter`}>
              <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                Le Groupe AMMO
              </span>
            </h1>
            <p className={`mt-4 ${effectiveIsMobile ? 'text-sm' : effectiveIsTablet ? 'text-base' : 'text-lg'} text-muted-foreground max-w-xl ${effectiveIsMobile || effectiveIsTablet ? 'mx-auto' : 'mx-0'}`}>
              De la conception à la réalisation, de la réalisation à l'entretien. AMMO maîtrise l'intégralité de la chaîne de valeur de vos projets à La Réunion.
            </p>

            {/* Features list */}
            <div className={`mt-6 space-y-2 ${effectiveIsMobile || effectiveIsTablet ? 'max-w-sm mx-auto' : ''}`}>
              {['Conception', 'Maîtrise d\'Œuvre', 'Contractant Général', 'Second Œuvre & Finitions'].map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 ${effectiveIsMobile || effectiveIsTablet ? 'justify-center' : ''} cursor-pointer py-1 px-2 rounded-lg transition-all duration-300 ${activeIndex === index ? 'bg-secondary/10' : 'hover:bg-secondary/5'}`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <svg className={`w-5 h-5 transition-colors duration-300 ${activeIndex === index ? 'text-secondary' : 'text-accent'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${effectiveIsMobile ? 'text-sm' : 'text-base'} transition-colors duration-300 ${activeIndex === index ? 'text-foreground font-semibold' : 'text-foreground'}`}>{feature}</span>
                </div>
              ))}
            </div>

            <div className={`mt-8 flex ${effectiveIsMobile ? 'flex-col' : 'flex-row'} gap-4 ${effectiveIsMobile || effectiveIsTablet ? 'justify-center' : 'justify-start'}`}>
              <a
                href="#contact"
                className="relative inline-block px-6 sm:px-8 py-3 overflow-hidden group text-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-secondary to-accent transition-transform duration-300 group-hover:scale-105"></span>
                <span className={`relative text-primary-foreground font-bold tracking-wider ${effectiveIsMobile ? 'text-sm' : 'text-base'}`}>
                  PRENDRE CONTACT
                </span>
              </a>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className={`w-full ${!effectiveIsMobile && !effectiveIsTablet ? 'md:w-1/2' : ''} overflow-hidden`}>
            {/* Responsive accordion container */}
            <div className={`flex flex-row items-center ${effectiveIsMobile ? 'justify-center gap-1' : effectiveIsTablet ? 'justify-center gap-2' : 'justify-center gap-4'} ${effectiveIsMobile ? 'px-2' : effectiveIsTablet ? 'p-3' : 'p-4'}`}>
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