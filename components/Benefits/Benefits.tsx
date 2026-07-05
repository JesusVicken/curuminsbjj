"use client";

import React from "react";
import { BenefitCard } from "./BenefitCard";
import { FadeIn } from "@/components/Animations";

export const Benefits: React.FC = () => {
  const items = [
    {
      iconName: "Shield" as const,
      title: "Respeito & Disciplina",
      description:
        "O pilar básico do caminho suave. Ensinamos a importância de ouvir as lideranças da aldeia, respeitar as regras do tatame e cultivar a paciência em cada treino.",
    },
    {
      iconName: "Award" as const,
      title: "Coragem & Superação",
      description:
        "Ajudamos a desenvolver a resiliência física e mental. Cada queda ensina a criança a se levantar com coragem e determinação, buscando sempre a superação pessoal.",
    },
    {
      iconName: "Heart" as const,
      title: "Responsabilidade Social",
      description:
        "O tatame gera senso de dever com o coletivo. As crianças compreendem que suas atitudes refletem diretamente na harmonia da aldeia e da família.",
    },
    {
      iconName: "Users" as const,
      title: "Autoestima & Sonhos",
      description:
        "Ensinamos que a origem indígena e a realidade vulnerável não limitam seu potencial. O jiu-jitsu dá voz e asas aos curumins para acreditarem em seus próprios sonhos.",
    },
  ];

  return (
    <section id="benefits" className="py-32 md:py-48 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <FadeIn direction="up">
            <span className="text-xs font-bold tracking-widest text-gold-accent uppercase">
              Valores da Arte Marcial
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-[0.95] uppercase">
              Formando vencedores na vida real
            </h2>
            <p className="mt-4 text-base text-zinc-400 max-w-2xl mx-auto font-light">
              Para muitos curumins, o jiu-jitsu representa oportunidade, inclusão e um caminho extremamente 
              positivo para o futuro, desenvolvendo virtudes fundamentais.
            </p>
          </FadeIn>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((benefit, idx) => (
            <FadeIn key={benefit.title} direction="up" delay={0.1 * idx}>
              <BenefitCard
                iconName={benefit.iconName}
                title={benefit.title}
                description={benefit.description}
              />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Benefits;
