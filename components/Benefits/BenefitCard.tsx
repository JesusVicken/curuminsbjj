import React from "react";
import { Card } from "@/components/UI/Card";
import { Icons } from "@/components/Icons";

interface BenefitCardProps {
  iconName: "Shield" | "Users" | "Award" | "Heart";
  title: string;
  description: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ iconName, title, description }) => {
  const IconComponent = Icons[iconName] || Icons.Award;

  return (
    <Card hoverEffect className="group relative overflow-hidden transition-all duration-500 border-white/5 bg-zinc-950/20 p-8 flex flex-col sm:flex-row gap-6 items-start">
      <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-accent shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
        <IconComponent className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-display text-lg font-bold text-white tracking-wide leading-tight group-hover:text-gold-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-3 text-sm text-zinc-400 leading-relaxed font-light">
          {description}
        </p>
      </div>
    </Card>
  );
};
export default BenefitCard;
