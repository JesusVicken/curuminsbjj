import type { Metadata } from "next";
import { Cinzel, Outfit } from "next/font/google";
import "./globals.css";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Projeto Curumins BJJ",
  description: "Transformando o futuro de crianças da Aldeia Teko Haw através do Jiu-Jitsu.",
  icons: {
    icon: "/icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${cinzel.variable} ${outfit.variable} antialiased relative`}>
        {children}
        <StickyWhatsApp />
      </body>
    </html>
  );
}
