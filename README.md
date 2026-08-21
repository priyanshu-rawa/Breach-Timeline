<h1 align="center">🕸️ Cyber Attack Timeline</h1>

<p align="center">
  <strong>Breach Timeline</strong> — a visual journey through some of the cyber attacks that shaped modern cybersecurity.
</p>

<p align="center">
  <a href="https://priyanshu-rawa.github.io/Breach-Timeline">Live Demo</a> •
  <a href="https://github.com/priyanshu-rawa/Breach-Timeline">Source Code</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Site-111827?style=for-the-badge" alt="Live Demo">
  <img src="https://img.shields.io/github/stars/priyanshu-rawa/Breach-Timeline?style=for-the-badge" alt="GitHub Stars">
  <img src="https://img.shields.io/github/forks/priyanshu-rawa/Breach-Timeline?style=for-the-badge" alt="GitHub Forks">
  <img src="https://img.shields.io/github/issues/priyanshu-rawa/Breach-Timeline?style=for-the-badge" alt="GitHub Issues">
  <img src="https://img.shields.io/github/license/priyanshu-rawa/Breach-Timeline?style=for-the-badge" alt="License">
</p>

> **From the first internet worms to modern ransomware operations — explore how cyber attacks evolved, what they changed, and why they still matter.**

![Breach Timeline Screenshot](assets/screenshot.png)

---

## Live Demo

**[→ Open Breach Timeline](https://priyanshu-rawa.github.io/Breach-Timeline)**

It's fully browser-based, so there's nothing to install. Open it, search for an attack, filter the timeline, and start exploring.

---

## Why I Built This

While learning cybersecurity, I kept running into the same problem: there's a ton of information about famous cyber attacks, but it's scattered across articles, reports, videos, and security blogs. It's easy to learn what an attack did. It's a lot harder to see how attacks changed over time.

I wanted a single place to look at that history — from the Morris Worm in 1988 all the way to modern operations like Operation ENDGAME. That idea became Breach Timeline.

Instead of dumping a long list of dates on the page, I wanted something you could actually explore. Search by name, filter by decade or attack type, check the overall stats, and move through the timeline at your own pace. It also doubled as a small experiment in building a polished frontend with nothing but HTML, CSS, and vanilla JavaScript — no frameworks required.

The goal was never to document every attack ever discovered. It's to make some of the important moments in cybersecurity history a little easier to understand and remember.

History doesn't repeat itself. But it often rhymes.

---

## What's Inside

The timeline covers 29 major incidents from 1988 through 2025, and you can move through them however you like. Search by name, filter by decade or attack type, or just scroll and see how the landscape shifted over time. There's a live stats panel showing totals and impact at a glance, dark and light themes, a custom cursor with hover effects, an animated starfield background, and a scroll progress indicator so you always know where you are. Press `Ctrl + K` to jump straight to search, `Esc` to clear filters, and it all works cleanly on desktop, tablet, and mobile.

---

## Tech Stack

Built with plain HTML5, CSS3, and vanilla JavaScript — no frameworks, no build step, no unnecessary dependencies. Font Awesome handles the icons, Google Fonts (Inter and JetBrains Mono) handles the typography, and the whole thing is hosted as a static site on GitHub Pages.

---

## Project Structure

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

Kept intentionally simple, so it's easy to read, modify, and contribute to.

---

## Getting Started

Clone it, enter the folder, and open `index.html` in your browser:

```bash
git clone https://github.com/priyanshu-rawa/Breach-Timeline.git
cd Breach-Timeline
```

Prefer a local server instead?

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`. That's it — no `npm install`, no build step, no framework setup.

---

## What's Covered

The timeline currently spans five decades: 2 incidents from the 1980s, 2 from the 1990s, 7 from the 2000s, 11 from the 2010s, and 7 from the 2020s — 29 in total.

That includes the Morris Worm and AIDS Trojan from the early days; Melissa and the Chernobyl virus in the '90s; MafiaBoy, Code Red, SQL Slammer, MyDoom, Operation Aurora, Conficker, and Stuxnet through the 2000s; the Sony PlayStation and Pictures hacks, LinkedIn and Yahoo breaches, the OPM breach, the DNC email leak, WannaCry, NotPetya, Cambridge Analytica, and the Marriott and Capital One breaches in the 2010s; and SolarWinds, Colonial Pipeline, Log4j, the Uber and Clorox breaches, Change Healthcare, and Operation ENDGAME rounding out the 2020s.

---

## Why This Matters to Me

Cybersecurity is usually taught through individual technologies, vulnerabilities, and tools. But attacks have a history too. The Morris Worm showed how fast malicious software could spread across connected systems. Later attacks exposed the growing importance of web applications, supply chains, identity, ransomware, industrial systems, and large-scale data breaches.

Looking at these incidents side by side makes one thing pretty clear: the tools change, but a lot of the underlying lessons stay familiar. Understanding that history helps put today's incidents into context — a new attack might run on newer infrastructure, but the weakness behind it can look surprisingly familiar. That's really what this project is about: not just remembering famous breaches, but seeing the patterns connecting them.

---

## Contributing

Contributions are always welcome. If you spot an incorrect detail, know of a historically significant incident worth adding, or want to improve the interface, feel free to jump in.

```bash
git clone https://github.com/YOUR-USERNAME/Breach-Timeline.git
cd Breach-Timeline

git checkout -b improve-timeline
git add .
git commit -m "Improve timeline information"
git push origin improve-timeline
```

Then open a pull request. Good places to help out: adding historically significant incidents, fixing dates or details, improving accessibility or mobile responsiveness, refining animations, squashing bugs, or improving the docs. Not sure if your idea fits? Open an issue first — that's totally fine.

A few things to keep in mind before submitting a PR: keep changes focused, stay consistent with the existing visual style, avoid adding dependencies unless they're really needed, test on both desktop and mobile, and use clear commit messages. For historical info, stick to reliable sources. The goal is to keep this project lightweight, readable, and easy for others to learn from.

---

## License

This project is open source. See the [LICENSE](LICENSE) file for full terms.

---

## Author

**Priyanshu**

I built Breach Timeline as a personal project to combine two things I enjoy — learning how cyber attacks work, and building things on the web. If you find something that could be improved, open an issue or send a PR.

GitHub: [@priyanshu-rawa](https://github.com/priyanshu-rawa)

---

<div align="center">If this project helped you learn something new, drop a star ⭐ — it keeps me motivated to build more.</div>
