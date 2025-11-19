"use client";

import React, { useState, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { LinkPreview } from "@/components/ui/link-preview";

export function ServicesIntroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark that we're on the client to handle hydration
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

  // Use default desktop layout on server to prevent hydration mismatch
  const effectiveIsMobile = isClient ? isMobile : false;
  const effectiveIsTablet = isClient ? isTablet : false;

  // Dynamically determine grid columns based on viewport
  const getGridCols = () => {
    if (effectiveIsMobile) return 'grid-cols-1';
    if (effectiveIsTablet) return 'grid-cols-2';
    return 'grid-cols-3';
  };

  return (
    <section className={`${effectiveIsMobile ? 'py-12' : effectiveIsTablet ? 'py-16' : 'py-24'} bg-gradient-to-b from-background via-muted/30 to-background`}>
      <div className={`container mx-auto ${effectiveIsMobile ? 'px-4' : 'px-6'} flex flex-col`}>
        {/* Section Header avec SEO et Copywriting optimisés pour les services */}
        <div className="w-full mb-16">
          <div className="max-w-6xl mx-auto text-center">
          {/* Titre principal H2 optimisé SEO services */}
          <h2 className={`${effectiveIsMobile ? 'text-2xl' : effectiveIsTablet ? 'text-3xl' : 'text-6xl'} font-heading font-bold text-foreground mb-6 leading-tight`}>
            Nos Services de Construction et Rénovation
            <span className={`block ${effectiveIsMobile ? 'text-lg' : effectiveIsTablet ? 'text-xl' : 'text-3xl'} font-subheading font-light text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mt-2`}>
              Villa • Rénovation • Extension • Aménagement • Lodge • Promoteurs
            </span>
          </h2>

          {/* Description services avec mots-clés SEO et link previews */}
          <div className={`${effectiveIsMobile ? 'text-base' : effectiveIsTablet ? 'text-lg' : 'text-xl'} text-muted-foreground mb-8 leading-relaxed ${effectiveIsMobile ? 'px-2' : effectiveIsTablet ? 'px-4' : 'px-0'}`}>
            Spécialiste de la{" "}
            <LinkPreview
              url="#villa"
              isStatic={true}
              imageSrc="/villamoderne.png"
              className="font-bold text-foreground"
            >
              villa contemporaine
            </LinkPreview>{" "}
            à La Réunion, AMMO vous accompagne dans tous vos projets :{" "}
            <LinkPreview
              url="#renovation"
              isStatic={true}
              imageSrc="/renovation.png"
              className="font-bold text-foreground"
            >
              rénovation complète
            </LinkPreview>,{" "}
            <LinkPreview
              url="#extension"
              isStatic={true}
              imageSrc="/extension.png"
              className="font-bold text-foreground"
            >
              extension sur-mesure
            </LinkPreview>,{" "}
            <LinkPreview
              url="#amenagement"
              isStatic={true}
              imageSrc="/amenagement exterieur.png"
              className="font-bold text-foreground"
            >
              aménagement extérieur
            </LinkPreview>,{" "}
            <LinkPreview
              url="#lodge"
              isStatic={true}
              imageSrc="/lodgedeluxe.png"
              className="font-bold text-foreground"
            >
              lodge de luxe
            </LinkPreview>{" "}
            et{" "}
            <LinkPreview
              url="#promoteurs"
              isStatic={true}
              imageSrc="/promoteurs-professionnels.jpg"
              className="font-bold text-foreground"
            >
              projets pour promoteurs
            </LinkPreview>.
            Chaque réalisation bénéficie de notre expertise technique RE2020 et de notre connaissance
            approfondie du territoire réunionnais.
          </div>
          </div>
        </div>

        {/* Grille responsive de cartes 3D */}
        <div className="w-full">
          <div className={`grid ${getGridCols()} ${effectiveIsMobile ? 'gap-4' : effectiveIsTablet ? 'gap-x-6 gap-y-3' : 'gap-x-8 gap-y-4'} max-w-7xl mx-auto`}>
          {/* Carte 1 - Villa Contemporaine */}
          <CardContainer className="inter-var">
            <CardBody className={`bg-muted/20 relative group/card dark:hover:shadow-2xl dark:hover:shadow-accent/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl ${effectiveIsMobile ? 'p-4' : 'p-6'} border`}>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-foreground dark:text-white"
              >
                Villa Contemporaine
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-muted-foreground text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Architecture moderne et design personnalisé. Villas d'exception adaptées au climat tropical.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/villamoderne.png"
                  height="1000"
                  width="1000"
                  className={`${effectiveIsMobile ? 'h-40' : effectiveIsTablet ? 'h-48' : 'h-60'} w-full object-cover rounded-xl group-hover/card:shadow-xl`}
                  alt="Villa Contemporaine La Réunion"
                />
              </CardItem>
              <div className={`flex ${effectiveIsMobile ? 'flex-col gap-2' : 'flex-row justify-between'} items-stretch ${!effectiveIsMobile ? 'items-center' : ''} ${effectiveIsMobile ? 'mt-8' : effectiveIsTablet ? 'mt-12' : 'mt-20'}`}>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/maitrise-oeuvre/villa-contemporaine-reunion"
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
                  Devis gratuit
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Carte 3 - Rénovation Complète */}
          <CardContainer className="inter-var">
            <CardBody className={`bg-muted/20 relative group/card dark:hover:shadow-2xl dark:hover:shadow-accent/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl ${effectiveIsMobile ? 'p-4' : 'p-6'} border`}>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-foreground dark:text-white"
              >
                Rénovation Complète
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-muted-foreground text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Transformation totale de votre habitat. Mise aux normes et modernisation énergétique.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/renovation.png"
                  height="1000"
                  width="1000"
                  className={`${effectiveIsMobile ? 'h-40' : effectiveIsTablet ? 'h-48' : 'h-60'} w-full object-cover rounded-xl group-hover/card:shadow-xl`}
                  alt="Rénovation Complète La Réunion"
                />
              </CardItem>
              <div className={`flex ${effectiveIsMobile ? 'flex-col gap-2' : 'flex-row justify-between'} items-stretch ${!effectiveIsMobile ? 'items-center' : ''} ${effectiveIsMobile ? 'mt-8' : effectiveIsTablet ? 'mt-12' : 'mt-20'}`}>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/maitrise-oeuvre/renovation-complete-974"
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
                  Devis gratuit
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Carte 4 - Extension Sur-Mesure */}
          <CardContainer className="inter-var">
            <CardBody className={`bg-muted/20 relative group/card dark:hover:shadow-2xl dark:hover:shadow-accent/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl ${effectiveIsMobile ? 'p-4' : 'p-6'} border`}>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-foreground dark:text-white"
              >
                Extension Sur-Mesure
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-muted-foreground text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Agrandissement harmonieux de votre espace. Solutions créatives pour optimiser votre habitat.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/extension.png"
                  height="1000"
                  width="1000"
                  className={`${effectiveIsMobile ? 'h-40' : effectiveIsTablet ? 'h-48' : 'h-60'} w-full object-cover rounded-xl group-hover/card:shadow-xl`}
                  alt="Extension Sur-Mesure La Réunion"
                />
              </CardItem>
              <div className={`flex ${effectiveIsMobile ? 'flex-col gap-2' : 'flex-row justify-between'} items-stretch ${!effectiveIsMobile ? 'items-center' : ''} ${effectiveIsMobile ? 'mt-8' : effectiveIsTablet ? 'mt-12' : 'mt-20'}`}>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/maitrise-oeuvre/extension-maison-reunion"
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
                  Devis gratuit
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Carte 5 - Aménagement Extérieur */}
          <CardContainer className="inter-var">
            <CardBody className={`bg-muted/20 relative group/card dark:hover:shadow-2xl dark:hover:shadow-accent/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl ${effectiveIsMobile ? 'p-4' : 'p-6'} border`}>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-foreground dark:text-white"
              >
                Aménagement Extérieur
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-muted-foreground text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Terrasses, piscines et jardins paysagers. Création d'espaces de vie extérieurs exceptionnels.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/amenagement exterieur.png"
                  height="1000"
                  width="1000"
                  className={`${effectiveIsMobile ? 'h-40' : effectiveIsTablet ? 'h-48' : 'h-60'} w-full object-cover rounded-xl group-hover/card:shadow-xl`}
                  alt="Aménagement Extérieur La Réunion"
                />
              </CardItem>
              <div className={`flex ${effectiveIsMobile ? 'flex-col gap-2' : 'flex-row justify-between'} items-stretch ${!effectiveIsMobile ? 'items-center' : ''} ${effectiveIsMobile ? 'mt-8' : effectiveIsTablet ? 'mt-12' : 'mt-20'}`}>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/maitrise-oeuvre/amenagement-exterieur-reunion"
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
                  Devis gratuit
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Carte 6 - Lodge de Luxe */}
          <CardContainer className="inter-var">
            <CardBody className={`bg-muted/20 relative group/card dark:hover:shadow-2xl dark:hover:shadow-accent/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl ${effectiveIsMobile ? 'p-4' : 'p-6'} border`}>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-foreground dark:text-white"
              >
                Lodge de Luxe
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-muted-foreground text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hébergements touristiques haut de gamme. Lodge Paradise et locations saisonnières d'exception.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/lodgedeluxe.png"
                  height="1000"
                  width="1000"
                  className={`${effectiveIsMobile ? 'h-40' : effectiveIsTablet ? 'h-48' : 'h-60'} w-full object-cover rounded-xl group-hover/card:shadow-xl`}
                  alt="Lodge de Luxe La Réunion"
                />
              </CardItem>
              <div className={`flex ${effectiveIsMobile ? 'flex-col gap-2' : 'flex-row justify-between'} items-stretch ${!effectiveIsMobile ? 'items-center' : ''} ${effectiveIsMobile ? 'mt-8' : effectiveIsTablet ? 'mt-12' : 'mt-20'}`}>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/maitrise-oeuvre/lodge-luxe-reunion"
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
                  Devis gratuit
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Carte 7 - Promoteurs Professionnels */}
          <CardContainer className="inter-var">
            <CardBody className={`bg-muted/20 relative group/card dark:hover:shadow-2xl dark:hover:shadow-accent/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl ${effectiveIsMobile ? 'p-4' : 'p-6'} border`}>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-foreground dark:text-white"
              >
                Promoteurs Professionnels
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-muted-foreground text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Lotissements écolodge et immeubles de rapport. Expertise technique et financière pour vos projets d'envergure.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/promoteurs-professionnels.jpg"
                  height="1000"
                  width="1000"
                  className={`${effectiveIsMobile ? 'h-40' : effectiveIsTablet ? 'h-48' : 'h-60'} w-full object-cover rounded-xl group-hover/card:shadow-xl`}
                  alt="Promoteurs Professionnels La Réunion"
                />
              </CardItem>
              <div className={`flex ${effectiveIsMobile ? 'flex-col gap-2' : 'flex-row justify-between'} items-stretch ${!effectiveIsMobile ? 'items-center' : ''} ${effectiveIsMobile ? 'mt-8' : effectiveIsTablet ? 'mt-12' : 'mt-20'}`}>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/maitrise-oeuvre/promoteurs-reunion"
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
                  Devis gratuit
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        </div>
      </div>
    </section>
  );
}
