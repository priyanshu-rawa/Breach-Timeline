export interface DeviceGuide {
  id: string;
  osName: string;
  description: string;
  linkText: string;
  href: string;
  iconName: "windows" | "apple" | "smartphone" | "android";
}

export const deviceGuides: DeviceGuide[] = [
  {
    id: "windows",
    osName: "Windows",
    description:
      "Privacy Guides' Windows hardening guide, including their recommended Group Policy settings.",
    linkText: "privacyguides.org",
    href: "https://www.privacyguides.org/en/os/windows/",
    iconName: "windows",
  },
  {
    id: "macos",
    osName: "macOS",
    description:
      "Privacy Guides' overview of macOS's built-in privacy and security controls and how to configure them.",
    linkText: "privacyguides.org",
    href: "https://www.privacyguides.org/en/os/macos-overview/",
    iconName: "apple",
  },
  {
    id: "ios",
    osName: "iOS",
    description:
      "Privacy Guides' iOS overview covering device encryption, app tracking permissions, and Lockdown Mode.",
    linkText: "privacyguides.org",
    href: "https://www.privacyguides.org/en/os/ios-overview/",
    iconName: "smartphone",
  },
  {
    id: "android",
    osName: "Android",
    description:
      "Privacy Guides' Android overview, including hardened distributions and general security recommendations.",
    linkText: "privacyguides.org",
    href: "https://www.privacyguides.org/en/os/android-overview/",
    iconName: "android",
  },
];
