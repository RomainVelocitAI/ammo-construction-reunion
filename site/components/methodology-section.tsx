"use client";

import GalleryHoverCarousel from './gallery-hover-carousel';

export function MethodologySection() {
  const methodologySteps = [
    {
      id: "step-1",
      title: "Diagnostic & Analyse",
      summary: "Analyse approfondie de votre projet et de vos besoins spécifiques. Visite technique du site et évaluation des contraintes réglementaires.",
      url: "#contact",
      image: "/construction.jpg"
    },
    {
      id: "step-2",
      title: "Conseil & Conception",
      summary: "Élaboration de solutions optimisées adaptées à votre budget. Conception architecturale et études techniques détaillées.",
      url: "#contact",
      image: "/villamoderne.png"
    },
    {
      id: "step-3",
      title: "Planification & Coordination",
      summary: "Planification détaillée des travaux et sélection des entreprises qualifiées. Coordination des corps de métier et établissement du planning.",
      url: "#contact",
      image: "/villa.png"
    },
    {
      id: "step-4",
      title: "Réalisation & Livraison",
      summary: "Supervision quotidienne des travaux, contrôle qualité rigoureux et réception avec levée des réserves. Accompagnement post-livraison et garanties décennales.",
      url: "#contact",
      image: "/exterieur.jpg"
    }
  ];

  return (
    <GalleryHoverCarousel
      heading="Une Approche Structurée"
      subtitle="4 étapes pour garantir la réussite de votre projet, de la conception à la livraison"
      items={methodologySteps}
    />
  );
}
