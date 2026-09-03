'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { protectEntries } from '@/data/protect';
import { buttery, butteryHover } from '@/lib/motion';

export function Protect() {
  return (
    <section aria-label="Device protection resources" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
            Source: Privacy Guides
          </div>
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Protect your own devices</h2>
          <p className="mx-auto mb-10 max-w-2xl text-sm text-ink-secondary">
            These guides come from{' '}
            <a
              className="text-accent underline underline-offset-2 hover:text-accent-hover"
              href="https://www.privacyguides.org/en/basics/why-privacy-matters/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Guides
            </a>
            , a non-profit, ad-free, volunteer-run resource with no affiliate links or
            sponsorships — just OS-by-OS instructions for locking down your device.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {protectEntries.map((entry, i) => {
            const Icon = entry.icon;
            return (
              <motion.a
                key={entry.name}
                href={entry.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...buttery, delay: Math.min(i * 0.06, 0.3) }}
                whileHover={{ y: -4, transition: butteryHover }}
                className="glass-card group flex flex-col rounded-2xl p-6"
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                  <Icon size={20} />
                </div>
                <h3 className="mb-2 font-semibold">{entry.name}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-ink-secondary">
                  {entry.description}
                </p>
                <span className="flex items-center gap-1 text-xs font-medium text-accent">
                  privacyguides.org
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
