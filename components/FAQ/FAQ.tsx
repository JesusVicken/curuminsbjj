"use client";

import React from "react";
import { FAQItem } from "./FAQItem";
import { FadeIn } from "@/components/Animations";

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Com qual idade a criança pode começar a treinar no projeto?",
      answer:
        "Atendemos crianças e adolescentes de 3 a 15 anos de idade que residem na aldeia. Nossos treinos são adaptados e divididos em categorias para respeitar a maturidade física e cognitiva de cada faixa etária.",
    },
    {
      question: "O Jiu-Jitsu estimula a agressividade?",
      answer:
        "Não. O Jiu-Jitsu atua ensinando respeito, disciplina e autocontrole. Nossos alunos aprendem desde o primeiro dia que a técnica só deve ser utilizada no tatame ou para autodefesa. O gasto de energia saudável contribui para que fiquem mais calmos e focados.",
    },
    {
      question: "A criança precisa comprar kimono para treinar?",
      answer:
        "Não. Sendo um projeto social voluntário, nós fornecemos os kimonos gratuitamente conforme as doações são recebidas. Para os primeiros treinos, basta que a criança vista roupas confortáveis que facilitem a movimentação.",
    },
    {
      question: "Como funciona o sistema de graduações das crianças?",
      answer:
        "Seguimos as diretrizes oficiais de graduação infantil. Avaliamos tanto o compromisso técnico do aluno no tatame quanto o seu comportamento exemplar demonstrado com a família e nos estudos escolares.",
    },
  ];

  return (
    <section id="faq" className="py-32 md:py-48 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <FadeIn direction="up">
            <span className="text-xs font-bold tracking-widest text-gold-accent uppercase">
              Dúvidas Frequentes
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-[0.95] uppercase">
              Perguntas sobre o projeto social
            </h2>
            <p className="mt-4 text-base text-zinc-400 max-w-2xl mx-auto font-light">
              Reunimos as principais dúvidas sobre as atividades e apoios na aldeia. Se ainda tiver alguma pergunta, 
              entre em contato direto com a nossa coordenação.
            </p>
          </FadeIn>
        </div>

        {/* FAQ Accordion List */}
        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, idx) => (
            <FadeIn key={faq.question} direction="up" delay={0.1 * idx}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
export default FAQ;
