import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente - AMMO',
  description: 'Conditions générales de vente des prestations de maîtrise d\'œuvre - AMMO',
}

export default function CGV() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Conditions Générales de Vente</h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Objet</h2>
              <p>
                Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre AMMO
                et ses clients dans le cadre de prestations de maîtrise d'œuvre pour des projets de construction,
                rénovation et aménagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Prestations</h2>
              <p>
                AMMO propose des prestations de maîtrise d'œuvre comprenant :
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Conception et études de projet</li>
                <li>Coordination technique, juridique et administrative</li>
                <li>Suivi et contrôle des travaux</li>
                <li>Réception des travaux</li>
                <li>Conformité aux normes RE2020</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Devis et commande</h2>
              <p>
                Toute prestation fait l'objet d'un devis détaillé établi gratuitement sur demande du client.
                Le devis est valable 30 jours à compter de sa date d'émission. La commande est considérée comme
                définitive après signature du devis par le client et versement de l'acompte.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Tarifs et modalités de paiement</h2>
              <p>
                Les tarifs sont indiqués en euros et hors taxes. Ils sont fermes et définitifs pour la durée
                mentionnée dans le devis. Les modalités de paiement sont précisées dans chaque devis et
                peuvent inclure :
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Un acompte à la signature du contrat</li>
                <li>Des paiements échelonnés selon l'avancement du projet</li>
                <li>Un solde à la livraison du projet</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Délais d'exécution</h2>
              <p>
                Les délais d'exécution sont indiqués à titre indicatif dans le devis. AMMO s'efforce de respecter
                ces délais mais ne peut être tenu responsable des retards dus à des causes indépendantes de sa volonté
                (intempéries, cas de force majeure, retards des fournisseurs, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Responsabilité</h2>
              <p>
                AMMO est soumis à une obligation de moyens dans le cadre de ses prestations de maîtrise d'œuvre.
                Sa responsabilité ne peut être engagée que pour les dommages directs causés par une faute prouvée
                dans l'exécution de ses missions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Assurances</h2>
              <p>
                AMMO est couvert par une assurance responsabilité civile professionnelle et décennale conformément
                à la réglementation en vigueur. Les attestations d'assurance sont disponibles sur demande.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Propriété intellectuelle</h2>
              <p>
                Les études, plans et documents techniques réalisés par AMMO restent sa propriété exclusive.
                Le client dispose d'un droit d'utilisation de ces documents uniquement dans le cadre de son projet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Litiges</h2>
              <p>
                En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire.
                À défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de La Réunion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Droit applicable</h2>
              <p>
                Les présentes CGV sont soumises au droit français. En cas de contradiction entre ces CGV et toute
                autre disposition contractuelle, les présentes CGV prévalent.
              </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <p>
                Pour toute question concernant ces conditions générales de vente :
              </p>
              <p className="mt-4">
                <strong>AMMO - Maîtrise d'Œuvre</strong><br />
                2 rue Jean Paul Sartre<br />
                97419 La Possession, La Réunion<br />
                <br />
                <strong>Téléphone :</strong> +262 693 397 786<br />
                <strong>Email :</strong> info@ammo.re
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
