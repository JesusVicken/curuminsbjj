import React from "react";
import { Navbar } from "@/components/Navbar";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "FAQ - Dúvidas Frequentes | Curumins BJJ",
  description: "Esclareça suas dúvidas sobre a rotina de treinos na aldeia, faixas etárias, segurança e doações de kimonos.",
};

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden pt-[73px]">
      <Navbar />
      <main className="flex-grow">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
