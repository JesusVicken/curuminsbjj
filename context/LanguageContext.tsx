"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { pt, Dictionary } from "@/dictionaries/pt";
import { en } from "@/dictionaries/en";

export type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Check URL query params for ?lang=en or ?lang=pt
    const searchParams = new URLSearchParams(window.location.search);
    const urlLang = searchParams.get("lang");
    if (urlLang === "en" || urlLang === "pt") {
      setLanguageState(urlLang);
      localStorage.setItem("curumins_lang", urlLang);
      setMounted(true);
      return;
    }

    // 2. Check localStorage
    const savedLang = localStorage.getItem("curumins_lang") as Language | null;
    if (savedLang === "en" || savedLang === "pt") {
      setLanguageState(savedLang);
      setMounted(true);
      return;
    }

    // 3. Auto-detect browser language
    if (typeof navigator !== "undefined" && navigator.language) {
      const userLang = navigator.language.toLowerCase();
      if (!userLang.startsWith("pt")) {
        setLanguageState("en");
      }
    }

    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("curumins_lang", lang);
      // Update or preserve URL param if desirable
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.toString());
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  const t = useMemo(() => (language === "en" ? en : pt), [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
