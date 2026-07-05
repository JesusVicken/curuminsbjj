import React from "react";
import { cn } from "@/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark" | "gold";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "primary", size = "md", isLoading, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-sans font-semibold tracking-wide uppercase transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gold-accent disabled:opacity-50 disabled:pointer-events-none cursor-pointer active:scale-98",
          {
            // Primary - Ruby Red
            "bg-red-accent text-white hover:bg-red-600 hover:shadow-[0_0_20px_rgba(200,16,46,0.3)] border border-transparent":
              variant === "primary",
            // Gold
            "bg-gold-accent text-zinc-950 hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] border border-transparent":
              variant === "gold",
            // Dark - Premium Glassmorphic Dark
            "bg-zinc-950/40 text-white border border-zinc-800 hover:bg-zinc-900/60 hover:border-zinc-700":
              variant === "dark",
            // Secondary - White clean
            "bg-white text-zinc-950 hover:bg-zinc-100":
              variant === "secondary",
            // Outline - Gold themed outline
            "border border-gold-accent/40 bg-transparent hover:bg-gold-accent/10 hover:border-gold-accent text-gold-accent":
              variant === "outline",
            // Ghost
            "bg-transparent hover:bg-white/5 text-zinc-400 hover:text-white":
              variant === "ghost",
          },
          {
            "h-10 px-5 text-xs": size === "sm",
            "h-12 px-7 text-sm": size === "md",
            "h-14 px-9 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-2.5 h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
