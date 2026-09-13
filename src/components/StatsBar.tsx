"use client";

import { useEffect, useState } from "react";
import { animate, motion, useReducedMotion } from "framer-motion";
import { stats, type Stat } from "@/data/site";
import { Reveal, Stagger, StaggerItem } from "@/ui/Reveal";

const COUNT_DURATION = 0.9;
const START_DELAY = 0.35;

interface CounterProps {
  stat: Stat;
  index: number;
}

function Counter({ stat, index }: CounterProps) {
  const reduced = useReducedMotion();
  const decimals = stat.decimals ?? 0;
  const finalValue = stat.value.toFixed(decimals);
  const [display, setDisplay] = useState<string>((0).toFixed(decimals));
  const [done, setDone] = useState(false);

  // Count up immediately on page load — fast, front-loaded easing.
  useEffect(() => {
    if (reduced) return;
    const controls = animate(0, stat.value, {
      duration: COUNT_DURATION,
      delay: START_DELAY + index * 0.08,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
      onComplete: () => setDone(true),
    });
    return () => controls.stop();
  }, [reduced, stat.value, decimals, index]);

  return (
    <motion.span
      animate={done && !reduced ? { scale: [1, 1.08, 1] } : undefined}
      transition={{ duration: 0.3 }}
      className="inline-block font-mono text-3xl font-medium tabular-nums text-text sm:text-4xl"
    >
      {stat.prefix}
      {reduced ? finalValue : display}
      {stat.suffix}
    </motion.span>
  );
}

export function StatsBar() {
  return (
    <section className="relative py-10 md:py-14" aria-label="Key figures">
      <div className="container-content">
        <Stagger className="glass grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
          {stats.map((stat, i) => (
            <StaggerItem
              key={stat.id}
              className="group relative flex flex-col items-center gap-2 px-4 py-7 text-center transition-colors duration-300 hover:bg-fill-hover md:py-9"
            >
              <Counter stat={stat} index={i} />
              <span className="text-sm text-muted">{stat.label}</span>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.3}>
          <p className="mt-4 text-center font-mono text-xs text-muted/80">Figures from public reporting &amp; court records.</p>
        </Reveal>
      </div>
    </section>
  );
}
