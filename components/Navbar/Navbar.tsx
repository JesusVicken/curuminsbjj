"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NavbarLink } from "./NavbarLink";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/UI/Button";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { cn } from "@/utils/cn";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useLockBodyScroll(isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre o Projeto" },
    { href: "/galeria", label: "Galeria" },
    { href: "/imprensa-faq", label: "Imprensa & FAQ" },
    { href: "/apoie", label: "Contato" },
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
          <Link href="#" className="flex items-center gap-3 font-display text-lg font-black tracking-widest text-white uppercase group">
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

          {/* Action Button */}
          <div className="hidden md:block">
            <Link href="/apoie">
              <Button variant="gold" size="sm">
                Apoiar Projeto
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <Icons.X className="h-6 w-6" /> : <Icons.Menu className="h-6 w-6" />}
          </button>
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
          <div className="mt-auto pb-10">
            <Link href="/apoie" onClick={() => setIsOpen(false)}>
              <Button variant="gold" size="lg" className="w-full">
                Apoiar Projeto
              </Button>
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
};
export default Navbar;
