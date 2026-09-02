import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          card: 'var(--bg-card)',
          'card-hover': 'var(--bg-card-hover)',
        },
        ink: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          cyan: 'var(--accent-cyan)',
          amber: 'var(--accent-amber)',
        },
        border: 'var(--border-color)',
      },
      fontFamily: {
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
