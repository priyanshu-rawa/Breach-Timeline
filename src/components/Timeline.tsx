"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { animate, motion, useReducedMotion, type AnimationPlaybackControls } from "framer-motion";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { CATEGORIES, DECADES, incidents, type Category, type Decade } from "@/data/incidents";
import { IncidentCard, categoryStyles } from "./IncidentCard";
import { SectionHeading } from "@/ui/SectionHeading";
import { Reveal } from "@/ui/Reveal";
import { EASE } from "@/ui/motion";

type DecadeFilter = Decade | "All";

const SCROLL_SPRING = { type: "spring", stiffness: 170, damping: 26, mass: 0.6, restDelta: 0.5 } as const;
const INERTIA_POWER = 0.6;
const INERTIA_TIME_CONSTANT = 300;
const SCROLL_PADDING = 24;

export function Timeline() {
  const reduced = useReducedMotion();
  const [decade, setDecade] = useState<DecadeFilter>("All");
  const [categories, setCategories] = useState<Set<Category>>(new Set());
  const [query, setQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [focusState, setFocusState] = useState<{ index: number; count: number }>({ index: 0, count: incidents.length });
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScroll, setCanScroll] = useState({ left: false, right: false });

  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const animRef = useRef<AnimationPlaybackControls | null>(null);
  const drag = useRef<{
    active: boolean;
    startX: number;
    startScroll: number;
    moved: boolean;
    lastX: number;
    lastT: number;
    velocity: number;
  }>({ active: false, startX: 0, startScroll: 0, moved: false, lastX: 0, lastT: 0, velocity: 0 });

  const stopScrollAnimation = useCallback(() => {
    animRef.current?.stop();
    animRef.current = null;
  }, []);

  /** Spring-animate the scroller to an absolute scrollLeft. */
  const scrollToPosition = useCallback(
    (target: number) => {
      const el = scrollerRef.current;
      if (!el) return;
      const max = Math.max(0, el.scrollWidth - el.clientWidth);
      const clamped = Math.max(0, Math.min(max, target));
      stopScrollAnimation();
      if (reduced) {
        el.scrollLeft = clamped;
        return;
      }
      animRef.current = animate(el.scrollLeft, clamped, {
        ...SCROLL_SPRING,
        onUpdate: (v) => {
          el.scrollLeft = v;
        },
      });
    },
    [reduced, stopScrollAnimation],
  );

  /** Index of the card whose left edge is nearest the current viewport start. */
  const nearestIndex = useCallback((): number => {
    const el = scrollerRef.current;
    if (!el) return 0;
    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    itemRefs.current.forEach((item, i) => {
      if (!item) return;
      const dist = Math.abs(item.offsetLeft - SCROLL_PADDING - el.scrollLeft);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    return best;
  }, []);

  const scrollToIndex = useCallback(
    (index: number) => {
      const el = scrollerRef.current;
      const item = itemRefs.current[index];
      if (!el || !item) return;
      scrollToPosition(item.offsetLeft - SCROLL_PADDING);
    },
    [scrollToPosition],
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return incidents.filter((i) => {
      if (decade !== "All" && i.decade !== decade) return false;
      if (categories.size > 0 && !categories.has(i.category)) return false;
      if (q) {
        const haystack = `${i.title} ${i.summary} ${i.impact} ${i.year} ${i.mitreTags.join(" ")}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [decade, categories, query]);

  // Reset roving focus index whenever the filtered set changes size (derived, not effect-driven).
  const focusIndex = focusState.count === filtered.length ? focusState.index : 0;

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScroll({
      left: el.scrollLeft > 4,
      right: el.scrollLeft + el.clientWidth < el.scrollWidth - 4,
    });
    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    itemRefs.current.forEach((item, i) => {
      if (!item) return;
      const d = Math.abs(item.offsetLeft - SCROLL_PADDING - el.scrollLeft);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActiveIndex(best);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, filtered.length, isDesktop]);

  // Deep-link support: expand incident from URL hash on load / hash change.
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash;
      if (!hash.startsWith("#incident-")) return;
      const id = hash.replace("#incident-", "");
      if (incidents.some((i) => i.id === id)) {
        window.requestAnimationFrame(() => setExpandedId(id));
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const toggleCategory = (c: Category) => {
    setCategories((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  };

  const clearFilters = () => {
    setDecade("All");
    setCategories(new Set());
    setQuery("");
  };

  const focusCard = (index: number) => {
    const clamped = Math.max(0, Math.min(filtered.length - 1, index));
    setFocusState({ index: clamped, count: filtered.length });
    const btn = cardRefs.current[clamped];
    btn?.focus({ preventScroll: isDesktop });
    if (isDesktop) scrollToIndex(clamped);
    else btn?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "nearest" });
  };

  const onCardKeyDown = (index: number) => (e: KeyboardEvent<HTMLButtonElement>) => {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        focusCard(index + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        focusCard(index - 1);
        break;
      case "Home":
        e.preventDefault();
        focusCard(0);
        break;
      case "End":
        e.preventDefault();
        focusCard(filtered.length - 1);
        break;
      case "Escape":
        setExpandedId(null);
        break;
      default:
        break;
    }
  };

  const step = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const pos = el.scrollLeft;
    // Find the first card strictly ahead (or behind) of the current position, with a small tolerance.
    let target = -1;
    if (dir > 0) {
      for (let i = 0; i < itemRefs.current.length; i++) {
        const item = itemRefs.current[i];
        if (item && item.offsetLeft - SCROLL_PADDING > pos + 8) {
          target = i;
          break;
        }
      }
      if (target === -1) target = filtered.length - 1;
    } else {
      for (let i = itemRefs.current.length - 1; i >= 0; i--) {
        const item = itemRefs.current[i];
        if (item && item.offsetLeft - SCROLL_PADDING < pos - 8) {
          target = i;
          break;
        }
      }
      if (target === -1) target = 0;
    }
    setActiveIndex(target);
    scrollToIndex(target);
  };

  // Pointer drag-to-scroll with inertia + snap for the horizontal scrubber.
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !scrollerRef.current) return;
    stopScrollAnimation();
    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: scrollerRef.current.scrollLeft,
      moved: false,
      lastX: e.clientX,
      lastT: performance.now(),
      velocity: 0,
    };
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || !scrollerRef.current) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 6) drag.current.moved = true;
    scrollerRef.current.scrollLeft = drag.current.startScroll - dx;
    const now = performance.now();
    const dt = Math.max(1, now - drag.current.lastT);
    drag.current.velocity = ((drag.current.lastX - e.clientX) / dt) * 1000; // px/s, positive = scrolling right
    drag.current.lastX = e.clientX;
    drag.current.lastT = now;
  };
  const onPointerUp = () => {
    if (!drag.current.active) return;
    drag.current.active = false;
    const el = scrollerRef.current;
    if (!el || !drag.current.moved) return;
    const v = drag.current.velocity;
    // Project where inertia would land, then snap to the nearest card from there.
    const projected = el.scrollLeft + INERTIA_POWER * v * (INERTIA_TIME_CONSTANT / 1000);
    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    itemRefs.current.forEach((item, i) => {
      if (!item) return;
      const d = Math.abs(item.offsetLeft - SCROLL_PADDING - projected);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    scrollToIndex(best);
  };
  const onClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (drag.current.moved) {
      e.stopPropagation();
      e.preventDefault();
      drag.current.moved = false;
    }
  };

  // Snap to nearest card after a wheel/trackpad scroll settles.
  const wheelTimer = useRef<number | null>(null);
  const onWheel = () => {
    if (drag.current.active) return;
    stopScrollAnimation();
    if (wheelTimer.current) window.clearTimeout(wheelTimer.current);
    wheelTimer.current = window.setTimeout(() => scrollToIndex(nearestIndex()), 140);
  };

  useEffect(() => () => stopScrollAnimation(), [stopScrollAnimation]);

  const hasFilters = decade !== "All" || categories.size > 0 || query.trim().length > 0;
  const yearRange =
    filtered.length > 0 ? `${filtered[0].year}–${filtered[filtered.length - 1].year}` : "—";

  return (
    <section id="timeline" className="section-padding relative scroll-mt-20" aria-labelledby="timeline-heading">
      <div className="container-content">
        <SectionHeading
          id="timeline-heading"
          eyebrow="The timeline"
          title="Thirty-five incidents. Every one of them real."
          description="Scrub through five decades, filter by attack class, and expand any incident for impact figures and MITRE ATT&CK technique mappings."
        />

        <Reveal className="mt-14" delay={0.1}>
          <div id="eras" className="scroll-mt-24" />
          {/* Browser frame */}
          <div className="glass relative overflow-hidden rounded-2xl shadow-card">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--cyan)_12%,transparent),transparent_65%)] blur-2xl"
            />
            {/* Chrome */}
            <div className="flex items-center gap-3 border-b border-line bg-fill px-4 py-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]/80" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]/80" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]/80" />
              </div>
              <div className="mx-auto flex h-8 w-full max-w-md items-center justify-center rounded-md border border-line bg-bg/60 px-3 font-mono text-xs text-muted">
                <span className="text-green">●</span>
                <span className="ml-2 truncate">
                  cybertimeline.dev/{decade === "All" ? "all" : decade}
                  {categories.size > 0 ? `?category=${categories.size}` : ""}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-4 border-b border-line px-4 py-4 sm:px-6">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div role="tablist" aria-label="Decade" className="scrollbar-thin -mx-1 flex gap-1 overflow-x-auto px-1 pb-1">
                  {(["All", ...DECADES] as DecadeFilter[]).map((d) => {
                    const active = decade === d;
                    return (
                      <button
                        key={d}
                        role="tab"
                        type="button"
                        aria-selected={active}
                        onClick={() => setDecade(d)}
                        className={`relative min-h-11 shrink-0 rounded-full px-4 font-mono text-sm transition-colors ${
                          active ? "text-on-accent" : "text-muted hover:text-text"
                        }`}
                      >
                        {active ? (
                          <motion.span
                            layoutId="decade-pill"
                            transition={reduced ? { duration: 0 } : { duration: 0.35, ease: EASE }}
                            className="absolute inset-0 rounded-full bg-cyan"
                          />
                        ) : null}
                        <span className="relative">{d}</span>
                      </button>
                    );
                  })}
                </div>

                <label className="relative flex min-h-11 items-center lg:w-72">
                  <span className="sr-only">Search incidents</span>
                  <Search className="pointer-events-none absolute left-3 h-4 w-4 text-muted" aria-hidden="true" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search title, year, technique…"
                    className="h-11 w-full rounded-full border border-line bg-bg/60 pl-9 pr-9 text-sm text-text placeholder:text-muted/70 focus:border-cyan/50 focus:outline-none"
                  />
                  {query ? (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      aria-label="Clear search"
                      className="absolute right-1 inline-flex h-9 w-9 items-center justify-center rounded-full text-muted hover:text-text"
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  ) : null}
                </label>
              </div>

              <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Category filters">
                {CATEGORIES.map((c) => {
                  const active = categories.has(c);
                  return (
                    <button
                      key={c}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleCategory(c)}
                      className={`min-h-11 rounded-full border px-3.5 font-mono text-xs transition-all duration-200 sm:min-h-9 ${
                        active ? categoryStyles[c] : "border-line bg-fill text-muted hover:border-line-strong hover:text-text"
                      }`}
                    >
                      {c}
                    </button>
                  );
                })}
                {hasFilters ? (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="ml-auto inline-flex min-h-11 items-center gap-1 font-mono text-xs text-muted hover:text-text sm:min-h-9"
                  >
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                    Clear
                  </button>
                ) : null}
              </div>

              <p role="status" aria-live="polite" className="font-mono text-xs text-muted">
                <span className="text-cyan">{filtered.length}</span> of {incidents.length} incidents
                <span className="text-muted/60"> · </span>
                {yearRange}
              </p>
            </div>

            {/* Body */}
            <div className="relative bg-surface/60">
              {filtered.length === 0 ? (
                <div className="flex flex-col items-center gap-3 px-6 py-20 text-center">
                  <p className="font-mono text-sm text-muted">No incidents match these filters.</p>
                  <button type="button" onClick={clearFilters} className="min-h-11 font-mono text-sm text-cyan hover:underline">
                    Reset filters
                  </button>
                </div>
              ) : isDesktop ? (
                <div className="relative">
                  {/* Year rail */}
                  <div aria-hidden="true" className="pointer-events-none absolute left-0 right-0 top-[3.25rem] h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
                  <div
                    ref={scrollerRef}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onPointerLeave={onPointerUp}
                    onClickCapture={onClickCapture}
                    onWheel={onWheel}
                    className="scrollbar-thin flex cursor-grab gap-5 overflow-x-auto px-6 pb-6 pt-6 select-none active:cursor-grabbing"
                  >
                    {filtered.map((incident, index) => (
                      <motion.div
                        key={incident.id}
                        ref={(el) => {
                          itemRefs.current[index] = el;
                        }}
                        animate={reduced ? undefined : { scale: index === activeIndex ? 1 : 0.97, opacity: index === activeIndex ? 1 : 0.85 }}
                        transition={{ type: "spring", stiffness: 200, damping: 26 }}
                        className="flex shrink-0 origin-bottom flex-col"
                      >
                        <div className="mb-3 flex h-6 items-center gap-2 pl-1" aria-hidden="true">
                          <span className={`h-2.5 w-2.5 rounded-full border-2 border-cyan transition-colors duration-300 ${index === activeIndex ? "bg-cyan" : "bg-bg"} shadow-[0_0_10px_color-mix(in_srgb,var(--cyan)_60%,transparent)]`} />
                          <span className={`font-mono text-[11px] transition-colors duration-300 ${index === activeIndex ? "text-cyan" : "text-muted"}`}>{incident.yearLabel ?? incident.year}</span>
                        </div>
                        <IncidentCard
                          ref={(el) => {
                            cardRefs.current[index] = el;
                          }}
                          incident={incident}
                          expanded={expandedId === incident.id}
                          onToggle={() => setExpandedId((cur) => (cur === incident.id ? null : incident.id))}
                          onKeyDown={onCardKeyDown(index)}
                          tabIndex={index === focusIndex ? 0 : -1}
                          layout="horizontal"
                        />
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-line px-6 py-3">
                    <p className="font-mono text-[11px] text-muted/80">Drag or swipe to scrub · ← → to step · Enter to expand</p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => step(-1)}
                        disabled={!canScroll.left}
                        aria-label="Scroll timeline left"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-text transition-colors hover:border-line-strong disabled:opacity-30"
                      >
                        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => step(1)}
                        disabled={!canScroll.right}
                        aria-label="Scroll timeline right"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-text transition-colors hover:border-line-strong disabled:opacity-30"
                      >
                        <ChevronRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative px-4 py-5">
                  <div aria-hidden="true" className="pointer-events-none absolute bottom-6 left-[1.6rem] top-6 w-px bg-gradient-to-b from-transparent via-cyan/40 to-transparent" />
                  <ul className="flex flex-col gap-4">
                    {filtered.map((incident, index) => (
                      <li key={incident.id} className="relative pl-7">
                        <span
                          aria-hidden="true"
                          className="absolute left-[0.2rem] top-5 h-2.5 w-2.5 rounded-full border-2 border-cyan bg-bg shadow-[0_0_10px_color-mix(in_srgb,var(--cyan)_60%,transparent)]"
                        />
                        <IncidentCard
                          ref={(el) => {
                            cardRefs.current[index] = el;
                          }}
                          incident={incident}
                          expanded={expandedId === incident.id}
                          onToggle={() => setExpandedId((cur) => (cur === incident.id ? null : incident.id))}
                          onKeyDown={onCardKeyDown(index)}
                          tabIndex={index === focusIndex ? 0 : -1}
                          layout="vertical"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
