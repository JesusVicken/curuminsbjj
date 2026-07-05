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

  // Circle dimensions for SVG progress ring
  const radius = 64;
  const strokeWidth = 3;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (count / 100) * circumference;

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
          // Splitting panel reveal animation with logo exit scaling
          gsap.timeline()
            .to(".preloader-logo-wrap", {
              scale: 0.9,
              opacity: 0,
              duration: 0.8,
              ease: "power4.inOut"
            })
            .to(".preloader-panel-top", {
              yPercent: -101,
              duration: 1.2,
              ease: "power4.inOut",
            }, "<0.1")
            .to(".preloader-panel-bottom", {
              yPercent: 101,
              duration: 1.2,
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

      // Ambient entry scaling
      gsap.fromTo(
        ".preloader-logo-wrap",
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.8, ease: "power3.out" }
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

        {/* Circular Progress & Logo Showcase */}
        <div className="flex justify-center items-center w-full flex-grow relative">
          <div className="preloader-logo-wrap relative flex items-center justify-center h-48 w-48 md:h-56 md:w-56">
            
            {/* SVG Progress Ring */}
            <svg className="w-full h-full transform -rotate-90">
              {/* Background circle track */}
              <circle
                cx="50%"
                cy="50%"
                r={radius}
                className="stroke-white/5 fill-none"
                strokeWidth={strokeWidth}
              />
              {/* Active animated circle track */}
              <circle
                cx="50%"
                cy="50%"
                r={radius}
                className="stroke-gold-accent fill-none transition-[stroke-dashoffset] duration-75 ease-out"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>

            {/* Official Logo inside the ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 md:h-28 md:w-28 rounded-full overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl flex items-center justify-center p-2">
              <img
                src="/logocurumin.png"
                alt="Logo Curumins BJJ"
                className="h-full w-full object-contain select-none"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Panel */}
      <div className="preloader-panel-bottom absolute bottom-0 left-0 w-full h-1/2 bg-zinc-950 flex flex-col justify-end p-12">
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
          <span className="font-sans text-[120px] md:text-[200px] lg:text-[250px] font-black leading-none text-white/5 select-none transition-all duration-75">
            {count.toString().padStart(3, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Preloader;
