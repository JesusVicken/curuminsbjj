"use client";

import React from "react";
import { TestimonialCard } from "./TestimonialCard";
import { FadeIn } from "@/components/Animations";

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote:
        "O comportamento do Pedro mudou drasticamente em casa e na escola. Ele está muito mais calmo, focado e aprendeu a respeitar os limites que antes ele desafiava. Super recomendo!",
      author: "Juliana Silva",
      role: "Mãe",
      childName: "Pedro (8 anos)",
    },
    {
      quote:
        "Estávamos preocupados com bullying na escola. No Curumins BJJ, o Arthur aprendeu a se defender e, mais importante, ganhou confiança para impor respeito sem precisar brigar.",
      author: "Ricardo Souza",
      role: "Pai",
      childName: "Arthur (11 anos)",
    },
    {
      quote:
        "A metodologia lúdica das aulas do baby é incrível! Minha filha de 4 anos adora as dinâmicas e já desenvolveu um equilíbrio e coordenação motora fantásticos.",
      author: "Mariana Costa",
      role: "Mãe",
      childName: "Beatriz (4 anos)",
    },
  ];

  return (
    <section id="testimonials" className="py-32 md:py-48 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <FadeIn direction="up">
            <span className="text-xs font-bold tracking-widest text-gold-accent uppercase">
              Depoimentos
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-[0.95] uppercase">
              O impacto nas famílias dos nossos pequenos campeões
            </h2>
            <p className="mt-4 text-base text-zinc-400 max-w-2xl mx-auto font-light">
              Nossa maior recompensa é ver a transformação das crianças refletida no orgulho e na
              tranquilidade de suas famílias.
            </p>
          </FadeIn>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <FadeIn key={review.author} direction="up" delay={0.15 * idx}>
              <TestimonialCard
                quote={review.quote}
                author={review.author}
                role={review.role}
                childName={review.childName}
              />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Testimonials;
