"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal } from "@/ui/Reveal";
import { EASE } from "@/ui/motion";

export function WhyIBuiltThis() {
  const reduced = useReducedMotion();

  return (
    <section id="about" className="section-padding relative scroll-mt-20" aria-labelledby="why-built-heading">
      <div className="container-content">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl border border-line bg-surface/70 p-7 sm:p-12 md:p-16 shadow-card">
            {/* Elegant angled geometric lighting backdrop */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 h-[38rem] w-[38rem] rotate-12 bg-gradient-to-bl from-cyan/20 via-blue-500/10 to-transparent blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--cyan)_12%,transparent),transparent_70%)] blur-2xl" />
              <div
                className="absolute right-0 top-0 bottom-0 w-2/5 opacity-15 [background:linear-gradient(135deg,transparent_20%,var(--cyan)_50%,transparent_80%)]"
              />
            </div>

            {/* Giant quote watermark */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-8 top-8 opacity-[0.07] dark:opacity-[0.12] text-text"
            >
              <Quote className="h-28 w-28 md:h-36 md:w-36 rotate-180" />
            </div>

            <div className="relative max-w-4xl">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-mono tracking-wider text-cyan">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--cyan)]" aria-hidden="true" />
                ABOUT THIS PROJECT
              </div>

              {/* Title with distinctive underline */}
              <div className="mt-4 inline-block">
                <h2
                  id="why-built-heading"
                  className="font-heading text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl"
                >
                  Why I built this
                </h2>
                <motion.div
                  aria-hidden="true"
                  initial={reduced ? { width: "100%" } : { width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className="mt-2 h-[2px] bg-gradient-to-r from-cyan via-[#60A5FA] to-transparent"
                />
              </div>

              {/* Narrative body */}
              <div className="mt-8 text-base leading-relaxed text-muted sm:text-lg sm:leading-loose">
                <p>
                  I&apos;m self-taught in cybersecurity, learning it the way most of us actually do in 2026 — one breach
                  write-up, one CVE, one late-night rabbit hole at a time — and I built this timeline because I wanted a
                  single place to actually explore how these attacks unfolded instead of another wall of text. The deeper
                  reason is simple: studying something like the Morris Worm or WannaCry teaches you the exact same
                  patterns — phishing, unpatched software, weak MFA — that show up in attacks on regular people every
                  day, not just banks and hospitals. So if you&apos;re new to this, welcome in; and if you already know your
                  stuff, I hope the &ldquo;why it happened&rdquo; behind each entry adds something a plain summary doesn&apos;t.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
