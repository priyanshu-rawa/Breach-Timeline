<h1 align="center">🕸️ Cyber Attack Timeline</h1>

<p align="center">
  <strong>An interactive, story-driven journey through the cyber attacks that shaped modern cybersecurity</strong> — from the Morris Worm in 1988 to Foxconn's 2026 ransomware breach.
</p>

<p align="center">
  <a href="https://priyanshu-rawa.github.io/Breach-Timeline"><strong>Live Demo →</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Site-4a8cf7?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo">
  <img src="https://img.shields.io/github/stars/priyanshu-rawa/Breach-Timeline?style=for-the-badge&color=e8a06a&logo=github" alt="GitHub Stars">
  <img src="https://img.shields.io/github/forks/priyanshu-rawa/Breach-Timeline?style=for-the-badge&color=38bdf8&logo=github" alt="GitHub Forks">
</p>

<p align="center">
  <img src="https://img.shields.io/github/issues/priyanshu-rawa/Breach-Timeline?style=flat-square&color=informational" alt="GitHub Issues">
  <img src="https://img.shields.io/github/license/priyanshu-rawa/Breach-Timeline?style=flat-square&color=success" alt="License">
  <img src="https://img.shields.io/github/last-commit/priyanshu-rawa/Breach-Timeline?style=flat-square" alt="Last Commit">
  <img src="https://img.shields.io/badge/dependencies-zero%20build%20step-black?style=flat-square" alt="No Build Step">
  <img src="https://img.shields.io/badge/made%20with-HTML%20%7C%20CSS%20%7C%20JS-blueviolet?style=flat-square" alt="Vanilla Stack">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square" alt="PRs Welcome">
</p>

> **From the first internet worms to modern supply-chain ransomware — explore how cyber attacks evolved, why they actually happened, and what they still teach us today.**

![Breach Timeline Screenshot](assets/screenshot.png)

<p align="center"><em>Dark, glowing, tilt-responsive cards. A live-animated stats chart. Zero frameworks. Just HTML, CSS, and JS doing more than they usually get credit for.</em></p>

---

## ✨ Live Demo

