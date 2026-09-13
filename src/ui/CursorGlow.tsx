"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useTheme } from "./theme";

export function CursorGlow() {
  const reduced = useReducedMotion();
  const { theme } = useTheme();
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Buttery spring parameters: responsive, zero-lag, no overshoot
  const sx = useSpring(mouseX, { stiffness: 140, damping: 26, mass: 0.35 });
  const sy = useSpring(mouseY, { stiffness: 140, damping: 26, mass: 0.35 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(mq.matches && !reduced);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest("button, a, input, [role='tab'], [role='switch'], article, .glass");
      setIsHovered(Boolean(interactive));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  const isDark = theme === "dark";

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isHovered ? 1.15 : 1,
        opacity: isHovered ? 0.9 : 0.75,
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`pointer-events-none fixed left-0 top-0 z-0 h-[500px] w-[500px] rounded-full blur-3xl will-change-transform ${
        isDark
          ? "bg-[radial-gradient(circle,color-mix(in_srgb,var(--cyan)_12%,transparent)_0%,color-mix(in_srgb,var(--green)_6%,transparent)_40%,transparent_70%)]"
          : "bg-[radial-gradient(circle,color-mix(in_srgb,var(--cyan)_7%,transparent)_0%,color-mix(in_srgb,var(--green)_4%,transparent)_45%,transparent_70%)] mix-blend-multiply"
      }`}
    />
  );
}
