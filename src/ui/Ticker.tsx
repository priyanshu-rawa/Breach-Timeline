import { incidents } from "@/data/incidents";

export function Ticker() {
  const items = [...incidents, ...incidents];
  return (
    <div
      className="relative overflow-hidden border-y border-line bg-surface/40 py-3 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
      aria-label="Incident ticker"
      role="marquee"
    >
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap font-mono text-xs">
        {items.map((i, idx) => (
          <span key={`${i.id}-${idx}`} className="flex items-center gap-3 text-muted" aria-hidden={idx >= incidents.length}>
            <span className="text-cyan">{i.yearLabel ?? i.year}</span>
            <span className="text-text">{i.title}</span>
            <span className="h-1 w-1 rounded-full bg-green" />
          </span>
        ))}
      </div>
    </div>
  );
}