**[→ Open Breach Timeline](https://priyanshu-rawa.github.io/Breach-Timeline)**

Nothing to install, no sign-up, no tracking. Open it, search for an attack, filter by decade or type, and click any card open to read the full story behind it.

---

## 🧠 Why I Built This

I'm self-taught in cybersecurity, learning it the way most of us actually do — one breach write-up, one CVE, one late-night rabbit hole at a time. While going down that rabbit hole over and over, I kept hitting the same wall: the *history* of this field is genuinely fascinating, but it's scattered across a thousand different articles, reports, and YouTube explainers, almost none of it written for someone who's just getting curious.

So I built the timeline I wish I'd had. Not a Wikipedia-style list of dates, but something you can actually sit with — search it, filter it, click a card open and read *why* the Morris Worm happened, *how* Stuxnet physically destroyed centrifuges, *what decision* turned Colonial Pipeline into a national fuel shortage. The bigger reason it matters: the same patterns behind these massive, headline-making breaches — phishing, reused passwords, unpatched software, weak MFA — are exactly what shows up in attacks on regular people every single day. Understanding the big ones is one of the best ways to protect yourself from the small ones.

History doesn't repeat itself. But it rhymes — loudly, if you know what to listen for.

---

## 🚀 What's Inside

This isn't a static list anymore — it's grown into a full interactive experience:

- **36 major incidents**, 1988 → 2026, each with a short summary *and* a full "why it happened" story, written to be read, not skimmed
- **Click-to-expand cards** with a buttery, physics-based reveal — no jank, no layout shift to neighboring cards
- **3D tilt + cursor-spotlight** on every card, GPU-accelerated and rAF-throttled so it never drops a frame
- **A live-animated stats chart** — bars grow with elastic easing and numbers count up from zero as you scroll to them
- **Fully custom, animated dropdown filters** — not the boring native browser `<select>`
- **Buttery smooth scrolling** across the whole page (powered by Lenis + GSAP ScrollTrigger)
- **A real "Protect Your Devices" section** linking to actual official/independent security guides — not affiliate spam
- **A "Helpful Tips" section** covering password managers, MFA apps, private email clients, VPNs, and privacy-respecting browsers
- **An FAQ accordion**, dark/light mode, `Ctrl+K` search shortcut, and a fully responsive layout down to mobile

---

## 🛠️ Tech Stack

| | |
|---|---|
| **Structure & Styling** | Semantic HTML5, hand-written CSS3 (custom properties, grid, `conic-gradient` glow rings, no Tailwind, no compiler) |
| **Interactivity** | Vanilla JavaScript — no React, no Vue, no framework of any kind |
| **Motion** | [GSAP](https://gsap.com/) + ScrollTrigger for the chart and scroll-triggered reveals, [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling |
| **Icons & Type** | Font Awesome 6, Google Fonts (Playfair Display, Inter, JetBrains Mono) |
| **Hosting** | Static site on GitHub Pages — no server, no database, no backend at all |

**Zero build step. Zero npm install. Zero bloat.** Open `index.html` and it just works.

---

## 📁 Project Structure

```text
Breach-Timeline/
│
├── assets/
│   └── screenshot.png
│
├── index.html
├── style.css
├── script.js
├── README.md
└── LICENSE
```

Kept deliberately simple. Three files, no build pipeline, easy to read top to bottom and understand exactly what's happening.

---

## ⚡ Getting Started

Clone it and open it. That's genuinely the whole setup.

```bash
git clone https://github.com/priyanshu-rawa/Breach-Timeline.git
cd Breach-Timeline
```

Just double-click `index.html`, or serve it locally if you prefer:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`. No `npm install`, no build step, no framework config — just a browser.

---

## 📚 What's Covered

Five decades, thirty-six incidents:

| Decade | Incidents |
|:------:|:---------:|
| 1980s | 2 |
| 1990s | 2 |
| 2000s | 6 |
| 2010s | 15 |
| 2020s | 10 |

From the Morris Worm, AIDS Trojan, and Melissa Virus at the origin of it all, through Stuxnet, WannaCry, NotPetya, and the SolarWinds supply-chain attack that redefined "trust" in software — all the way to 2025–2026's Marks & Spencer, Jaguar Land Rover, and Foxconn breaches, still unfolding as this project is maintained.

---

## 🤝 Contributing

Contributions are genuinely welcome — this project gets better every time someone who knows more than me points something out.

```bash
git clone https://github.com/YOUR-USERNAME/Breach-Timeline.git
cd Breach-Timeline

git checkout -b improve-timeline
git add .
git commit -m "Improve timeline information"
git push origin improve-timeline
```

Then open a pull request. Good places to help:

- Adding a historically significant incident I missed
- Fixing a date, figure, or detail that's gone stale
- Improving accessibility or mobile responsiveness
- Refining animations or squashing a bug
- Improving these docs

Not sure if your idea fits? Open an issue first — that's always welcome.

A few ground rules before submitting a PR: keep changes focused, match the existing visual language, avoid adding dependencies unless they're genuinely necessary, test on both desktop and mobile, and use clear commit messages. For historical claims, cite something reliable. The goal is to keep this lightweight, readable, and easy for the next person to learn from.

---

## 📄 License

Open source. See the [LICENSE](LICENSE) file for the full terms.

---

##  Author

**Priyanshu**

Self-taught, still learning, building this as a way to understand cybersecurity history properly — and to make it a little less intimidating for the next person starting where I did.

GitHub: [@priyanshu-rawa](https://github.com/priyanshu-rawa)

---

<div align="center">

If this project taught you something, or you just liked poking around in it — a ⭐ genuinely means a lot. It's the main way projects like this get found by the next curious person.

**[⭐ Star this repo](https://github.com/priyanshu-rawa/Breach-Timeline)** · **[🐛 Report an issue](https://github.com/priyanshu-rawa/Breach-Timeline/issues)** · **[🔀 Open a PR](https://github.com/priyanshu-rawa/Breach-Timeline/pulls)**

</div>
