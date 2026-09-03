'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { buttery } from '@/lib/motion';

export function About() {
  return (
    <section aria-label="About this project" className="px-5 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={buttery}
        className="glass-card relative mx-auto max-w-3xl overflow-hidden rounded-3xl p-8 sm:p-12"
      >
        <Quote size={64} className="absolute -right-2 -top-2 text-accent/10" />
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          About this project
        </div>
        <h2 className="mb-5 text-2xl font-bold sm:text-3xl">Why I built this</h2>
        <p className="text-[15px] leading-relaxed text-ink-secondary">
          I&apos;m self-taught in cybersecurity, learning it the way most of us actually do in
          2026 — one breach write-up, one CVE, one late-night rabbit hole at a time — and I built
          this timeline because I wanted a single place to actually explore how these attacks
          unfolded instead of another wall of text. The deeper reason is simple: studying
          something like the Morris Worm or WannaCry teaches you the exact same patterns —
          phishing, unpatched software, weak MFA — that show up in attacks on regular people every
          day, not just banks and hospitals. So if you&apos;re new to this, welcome in; and if you
          already know your stuff, I hope the &quot;why it happened&quot; behind each entry adds
          something a plain summary doesn&apos;t.
        </p>
      </motion.div>
    </section>
  );
}
