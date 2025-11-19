import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales - AMMO',
  description: 'Mentions légales du site AMMO - Maîtrise d\'œuvre à La Réunion',
}

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-56 pb-16">
        <div className="container mx-auto px-6 mb-12">
          <h1 className="text-4xl font-bold text-foreground text-center">Mentions Légales</h1>
        </div>

        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Éditeur du site</h2>
              <p>
                <strong>AMMO - Maîtrise d'Œuvre</strong><br />
                8 ruelle Boulot<br />
                97400 Saint-Denis<br />
                La Réunion<br />
                <br />
                <strong>Téléphone :</strong> +262 693 397 786<br />
                <strong>Email :</strong> info@ammo.re<br />
                <br />
                <strong>Conception et développement :</strong> <a href="https://digiqo.fr" className="text-secondary hover:text-amber-700 underline">digiqo.fr</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Hébergement</h2>
              <p>
                Le site est hébergé par :<br />
                <strong>Netlify, Inc.</strong><br />
                610 22nd Street, Suite 315<br />
                San Francisco, CA 94107<br />
                États-Unis
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes) est la propriété exclusive d'AMMO,
                sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication,
                même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit d'AMMO.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Données personnelles</h2>
              <p>
                Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au Règlement Général sur
                la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et
                d'opposition aux données personnelles vous concernant.
              </p>
              <p className="mt-4">
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse : info@ammo.re
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies</h2>
              <p>
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic.
                En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation de responsabilité</h2>
              <p>
                AMMO s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations
                diffusées sur ce site. Toutefois, AMMO ne peut garantir l'exactitude, la précision ou l'exhaustivité des
                informations mises à disposition sur ce site.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
