"use client";

import React, { useState } from "react";
import { ContactForm } from "./ContactForm";
import { Icons } from "@/components/Icons";
import { FadeIn } from "@/components/Animations";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyPix = () => {
    navigator.clipboard.writeText("projetocuruminsbjj@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactDetails = [
    {
      icon: Icons.Phone,
      title: "WhatsApp Coordenador",
      value: "+55 (61) 98151-4085 (Daniel)",
      href: "https://wa.me/5561981514085",
    },
    {
      icon: Icons.Mail,
      title: "E-mail Oficial",
      value: "projetocuruminsbjj@gmail.com",
      href: "mailto:projetocuruminsbjj@gmail.com",
    },
    {
      icon: Icons.MapPin,
      title: "Aldeia Teko Haw",
      value: "Setor Habitacional Taquari - Brasília, DF",
    },
  ];

  return (
    <section id="contact" className="py-32 md:py-48 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <FadeIn direction="up">
            <span className="text-xs font-bold tracking-widest text-red-accent uppercase">
              Apoie Nosso Sonho
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-[0.95] uppercase">
              Ajude nossos pequenos atletas na competição de 16 de maio
            </h2>
            <p className="mt-6 text-base text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
              Solicitamos, com muito respeito e esperança, apoio com o **transporte para a competição do dia 16 de maio**. 
              Esse apoio será fundamental para que as crianças indígenas possam participar do evento e vivenciar essa 
              experiência tão importante no esporte.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Prominent Red Pix Card */}
            <FadeIn direction="right" delay={0}>
              <div
                onClick={handleCopyPix}
                className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl bg-red-accent/5 border border-red-accent/20 shadow-2xl cursor-pointer hover:bg-red-accent/10 hover:border-red-accent/45 transition-all duration-300 group"
              >
                {/* QR Code Image */}
                <div className="bg-white p-2 rounded-2xl shadow-inner w-24 aspect-square flex justify-center items-center overflow-hidden flex-shrink-0">
                  <img src="/qrcode.jpg" alt="QR Code PIX" className="w-full h-full object-contain" />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-[10px] font-bold text-red-accent uppercase tracking-widest">
                    Chave Pix (E-mail)
                  </h3>
                  <p className="text-sm font-semibold text-white mt-1.5 break-all">
                    projetocuruminsbjj@gmail.com
                  </p>
                  <p className="text-[9px] text-zinc-500 uppercase font-bold tracking-wider mt-1 group-hover:text-red-accent transition-colors">
                    {copied ? "Copiado com sucesso!" : "Clique para copiar a chave Pix"}
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Other Contact Cards */}
            {contactDetails.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <FadeIn key={detail.title} direction="right" delay={0.1 * (idx + 1)}>
                  <div className="flex gap-4 p-6 rounded-3xl bg-zinc-900/10 border border-white/5 shadow-2xl">
                    <div className="h-10 w-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-red-accent flex-shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                        {detail.title}
                      </h3>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-white hover:text-red-accent mt-1.5 block transition-colors"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-white mt-1.5">
                          {detail.value}
                        </p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-zinc-900/10 border border-white/5 p-8 rounded-[32px] shadow-2xl">
            <FadeIn direction="left">
              <ContactForm />
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Contact;
