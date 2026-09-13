"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AlertCircle, CheckCircle2, ShieldAlert, Sparkles, Workflow } from "lucide-react";
import { openPrinciples } from "@/data/site";
import { GlassCard } from "@/ui/GlassCard";
import { SectionHeading } from "@/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/ui/Reveal";
import { EASE } from "@/ui/motion";

interface PatternPillar {
  id: string;
  tabTitle: string;
  headline: string;
  historicalAttacks: string;
  vulnerability: string;
  modernCountermeasure: string;
  mitreTag: string;
}

const patternPillars: PatternPillar[] = [
  {
    id: "credentials",
    tabTitle: "1. Credentials & Phishing",
    headline: "Reused passwords & bypassed SMS authentication",
    historicalAttacks: "414s (1983), Mitnick (1995), AOL (1996), RSA SecurID (2011), MGM Resorts (2023)",
    vulnerability: "Attackers don't break encryption — they log in with stolen, phished, or voice-spoofed credentials.",
    modernCountermeasure: "Hardware FIDO2/WebAuthn security keys & phishing-resistant MFA eliminate password theft entirely.",
    mitreTag: "T1566 Phishing · T1078 Valid Accounts",
  },
  {
    id: "unpatched",
    tabTitle: "2. Unpatched Known Flaws",
    headline: "Public vulnerabilities with fixes already available",
    historicalAttacks: "Morris Worm (1988), SQL Slammer (2003), WannaCry (2017), Equifax (2017), Log4Shell (2021)",
    vulnerability: "Critical patches existed months before exploitation, but systems remained exposed on public networks.",
    modernCountermeasure: "Automated vulnerability scanning, continuous patching pipelines, and strict egress network boundaries.",
    mitreTag: "T1190 Exploit Public-Facing Application · T1210 Remote Services",
  },
  {
    id: "supply-chain",
    tabTitle: "3. Supply Chain & Trust",
    headline: "Poisoning the build pipeline & third-party vendors",
    historicalAttacks: "Target HVAC (2013), NotPetya (2017), SolarWinds (2020), MOVEit (2023), XZ Utils (2024)",
    vulnerability: "Direct perimeters were hardened, so adversaries compromised upstream dependencies and trusted partners.",
    modernCountermeasure: "Zero-trust network architecture, reproducible builds, software bill of materials (SBOM), and strict third-party scoping.",
    mitreTag: "T1195 Supply Chain Compromise · T1199 Trusted Relationship",
  },
];

export function OpenAccess() {
  const reduced = useReducedMotion();
  const [activeTab, setActiveTab] = useState(0);
  const activePillar = patternPillars[activeTab];

  return (
    <section id="open" className="section-padding relative scroll-mt-20" aria-labelledby="open-heading">
      <div className="container-content">
        <SectionHeading
          id="open-heading"
          eyebrow="Open & free"
          title="Knowledge about attacks shouldn't be gated."
          description="No plans, no paywall, no trackers. CyberTimeline is a public record — built for the security community and kept open to anyone who wants to learn."
        />

        {/* 3 Open Access Principles */}
        <Stagger as="ul" className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {openPrinciples.map((p, i) => {
            const Icon = p.icon;
            return (
              <StaggerItem key={p.id} as="li" className="h-full">
                <GlassCard className="h-full p-7">
                  <div className="flex items-start justify-between gap-4">
                    <motion.span
                      className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/10 text-cyan"
                      animate={reduced ? undefined : { y: [0, -4, 0] }}
                      transition={{ duration: 4, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </motion.span>
                    <span className="rounded-full border border-green/30 bg-green/10 px-2.5 py-1 font-mono text-[11px] text-green">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-text">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Interactive Attack Pattern Matrix Replacement */}
        <Reveal delay={0.2} className="mt-12">
          <div className="glass relative overflow-hidden rounded-3xl border border-line bg-surface/80 p-6 sm:p-10 shadow-card">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--cyan)_12%,transparent),transparent_65%)] blur-2xl"
            />

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>The Three Recurring Root Causes</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-text sm:text-2xl">
                    Every major breach exploits one of three fundamentals
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted">
                  <Workflow className="h-4 w-4 text-cyan" aria-hidden="true" />
                  <span>Pattern Analysis Matrix</span>
                </div>
              </div>

              {/* Tab Selector */}
              <div role="tablist" aria-label="Root Causes" className="scrollbar-thin flex gap-2 overflow-x-auto border-b border-line pb-2">
                {patternPillars.map((pillar, idx) => {
                  const isSelected = idx === activeTab;
                  return (
                    <button
                      key={pillar.id}
                      role="tab"
                      type="button"
                      aria-selected={isSelected}
                      onClick={() => setActiveTab(idx)}
                      className={`relative min-h-11 rounded-xl px-4 py-2.5 text-left font-mono text-xs sm:text-sm transition-all duration-200 whitespace-nowrap ${
                        isSelected
                          ? "bg-cyan/15 text-cyan border border-cyan/40 font-medium"
                          : "text-muted hover:text-text hover:bg-fill border border-transparent"
                      }`}
                    >
                      {pillar.tabTitle}
                    </button>
                  );
                })}
              </div>

              {/* Active Tab Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePillar.id}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="grid grid-cols-1 gap-6 lg:grid-cols-2 pt-2"
                >
                  <div className="flex flex-col gap-3 rounded-2xl border border-line bg-fill p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-danger">
                      <AlertCircle className="h-4 w-4" aria-hidden="true" />
                      <span>The Vulnerability Pattern</span>
                    </div>
                    <h4 className="text-base font-semibold text-text">{activePillar.headline}</h4>
                    <p className="text-sm leading-relaxed text-muted">{activePillar.vulnerability}</p>
                    <div className="mt-2 pt-3 border-t border-line/60">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-muted">Historical Examples:</span>
                      <p className="mt-1 text-xs font-mono text-cyan/90">{activePillar.historicalAttacks}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 rounded-2xl border border-green/30 bg-green/[0.04] p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-green">
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                      <span>The Modern Defense Blueprint</span>
                    </div>
                    <h4 className="text-base font-semibold text-text">How defenders break this kill chain</h4>
                    <p className="text-sm leading-relaxed text-muted">{activePillar.modernCountermeasure}</p>
                    <div className="mt-2 pt-3 border-t border-line/60">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-muted">MITRE Techniques:</span>
                      <p className="mt-1 text-xs font-mono text-text/80">{activePillar.mitreTag}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
