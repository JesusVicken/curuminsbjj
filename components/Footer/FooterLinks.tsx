"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export const FooterLinks: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === "en";

  const columns = [
    {
      title: isEn ? "Institutional" : "Institucional",
      links: [
        { label: isEn ? "Home" : "Início", href: "/" },
        { label: isEn ? "About Us" : "Sobre Nós", href: "/sobre" },
        { label: isEn ? "Contact Us" : "Fale Conosco", href: "/apoie" },
      ],
    },
    {
      title: isEn ? "Content" : "Conteúdo",
      links: [
        { label: isEn ? "Press & Media" : "Imprensa", href: "/imprensa-faq" },
        { label: isEn ? "Training Gallery" : "Galeria de Aulas", href: "/galeria" },
        { label: isEn ? "Instructors" : "Nossos Senseis", href: "/sobre#instructors" },
      ],
    },
    {
      title: isEn ? "Support" : "Suporte",
      links: [
        { label: isEn ? "Questions (FAQ)" : "Dúvidas (FAQ)", href: "/imprensa-faq#faq" },
        { label: isEn ? "How to Support" : "Como Apoiar", href: "/apoie" },
        { label: isEn ? "Sponsors & Donors" : "Apoio Corporativo", href: "/#sponsors" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
      {columns.map((column) => (
        <div key={column.title} className="flex flex-col gap-4">
          <h3 className="text-xs font-bold text-white uppercase tracking-widest">
            {column.title}
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {column.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-zinc-400 hover:text-gold-accent transition-colors duration-300 font-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default FooterLinks;
