import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/UI/Card";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/UI/Button";

interface ProgramCardProps {
  ageRange: string;
  name: string;
  description: string;
  features: string[];
  colorClass: string;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  ageRange,
  name,
  description,
  features,
  colorClass,
}) => {
  return (
    <Card hoverEffect className="flex flex-col h-full relative overflow-hidden border-t-4" style={{ borderColor: colorClass }}>
      <CardHeader className="p-0">
        <span
          className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase self-start"
          style={{ backgroundColor: `${colorClass}15`, color: colorClass }}
        >
          {ageRange}
        </span>
        <CardTitle className="mt-4 text-2xl font-bold">{name}</CardTitle>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mt-2">{description}</p>
      </CardHeader>

      <CardContent className="p-0 mt-6 flex-1">
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${colorClass}10` }}>
                <Icons.Check className="h-3.5 w-3.5" style={{ color: colorClass }} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="p-0 mt-8">
        <Button
          variant="outline"
          className="w-full transition-all hover:text-white"
          style={{
            ["--hover-bg" as string]: colorClass,
          } as React.CSSProperties}
          onClick={() => (window.location.href = "#contact")}
        >
          Solicitar Grade de Horários
        </Button>
      </CardFooter>
    </Card>
  );
};
export default ProgramCard;
