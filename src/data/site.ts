import type { LucideIcon } from "lucide-react";
import {
  SlidersHorizontal,
  Filter,
  Crosshair,
  Radar,
  BookOpenCheck,
  Link2,
  Swords,
  Microscope,
  GraduationCap,
  Briefcase,
  Unlock,
  EyeOff,
  Database,
} from "lucide-react";

export interface Stat {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}

export const stats: Stat[] = [
  { id: "attacks", value: 35, label: "documented attacks" },
  { id: "decades", value: 5, label: "decades (1983–2024)" },
  { id: "records", value: 1.5, decimals: 1, suffix: "B+", label: "records exposed (est.)" },
  { id: "damage", value: 50, prefix: "$", suffix: "B+", label: "estimated damage" },
];

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  {
    id: "scrubbing",
    title: "Interactive decade scrubbing",
    description: "Drag across five decades and watch tactics shift from curiosity-driven worms to industrialised extortion.",
    icon: SlidersHorizontal,
  },
  {
    id: "taxonomy",
    title: "Attack taxonomy filters",
    description: "Slice the record by worms, breaches, ransomware, nation-state operations, and supply-chain compromise.",
    icon: Filter,
  },
  {
    id: "mitre",
    title: "MITRE ATT&CK mapping",
    description: "Every incident is tagged with the techniques it used, so you can trace T1190 from Code Red to MOVEit.",
    icon: Crosshair,
  },
  {
    id: "impact",
    title: "Impact & blast-radius metrics",
    description: "Records exposed, systems infected, ransom paid — normalised and labelled as estimates where they are.",
    icon: Radar,
  },
  {
    id: "sourced",
    title: "Sourced summaries with references",
    description: "Two to three sentences per incident, drawn from indictments, filings, and vendor post-mortems.",
    icon: BookOpenCheck,
  },
  {
    id: "deeplinks",
    title: "Shareable incident deep-links",
    description: "Every incident has a stable URL. Drop it in a slide, a ticket, or a training deck.",
    icon: Link2,
  },
];

export interface Audience {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const audiences: Audience[] = [
  {
    id: "red",
    title: "Red teams & pentesters",
    description: "Study real kill chains — initial access to impact — and see which techniques keep working three decades on.",
    icon: Swords,
  },
  {
    id: "researchers",
    title: "Security researchers",
    description: "Primary-sourced data with stable identifiers, so you can cite it instead of re-deriving it.",
    icon: Microscope,
  },
  {
    id: "students",
    title: "Students & CTF players",
    description: "Learn attack history the way it happened: what broke, why it spread, and what changed afterwards.",
    icon: GraduationCap,
  },
  {
    id: "cisos",
    title: "CISOs & analysts",
    description: "Board-ready breach narratives with impact figures you can defend in the room.",
    icon: Briefcase,
  },
];

export interface EraShift {
  id: string;
  decade: string;
  label: string;
  headline: string;
  description: string;
  technique: string;
}

export const eraShifts: EraShift[] = [
  {
    id: "80s",
    decade: "1980s",
    label: "Curiosity",
    headline: "Proof that it could be done.",
    description: "Students and hobbyists probe an internet built on trust. The Morris Worm shows one bug can take down a tenth of the network.",
    technique: "T1190 · Exploit Public-Facing Application",
  },
  {
    id: "90s",
    decade: "1990s",
    label: "Social engineering",
    headline: "Humans become the attack surface.",
    description: "AOL phishing and Mitnick prove the phone and the inbox beat the firewall. Macro viruses like Melissa ride the address book.",
    technique: "T1566 · Phishing",
  },
  {
    id: "00s",
    decade: "2000s",
    label: "Mass propagation",
    headline: "Minutes, not months.",
    description: "Slammer saturates the internet in ten minutes. Worms give way to card-data heists as TJX and Heartland monetise access.",
    technique: "T1040 · Network Sniffing",
  },
  {
    id: "10s",
    decade: "2010s",
    label: "State & scale",
    headline: "Governments enter the chat.",
    description: "Stuxnet breaks centrifuges, OPM and Yahoo leak at nation scale, and NotPetya turns a tax-software update into $10B of damage.",
    technique: "T1195 · Supply Chain Compromise",
  },
  {
    id: "20s",
    decade: "2020s",
    label: "Industrialised extortion",
    headline: "Access is the product.",
    description: "Ransomware cartels buy footholds, SolarWinds and XZ target the build chain, and a single help-desk call takes down MGM.",
    technique: "T1486 · Data Encrypted for Impact",
  },
];

export interface OpenPrinciple {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badge: string;
}

export const openPrinciples: OpenPrinciple[] = [
  {
    id: "free",
    title: "Free. No tiers, no paywall.",
    description: "Every incident, every impact figure, every MITRE mapping — available to anyone, forever. No account needed.",
    icon: Unlock,
    badge: "$0 · always",
  },
  {
    id: "telemetry",
    title: "Zero tracking, zero telemetry.",
    description: "No analytics scripts, no cookies, no fingerprinting. What you read here stays in your browser.",
    icon: EyeOff,
    badge: "0 trackers",
  },
  {
    id: "data",
    title: "Open data, open API.",
    description: "Download the full dataset as JSON or query the public endpoint. Licensed CC BY 4.0 — cite it, fork it, teach with it.",
    icon: Database,
    badge: "CC BY 4.0",
  },
];
