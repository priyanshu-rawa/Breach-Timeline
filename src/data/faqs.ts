export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    "q": "Do I need to be \"techy\" to understand any of this?",
    "a": "Not at all — that was the whole point of building it this way. Every entry is written in plain language on purpose, no jargon walls. If a term trips you up, that's a sign to Google it, not a sign this site isn't for you."
  },
  {
    "q": "Why only 32 attacks? What about [insert huge breach here]?",
    "a": "Honestly, there are hundreds of attacks I could have added. I picked the ones that either changed how the industry thinks about security, or are just genuinely interesting stories to learn from — not an attempt to be exhaustive. If there's one you think deserves a spot, I'm always open to hearing about it."
  },
  {
    "q": "Am I actually a target? I'm not a bank or a hospital.",
    "a": "Yes, more than you'd think. Most attackers aren't hunting for one specific \"important\" victim — they're running the same phishing email or credential-stuffing script against millions of random people at once, and taking whoever bites. You don't need to be famous to be worth attacking; you just need to be reachable."
  },
  {
    "q": "Does this site track me or sell my data?",
    "a": "No. There's no backend, no analytics script, no account system, and nothing about you leaves your browser. Your search history, filters, and theme preference are stored locally on your own device and nowhere else. I built a cybersecurity site — it would be a little embarrassing if it didn't practice what it preaches."
  },
  {
    "q": "I keep hearing \"MFA\" everywhere. Is it actually that important?",
    "a": "Genuinely, yes — it's the closest thing security has to a cheat code. A stolen password by itself becomes mostly useless if the attacker still needs a code from your phone. Several attacks on this timeline, like Colonial Pipeline, happened specifically because MFA wasn't turned on somewhere it should have been."
  },
  {
    "q": "Where do the facts on each attack actually come from?",
    "a": "I research each incident from publicly reported coverage, then write the summary and \"why it happened\" story myself, in my own words. Nothing here is copy-pasted from an article — think of it as my own notes, cleaned up and made presentable."
  },
  {
    "q": "I'm a total beginner — where should I even start learning?",
    "a": "Start with the oldest attacks on this timeline and read forward. Early incidents like the Morris Worm or Melissa Virus are simple enough to fully understand in a few minutes, and they build the foundation for why later, more complex attacks worked. Then go read the \"Helpful tips\" section below — half the battle is just habits, not technical skill."
  },
  {
    "q": "What's one thing you wish you knew when you started learning this?",
    "a": "That you don't need to understand everything at once. I spent months feeling behind because I didn't know every acronym. Turns out most of security is a handful of repeating patterns — phishing, weak passwords, unpatched software, misplaced trust — dressed up differently each time. Once that clicked, everything else got a lot easier to follow."
  }
];
