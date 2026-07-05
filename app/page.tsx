"use client";

import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TheProject } from "@/components/TheProject";
import { Benefits } from "@/components/Benefits";
import { OurMission } from "@/components/OurMission";
import { Press } from "@/components/Press";
import { Gallery } from "@/components/Gallery";
import { Instructors } from "@/components/Instructors";
import { Testimonials } from "@/components/Testimonials";
import { Sponsors } from "@/components/Sponsors";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
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
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <TheProject />
        <Benefits />
        <OurMission />
        <Press />
        <Gallery />
        <Instructors />
        <Testimonials />
        <Sponsors />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
