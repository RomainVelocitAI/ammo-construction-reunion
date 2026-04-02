"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
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
                alt="Groupe AMMO - La Réunion"
                width={isMobile ? 180 : 240}
                height={isMobile ? 58 : 77}
                className="h-auto"
              />
            </div>
            <p className={`${isMobile ? 'text-sm' : 'text-base'} text-muted-foreground mb-2 font-semibold`}>
              Groupe AMMO • La Réunion
            </p>
            <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-muted-foreground/80 mb-4`}>
              De la conception à l'entretien • 15+ ans d'expérience • La Réunion
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61572855163213&locale=fr_FR" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/ammo_maitrisedoeuvre974/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Nos Pôles */}
          <div>
            <h4 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold ${isMobile ? 'mb-3' : 'mb-4'} text-accent`}>Nos Pôles</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/pole/conception" className="text-muted-foreground hover:text-accent transition-colors">
                  Conception
                </Link>
              </li>
              <li>
                <Link href="/pole/maitrise-oeuvre" className="text-muted-foreground hover:text-accent transition-colors">
                  Maîtrise d'Œuvre
                </Link>
              </li>
              <li>
                <Link href="/pole/contractant-general" className="text-muted-foreground hover:text-accent transition-colors">
                  Contractant Général
                </Link>
              </li>
              <li>
                <Link href="/pole/second-oeuvre-finitions" className="text-muted-foreground hover:text-accent transition-colors">
                  Second Œuvre & Finitions
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens Rapides */}
          <div>
            <h4 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold ${isMobile ? 'mb-3' : 'mb-4'} text-accent`}>Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/a-propos" className="text-muted-foreground hover:text-accent transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/espace-pro" className="text-muted-foreground hover:text-accent transition-colors">
                  Espace Pro
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Prendre Contact
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
                  19 Rue Patrice Lumumba<br />
                  97419 La Possession<br />
                  La Réunion
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <a href="tel:+262693638656" className="text-muted-foreground hover:text-accent transition-colors">
                  +262 693 63 86 56
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