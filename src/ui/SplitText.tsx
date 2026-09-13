"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE, VIEWPORT } from "./motion";

interface SplitTextProps {
  text: string;
  className?: string;
  /** Words to render with a gradient treatment (case-insensitive, punctuation ignored). */
  highlight?: string[];
  delay?: number;
  animateOnMount?: boolean;
  as?: "h1" | "h2" | "p" | "span";
}

const wordVariants = {
  hidden: { opacity: 0, y: "0.6em", rotateX: -40, filter: "blur(6px)" },
  visible: { opacity: 1, y: "0em", rotateX: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: EASE } },
};

export function SplitText({ text, className = "", highlight = [], delay = 0, animateOnMount = false, as = "span" }: SplitTextProps) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  const hl = new Set(highlight.map((w) => w.toLowerCase()));
  const Tag = motion[as];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: reduced ? 0 : 0.05, delayChildren: delay } },
  };
  const item = reduced ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } } : wordVariants;

  const children: ReactNode = words.map((word, i) => {
    const clean = word.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const isHl = hl.has(clean);
    return (
      <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
        <motion.span
          variants={item}
          className={`inline-block will-change-transform ${
            isHl ? "shimmer-text bg-gradient-to-r from-cyan via-green to-cyan bg-clip-text text-transparent" : ""
          }`}
          style={{ transformOrigin: "bottom" }}
        >
          {word}
        </motion.span>
        {i < words.length - 1 ? "\u00A0" : null}
      </span>
    );
  });

  return (
    <Tag
      className={`[perspective:800px] ${className}`}
      variants={container}
      initial="hidden"
      {...(animateOnMount ? { animate: "visible" } : { whileInView: "visible", viewport: VIEWPORT })}
      aria-label={text}
    >
      {children}
    </Tag>
  );
}
