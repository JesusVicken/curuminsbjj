"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef({ val: 0 });
  const logoRef = useRef<HTMLImageElement>(null);

  let word = "RESPEITO";
  if (count < 25) {
    word = "RESPEITO";
  } else if (count < 50) {
    word = "DISCIPLINA";
  } else if (count < 75) {
    word = "FOCO";
  } else {
    word = "TRANSFORMAÇÃO";
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation
      gsap.to(countRef.current, {
        val: 100,
        duration: 2.8,
        ease: "power4.inOut",
        onUpdate: () => {
          setCount(Math.floor(countRef.current.val));
        },
        onComplete: () => {
          // Splitting panel reveal animation with brutalist exit
          gsap.timeline()
            .to(logoRef.current, {
              scale: 0.8,
              opacity: 0,
              filter: "blur(20px)",
              duration: 0.8,
              ease: "power4.inOut"
            })
            .to(".preloader-panel-top", {
              yPercent: -101,
              duration: 1.0,
              ease: "power4.inOut",
            }, "<0.1")
            .to(".preloader-panel-bottom", {
              yPercent: 101,
              duration: 1.0,
              ease: "power4.inOut",
            }, "<")
            .to(".preloader-container", {
              pointerEvents: "none",
              duration: 0.1,
              onComplete: () => {
                if (onComplete) onComplete();
              }
            }, "<0.6");
        }
      });

      // Ambient entry scaling - Awwwards style breathing logo
      gsap.fromTo(
        logoRef.current,
        { scale: 0.6, opacity: 0, filter: "blur(10px)" },
        { scale: 1.1, opacity: 1, filter: "blur(0px)", duration: 2.5, ease: "power3.out" }
      );
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="preloader-container fixed inset-0 z-[100] overflow-hidden pointer-events-auto select-none flex flex-col">
      {/* Top Panel */}
      <div className="preloader-panel-top w-full h-1/2 bg-zinc-950 flex flex-col justify-between p-12 border-b border-white/5 relative z-10">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-widest text-red-accent">
            Instituto Projeto Curumins BJJ
          </span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">
            © 2026 DOJO
          </span>
        </div>
      </div>

      {/* Massive Center Logo Wrap (Absolute spanning both panels) */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
        <div className="relative flex items-center justify-center w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96">
          <img
            ref={logoRef}
            src="/logocurumin.png"
            alt="Logo Instituto Projeto Curumins BJJ"
            className="w-full h-full object-contain select-none drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Bottom Panel */}
      <div className="preloader-panel-bottom w-full h-1/2 bg-zinc-950 flex flex-col justify-end p-12 relative z-10">
        {/* Word and Count details */}
        <div className="flex justify-between items-end w-full max-w-7xl mx-auto">
          <div className="flex flex-col gap-2 mb-4">
            <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">
              VALOR DO MOMENTO
            </span>
            <span className="font-display text-2xl md:text-4xl font-black text-white tracking-widest uppercase">
              {word}
            </span>
          </div>
          {/* Giant Number counter */}
          <span className="font-sans text-[120px] md:text-[200px] lg:text-[250px] font-black leading-none text-red-accent/10 select-none transition-all duration-75">
            {count.toString().padStart(3, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Preloader;
