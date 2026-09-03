'use client';

import { motion } from 'framer-motion';
import { DECADES } from '@/lib/utils';
import type { Attack } from '@/data/attacks';
import { buttery } from '@/lib/motion';

export function StatsChart({ attacks }: { attacks: Attack[] }) {
  const counts = DECADES.map((d) => attacks.filter((a) => a.year >= d && a.year < d + 10).length);
  const max = Math.max(...counts, 1);

  return (
    <section id="statsChart" aria-label="Attack statistics" className="px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-2xl font-bold">Attacks by Decade</h2>
        <div className="flex h-48 items-end justify-center gap-6 sm:gap-10">
          {DECADES.map((d, i) => {
            const heightPct = Math.max((counts[i] / max) * 100, 4);
            return (
              <div key={d} className="flex flex-col items-center gap-2" title={`${counts[i]} attack${counts[i] === 1 ? '' : 's'} recorded in the ${d}s`}>
                <span className="font-mono text-sm font-semibold text-ink-secondary">
                  {counts[i]}
                </span>
                <div className="flex h-32 w-8 items-end overflow-hidden rounded-full bg-bg-card sm:w-10">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${heightPct}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ ...buttery, delay: i * 0.08 }}
                    className="w-full rounded-full bg-gradient-to-t from-accent to-accent-cyan"
                  />
                </div>
                <span className="text-xs text-ink-muted">{d}s</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
