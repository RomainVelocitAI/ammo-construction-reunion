import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - AMMO',
  description: 'Politique de confidentialité du site AMMO - Maîtrise d\'œuvre à La Réunion',
}

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-56 pb-16">
        <div className="container mx-auto px-6 mb-12">
          <h1 className="text-4xl font-bold text-gray-900 text-center">Politique de Confidentialité</h1>
        </div>

        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Collecte des données</h2>
              <p>
                AMMO s'engage à protéger la vie privée de ses utilisateurs. Les données personnelles collectées via le formulaire
                de contact (nom, prénom, email, téléphone) sont utilisées uniquement pour répondre à vos demandes de devis et
                vous contacter dans le cadre de nos services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Utilisation des données</h2>
              <p>
                Les informations collectées sont destinées à un usage interne uniquement et ne seront jamais vendues, louées
                ou partagées avec des tiers sans votre consentement explicite, sauf obligation légale.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vos droits RGPD</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="list-disc ml-6 mt-4 space-y-2">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l'effacement (« droit à l'oubli »)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit d'opposition au traitement</li>
                <li>Droit à la portabilité de vos données</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse : info@ammo.re
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Durée de conservation</h2>
              <p>
                Vos données personnelles sont conservées pendant la durée nécessaire à la réalisation de la finalité pour
                laquelle elles ont été collectées, puis archivées conformément aux obligations légales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sécurité des données</h2>
              <p>
                AMMO met en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données
                personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic.
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines
                fonctionnalités du site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modifications</h2>
              <p>
                AMMO se réserve le droit de modifier cette politique de confidentialité à tout moment.
                Les modifications seront publiées sur cette page avec une date de mise à jour.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
