"use client";

import React from "react";
import { FadeIn } from "@/components/Animations";
import { Icons } from "@/components/Icons";

export const Instructors: React.FC = () => {
  return (
    <section id="idealizador" className="py-32 md:py-48 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      {/* Glow effect and Parallax Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-20"
        style={{ backgroundImage: "url('/imagesprojeto/projeto16.jpeg')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950" />
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-red-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <FadeIn direction="up">
            <span className="text-sm font-bold tracking-widest text-gold-accent uppercase">
              O Idealizador
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl leading-[0.95] uppercase">
              Daniel <span className="text-red-accent">Badke Lino</span>
            </h2>
            <p className="mt-6 text-base text-zinc-400 max-w-2xl font-light leading-relaxed">
              Faixa Preta 1º Grau • Especialista em Jiu-Jitsu Infantil • Profissional de Educação Física (CREF/DF 5646). 
              Uma trajetória de mais de 20 anos no esporte, dedicada à inclusão social e ao ensino humanizado.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Photo & Contact */}
          <div className="lg:col-span-5 relative">
            <FadeIn direction="right">
              <div className="relative aspect-square md:aspect-[3/4] lg:aspect-[4/5] rounded-[2rem] overflow-hidden group shadow-2xl border border-white/10">
                <img 
                  src="/hero.webp" 
                  alt="Professor Daniel Badke Lino" 
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex gap-4">
                    <a href="https://instagram.com/danielbadkelino" target="_blank" rel="noreferrer" className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold-accent hover:text-zinc-950 transition-colors border border-white/20">
                      <Icons.Instagram className="h-5 w-5" />
                    </a>
                    <a href="mailto:daniellino4311@gmail.com" className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold-accent hover:text-zinc-950 transition-colors border border-white/20">
                      <Icons.Mail className="h-5 w-5" />
                    </a>
                    <a href="https://wa.me/5561981514085" target="_blank" rel="noreferrer" className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold-accent hover:text-zinc-950 transition-colors border border-white/20">
                      <Icons.Phone className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Curriculum Details */}
          <div className="lg:col-span-7 flex flex-col gap-16">
            
            {/* Redes Sociais */}
            <FadeIn direction="up" delay={0.1}>
              <div className="space-y-6">
                <h3 className="text-xl font-display font-bold text-white uppercase tracking-wide border-b border-white/10 pb-4 flex items-center gap-3">
                  <Icons.Instagram className="h-6 w-6 text-red-accent" /> Redes Sociais
                </h3>
                <div className="flex flex-col gap-3">
                  <a href="https://instagram.com/danielbadkelino" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-300 font-medium hover:text-white transition-colors w-fit">
                    <span className="text-red-accent">@</span>instagram/danielbadkelino
                  </a>
                  <a href="https://instagram.com/projetocuruminsbjj" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-300 font-medium hover:text-white transition-colors w-fit">
                    <span className="text-red-accent">@</span>projetocuruminsbjj
                  </a>
                  <a href="https://instagram.com/raianorteesportes" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-300 font-medium hover:text-white transition-colors w-fit">
                    <span className="text-red-accent">@</span>raianorteesportes
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Formação & Cursos */}
            <FadeIn direction="up" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-display font-bold text-white uppercase tracking-wide border-b border-white/10 pb-4 flex items-center gap-3">
                  <Icons.Award className="h-6 w-6 text-gold-accent" /> Acadêmico & Cursos
                </h3>
                <ul className="space-y-4 text-zinc-400 font-light text-sm">
                  <li className="flex gap-3"><span className="text-gold-accent mt-0.5">✦</span> Formado em Educação Física (2006) - Faculdade Alvorada</li>
                  <li className="flex gap-3"><span className="text-gold-accent mt-0.5">✦</span> Pós-Graduado na Austrália (2009) - TAFE, Fluente em Inglês</li>
                  <li className="flex gap-3"><span className="text-gold-accent mt-0.5">✦</span> Curso de Metodologia de Jiu-Jitsu Infantil de Ensino (2022)</li>
                  <li className="flex gap-3"><span className="text-gold-accent mt-0.5">✦</span> Capacitação de Instrutores Gracie Barra (2021-2024)</li>
                  <li className="flex gap-3"><span className="text-gold-accent mt-0.5">✦</span> Curso de Defesa Pessoal & Primeiros Socorros no Tatame (2023)</li>
                </ul>
              </div>
            </FadeIn>

            {/* Projetos Envolvidos */}
            <FadeIn direction="up" delay={0.3}>
              <div className="space-y-6">
                <h3 className="text-xl font-display font-bold text-white uppercase tracking-wide border-b border-white/10 pb-4 flex items-center gap-3">
                  <Icons.Heart className="h-6 w-6 text-red-accent" /> Projetos & Impacto Social
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5">
                    <h4 className="text-white font-bold text-sm mb-2">Curumins BJJ</h4>
                    <p className="text-xs text-zinc-400">Idealizador e precursor do projeto social para crianças indígenas na Aldeia Teko Haw.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5">
                    <h4 className="text-white font-bold text-sm mb-2">Raia Norte Esportes</h4>
                    <p className="text-xs text-zinc-400">Precursor do projeto de esportes aquáticos e líder do Natal Solidário (10+ anos).</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5">
                    <h4 className="text-white font-bold text-sm mb-2">Superação SUP</h4>
                    <p className="text-xs text-zinc-400">Precursor do projeto Stand Up Paddle focado em cadeirantes e inclusão.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5">
                    <h4 className="text-white font-bold text-sm mb-2">Tocha Olímpica</h4>
                    <p className="text-xs text-zinc-400">Condutor oficial da Tocha Olímpica (2016) em reconhecimento ao seu impacto no esporte.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Experiência Profissional */}
            <FadeIn direction="up" delay={0.4}>
              <div className="space-y-6">
                <h3 className="text-xl font-display font-bold text-white uppercase tracking-wide border-b border-white/10 pb-4 flex items-center gap-3">
                  <Icons.Briefcase className="h-6 w-6 text-gold-accent" /> Experiência Profissional
                </h3>
                <ul className="space-y-4 text-zinc-400 font-light text-sm">
                  <li className="flex gap-3"><span className="text-zinc-600 mt-0.5">▪</span> Professor de Jiu-Jitsu Infantil (Escola Americana de Brasília, Gracie Barra, Martial 81)</li>
                  <li className="flex gap-3"><span className="text-zinc-600 mt-0.5">▪</span> Professor Particular de BJJ Infantil e Adulto</li>
                  <li className="flex gap-3"><span className="text-zinc-600 mt-0.5">▪</span> Personal Trainer & Instrutor de Musculação (Cia do Corpo, Fitcorp, etc.)</li>
                  <li className="flex gap-3"><span className="text-zinc-600 mt-0.5">▪</span> Instrutor de Esportes Aquáticos (Canoa Havaiana, Kitesurf, SUP)</li>
                </ul>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
};
export default Instructors;
