import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-mono',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cyber Attack Timeline – The Complete History',
  description:
    'From the first computer worm to modern ransomware — explore 35 real cyberattacks across 5 decades, told like stories, not spreadsheets.',
  openGraph: {
    title: 'Cyber Attack Timeline – The Complete History',
    description:
      'From the first computer worm to modern ransomware — explore the attacks that shaped cybersecurity.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
