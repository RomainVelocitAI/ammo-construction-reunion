"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Building2, Palmtree, Briefcase } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ------------------------------------------------------------------ */
/*  Animated section wrapper                                           */
/* ------------------------------------------------------------------ */

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-section data                                                   */
/* ------------------------------------------------------------------ */

const sections = [
  {
    id: "hebergements",
    icon: Palmtree,
    label: "Hébergements touristiques",
    title: "Hébergements touristiques",
    subtitle: "Lodges, gîtes & villas locatives",
    image: "/projets-lodges.jpg",
    paragraphs: [
      "La Réunion attire chaque année des voyageurs en quête d'authenticité et de confort. AMMO conçoit et réalise des hébergements touristiques haut de gamme parfaitement adaptés au climat tropical : lodges nichés dans la végétation, gîtes de charme, villas locatives avec piscine et espaces extérieurs généreux.",
      "Notre expertise de contractant général garantit une maîtrise totale du projet, de l'étude de faisabilité à la remise des clés. Nous coordonnons l'ensemble des corps de métier, respectons les délais et le budget, et assurons une finition irréprochable pour des hébergements qui séduiront une clientèle exigeante.",
      "Que vous développiez un seul lodge ou un complexe de plusieurs unités, AMMO structure votre projet pour maximiser la rentabilité tout en offrant une expérience mémorable à vos futurs hôtes.",
    ],
    highlights: [
      "Conception bioclimatique adaptée au tropical",
      "Finitions haut de gamme & matériaux durables",
      "Gestion multi-unités clé en main",
    ],
  },
  {
    id: "immobilier",
    icon: Building2,
    label: "Programmes immobiliers",
    title: "Programmes immobiliers",
    subtitle: "Lotissements & immeubles de rapport",
    image: "/projets-immobilier.jpg",
    paragraphs: [
      "Pour les promoteurs et investisseurs, AMMO pilote des programmes immobiliers de toute envergure : lotissements résidentiels, immeubles de rapport, résidences de standing. Notre rôle de contractant général vous libère de la complexité administrative et technique inhérente à ces opérations.",
      "Nous assurons la coordination complète entre architectes, bureaux d'études, entreprises et administrations. Chaque programme bénéficie d'un suivi rigoureux en termes de qualité, de délais et de conformité réglementaire, y compris les normes RE2020 en vigueur.",
      "Notre connaissance fine du marché réunionnais et de ses spécificités (risques cycloniques, terrain volcanique, normes parasismiques) constitue un atout déterminant pour la réussite de vos opérations immobilières.",
    ],
    highlights: [
      "Pilotage complet de programmes multi-lots",
      "Conformité RE2020 & normes locales",
      "Optimisation des coûts à grande échelle",
    ],
  },
  {
    id: "professionnels",
    icon: Briefcase,
    label: "Projets professionnels",
    title: "Projets professionnels",
    subtitle: "Commerces, bureaux & locaux d'activité",
    image: "/service-construction.jpg",
    paragraphs: [
      "Commerces, bureaux, ateliers, entrepôts : AMMO accompagne les professionnels dans la construction et l'aménagement de leurs locaux d'activité. Nous comprenons les enjeux spécifiques de chaque secteur et adaptons chaque projet à vos contraintes opérationnelles.",
      "De la conception de l'espace de travail à l'installation technique (climatisation, électricité, réseau), nous orchestrons l'intégralité du chantier pour que vous puissiez vous concentrer sur votre activité. Un interlocuteur unique, une vision globale, une exécution sans faille.",
      "Notre approche sur-mesure intègre également les contraintes d'accessibilité ERP, les normes de sécurité incendie et les exigences environnementales, pour des locaux conformes et pérennes.",
    ],
    highlights: [
      "Aménagement sur-mesure par secteur d'activité",
      "Conformité ERP & sécurité incendie",
      "Livraison dans les délais, budget maîtrisé",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Main content component                                             */
/* ------------------------------------------------------------------ */

export function ProjetsEnvergureContent() {
  return (
    <div className="overflow-hidden">
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative min-h-[85vh] flex items-end pt-32 sm:pt-36 lg:pt-44">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/projets-envergure-hero.jpg"
            alt="Projet d'envergure AMMO La Réunion"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </div>

        {/* Decorative accent line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          className="absolute left-6 sm:left-10 lg:left-16 top-40 bottom-40 w-[2px] origin-top z-10 hidden lg:block"
          style={{ background: "linear-gradient(to bottom, transparent, #BD9C69, #D6B363, transparent)" }}
        />

        {/* Content */}
        <div className="relative z-10 w-full pb-16 sm:pb-20 lg:pb-28">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-3xl"
            >
              {/* Eyebrow */}
              <motion.p
                variants={fadeUp}
                className="font-subheading text-[#D6B363] text-lg sm:text-xl lg:text-2xl tracking-[0.35em] uppercase mb-4 sm:mb-6"
              >
                Contractant Général
              </motion.p>

              {/* Title */}
              <motion.h1
                variants={fadeUp}
                className="font-heading text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight mb-6 sm:mb-8"
              >
                Projets
                <br />
                <span className="bg-gradient-to-r from-[#BD9C69] via-[#D6B363] to-[#BD9C69] bg-clip-text text-transparent">
                  d&apos;envergure
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeUp}
                className="font-subheading text-white/80 text-xl sm:text-2xl lg:text-3xl tracking-wide leading-relaxed mb-6 sm:mb-8"
              >
                Hébergements touristiques, programmes immobiliers
                <br className="hidden sm:block" /> et projets professionnels
              </motion.p>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="font-body text-white/65 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl"
              >
                AMMO accompagne les porteurs de projets ambitieux&nbsp;: lodges et
                hébergements touristiques, locations saisonnières haut de gamme,
                lotissements et immeubles de rapport. Notre expertise de
                contractant général vous offre un interlocuteur unique de la
                conception à la livraison, quel que soit le volume du projet.
              </motion.p>

              {/* Scroll indicator */}
              <motion.div
                variants={fadeIn}
                className="mt-10 sm:mt-14 flex items-center gap-3"
              >
                <span className="block w-8 h-[1px] bg-[#D6B363]" />
                <span className="font-notes text-[#D6B363]/70 text-xs tracking-[0.3em] uppercase">
                  Découvrir nos expertises
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  NAVIGATION PILLS                                            */}
      {/* ============================================================ */}
      <AnimatedSection className="bg-background relative z-20">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-20 py-10 sm:py-14">
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="group flex items-center gap-2.5 px-5 sm:px-7 py-3 sm:py-3.5 border border-[#BD9C69]/30 rounded-full hover:border-[#D6B363] hover:bg-[#BD9C69]/10 transition-all duration-500"
                >
                  <Icon className="w-4 h-4 text-[#BD9C69] group-hover:text-[#D6B363] transition-colors duration-300" />
                  <span className="font-notes text-sm sm:text-base tracking-wide text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                    {s.label}
                  </span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ============================================================ */}
      {/*  SUB-SECTIONS                                                */}
      {/* ============================================================ */}
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;
        return (
          <SubSection key={section.id} section={section} imageOnLeft={isEven} index={index} />
        );
      })}

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <AnimatedSection className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a18] via-[#1f1d19] to-[#181614]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #D6B363 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#BD9C69]/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-[900px] mx-auto px-5 sm:px-8 text-center">
          <motion.div variants={fadeUp}>
            <p className="font-subheading text-[#D6B363] text-lg sm:text-xl tracking-[0.35em] uppercase mb-6">
              Votre projet commence ici
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] mb-8"
          >
            Un interlocuteur unique,
            <br />
            <span className="bg-gradient-to-r from-[#BD9C69] via-[#D6B363] to-[#BD9C69] bg-clip-text text-transparent">
              un projet maîtrisé
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body text-white/60 text-base sm:text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            De la conception à la livraison, AMMO coordonne chaque étape de
            votre projet d&apos;envergure. Contactez-nous pour un échange
            personnalisé et découvrez comment nous pouvons concrétiser votre
            ambition à La Réunion.
          </motion.p>

          <motion.div variants={scaleIn}>
            <Link
              href="/#contact"
              className="group relative inline-flex items-center gap-3 px-10 sm:px-14 py-4 sm:py-5 overflow-hidden"
            >
              {/* Button background */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#BD9C69] via-[#D6B363] to-[#BD9C69]" />
              <span className="absolute inset-0 bg-gradient-to-r from-[#D6B363] via-[#BD9C69] to-[#D6B363] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              {/* Shimmer */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 group-hover:animate-[shimmer_2s_ease-in-out_infinite]" />
              </span>
              <span className="absolute inset-0 border-2 border-[#D6B363]/0 group-hover:border-[#D6B363]/50 transition-all duration-700" />

              <span className="relative font-heading text-sm sm:text-base lg:text-lg tracking-[0.3em] uppercase text-[#1a1a18] font-bold">
                Prendre Contact
              </span>
              <ArrowRight className="relative w-5 h-5 text-[#1a1a18] group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-section component                                              */
/* ------------------------------------------------------------------ */

function SubSection({
  section,
  imageOnLeft,
  index,
}: {
  section: (typeof sections)[number];
  imageOnLeft: boolean;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = section.icon;

  const bgClass = index % 2 === 0 ? "bg-background" : "bg-[#ebe4db]";

  return (
    <section
      id={section.id}
      ref={ref}
      className={`${bgClass} py-20 sm:py-28 lg:py-36 scroll-mt-24`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-20">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center ${
            imageOnLeft ? "" : "lg:[direction:rtl]"
          }`}
        >
          {/* Image */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageOnLeft ? slideFromLeft : slideFromRight}
            className="relative aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3] rounded-2xl overflow-hidden group lg:[direction:ltr]"
          >
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            {/* Decorative corner accent */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-[#D6B363]/50 rounded-tl-lg" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[#D6B363]/50 rounded-br-lg" />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={stagger}
            className="lg:[direction:ltr]"
          >
            {/* Icon + label */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#BD9C69]/10 border border-[#BD9C69]/20">
                <Icon className="w-5 h-5 text-[#BD9C69]" />
              </span>
              <span className="font-notes text-[#BD9C69] text-sm tracking-[0.25em] uppercase">
                {section.label}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={fadeUp}
              className="font-heading text-foreground text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[0.95] mb-3"
            >
              {section.title}
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="font-subheading text-[#BD9C69] text-xl sm:text-2xl tracking-wide mb-8"
            >
              {section.subtitle}
            </motion.p>

            {/* Paragraphs */}
            {section.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="font-body text-foreground/70 text-base sm:text-lg leading-relaxed mb-4 last:mb-8"
              >
                {p}
              </motion.p>
            ))}

            {/* Highlights */}
            <motion.ul variants={fadeUp} className="space-y-3">
              {section.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 block w-2 h-2 rounded-full bg-gradient-to-br from-[#BD9C69] to-[#D6B363] flex-shrink-0" />
                  <span className="font-notes text-foreground/80 text-sm sm:text-base tracking-wide">
                    {h}
                  </span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
