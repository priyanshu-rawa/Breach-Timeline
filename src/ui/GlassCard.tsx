"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { hoverTransition } from "./motion";

interface GlassCardProps {
  children: ReactNode;
  hover?: boolean;
  tilt?: boolean;
  className?: string;
}

const TILT_DEG = 6;

export function GlassCard({ children, hover = true, tilt = true, className = "" }: GlassCardProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spx = useSpring(px, { stiffness: 220, damping: 22 });
  const spy = useSpring(py, { stiffness: 220, damping: 22 });
  const rotateX = useTransform(spy, [0, 1], [TILT_DEG, -TILT_DEG]);
  const rotateY = useTransform(spx, [0, 1], [-TILT_DEG, TILT_DEG]);
  const glowX = useTransform(spx, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(spy, [0, 1], ["0%", "100%"]);
  const glow = useMotionTemplate`radial-gradient(360px circle at ${glowX} ${glowY}, color-mix(in srgb, var(--cyan) 14%, transparent), transparent 60%)`;

  const interactive = hover && tilt && !reduced;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!interactive || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={interactive ? { rotateX, rotateY, transformPerspective: 1000 } : undefined}
      whileHover={hover && !reduced ? { y: -4 } : undefined}
      transition={hoverTransition}
      className={`glass group relative transition-[border-color,box-shadow] duration-300 ${
        hover ? "hover:border-line-strong hover:shadow-card" : ""
      } ${className}`}
    >
      {interactive ? (
        <motion.div
          aria-hidden="true"
          style={{ background: glow }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      ) : null}
      <div className="relative flex h-full flex-col">{children}</div>
    </motion.div>
  );
}
