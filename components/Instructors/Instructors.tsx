"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/UI/Card";
import { FadeIn } from "@/components/Animations";
import { Icons } from "@/components/Icons";

export const Instructors: React.FC = () => {
  const team = [
    {
      name: "Daniel BJJ (Raia Norte)",
      role: "Faixa Preta • Coordenador Geral",
      bio: "Fundador e professor voluntário do Projeto Curumins BJJ. Dedica sua vida ao desenvolvimento social e esportivo de crianças indígenas na Aldeia Teko Haw.",
      beltColor: "Preta",
      gradient: "from-zinc-900 via-zinc-950 to-red-950/20",
    },
  ];

  return (
    <section id="instructors" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <FadeIn direction="up">
            <span className="text-sm font-bold tracking-wider text-gold-accent uppercase">
              Nosso Dojo & Liderança
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
              Dedicados ao Futuro das Crianças
            </h2>
            <p className="mt-4 text-base text-zinc-400 max-w-xl mx-auto font-light">
              Nossa equipe atua de forma 100% voluntária, fornecendo treinos sérios e com grande
              compromisso pedagógico diretamente na Aldeia Teko Haw.
            </p>
          </FadeIn>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 gap-12 max-w-2xl mx-auto">
          {team.map((sensei, idx) => (
            <FadeIn key={sensei.name} direction="up" delay={0.15 * idx}>
              <Card hoverEffect className={`relative overflow-hidden bg-gradient-to-br ${sensei.gradient} border-white/5`}>
                <CardHeader className="p-0 border-none">
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-wider text-gold-accent uppercase">
                      Faixa {sensei.beltColor}
                    </span>
                    <Icons.Belt className="h-6 w-6 text-gold-accent/40" />
                  </div>
                  <CardTitle className="mt-6 text-2xl font-bold tracking-tight">{sensei.name}</CardTitle>
                  <CardDescription className="text-red-accent/90">{sensei.role}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 mt-6 text-sm text-zinc-400 leading-relaxed font-light">
                  {sensei.bio}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Instructors;
