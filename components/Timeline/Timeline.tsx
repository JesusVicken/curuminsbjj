"use client";

import React from "react";
import { TimelineItem } from "./TimelineItem";
import { FadeIn } from "@/components/Animations";

export const Timeline: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Primeiro Contato (Adaptação)",
      description: "A criança conhece os professores, participa de dinâmicas lúdicas e aprende as primeiras regras de convivência e segurança no tatame de forma receptiva.",
    },
    {
      step: "02",
      title: "Desenvolvimento Técnico & Motor",
      description: "Foco no aprendizado de técnicas de rolamento, quedas amortecidas e movimentação básica de quadril, estimulando a autoconfiança física.",
    },
    {
      step: "03",
      title: "Resolução de Conflitos (Bullying)",
      description: "Instrução teórica e prática sobre como impor respeito verbalmente e usar o Jiu-Jitsu exclusivamente como legítima defesa perante situações adversas.",
    },
    {
      step: "04",
      title: "Graduação & Liderança",
      description: "Reconhecimento do esforço e mérito individual através do sistema de faixas. Alunos experientes são encorajados a auxiliarem na recepção de novatos.",
    },
  ];

  return (
    <section id="timeline" className="py-24 bg-zinc-50 dark:bg-zinc-950/40 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <FadeIn direction="up">
            <span className="text-sm font-bold tracking-wider text-primary-600 dark:text-primary-400 uppercase">
              Jornada de Evolução
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white leading-tight">
              A trajetória de crescimento do seu filho no tatame
            </h2>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Cada etapa do treinamento é estruturada para construir gradualmente a disciplina, a
              coordenação e a resiliência necessárias para vencer dentro e fora do tatame.
            </p>
          </FadeIn>
        </div>

        {/* Timeline Path */}
        <div className="relative mx-auto max-w-4xl mt-16 flex flex-col gap-16">
          {/* Vertical Connecting Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 transform -translate-x-1/2 w-0.5 bg-zinc-200 dark:bg-zinc-800" />

          {steps.map((item, idx) => (
            <FadeIn key={item.step} direction={idx % 2 === 0 ? "right" : "left"} delay={0.1 * idx}>
              <TimelineItem
                step={item.step}
                title={item.title}
                description={item.description}
                isEven={idx % 2 === 0}
              />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Timeline;
