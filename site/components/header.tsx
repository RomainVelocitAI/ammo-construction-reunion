"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Initialize with actual window width if available
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

    // Initial check
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const serviceLinks = [
    { label: 'Villa Contemporaine', href: '/maitrise-oeuvre/villa-contemporaine-reunion' },
    { label: 'Rénovation Complète', href: '/maitrise-oeuvre/renovation-complete-974' },
    { label: 'Extension Sur-Mesure', href: '/maitrise-oeuvre/extension-maison-reunion' },
    { label: 'Aménagement Extérieur', href: '/maitrise-oeuvre/amenagement-exterieur-reunion' },
    { label: 'Lodge de Luxe', href: '/maitrise-oeuvre/lodge-luxe-reunion' },
    { label: 'Promoteurs Professionnels', href: '/maitrise-oeuvre/promoteurs-reunion' },
  ];

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/equipe' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-2xl shadow-[0_2px_20px_rgba(0,0,0,0.1)] py-3 sm:py-5'
          : 'bg-background/90 backdrop-blur-md py-4 sm:py-6 lg:py-10'
      }`}
    >
      <nav className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between">
          {/* Logo - Encore plus grand pour un impact premium maximal */}
          <Link href="/" className="flex items-center group relative">
            <div className="relative transition-all duration-700 group-hover:scale-[1.03]">
              {/* Glow effect behind logo on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 to-accent/0 group-hover:from-secondary/30 group-hover:to-accent/30 blur-3xl transition-all duration-700 -z-10 scale-150"></div>
              <Image
                src="/logo-horizontal-gold.png"
                alt="AMMO Construction"
                width={360}
                height={115}
                className="h-16 sm:h-20 lg:h-28 xl:h-32 w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Ultra espacé et premium */}
          {!isMobile && (
          <div className="flex items-center gap-16 xl:gap-20">
            <div className="flex items-center gap-12 xl:gap-16">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative text-foreground hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent transition-all duration-500 group"
                >
                  <span className="text-sm lg:text-base xl:text-lg font-light tracking-[0.25em] uppercase">
                    {link.label}
                  </span>
                  <span className="absolute -bottom-3 left-0 w-0 h-[2px] bg-gradient-to-r from-secondary via-accent to-secondary transition-all duration-700 group-hover:w-full"></span>
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="relative text-foreground hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent transition-all duration-500 group flex items-center gap-2">
                  <span className="text-sm lg:text-base xl:text-lg font-light tracking-[0.25em] uppercase">
                    Services
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-3 left-0 w-0 h-[2px] bg-gradient-to-r from-secondary via-accent to-secondary transition-all duration-700 group-hover:w-full"></span>
                </button>

                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-2 w-[280px] bg-background/95 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-xl overflow-hidden transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}>
                  <div className="py-2">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.label}
                        href={service.href}
                        className="block px-6 py-3 text-foreground hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent hover:bg-secondary/10 transition-all duration-300 text-sm font-light tracking-wide"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button - Ultra premium avec effet de luxe */}
            <Link href="/#contact" className="relative px-12 py-5 overflow-hidden group ml-12 transform hover:scale-[1.02] transition-transform duration-500 inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-secondary"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-accent opacity-0 group-hover:opacity-100 transition-all duration-700"></span>
              {/* Shimmer effect premium */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 group-hover:animate-[shimmer_2s_ease-in-out_infinite]"></span>
              </span>
              {/* Border glow */}
              <span className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 transition-all duration-700"></span>
              <span className="relative text-primary-foreground font-medium text-sm lg:text-base xl:text-lg tracking-[0.3em] uppercase">
                Devis Gratuit
              </span>
            </Link>
          </div>
          )}

          {/* Mobile Menu Button - Premium design */}
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

        {/* Mobile Menu - Premium design */}
        {isMobile && (
        <div className={`transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 border-t border-secondary/20">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block py-3 px-4 text-foreground hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent transition-all duration-500 font-light tracking-[0.2em] uppercase text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Services Accordion */}
            <div className="border-t border-secondary/10 mt-2">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between py-3 px-4 text-foreground hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent transition-all duration-500 font-light tracking-[0.2em] uppercase text-sm"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${
                isMobileServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="bg-secondary/5 py-2">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      className="block py-2 px-8 text-foreground/80 hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-secondary hover:to-accent transition-all duration-300 text-sm font-light"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/#contact" className="mt-6 mx-4 w-[calc(100%-2rem)] py-3 bg-gradient-to-r from-secondary to-accent text-primary-foreground font-medium text-sm tracking-[0.2em] uppercase hover:from-accent hover:to-secondary transition-all duration-500 relative overflow-hidden group block text-center" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 group-hover:animate-[shimmer_2s_ease-in-out_infinite]"></span>
              </span>
              <span className="relative">DEVIS GRATUIT</span>
            </Link>
          </div>
        </div>
        )}
      </nav>
    </header>
  );
}