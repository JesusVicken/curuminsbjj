"use client";

import React from "react";
import { FadeIn } from "@/components/Animations";

export const TheProject: React.FC = () => {
  return (
    <section id="project" className="relative py-32 md:py-48 bg-zinc-950 overflow-hidden">
      {/* Elegant Half-Logo Background */}
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 opacity-10 pointer-events-none -translate-x-1/2 translate-y-1/3">
        <img 
          src="/logocurumin.png" 
          alt="Curumin Background" 
          className="w-full h-full object-contain" 
        />
      </div>

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
              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6">
                
                {/* Pajé image card */}
                <div className="w-full sm:w-5/12 h-[300px] md:h-[400px] rounded-[32px] overflow-hidden border border-white/5 shadow-2xl relative group">
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

                {/* Team BJJ Hero image card (16:9 aspect ratio support) */}
                <div className="w-full sm:w-7/12 aspect-video sm:aspect-auto sm:h-[400px] rounded-[32px] overflow-hidden border border-white/5 shadow-2xl relative group sm:translate-y-8 flex items-center bg-zinc-900">
                  <img
                    src="/hero.webp"
                    alt="Equipe Curumins"
                    className="w-full h-full object-contain sm:object-cover transition-transform duration-500 group-hover:scale-105"
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
