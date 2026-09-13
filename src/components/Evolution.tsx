"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { eraShifts } from "@/data/site";
import { incidents, type Decade } from "@/data/incidents";
import { SectionHeading } from "@/ui/SectionHeading";
import { Reveal } from "@/ui/Reveal";
import { EASE } from "@/ui/motion";

const CATEGORY_COLORS: Record<string, string> = {
  "Worms & Viruses": "bg-amber-400",
  "Data Breaches": "bg-cyan",
  Ransomware: "bg-danger",
  "Nation-State/APT": "bg-violet-400",
  "Supply Chain": "bg-green",
};

function decadeMix(decade: Decade) {
  const rows = incidents.filter((i) => i.decade === decade);
  const counts = new Map<string, number>();
  rows.forEach((r) => counts.set(r.category, (counts.get(r.category) ?? 0) + 1));
  return { total: rows.length, parts: Array.from(counts.entries()).sort((a, b) => b[1] - a[1]) };
}

export function Evolution() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const era = eraShifts[active];
  const mix = decadeMix(era.decade as Decade);

  return (
    <section id="evolution" className="section-padding relative scroll-mt-20" aria-labelledby="evolution-heading">
      <div className="container-content">
        <SectionHeading
          id="evolution-heading"
          eyebrow="How attacks evolved"
          title="Five decades. Five shifts in what attackers wanted."
          description="Read the timeline as a story: each era has a dominant motive, a signature technique, and a lesson the next era ignored."
        />

        <Reveal className="mt-14">
          <div className="glass overflow-hidden">
            {/* Era selector */}
            <div role="tablist" aria-label="Era" className="scrollbar-thin flex overflow-x-auto border-b border-line">
              {eraShifts.map((e, i) => {
                const selected = i === active;
                return (
                  <button
                    key={e.id}
                    role="tab"
                    type="button"
                    aria-selected={selected}
                    aria-controls={`era-panel-${e.id}`}
                    onClick={() => setActive(i)}
                    className={`relative flex min-h-[4.5rem] min-w-[9rem] flex-1 flex-col items-start gap-1 px-5 py-4 text-left transition-colors ${
                      selected ? "text-text" : "text-muted hover:text-text"
                    }`}
                  >
                    <span className="font-mono text-xs text-cyan">{e.decade}</span>
                    <span className="text-sm font-medium">{e.label}</span>
                    {selected ? (
                      <motion.span
                        layoutId="era-underline"
                        transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 34 }}
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan to-green"
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>

            {/* Panel */}
            <div className="relative grid grid-cols-1 gap-8 p-6 sm:p-10 lg:grid-cols-[1.3fr_1fr]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--cyan)_12%,transparent),transparent_60%)] blur-2xl"
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={era.id}
                  id={`era-panel-${era.id}`}
                  role="tabpanel"
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="relative"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{era.decade}</p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-text sm:text-3xl md:text-4xl">{era.headline}</h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{era.description}</p>
                  <p className="mt-6 inline-flex items-center gap-2 rounded-lg border border-line bg-fill px-3 py-2 font-mono text-xs text-text">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
                    Signature technique · {era.technique}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Mix bar */}
              <div className="relative flex flex-col justify-center gap-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  Attack mix · {mix.total} incident{mix.total === 1 ? "" : "s"}
                </p>
                <div className="flex h-3 w-full overflow-hidden rounded-full bg-fill" role="img" aria-label={`Category breakdown for the ${era.decade}`}>
                  {mix.parts.map(([cat, n]) => (
                    <motion.span
                      key={`${era.id}-${cat}`}
                      layout
                      initial={{ width: 0 }}
                      animate={{ width: `${(n / mix.total) * 100}%` }}
                      transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 120, damping: 20 }}
                      className={`h-full ${CATEGORY_COLORS[cat]}`}
                    />
                  ))}
                </div>
                <ul className="flex flex-col gap-2">
                  {mix.parts.map(([cat, n], i) => (
                    <motion.li
                      key={`${era.id}-${cat}-row`}
                      initial={reduced ? { opacity: 0 } : { opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.35, ease: EASE }}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="flex items-center gap-2 text-text">
                        <span className={`h-2 w-2 rounded-full ${CATEGORY_COLORS[cat]}`} aria-hidden="true" />
                        {cat}
                      </span>
                      <span className="font-mono text-muted">{n}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
