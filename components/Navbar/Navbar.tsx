"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NavbarLink } from "./NavbarLink";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/UI/Button";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { cn } from "@/utils/cn";

import { useLanguage } from "@/context/LanguageContext";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useLockBodyScroll(isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t.navbar.home },
    { href: "/sobre", label: t.navbar.about },
    { href: "/galeria", label: t.navbar.gallery },
    { href: "/imprensa-faq", label: t.navbar.press },
    { href: "/apoie", label: t.navbar.contact },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isOpen
          ? "bg-zinc-950 py-4 border-b border-white/5"
          : isScrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl"
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-display text-lg font-black tracking-widest text-white uppercase group">
            <img
              src="/logocurumin.png"
              alt="Logo Instituto Projeto Curumins BJJ"
              className="h-10 w-10 object-contain rounded-full border border-white/10 group-hover:scale-105 transition-transform duration-300"
            />
            <span className="hidden sm:inline-block">Instituto Projeto Curumins <span className="text-red-accent font-light">BJJ</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavbarLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          {/* Action & Language Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-zinc-900/90 border border-white/10 rounded-full p-1 text-[11px] shadow-inner">
              <button
                type="button"
                onClick={() => setLanguage("pt")}
                className={cn(
                  "px-2.5 py-1 rounded-full font-bold uppercase transition-all cursor-pointer",
                  language === "pt"
                    ? "bg-red-accent text-white shadow-[0_0_12px_rgba(200,16,46,0.6)]"
                    : "text-zinc-400 hover:text-white"
                )}
                aria-label="Português"
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-2.5 py-1 rounded-full font-bold uppercase transition-all cursor-pointer",
                  language === "en"
                    ? "bg-red-accent text-white shadow-[0_0_12px_rgba(200,16,46,0.6)]"
                    : "text-zinc-400 hover:text-white"
                )}
                aria-label="English"
              >
                EN
              </button>
            </div>

            <Link href="/apoie">
              <Button variant="gold" size="sm">
                {t.navbar.supportBtn}
              </Button>
            </Link>
          </div>

          {/* Mobile Right Controls: Language switcher + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            {/* Quick Mobile Language Switcher */}
            <div className="flex items-center bg-zinc-900 border border-white/10 rounded-full p-0.5 text-[10px]">
              <button
                type="button"
                onClick={() => setLanguage("pt")}
                className={cn(
                  "px-2 py-0.5 rounded-full font-bold uppercase transition-all cursor-pointer",
                  language === "pt"
                    ? "bg-red-accent text-white"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-2 py-0.5 rounded-full font-bold uppercase transition-all cursor-pointer",
                  language === "en"
                    ? "bg-red-accent text-white"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <Icons.X className="h-6 w-6" /> : <Icons.Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen ? (
        <div className="fixed inset-0 top-[73px] z-40 bg-zinc-950 border-t border-white/5 md:hidden flex flex-col px-6 py-8 gap-6 animate-fade-in">
          <nav className="flex flex-col gap-6 text-lg">
            {navLinks.map((link) => (
              <NavbarLink
                key={link.href}
                href={link.href}
                label={link.label}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-4 pb-10">
            <Link href="/apoie" onClick={() => setIsOpen(false)}>
              <Button variant="gold" size="lg" className="w-full">
                {t.navbar.supportBtn}
              </Button>
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
};
export default Navbar;
