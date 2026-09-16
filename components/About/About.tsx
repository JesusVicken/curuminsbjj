"use client";

import React from "react";
import { AboutCard } from "./AboutCard";
import { FadeIn } from "@/components/Animations";
import { useLanguage } from "@/context/LanguageContext";

export const About: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === "en";
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((e) => console.log("Autoplay prevented:", e));
    }
  }, []);

  const pillars = [
    {
      iconName: "Shield" as const,
      title: isEn ? "Self-Defense & Calm" : "Legítima Defesa & Calma",
      description: isEn
        ? "We teach non-violent self-defense techniques, granting children the physical and mental security to defuse intimidation without retaliation."
        : "Ensinamos técnicas de jiu-jitsu voltadas à autodefesa não agressiva, dando à criança a segurança física e psicológica necessária para afastar intimidações sem revidar de forma violenta.",
    },
    {
      iconName: "Heart" as const,
      title: isEn ? "Self-Esteem & Identity" : "Autoestima e Identidade",
      description: isEn
        ? "We cultivate cultural belonging and ancestral pride. The tatami serves as a healthy sanctuary unlocking inner confidence."
        : "Fortalecemos o sentimento de pertencimento cultural dos curumins. O tatame atua como um refúgio sadio que desenvolve o orgulho de suas raízes e de sua força interna.",
    },
    {
      iconName: "Users" as const,
      title: isEn ? "Village Cooperation" : "Cooperação na Aldeia",
      description: isEn
        ? "Learning is collaborative. Older curumins guide younger peers on the mat, strengthening community bonds and collective responsibility."
        : "O aprendizado é compartilhado. Os alunos mais velhos ajudam a guiar os menores no tatame, incentivando os laços comunitários e a responsabilidade coletiva.",
    },
    {
      iconName: "Award" as const,
      title: isEn ? "Dreams & Overcoming Limits" : "Sonhos e Superação",
      description: isEn
        ? "Through martial arts, we demonstrate that dedication and discipline overcome social vulnerability, empowering children to build any future they desire."
        : "Através do esporte, mostramos que com dedicação e disciplina eles podem superar as barreiras de vulnerabilidade social e lutar pelo futuro que desejarem.",
    },
  ];

  return (
    <section id="about" className="relative py-32 md:py-48 bg-zinc-950 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          src="/imagesprojeto/videoprojeto16.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-40" 
        />
      </div>
      {/* Gradient fading masks for scroll effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
      <div className="absolute inset-0 z-0 bg-zinc-950/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content Area */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <FadeIn direction="right">
              <span className="text-xs font-bold tracking-widest text-red-accent uppercase">
                {isEn ? "About Us" : "Quem Somos"}
              </span>
              <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl leading-[0.95] uppercase">
                {isEn ? (
                  <>Gentle path for <span className="text-red-accent">indigenous youth</span> in Brazil.</>
                ) : (
                  <>Caminho suave para os <span className="text-red-accent">curumins</span> do DF.</>
                )}
              </h2>
              <p className="mt-8 text-base leading-relaxed text-zinc-400 font-light">
                {isEn ? (
                  <>For over three years, <strong>Instituto Projeto Curumins BJJ</strong> has served as an active instrument of social inclusion for vulnerable indigenous youth living in Brasília, at the <strong>Teko Haw Village (Tecorral)</strong>.</>
                ) : (
                  <>Há três anos, o <strong>Instituto Projeto Curumins BJJ</strong> atua como uma ferramenta ativa de inclusão social para crianças indígenas em situação de extrema vulnerabilidade que residem em Brasília, na <strong>Aldeia Teko Haw (Tecorral)</strong>.</>
                )}
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-400 font-light">
                {isEn ? (
                  <>Throughout this mission, the project operates <strong>without fixed institutional sponsors or government subsidies</strong>, sustained exclusively through individual contributions and donated gis.</>
                ) : (
                  <>Durante toda essa jornada, o projeto segue firme <strong>sem patrocínio fixo ou qualquer apoio governamental</strong>, sendo mantido exclusivamente por meio de contribuições voluntárias e da doação de kimonos usados.</>
                )}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 mt-10 border-t border-white/5 pt-10 text-left">
                <div>
                  <span className="font-sans text-4xl font-black text-white tracking-tight">
                    {isEn ? "03 Years" : "03 Anos"}
                  </span>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-500 mt-2 font-bold">
                    {isEn ? "At Teko Haw Village" : "Na Aldeia Teko Haw"}
                  </p>
                </div>
                <div>
                  <span className="font-sans text-4xl font-black text-white tracking-tight">
                    Zero
                  </span>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-500 mt-2 font-bold">
                    {isEn ? "Fixed Government Funding" : "Verba Governamental Fixa"}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Pillars Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <FadeIn
                key={pillar.title}
                direction="up"
                delay={0.1 * index}
              >
                <AboutCard
                  iconName={pillar.iconName}
                  title={pillar.title}
                  description={pillar.description}
                />
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
export default About;
