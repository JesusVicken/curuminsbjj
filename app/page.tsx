"use client";

import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TheProject } from "@/components/TheProject";
import { Testimonials } from "@/components/Testimonials";
import { Sponsors } from "@/components/Sponsors";
import { Footer } from "@/components/Footer";
import { initLenis } from "@/lib/lenis";

export default function Home() {
  useEffect(() => {
    const lenisInstance = initLenis();
    return () => {
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <TheProject />
        <Testimonials />
        <Sponsors />
      </main>

      <Footer />
    </div>
  );
}
