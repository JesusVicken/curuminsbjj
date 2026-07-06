"use client";

import React from "react";
import { FadeIn } from "@/components/Animations";

export const OurMission: React.FC = () => {
  return (
    <section id="mission" className="relative py-32 md:py-40 bg-zinc-950 overflow-hidden border-y border-white/5">
      {/* Background Image with Fixed Attachment for Parallax */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30 grayscale-[50%]"
        style={{ backgroundImage: "url('/estrutrura.webp')" }}
      />
      <div className="absolute inset-0 z-0 bg-zinc-950/80" />

      {/* Decorative Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center">
        <FadeIn direction="up">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-accent">
            Nosso Compromisso
          </span>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <blockquote className="mt-8 font-display text-2xl md:text-5xl font-bold tracking-tight text-white leading-normal md:leading-relaxed">
            &ldquo;Utilizar o jiu-jitsu como ferramenta de
            <span className="text-red-accent"> inclusão social</span>, transmitindo os valores da arte marcial para 
            contribuir no desenvolvimento diário e na formação pessoal de crianças indígenas.&rdquo;
          </blockquote>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-gold-accent/40" />
            <p className="text-sm font-sans font-semibold uppercase tracking-widest text-gold-accent">
              Metodologia Curumins BJJ
            </p>
            <span className="h-px w-8 bg-gold-accent/40" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
export default OurMission;
