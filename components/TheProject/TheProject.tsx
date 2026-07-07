"use client";

import React from "react";
import { FadeIn } from "@/components/Animations";

export const TheProject: React.FC = () => {
  return (
    <section id="project" className="relative py-32 md:py-48 bg-zinc-950 overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute bottom-0 left-1/4 translate-y-1/2 w-96 h-96 bg-red-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Main Storytelling Heading */}
          <div className="lg:col-span-6">
            <FadeIn direction="right">
              <span className="text-xs font-bold uppercase tracking-widest text-red-accent">
                Inclusão & Transformação
              </span>
              <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl leading-tight uppercase">
                Jiu-jitsu como catalisador de <span className="text-red-accent">futuros</span>.
              </h2>
              <p className="mt-8 text-lg text-zinc-300 leading-relaxed font-light">
                O projeto Curumins BJJ atua diretamente dentro da Aldeia Teko Haw, em Brasília, 
                trazendo a filosofia milenar das artes marciais para crianças indígenas. Com o apoio 
                da comunidade e de mestres como Renzo Gracie, o jiu-jitsu transforma rotinas e salva vidas.
              </p>
              <p className="mt-6 text-base text-zinc-400 leading-relaxed font-light">
                Conforme destacado por reportagens do G1 e da Record TV, a prática reforça a autoestima, a 
                disciplina e valoriza a rica cultura indígena. Mais do que formar atletas, o projeto cria 
                cidadãos fortes, preparados para os desafios dentro e fora da aldeia.
              </p>
            </FadeIn>
          </div>

          {/* Pictures Collage Showcase */}
          <div className="lg:col-span-6 select-none pointer-events-auto">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative flex items-center justify-center gap-6 h-[400px] md:h-[500px]">
                
                {/* Pajé image card */}
                <div className="w-1/2 h-[90%] rounded-[32px] overflow-hidden border border-white/5 shadow-2xl relative group">
                  <img
                    src="/paje.webp"
                    alt="Liderança da Aldeia"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/85 backdrop-blur px-4 py-2 rounded-2xl text-[9px] text-white font-bold uppercase tracking-widest border border-white/5">
                    Conexão Comunitária
                  </div>
                </div>

                {/* Team BJJ Hero image card */}
                <div className="w-1/2 h-[90%] rounded-[32px] overflow-hidden border border-white/5 shadow-2xl relative group translate-y-8">
                  <img
                    src="/hero.webp"
                    alt="Equipe Curumins"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/85 backdrop-blur px-4 py-2 rounded-2xl text-[9px] text-white font-bold uppercase tracking-widest border border-white/5">
                    União no Tatame
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
export default TheProject;
