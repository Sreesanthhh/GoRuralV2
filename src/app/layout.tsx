import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Go Rural India | Full-Service Marketing Agency, Hyderabad",
  description:
    "Go Rural India is a full-service marketing & advertising agency in Hyderabad blending rural, on-ground experiential campaigns with modern digital marketing. Taking your brand to hinterlands and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${manrope.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-body">
        <Preloader />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
