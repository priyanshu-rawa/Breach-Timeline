'use client';

import { useEffect, useRef } from 'react';
import { Search, Calendar, Tag, X, ChevronDown } from 'lucide-react';
import { ATTACK_TYPES, DECADES } from '@/lib/utils';

interface FiltersProps {
  search: string;
  onSearchChange: (v: string) => void;
  decade: string;
  onDecadeChange: (v: string) => void;
  type: string;
  onTypeChange: (v: string) => void;
  onClear: () => void;
}

export function Filters({
  search,
  onSearchChange,
  decade,
  onDecadeChange,
  type,
  onTypeChange,
  onClear,
}: FiltersProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === 'Escape' && document.activeElement !== inputRef.current) {
        onClear();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [onClear]);

  return (
    <section
      aria-label="Filter controls"
      className="sticky top-[65px] z-40 border-b border-border bg-bg-primary/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-5 py-4">
        <div className="flex min-w-[220px] flex-1 items-center gap-2 rounded-xl border border-border bg-bg-card px-4 py-2.5">
          <Search size={16} className="shrink-0 text-ink-muted" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search attacks... (Ctrl+K)"
            className="w-full bg-transparent text-sm text-ink-primary placeholder:text-ink-muted focus:outline-none"
          />
        </div>

        <div className="relative flex items-center gap-2 rounded-xl border border-border bg-bg-card px-3 py-2.5">
          <Calendar size={15} className="shrink-0 text-ink-muted" />
          <select
            value={decade}
            onChange={(e) => onDecadeChange(e.target.value)}
            className="appearance-none bg-transparent pr-5 text-sm text-ink-primary focus:outline-none"
          >
            <option value="all">All Decades</option>
            {DECADES.map((d) => (
              <option key={d} value={d}>
                {d}s
              </option>
            ))}
          </select>
          <ChevronDown size={13} className="pointer-events-none absolute right-3 text-ink-muted" />
        </div>

        <div className="relative flex items-center gap-2 rounded-xl border border-border bg-bg-card px-3 py-2.5">
          <Tag size={15} className="shrink-0 text-ink-muted" />
          <select
            value={type}
            onChange={(e) => onTypeChange(e.target.value)}
            className="appearance-none bg-transparent pr-5 text-sm text-ink-primary focus:outline-none"
          >
            <option value="all">All Types</option>
            {ATTACK_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <ChevronDown size={13} className="pointer-events-none absolute right-3 text-ink-muted" />
        </div>

        <button
          type="button"
          onClick={onClear}
          className="flex items-center gap-1.5 rounded-xl border border-border px-4 py-2.5 text-sm text-ink-secondary transition-colors hover:border-accent hover:text-accent"
        >
          <X size={14} /> Clear
        </button>
      </div>
    </section>
  );
}
