"use client";

import React from "react";
import { ProgramCard } from "./ProgramCard";
import { FadeIn } from "@/components/Animations";

export const Programs: React.FC = () => {
  const programs = [
    {
      ageRange: "3 a 5 Anos",
      name: "Curumins Baby",
      description: "Introdução lúdica ao Jiu-Jitsu focada no desenvolvimento motor básico, socialização e disciplina inicial.",
      features: [
        "Aulas de 40 minutos adaptadas",
        "Atividades e jogos cooperativos",
        "Desenvolvimento do equilíbrio e coordenação",
        "Aprendizado de comandos de respeito simples",
      ],
      colorClass: "#3b82f6", // Blue
    },
    {
      ageRange: "6 a 9 Anos",
      name: "Curumins Kids",
      description: "Foco no aprendizado técnico dos movimentos básicos, defesa pessoal anti-bullying e construção da autoconfiança.",
      features: [
        "Aulas de 50 minutos dinâmicas",
        "Técnicas de rolamento e quedas seguras",
        "Resolução de conflitos de forma pacífica",
        "Iniciação ao sistema de faixas",
      ],
      colorClass: "#8b5cf6", // Purple
    },
    {
      ageRange: "10 a 15 Anos",
      name: "Curumins Teen",
      description: "Jiu-Jitsu completo e avançado, preparação física e mental focando na autodisciplina e no espírito esportivo.",
      features: [
        "Aulas de 60 minutos técnicas",
        "Transições, raspagens e finalizações",
        "Treino de condicionamento funcional",
        "Preparação opcional para competições",
      ],
      colorClass: "#10b981", // Emerald
    },
  ];

  return (
    <section id="programs" className="py-24 bg-zinc-50 dark:bg-zinc-950/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <FadeIn direction="up">
            <span className="text-sm font-bold tracking-wider text-primary-600 dark:text-primary-400 uppercase">
              Turmas Especializadas
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white leading-tight">
              O programa ideal para cada fase de crescimento
            </h2>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Nossas turmas são rigidamente organizadas por faixa etária, permitindo que a metodologia de
              ensino seja 100% otimizada para o desenvolvimento físico e cognitivo do seu filho.
            </p>
          </FadeIn>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <FadeIn key={program.name} direction="up" delay={0.15 * idx}>
              <ProgramCard
                ageRange={program.ageRange}
                name={program.name}
                description={program.description}
                features={program.features}
                colorClass={program.colorClass}
              />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Programs;
