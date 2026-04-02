"use client";

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { HubSpotForm } from '@/components/hubspot-form';

export function ContactSectionV3() {
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

  return (
    <section id="contact" className={`${isMobile ? 'py-12' : isTablet ? 'py-16' : 'py-24'} bg-gradient-to-br from-muted/20 via-background to-secondary/10 relative overflow-hidden`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className={`container mx-auto ${isMobile ? 'px-4' : 'px-6'} relative z-10 flex flex-col`}>
        <div className="w-full text-center mb-10 block">
          <h2 className={`${isMobile ? 'text-3xl' : isTablet ? 'text-4xl' : 'text-5xl'} font-bold text-foreground mb-4`}>
            Contactez-nous
          </h2>
          <p className={`${isMobile ? 'text-base' : 'text-lg'} text-muted-foreground max-w-2xl mx-auto`}>
            Un projet en tête ? Notre équipe est à votre écoute pour vous accompagner dans sa réalisation.
          </p>
        </div>

        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'} gap-8`}>
          <div className={`${isMobile ? 'order-2' : ''} space-y-6`}>
            <div className="bg-background p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Téléphone</p>
                  <a href="tel:+262693638656" className="text-lg font-bold text-foreground hover:text-secondary transition-colors block break-words">
                    +262 693 63 86 56
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                  <a href="mailto:info@ammo.re" className="text-lg font-bold text-foreground hover:text-secondary transition-colors block break-words">
                    info@ammo.re
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Adresse</p>
                  <p className="text-base font-semibold text-foreground leading-relaxed">
                    19 Rue Patrice Lumumba<br />
                    97419 La Possession<br />
                    La Réunion
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary to-accent p-6 rounded-2xl shadow-lg text-primary-foreground">
              <h4 className="text-lg font-bold mb-4 flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                Horaires d'ouverture
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="font-medium">Lundi - Vendredi</span>
                  <span className="font-bold">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span className="font-medium">Samedi</span>
                  <div className="text-right">
                    <span className="font-bold block">08:00 - 18:00</span>
                    <span className="text-xs text-white/80">Sur rendez-vous seulement</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Dimanche</span>
                  <span className="font-bold bg-white/20 px-3 py-1 rounded-full text-sm">Fermé</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isMobile ? 'order-1' : ''}`}>
            <div className="bg-background p-8 lg:p-10 rounded-3xl shadow-2xl border border-border h-full">
              <div className="mb-8">
                <h3 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-foreground mb-2`}>
                  Prendre contact
                </h3>
                <p className="text-muted-foreground">Remplissez le formulaire ci-dessous, nous vous répondons sous 48h</p>
              </div>

              <HubSpotForm formId="64245ead-9bd8-4660-8241-3664a6812188" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
