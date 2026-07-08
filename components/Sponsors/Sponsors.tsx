"use client";

import React, { useState } from "react";
import { FadeIn } from "@/components/Animations";
import { Icons } from "@/components/Icons";

export const Sponsors: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyPix = () => {
    navigator.clipboard.writeText("projetocuruminsbjj@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sponsors" className="relative py-24 bg-zinc-950 overflow-hidden border-t border-white/5">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-40"
        style={{ backgroundImage: "url('/image6.jpg')" }}
      />
      {/* Gradient fading masks for scroll effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
      <div className="absolute inset-0 z-0 bg-zinc-950/80" />

      {/* Decorative gradient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-accent/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center">
        <FadeIn direction="up">
          <span className="text-xs font-bold tracking-widest text-red-accent uppercase">
            Apoie Financeiramente
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl uppercase leading-none">
            Mantenha o Tatame Vivo
          </h2>
          <p className="mt-4 text-sm text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
            Como um projeto social 100% voluntário e sem patrocinadores fixos, contamos com sua solidariedade 
            para custear kimonos, materiais e despesas gerais de manutenção das aulas na Aldeia.
          </p>
        </FadeIn>

        {/* Central interactive Pix Card */}
        <FadeIn direction="up" delay={0.2}>
          <div className="mt-12 max-w-lg mx-auto">
            <div
              onClick={handleCopyPix}
              className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl bg-red-accent/5 border border-red-accent/20 hover:border-red-accent/40 hover:bg-red-accent/10 transition-all duration-300 shadow-2xl cursor-pointer group"
            >
              {/* QR Code Image */}
              <div className="bg-white p-2 rounded-2xl shadow-inner w-32 aspect-square flex justify-center items-center overflow-hidden flex-shrink-0">
                <img src="/qrcode.jpg" alt="QR Code PIX" className="w-full h-full object-contain" />
              </div>
              
              {/* Text and Copy Info */}
              <div className="text-center sm:text-left flex-grow">
                <p className="text-[10px] font-bold text-red-accent uppercase tracking-widest leading-none">
                  Chave Pix (E-mail do Projeto)
                </p>
                <p className="text-base font-bold text-white mt-2 tracking-wide break-all font-mono">
                  projetocuruminsbjj@gmail.com
                </p>
                <p className="text-[9px] text-zinc-500 uppercase font-bold tracking-wider mt-2 group-hover:text-red-accent transition-colors">
                  {copied ? "Copiado com sucesso!" : "Clique para copiar a chave Pix"}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
export default Sponsors;
