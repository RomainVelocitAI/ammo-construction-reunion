import type { Metadata } from "next";
import { Big_Shoulders_Inline, Sofia_Sans_Extra_Condensed, Bellota_Text, Rajdhani } from "next/font/google";
import "./globals.css";

// GROS TITRE - BIG SHOULDERS INLINE
const bigShouldersInline = Big_Shoulders_Inline({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Sous titre - Sofia Sans Extra Condensed
const sofiaSans = Sofia_Sans_Extra_Condensed({
  variable: "--font-subheading",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

// CORPS DE TEXTE - Bellota Text
const bellotaText = Bellota_Text({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

// NOTES - Rajdhani
const rajdhani = Rajdhani({
  variable: "--font-notes",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ammo.re'),
  title: {
    default: 'Groupe AMMO | Bâtiment à La Réunion',
    template: '%s | Groupe AMMO',
  },
  description: 'AMMO maîtrise toute la chaîne de valeur du bâtiment à La Réunion : conception, maîtrise d\'œuvre, contractant général, second œuvre. 15+ ans d\'expérience.',
  keywords: ['groupe AMMO', 'bâtiment La Réunion', 'contractant général', 'maîtrise d\'œuvre', 'conception', 'rénovation 974', 'second œuvre', 'finitions', 'Saint-Denis'],
  authors: [{ name: 'AMMO', url: 'https://ammo.re' }],
  creator: 'AMMO',
  publisher: 'AMMO',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://ammo.re',
    siteName: 'Groupe AMMO',
    title: 'Groupe AMMO | Bâtiment à La Réunion',
    description: 'AMMO maîtrise toute la chaîne de valeur du bâtiment à La Réunion : conception, maîtrise d\'œuvre, contractant général, second œuvre. 15+ ans d\'expérience.',
    images: [
      {
        url: 'https://ammo.re/logo.png',
        width: 1200,
        height: 630,
        alt: 'Groupe AMMO - Bâtiment La Réunion',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-code-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR">
      <head>
        <meta name="theme-color" content="#D6B363" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${bigShouldersInline.variable} ${sofiaSans.variable} ${bellotaText.variable} ${rajdhani.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
