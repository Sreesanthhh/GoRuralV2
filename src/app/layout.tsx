import type { Metadata } from "next";
import { Archivo, Fraunces, Manrope } from "next/font/google";
import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { workCategories } from "@/data/content";
import {
  organisationJsonLd,
  siteDescription,
  siteName,
  siteUrl,
} from "@/lib/site";
import "./globals.css";

// Three faces, three jobs.
//
// Fraunces is the voice: a warm old-style serif with calligraphic stroke
// contrast whose roundness sits with the logo rather than against it. The opsz
// axis lets it get more dramatic at hero sizes and steadier at card sizes.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

// Archivo is the utility face: small uppercase labels, counts and buttons,
// where a squared grotesque is an asset rather than a liability.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Go Rural India | Full-Service Marketing Agency, Hyderabad",
    template: "%s | Go Rural India",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "rural marketing agency",
    "Hyderabad advertising agency",
    "mobile van campaign",
    "haat and mela activation",
    "OOH branding Telangana",
    "rural marketing Andhra Pradesh",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName,
    locale: "en_IN",
    url: siteUrl,
    title: "Go Rural India | Full-Service Marketing Agency, Hyderabad",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Go Rural India | Full-Service Marketing Agency, Hyderabad",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = organisationJsonLd(workCategories.map((c) => c.title));

  return (
    <html
      lang="en-IN"
      className={`${fraunces.variable} ${archivo.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-body">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Preloader />
        <SmoothScroll />
        {children}
        <script
          type="application/ld+json"
          // Built from our own data file, not user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
