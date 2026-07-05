"use client";

import React from "react";
import { GalleryImage } from "./GalleryImage";
import { FadeIn } from "@/components/Animations";

export const Gallery: React.FC = () => {
  const images = [
    {
      src: "/image1.jpg",
      label: "Foco e Resiliência no Tatame",
      category: "Concentração",
    },
    {
      src: "/image2.jpg",
      label: "União e Orgulho Coletivo",
      category: "Comunidade",
    },
    {
      src: "/image3.jpg",
      label: "Crianças Praticantes da Aldeia",
      category: "Inclusão",
    },
    {
      src: "/image4.jpg",
      label: "Apreciação dos Ensinamentos",
      category: "Disciplina",
    },
    {
      src: "/image5.jpg",
      label: "Alegria e Autoestima de Curumins",
      category: "Autoestima",
    },
    {
      src: "/image6.jpg",
      label: "Superação e Técnicas Finais",
      category: "Combate",
    },
    {
      src: "/image7.jpg",
      label: "Treinos Práticos na Aldeia Teko Haw",
      category: "Aprendizado",
    },
    {
      src: "/estrutrura.webp",
      label: "Nossa Estrutura e Área de Treino",
      category: "Infraestrutura",
    },
  ];

  return (
    <section id="gallery" className="py-32 md:py-48 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <FadeIn direction="up">
            <span className="text-sm font-bold tracking-widest text-gold-accent uppercase">
              Nosso Tatame
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-[0.95] uppercase">
              Registros Reais de Respeito e Evolução
            </h2>
            <p className="mt-4 text-base text-zinc-400 max-w-2xl mx-auto font-light">
              Explore o cotidiano dos treinos na Aldeia Teko Haw. Registros reais de sorrisos, foco e superação.
            </p>
          </FadeIn>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <FadeIn key={img.src} direction="up" delay={0.08 * idx}>
              <GalleryImage
                src={img.src}
                label={img.label}
                category={img.category}
              />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Gallery;
