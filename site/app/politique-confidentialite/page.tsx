import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - AMMO',
  description: 'Politique de confidentialité et protection des données personnelles - AMMO',
}

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Collecte des données personnelles</h2>
              <p>
                Nous collectons les données personnelles suivantes lorsque vous utilisez notre site ou nous contactez :
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Informations relatives à votre projet</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Utilisation des données</h2>
              <p>
                Les données collectées sont utilisées pour :
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Répondre à vos demandes de contact et de devis</li>
                <li>Gérer la relation client</li>
                <li>Améliorer nos services</li>
                <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Conservation des données</h2>
              <p>
                Vos données personnelles sont conservées pendant la durée nécessaire à la gestion de votre demande
                et pendant une durée maximale de 3 ans à compter de notre dernier contact.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Vos droits</h2>
              <p>
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit d'opposition</li>
                <li>Droit à la portabilité</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à : <strong>info@ammo.re</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Sécurité des données</h2>
              <p>
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour assurer
                la sécurité de vos données personnelles et empêcher leur altération, leur perte ou l'accès non autorisé.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies</h2>
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic.
                Vous pouvez paramétrer votre navigateur pour refuser les cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Modifications</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
                Les modifications seront publiées sur cette page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter :
              </p>
              <p className="mt-4">
                <strong>Par email :</strong> info@ammo.re<br />
                <strong>Par téléphone :</strong> +262 693 397 786<br />
                <strong>Par courrier :</strong> AMMO, 8 ruelle Boulot, 97400 Saint-Denis, La Réunion
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
