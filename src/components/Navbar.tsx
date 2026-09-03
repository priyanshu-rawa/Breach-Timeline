'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Bug, Shuffle, Share2, Moon, Sun, Check } from 'lucide-react';
import { butteryHover } from '@/lib/motion';

function IconButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      whileHover={{ y: -2, transition: butteryHover }}
      whileTap={{ scale: 0.92, transition: butteryHover }}
      className="grid h-10 w-10 place-items-center rounded-full border border-border bg-bg-card text-ink-secondary transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </motion.button>
  );
}

export function Navbar({ onRandom }: { onRandom: () => void }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [shared, setShared] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme !== 'light';
  const { scrollY } = useScroll();
  const shadowOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  function handleShare() {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: 'Cyber Attack Timeline',
        text: 'Explore the history of cyber attacks from 1988 to today.',
        url,
      }).catch(() => {});
      return;
    }
    navigator.clipboard.writeText(url).then(() => {
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }).catch(() => {});
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-transparent bg-bg-primary/70 backdrop-blur-xl">
      <motion.div
        aria-hidden="true"
        style={{ opacity: shadowOpacity }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border"
      />
      <motion.div
        aria-hidden="true"
        style={{ opacity: shadowOpacity }}
        className="pointer-events-none absolute inset-x-0 -bottom-4 h-4 bg-gradient-to-b from-black/[0.06] to-transparent"
      />
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/15 text-accent">
            <Bug size={18} />
          </span>
          <span>
            Cyber<span className="text-accent">Timeline</span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <IconButton label="Jump to a random attack" onClick={onRandom}>
            <Shuffle size={16} />
          </IconButton>
          <IconButton label="Copy a shareable link" onClick={handleShare}>
            {shared ? <Check size={16} /> : <Share2 size={16} />}
          </IconButton>
          {mounted && (
            <IconButton
              label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
            >
              {isDark ? <Moon size={16} /> : <Sun size={16} />}
            </IconButton>
          )}
        </div>
      </div>
    </nav>
  );
}
