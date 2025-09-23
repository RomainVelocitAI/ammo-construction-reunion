"use client";

import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

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
    <footer className="bg-gray-900 text-white">
      <div className={`container mx-auto ${isMobile ? 'px-4 py-8' : isTablet ? 'px-6 py-12' : 'px-6 py-16'}`}>
        <div className={`grid ${getGridCols()} ${isMobile ? 'gap-6' : 'gap-8'}`}>
          {/* Company Info */}
          <div>
            <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold ${isMobile ? 'mb-3' : 'mb-4'} text-amber-500`}>AMMO.re</h3>
            <p className={`${isMobile ? 'text-sm' : 'text-base'} text-gray-300 mb-4`}>
              Expert en construction et rénovation à La Réunion depuis 1993
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold ${isMobile ? 'mb-3' : 'mb-4'} text-amber-500`}>Nos Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/container-house" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Container House
                </Link>
              </li>
              <li>
                <Link href="/services/villa-contemporaine" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Villa Contemporaine
                </Link>
              </li>
              <li>
                <Link href="/services/renovation" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Rénovation
                </Link>
              </li>
              <li>
                <Link href="/services/extension" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Extension
                </Link>
              </li>
              <li>
                <Link href="/services/amenagement-exterieur" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Aménagement Extérieur
                </Link>
              </li>
              <li>
                <Link href="/services/lodge-de-luxe" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Lodge de Luxe
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold ${isMobile ? 'mb-3' : 'mb-4'} text-amber-500`}>Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-500 transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/devis" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Devis Gratuit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold ${isMobile ? 'mb-3' : 'mb-4'} text-amber-500`}>Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                <p className={`${isMobile ? 'text-sm' : 'text-base'} text-gray-300`}>
                  123 Rue de la Construction<br />
                  97400 Saint-Denis<br />
                  La Réunion
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <a href="tel:+262692000000" className="text-gray-300 hover:text-amber-500 transition-colors">
                  0692 00 00 00
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <a href="mailto:contact@ammo.re" className="text-gray-300 hover:text-amber-500 transition-colors">
                  contact@ammo.re
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className={`flex ${isMobile || isTablet ? 'flex-col' : 'flex-row'} justify-between items-center`}>
            <p className={`text-gray-400 text-sm ${isMobile || isTablet ? 'mb-4' : 'mb-0'}`}>
              © {new Date().getFullYear()} AMMO.re - Tous droits réservés
            </p>
            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} ${isMobile ? 'space-y-2' : 'space-x-6'} ${isMobile ? 'items-center' : ''}`}>
              <Link href="/mentions-legales" className="text-gray-400 text-sm hover:text-amber-500 transition-colors">
                Mentions Légales
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-400 text-sm hover:text-amber-500 transition-colors">
                Politique de Confidentialité
              </Link>
              <Link href="/cgv" className="text-gray-400 text-sm hover:text-amber-500 transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}