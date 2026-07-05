import React from "react";
import { Navbar } from "@/components/Navbar";
import { Press } from "@/components/Press";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Imprensa e Galeria | Curumins BJJ",
  description: "Acompanhe as reportagens do G1 e Record R7 e veja a galeria de imagens das aulas de jiu-jitsu na Aldeia Teko Haw em Brasília.",
};

export default function ImprensaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden pt-[73px]">
      <Navbar />
      <main className="flex-grow">
        <Press />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
