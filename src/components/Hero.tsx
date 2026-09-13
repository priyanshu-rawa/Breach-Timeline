"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { PrimaryButton } from "@/ui/PrimaryButton";
import { GhostButton } from "@/ui/GhostButton";
import { Magnetic } from "@/ui/Magnetic";
import { SplitText } from "@/ui/SplitText";
import { AMBIENT_LOOP_SECONDS, EASE } from "@/ui/motion";

interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
}

export function Hero() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, reduced ? 1 : 0.2]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -60]);

  // Pointer parallax for background glows.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const glowAX = useTransform(smx, [-1, 1], [-30, 30]);
  const glowAY = useTransform(smy, [-1, 1], [-20, 20]);
  const glowBX = useTransform(smx, [-1, 1], [40, -40]);
  const glowBY = useTransform(smy, [-1, 1], [30, -30]);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduced]);

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: (i * 53) % 100,
        top: (i * 37 + 11) % 100,
        size: 2 + (i % 3),
        duration: 14 + (i % 5) * 3,
        delay: (i % 7) * -2,
      })),
    [],
  );

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } };
  const item = reduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4 } } }
    : { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } };

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[92svh] flex flex-col justify-center overflow-hidden pt-28 pb-16 sm:pt-36 md:pb-24 lg:pt-40"
      aria-labelledby="hero-title"
    >
      <motion.div aria-hidden="true" style={{ y: bgY }} className="pointer-events-none absolute inset-0 -z-10">
        <div className="dot-grid grid-pan absolute inset-0 opacity-[0.22] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <motion.div
          style={{ x: glowAX, y: glowAY }}
          className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--cyan)_15%,transparent),transparent_60%)] blur-3xl"
        >
          <motion.div
            className="h-full w-full"
            animate={reduced ? undefined : { scale: [1, 1.12, 0.95, 1] }}
            transition={{ duration: AMBIENT_LOOP_SECONDS, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.div
          style={{ x: glowBX, y: glowBY }}
          className="absolute top-20 right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--green)_12%,transparent),transparent_60%)] blur-3xl"
        >
          <motion.div
            className="h-full w-full"
            animate={reduced ? undefined : { scale: [1, 0.9, 1.1, 1] }}
            transition={{ duration: AMBIENT_LOOP_SECONDS + 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        {!reduced
          ? particles.map((p) => (
              <motion.span
                key={p.id}
                className="absolute rounded-full bg-cyan"
                style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size, opacity: 0.2 }}
                animate={{ y: [0, -30, 0], opacity: [0.12, 0.3, 0.12] }}
                transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
              />
            ))
          : null}
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-content flex flex-col items-center text-center"
      >
        <motion.div variants={item}>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
            35 incidents · 5 decades · fully sourced · 100% free
          </span>
        </motion.div>

        <h1 id="hero-title" className="mt-6 max-w-4xl text-[2.75rem] font-semibold leading-[1.02] text-text sm:text-6xl lg:text-7xl">
          <SplitText
            text="Five decades of breaches. One interactive timeline."
            highlight={["breaches", "interactive", "timeline"]}
            animateOnMount
            delay={0.2}
          />
        </h1>

        <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg md:text-xl">
          Trace 35 real-world cyberattacks — from the 1988 Morris Worm to today&apos;s ransomware cartels. See how tactics, kill
          chains, and blast radius evolved, incident by incident.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <Magnetic className="w-full sm:w-auto">
            <PrimaryButton href="#timeline" size="lg" className="w-full sm:w-auto">
              Explore the Timeline
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </PrimaryButton>
          </Magnetic>
          <Magnetic className="w-full sm:w-auto">
            <GhostButton href="#evolution" size="lg" className="w-full sm:w-auto">
              How attacks evolved
            </GhostButton>
          </Magnetic>
        </motion.div>

        <motion.a
          href="#timeline"
          variants={item}
          aria-label="Scroll to timeline"
          className="mt-14 inline-flex min-h-11 flex-col items-center gap-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted hover:text-text"
        >
          Scroll to explore
          <motion.span
            animate={reduced ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex"
          >
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}
