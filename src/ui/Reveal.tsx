"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeOnly, reveal, VIEWPORT } from "./motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduced = useReducedMotion();
  const variants = reduced ? fadeOnly : reveal;
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  fast?: boolean;
  as?: "div" | "ul";
}

export function Stagger({ children, className, fast = false, as = "div" }: StaggerProps) {
  const variants = { hidden: {}, visible: { transition: { staggerChildren: fast ? 0.06 : 0.1 } } };
  const shared = { className, variants, initial: "hidden", whileInView: "visible", viewport: VIEWPORT } as const;
  if (as === "ul") return <motion.ul {...shared}>{children}</motion.ul>;
  return <motion.div {...shared}>{children}</motion.div>;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}

export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const reduced = useReducedMotion();
  const variants = reduced ? fadeOnly : reveal;
  if (as === "li") {
    return (
      <motion.li className={className} variants={variants}>
        {children}
      </motion.li>
    );
  }
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
