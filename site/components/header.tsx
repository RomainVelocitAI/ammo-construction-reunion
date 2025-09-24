"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { label: 'Accueil', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Réalisations', href: '#realisations' },
    { label: 'À propos', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-2xl shadow-[0_2px_20px_rgba(0,0,0,0.1)] py-3 sm:py-5'
          : 'bg-white/90 backdrop-blur-md py-4 sm:py-6 lg:py-10'
      }`}
    >
      <nav className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between">
          {/* Logo - Encore plus grand pour un impact premium maximal */}
          <Link href="/" className="flex items-center group relative">
            <div className="relative transition-all duration-700 group-hover:scale-[1.03]">
              {/* Glow effect behind logo on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/30 group-hover:to-yellow-500/30 blur-3xl transition-all duration-700 -z-10 scale-150"></div>
              <Image
                src="/logo.png"
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
                  className="relative text-gray-700 hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-amber-500 hover:to-yellow-600 transition-all duration-500 group"
                >
                  <span className="text-sm lg:text-base xl:text-lg font-light tracking-[0.25em] uppercase">
                    {link.label}
                  </span>
                  <span className="absolute -bottom-3 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-700 transition-all duration-700 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button - Ultra premium avec effet de luxe */}
            <button className="relative px-12 py-5 overflow-hidden group ml-12 transform hover:scale-[1.02] transition-transform duration-500">
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-all duration-700"></span>
              {/* Shimmer effect premium */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 group-hover:animate-[shimmer_2s_ease-in-out_infinite]"></span>
              </span>
              {/* Border glow */}
              <span className="absolute inset-0 border-2 border-yellow-300/0 group-hover:border-yellow-300/50 transition-all duration-700"></span>
              <span className="relative text-white font-medium text-sm lg:text-base xl:text-lg tracking-[0.3em] uppercase">
                Devis Gratuit
              </span>
            </button>
          </div>
          )}

          {/* Mobile Menu Button - Premium design */}
          {isMobile && (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative w-12 h-12 flex flex-col items-center justify-center gap-2 group"
          >
            <span className={`w-8 h-[3px] bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full transition-all duration-500 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-[11px]' : ''
            }`}></span>
            <span className={`w-8 h-[3px] bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full transition-all duration-500 ${
              isMobileMenuOpen ? 'opacity-0 scale-0' : ''
            }`}></span>
            <span className={`w-8 h-[3px] bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full transition-all duration-500 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-[11px]' : ''
            }`}></span>
          </button>
          )}
        </div>

        {/* Mobile Menu - Premium design */}
        {isMobile && (
        <div className={`transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 border-t border-amber-500/20">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block py-3 px-4 text-gray-700 hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-amber-400 hover:to-yellow-500 transition-all duration-500 font-light tracking-[0.2em] uppercase text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="mt-6 mx-4 w-[calc(100%-2rem)] py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-medium text-sm tracking-[0.2em] uppercase hover:from-amber-400 hover:to-yellow-400 transition-all duration-500 relative overflow-hidden group">
              <span className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 group-hover:animate-[shimmer_2s_ease-in-out_infinite]"></span>
              </span>
              <span className="relative">DEVIS GRATUIT</span>
            </button>
          </div>
        </div>
        )}
      </nav>
    </header>
  );
}