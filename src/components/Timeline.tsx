'use client';

import { SearchX } from 'lucide-react';
import type { Attack } from '@/data/attacks';
import { TimelineCard } from './TimelineCard';

interface TimelineProps {
  attacks: Attack[];
  highlightedTitle: string | null;
  registerRef: (title: string, el: HTMLDivElement | null) => void;
}

export function Timeline({ attacks, highlightedTitle, registerRef }: TimelineProps) {
  if (attacks.length === 0) {
    return (
      <main id="timeline" className="mx-auto max-w-3xl px-5 py-24 text-center" aria-label="Timeline of cyber attacks">
        <SearchX size={40} className="mx-auto mb-4 text-ink-muted" />
        <h3 className="mb-1 text-lg font-semibold">No attacks found</h3>
        <p className="text-sm text-ink-muted">Try adjusting your filters</p>
      </main>
    );
  }

  return (
    <main
      id="timeline"
      className="mx-auto flex max-w-3xl flex-col gap-5 px-5 py-16"
      aria-label="Timeline of cyber attacks"
    >
      {attacks.map((attack, i) => (
        <TimelineCard
          key={attack.title}
          ref={(el) => registerRef(attack.title, el)}
          attack={attack}
          index={i}
          highlighted={highlightedTitle === attack.title}
        />
      ))}
    </main>
  );
}
