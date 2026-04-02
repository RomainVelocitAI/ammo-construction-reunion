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
      title: "Conception",
      description: "Plans architecturaux, modélisation 3D, permis de construire et accompagnement aux subventions. Votre projet prend forme avant le premier coup de pioche.",
      image: "/service-conception.jpg",
      href: "/pole/conception",
      alt: "Conception - Groupe AMMO La Réunion",
    },
    {
      title: "Maîtrise d'Œuvre",
      description: "Pilotage, coordination et suivi de vos chantiers. Un chef d'orchestre pour tous vos intervenants.",
      image: "/construction-metal.jpg",
      href: "/pole/maitrise-oeuvre",
      alt: "Maîtrise d'Œuvre - Groupe AMMO La Réunion",
    },
    {
      title: "Contractant Général",
      description: "Rénovation, extension, gros œuvre et projets d'envergure. Un seul contrat, tous les corps de métier.",
      image: "/renovation.png",
      href: "/pole/contractant-general",
      alt: "Contractant Général - Groupe AMMO La Réunion",
    },
    {
      title: "Second Œuvre & Finitions",
      description: "Peinture, agencement, menuiserie, aménagements extérieurs, jardins et piscines. Le détail qui fait la différence.",
      image: "/exterieur.jpg",
      href: "/pole/second-oeuvre-finitions",
      alt: "Second Œuvre & Finitions - Groupe AMMO La Réunion",
    },
  ];

  return (
    <section className={`${effectiveIsMobile ? 'pt-8 pb-4' : effectiveIsTablet ? 'pt-10 pb-4' : 'pt-14 pb-4'} bg-gradient-to-b from-background via-muted/30 to-background`}>
      <div className={`container mx-auto ${effectiveIsMobile ? 'px-4' : 'px-6'} flex flex-col`}>
        <div className="w-full mb-8">
          <div className="max-w-6xl mx-auto text-center">
          <h2 className={`${effectiveIsMobile ? 'text-2xl' : effectiveIsTablet ? 'text-3xl' : 'text-6xl'} font-heading font-bold text-foreground mb-6 leading-tight`}>
            Nos 4 Pôles d'Expertise
            <span className={`block ${effectiveIsMobile ? 'text-lg' : effectiveIsTablet ? 'text-xl' : 'text-3xl'} font-subheading font-light text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mt-2`}>
              Conception • Maîtrise d'Œuvre • Contractant Général • Second Œuvre & Finitions
            </span>
          </h2>

          <div className={`${effectiveIsMobile ? 'text-base' : effectiveIsTablet ? 'text-lg' : 'text-xl'} text-muted-foreground mb-8 leading-relaxed ${effectiveIsMobile ? 'px-2' : effectiveIsTablet ? 'px-4' : 'px-0'}`}>
            Le Groupe AMMO maîtrise toute la chaîne de valeur du bâtiment à La Réunion.
            Chaque pôle peut intervenir indépendamment ou en synergie, selon la nature de votre projet. Notre connaissance
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
                <div className={`flex ${effectiveIsMobile ? 'flex-col gap-2' : 'flex-row justify-between'} items-stretch ${!effectiveIsMobile ? 'items-center' : ''} ${effectiveIsMobile ? 'mt-6' : effectiveIsTablet ? 'mt-8' : 'mt-12'}`}>
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
