"use client";

import React, { useState, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export function ServicesIntroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const effectiveIsMobile = isClient ? isMobile : false;
  const effectiveIsTablet = isClient ? isTablet : false;

  const getGridCols = () => {
    if (effectiveIsMobile) return 'grid-cols-1';
    if (effectiveIsTablet) return 'grid-cols-2';
    return 'grid-cols-2';
  };

  const services = [
    {
      title: "Rénovation Complète",
      description: "Transformation totale de votre habitat. Mise aux normes et modernisation énergétique.",
      image: "/renovation.png",
      href: "/services/renovation-complete",
      alt: "Rénovation Complète La Réunion",
    },
    {
      title: "Extension Sur-Mesure",
      description: "Agrandissement harmonieux de votre espace. Solutions créatives pour optimiser votre habitat.",
      image: "/extension.png",
      href: "/services/extension-sur-mesure",
      alt: "Extension Sur-Mesure La Réunion",
    },
    {
      title: "Aménagement Extérieur",
      description: "Terrasses, pergolas, carports et jardins paysagers. Création d'espaces de vie extérieurs exceptionnels.",
      image: "/amenagement exterieur.png",
      href: "/services/amenagement-exterieur",
      alt: "Aménagement Extérieur La Réunion",
    },
    {
      title: "Projets d'envergure",
      description: "Hébergements touristiques, programmes immobiliers et projets professionnels. Un interlocuteur unique pour vos projets ambitieux.",
      image: "/projets-envergure-hero.jpg",
      href: "/services/projets-envergure",
      alt: "Projets d'envergure La Réunion",
    },
  ];

  return (
    <section className={`${effectiveIsMobile ? 'py-12' : effectiveIsTablet ? 'py-16' : 'py-24'} bg-gradient-to-b from-background via-muted/30 to-background`}>
      <div className={`container mx-auto ${effectiveIsMobile ? 'px-4' : 'px-6'} flex flex-col`}>
        <div className="w-full mb-16">
          <div className="max-w-6xl mx-auto text-center">
          <h2 className={`${effectiveIsMobile ? 'text-2xl' : effectiveIsTablet ? 'text-3xl' : 'text-6xl'} font-heading font-bold text-foreground mb-6 leading-tight`}>
            Nos Services de Travaux et Conception
            <span className={`block ${effectiveIsMobile ? 'text-lg' : effectiveIsTablet ? 'text-xl' : 'text-3xl'} font-subheading font-light text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mt-2`}>
              Rénovation • Extension • Aménagement • Projets d'envergure
            </span>
          </h2>

          <div className={`${effectiveIsMobile ? 'text-base' : effectiveIsTablet ? 'text-lg' : 'text-xl'} text-muted-foreground mb-8 leading-relaxed ${effectiveIsMobile ? 'px-2' : effectiveIsTablet ? 'px-4' : 'px-0'}`}>
            Contractant général à La Réunion, AMMO vous accompagne dans tous vos projets de travaux et conception.
            Chaque réalisation bénéficie de notre expertise technique RE2020 et de notre connaissance
            approfondie du territoire réunionnais.
          </div>
          </div>
        </div>

        <div className="w-full">
          <div className={`grid ${getGridCols()} ${effectiveIsMobile ? 'gap-2' : effectiveIsTablet ? 'gap-x-6 gap-y-3' : 'gap-x-8 gap-y-4'} max-w-7xl mx-auto`}>
          {services.map((service) => (
            <CardContainer key={service.title} className="inter-var">
              <CardBody className={`bg-muted/20 relative group/card dark:hover:shadow-2xl dark:hover:shadow-accent/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl ${effectiveIsMobile ? 'p-4' : 'p-6'} border`}>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-foreground dark:text-white"
                >
                  {service.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-muted-foreground text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {service.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={service.image}
                    height="1000"
                    width="1000"
                    className={`${effectiveIsMobile ? 'h-40' : effectiveIsTablet ? 'h-48' : 'h-60'} w-full object-cover rounded-xl group-hover/card:shadow-xl`}
                    alt={service.alt}
                  />
                </CardItem>
                <div className={`flex ${effectiveIsMobile ? 'flex-col gap-2' : 'flex-row justify-between'} items-stretch ${!effectiveIsMobile ? 'items-center' : ''} ${effectiveIsMobile ? 'mt-8' : effectiveIsTablet ? 'mt-12' : 'mt-20'}`}>
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={service.href}
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    En savoir plus →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="#contact"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-secondary to-accent text-primary-foreground text-xs font-bold"
                  >
                    Prendre contact
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
