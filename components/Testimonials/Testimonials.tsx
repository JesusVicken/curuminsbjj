"use client";

import React from "react";
import { TestimonialCard } from "./TestimonialCard";
import { FadeIn } from "@/components/Animations";

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote:
        "O jiu-jitsu trouxe uma nova perspectiva para as nossas crianças. Eles estão mais focados, respeitosos e orgulhosos de suas raízes. É muito mais do que esporte, é resgate cultural.",
      author: "Cacique Raoni",
      role: "Liderança",
      childName: "Comunidade Teko Haw",
    },
    {
      quote:
        "Antes o tempo ocioso era uma preocupação. Hoje, o tatame é o lugar onde eles mais querem estar. A disciplina e a alegria deles transformaram o clima na aldeia toda.",
      author: "Maria Guajajara",
      role: "Mãe",
      childName: "Kauê (9 anos)",
    },
    {
      quote:
        "Eu vi o respeito pelas tradições aumentar. Eles lutam no tatame, mas também lutam pelo orgulho do nosso povo. O projeto é uma bênção para a nossa juventude.",
      author: "Tainá Pataxó",
      role: "Professora Local",
      childName: "Aldeia Teko Haw",
    },
  ];

  return (
    <section id="testimonials" className="py-32 md:py-48 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <FadeIn direction="up">
            <span className="text-xs font-bold tracking-widest text-red-accent uppercase">
              Vozes da Aldeia
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-[0.95] uppercase">
              O impacto real na nossa comunidade
            </h2>
            <p className="mt-4 text-base text-zinc-400 max-w-2xl mx-auto font-light">
              Não se trata apenas de formar campeões nos tatames, mas de forjar cidadãos com 
              orgulho, disciplina e uma base cultural forte.
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
