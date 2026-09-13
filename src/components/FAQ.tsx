"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import { Reveal, Stagger, StaggerItem } from "@/ui/Reveal";
import { EASE } from "@/ui/motion";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const reduced = useReducedMotion();

  return (
    <section id="faq" className="section-padding relative scroll-mt-20" aria-labelledby="faq-heading">
      <div className="container-content">
        {/* Header with pill + underline */}
        <Reveal className="mb-12">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1 text-xs font-mono tracking-wider text-cyan">
              FAQ
            </div>
            <div className="mt-3 inline-block">
              <h2
                id="faq-heading"
                className="font-heading text-3xl font-semibold leading-tight text-text sm:text-4xl md:text-5xl"
              >
                Common questions
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

        {/* Accordion list */}
        <Stagger as="ul" fast className="mx-auto flex w-full flex-col gap-3.5">
          {faqItems.map((item) => {
            const open = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;
            return (
              <StaggerItem key={item.id} as="li">
                <div
                  className={`glass overflow-hidden rounded-2xl border transition-all duration-300 ${
                    open ? "border-cyan/40 shadow-[0_0_20px_-5px_color-mix(in_srgb,var(--cyan)_20%,transparent)]" : "border-line hover:border-line-strong"
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenId(open ? null : item.id)}
                      className="flex min-h-16 w-full items-center justify-between gap-4 px-6 py-5 text-left text-base sm:text-lg font-medium text-text transition-colors"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-cyan/90 transition-transform duration-300 ${
                          open ? "rotate-180 text-cyan" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        key="content"
                        initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        animate={reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                        exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-line/60 px-6 pt-4 pb-6">
                          <p className="text-sm sm:text-base leading-relaxed text-muted">{item.answer}</p>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
