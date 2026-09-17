"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NavbarLink } from "./NavbarLink";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/UI/Button";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { cn } from "@/utils/cn";

import { useLanguage } from "@/context/LanguageContext";

const BrazilFlag = ({ className = "w-4 h-2.5" }: { className?: string }) => (
  <svg viewBox="0 0 640 480" className={cn("rounded-[2px] object-cover shrink-0 shadow-sm", className)}>
    <path fill="#009b3a" d="M0 0h640v480H0z" />
    <path fill="#fedf00" d="M320 40 600 240 320 440 40 240Z" />
    <circle cx="320" cy="240" r="115" fill="#002776" />
    <path fill="#fff" d="M210 230a115 115 0 0 0 220 18c-15-20-75-32-140-23-30 4-60 12-80 5Z" />
  </svg>
);

const UsaFlag = ({ className = "w-4 h-2.5" }: { className?: string }) => (
  <svg viewBox="0 0 640 480" className={cn("rounded-[2px] object-cover shrink-0 shadow-sm", className)}>
    <path fill="#bd3d44" d="M0 0h640v480H0z" />
    <path stroke="#fff" strokeWidth="37" d="M0 55h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640" />
    <path fill="#192f5d" d="M0 0h260v260H0z" />
    <g fill="#fff">
      <circle cx="45" cy="45" r="10" />
      <circle cx="105" cy="45" r="10" />
      <circle cx="165" cy="45" r="10" />
      <circle cx="225" cy="45" r="10" />
      <circle cx="75" cy="95" r="10" />
      <circle cx="135" cy="95" r="10" />
      <circle cx="195" cy="95" r="10" />
      <circle cx="45" cy="145" r="10" />
      <circle cx="105" cy="145" r="10" />
      <circle cx="165" cy="145" r="10" />
      <circle cx="225" cy="145" r="10" />
      <circle cx="75" cy="195" r="10" />
      <circle cx="135" cy="195" r="10" />
      <circle cx="195" cy="195" r="10" />
    </g>
  </svg>
);

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
            {/* Language Switcher with Flags */}
            <div className="flex items-center bg-zinc-900/90 border border-white/10 rounded-full p-1 text-[11px] shadow-inner">
              <button
                type="button"
                onClick={() => setLanguage("pt")}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1 rounded-full font-bold uppercase transition-all cursor-pointer",
                  language === "pt"
                    ? "bg-red-accent text-white shadow-[0_0_12px_rgba(200,16,46,0.6)]"
                    : "text-zinc-400 hover:text-white"
                )}
                aria-label="Português"
              >
                <BrazilFlag className="w-4 h-2.5" />
                <span>PT</span>
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1 rounded-full font-bold uppercase transition-all cursor-pointer",
                  language === "en"
                    ? "bg-red-accent text-white shadow-[0_0_12px_rgba(200,16,46,0.6)]"
                    : "text-zinc-400 hover:text-white"
                )}
                aria-label="English"
              >
                <UsaFlag className="w-4 h-2.5" />
                <span>EN</span>
              </button>
            </div>

            <Link href="/apoie">
              <Button variant="gold" size="sm">
                {t.navbar.supportBtn}
              </Button>
            </Link>
          </div>

          {/* Mobile Right Controls: Language switcher + Hamburger */}
          <div className="flex md:hidden items-center gap-2.5">
            {/* Quick Mobile Language Switcher with Flags */}
            <div className="flex items-center bg-zinc-900 border border-white/10 rounded-full p-0.5 text-[10px]">
              <button
                type="button"
                onClick={() => setLanguage("pt")}
                className={cn(
                  "flex items-center gap-1 px-2.5 py-1 rounded-full font-bold uppercase transition-all cursor-pointer",
                  language === "pt"
                    ? "bg-red-accent text-white"
                    : "text-zinc-400 hover:text-white"
                )}
                aria-label="Português"
              >
                <BrazilFlag className="w-3.5 h-2.5" />
                <span>PT</span>
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={cn(
                  "flex items-center gap-1 px-2.5 py-1 rounded-full font-bold uppercase transition-all cursor-pointer",
                  language === "en"
                    ? "bg-red-accent text-white"
                    : "text-zinc-400 hover:text-white"
                )}
                aria-label="English"
              >
                <UsaFlag className="w-3.5 h-2.5" />
                <span>EN</span>
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
            {/* Language Switcher in Drawer */}
            <div className="flex items-center justify-between py-3 border-t border-white/10">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                {language === "en" ? "Language" : "Idioma"}
              </span>
              <div className="flex items-center bg-zinc-900 border border-white/10 rounded-full p-1 text-xs">
                <button
                  type="button"
                  onClick={() => setLanguage("pt")}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1 rounded-full font-bold uppercase transition-all cursor-pointer",
                    language === "pt"
                      ? "bg-red-accent text-white shadow"
                      : "text-zinc-400 hover:text-white"
                  )}
                >
                  <BrazilFlag className="w-4 h-2.5" />
                  <span>PT</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1 rounded-full font-bold uppercase transition-all cursor-pointer",
                    language === "en"
                      ? "bg-red-accent text-white shadow"
                      : "text-zinc-400 hover:text-white"
                  )}
                >
                  <UsaFlag className="w-4 h-2.5" />
                  <span>EN</span>
                </button>
              </div>
            </div>

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
