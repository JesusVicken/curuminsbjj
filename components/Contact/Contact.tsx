"use client";

import React from "react";
import { ContactForm } from "./ContactForm";
import { Icons } from "@/components/Icons";
import { FadeIn } from "@/components/Animations";

export const Contact: React.FC = () => {
  const contactDetails = [
    {
      icon: Icons.Phone,
      title: "WhatsApp Coordenador",
      value: "+55 (11) 99999-9999 (Daniel BJJ)",
      href: "https://wa.me/5511999999999",
    },
    {
      icon: Icons.Mail,
      title: "E-mail Oficial",
      value: "contato@curuminsbjj.com.br",
      href: "mailto:contato@curuminsbjj.com.br",
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
            {contactDetails.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <FadeIn key={detail.title} direction="right" delay={0.1 * idx}>
                  <div className="flex gap-4 p-6 rounded-3xl bg-zinc-900/10 border border-white/5 shadow-2xl">
                    <div className="h-10 w-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-accent flex-shrink-0">
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
                          className="text-sm font-semibold text-white hover:text-gold-accent mt-1.5 block transition-colors"
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
