import type { Metadata } from "next";
import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { SkipLink } from "@/components/site/skip-link";
import { LanguageProvider } from "@/components/site/language-provider";
import { siteConfig } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";
import { findOfficialLogo } from "@/lib/logo";
import { languageBootstrapScript } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Bangla web font — applied site-wide when the visitor selects বাংলা. */
const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline.en}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description.en,
  keywords: [
    "DrugZero Bangladesh",
    "drug awareness",
    "youth engagement",
    "Bangladesh",
    "drug prevention",
    "community outreach",
    "education",
  ],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
    title: `${siteConfig.name} — ${siteConfig.tagline.en}`,
    description: siteConfig.description.en,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline.en}`,
    description: siteConfig.description.en,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logoSrc = findOfficialLogo();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable} flex min-h-screen flex-col antialiased bg-background text-foreground`}
      >
        {/* Applies the saved language (font + <html lang>) before first paint. */}
        <script dangerouslySetInnerHTML={{ __html: languageBootstrapScript }} />
        <LanguageProvider>
          <SkipLink />
          <SiteHeader logoSrc={logoSrc} />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter logoSrc={logoSrc} />
        </LanguageProvider>
      </body>
    </html>
  );
}
