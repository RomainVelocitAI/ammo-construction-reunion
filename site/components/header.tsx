"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPolesOpen, setIsPolesOpen] = useState(false);
  const [hoveredPole, setHoveredPole] = useState<number | null>(null);
  const [isMobilePolesOpen, setIsMobilePolesOpen] = useState(false);
  const [mobilePoleExpanded, setMobilePoleExpanded] = useState<number | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const getInitialMobileState = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  };

  const [isMobile, setIsMobile] = useState(getInitialMobileState);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const poleLinks = [
    {
      label: 'Conception',
      href: '/pole/conception',
      services: [
        { label: 'Plans architecturaux', href: '/pole/conception#services' },
        { label: 'Modélisation 3D', href: '/pole/conception#services' },
        { label: 'Permis de construire', href: '/pole/conception#services' },
        { label: 'Études techniques', href: '/pole/conception#services' },
        { label: 'Subventions', href: '/pole/conception#services' },
      ],
    },
    {
      label: 'Maîtrise d\'Œuvre',
      href: '/pole/maitrise-oeuvre',
      services: [
        { label: 'Coordination de projet', href: '/pole/maitrise-oeuvre#services' },
        { label: 'OPC', href: '/pole/maitrise-oeuvre#services' },
        { label: 'Suivi de chantier', href: '/pole/maitrise-oeuvre#services' },
        { label: 'Pilotage technique', href: '/pole/maitrise-oeuvre#services' },
      ],
    },
    {
      label: 'Contractant Général',
      href: '/pole/contractant-general',
      services: [
        { label: 'Rénovation complète', href: '/services/renovation-complete' },
        { label: 'Extension sur-mesure', href: '/services/extension-sur-mesure' },
        { label: 'Gros œuvre', href: '/pole/contractant-general#services' },
        { label: 'Projets d\'envergure', href: '/services/projets-envergure' },
      ],
    },
    {
      label: 'Second Œuvre & Finitions',
      href: '/pole/second-oeuvre-finitions',
      services: [
        { label: 'Peinture & Agencement', href: '/pole/second-oeuvre-finitions#services' },
        { label: 'Meubles sur mesure', href: '/pole/second-oeuvre-finitions#services' },
        { label: 'Aménagement extérieur', href: '/services/amenagement-exterieur' },
        { label: 'Terrasses & Pergolas', href: '/pole/second-oeuvre-finitions#services' },
        { label: 'Jardins & Piscines', href: '/pole/second-oeuvre-finitions#services' },
      ],
    },
  ];

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Espace Pro', href: '/espace-pro' },
    { label: 'À Propos', href: '/a-propos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-2xl shadow-[0_2px_20px_rgba(0,0,0,0.1)] py-2 sm:py-3'
          : 'bg-background/90 backdrop-blur-md py-3 sm:py-4 lg:py-6'
      }`}
    >
      <nav className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative">
            <div className="relative transition-all duration-700 group-hover:scale-[1.03]">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 to-accent/0 group-hover:from-secondary/30 group-hover:to-accent/30 blur-3xl transition-all duration-700 -z-10 scale-150"></div>
              <Image
                src="/logo-horizontal-gold.png"
                alt="AMMO Contractant Général"
                width={360}
                height={115}
                className="h-12 sm:h-14 lg:h-20 xl:h-24 w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
          <div className="flex items-center gap-10 xl:gap-14 ml-12 xl:ml-20">
            <div className="flex items-center gap-8 xl:gap-12">
              {/* Accueil */}
              <Link
                href="/"
                className="relative text-foreground hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent transition-all duration-500 group whitespace-nowrap"
              >
                <span className="text-sm lg:text-base xl:text-lg font-light tracking-[0.25em] uppercase">
                  Accueil
                </span>
                <span className="absolute -bottom-3 left-0 w-0 h-[2px] bg-gradient-to-r from-secondary via-accent to-secondary transition-all duration-700 group-hover:w-full"></span>
              </Link>

              {/* Nos Pôles Dropdown — 2 niveaux */}
              <div
                className="relative"
                onMouseEnter={() => setIsPolesOpen(true)}
                onMouseLeave={() => { setIsPolesOpen(false); setHoveredPole(null); }}
              >
                <button className="relative text-foreground hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent transition-all duration-500 group flex items-center gap-2">
                  <span className="text-sm lg:text-base xl:text-lg font-light tracking-[0.25em] uppercase">
                    Nos Pôles
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isPolesOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-3 left-0 w-0 h-[2px] bg-gradient-to-r from-secondary via-accent to-secondary transition-all duration-700 group-hover:w-full"></span>
                </button>

                <div className={`absolute top-full left-0 pt-3 transition-all duration-300 ${
                  isPolesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}>
                <div className="flex bg-background/95 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-xl overflow-hidden">
                  {/* Colonne pôles */}
                  <div className="py-2 w-[260px] border-r border-secondary/10">
                    {poleLinks.map((pole, index) => (
                      <Link
                        key={pole.label}
                        href={pole.href}
                        className={`block px-6 py-3 text-sm font-light tracking-wide transition-all duration-300 ${
                          hoveredPole === index
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent bg-secondary/10'
                            : 'text-foreground hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent'
                        }`}
                        onMouseEnter={() => setHoveredPole(index)}
                      >
                        {pole.label}
                      </Link>
                    ))}
                  </div>
                  {/* Colonne services du pôle survolé */}
                  {hoveredPole !== null && poleLinks[hoveredPole].services && (
                    <div className="py-2 w-[240px]">
                      {poleLinks[hoveredPole].services.map((service) => (
                        <Link
                          key={service.label}
                          href={service.href}
                          className="block px-6 py-2.5 text-foreground/70 hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent transition-all duration-300 text-sm font-light"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                </div>
              </div>

              {/* Espace Pro & À propos */}
              <Link
                href="/espace-pro"
                className="relative text-foreground hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent transition-all duration-500 group whitespace-nowrap"
              >
                <span className="text-sm lg:text-base xl:text-lg font-light tracking-[0.25em] uppercase">
                  Espace Pro
                </span>
                <span className="absolute -bottom-3 left-0 w-0 h-[2px] bg-gradient-to-r from-secondary via-accent to-secondary transition-all duration-700 group-hover:w-full"></span>
              </Link>

              {/* À Propos with dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <Link
                  href="/a-propos"
                  className="relative text-foreground hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent transition-all duration-500 group whitespace-nowrap flex items-center gap-2"
                >
                  <span className="text-sm lg:text-base xl:text-lg font-light tracking-[0.25em] uppercase">
                    À Propos
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-3 left-0 w-0 h-[2px] bg-gradient-to-r from-secondary via-accent to-secondary transition-all duration-700 group-hover:w-full"></span>
                </Link>
                <div className={`absolute top-full left-0 pt-3 transition-all duration-300 ${
                  isAboutOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}>
                  <div className="py-2 w-[200px] bg-background/95 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-xl overflow-hidden">
                    <Link
                      href="/a-propos#equipe"
                      className="block px-6 py-3 text-sm font-light tracking-wide text-foreground hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent transition-all duration-300"
                    >
                      Notre équipe
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/#contact" className="relative px-12 py-5 overflow-hidden group ml-8 transform hover:scale-[1.02] transition-transform duration-500 inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-secondary"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-accent opacity-0 group-hover:opacity-100 transition-all duration-700"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 group-hover:animate-[shimmer_2s_ease-in-out_infinite]"></span>
              </span>
              <span className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 transition-all duration-700"></span>
              <span className="relative text-primary-foreground font-medium text-sm lg:text-base xl:text-lg tracking-[0.3em] uppercase">
                Prendre Contact
              </span>
            </Link>
          </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative w-12 h-12 flex flex-col items-center justify-center gap-2 group"
          >
            <span className={`w-8 h-[3px] bg-gradient-to-r from-secondary to-accent rounded-full transition-all duration-500 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-[11px]' : ''
            }`}></span>
            <span className={`w-8 h-[3px] bg-gradient-to-r from-secondary to-accent rounded-full transition-all duration-500 ${
              isMobileMenuOpen ? 'opacity-0 scale-0' : ''
            }`}></span>
            <span className={`w-8 h-[3px] bg-gradient-to-r from-secondary to-accent rounded-full transition-all duration-500 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-[11px]' : ''
            }`}></span>
          </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && (
        <div className={`transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 border-t border-secondary/20">
            <Link
              href="/"
              className="block py-3 px-4 text-foreground hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent transition-all duration-500 font-light tracking-[0.2em] uppercase text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accueil
            </Link>

            {/* Mobile Nos Pôles Accordion */}
            <div className="border-t border-secondary/10 mt-2">
              <button
                onClick={() => setIsMobilePolesOpen(!isMobilePolesOpen)}
                className="w-full flex items-center justify-between py-3 px-4 text-foreground hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent transition-all duration-500 font-light tracking-[0.2em] uppercase text-sm"
              >
                <span>Nos Pôles</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobilePolesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${
                isMobilePolesOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="bg-secondary/5 py-2">
                  {poleLinks.map((pole, index) => (
                    <div key={pole.label}>
                      <button
                        onClick={() => setMobilePoleExpanded(mobilePoleExpanded === index ? null : index)}
                        className="w-full flex items-center justify-between py-2 px-8 text-foreground/80 hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent transition-all duration-300 text-sm font-light"
                      >
                        <Link
                          href={pole.href}
                          onClick={(e) => { e.stopPropagation(); setIsMobileMenuOpen(false); setIsMobilePolesOpen(false); }}
                          className="hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent"
                        >
                          {pole.label}
                        </Link>
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${mobilePoleExpanded === index ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`transition-all duration-200 overflow-hidden ${
                        mobilePoleExpanded === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        {pole.services.map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            className="block py-1.5 px-12 text-foreground/60 hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent transition-all duration-300 text-xs font-light"
                            onClick={() => { setIsMobileMenuOpen(false); setIsMobilePolesOpen(false); }}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/espace-pro"
              className="block py-3 px-4 text-foreground hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent transition-all duration-500 font-light tracking-[0.2em] uppercase text-sm border-t border-secondary/10 mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Espace Pro
            </Link>

            <Link
              href="/a-propos"
              className="block py-3 px-4 text-foreground hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent transition-all duration-500 font-light tracking-[0.2em] uppercase text-sm border-t border-secondary/10 mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              À Propos
            </Link>

            <Link href="/#contact" className="mt-6 mx-4 w-[calc(100%-2rem)] py-3 bg-gradient-to-r from-secondary to-accent text-primary-foreground font-medium text-sm tracking-[0.2em] uppercase hover:from-accent hover:to-secondary transition-all duration-500 relative overflow-hidden group block text-center" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 group-hover:animate-[shimmer_2s_ease-in-out_infinite]"></span>
              </span>
              <span className="relative">PRENDRE CONTACT</span>
            </Link>
          </div>
        </div>
        )}
      </nav>
    </header>
  );
}
