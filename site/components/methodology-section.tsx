"use client";

import GalleryHoverCarousel from './gallery-hover-carousel';

export function MethodologySection() {
  const methodologySteps = [
    {
      id: "step-1",
      title: "Écoute",
      summary: "Définition de vos besoins, de votre budget et de vos ambitions. Visite technique du site et évaluation des contraintes réglementaires.",
      url: "#contact",
      image: "/methodo-ecoute.jpg"
    },
    {
      id: "step-2",
      title: "Conception",
      summary: "Notre bureau d'études réalise vos plans, la modélisation 3D et monte vos dossiers de permis de construire.",
      url: "#contact",
      image: "/methodo-conception.jpg"
    },
    {
      id: "step-3",
      title: "Réalisation",
      summary: "Coordination des corps de métier, suivi qualité rigoureux et respect du planning. AMMO supervise l'intégralité du chantier.",
      url: "#contact",
      image: "/methodo-realisation.jpg"
    },
    {
      id: "step-4",
      title: "Livraison",
      summary: "Vérification finale, réception des travaux et levée des réserves. Accompagnement post-livraison et garanties décennales.",
      url: "#contact",
      image: "/methodo-livraison.jpg"
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
