"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/UI/Card";
import { FadeIn } from "@/components/Animations";
import { Icons } from "@/components/Icons";

export const Press: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "video" | "news" | "social">("all");

  const articles = [
    {
      source: "G1 Globo (DF2)",
      title: "Crianças indígenas participam de aula de jiu-jitsu no acampamento terra livre",
      description: "Reportagem em vídeo mostrando a participação especial e demonstração técnica das crianças indígenas no DF.",
      link: "https://g1.globo.com/df/distrito-federal/df2/video/criancas-indigenas-participam-de-aula-de-jiu-jitsu-no-acampamento-terra-livre-14507455.ghtml",
      type: "video",
      icon: Icons.Youtube,
    },
    {
      source: "Record TV / R7 (Balanço Geral)",
      title: "Jiu-jitsu transforma rotina de crianças indígenas no DF por meio do projeto Curumins",
      description: "Vídeo completo do Balanço Geral detalhando a rotina e o impacto do projeto social na aldeia.",
      link: "https://noticias.r7.com/brasilia/balanco-geral-df/video/jiu-jitsu-transforma-rotina-de-criancas-indigenas-no-df-por-meio-do-projeto-curumins-17112025/",
      type: "video",
      icon: Icons.Youtube,
    },
    {
      source: "Jornal Opção (Entorno)",
      title: "Projeto Curumins Jiu-Jitsu transforma vidas de crianças indígenas no DF",
      description: "Matéria especial sobre a transformação social e a valorização da cultura indígena através do esporte.",
      link: "https://entorno.jornalopcao.com.br/acao-social/projeto-curumins-jiu-jitsu-transforma-vidas-de-criancas-indigenas-no-df-19575/",
      type: "news",
      icon: Icons.BookOpen,
    },
    {
      source: "Correio da Manhã",
      title: "Projeto leva Jiu-Jitsu à aldeia do DF",
      description: "Notícia sobre as aulas ministradas diretamente na aldeia indígena Teko Haw em Brasília.",
      link: "https://www.correiodamanha.com.br/nacional/centro-oeste/2025/11/235473-projeto-leva-jiu-jitsu-a-aldeia-do-df.html",
      type: "news",
      icon: Icons.BookOpen,
    },
    {
      source: "Renzo Gracie",
      title: "Renzo Gracie ministra seminário e visita projeto indígena em Brasília",
      description: "A lenda do jiu-jitsu mundial visita a Aldeia Teko Haw para conhecer e apoiar os pequenos curumins.",
      link: "https://share.google/GeZ1YJm2Su5vvyf3E",
      type: "news",
      icon: Icons.Award,
    },
    {
      source: "Mais Brasil News",
      title: "Jiu-Jitsu reforça autoestima, cultura e disciplina de crianças indígenas no DF",
      description: "Artigo com foco na preservação cultural aliada à prática marcial saudável e à inclusão social.",
      link: "https://maisbrasil.com/criancas-indigenas-no-df-tem-nova-oportunidade-jiu-jitsu-reforca-autoestima-cultura-e-disciplina/",
      type: "news",
      icon: Icons.BookOpen,
    },
    {
      source: "Instagram Oficial",
      title: "Aulas Práticas e Rotina do Dojo na Aldeia",
      description: "Acompanhe fotos e registros diários diretamente do tatame na Aldeia Teko Haw.",
      link: "https://www.instagram.com/p/DLNeztiRXTF/",
      type: "social",
      icon: Icons.Instagram,
    },
    {
      source: "YouTube Vídeo",
      title: "Vídeo Institucional - Projeto Curumins BJJ",
      description: "Confira imagens exclusivas das aulas, depoimentos de lideranças e a alegria dos alunos.",
      link: "https://youtu.be/cXyml43QBDY",
      type: "video",
      icon: Icons.Youtube,
    },
  ];

  const filteredArticles = articles.filter(
    (art) => filter === "all" || art.type === filter
  );

  return (
    <section id="press" className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <FadeIn direction="up">
            <span className="text-xs font-bold tracking-widest text-gold-accent uppercase">
              Imprensa & Mídia
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-[0.95] uppercase">
              O projeto na mídia nacional
            </h2>
            <p className="mt-4 text-base text-zinc-400 max-w-2xl mx-auto font-light">
              Assista a reportagens de TV e leia notícias escritas sobre o impacto real das aulas de
              jiu-jitsu na Aldeia Teko Haw em Brasília.
            </p>
          </FadeIn>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {(["all", "video", "news", "social"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                filter === type
                  ? "bg-gold-accent border-transparent text-zinc-950 font-bold"
                  : "border-white/10 bg-transparent text-zinc-400 hover:text-white hover:border-zinc-700"
              }`}
            >
              {type === "all" ? "Todos" : type === "video" ? "TV / Vídeos" : type === "news" ? "Matérias" : "Redes Sociais"}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art, idx) => {
            const Icon = art.icon;
            return (
              <FadeIn key={art.link} direction="up" delay={0.08 * idx}>
                <a
                  href={art.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full group"
                >
                  <Card hoverEffect className="flex flex-col justify-between h-full bg-zinc-950/20 border-white/5 p-8 transition-transform duration-500 group-hover:-translate-y-2">
                    <CardHeader className="p-0 border-none pb-0">
                      <div className="flex justify-between items-center w-full">
                        <span className="text-[10px] font-bold text-gold-accent uppercase tracking-widest">
                          {art.source}
                        </span>
                        <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-gold-accent group-hover:bg-gold-accent/10 transition-colors duration-300">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>
                      <CardTitle className="mt-4 text-base font-bold text-white tracking-tight leading-snug group-hover:text-gold-accent transition-colors duration-300">
                        {art.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-4 flex-grow text-xs text-zinc-400 leading-relaxed font-light">
                      {art.description}
                    </CardContent>
                    <div className="mt-6 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-550 group-hover:text-white transition-colors duration-300">
                      <span>Ver Reportagem</span>
                      <Icons.ArrowRight className="h-3 w-3 translate-x-0 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </a>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default Press;
