import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/UI/Card";
import { Icons } from "@/components/Icons";

interface AboutCardProps {
  iconName: "Shield" | "Heart" | "Users" | "Award";
  title: string;
  description: string;
}

export const AboutCard: React.FC<AboutCardProps> = ({ iconName, title, description }) => {
  const IconComponent = Icons[iconName] || Icons.Award;

  return (
    <Card hoverEffect className="flex flex-col gap-2 border-white/5 bg-zinc-950/20">
      <CardHeader className="p-0 flex flex-row items-center gap-4 border-none pb-0">
        <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-accent">
          <IconComponent className="h-5 w-5" />
        </div>
        <CardTitle className="text-lg font-bold text-white tracking-wide">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 mt-4">
        <p className="text-zinc-400 text-sm leading-relaxed font-light">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
export default AboutCard;
