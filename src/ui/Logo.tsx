"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "./motion";

interface LogoProps {
  className?: string;
  size?: "sm" | "md";
}

const WORD_A = "Cyber";
const WORD_B = "Timeline";

export function Logo({ className = "", size = "sm" }: LogoProps) {
  const reduced = useReducedMotion();
  const textSize = size === "md" ? "text-xl" : "text-base sm:text-lg";
  const letter = reduced
    ? { rest: { y: 0 }, hover: { y: 0 } }
    : { rest: { y: 0 }, hover: { y: [0, -4, 0], transition: { duration: 0.45, ease: EASE } } };

  return (
    <motion.a
      href="#"
      aria-label="CyberTimeline home"
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative flex h-8 w-8 items-center justify-center" aria-hidden="true">
        <motion.span
          className="absolute inset-0 rounded-lg bg-[conic-gradient(from_0deg,var(--cyan),var(--green),var(--cyan))] opacity-80"
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <span className="absolute inset-[2px] rounded-[6px] bg-bg" />
        <span className="relative font-mono text-[11px] font-bold leading-none text-cyan">CT</span>
      </span>
      <span className={`font-heading font-semibold tracking-tight ${textSize}`} aria-hidden="true">
        <span className="bg-gradient-to-r from-cyan to-green bg-clip-text text-transparent">
          {WORD_A.split("").map((ch, i) => (
            <motion.span
              key={`a-${i}`}
              variants={letter}
              transition={{ delay: i * 0.03 }}
              className="inline-block"
            >
              {ch}
            </motion.span>
          ))}
        </span>
        <span className="text-text">
          {WORD_B.split("").map((ch, i) => (
            <motion.span
              key={`b-${i}`}
              variants={letter}
              transition={{ delay: (WORD_A.length + i) * 0.03 }}
              className="inline-block"
            >
              {ch}
            </motion.span>
          ))}
        </span>
        <span className="caret ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[2px] bg-cyan align-baseline" />
      </span>
    </motion.a>
  );
}
