"use client";

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function ContactSectionV3() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={`${isMobile ? 'py-12' : isTablet ? 'py-16' : 'py-24'} bg-gradient-to-br from-muted/20 via-background to-secondary/10 relative overflow-hidden`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className={`container mx-auto ${isMobile ? 'px-4' : 'px-6'} relative z-10 flex flex-col`}>
        <div className="w-full text-center mb-20 block">
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
                    8 Ruelle Boulot<br />
                    97400 Saint-Denis<br />
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
                  <span className="font-bold">08:00 - 18:00</span>
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
                  Demande de devis gratuit
                </h3>
                <p className="text-muted-foreground">Remplissez le formulaire ci-dessous, nous vous répondons sous 48h</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-muted/20 border border-border rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary focus:bg-background transition-all outline-none"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-muted/20 border border-border rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary focus:bg-background transition-all outline-none"
                      placeholder="+262 693 XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-muted/20 border border-border rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary focus:bg-background transition-all outline-none"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Votre projet *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-muted/20 border border-border rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary focus:bg-background transition-all resize-none outline-none"
                    placeholder="Décrivez-nous votre projet en quelques lignes..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-secondary to-accent text-primary-foreground font-bold py-4 px-8 rounded-xl hover:from-secondary/90 hover:to-accent/90 hover:shadow-xl transition-all duration-300 flex items-center justify-center group text-lg"
                >
                  <span>Envoyer ma demande</span>
                  <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-sm text-muted-foreground text-center pt-2">
                  * Champs obligatoires - Réponse garantie sous 48h
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
