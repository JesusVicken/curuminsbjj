"use client";

import React from "react";
import { Button } from "@/components/UI/Button";
import { FadeIn } from "@/components/Animations";

export const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="relative rounded-[40px] bg-gradient-to-br from-primary-600 to-indigo-700 px-6 py-16 shadow-2xl overflow-hidden sm:px-12 sm:py-24 text-center border border-primary-500/10">
            {/* Background Blob Elements */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight">
                Dê ao seu filho o poder da autoconfiança!
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-100">
                Agende uma aula experimental gratuita hoje mesmo e veja de perto como o Jiu-Jitsu pode
                beneficiar o desenvolvimento físico e mental do seu pequeno.
              </p>
              <div className="mt-10 flex items-center justify-center gap-6 flex-col sm:flex-row">
                <Button
                  variant="dark"
                  size="lg"
                  className="w-full sm:w-auto bg-white text-primary-700 hover:bg-zinc-50 active:bg-zinc-150"
                  onClick={() => (window.location.href = "#contact")}
                >
                  Agendar Aula Grátis
                </Button>
                <a href="tel:+5511999999999" className="text-sm font-semibold text-white hover:text-indigo-100 flex items-center gap-2">
                  Falar com um Professor &rarr;
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
export default CTA;
