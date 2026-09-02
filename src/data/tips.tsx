import type { LucideIcon } from 'lucide-react';
import { KeyRound, Lock, Mail, ShieldCheck, Compass, RefreshCw, MailCheck, HardDrive, Wifi } from 'lucide-react';

export interface Tip {
  icon: LucideIcon;
  title: string;
  body: React.ReactNode;
}

export const tips: Tip[] = [
  {
    icon: KeyRound,
    title: 'Use a password manager',
    body: (
      <>
        Long, unique passwords for every account beat memorized ones every time. A single reused
        password is how most account breaches start.{' '}
        <a href="https://www.privacyguides.org/en/passwords/" target="_blank" rel="noopener noreferrer">
          See recommended password managers →
        </a>
      </>
    ),
  },
  {
    icon: Lock,
    title: 'Turn on multi-factor authentication',
    body: (
      <>
        MFA is the single biggest thing you can do to stop a stolen password from becoming a
        compromised account. App-based authenticators are safer than SMS codes.{' '}
        <a href="https://www.privacyguides.org/en/multi-factor-authentication/" target="_blank" rel="noopener noreferrer">
          See recommended MFA apps →
        </a>
      </>
    ),
  },
  {
    icon: Mail,
    title: 'Pick an email client that respects you',
    body: (
      <>
        Your inbox is the recovery key to almost every other account you own, so it&apos;s worth
        using a client that isn&apos;t mining it for ad data.{' '}
        <a href="https://www.privacyguides.org/en/email-clients/" target="_blank" rel="noopener noreferrer">
          See recommended email clients →
        </a>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: 'Use a trustworthy VPN, if you need one',
    body: (
      <>
        A VPN shifts trust from your network to the VPN provider — it&apos;s not automatically
        &quot;more private,&quot; so the provider you pick actually matters.{' '}
        <a href="https://www.privacyguides.org/en/vpn/" target="_blank" rel="noopener noreferrer">
          See recommended VPN providers →
        </a>
      </>
    ),
  },
  {
    icon: Compass,
    title: 'Switch to a privacy-respecting browser',
    body: (
      <>
        Your browser sees everything: every site, every search, every login. The default browser
        on your OS is rarely built with blocking trackers or fingerprinting in mind, so it&apos;s
        worth switching to one that is, and pairing it with a solid ad/tracker blocker.
        <br />
        <a href="https://www.privacyguides.org/en/desktop-browsers/" target="_blank" rel="noopener noreferrer">
          Desktop browsers →
        </a>
        &nbsp;·&nbsp;
        <a href="https://www.privacyguides.org/en/mobile-browsers/" target="_blank" rel="noopener noreferrer">
          Mobile browsers →
        </a>
      </>
    ),
  },
  {
    icon: RefreshCw,
    title: 'Keep everything updated',
    body: 'Most major attacks in this timeline exploited a bug that already had a patch available. Turn on automatic updates for your OS, browser, and apps.',
  },
  {
    icon: MailCheck,
    title: 'Slow down on links and attachments',
    body: 'Phishing is still behind the majority of breaches. If a message creates urgency or asks you to click something unexpected, pause before acting.',
  },
  {
    icon: HardDrive,
    title: 'Back up important files',
    body: "Keep an offline or cloud backup separate from your main device. It's the one thing that makes ransomware a nuisance instead of a disaster.",
  },
  {
    icon: Wifi,
    title: 'Be careful on public Wi-Fi',
    body: 'Avoid logging into sensitive accounts on open networks, or use a trusted VPN if you have to. Public Wi-Fi is easy to eavesdrop on.',
  },
];
