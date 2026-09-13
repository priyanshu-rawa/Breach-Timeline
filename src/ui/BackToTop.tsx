"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { EASE } from "./motion";

export function BackToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();
  useMotionValueEvent(scrollY, "change", (v) => setVisible(v > 800));

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href="#main"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.3, ease: EASE }}
          whileHover={reduced ? undefined : { y: -2 }}
          className="pulse-ring fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface/80 text-text shadow-card backdrop-blur-xl hover:border-cyan/50"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
