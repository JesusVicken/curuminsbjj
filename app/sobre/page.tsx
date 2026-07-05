import React from "react";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { TheProject } from "@/components/TheProject";
import { OurMission } from "@/components/OurMission";
import { Instructors } from "@/components/Instructors";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Sobre o Projeto | Curumins BJJ",
  description: "Saiba mais sobre a história de inclusão social, os valores do jiu-jitsu e os senseis voluntários do Projeto Curumins BJJ na Aldeia Teko Haw.",
};

export default function SobrePage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden pt-[73px]">
      <Navbar />
      <main className="flex-grow">
        <About />
        <TheProject />
        <OurMission />
        <Instructors />
      </main>
      <Footer />
    </div>
  );
}
