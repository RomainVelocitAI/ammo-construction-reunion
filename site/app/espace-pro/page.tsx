import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { EspaceProContent } from './content'

export const metadata: Metadata = {
  title: 'Espace Pro | Devenir Partenaire AMMO',
  description: 'Rejoignez le réseau AMMO : sous-traitants et partenaires qualifiés recherchés dans tous les corps de métier à La Réunion.',
}

export default function EspaceProPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <EspaceProContent />
      </main>
      <Footer />
    </>
  )
}
