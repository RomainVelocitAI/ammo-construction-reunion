import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProjetsEnvergureContent } from "./content";

export const metadata: Metadata = {
  title: "Projets d'Envergure | Groupe AMMO La Réunion",
  description:
    "Lodges touristiques, programmes immobiliers et projets professionnels. Un contractant général, un interlocuteur unique à La Réunion.",
};

export default function ProjetsEnvergurePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <ProjetsEnvergureContent />
      </main>
      <Footer />
    </>
  );
}
