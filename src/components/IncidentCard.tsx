"use client";

import { forwardRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronDown, ExternalLink, Link2 } from "lucide-react";
import type { Category, Incident } from "@/data/incidents";
import { EASE } from "@/ui/motion";

export const categoryStyles: Record<Category, string> = {
  "Worms & Viruses": "border-amber-400/30 bg-amber-400/10 text-amber-700 dark:text-amber-300",
  "Data Breaches": "border-cyan/30 bg-cyan/10 text-cyan",
  Ransomware: "border-danger/30 bg-danger/10 text-danger",
  "Nation-State/APT": "border-violet-400/30 bg-violet-400/10 text-violet-700 dark:text-violet-300",
  "Supply Chain": "border-green/30 bg-green/10 text-green",
};

interface IncidentCardProps {
  incident: Incident;
  expanded: boolean;
  onToggle: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => void;
  tabIndex: number;
  layout?: "horizontal" | "vertical";
}

function firstSentence(text: string): string {
  const idx = text.indexOf(". ");
  return idx === -1 ? text : text.slice(0, idx + 1);
}

export const IncidentCard = forwardRef<HTMLButtonElement, IncidentCardProps>(function IncidentCard(
  { incident, expanded, onToggle, onKeyDown, tabIndex, layout = "horizontal" },
  ref,
) {
  const reduced = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const panelId = `incident-panel-${incident.id}`;
  const widthClass = layout === "horizontal" ? "w-[19rem] shrink-0 sm:w-[21rem]" : "w-full";

  const copyDeepLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#incident-${incident.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <article
      id={`incident-${incident.id}`}
      className={`${widthClass} glass flex flex-col overflow-hidden transition-[border-color,box-shadow] duration-300 ${
        expanded
          ? "border-cyan/40 shadow-[0_0_0_1px_color-mix(in_srgb,var(--cyan)_20%,transparent),0_20px_50px_-20px_color-mix(in_srgb,var(--cyan)_35%,transparent)]"
          : "hover:border-line-strong"
      }`}
    >
      <button
        ref={ref}
        type="button"
        onClick={onToggle}
        onKeyDown={onKeyDown}
        tabIndex={tabIndex}
        aria-expanded={expanded}
        aria-controls={panelId}
        className="flex w-full flex-col gap-3 p-5 text-left focus-visible:outline-none focus-visible:[box-shadow:inset_0_0_0_2px_var(--color-cyan)]"
      >
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-sm text-cyan">{incident.yearLabel ?? incident.year}</span>
          <span
            className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
              categoryStyles[incident.category]
            }`}
          >
            {incident.category}
          </span>
        </div>
        <h3 className="text-lg font-semibold leading-snug text-text">{incident.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{firstSentence(incident.summary)}</p>
        <span className="mt-1 inline-flex items-center gap-1 font-mono text-xs text-muted/80">
          {expanded ? "Collapse details" : "Expand details & case study"}
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.div
            id={panelId}
            key="panel"
            initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-4 border-t border-line px-5 pb-5 pt-4">
              <p className="text-sm leading-relaxed text-text/90">{incident.summary}</p>
              <div className="rounded-xl border border-danger/20 bg-danger/[0.06] p-3">
                <p className="font-mono text-[10px] uppercase tracking-wider text-danger">Impact &amp; Blast Radius</p>
                <p className="mt-1 text-sm leading-relaxed text-text">{incident.impact}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted">MITRE ATT&amp;CK Mapping</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {incident.mitreTags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-line bg-fill px-2 py-1 font-mono text-[11px] text-text/90"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              {/* In-depth case study on Medium + internal deep link */}
              <div className="flex flex-col gap-2 pt-1 border-t border-line/60">
                <a
                  href={incident.mediumUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 items-center justify-between rounded-lg border border-cyan/30 bg-cyan/10 px-3.5 py-2 font-mono text-xs text-cyan transition-colors hover:border-cyan hover:bg-cyan/20"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-bold">M</span>
                    <span>Read in-depth case study on Medium</span>
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </a>

                <div className="flex items-center justify-between text-xs font-mono text-muted pt-1">
                  <a
                    href={`#incident-${incident.id}`}
                    onClick={copyDeepLink}
                    className="inline-flex items-center gap-1.5 hover:text-cyan transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-green" aria-hidden="true" />
                        <span className="text-green">Link copied to clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Link2 className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copy deep-link</span>
                      </>
                    )}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
});
