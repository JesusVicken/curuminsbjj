"use client";

import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/Animations";
import { initLenis } from "@/lib/lenis";

export default function Galeria() {
  useEffect(() => {
    const lenisInstance = initLenis();
    return () => {
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  // Generate arrays for photos and videos
  const photos = Array.from({ length: 22 }, (_, i) => `/imagesprojeto/projeto${i + 1}.jpeg`);
  const videos = Array.from({ length: 16 }, (_, i) => `/imagesprojeto/videoprojeto${i + 1}.mp4`);
  
  // Also include the other public images
  const extraPhotos = [
    "/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg", 
    "/image5.jpg", "/image6.jpg", "/image7.jpg", "/estrutrura.webp", "/hero.webp", "/paje.webp"
  ];
  
  const allPhotos = [...photos, ...extraPhotos];

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden pt-[88px]">
      <Navbar />

      <main className="flex-grow">
        <section className="py-24 md:py-32 relative overflow-hidden border-b border-white/5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(200,16,46,0.08),transparent_70%)] pointer-events-none" />
          
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
            <FadeIn direction="up">
              <span className="text-sm font-bold tracking-widest text-red-accent uppercase">
                Acervo Completo
              </span>
              <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl leading-[0.95] uppercase">
                A Vida no <span className="text-red-accent">Tatame</span>
              </h1>
              <p className="mt-8 text-lg text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed">
                Aqui registramos a evolução, o sorriso e a dedicação diária das crianças da Aldeia Teko Haw. 
                Cada foto e vídeo conta uma história de superação que você está ajudando a escrever.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Photos Section First */}
        <section className="py-32 bg-zinc-950">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeIn direction="up">
              <h2 className="text-2xl font-display font-bold uppercase tracking-widest text-white mb-12 flex items-center gap-4">
                <span className="h-px w-12 bg-red-accent/50" /> Galeria de Fotos
              </h2>
            </FadeIn>
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {allPhotos.map((src, idx) => (
                <FadeIn key={idx} direction="up" delay={0.02 * (idx % 10)}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/5 group break-inside-avoid">
                    <img 
                      src={src} 
                      alt={`Foto do projeto ${idx + 1}`} 
                      className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Videos Section Second */}
        <section className="py-24 bg-zinc-900/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeIn direction="up">
              <h2 className="text-2xl font-display font-bold uppercase tracking-widest text-white mb-12 flex items-center gap-4">
                <span className="h-px w-12 bg-white/30" /> Vídeos do Projeto
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((src, idx) => (
                <FadeIn key={src} direction="up" delay={0.05 * (idx % 3)}>
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/5 group bg-zinc-900">
                    <video 
                      src={src} 
                      controls 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      poster="/logocurumin.png"
                      preload="metadata"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
