import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  id?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "center", id }: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <Reveal className={`relative flex max-w-2xl flex-col gap-4 ${alignClass}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--cyan)_14%,transparent),transparent_65%)] animate-pulse [animation-duration:6s] motion-reduce:animate-none blur-2xl"
      />
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
        <span aria-hidden="true">{"// "}</span>
        {eyebrow}
      </p>
      <h2 id={id} className="text-3xl font-semibold leading-[1.1] text-text sm:text-4xl md:text-5xl">
        {typeof title === "string" ? <SplitText text={title} delay={0.1} /> : title}
      </h2>
      {description ? <p className="text-base leading-relaxed text-muted sm:text-lg">{description}</p> : null}
    </Reveal>
  );
}
