'use client';

import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    document.documentElement.style.setProperty('--scroll-progress', v.toFixed(4));
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-accent via-accent-cyan to-accent-amber z-[60]"
      style={{ scaleX }}
    />
  );
}
