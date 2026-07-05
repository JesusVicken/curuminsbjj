import React from "react";
import Link from "next/link";

export const FooterLinks: React.FC = () => {
  const columns = [
    {
      title: "Institucional",
      links: [
        { label: "Início", href: "#" },
        { label: "Sobre Nós", href: "#about" },
        { label: "Fale Conosco", href: "#contact" },
      ],
    },
    {
      title: "Conteúdo",
      links: [
        { label: "Imprensa", href: "#press" },
        { label: "Galeria de Aulas", href: "#gallery" },
        { label: "Nossos Senseis", href: "#instructors" },
      ],
    },
    {
      title: "Suporte",
      links: [
        { label: "Dúvidas (FAQ)", href: "#faq" },
        { label: "Como Apoiar", href: "#contact" },
        { label: "Apoio Corporativo", href: "#sponsors" },
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
