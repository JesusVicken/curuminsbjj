"use client";

import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Sponsors } from "@/components/Sponsors";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { initLenis } from "@/lib/lenis";

export default function Apoie() {
  useEffect(() => {
    const lenisInstance = initLenis();
    return () => {
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden pt-[88px]">
      <Navbar />

      <main className="flex-grow">
        <Sponsors />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
