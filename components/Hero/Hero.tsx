"use client";

import React from "react";
import { HeroContent } from "./HeroContent";
import { HeroShaderBg } from "./HeroShaderBg";
import { Preloader } from "./Preloader";
import { gsap } from "@/lib/gsap";

export const Hero: React.FC = () => {
  const handlePreloaderComplete = () => {

    // GSAP Timeline to animate Hero element entrance
    const tl = gsap.timeline();

    tl.to(".hero-badge", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    })
    .to(".hero-text-char", {
      y: "0%",
      duration: 1.2,
      stagger: 0.02,
      ease: "power4.out",
    }, "-=0.8")
    .to(".hero-description", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.9")
    .to(".hero-actions", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.9")
    .to(".hero-scroll-indicator", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.9");
  };

  return (
    <section className="relative w-screen h-screen min-h-[600px] flex items-center justify-center bg-zinc-950 overflow-hidden select-none">
      {/* Preloader */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* Background Image Project */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/imagesprojeto/projeto7.jpeg" 
          alt="Projeto Curumins BJJ na Aldeia" 
          className="w-full h-full object-cover grayscale-[20%] opacity-40" 
        />
      </div>

      {/* Grid Pattern overlay for tech-editorial look */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Vignette ambient overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_20%,#030303_95%)] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8">
        <HeroContent />
      </div>

      {/* Scroll indicator at 100vh bottom */}
      <div className="hero-scroll-indicator opacity-0 translate-y-4 absolute bottom-10 left-1/2 -translate-x-1/2 z-15 flex flex-col items-center gap-3 cursor-pointer pointer-events-none">
        <span className="text-[9px] font-bold uppercase tracking-widest text-gold-accent">
          Scroll Down
        </span>
        <div className="w-[1px] h-12 bg-white/10 overflow-hidden relative">
          {/* Moving scroll line indicator */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold-accent animate-scroll-line" />
        </div>
      </div>

      {/* CSS Anim style definition */}
      <style jsx global>{`
        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-scroll-line {
          animation: scrollLine 2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
      `}</style>
    </section>
  );
};
export default Hero;
