"use client";

import React, { useRef } from "react";
import { Button } from "@/components/UI/Button";
import { Icons } from "@/components/Icons";
import { gsap } from "@/lib/gsap";

// Reusable inline helper to split text into masked characters for animation
interface SplitTextProps {
  text: string;
  className?: string;
  charClassName?: string;
}

const SplitText: React.FC<SplitTextProps> = ({ text, className, charClassName }) => {
  return (
    <span className={className}>
      {text.split(" ").map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap overflow-hidden mr-[0.15em] leading-none py-1">
          {word.split("").map((char, charIdx) => (
            <span
              key={charIdx}
              className={`inline-block translate-y-[100%] hero-text-char ${charClassName}`}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
};

export const HeroContent: React.FC = () => {
  const primaryBtnRef = useRef<HTMLButtonElement>(null);
  const secondaryBtnRef = useRef<HTMLButtonElement>(null);

  // Magnetic Button Effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>, ref: React.RefObject<HTMLButtonElement | null>) => {
    const btn = ref.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    gsap.to(btn, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (ref: React.RefObject<HTMLButtonElement | null>) => {
    const btn = ref.current;
    if (!btn) return;

    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)"
    });
  };

  return (
    <div className="flex flex-col justify-center items-center text-center w-full max-w-4xl mx-auto z-10 select-none">
      {/* Badge */}
      <div className="hero-badge opacity-0 translate-y-4 inline-flex items-center gap-2 rounded-full border border-gold-accent/20 bg-gold-accent/5 px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase text-gold-accent mb-8">
        <Icons.Award className="h-4 w-4 text-gold-accent" />
        <span>O Dojo de Referência para Jovens Campeões</span>
      </div>

      {/* Massive Display Title with Split Character Masking */}
      <h1 className="font-display text-4xl sm:text-7xl lg:text-8.5xl font-black leading-none text-white tracking-tight uppercase">
        <SplitText text="FORJANDO" className="block" />
        <SplitText text="CARÁTER NO" className="block text-red-accent" />
        <SplitText text="TATAME" className="block" />
      </h1>

      {/* Hero Description */}
      <p className="hero-description opacity-0 translate-y-6 mt-8 text-base sm:text-lg leading-relaxed text-zinc-400 font-light max-w-xl">
        O Jiu-Jitsu como uma ferramenta educacional. Ensinamos disciplina, 
        autoestima e o respeito mútuo necessários para vencer na vida real.
      </p>

      {/* Interactive Magnetic CTA Actions */}
      <div className="hero-actions opacity-0 translate-y-8 mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
        <div className="w-full sm:w-auto">
          <Button
            ref={primaryBtnRef}
            variant="gold"
            size="lg"
            className="w-full sm:w-auto hover:scale-105 transition-transform"
            onMouseMove={(e) => handleMouseMove(e, primaryBtnRef)}
            onMouseLeave={() => handleMouseLeave(primaryBtnRef)}
            onClick={() => (window.location.href = "#contact")}
          >
            Como Ajudar
          </Button>
        </div>
        <div className="w-full sm:w-auto">
          <Button
            ref={secondaryBtnRef}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto hover:scale-105 transition-transform"
            onMouseMove={(e) => handleMouseMove(e, secondaryBtnRef)}
            onMouseLeave={() => handleMouseLeave(secondaryBtnRef)}
            onClick={() => (window.location.href = "#project")}
          >
            Nossa Filosofia
          </Button>
        </div>
      </div>
    </div>
  );
};
export default HeroContent;
