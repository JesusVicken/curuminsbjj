"use client";

import React from "react";
import { GalleryImage } from "./GalleryImage";
import { FadeIn } from "@/components/Animations";
import { Icons } from "@/components/Icons";

export const Gallery: React.FC = () => {
  const images = [
    { src: "/imagesprojeto/projeto1.jpeg", label: "Foco e Resiliência no Tatame", category: "Concentração" },
    { src: "/imagesprojeto/projeto2.jpeg", label: "União e Orgulho Coletivo", category: "Comunidade" },
    { src: "/imagesprojeto/projeto3.jpeg", label: "Crianças Praticantes da Aldeia", category: "Inclusão" },
    { src: "/imagesprojeto/projeto4.jpeg", label: "Apreciação dos Ensinamentos", category: "Disciplina" },
    { src: "/imagesprojeto/projeto5.jpeg", label: "Alegria e Autoestima de Curumins", category: "Autoestima" },
    { src: "/imagesprojeto/projeto6.jpeg", label: "Superação e Técnicas Finais", category: "Combate" },
    { src: "/imagesprojeto/projeto7.jpeg", label: "Treinos Práticos na Aldeia Teko Haw", category: "Aprendizado" },
    { src: "/imagesprojeto/projeto8.jpeg", label: "Nossa Estrutura e Área de Treino", category: "Infraestrutura" },
    { src: "/imagesprojeto/projeto9.jpeg", label: "Comunidade Fortalecida", category: "Comunidade" },
    { src: "/imagesprojeto/projeto10.jpeg", label: "Novos Passos no Esporte", category: "Desenvolvimento" },
    { src: "/imagesprojeto/projeto11.jpeg", label: "Sorrisos no Tatame", category: "Alegria" },
    { src: "/imagesprojeto/projeto12.jpeg", label: "Acompanhamento Dedicado", category: "Ensino" },
  ];

  return (
    <section id="gallery" className="py-32 md:py-48 bg-zinc-950 relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-gold-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <FadeIn direction="up">
            <span className="text-sm font-bold tracking-widest text-gold-accent uppercase">
              Nosso Tatame em Ação
            </span>
            <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl leading-[0.95] uppercase">
              A Realidade do <span className="text-red-accent">Projeto</span>
            </h2>
            <p className="mt-8 text-lg text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed">
              O **Projeto Curumins BJJ** é uma iniciativa independente que respira a vontade de transformar vidas. 
              **Não possuímos patrocinadores fixos, ajuda governamental ou apoio constante de empresas.** 
              Cada treino que acontece na Aldeia Teko Haw só é possível graças à solidariedade de pessoas comuns que acreditam no esporte como ferramenta de inclusão.
            </p>
            <div className="mt-8 flex justify-center">
              <a 
                href="#sponsors" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold-accent text-zinc-950 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors duration-300 shadow-xl shadow-gold-accent/10"
              >
                Apoie e Faça Parte <Icons.Heart className="h-4 w-4 fill-zinc-950" />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
          {images.map((img, idx) => (
            <FadeIn key={img.src} direction="up" delay={0.05 * idx}>
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
