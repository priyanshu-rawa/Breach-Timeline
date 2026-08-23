<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0f1a,50:4a8cf7,100:38bdf8&height=200&section=header&text=Breach%20Timeline&fontSize=48&fontColor=ffffff&fontAlignY=38&animation=fadeIn&desc=A%20Visual%20History%20of%20Cybercrime&descAlignY=60&descSize=18" alt="Breach Timeline banner" width="100%">

<h1 align="center">Cyber Attack Timeline</h1>

<p align="center">
  <strong>An interactive, story-driven journey through the cyber attacks that shaped modern cybersecurity</strong> — from the Morris Worm in 1988 to Foxconn's 2026 ransomware breach.
</p>

<div align="center">
  <img src="https://readme-typing-svg.demolab.com/?lines=36+Breaches+%C2%B7+5+Decades+%C2%B7+One+Story;No+Install+%C2%B7+No+Sign-up+%C2%B7+No+Tracking;Built+to+Actually+Be+Read%2C+Not+Skimmed&font=Fira+Code&center=true&width=600&height=40&color=4a8cf7&vCenter=true&size=18&pause=2200" alt="tagline" />
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
  <img src="https://img.shields.io/badge/dependencies-zero%20build%20step-black?style=flat-square&labelColor=0a0f1a" alt="No Build Step">
  <img src="https://img.shields.io/badge/made%20with-HTML%20%7C%20CSS%20%7C%20JS-blueviolet?style=flat-square&labelColor=0a0f1a" alt="Vanilla Stack">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square&labelColor=0a0f1a" alt="PRs Welcome">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=white" alt="GSAP">
  <img src="https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white" alt="GitHub Pages">
</p>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:4a8cf7,100:38bdf8&height=3&width=1000" width="100%"/>

> **From the first internet worms to modern supply-chain ransomware — explore how cyber attacks evolved, why they actually happened, and what they still teach us today.**

<p align="center">
  <img src="assets/screenshot.png" alt="Breach Timeline Screenshot" width="100%">
</p>

---

<details>
<summary><b>📑 Table of Contents</b></summary>
<br>

- [🚀 Live Demo](#-live-demo)
- [💡 Why I Built This](#-why-i-built-this)
- [🛠️ Tech Stack](#%EF%B8%8F-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚡ Getting Started](#-getting-started)
- [📚 What's Covered](#-whats-covered)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👤 Author](#-author)

</details>

---

## 🚀 Live Demo

**[Open Breach Timeline →](https://breach-timeline-kappa.vercel.app/)**

There's nothing to install, no sign-up, and nothing tracking you. Open the link, search for an attack, filter by decade or type, and click any card to read the full story behind it — written to actually be read, not skimmed.

---

## 💡 Why I Built This

I'm self-taught in cybersecurity, learning it the way most people actually do — one breach write-up, one late-night rabbit hole at a time. Along the way I kept running into the same problem: the history of this field is genuinely interesting, but it's scattered across a thousand different articles and videos, almost none of it written for someone who's just getting curious.

So I built the site I wish I'd had. Not a plain list of dates, but something you can sit with — search it, filter it, open a card and read *why* the Morris Worm happened, *how* Stuxnet physically destroyed centrifuges, *what decision* turned Colonial Pipeline into a national fuel shortage. The bigger reason it matters: the same patterns behind these headline-making breaches — phishing, reused passwords, unpatched software, weak two-factor authentication — are exactly what shows up in attacks on regular people every day. Understanding the big ones is one of the best ways to protect yourself from the small ones.

You don't need a technical background to use this site or read this README. If a term trips you up along the way, that's just a sign to look it up, not a sign this isn't for you.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:38bdf8,100:4a8cf7&height=3&width=1000" width="100%"/>

## 🛠️ Tech Stack

| | |
|---|---|
| 🧱 **Structure & Styling** | Plain HTML5 and hand-written CSS3 — no Tailwind, no compiler, no framework |
| ⚡ **Interactivity** | Vanilla JavaScript — no React, no Vue |
| 🎬 **Motion** | [GSAP](https://gsap.com/) for scroll-triggered animation, [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling |
| 🎨 **Icons & Type** | Font Awesome, Google Fonts |
| ☁️ **Hosting** | Static site on GitHub Pages — no server, no database, no backend |

Zero build step, zero `npm install`. Open `index.html` and it works.

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

Three files, no build pipeline — easy to read top to bottom and understand exactly what's happening.

---

## ⚡ Getting Started

Clone it and open it. That's the whole setup.

```bash
git clone https://github.com/priyanshu-rawa/Breach-Timeline.git
cd Breach-Timeline
```

Just open `index.html` in your browser, or serve it locally if you'd rather:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`. No install step, no configuration — just a browser.

---

## 📚 What's Covered

Five decades, thirty-six incidents:

<div align="center">

| Decade | Incidents |
|:------:|:---------:|
| 🕹️ 1980s | 2 |
| 💾 1990s | 2 |
| 🌐 2000s | 6 |
| 📱 2010s | 15 |
| ☁️ 2020s | 10 |

</div>

From the Morris Worm, AIDS Trojan, and Melissa Virus at the start of it all, through Stuxnet, WannaCry, NotPetya, and the SolarWinds supply-chain attack that changed how the industry thinks about trust in software — up to 2025 and 2026's Marks & Spencer, Jaguar Land Rover, and Foxconn breaches.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:4a8cf7,100:38bdf8&height=3&width=1000" width="100%"/>

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

Then open a pull request. Good places to help: adding a historically significant incident I missed, fixing a date or detail that's gone stale, improving accessibility or mobile responsiveness, refining an animation, or improving these docs. Not sure if your idea fits? Open an issue first — that's always welcome.

A few things to keep in mind before submitting a PR: keep changes focused, match the existing visual style, avoid adding dependencies unless they're genuinely necessary, test on both desktop and mobile, and use clear commit messages. For historical claims, cite something reliable. The goal is to keep this lightweight and easy for the next person to learn from.

---

## 📄 License

Open source. See the [LICENSE](LICENSE) file for full terms.

---

## 👤 Author

<div align="center">

**Priyanshu**

Self-taught, still learning, building this as a way to understand cybersecurity history properly — and to make it a little less intimidating for the next person starting where I did.

<a href="https://github.com/priyanshu-rawa">
  <img src="https://img.shields.io/badge/GitHub-@priyanshu--rawa-181717?style=for-the-badge&logo=github&logoColor=white&labelColor=0a0f1a" alt="GitHub">
</a>

</div>

---

<div align="center">

### ⭐ Star History

<a href="https://star-history.com/#priyanshu-rawa/Breach-Timeline&Date">
  <img src="https://api.star-history.com/svg?repos=priyanshu-rawa/Breach-Timeline&type=Date" alt="Star History Chart" width="600">
</a>

</div>

---

<div align="center">

If this project taught you something, or you just liked poking around in it, a star genuinely means a lot — it's the main way projects like this get found by the next curious person.

**[⭐ Star this repo](https://github.com/priyanshu-rawa/Breach-Timeline)** · **[🐛 Report an issue](https://github.com/priyanshu-rawa/Breach-Timeline/issues)** · **[🔀 Open a pull request](https://github.com/priyanshu-rawa/Breach-Timeline/pulls)**

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0f1a,50:4a8cf7,100:38bdf8&height=130&section=footer" width="100%"/>
