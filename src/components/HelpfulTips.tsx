"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Compass,
  HardDrive,
  KeyRound,
  Lock,
  Mail,
  MailWarning,
  RefreshCw,
  ShieldCheck,
  Wifi,
} from "lucide-react";
import { helpfulTips, type TipItem } from "@/data/tips";
import { GlassCard } from "@/ui/GlassCard";
import { Reveal, Stagger, StaggerItem } from "@/ui/Reveal";
import { EASE } from "@/ui/motion";

function getTipIcon(name: TipItem["iconName"]) {
  const iconClass = "h-5 w-5 text-cyan";
  switch (name) {
    case "key":
      return <KeyRound className={iconClass} aria-hidden="true" />;
    case "lock":
      return <Lock className={iconClass} aria-hidden="true" />;
    case "mail":
      return <Mail className={iconClass} aria-hidden="true" />;
    case "shield":
      return <ShieldCheck className={iconClass} aria-hidden="true" />;
    case "compass":
      return <Compass className={iconClass} aria-hidden="true" />;
    case "refresh":
      return <RefreshCw className={iconClass} aria-hidden="true" />;
    case "alert-mail":
      return <MailWarning className={iconClass} aria-hidden="true" />;
    case "hard-drive":
      return <HardDrive className={iconClass} aria-hidden="true" />;
    case "wifi":
      return <Wifi className={iconClass} aria-hidden="true" />;
  }
}

export function HelpfulTips() {
  const reduced = useReducedMotion();

  return (
    <section id="tips" className="section-padding relative scroll-mt-20" aria-labelledby="tips-heading">
      <div className="container-content">
        {/* Section Header with exact Pill + Underline style */}
        <Reveal className="mb-12">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-mono tracking-wider text-cyan">
              STAY SAFE
            </div>
            <div className="mt-3 inline-block">
              <h2
                id="tips-heading"
                className="font-heading text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl"
              >
                Helpful tips before you go
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
          </div>
        </Reveal>

        {/* 3x3 Tips Grid */}
        <Stagger as="ul" className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {helpfulTips.map((tip) => (
            <StaggerItem key={tip.id} as="li" className="h-full">
              <GlassCard className="h-full p-7 flex flex-col justify-between">
                <div>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/25 bg-cyan/10 shadow-[0_0_12px_color-mix(in_srgb,var(--cyan)_20%,transparent)]">
                    {getTipIcon(tip.iconName)}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-text">{tip.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{tip.description}</p>
                </div>

                {tip.links && tip.links.length > 0 ? (
                  <div className="mt-5 pt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-cyan">
                    {tip.links.map((link, idx) => (
                      <span key={link.label} className="inline-flex items-center gap-1.5">
                        {idx > 0 && <span className="text-muted/60">·</span>}
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline hover:text-cyan/80 transition-colors inline-flex items-center gap-1"
                        >
                          {link.label}
                        </a>
                      </span>
                    ))}
                  </div>
                ) : null}
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
