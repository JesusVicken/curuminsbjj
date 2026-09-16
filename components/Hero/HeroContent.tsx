"use client";

import React, { useRef, useState } from "react";
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
        <span key={wordIdx} className="inline-block whitespace-nowrap overflow-hidden mr-[0.18em] leading-none py-1">
          {word.split("").map((char, charIdx) => (
            <span
              key={charIdx}
              className={`inline-block hero-text-char ${charClassName || ""}`}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
};

import { useLanguage } from "@/context/LanguageContext";

export const HeroContent: React.FC = () => {
  const primaryBtnRef = useRef<HTMLButtonElement>(null);
  const secondaryBtnRef = useRef<HTMLButtonElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language, t } = useLanguage();
  const isFirstMount = useRef(true);

  // Re-animate headline whenever language changes to guarantee zero clipping
  React.useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    gsap.fromTo(
      ".hero-text-char",
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.5, stagger: 0.015, ease: "power3.out" }
    );
  }, [language]);

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
    <>
      <div className="flex flex-col justify-center items-center text-center w-full max-w-4xl mx-auto z-10 select-none">
        {/* Badge */}
        <div className="hero-badge opacity-0 translate-y-4 inline-flex items-center gap-2 rounded-full border border-red-accent/20 bg-red-accent/5 px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase text-white mb-8">
          <Icons.Heart className="h-4 w-4 text-red-accent" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Massive Display Title with Split Character Masking */}
        <h1 className="font-display text-4xl sm:text-7xl lg:text-8.5xl font-black leading-none text-white tracking-tight uppercase">
          <SplitText text={t.hero.title1} className="block" />
          <SplitText text={t.hero.title2} className="block text-red-accent" />
          <SplitText text={t.hero.title3} className="block" />
        </h1>

        {/* Hero Description */}
        <p className="hero-description opacity-0 translate-y-6 mt-8 text-base sm:text-lg leading-relaxed text-zinc-300 font-light max-w-xl">
          {t.hero.description}
        </p>

        {/* Donation Appeal Callout Banner */}
        <div className="hero-appeal opacity-0 translate-y-4 mt-5 inline-flex items-center gap-2 bg-red-accent/10 border border-red-accent/20 px-4 py-2 rounded-full text-xs text-zinc-200 max-w-md shadow-lg">
          <Icons.Heart className="h-3.5 w-3.5 text-red-accent shrink-0" />
          <span className="font-medium">{t.hero.donationAppeal}</span>
        </div>

        {/* Interactive Magnetic CTA Actions */}
        <div className="hero-actions opacity-0 translate-y-8 mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
          <div className="w-full sm:w-auto">
            <Button
              ref={primaryBtnRef}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto hover:scale-105 transition-transform bg-red-accent hover:bg-red-700 text-white border-none shadow-[0_0_20px_rgba(200,16,46,0.4)]"
              onMouseMove={(e) => handleMouseMove(e, primaryBtnRef)}
              onMouseLeave={() => handleMouseLeave(primaryBtnRef)}
              onClick={() => setIsModalOpen(true)}
            >
              {t.hero.donateBtn}
            </Button>
          </div>
          <div className="w-full sm:w-auto">
            <Button
              ref={secondaryBtnRef}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto hover:scale-105 transition-transform border-white/20 text-white hover:bg-white/5"
              onMouseMove={(e) => handleMouseMove(e, secondaryBtnRef)}
              onMouseLeave={() => handleMouseLeave(secondaryBtnRef)}
              onClick={() => (window.location.href = "#project")}
            >
              {t.hero.learnMoreBtn}
            </Button>
          </div>
        </div>
      </div>

      {/* PIX / International Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative bg-zinc-900 border border-white/10 p-6 sm:p-8 rounded-3xl max-w-sm w-[90vw] sm:w-full text-center shadow-2xl flex flex-col items-center">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <Icons.X className="w-6 h-6" />
            </button>
            <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">{t.hero.modalTitle}</h3>
            <p className="text-zinc-400 text-xs sm:text-sm font-light mb-6">
              {t.hero.modalDesc}
            </p>
            
            <div className="bg-white p-2 rounded-2xl mb-5 shadow-inner w-44 aspect-square flex justify-center items-center overflow-hidden">
              <img 
                src="/qrcode.jpg" 
                alt="QR Code PIX do Projeto" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="w-full text-left bg-zinc-950 p-3.5 rounded-xl border border-white/5 mb-3">
              <span className="block text-[10px] text-red-accent font-bold uppercase tracking-wider mb-1">{t.hero.pixKeyLabel}</span>
              <span className="block text-xs sm:text-sm text-white font-medium select-all break-all">projetocuruminsbjj@gmail.com</span>
            </div>

            <div className="w-full text-left bg-zinc-950/60 p-3 rounded-xl border border-white/5 text-[11px] text-zinc-400">
              <span className="block text-white font-bold uppercase text-[10px] tracking-wider mb-1 text-red-accent">
                {t.hero.intlTitle}
              </span>
              <p className="leading-relaxed font-light">
                {t.hero.intlDesc}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default HeroContent;
