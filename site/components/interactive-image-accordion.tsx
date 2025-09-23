"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Construction',
    subtitle: 'Bâtissons votre avenir',
    description: 'Construction complète de maisons individuelles, villas de luxe et bâtiments commerciaux. Expertise en construction traditionnelle et modulaire à La Réunion.',
    features: ['Maisons individuelles', 'Villas de luxe', 'Bâtiments commerciaux', 'Construction modulaire'],
    imageUrl: '/construction.jpg',
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
const AccordionItem = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
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
          absolute text-white text-lg font-semibold whitespace-nowrap
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

  const handleItemHover = (index) => {
    setActiveIndex(index);
  };

  const activeItem = accordionItems[activeIndex];

  return (
    <div className="bg-white font-sans pt-40 lg:pt-48 xl:pt-52">
      <section className="container mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left Side: Text Content - Dynamic based on selection */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-600/10 to-yellow-600/10 border border-amber-600/40 rounded-full text-amber-600 text-sm font-semibold mb-6 uppercase tracking-wider">
              {activeItem.title}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
              <span className="bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
                Construction & Rénovation
              </span>
              <br />
              <span className="text-gray-900">
                à La Réunion
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              {activeItem.description}
            </p>

            {/* Features list */}
            <div className="mt-6 space-y-2">
              {activeItem.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="relative inline-block px-8 py-3 overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 transition-transform duration-300 group-hover:scale-105"></span>
                <span className="relative text-white font-bold tracking-wider">
                  DEVIS GRATUIT
                </span>
              </a>
              <a
                href="#realisations"
                className="inline-block px-8 py-3 border-2 border-amber-500 text-amber-600 font-bold tracking-wider hover:bg-amber-500/10 transition-all duration-300"
              >
                NOS PROJETS
              </a>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full md:w-1/2">
            {/* Changed flex-col to flex-row to keep the layout consistent */}
            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
