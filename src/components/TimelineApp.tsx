'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import { attacks as allAttacks } from '@/data/attacks';
import { decadeOf, estimatedImpact } from '@/lib/utils';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Filters } from './Filters';
import { StatsChart } from './StatsChart';
import { Timeline } from './Timeline';

export function TimelineApp() {
  const [search, setSearch] = useState('');
  const [decade, setDecade] = useState('all');
  const [type, setType] = useState('all');
  const [highlightedTitle, setHighlightedTitle] = useState<string | null>(null);

  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return allAttacks.filter((a) => {
      const matchSearch =
        a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q);
      const matchDecade = decade === 'all' || decadeOf(a.year) === Number(decade);
      const matchType = type === 'all' || a.type === type;
      return matchSearch && matchDecade && matchType;
    });
  }, [search, decade, type]);

  const stats = useMemo(() => {
    const decades = new Set(filtered.map((a) => decadeOf(a.year)));
    return {
      total: filtered.length,
      decades: decades.size,
      impact: estimatedImpact(filtered.map((a) => a.type)),
    };
  }, [filtered]);

  const registerRef = useCallback((title: string, el: HTMLDivElement | null) => {
    if (el) cardRefs.current.set(title, el);
    else cardRefs.current.delete(title);
  }, []);

  const handleClear = useCallback(() => {
    setSearch('');
    setDecade('all');
    setType('all');
  }, []);

  const handleRandom = useCallback(() => {
    if (filtered.length === 0) return;
    const pick = filtered[Math.floor(Math.random() * filtered.length)];
    const el = cardRefs.current.get(pick.title);
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setHighlightedTitle(pick.title);
    setTimeout(() => setHighlightedTitle(null), 2000);
  }, [filtered]);

  return (
    <>
      <Navbar onRandom={handleRandom} />
      <Hero stats={stats} />
      <Filters
        search={search}
        onSearchChange={setSearch}
        decade={decade}
        onDecadeChange={setDecade}
        type={type}
        onTypeChange={setType}
        onClear={handleClear}
      />
      <StatsChart attacks={filtered} />
      <Timeline attacks={filtered} highlightedTitle={highlightedTitle} registerRef={registerRef} />
    </>
  );
}
