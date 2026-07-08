"use client";

import React, { useState } from "react";
import { Icons } from "@/components/Icons";
import { cn } from "@/utils/cn";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-sans text-base font-bold text-white cursor-pointer py-2 focus:outline-none group"
      >
        <span className="group-hover:text-red-accent transition-colors duration-300">{question}</span>
        <span className="ml-4 flex-shrink-0 text-zinc-500">
          {isOpen ? (
            <Icons.ChevronUp className="h-5 w-5 text-red-accent" />
          ) : (
            <Icons.ChevronDown className="h-5 w-5 group-hover:text-red-accent transition-colors" />
          )}
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-expo-out text-sm text-zinc-400 overflow-hidden",
          isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-4 leading-relaxed font-light">{answer}</div>
        </div>
      </div>
    </div>
  );
};
export default FAQItem;
