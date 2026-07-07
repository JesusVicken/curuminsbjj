"use client";

import React, { useRef, useState } from "react";
import QRCode from "react-qr-code";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <span>Sua doação transforma futuros</span>
        </div>

        {/* Massive Display Title with Split Character Masking */}
        <h1 className="font-display text-4xl sm:text-7xl lg:text-8.5xl font-black leading-none text-white tracking-tight uppercase">
          <SplitText text="AJUDE OS" className="block" />
          <SplitText text="CURUMINS NO" className="block text-red-accent" />
          <SplitText text="TATAME" className="block" />
        </h1>

        {/* Hero Description */}
        <p className="hero-description opacity-0 translate-y-6 mt-8 text-base sm:text-lg leading-relaxed text-zinc-300 font-light max-w-xl">
          Nossas crianças indígenas precisam do seu apoio para continuar treinando jiu-jitsu. 
          Sua doação ajuda a manter a estrutura, quimonos e a transformação viva na Aldeia Teko Haw.
        </p>

        {/* Interactive Magnetic CTA Actions */}
        <div className="hero-actions opacity-0 translate-y-8 mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
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
              Fazer uma Doação (PIX)
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
              Conheça o Projeto
            </Button>
          </div>
        </div>
      </div>

      {/* PIX Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative bg-zinc-900 border border-white/10 p-8 rounded-3xl max-w-sm w-full text-center shadow-2xl flex flex-col items-center">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
            >
              <Icons.X className="w-6 h-6" />
            </button>
            <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">Apoie os Curumins</h3>
            <p className="text-zinc-400 text-sm font-light mb-6">
              Escaneie o QR Code abaixo com o aplicativo do seu banco ou copie o e-mail.
            </p>
            
            <div className="bg-white p-4 rounded-2xl mb-6 shadow-inner">
              <QRCode 
                value="projetocuruminsbjj@gmail.com"
                size={200}
                bgColor="#ffffff"
                fgColor="#000000"
                level="H"
              />
            </div>
            
            <div className="w-full text-left bg-zinc-950 p-4 rounded-xl border border-white/5">
              <span className="block text-[10px] text-red-accent font-bold uppercase tracking-wider mb-1">Chave PIX (E-mail)</span>
              <span className="block text-sm text-white font-medium select-all">projetocuruminsbjj@gmail.com</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default HeroContent;
