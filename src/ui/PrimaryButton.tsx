"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { buttonHover, hoverTransition } from "./motion";

interface PrimaryButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  size?: "md" | "lg";
  ariaLabel?: string;
}

export function PrimaryButton({ href, children, className = "", size = "md", ariaLabel }: PrimaryButtonProps) {
  const reduced = useReducedMotion();
  const sizeClass = size === "lg" ? "h-13 px-7 text-base" : "h-11 px-5 text-sm";
  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      whileHover={reduced ? undefined : buttonHover}
      whileTap={reduced ? undefined : { scale: 0.98 }}
      transition={hoverTransition}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cyan font-medium text-on-accent shadow-glow-cyan transition-shadow duration-300 hover:shadow-glow-cyan-lg ${sizeClass} ${className}`}
    >
      {children}
    </motion.a>
  );
}
