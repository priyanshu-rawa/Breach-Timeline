'use client';

import { forwardRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, BookOpen, ExternalLink } from 'lucide-react';
import type { Attack } from '@/data/attacks';
import { BADGE_COLOR, getIconForType } from '@/lib/utils';

interface TimelineCardProps {
  attack: Attack;
  index: number;
  highlighted: boolean;
}

export const TimelineCard = forwardRef<HTMLDivElement, TimelineCardProps>(function TimelineCard(
  { attack, index, highlighted },
  ref,
) {
  const [open, setOpen] = useState(false);
  const Icon = getIconForType(attack.type);
  const color = BADGE_COLOR[attack.type];
  const sentences = attack.description.split(/\.\s+/).filter(Boolean);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.3) }}
      animate={highlighted ? { borderColor: 'var(--accent)' } : { borderColor: 'var(--border-color)' }}
      className="glass-card relative rounded-2xl border p-6 pl-16 transition-shadow hover:shadow-card sm:pl-20"
    >
      <div className="absolute left-5 top-6 grid h-9 w-9 place-items-center rounded-full sm:left-6" style={{ background: `${color}1a`, color }}>
        <Icon size={16} />
      </div>

      <div className="mb-3 flex items-center gap-3">
        <span
          className="rounded-full border px-2.5 py-0.5 text-xs font-semibold"
          style={{ color, background: `${color}1a`, borderColor: `${color}30` }}
        >
          {attack.type}
        </span>
        <span className="font-mono text-sm text-ink-muted">{attack.year}</span>
      </div>

      <h3 className="mb-2 text-lg font-bold sm:text-xl">{attack.title}</h3>

      {sentences.length > 1 ? (
        <ul className="mb-3 list-disc space-y-1 pl-4 text-sm text-ink-secondary">
          {sentences.map((s, i) => (
            <li key={i}>{s.endsWith('.') ? s : `${s}.`}</li>
          ))}
        </ul>
      ) : (
        <p className="mb-3 text-sm text-ink-secondary">{attack.description}</p>
      )}

      <p className="mb-4 text-sm">
        <strong className="text-ink-primary">Impact:</strong>{' '}
        <span className="text-ink-secondary">{attack.impact}</span>
      </p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mb-4 rounded-xl border border-border bg-bg-secondary/50 p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent">
                <BookOpen size={15} />
                The story: why, how &amp; what happened
              </div>
              <p className="text-sm leading-relaxed text-ink-secondary">{attack.story}</p>
            </div>
            <div className="mb-4 rounded-xl border border-border bg-bg-secondary/50 p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent-amber">
                <BookOpen size={15} />
                Lessons learned
              </div>
              <p className="text-sm leading-relaxed text-ink-secondary">{attack.lessons}</p>
            </div>
            {attack.source && (
              <a
                href={attack.source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm text-ink-secondary transition-colors hover:border-accent hover:text-accent"
              >
                <span>Read the full story on Medium</span>
                <ExternalLink size={13} className="ml-auto" />
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-1.5 text-sm font-medium text-accent"
      >
        <span>{open ? 'Read less' : 'Read more'}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={14} />
        </motion.span>
      </button>
    </motion.div>
  );
});
