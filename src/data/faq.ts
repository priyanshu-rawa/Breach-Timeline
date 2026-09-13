export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "techy",
    question: "Do I need to be \"techy\" to understand any of this?",
    answer:
      "Not at all. Every incident is written in plain English, explaining what happened, why it mattered, and the lessons learned without drowning you in unnecessary jargon. You can explore decade-by-decade to see how cyber attacks and defensive ideas evolved naturally.",
  },
  {
    id: "attacks-count",
    question: "Why only 32 attacks? What about [insert huge breach here]?",
    answer:
      "We curated 35 landmark attacks across five decades specifically chosen because each one represents a major turning point in attack techniques, security legislation, or defender mindset — rather than listing every database leak in history. If there is a pivotal incident you think belongs here, suggestions are always welcome on GitHub.",
  },
  {
    id: "target",
    question: "Am I actually a target? I'm not a bank or a hospital.",
    answer:
      "Yes. Most cyberattacks are automated, indiscriminate sweeps scanning for reused passwords, unpatched software, or easy phishing targets. Attackers don't target individuals specifically; they exploit opportunities wherever they find them.",
  },
  {
    id: "privacy-tracking",
    question: "Does this site track me or sell my data?",
    answer:
      "Zero tracking, zero telemetry, zero cookies, zero analytics. What you browse on CyberTimeline stays strictly in your browser. All code and datasets are completely open source.",
  },
  {
    id: "mfa-importance",
    question: "I keep hearing \"MFA\" everywhere. Is it actually that important?",
    answer:
      "Multi-factor authentication (MFA) is by far the single most effective defense against credential stuffing and stolen passwords. Even if an attacker gets your password, they cannot access your account without your physical authenticator or security key.",
  },
  {
    id: "facts-sources",
    question: "Where do the facts on each attack actually come from?",
    answer:
      "Every entry is synthesized directly from verified public reporting: U.S. DOJ indictments, SEC disclosures, CISA/CERT advisories, academic research (e.g. Citizen Lab, CAIDA), and vendor postmortems.",
  },
  {
    id: "beginner-learning",
    question: "I'm a total beginner — where should I even start learning?",
    answer:
      "Start by browsing the 1980s and 1990s in the timeline to understand the fundamentals of how worms and social engineering started, check out our 'Helpful tips before you go' section, and explore Privacy Guides for practical steps to secure your personal devices.",
  },
];
