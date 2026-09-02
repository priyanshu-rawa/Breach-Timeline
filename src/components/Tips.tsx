'use client';

import { motion } from 'framer-motion';
import { tips } from '@/data/tips';

export function Tips() {
  return (
    <section aria-label="Cybersecurity tips" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
            Stay safe
          </div>
          <h2 className="text-2xl font-bold sm:text-3xl">Helpful tips before you go</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip, i) => {
            const Icon = tip.icon;
            return (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3) }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                  <Icon size={20} />
                </div>
                <h3 className="mb-2 font-semibold">{tip.title}</h3>
                <p className="text-sm leading-relaxed text-ink-secondary [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-accent-hover">
                  {tip.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
