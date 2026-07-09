"use client";

import React from "react";
import { FAQItem } from "./FAQItem";
import { FadeIn } from "@/components/Animations";

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Como minha doação ajuda o projeto?",
      answer: (
        <div className="flex flex-col gap-4">
          <p>
            O Instituto Projeto Curumins BJJ não recebe apoio governamental fixo. Sua doação é 100% revertida para a compra de kimonos,
            montagem e manutenção dos tatames, alimentação pós-treino para as crianças e custeio das inscrições em campeonatos.
          </p>
          <div className="bg-white p-2 rounded-xl shadow-inner w-32 aspect-square flex justify-center items-center overflow-hidden">
            <img src="/qrcode.jpg" alt="QR Code PIX" className="w-full h-full object-contain" />
          </div>
        </div>
      ),
    },
    {
      question: "Existe um valor mínimo para ajudar via PIX?",
      answer: (
        <div className="flex flex-col gap-4">
          <p>
            Não existe valor mínimo! Qualquer contribuição faz uma diferença enorme para manter o projeto vivo. 
            Você pode doar R$10, R$50 ou o valor que tocar o seu coração diretamente pela chave: <strong>projetocuruminsbjj@gmail.com</strong>
          </p>
          <div className="bg-white p-2 rounded-xl shadow-inner w-32 aspect-square flex justify-center items-center overflow-hidden">
            <img src="/qrcode.jpg" alt="QR Code PIX" className="w-full h-full object-contain" />
          </div>
        </div>
      ),
    },
    {
      question: "Posso doar kimonos ou equipamentos físicos?",
      answer: (
        <div className="flex flex-col gap-4">
          <p>
            Sim! Aceitamos doações de kimonos novos ou usados (em bom estado), faixas e tatames. 
            Entre em contato pelo WhatsApp do Daniel (61 98151-4085) para combinarmos a entrega. 
            Se preferir ajudar financeiramente para que possamos comprar os tamanhos exatos que faltam, use nosso PIX abaixo.
          </p>
          <div className="bg-white p-2 rounded-xl shadow-inner w-32 aspect-square flex justify-center items-center overflow-hidden">
            <img src="/qrcode.jpg" alt="QR Code PIX" className="w-full h-full object-contain" />
          </div>
        </div>
      ),
    },
    {
      question: "Empresas podem ser patrocinadoras oficiais?",
      answer: (
        <div className="flex flex-col gap-4">
          <p>
            Com certeza! Estamos sempre em busca de parcerias com empresas que queiram atrelar sua marca a um projeto de transformação social real.
            Entre em contato para discutirmos cotas de patrocínio que incluem espaço para a sua logo nos nossos kimonos e banners.
            Enquanto isso, toda ajuda via PIX é bem vinda!
          </p>
          <div className="bg-white p-2 rounded-xl shadow-inner w-32 aspect-square flex justify-center items-center overflow-hidden">
            <img src="/qrcode.jpg" alt="QR Code PIX" className="w-full h-full object-contain" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="faq" className="py-32 md:py-48 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header with PIX CTA */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <FadeIn direction="up">
            <span className="text-xs font-bold tracking-widest text-red-accent uppercase">
              Como Ajudar
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-[0.95] uppercase">
              Faça a Diferença <span className="text-red-accent">Agora</span>
            </h2>
            <p className="mt-6 text-base text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
              O projeto social não possui verbas governamentais e funciona exclusivamente com a ajuda de voluntários. 
              Toda contribuição é convertida em kimonos, equipamentos e lanches para nossas crianças.
            </p>
            
            <div className="mt-10 max-w-sm mx-auto bg-zinc-900 border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col items-center">
              <h3 className="font-display text-xl font-bold uppercase text-white mb-2">Apoie os Curumins</h3>
              <p className="text-zinc-400 text-xs font-light mb-6">
                Escaneie o QR Code abaixo com o aplicativo do seu banco ou copie o e-mail.
              </p>
              
              <div className="bg-white p-2 rounded-2xl mb-6 shadow-inner w-full aspect-square flex justify-center items-center overflow-hidden">
                <img 
                  src="/qrcode.jpg" 
                  alt="QR Code PIX do Projeto" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="w-full text-left bg-zinc-950 p-4 rounded-xl border border-white/5">
                <span className="block text-[10px] text-red-accent font-bold uppercase tracking-wider mb-1">Chave PIX (E-mail)</span>
                <span className="block text-sm text-white font-medium select-all">projetocuruminsbjj@gmail.com</span>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mx-auto max-w-3xl text-center mb-10 mt-16 border-t border-white/5 pt-12">
          <h3 className="text-xl font-bold uppercase text-white tracking-widest mb-2">Dúvidas Frequentes</h3>
          <p className="text-sm text-zinc-400 font-light">
            Abaixo as respostas sobre o funcionamento e atividades na tribo.
          </p>
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
