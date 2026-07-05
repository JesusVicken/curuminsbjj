import React from "react";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Sponsors } from "@/components/Sponsors";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Apoie o Projeto | Curumins BJJ",
  description: "Faça sua contribuição voluntária ou nos ajude a custear o transporte das crianças indígenas para a competição de 16 de maio.",
};

export default function ApoiePage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden pt-[73px]">
      <Navbar />
      <main className="flex-grow">
        {/* Contact features the transport support and donation forms */}
        <Contact />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
