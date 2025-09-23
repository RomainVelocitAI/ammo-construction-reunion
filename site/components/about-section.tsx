"use client";

export function AboutSection() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 lg:px-12 xl:px-20">
        <div className="w-full">
          {/* Section Title */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-600/10 to-yellow-600/10 border border-amber-600/40 rounded-full text-amber-600 text-sm font-semibold mb-4 uppercase tracking-wider">
              Notre Différence
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
              AMMO Construction
              <br />
              <span className="text-2xl md:text-3xl font-normal text-gray-600 mt-2">
                Votre partenaire de confiance à La Réunion
              </span>
            </h2>
          </div>

          {/* Main Content - Full Width Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            <div className="space-y-6">
              <p className="text-xl lg:text-2xl font-medium text-gray-800">
                Depuis plus de 15 ans, AMMO Construction s'impose comme une référence incontournable dans le secteur du BTP à La Réunion.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Notre expertise couvre l'ensemble du cycle de vie de vos projets immobiliers. De la construction de maisons individuelles aux projets commerciaux d'envergure, nous maîtrisons chaque étape avec un savoir-faire reconnu.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Nos équipes qualifiées interviennent sur des chantiers de rénovation complète, des extensions harmonieuses et l'aménagement de vos espaces extérieurs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Chaque projet est unique et mérite une attention particulière. C'est pourquoi nous accompagnons nos clients à chaque étape, de la conception à la réalisation, et bien au-delà.
              </p>
            </div>
          </div>

          {/* Point de différenciation - Full Width */}
          <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border-y-4 border-amber-500 py-12 px-8 lg:px-16 my-16 -mx-6 lg:-mx-12 xl:-mx-20">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center">
                <svg className="w-8 h-8 mr-3 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Notre engagement unique : L'entretien patrimonial
              </h3>
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <p className="text-lg text-gray-700 font-medium leading-relaxed">
                    Ce qui nous distingue véritablement, c'est notre service d'entretien préventif et curatif. Contrairement à nos concurrents qui vous abandonnent après la livraison, AMMO Construction reste à vos côtés année après année.
                  </p>
                </div>
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Nous protégeons votre investissement immobilier grâce à un suivi régulier, des interventions préventives et une maintenance adaptée au climat tropical de La Réunion. Votre patrimoine conserve ainsi sa valeur et sa qualité dans le temps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-xl text-gray-700 font-medium">
              Cette approche globale fait d'AMMO Construction bien plus qu'un simple constructeur : nous sommes le gardien de votre patrimoine immobilier. De la première pierre jusqu'à l'entretien décennal, nous garantissons excellence et pérennité.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-8">
            <p className="text-xl font-semibold text-gray-800 mb-6">
              Construire avec AMMO, c'est investir dans la durabilité.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="#contact"
                className="relative inline-block px-8 py-3 overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 transition-transform duration-300 group-hover:scale-105"></span>
                <span className="relative text-white font-bold tracking-wider">
                  DISCUTONS DE VOTRE PROJET
                </span>
              </a>
              <a
                href="#services"
                className="inline-block px-8 py-3 border-2 border-amber-500 text-amber-600 font-bold tracking-wider hover:bg-amber-500/10 transition-all duration-300"
              >
                NOS SERVICES
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}