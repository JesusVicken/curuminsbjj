import React from "react";
import { Icons } from "@/components/Icons";

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-accent/10 to-gold-accent/15 rounded-full blur-3xl opacity-30 animate-pulse" />
      
      {/* Decorative Rotating Border Card */}
      <div className="absolute inset-4 rounded-[40px] border border-dashed border-zinc-800 rotate-3" />
      
      {/* Main Showcase Card */}
      <div className="relative w-11/12 aspect-[4/3] rounded-[32px] bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 p-8 shadow-2xl flex flex-col justify-between overflow-hidden border border-white/5">
        {/* Background Subtle Wave */}
        <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-gold-accent/5 rounded-full blur-2xl" />

        <div className="flex justify-between items-start">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-accent" />
            <div className="h-3 w-3 rounded-full bg-gold-accent" />
            <div className="h-3 w-3 rounded-full bg-zinc-850" />
          </div>
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold tracking-widest text-gold-accent uppercase">
            Curumin Dojo
          </div>
        </div>

        {/* Dynamic Center Graphic */}
        <div className="flex flex-col items-center gap-4 text-center my-6">
          <div className="h-20 w-20 rounded-full bg-red-accent flex items-center justify-center text-white shadow-lg shadow-red-950/50 relative group">
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-red-accent blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
            <Icons.Kimono className="h-10 w-10 text-white relative z-10" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-white tracking-widest uppercase">Tatame de Elite</h3>
            <p className="text-zinc-500 text-[10px] uppercase tracking-wider mt-1">Ambiente 100% monitorado e seguro</p>
          </div>
        </div>

        {/* Feature Tags */}
        <div className="grid grid-cols-2 gap-3 text-white">
          <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/5 text-xs font-semibold">
            <Icons.Shield className="h-4 w-4 text-gold-accent" />
            <span className="text-zinc-300">100% Seguro</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/5 text-xs font-semibold">
            <Icons.Users className="h-4 w-4 text-gold-accent" />
            <span className="text-zinc-300">Senseis Credenciados</span>
          </div>
        </div>
      </div>

      {/* Floating Badges */}
      <div className="absolute -left-6 top-1/4 p-4 rounded-3xl bg-zinc-950/60 backdrop-blur border border-white/5 shadow-2xl flex items-center gap-3 animate-bounce" style={{ animationDuration: "5s" }}>
        <div className="h-10 w-10 rounded-2xl bg-gold-accent/10 flex items-center justify-center">
          <Icons.Clock className="h-5 w-5 text-gold-accent" />
        </div>
        <div>
          <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Horários Nobles</h4>
          <p className="text-[9px] text-gold-accent tracking-widest uppercase mt-0.5">Adaptado a Escolas</p>
        </div>
      </div>

      <div className="absolute -right-6 bottom-1/4 p-4 rounded-3xl bg-zinc-950/60 backdrop-blur border border-white/5 shadow-2xl flex items-center gap-3 animate-bounce" style={{ animationDuration: "6s" }}>
        <div className="h-10 w-10 rounded-2xl bg-red-accent/10 flex items-center justify-center">
          <Icons.Check className="h-5 w-5 text-red-accent" />
        </div>
        <div>
          <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Metodologia Exclusiva</h4>
          <p className="text-[9px] text-red-accent tracking-widest uppercase mt-0.5">Foco Comportamental</p>
        </div>
      </div>
    </div>
  );
};
export default HeroVisual;
