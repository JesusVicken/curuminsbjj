"use client";

import React from "react";
import { GalleryImage } from "./GalleryImage";
import { FadeIn } from "@/components/Animations";
import { Icons } from "@/components/Icons";
import { useLanguage } from "@/context/LanguageContext";

export const Gallery: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === "en";

  const images = [
    { src: "/imagesprojeto/projeto1.jpeg", label: isEn ? "Focus & Resilience" : "Foco e Resiliência no Tatame", category: isEn ? "Focus" : "Concentração" },
    { src: "/imagesprojeto/projeto2.jpeg", label: isEn ? "Unity & Pride" : "União e Orgulho Coletivo", category: isEn ? "Community" : "Comunidade" },
    { src: "/imagesprojeto/projeto3.jpeg", label: isEn ? "Village Children" : "Crianças Praticantes da Aldeia", category: isEn ? "Inclusion" : "Inclusão" },
    { src: "/imagesprojeto/projeto4.jpeg", label: isEn ? "Appreciating Teachings" : "Apreciação dos Ensinamentos", category: isEn ? "Discipline" : "Disciplina" },
    { src: "/imagesprojeto/projeto5.jpeg", label: isEn ? "Joy & Confidence" : "Alegria e Autoestima de Curumins", category: isEn ? "Self-Esteem" : "Autoestima" },
    { src: "/imagesprojeto/projeto6.jpeg", label: isEn ? "Dedication & Technique" : "Superação e Técnicas Finais", category: isEn ? "Martial Arts" : "Combate" },
    { src: "/imagesprojeto/projeto7.jpeg", label: isEn ? "Practice at Teko Haw" : "Treinos Práticos na Aldeia Teko Haw", category: isEn ? "Learning" : "Aprendizado" },
    { src: "/imagesprojeto/projeto8.jpeg", label: isEn ? "Our Dojo Structure" : "Nossa Estrutura e Área de Treino", category: isEn ? "Facility" : "Infraestrutura" },
    { src: "/imagesprojeto/projeto9.jpeg", label: isEn ? "Empowered Community" : "Comunidade Fortalecida", category: isEn ? "Community" : "Comunidade" },
    { src: "/imagesprojeto/projeto10.jpeg", label: isEn ? "Steps in the Sport" : "Novos Passos no Esporte", category: isEn ? "Growth" : "Desenvolvimento" },
    { src: "/imagesprojeto/projeto11.jpeg", label: isEn ? "Smiles on the Mat" : "Sorrisos no Tatame", category: isEn ? "Joy" : "Alegria" },
    { src: "/imagesprojeto/projeto12.jpeg", label: isEn ? "Dedicated Mentorship" : "Acompanhamento Dedicado", category: isEn ? "Coaching" : "Ensino" },
  ];

  return (
    <section id="gallery" className="py-32 md:py-48 bg-zinc-950 relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-red-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <FadeIn direction="up">
            <span className="text-sm font-bold tracking-widest text-red-accent uppercase">
              {isEn ? "Our Mat in Action" : "Nosso Tatame em Ação"}
            </span>
            <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl leading-[0.95] uppercase">
              {isEn ? (
                <>The Project's <span className="text-red-accent">Reality</span></>
              ) : (
                <>A Realidade do <span className="text-red-accent">Projeto</span></>
              )}
            </h2>
            <p className="mt-8 text-lg text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed">
              {isEn ? (
                <><strong>Instituto Projeto Curumins BJJ</strong> is an independent initiative fueled by the passion to change lives. <strong>We operate with no recurring corporate sponsors or public subsidies.</strong> Every single training session in Teko Haw Village happens solely through human kindness and solidarity.</>
              ) : (
                <>O <strong>Instituto Projeto Curumins BJJ</strong> é uma iniciativa independente que respira a vontade de transformar vidas. <strong>Não possuímos patrocinadores fixos, ajuda governamental ou apoio constante de empresas.</strong> Cada treino que acontece na Aldeia Teko Haw só é possível graças à solidariedade de pessoas comuns que acreditam no esporte como ferramenta de inclusão.</>
              )}
            </p>
            <div className="mt-8 flex justify-center">
              <a 
                href="/apoie" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-accent text-white rounded-full font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition-colors duration-300 shadow-xl shadow-red-accent/20"
              >
                {isEn ? "Support & Join Us" : "Apoie e Faça Parte"} <Icons.Heart className="h-4 w-4 fill-white" />
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
