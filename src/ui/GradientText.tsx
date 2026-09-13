import type { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-cyan via-[#7DE8F5] to-green bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
