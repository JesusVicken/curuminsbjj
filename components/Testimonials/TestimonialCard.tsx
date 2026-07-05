import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/UI/Card";
import { Icons } from "@/components/Icons";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  childName: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  childName,
}) => {
  return (
    <Card hoverEffect className="flex flex-col justify-between h-full bg-zinc-950/20 border-white/5 p-8">
      <CardContent className="p-0 border-none">
        {/* Rating Stars */}
        <div className="flex gap-1 mb-6">
          {[1, 2, 3, 4, 5].map((s) => (
            <Icons.Star key={s} className="h-4 w-4 fill-gold-accent stroke-gold-accent" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-zinc-300 text-base leading-relaxed italic font-light">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </CardContent>

      <CardHeader className="p-0 mt-8 flex flex-row items-center gap-4 border-none pb-0">
        {/* Avatar Placeholder */}
        <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-xs text-gold-accent">
          {author.charAt(0)}
        </div>
        <div className="flex flex-col">
          <CardTitle className="text-sm font-bold text-white tracking-wide">
            {author}
          </CardTitle>
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1 font-bold">
            {role} • Responsável por {childName}
          </span>
        </div>
      </CardHeader>
    </Card>
  );
};
export default TestimonialCard;
