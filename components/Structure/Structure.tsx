"use client";

import React from "react";
import { FadeIn } from "@/components/Animations";

export const Structure: React.FC = () => {
  return (
    <section id="estrutura" className="relative py-32 md:py-48 bg-zinc-950 overflow-hidden border-t border-white/5">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Image */}
          <div className="lg:col-span-7 select-none pointer-events-auto order-2 lg:order-1">
            <FadeIn direction="right">
              <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group">
                <img
                  src="/estrutura.webp"
                  alt="Estrutura do Instituto Projeto Curumins BJJ"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-red-accent bg-zinc-950/80 backdrop-blur px-3 py-1.5 rounded-full border border-red-accent/20">
                    Sede do Projeto
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <FadeIn direction="left">
              <span className="text-xs font-bold uppercase tracking-widest text-red-accent">
                Nossa Estrutura
              </span>
              <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-[1.1] uppercase">
                Onde a transformação acontece
              </h2>
              <p className="mt-8 text-lg text-zinc-300 leading-relaxed font-light">
                Muito além de um simples espaço físico, nossa estrutura dentro da Aldeia Teko Haw é o verdadeiro coração do **Instituto Projeto Curumins BJJ**. É aqui que o suor se transforma em esperança e disciplina todos os dias.
              </p>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-900 border border-white/10 text-red-accent">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold tracking-wide uppercase text-sm">Espaço Seguro</h3>
                    <p className="mt-2 text-sm text-zinc-400 leading-relaxed font-light">Um ambiente protegido e preparado especificamente para acolher as crianças da comunidade com segurança.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-900 border border-white/10 text-red-accent">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold tracking-wide uppercase text-sm">Tatame Oficial</h3>
                    <p className="mt-2 text-sm text-zinc-400 leading-relaxed font-light">Área de treino montada com doações, garantindo o padrão necessário para a prática adequada do jiu-jitsu.</p>
                  </div>
                </li>
              </ul>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Structure;
