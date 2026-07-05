import React from "react";
import { cn } from "@/utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-[32px] border border-white/5 bg-zinc-950/40 backdrop-blur-md p-8 transition-all duration-500 ease-expo-out",
          hoverEffect && "hover:border-gold-accent/30 hover:bg-zinc-900/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.05)]",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 pb-6 border-b border-white/5", className)} {...props} />
);
CardHeader.displayName = "CardHeader";

export const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("font-display text-xl font-bold tracking-tight text-white", className)} {...props} />
);
CardTitle.displayName = "CardTitle";

export const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-xs tracking-wider text-zinc-400 font-medium uppercase mt-1", className)} {...props} />
);
CardDescription.displayName = "CardDescription";

export const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("pt-6", className)} {...props} />
);
CardContent.displayName = "CardContent";

export const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center pt-6 border-t border-white/5 mt-6", className)} {...props} />
);
CardFooter.displayName = "CardFooter";
