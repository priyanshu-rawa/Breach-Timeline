<div align="center">

# CyberTimeline

**35 real cyberattacks. 5 decades. One interactive timeline.**

Explore how cyberattacks evolved from early internet experiments and worms to modern ransomware, supply-chain attacks, and large-scale breaches.

<br>

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-ff69b4)](https://motion.dev/)
[![License](https://img.shields.io/badge/License-CC_BY_4.0-green)](https://creativecommons.org/licenses/by/4.0/)

<br>

**[Live Site](https://breach-timeline-kappa.vercel.app/) · [Explore the Timeline](https://breach-timeline-kappa.vercel.app/#timeline)**

</div>

---

## About

**CyberTimeline** is an interactive educational project that presents major cybersecurity incidents across five decades.

Instead of treating cyberattacks as isolated news stories, the project puts them into a historical timeline so you can see how attacker techniques, vulnerabilities, social engineering, malware, supply-chain compromises, and defensive practices have evolved over time.

The project is designed for:

* Cybersecurity students
* Beginners learning security concepts
* SOC and blue-team learners
* Developers interested in security history
* Researchers and security enthusiasts
* Anyone who wants to understand how major cyberattacks happened

The goal is simple:

> **Learn cybersecurity by understanding what happened, why it happened, and what defenders can learn from it.**

---

## Why CyberTimeline?

Cybersecurity is often taught as a collection of tools, vulnerabilities, commands, and frameworks.

But understanding the **history behind attacks** makes those concepts much easier to connect.

Studying incidents such as the Morris Worm, SQL Slammer, Stuxnet, WannaCry, NotPetya, SolarWinds, and other major attacks reveals recurring patterns:

* Weak or stolen credentials
* Social engineering and phishing
* Unpatched vulnerabilities
* Poor security configuration
* Excessive privileges
* Trust relationships
* Supply-chain compromise
* Unsafe software dependencies
* Inadequate segmentation
* Weak monitoring and response

Many of these patterns are still relevant today.

CyberTimeline brings those incidents together in one place so the patterns are easier to explore.

---

## What's Inside

### 🕐 Interactive Timeline

Explore **35 major cyber incidents spanning five decades**.

The timeline covers incidents from the 1980s through the 2020s, including examples such as:

* The 414s Gang
* Morris Worm
* Kevin Mitnick-related attacks
* Melissa
* ILOVEYOU
* SQL Slammer
* Conficker
* GhostNet
* Stuxnet
* Equifax
* WannaCry
* NotPetya
* SolarWinds
* Log4Shell
* XZ Utils backdoor

Each incident contains structured information designed to make the event easier to understand and compare with other incidents.

---

### 📊 Attack Patterns

The project highlights recurring patterns behind major cyberattacks, including:

* **Credentials & Phishing**
* **Unpatched Known Vulnerabilities**
* **Supply Chain & Trust**

The purpose isn't simply to list attacks, but to show how similar weaknesses can appear repeatedly across different decades and technologies.

---

### 🛡️ Device Protection

Cybersecurity history is useful only if it helps improve security today.

CyberTimeline includes practical security guidance covering areas such as:

* Windows
* macOS
* iOS
* Android
* Password security
* Multi-factor authentication
* Backups
* Browsers
* VPNs
* Privacy-focused tools

The project points users toward reputable security and privacy resources rather than promoting unnecessary products.

---

### 💡 Security Tips

The project includes practical recommendations for improving everyday security.

Topics include:

* Using a password manager
* Enabling MFA
* Keeping software updated
* Using secure browsers
* Maintaining backups
* Protecting accounts
* Reducing unnecessary tracking
* Improving device security

---

### ❓ FAQ

A dedicated FAQ section answers common questions about cybersecurity incidents, attack techniques, and how to protect against similar threats.

---

## Tech Stack

| Technology         | Purpose                                      |
| ------------------ | -------------------------------------------- |
| **Next.js 16**     | React framework and application architecture |
| **React 19**       | User interface                               |
| **TypeScript 5.9** | Type-safe development                        |
| **Tailwind CSS 4** | Styling and design system                    |
| **Framer Motion**  | Animations and interactive motion            |
| **Lucide React**   | Interface icons                              |
| **Drizzle ORM**    | Database layer                               |
| **PostgreSQL**     | Database support                             |
| **ESLint**         | Code quality and linting                     |

### Typography

The interface uses a combination of display, UI, and data-oriented typography to create a visual distinction between:

* Historical/content sections
* Interface elements
* Technical information

---

## Project Structure

```text
src/
├── app/
│   ├── api/
│   │   ├── health/
│   │   │   └── route.ts
│   │   └── incidents/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Benefits.tsx
│   ├── CTASection.tsx
│   ├── DeviceProtection.tsx
│   ├── Evolution.tsx
│   ├── FAQ.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── HelpfulTips.tsx
│   ├── Hero.tsx
│   ├── IncidentCard.tsx
│   ├── Navbar.tsx
│   ├── OpenAccess.tsx
│   ├── StatsBar.tsx
│   ├── Timeline.tsx
│   └── WhyIBuiltThis.tsx
│
├── data/
│   ├── devices.ts
│   ├── faq.ts
│   ├── incidents.ts
│   ├── nav.ts
│   ├── site.ts
│   └── tips.ts
│
├── db/
│   ├── index.ts
│   └── schema.ts
│
└── ui/
    ├── BackToTop.tsx
    ├── CursorGlow.tsx
    ├── GlassCard.tsx
    ├── GradientText.tsx
    ├── Logo.tsx
    ├── Magnetic.tsx
    ├── Reveal.tsx
    ├── ScrollProgress.tsx
    ├── SectionHeading.tsx
    ├── SplitText.tsx
    ├── ThemeToggle.tsx
    ├── Ticker.tsx
    ├── icons.tsx
    ├── motion.ts
    └── theme.tsx
```

Content and structured data are kept separately from the UI components.

For example, incident information lives in:

```text
src/data/incidents.ts
```

This makes it easier to correct existing information or add new incidents without rewriting the interface.

---

## Getting Started

### Requirements

Make sure you have:

* Node.js
* npm
* Git

### Clone the repository

```bash
git clone https://github.com/priyanshu-rawa/Breach-Timeline.git
cd Breach-Timeline
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Available Commands

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production build

```bash
npm run build
```

Creates an optimized production build.

### Production server

```bash
npm run start
```

Runs the production build.

### Type checking

```bash
npm run typecheck
```

Runs TypeScript without emitting files.

### Linting

```bash
npm run lint
```

Runs ESLint across the project.

---

## Development Checklist

Before submitting a change, run:

```bash
npm run typecheck
npm run lint
npm run build
```

All three should pass before opening a pull request.

---

## Contributing

Contributions are welcome, especially corrections to historical or technical information.

### Correcting an incident

If you find incorrect information:

1. Open `src/data/incidents.ts`.
2. Make the correction.
3. Keep descriptions concise and easy to understand.
4. Provide a reliable public source in your pull request.
5. Clearly identify financial figures as estimates when appropriate.
6. Run the development checks before submitting the PR.

Useful sources include:

* Government advisories
* Court documents
* Regulatory filings
* Security vendor reports
* Original research
* Reputable investigative journalism
* Official incident disclosures

Please avoid relying on a secondary article when the original source is available.

### Adding an incident

New incidents should have clear educational value.

Good candidates are incidents that significantly influenced:

* Cybersecurity practices
* Attack techniques
* Defensive strategies
* Security research
* Software security
* Cybercrime
* Security policy
* How defenders understand a particular threat

---

## Sources & Attribution

CyberTimeline is built from publicly available cybersecurity research and reporting.

The project draws on information from sources such as:

* Government cybersecurity advisories
* Court filings
* Regulatory documents
* Security research
* Vendor postmortems
* Public incident disclosures
* Reputable journalism

The project also references resources from organisations and communities including:

* [MITRE ATT&CK](https://attack.mitre.org/)
* [Privacy Guides](https://www.privacyguides.org/)

If you notice an attribution or factual error, please open an issue or submit a pull request.

---

## Accuracy

Cybersecurity incidents often have conflicting estimates, especially regarding:

* Financial losses
* Number of affected systems
* Number of victims
* Recovery costs
* Data volumes
* Attribution

CyberTimeline therefore treats historical figures carefully and identifies estimates where appropriate.

If a figure has been revised by a later investigation, filing, or official disclosure, corrections are welcome.

---

## Privacy

CyberTimeline does not require an account to explore the timeline.

The project is intended to be accessible without unnecessary barriers such as:

* Account registration
* Paywalls
* Personal profiles
* Unnecessary data collection

---

## License

### Code

The project's source code is released under the **MIT License**.

### Incident Dataset

The incident dataset is released under **CC BY 4.0**.

You are free to reuse, adapt, and redistribute the dataset according to the license terms, with appropriate attribution.

See the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/) for details.

---

## Author

Built by **Priyanshu Rawat**.

CyberTimeline started as a way to learn cybersecurity through the history of real-world attacks and evolved into an interactive resource for anyone interested in security.

If you find the project useful:

* ⭐ Star the repository
* 🐛 Report factual or technical issues
* 💡 Suggest improvements
* 🔀 Submit a pull request

---

<div align="center">

**Learn from the attacks that shaped cybersecurity.**

⭐ [GitHub Repository](https://github.com/priyanshu-rawa/Breach-Timeline)

</div>
