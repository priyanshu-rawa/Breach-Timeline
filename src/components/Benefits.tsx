"use client";

import { audiences } from "@/data/site";
import { GlassCard } from "@/ui/GlassCard";
import { SectionHeading } from "@/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/ui/Reveal";

export function Benefits() {
  return (
    <section id="who" className="section-padding relative" aria-labelledby="benefits-heading">
      <div className="container-content grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            id="benefits-heading"
            eyebrow="Who it's for"
            align="left"
            title="Four audiences. One shared record."
            description="The same 35 incidents read differently depending on your seat. The timeline is structured so each of them gets what they came for."
          />
        </div>
        <Stagger as="ul" className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {audiences.map((a) => {
            const Icon = a.icon;
            return (
              <StaggerItem key={a.id} as="li" className="h-full">
                <GlassCard className="h-full p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-green/20 bg-green/10 text-green">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-text">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{a.description}</p>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
