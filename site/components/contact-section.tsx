"use client";

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function ContactSection() {
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
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={`${isMobile ? 'py-12' : isTablet ? 'py-16' : 'py-24'} bg-gradient-to-br from-gray-50 via-white to-amber-50 relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className={`container mx-auto ${isMobile ? 'px-4' : 'px-6'} relative z-10`}>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`${isMobile ? 'text-3xl' : isTablet ? 'text-4xl' : 'text-5xl'} font-bold text-gray-900 mb-4`}>
            Contactez-nous
          </h2>
          <p className={`${isMobile ? 'text-base' : 'text-lg'} text-gray-600 max-w-2xl mx-auto`}>
            Un projet en tête ? Notre équipe est à votre écoute pour vous accompagner dans sa réalisation.
          </p>
        </div>

        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'} gap-8`}>
          {/* Contact Cards - Top on mobile, Left column on desktop */}
          <div className={`${isMobile ? 'order-2' : ''} space-y-6`}>
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-500 mb-1">Téléphone</p>
                  <a
                    href="tel:+262693638656"
                    className="text-lg font-bold text-gray-900 hover:text-amber-600 transition-colors block break-words"
                  >
                    +262 693 63 86 56
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                  <a
                    href="mailto:info@ammo.re"
                    className="text-lg font-bold text-gray-900 hover:text-amber-600 transition-colors block break-words"
                  >
                    info@ammo.re
                  </a>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500 mb-2">Adresse</p>
                  <p className="text-base font-semibold text-gray-900 leading-relaxed">
                    8 ruelle Boulot<br />
                    97400 Saint-Denis<br />
                    La Réunion
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-gradient-to-br from-amber-500 to-yellow-500 p-6 rounded-2xl shadow-lg text-white">
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

          {/* Contact Form - Right side, spans 2 columns */}
          <div className={`${isMobile ? 'order-1' : ''}`}>
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-2xl border border-gray-100 h-full">
              <div className="mb-8">
                <h3 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-gray-900 mb-2`}>
                  Demande de devis gratuit
                </h3>
                <p className="text-gray-600">Remplissez le formulaire ci-dessous, nous vous répondons sous 48h</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:bg-white transition-all outline-none"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:bg-white transition-all outline-none"
                      placeholder="+262 693 XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:bg-white transition-all outline-none"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre projet *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 focus:bg-white transition-all resize-none outline-none"
                    placeholder="Décrivez-nous votre projet en quelques lignes..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold py-4 px-8 rounded-xl hover:from-amber-600 hover:to-yellow-600 hover:shadow-xl transition-all duration-300 flex items-center justify-center group text-lg"
                >
                  <span>Envoyer ma demande</span>
                  <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-sm text-gray-500 text-center pt-2">
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
