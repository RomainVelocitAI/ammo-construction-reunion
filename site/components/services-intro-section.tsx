"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { LinkPreview } from "@/components/ui/link-preview";

export function ServicesIntroSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col">
        {/* Section Header avec SEO et Copywriting optimisés pour les services */}
        <div className="w-full mb-16">
          <div className="max-w-6xl mx-auto text-center">
          {/* Titre principal H2 optimisé SEO services */}
          <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Nos Services de Construction et Rénovation
            <span className="block text-lg sm:text-xl lg:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600 mt-2">
              Maison Container • Villa • Extension • Aménagement
            </span>
          </h2>

          {/* Description services avec mots-clés SEO et link previews */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed px-2 sm:px-4 lg:px-0">
            Spécialiste de la{" "}
            <LinkPreview
              url="#maison-container"
              isStatic={true}
              imageSrc="/maison_contener.png"
              className="font-bold text-gray-900"
            >
              maison container
            </LinkPreview>{" "}
            et de la{" "}
            <LinkPreview
              url="#villa"
              isStatic={true}
              imageSrc="/villamoderne.png"
              className="font-bold text-gray-900"
            >
              villa contemporaine
            </LinkPreview>{" "}
            à La Réunion, AMMO vous accompagne dans tous vos projets :{" "}
            <LinkPreview
              url="#renovation"
              isStatic={true}
              imageSrc="/renovation.png"
              className="font-bold text-gray-900"
            >
              rénovation complète
            </LinkPreview>,{" "}
            <LinkPreview
              url="#extension"
              isStatic={true}
              imageSrc="/extension.png"
              className="font-bold text-gray-900"
            >
              extension sur-mesure
            </LinkPreview>,{" "}
            <LinkPreview
              url="#amenagement"
              isStatic={true}
              imageSrc="/amenagement exterieur.png"
              className="font-bold text-gray-900"
            >
              aménagement extérieur
            </LinkPreview>{" "}
            et{" "}
            <LinkPreview
              url="#lodge"
              isStatic={true}
              imageSrc="/lodgedeluxe.png"
              className="font-bold text-gray-900"
            >
              lodge de luxe
            </LinkPreview>.
            Chaque réalisation bénéficie de notre expertise technique RE2020 et de notre connaissance
            approfondie du territoire réunionnais.
          </p>
          </div>
        </div>

        {/* Grille 3x3 de cartes 3D */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Carte 1 - Maison Container */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-amber-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Maison Container
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Construction modulaire écologique et moderne. Solution durable avec isolation optimale RE2020.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/maison_contener.png"
                  height="1000"
                  width="1000"
                  className="h-40 sm:h-48 lg:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Maison Container La Réunion"
                />
              </CardItem>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between items-stretch sm:items-center mt-8 sm:mt-12 lg:mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/services/maison-container"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  En savoir plus →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="#contact"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 text-white text-xs font-bold"
                >
                  Devis gratuit
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Carte 2 - Villa Contemporaine */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-amber-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Villa Contemporaine
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Architecture moderne et design personnalisé. Villas d'exception adaptées au climat tropical.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/villamoderne.png"
                  height="1000"
                  width="1000"
                  className="h-40 sm:h-48 lg:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Villa Contemporaine La Réunion"
                />
              </CardItem>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between items-stretch sm:items-center mt-8 sm:mt-12 lg:mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/services/villa-contemporaine"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  En savoir plus →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="#contact"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 text-white text-xs font-bold"
                >
                  Devis gratuit
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Carte 3 - Rénovation Complète */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-amber-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Rénovation Complète
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Transformation totale de votre habitat. Mise aux normes et modernisation énergétique.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/renovation.png"
                  height="1000"
                  width="1000"
                  className="h-40 sm:h-48 lg:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Rénovation Complète La Réunion"
                />
              </CardItem>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between items-stretch sm:items-center mt-8 sm:mt-12 lg:mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/services/renovation-complete"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  En savoir plus →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="#contact"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 text-white text-xs font-bold"
                >
                  Devis gratuit
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Carte 4 - Extension Sur-Mesure */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-amber-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Extension Sur-Mesure
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Agrandissement harmonieux de votre espace. Solutions créatives pour optimiser votre habitat.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/extension.png"
                  height="1000"
                  width="1000"
                  className="h-40 sm:h-48 lg:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Extension Sur-Mesure La Réunion"
                />
              </CardItem>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between items-stretch sm:items-center mt-8 sm:mt-12 lg:mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/services/extension-sur-mesure"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  En savoir plus →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="#contact"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 text-white text-xs font-bold"
                >
                  Devis gratuit
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Carte 5 - Aménagement Extérieur */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-amber-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Aménagement Extérieur
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Terrasses, piscines et jardins paysagers. Création d'espaces de vie extérieurs exceptionnels.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/amenagement exterieur.png"
                  height="1000"
                  width="1000"
                  className="h-40 sm:h-48 lg:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Aménagement Extérieur La Réunion"
                />
              </CardItem>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between items-stretch sm:items-center mt-8 sm:mt-12 lg:mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/services/amenagement-exterieur"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  En savoir plus →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="#contact"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 text-white text-xs font-bold"
                >
                  Devis gratuit
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Carte 6 - Lodge de Luxe */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-amber-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Lodge de Luxe
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hébergements touristiques haut de gamme. Lodge Paradise et locations saisonnières d'exception.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/lodgedeluxe.png"
                  height="1000"
                  width="1000"
                  className="h-40 sm:h-48 lg:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Lodge de Luxe La Réunion"
                />
              </CardItem>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between items-stretch sm:items-center mt-8 sm:mt-12 lg:mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/services/lodge-de-luxe"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  En savoir plus →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="#contact"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 text-white text-xs font-bold"
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