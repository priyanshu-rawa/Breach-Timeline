"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme";
import { EASE } from "./motion";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggle } = useTheme();
  const reduced = useReducedMotion();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative inline-flex h-11 w-[4.5rem] shrink-0 items-center rounded-full border border-line bg-fill px-1 transition-colors hover:border-line-strong ${className}`}
    >
      <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted" aria-hidden="true">
        <Sun className="h-3.5 w-3.5" />
      </span>
      <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted" aria-hidden="true">
        <Moon className="h-3.5 w-3.5" />
      </span>
      <motion.span
        layout
        transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 500, damping: 32 }}
        className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-cyan text-on-accent shadow-glow-cyan ${
          isDark ? "ml-auto" : "ml-0"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={reduced ? { opacity: 0 } : { rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="flex"
          >
            {isDark ? <Moon className="h-4 w-4" aria-hidden="true" /> : <Sun className="h-4 w-4" aria-hidden="true" />}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </button>
  );
}
