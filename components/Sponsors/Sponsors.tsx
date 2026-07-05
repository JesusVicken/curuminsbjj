"use client";

import React from "react";
import { FadeIn } from "@/components/Animations";

export const Sponsors: React.FC = () => {
  const brandList = [
    "Vulkan Gear",
    "Shoyoroll",
    "Bullyproof Org",
    "Atleta Amanhã",
  ];

  return (
    <section id="sponsors" className="py-20 bg-zinc-950/40 border-y border-white/5 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn direction="up">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-zinc-500">
            Apoio & Parcerias Corporativas
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center mt-10">
          {brandList.map((brand, idx) => (
            <FadeIn key={brand} direction="up" delay={0.1 * idx}>
              <div className="font-display text-lg md:text-xl font-black uppercase tracking-widest text-zinc-600 hover:text-gold-accent transition-colors duration-500 select-none cursor-default py-2 border-b border-transparent hover:border-gold-accent/20">
                {brand}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Sponsors;
