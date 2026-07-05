import React from "react";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Fale Conosco | Curumins BJJ",
  description: "Entre em contato direto com o Sensei Daniel BJJ para tirar dúvidas, fazer visitas ou propor parcerias.",
};

export default function ContatoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden pt-[73px]">
      <Navbar />
      <main className="flex-grow">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
