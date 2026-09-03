<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0f1a,50:4a8cf7,100:38bdf8&height=200&section=header&text=Breach%20Timeline&fontSize=48&fontColor=ffffff&fontAlignY=38&animation=fadeIn&desc=A%20Visual%20History%20of%20Cybercrime&descAlignY=60&descSize=18" alt="Breach Timeline banner" width="100%">

<h1 align="center">Cyber Attack Timeline</h1>

<p align="center">
  <strong>35 real cyberattacks, 5 decades, told like stories instead of spreadsheets.</strong><br>
  From the first internet worm in 1988 to the Foxconn ransomware attack in 2026, explained plainly so anyone can follow what happened and why it mattered.
</p>

<div align="center">
  <img src="https://readme-typing-svg.demolab.com/?lines=No+Jargon+%C2%B7+No+Sign-up+%C2%B7+No+Tracking;Made+for+Curious+Beginners%2C+Not+Just+Experts;Click.+Read.+Understand.&font=Fira+Code&center=true&width=600&height=40&color=4a8cf7&vCenter=true&size=18&pause=2200" alt="tagline" />
</div>

<p align="center">
  <a href="https://breach-timeline-kappa.vercel.app/">
    <img src="https://img.shields.io/badge/🌐_Live%20Demo-Visit%20Site-4a8cf7?style=for-the-badge&logo=vercel&logoColor=white&labelColor=0a0f1a" alt="Live Demo">
  </a>
  <img src="https://img.shields.io/github/stars/priyanshu-rawa/Breach-Timeline?style=for-the-badge&color=e8a06a&logo=github&labelColor=0a0f1a" alt="GitHub Stars">
  <img src="https://img.shields.io/github/forks/priyanshu-rawa/Breach-Timeline?style=for-the-badge&color=38bdf8&logo=github&labelColor=0a0f1a" alt="GitHub Forks">
</p>

<p align="center">
  <img src="https://img.shields.io/github/issues/priyanshu-rawa/Breach-Timeline?style=flat-square&color=informational&labelColor=0a0f1a" alt="GitHub Issues">
  <img src="https://img.shields.io/github/license/priyanshu-rawa/Breach-Timeline?style=flat-square&color=success&labelColor=0a0f1a" alt="License">
  <img src="https://img.shields.io/github/last-commit/priyanshu-rawa/Breach-Timeline?style=flat-square&labelColor=0a0f1a" alt="Last Commit">
  <img src="https://img.shields.io/badge/type--safe-100%25-black?style=flat-square&labelColor=0a0f1a" alt="Type Safe">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square&labelColor=0a0f1a" alt="PRs Welcome">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion">
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel">
</p>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:4a8cf7,100:38bdf8&height=3&width=1000" width="100%"/>

> You don't need to be a hacker or a security expert to enjoy this. If you've ever been curious how the internet's biggest break-ins actually happened, it's for you.

<p align="center">
  <img src="public/screenshot.png" alt="Breach Timeline Screenshot" width="100%">
</p>

---

<details>
<summary><b>Table of contents</b></summary>
<br>

