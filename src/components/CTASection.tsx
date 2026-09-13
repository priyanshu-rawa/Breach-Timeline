"use client";

import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/ui/PrimaryButton";
import { Reveal } from "@/ui/Reveal";
import { Magnetic } from "@/ui/Magnetic";
import { SplitText } from "@/ui/SplitText";

export function CTASection() {
  return (
    <section className="section-padding relative" aria-labelledby="cta-heading">
      <div className="container-content">
        <Reveal>
          <div className="glow-border rounded-3xl">
            <div className="relative z-10 overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 md:py-24">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--cyan)_15%,transparent),transparent_60%),radial-gradient(ellipse_at_bottom_right,color-mix(in_srgb,var(--green)_12%,transparent),transparent_55%)]"
              />
              <div aria-hidden="true" className="scanlines pointer-events-none absolute inset-0 opacity-40" />
              <div className="relative">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                  <span aria-hidden="true">{"// "}</span>Start here
                </p>
                <h2 id="cta-heading" className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-[1.1] text-text sm:text-4xl md:text-5xl">
                  <SplitText text="Every breach leaves a pattern. Learn to read them." highlight={["pattern."]} />
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
                  All 35 incidents, fully sourced. No account, no paywall, no tracking.
                </p>
                <div className="mt-10 flex justify-center">
                  <Magnetic>
                    <PrimaryButton href="#timeline" size="lg">
                      Start Exploring — It&apos;s Free
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </PrimaryButton>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
