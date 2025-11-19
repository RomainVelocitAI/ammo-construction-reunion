import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente - AMMO',
  description: 'Conditions générales de vente d\'AMMO - Maîtrise d\'œuvre à La Réunion',
}

export default function CGV() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-56 pb-16">
        <div className="container mx-auto px-6 mb-12">
          <h1 className="text-4xl font-bold text-foreground text-center">Conditions Générales de Vente</h1>
        </div>

        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 1 - Objet</h2>
              <p>
                Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre AMMO - Maîtrise d'Œuvre
                et ses clients dans le cadre de la fourniture de services de maîtrise d'œuvre pour des projets de construction,
                rénovation et aménagement à La Réunion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 2 - Services proposés</h2>
              <p>
                AMMO propose les services suivants :
              </p>
              <ul className="list-disc ml-6 mt-4 space-y-2">
                <li>Conception et suivi de projets de construction de villas contemporaines</li>
                <li>Rénovation complète et modernisation d'habitations</li>
                <li>Extension et agrandissement de maisons</li>
                <li>Aménagement extérieur (terrasses, cuisines extérieures, kiosques)</li>
                <li>Réalisation de lodges de luxe</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 3 - Devis</h2>
              <p>
                Tout projet débute par l'établissement d'un devis gratuit et sans engagement. Le devis est valable 30 jours
                à compter de sa date d'émission. Passé ce délai, AMMO se réserve le droit de réviser les prix en fonction
                des variations du marché.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 4 - Commande et acceptation</h2>
              <p>
                La commande est formalisée par la signature du devis accompagnée du versement d'un acompte de 30% du montant total.
                Cette signature vaut acceptation pleine et entière des présentes conditions générales de vente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 5 - Prix et paiement</h2>
              <p>
                Les prix sont exprimés en euros, hors taxes. Le paiement s'effectue selon l'échéancier suivant :
              </p>
              <ul className="list-disc ml-6 mt-4 space-y-2">
                <li>30% à la signature du contrat</li>
                <li>40% au démarrage des travaux</li>
                <li>20% à mi-parcours du chantier</li>
                <li>10% à la réception des travaux</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 6 - Délais d'exécution</h2>
              <p>
                Les délais d'exécution sont donnés à titre indicatif. Tout retard dans la réalisation ne peut donner lieu à
                des pénalités ou à l'annulation de la commande, sauf si ce retard dépasse 60 jours calendaires et n'est pas
                imputable à des causes indépendantes de la volonté d'AMMO.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 7 - Responsabilité</h2>
              <p>
                AMMO souscrit une assurance responsabilité civile professionnelle et une garantie décennale conformément à la
                réglementation en vigueur. La responsabilité d'AMMO ne peut être engagée en cas de non-respect des règles
                d'urbanisme par le client ou en cas de force majeure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 8 - Résiliation</h2>
              <p>
                En cas de résiliation du contrat par le client avant l'achèvement des travaux, celui-ci sera redevable des
                sommes correspondant aux prestations déjà effectuées, ainsi que d'une indemnité forfaitaire de 20% du montant
                restant dû.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Article 9 - Litiges</h2>
              <p>
                En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut, les tribunaux
                de Saint-Denis de La Réunion seront seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