- [Try it right now](#try-it-right-now)
- [Why I made this](#why-i-made-this)
- [What it's built with](#what-its-built-with)
- [Inside the project](#inside-the-project)
- [Run it on your own computer](#run-it-on-your-own-computer)
- [What you'll find inside](#what-youll-find-inside)
- [Want to help?](#want-to-help)
- [License](#license)
- [Who made this](#who-made-this)

</details>

---

## Try it right now

**[Open Breach Timeline](https://breach-timeline-kappa.vercel.app/)**

No downloads, no account, no email, nothing tracking you in the background.

Click the link, search for an attack you've heard of (or haven't), filter by decade or attack type if you're in the mood for a specific era, and tap a card to read the full story. It's written to actually hold your attention, not something you skim once and forget.

---

## Why I made this

I'm not a cybersecurity expert. I'm self-taught, learning it the way most people actually do: one write-up at a time, usually at 1 AM, falling down a rabbit hole because one article linked to another.

I kept hitting the same wall. The history of cyberattacks is one of the more interesting corners of this field, but almost nothing about it is written for someone just starting out. It's scattered across dense Wikipedia pages, technical blogs, and YouTube videos that assume you already know half the vocabulary.

So I built the thing I wish existed when I was starting.

Not a list of dates. Something you sit down with: search for an attack, open a card, and find out why the Morris Worm happened, how Stuxnet managed to physically destroy machinery from across the internet, and what one small decision turned the Colonial Pipeline hack into a country-wide fuel shortage.

Here's the part that matters most: the tricks behind these headline attacks are the same ones used against ordinary people every day, phishing emails, reused passwords, skipped updates, missing two-factor authentication. Once you know how the big ones happened, you start noticing the same warning signs in your own inbox.

You don't need a technical background to enjoy this site, and you don't need one to read this page either. If a term trips you up while reading, treat it as a nudge to go look it up, not a sign this isn't for you. Everyone starts somewhere.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:38bdf8,100:4a8cf7&height=3&width=1000" width="100%"/>

## What it's built with

The site started as plain HTML, CSS, and JS, then got rebuilt on Next.js for faster loads, real type safety, and a component structure that's actually easy to extend.

Next.js 16 (App Router, Turbopack) runs on React 19. TypeScript covers the whole data layer, every attack, FAQ, and tip is a typed record instead of a loose JSON blob. Styling is Tailwind CSS with a small custom design system: an aurora background that reacts to scroll position, and dark/light themes via next-themes.

Motion runs on Framer Motion throughout, not just as decoration on a few cards. The hero fades and scales as you scroll past it, timeline cards settle in with spring physics instead of a flat fade, the navbar picks up a shadow only once you've actually scrolled, and every reveal across the page shares one tuned spring so the whole scroll feels like a single continuous motion instead of a pile of separate effects. Icons come from Lucide, fonts load through next/font.

It deploys to Vercel as a fully static, prerendered site: no database, no API routes, no server code that can be broken into.

One `npm install`, one `npm run dev`. Nothing to hand-configure before it runs.

---

## Inside the project

```text
Breach-Timeline/
│
├── public/
│   └── screenshot.png
│
├── src/
│   ├── app/
│   │   ├── layout.tsx        # root layout, fonts, theme provider
│   │   ├── page.tsx           # assembles all sections
│   │   └── globals.css        # design tokens, aurora background
│   │
│   ├── components/            # Hero, Navbar, Filters, Timeline,
│   │                           # TimelineCard, StatsChart, Tips,
│   │                           # Protect, Faq, Footer, etc.
│   │
│   ├── data/                  # typed attack, FAQ, and tip records
│   │   ├── attacks.ts
│   │   ├── faqs.ts
│   │   ├── protect.ts
│   │   └── tips.tsx
│   │
│   └── lib/
│       ├── utils.ts           # decade math, badge colors, icon lookup
│       └── motion.ts           # shared spring presets for scroll animation
│
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── README.md
└── LICENSE
```

Every section on the page is its own component under `src/components/`, and every piece of content lives in a typed file under `src/data/`. Adding a new attack means editing one array, not hunting through HTML.

---

## Run it on your own computer

```bash
git clone https://github.com/priyanshu-rawa/Breach-Timeline.git
cd Breach-Timeline

npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

Other useful commands:

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # run ESLint
```

---

## What you'll find inside

Five decades of history, 35 real incidents, each one explained in plain language.

<div align="center">

| Decade | Attacks covered |
|:------:|:---------:|
| 1980s | 2 |
| 1990s | 2 |
| 2000s | 6 |
| 2010s | 15 |
| 2020s | 10 |

</div>

It starts back with the Morris Worm, the AIDS Trojan, and the Melissa Virus, some of the earliest cyberattacks on record. From there it moves into Stuxnet, which physically destroyed nuclear centrifuges, WannaCry and NotPetya, two of the most damaging ransomware outbreaks ever, and the SolarWinds attack, which changed how the entire security industry thinks about trust in software supply chains. It closes out with 2025 and 2026, covering the Marks & Spencer, Jaguar Land Rover, and Foxconn breaches.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:4a8cf7,100:38bdf8&height=3&width=1000" width="100%"/>

## Want to help?

You don't need to be an expert to contribute. This project gets better whenever someone points out something I missed or explains it better than I did.

```bash
git clone https://github.com/YOUR-USERNAME/Breach-Timeline.git
cd Breach-Timeline
npm install

git checkout -b improve-timeline
# make your changes
git add .
git commit -m "Improve timeline information"
git push origin improve-timeline
```

Once you're ready, open a pull request. A few easy ways to help:

- Spot a major breach that's missing? Add it to `src/data/attacks.ts`.
- Notice a date or detail that's gone stale? Fix it.
- Have an eye for accessibility or mobile layout? Improve it.
- Know how to make an animation feel smoother? Refine it in the relevant component, and reuse the presets in `src/lib/motion.ts` if you can instead of inventing a new one.
- Found a typo or a confusing sentence in these docs? Clean it up.

Not sure if your idea's a good fit? Open an issue first and ask. That's welcome, no question is too small.

A few guidelines before you submit a pull request: keep changes focused on one thing at a time, match the existing visual style, run `npm run build` before pushing to make sure nothing's broken, avoid adding new dependencies unless there's a real need, test on both desktop and mobile, and write clear commit messages. If you're adding a historical fact, link a reliable source for it. The point of this project is to stay simple and easy for the next person to learn from.

---

## License

This project is open source. Check the [LICENSE](LICENSE) file for the full details.

---

## Who made this

<div align="center">

**Priyanshu**

Self-taught, still learning every day, building this as my own way of understanding cybersecurity history properly, and hoping it makes the subject feel a little less intimidating for the next person starting where I once did.

<a href="https://github.com/priyanshu-rawa">
  <img src="https://img.shields.io/badge/GitHub-@priyanshu--rawa-181717?style=for-the-badge&logo=github&logoColor=white&labelColor=0a0f1a" alt="GitHub">
</a>

</div>

---

<div align="center">

### Star history

<a href="https://star-history.com/#priyanshu-rawa/Breach-Timeline&Date">
  <img src="https://api.star-history.com/svg?repos=priyanshu-rawa/Breach-Timeline&type=Date" alt="Star History Chart" width="600">
</a>

</div>

---

<div align="center">

If this project taught you something new, or you just enjoyed exploring it, a star would genuinely mean a lot. It's brand new with no history behind it yet, every star is how the next curious person finds their way here.

**[⭐ Star this repo](https://github.com/priyanshu-rawa/Breach-Timeline)** · **[Report an issue](https://github.com/priyanshu-rawa/Breach-Timeline/issues)** · **[Open a pull request](https://github.com/priyanshu-rawa/Breach-Timeline/pulls)**

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0f1a,50:4a8cf7,100:38bdf8&height=130&section=footer" width="100%"/>
