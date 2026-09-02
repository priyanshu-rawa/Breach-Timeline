import {
  Bug,
  Biohazard,
  Lock,
  UserRoundSearch,
  Server,
  Link2,
  Satellite,
  TriangleAlert,
  type LucideIcon,
} from 'lucide-react';
import type { AttackType } from '@/data/attacks';

export const DECADES = [1980, 1990, 2000, 2010, 2020] as const;

export const ATTACK_TYPES: AttackType[] = [
  'Worm',
  'Virus',
  'Ransomware',
  'Data Breach',
  'DDoS',
  'Supply Chain',
  'APT',
  'Other',
];

const ICON_MAP: Record<AttackType, LucideIcon> = {
  Worm: Bug,
  Virus: Biohazard,
  Ransomware: Lock,
  'Data Breach': UserRoundSearch,
  DDoS: Server,
  'Supply Chain': Link2,
  APT: Satellite,
  Other: TriangleAlert,
};

export function getIconForType(type: AttackType): LucideIcon {
  return ICON_MAP[type] ?? TriangleAlert;
}

const IMPACT_WEIGHT: Record<AttackType, number> = {
  Worm: 1.5,
  Virus: 2,
  Ransomware: 4,
  'Data Breach': 3,
  DDoS: 1,
  'Supply Chain': 5,
  APT: 4,
  Other: 1,
};

export function estimatedImpact(types: AttackType[]): number {
  const total = types.reduce((sum, t) => sum + (IMPACT_WEIGHT[t] ?? 1), 0);
  return total * 0.5;
}

export function decadeOf(year: number): number {
  return Math.floor(year / 10) * 10;
}

export const BADGE_COLOR: Record<AttackType, string> = {
  Worm: '#f27272',
  Virus: '#f0a868',
  Ransomware: '#e77373',
  'Data Breach': '#5aa9e6',
  DDoS: '#b389e0',
  'Supply Chain': '#8fa3b8',
  APT: '#38bdf8',
  Other: '#9aa7b5',
};
