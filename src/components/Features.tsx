"use client";

import { features } from "@/data/site";
import { GlassCard } from "@/ui/GlassCard";
import { SectionHeading } from "@/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/ui/Reveal";
import { motion } from "framer-motion";

export function Features() {
  return (
    <section id="features" className="section-padding relative scroll-mt-20" aria-labelledby="features-heading">
      <div className="container-content">
        <SectionHeading
          id="features-heading"
          eyebrow="Features"
          title="Built to be studied, not skimmed."
          description="Everything you need to move from 'I've heard of that breach' to 'I know exactly how it worked'."
        />
        <Stagger as="ul" className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <StaggerItem key={f.id} as="li" className="h-full">
                <GlassCard className="h-full p-7">
                  <motion.span
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-fill text-cyan transition-shadow duration-300 group-hover:shadow-[0_0_24px_color-mix(in_srgb,var(--cyan)_35%,transparent)]"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </motion.span>
                  <div className="mt-5">
                    <h3 className="text-lg font-semibold text-text">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{f.description}</p>
                  </div>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
