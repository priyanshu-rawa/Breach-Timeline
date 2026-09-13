"use client";

import { ArrowUp } from "lucide-react";
import { Logo } from "@/ui/Logo";
import { GitForkIcon, GithubIcon } from "@/ui/icons";

export const AUTHOR_NAME = "Priyanshu Rawat";
export const GITHUB_PROFILE_URL = "https://github.com";
export const SOURCE_CODE_URL = "https://github.com";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/80">
      <div className="container-content py-14 md:py-18">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-6 flex flex-col items-start">
            <Logo size="md" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              A self-taught deep dive into the attacks that shaped digital security — built to make cybersecurity
              history a little less intimidating.
            </p>
          </div>

          {/* EXPLORE Column */}
          <div className="md:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">EXPLORE</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li>
                <a href="#timeline" className="text-text hover:text-cyan transition-colors">
                  The Timeline
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-text hover:text-cyan transition-colors">
                  Attack Stats
                </a>
              </li>
              <li>
                <a href="#faq" className="text-text hover:text-cyan transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* CONNECT Column */}
          <div className="md:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">CONNECT</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={GITHUB_PROFILE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-text hover:text-cyan transition-colors"
                >
                  <GithubIcon className="h-4 w-4 shrink-0 text-muted" />
                  <span>GitHub Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={SOURCE_CODE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-text hover:text-cyan transition-colors"
                >
                  <GitForkIcon className="h-4 w-4 shrink-0 text-muted" />
                  <span>Source Code</span>
                </a>
              </li>
              <li>
                <a
                  href="#main"
                  className="inline-flex items-center gap-2 text-text hover:text-cyan transition-colors"
                >
                  <ArrowUp className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
                  <span>Back to top</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Attribution Bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-line/60 pt-8 text-xs sm:text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>
            Built with ❤️ by{" "}
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-cyan hover:underline"
            >
              {AUTHOR_NAME}
            </a>
          </p>
          <p className="font-mono text-xs text-muted/80">Data sourced from public cybersecurity archives</p>
        </div>
      </div>
    </footer>
  );
}
