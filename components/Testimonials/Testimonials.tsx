"use client";

import React from "react";
import { FadeIn } from "@/components/Animations";

export const Testimonials: React.FC = () => {
  return (
    <section id="impacto" className="relative py-32 md:py-48 bg-zinc-950 overflow-hidden border-t border-white/5">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-40"
        style={{ backgroundImage: "url('/image4.jpg')" }}
      />
      {/* Gradient fading masks for scroll effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
      <div className="absolute inset-0 z-0 bg-zinc-950/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <span className="text-xs font-bold tracking-widest text-red-accent uppercase">
              A Realidade do Projeto
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-[0.95] uppercase">
              Força de Vontade e Solidariedade
            </h2>
          </FadeIn>
        </div>

        {/* Text Content */}
        <div className="space-y-8 text-base md:text-lg text-zinc-300 font-light leading-relaxed">
          <FadeIn direction="up" delay={0.1}>
            <p>
              À frente da iniciativa está o mestre Daniel Lino, responsável por transformar o jiu-jitsu em ponte de oportunidade para as crianças da aldeia. Tudo ali nasce de força de vontade e solidariedade: sem apoio fixo, Daniel mantém o projeto praticamente sozinho. Desde 2023, ele viaja duas vezes por mês para dar aula, custeando gasolina, lanche e até as inscrições em campeonatos — cada ida à aldeia sai por cerca de R$ 300.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p>
              O esforço já mostra resultados: algumas crianças competem, vencem e ampliam o orgulho da comunidade. Para Daniel, cada treino é mais do que técnica; é futuro sendo construído no chão de tatame improvisado.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <blockquote className="border-l-4 border-red-accent pl-6 py-2 my-8 bg-zinc-900/30 rounded-r-2xl italic text-white font-serif">
              Para muitos, o Jiu-Jítsu passou a representar esperança. Um dos pais relatou como o treino mudou a postura do filho: "Hoje, ele está mais focado, mais educado e sonha em competir".
            </blockquote>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider mt-12 mb-4">
              Impacto que vai além do tatame
            </h3>
            <p>
              Daniel afirma que o jiu-jítsu tem ajudado a resgatar valores fundamentais para a vida: foco, respeito, autoconfiança, trabalho em equipe e fortalecimento da cultura — já que, segundo ele, aprende tanto quanto ensina. Apesar das dificuldades — falta de apoio financeiro fixo, doações esporádicas e desafios logísticos — o Curumins segue firme, movido pela fé no esporte como agente de transformação social.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.5}>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider mt-12 mb-4">
              Por que iniciativas como essa fazem diferença
            </h3>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex gap-4 items-start">
                <span className="text-red-accent mt-1">✦</span>
                <p><strong>Inclusão real:</strong> o esporte gratuito abre portas para quem, muitas vezes, não teria acesso a atividades estruturadas.</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-red-accent mt-1">✦</span>
                <p><strong>Desenvolvimento pessoal e social:</strong> os jovens aprendem disciplina, autocontrole, cooperação e autoestima.</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-red-accent mt-1">✦</span>
                <p><strong>Valorização cultural e comunitária:</strong> o projeto aproxima as crianças de suas raízes, respeitando etnias e tradições.</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-red-accent mt-1">✦</span>
                <p><strong>Alternativa ao ciclo da vulnerabilidade:</strong> o tatame representa uma saída segura, saudável e de esperança.</p>
              </li>
            </ul>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <p className="mt-12 text-center text-zinc-400">
              O Instituto Projeto Curumins BJJ mostra como o esporte — bem estruturado, com olhar humano e respeito à diversidade — pode ser uma ponte entre gerações, culturas, sonhos e futuro.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.7}>
            <div className="mt-12 p-8 rounded-3xl bg-red-accent/10 border border-red-accent/20 text-center">
              <p className="text-lg text-white font-bold mb-4">
                Qualquer empresa ou pessoa que deseje investir em esporte, cidadania e transformação social encontra aqui uma iniciativa séria, transparente e que já muda vidas.
              </p>
              <a href="#contact" className="inline-block mt-4 px-8 py-4 bg-red-accent text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-red-600 transition-colors">
                Quer apoiar? Faça parte
              </a>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
};
export default Testimonials;
