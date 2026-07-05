"use client";

import React from "react";
import { FAQItem } from "./FAQItem";
import { FadeIn } from "@/components/Animations";

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Com qual idade meu filho pode começar a treinar?",
      answer:
        "Nossa turma baby aceita pequenos a partir dos 3 anos de idade completados. As turmas são divididas em Baby (3-5 anos), Kids (6-9 anos) e Teens (10-15 anos), respeitando a maturidade física e cognitiva de cada faixa etária.",
    },
    {
      question: "O Jiu-Jitsu estimula a agressividade na criança?",
      answer:
        "Não! Pelo contrário. O Jiu-Jitsu ensina disciplina, autocontrole e respeito. Nossos alunos aprendem desde o primeiro dia que a técnica só deve ser utilizada no tatame ou para autodefesa em último caso. O gasto de energia ajuda a tranquilizar a criança.",
    },
    {
      question: "Meu filho precisa ter kimono para fazer a aula experimental?",
      answer:
        "Não é necessário. Para a primeira aula experimental, basta que a criança vista uma roupa confortável que facilite a movimentação, como calça de moletom ou legging e uma camiseta de malha. Nós providenciaremos um kimono se disponível.",
    },
    {
      question: "Como funciona o sistema de graduações das crianças?",
      answer:
        "Seguimos rigorosamente o sistema de faixas oficial da CBJJ/IBJJF para a categoria infantil. A graduação avalia tanto a assiduidade e progresso técnico do aluno no tatame, quanto o comportamento exemplar demonstrado em casa e no colégio.",
    },
  ];

  return (
    <section id="faq" className="py-32 md:py-48 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <FadeIn direction="up">
            <span className="text-xs font-bold tracking-widest text-gold-accent uppercase">
              Suporte & Dúvidas
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-[0.95] uppercase">
              Tudo o que você precisa saber antes de matricular seu filho
            </h2>
            <p className="mt-4 text-base text-zinc-400 max-w-2xl mx-auto font-light">
              Reunimos as principais perguntas dos pais. Se ainda tiver alguma dúvida, entre em contato
              diretamente com nossa equipe de suporte.
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
