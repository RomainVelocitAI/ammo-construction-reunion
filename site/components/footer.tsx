"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  // Initialize with actual window width if available
  const getInitialMobileState = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640;
    }
    return false;
  };

  const getInitialTabletState = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      return width >= 640 && width < 1024;
    }
    return false;
  };

  const [isMobile, setIsMobile] = useState(getInitialMobileState);
  const [isTablet, setIsTablet] = useState(getInitialTabletState);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getGridCols = () => {
    if (isMobile) return 'grid-cols-1';
    if (isTablet) return 'grid-cols-2';
    return 'grid-cols-4';
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className={`container mx-auto ${isMobile ? 'px-4 py-8' : isTablet ? 'px-6 py-12' : 'px-6 py-16'}`}>
        <div className={`grid ${getGridCols()} ${isMobile ? 'gap-6' : 'gap-8'}`}>
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo-horizontal-gold.png"
                alt="AMMO - Maîtrise d'Œuvre"
                width={isMobile ? 180 : 240}
                height={isMobile ? 58 : 77}
                className="h-auto"
              />
            </div>
            <p className={`${isMobile ? 'text-sm' : 'text-base'} text-muted-foreground mb-2 font-semibold`}>
              Conception à réalisation de vos projets
            </p>
            <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-muted-foreground/80 mb-4`}>
              Coordination technique, juridique et administrative • Garantie RE2020 • 10+ ans d'expérience
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61572855163213&locale=fr_FR" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold ${isMobile ? 'mb-3' : 'mb-4'} text-accent`}>Nos Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/maitrise-oeuvre/villa-contemporaine-reunion" className="text-muted-foreground hover:text-accent transition-colors">
                  Villa Contemporaine
                </Link>
              </li>
              <li>
                <Link href="/maitrise-oeuvre/renovation-complete-974" className="text-muted-foreground hover:text-accent transition-colors">
                  Rénovation
                </Link>
              </li>
              <li>
                <Link href="/maitrise-oeuvre/extension-maison-reunion" className="text-muted-foreground hover:text-accent transition-colors">
                  Extension
                </Link>
              </li>
              <li>
                <Link href="/maitrise-oeuvre/amenagement-exterieur-reunion" className="text-muted-foreground hover:text-accent transition-colors">
                  Aménagement Extérieur
                </Link>
              </li>
              <li>
                <Link href="/maitrise-oeuvre/lodge-luxe-reunion" className="text-muted-foreground hover:text-accent transition-colors">
                  Lodge de Luxe
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold ${isMobile ? 'mb-3' : 'mb-4'} text-accent`}>Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-accent transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Devis Gratuit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold ${isMobile ? 'mb-3' : 'mb-4'} text-accent`}>Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                <p className={`${isMobile ? 'text-sm' : 'text-base'} text-muted-foreground`}>
                  8 ruelle Boulot<br />
                  97400 Saint-Denis<br />
                  La Réunion
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <a href="tel:+262693397786" className="text-muted-foreground hover:text-accent transition-colors">
                  +262 693 397 786
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <a href="mailto:info@ammo.re" className="text-muted-foreground hover:text-accent transition-colors">
                  info@ammo.re
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className={`flex ${isMobile || isTablet ? 'flex-col' : 'flex-row'} justify-between items-center`}>
            <p className={`text-muted-foreground text-sm ${isMobile || isTablet ? 'mb-4' : 'mb-0'}`}>
              © {new Date().getFullYear()} AMMO.re - Tous droits réservés
            </p>
            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} ${isMobile ? 'space-y-2' : 'space-x-6'} ${isMobile ? 'items-center' : ''}`}>
              <Link href="/mentions-legales" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                Mentions Légales
              </Link>
              <Link href="/politique-confidentialite" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                Politique de Confidentialité
              </Link>
              <Link href="/cgv" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                CGV
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-xs">
              Propulsé par Digiqo - Ladi La Fé Zot Pub
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}