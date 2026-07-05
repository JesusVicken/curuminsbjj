"use client";

import React from "react";
import Link from "next/link";
import { FooterLinks } from "./FooterLinks";
import { Icons } from "@/components/Icons";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Brand/Description Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 max-w-sm">
            <Link href="/" className="flex items-center gap-3 font-display text-lg font-black tracking-widest text-white uppercase group">
              <img
                src="/logocurumin.png"
                alt="Logo Curumins BJJ"
                className="h-10 w-10 object-contain rounded-full border border-white/10"
              />
              <span>Curumins <span className="text-gold-accent font-light">BJJ</span></span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              Ferramenta de inclusão social e pertencimento cultural para crianças indígenas em Brasília, 
              na Aldeia Teko Haw. Valores da arte marcial para a formação pessoal e para a vida.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://www.instagram.com/p/DLNeztiRXTF/" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-gold-accent/20 transition-all duration-300">
                <Icons.Instagram className="h-4 w-4" />
              </a>
              <a href="https://youtu.be/cXyml43QBDY" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-gold-accent/20 transition-all duration-300">
                <Icons.Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7">
            <FooterLinks />
          </div>

        </div>

        {/* Copyright and Metadata */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">
          <p>&copy; {new Date().getFullYear()} Curumins BJJ. Todos os direitos reservados.</p>
          <p>
            Forjando Caráter e Respeito no Tatame.
          </p>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
