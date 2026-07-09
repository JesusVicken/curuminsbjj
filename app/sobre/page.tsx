"use client";

import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { OurMission } from "@/components/OurMission";
import { Instructors } from "@/components/Instructors";
import { Benefits } from "@/components/Benefits";
import { Footer } from "@/components/Footer";
import { initLenis } from "@/lib/lenis";

export default function Sobre() {
  useEffect(() => {
    const lenisInstance = initLenis();
    return () => {
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden pt-[88px]">
      <Navbar />

      <main className="flex-grow">
        <About />
        
        {/* Environment Mixed Media Section */}
        <section className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold tracking-widest text-red-accent uppercase">A Realidade da Aldeia</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white uppercase">
                Nosso Ambiente
              </h2>
              <p className="mt-4 text-zinc-400 font-light text-lg">
                É na simplicidade da estrutura que mora a força da nossa comunidade. Treinamos com a natureza, 
                e cada quimono doado, cada tatame montado representa esperança.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Media Cards */}
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-80 relative group">
                <img src="/imagesprojeto/projeto13.jpeg" alt="Ambiente do projeto" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-white font-bold uppercase tracking-widest text-xs">Treino Coletivo</div>
              </div>
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-80 relative group">
                <video src="/imagesprojeto/videoprojeto11.mp4" controls className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" poster="/logocurumin.png" preload="metadata" />
              </div>
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-80 relative group lg:col-span-1 md:col-span-2">
                <img src="/imagesprojeto/projeto10.jpeg" alt="Alegria no tatame" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-white font-bold uppercase tracking-widest text-xs">Alegria & União</div>
              </div>
            </div>
          </div>
        </section>

        <OurMission />
        <Benefits />
        <Instructors />
      </main>

      <Footer />
    </div>
  );
}
