"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Smartphone } from "lucide-react";
import { deviceGuides, type DeviceGuide } from "@/data/devices";
import { GlassCard } from "@/ui/GlassCard";
import { Reveal, Stagger, StaggerItem } from "@/ui/Reveal";
import { AndroidIcon, AppleIcon, WindowsIcon } from "@/ui/icons";
import { EASE } from "@/ui/motion";

function getDeviceIcon(name: DeviceGuide["iconName"]) {
  const iconClass = "h-5 w-5 text-cyan";
  switch (name) {
    case "windows":
      return <WindowsIcon className={iconClass} />;
    case "apple":
      return <AppleIcon className={iconClass} />;
    case "smartphone":
      return <Smartphone className={iconClass} aria-hidden="true" />;
    case "android":
      return <AndroidIcon className={iconClass} />;
  }
}

export function DeviceProtection() {
  const reduced = useReducedMotion();

  return (
    <section id="devices" className="section-padding relative scroll-mt-20" aria-labelledby="devices-heading">
      <div className="container-content">
        {/* Header with pill + underline */}
        <Reveal className="mb-12">
          <div className="flex flex-col items-start max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-mono tracking-wider text-cyan">
              SOURCE: PRIVACY GUIDES
            </div>
            <div className="mt-3 inline-block">
              <h2
                id="devices-heading"
                className="font-heading text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl"
              >
                Protect your own devices
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
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              These guides come from{" "}
              <a
                href="https://www.privacyguides.org"
                target="_blank"
                rel="noreferrer"
                className="text-cyan underline underline-offset-4 hover:text-cyan/80 transition-colors"
              >
                Privacy Guides
              </a>
              , a non-profit, ad-free, volunteer-run resource with no affiliate links or sponsorships — just OS-by-OS
              instructions for locking down your device.
            </p>
          </div>
        </Reveal>

        {/* 4 OS Guides Grid */}
        <Stagger as="ul" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {deviceGuides.map((guide) => (
            <StaggerItem key={guide.id} as="li" className="h-full">
              <GlassCard className="h-full p-6 flex flex-col justify-between group/card">
                <div>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/25 bg-cyan/10 shadow-[0_0_12px_color-mix(in_srgb,var(--cyan)_20%,transparent)]">
                    {getDeviceIcon(guide.iconName)}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-text">
                    <a
                      href={guide.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cyan transition-colors"
                    >
                      {guide.osName}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{guide.description}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-line/60">
                  <a
                    href={guide.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open Privacy Guides ${guide.osName} documentation`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan hover:underline transition-colors"
                  >
                    <span>{guide.linkText}</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
