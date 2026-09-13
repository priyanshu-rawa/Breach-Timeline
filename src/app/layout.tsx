import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, themeInitScript } from "@/ui/theme";
import { ScrollProgress } from "@/ui/ScrollProgress";
import { CursorGlow } from "@/ui/CursorGlow";

const anthropicSerif = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const anthropicSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans-family",
  display: "swap",
});

const anthropicMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-family",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cybertimeline.dev";
const TITLE = "CyberTimeline — 35 Real Cyberattacks Across 5 Decades";
const DESCRIPTION =
  "Trace 35 real-world cyberattacks — from the 1988 Morris Worm to today's ransomware cartels. See how tactics, kill chains, and blast radius evolved, incident by incident.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["cybersecurity", "data breach", "ransomware", "MITRE ATT&CK", "timeline", "Morris Worm", "security history"],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "CyberTimeline",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "CyberTimeline — five decades of cyberattacks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "CyberTimeline",
  url: SITE_URL,
  description: DESCRIPTION,
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript",
  isAccessibleForFree: true,
  license: "https://creativecommons.org/licenses/by/4.0/",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark ${anthropicSerif.variable} ${anthropicSans.variable} ${anthropicMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen bg-bg text-text antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeProvider>
          <ScrollProgress />
          <CursorGlow />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
