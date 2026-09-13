"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, GITHUB_URL } from "@/data/nav";
import { PrimaryButton } from "@/ui/PrimaryButton";
import { ThemeToggle } from "@/ui/ThemeToggle";
import { Logo } from "@/ui/Logo";
import { GithubIcon } from "@/ui/icons";
import { EASE, fadeOnly, reveal } from "@/ui/motion";

const SCROLL_THRESHOLD = 40;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cyan focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-on-accent"
      >
        Skip to content
      </a>
      <motion.nav
        aria-label="Primary"
        initial={reduced ? { opacity: 0 } : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className={`transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled || open ? "border-b border-line bg-bg/70 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-content flex h-16 items-center justify-between gap-4">
          <Logo />

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative inline-flex min-h-11 items-center rounded-full px-3.5 text-sm transition-colors duration-200 ${
                      isActive ? "text-text" : "text-muted hover:text-text"
                    }`}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active"
                        transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-0 rounded-full bg-fill-hover"
                      />
                    ) : null}
                    <span className="relative">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="CyberTimeline on GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-fill-hover hover:text-text"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <PrimaryButton href="#timeline">Launch App</PrimaryButton>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-text transition-colors hover:bg-fill-hover"
            >
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-0 top-16 z-40 bg-bg/90 backdrop-blur-2xl md:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
              className="container-content flex flex-col gap-2 pt-8"
            >
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={reduced ? fadeOnly : reveal}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-4 font-heading text-2xl font-medium text-text transition-colors hover:bg-fill-hover"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={reduced ? fadeOnly : reveal} className="mt-6 flex items-center gap-3 px-4">
                <PrimaryButton href="#timeline" className="flex-1" size="lg">
                  Launch App
                </PrimaryButton>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="CyberTimeline on GitHub"
                  className="inline-flex h-13 w-13 items-center justify-center rounded-full border border-line text-text"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
