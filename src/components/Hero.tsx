'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { Zap, ChevronDown } from 'lucide-react';
import { butteryHover } from '@/lib/motion';

const words = ['Cyber', 'Attack', 'Timeline'];

function Counter({ value, format }: { value: number; format?: (n: number) => string }) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 90, damping: 24, mass: 0.6 });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    motionVal.set(value);
  }, [value, motionVal]);

  useEffect(() => {
    const unsub = spring.on('change', (v) => {
      setDisplay(format ? format(v) : String(Math.round(v)));
    });
    return unsub;
  }, [spring, format]);

  return <span>{display}</span>;
}

export function Hero({
  stats,
}: {
  stats: { total: number; decades: number; impact: number };
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <header ref={ref} className="relative overflow-hidden px-5 pb-20 pt-20 text-center sm:pt-28">
      <motion.div style={{ y, opacity, scale }} className="mx-auto flex max-w-3xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-1.5 text-sm text-ink-secondary"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <Zap size={14} className="text-accent-amber" />
          The History of Cybercrime
        </motion.div>

        <h1 className="mb-5 flex flex-wrap justify-center gap-x-4 font-display text-5xl font-black leading-tight sm:text-7xl">
          {words.map((word, i) => (
            <span key={word} className="overflow-hidden">
              <motion.span
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.12 }}
                className="inline-block bg-gradient-to-br from-ink-primary to-ink-secondary bg-clip-text text-transparent"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-10 max-w-xl text-lg text-ink-secondary"
        >
          From the first computer worm to modern ransomware — explore the attacks that shaped
          cybersecurity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="glass-card flex items-center gap-6 rounded-2xl px-8 py-5 sm:gap-10"
        >
          <div className="flex flex-col items-center">
            <span className="font-mono text-3xl font-bold text-accent sm:text-4xl">
              <Counter value={stats.total} />
            </span>
            <span className="mt-1 text-xs uppercase tracking-wide text-ink-muted">Attacks</span>
          </div>
          <div className="h-10 w-px bg-border" />
          <div className="flex flex-col items-center">
            <span className="font-mono text-3xl font-bold text-accent-cyan sm:text-4xl">
              <Counter value={stats.decades} />
            </span>
            <span className="mt-1 text-xs uppercase tracking-wide text-ink-muted">Decades</span>
          </div>
          <div className="h-10 w-px bg-border" />
          <div className="flex flex-col items-center">
            <span className="font-mono text-3xl font-bold text-accent-amber sm:text-4xl">
              <Counter value={stats.impact} format={(n) => `$${n.toFixed(1)}B+`} />
            </span>
            <span className="mt-1 text-xs uppercase tracking-wide text-ink-muted">
              Total Impact
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-14 flex flex-col items-center gap-1 text-xs text-ink-muted"
        >
          <span>Scroll to explore</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -60]) }}
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
      />
    </header>
  );
}
