'use client';

import { Bug, Github, GitBranch, ArrowUp, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-border px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="mb-3 flex items-center gap-2 text-lg font-extrabold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/15 text-accent">
                <Bug size={18} />
              </span>
              <span>
                Cyber<span className="text-accent">Timeline</span>
              </span>
            </div>
            <p className="max-w-sm text-sm text-ink-secondary">
              A self-taught deep dive into the attacks that shaped digital security — built to
              make cybersecurity history a little less intimidating.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-ink-primary">Explore</h4>
            <div className="flex flex-col gap-2 text-sm text-ink-secondary">
              <a href="#timeline" className="hover:text-accent">
                The Timeline
              </a>
              <a href="#statsChart" className="hover:text-accent">
                Attack Stats
              </a>
              <a href="#faqList" className="hover:text-accent">
                FAQ
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-ink-primary">Connect</h4>
            <div className="flex flex-col gap-2 text-sm text-ink-secondary">
              <a
                href="https://github.com/priyanshu-rawa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent"
              >
                <Github size={14} /> GitHub Profile
              </a>
              <a
                href="https://github.com/priyanshu-rawa/breach-timeline"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent"
              >
                <GitBranch size={14} /> Source Code
              </a>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 text-left hover:text-accent"
              >
                <ArrowUp size={14} /> Back to top
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-border pt-6 text-center text-sm text-ink-muted">
          <p className="flex items-center gap-1.5">
            Built with <Heart size={13} className="fill-accent-amber text-accent-amber" /> by{' '}
            <a
              href="https://github.com/priyanshu-rawa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-secondary hover:text-accent"
            >
              Priyanshu Rawat
            </a>
          </p>
          <p>Data sourced from public cybersecurity archives</p>
        </div>
      </div>
    </footer>
  );
}
