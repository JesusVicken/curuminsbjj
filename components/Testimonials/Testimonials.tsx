"use client";

import React from "react";
import { FadeIn } from "@/components/Animations";
import { useLanguage } from "@/context/LanguageContext";

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

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
              {t.impact.badge}
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-[0.95] uppercase">
              {t.impact.title}
            </h2>
          </FadeIn>
        </div>

        {/* Text Content */}
        <div className="space-y-8 text-base md:text-lg text-zinc-300 font-light leading-relaxed">
          <FadeIn direction="up" delay={0.1}>
            <p>
              {t.impact.p1}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p>
              {t.impact.p2}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <blockquote className="border-l-4 border-red-accent pl-6 py-2 my-8 bg-zinc-900/30 rounded-r-2xl italic text-white font-serif">
              {t.impact.quote}
            </blockquote>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider mt-12 mb-4">
              {t.impact.subhead1}
            </h3>
            <p>
              {t.impact.p3}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.5}>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider mt-12 mb-4">
              {t.impact.subhead2}
            </h3>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex gap-4 items-start">
                <span className="text-red-accent mt-1">✦</span>
                <p><strong>{t.impact.b1Title}</strong> {t.impact.b1Desc}</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-red-accent mt-1">✦</span>
                <p><strong>{t.impact.b2Title}</strong> {t.impact.b2Desc}</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-red-accent mt-1">✦</span>
                <p><strong>{t.impact.b3Title}</strong> {t.impact.b3Desc}</p>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-red-accent mt-1">✦</span>
                <p><strong>{t.impact.b4Title}</strong> {t.impact.b4Desc}</p>
              </li>
            </ul>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <p className="mt-12 text-center text-zinc-400">
              {t.impact.p4}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.7}>
            <div className="mt-12 p-8 rounded-3xl bg-red-accent/10 border border-red-accent/20 text-center">
              <p className="text-lg text-white font-bold mb-4">
                {t.impact.ctaBoxTitle}
              </p>
              <a href="#contact" className="inline-block mt-4 px-8 py-4 bg-red-accent text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-red-600 transition-colors">
                {t.impact.ctaBoxBtn}
              </a>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
};
export default Testimonials;
