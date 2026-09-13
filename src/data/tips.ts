export interface TipItem {
  id: string;
  title: string;
  description: string;
  iconName: "key" | "lock" | "mail" | "shield" | "compass" | "refresh" | "alert-mail" | "hard-drive" | "wifi";
  links?: Array<{ label: string; href: string }>;
}

export const helpfulTips: TipItem[] = [
  {
    id: "password-manager",
    title: "Use a password manager",
    description:
      "Long, unique passwords for every account beat memorized ones every time. A single reused password is how most account breaches start.",
    iconName: "key",
    links: [
      {
        label: "See recommended password managers →",
        href: "https://www.privacyguides.org/en/passwords/",
      },
    ],
  },
  {
    id: "mfa",
    title: "Turn on multi-factor authentication",
    description:
      "MFA is the single biggest thing you can do to stop a stolen password from becoming a compromised account. App-based authenticators are safer than SMS codes.",
    iconName: "lock",
    links: [
      {
        label: "See recommended MFA apps →",
        href: "https://www.privacyguides.org/en/multi-factor-authentication/",
      },
    ],
  },
  {
    id: "email-client",
    title: "Pick an email client that respects you",
    description:
      "Your inbox is the recovery key to almost every other account you own, so it's worth using a client that isn't mining it for ad data.",
    iconName: "mail",
    links: [
      {
        label: "See recommended email clients →",
        href: "https://www.privacyguides.org/en/email-clients/",
      },
    ],
  },
  {
    id: "vpn",
    title: "Use a trustworthy VPN, if you need one",
    description:
      "A VPN shifts trust from your network to the VPN provider — it's not automatically \"more private,\" so the provider you pick actually matters.",
    iconName: "shield",
    links: [
      {
        label: "See recommended VPN providers →",
        href: "https://www.privacyguides.org/en/vpn/",
      },
    ],
  },
  {
    id: "browser",
    title: "Switch to a privacy-respecting browser",
    description:
      "Your browser sees everything: every site, every search, every login. The default browser on your OS is rarely built with blocking trackers or fingerprinting in mind, so it's worth switching to one that is, and pairing it with a solid ad/tracker blocker.",
    iconName: "compass",
    links: [
      {
        label: "Desktop browsers →",
        href: "https://www.privacyguides.org/en/desktop-browsers/",
      },
      {
        label: "Mobile browsers →",
        href: "https://www.privacyguides.org/en/mobile-browsers/",
      },
    ],
  },
  {
    id: "updates",
    title: "Keep everything updated",
    description:
      "Most major attacks in this timeline exploited a bug that already had a patch available. Turn on automatic updates for your OS, browser, and apps.",
    iconName: "refresh",
  },
  {
    id: "phishing-awareness",
    title: "Slow down on links and attachments",
    description:
      "Phishing is still behind the majority of breaches. If a message creates urgency or asks you to click something unexpected, pause and verify through a trusted secondary channel.",
    iconName: "alert-mail",
  },
  {
    id: "backups",
    title: "Back up important files",
    description:
      "Keep an offline or cloud backup separate from your main device. It's the one thing that makes ransomware a nuisance instead of a disaster.",
    iconName: "hard-drive",
  },
  {
    id: "public-wifi",
    title: "Be careful on public Wi-Fi",
    description:
      "Avoid logging into sensitive accounts on open networks, or use a trusted VPN if you have to. Public Wi-Fi is easy to eavesdrop on.",
    iconName: "wifi",
  },
];
