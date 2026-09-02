import { AppWindow, Laptop, Smartphone, TabletSmartphone, type LucideIcon } from 'lucide-react';

export interface ProtectEntry {
  icon: LucideIcon;
  name: string;
  description: string;
  href: string;
}

export const protectEntries: ProtectEntry[] = [
  {
    icon: AppWindow,
    name: 'Windows',
    description: "Privacy Guides' Windows hardening guide, including their recommended Group Policy settings.",
    href: 'https://www.privacyguides.org/en/os/windows/',
  },
  {
    icon: Laptop,
    name: 'macOS',
    description: "Privacy Guides' overview of macOS's built-in privacy and security controls and how to configure them.",
    href: 'https://www.privacyguides.org/en/os/macos-overview/',
  },
  {
    icon: Smartphone,
    name: 'iOS',
    description: "Privacy Guides' iOS overview covering device encryption, app tracking permissions, and Lockdown Mode.",
    href: 'https://www.privacyguides.org/en/os/ios-overview/',
  },
  {
    icon: TabletSmartphone,
    name: 'Android',
    description: "Privacy Guides' Android overview, including hardened distributions and general security recommendations.",
    href: 'https://www.privacyguides.org/en/os/android-overview/',
  },
];
