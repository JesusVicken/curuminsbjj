"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef({ val: 0 });

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
        duration: 3.5,
        ease: "power3.inOut",
        onUpdate: () => {
          setCount(Math.floor(countRef.current.val));
        },
        onComplete: () => {
          // Splitting panel reveal animation
          gsap.timeline()
            .to(".preloader-panel-top", {
              yPercent: -101,
              duration: 1.5,
              ease: "power4.inOut",
            })
            .to(".preloader-panel-bottom", {
              yPercent: 101,
              duration: 1.5,
              ease: "power4.inOut",
            }, "<")
            .to(".preloader-container", {
              pointerEvents: "none",
              duration: 0.1,
              onComplete: () => {
                if (onComplete) onComplete();
              }
            }, "<0.8");
        }
      });

      // Subtle scaling of word container
      gsap.fromTo(
        ".preloader-word-container",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
      );
    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="preloader-container fixed inset-0 z-50 overflow-hidden pointer-events-auto select-none">
      {/* Top Panel */}
      <div className="preloader-panel-top absolute top-0 left-0 w-full h-1/2 bg-zinc-950 flex flex-col justify-between p-12 border-b border-white/5">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold-accent">
            Curumins BJJ
          </span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">
            © 2026 DOJO
          </span>
        </div>

        {/* Word reveal */}
        <div className="preloader-word-container flex justify-center items-center w-full flex-grow">
          <h2 className="preloader-word font-display text-4xl md:text-7xl lg:text-8xl font-black text-white tracking-widest uppercase transition-all duration-350 ease-out">
            {word}
          </h2>
        </div>
      </div>

      {/* Bottom Panel */}
      <div className="preloader-panel-bottom absolute bottom-0 left-0 w-full h-1/2 bg-zinc-950 flex flex-col justify-end p-12">
        <div className="flex justify-between items-end w-full max-w-7xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-4">
            Iniciando Experiência
          </span>
          {/* Giant Number counter */}
          <span className="font-sans text-[120px] md:text-[200px] lg:text-[250px] font-black leading-none text-white/5 select-none transition-all duration-75">
            {count.toString().padStart(3, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Preloader;
