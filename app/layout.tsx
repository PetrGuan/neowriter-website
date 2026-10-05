import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const editorial = localFont({
  src: [
    { path: "../public/fonts/Newsreader-Variable.ttf", style: "normal", weight: "200 800" },
    { path: "../public/fonts/Newsreader-Italic-Variable.ttf", style: "italic", weight: "200 800" },
  ],
  variable: "--font-editorial",
  display: "swap",
  preload: false,
});

const interfaceFont = localFont({
  src: [
    { path: "../public/fonts/Geist-Regular.otf", weight: "400" },
    { path: "../public/fonts/Geist-Medium.otf", weight: "500" },
  ],
  variable: "--font-interface",
  display: "swap",
  preload: false,
});

const telemetry = localFont({
  src: "../public/fonts/IBMPlexMono-Regular.ttf",
  variable: "--font-telemetry",
  display: "swap",
  preload: false,
});

const title = "NeoWriter — A little room for your words.";
const description =
  "A calm Markdown writing app for iPhone and iPad. Make room for notes, journals, and longer drafts with projects, writing history, and optional encrypted cloud sync.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "NeoWriter",
    locale: "en_US",
    type: "website",
    images: [{ url: `${SITE_URL}/images/social-card.png`, width: 1200, height: 630, alt: "NeoWriter — A little room for your words." }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${SITE_URL}/images/social-card.png`],
  },
};

export const viewport: Viewport = { themeColor: "#faf8f2" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${editorial.variable} ${interfaceFont.variable} ${telemetry.variable}`}>
      <body>{children}</body>
    </html>
  );
}
