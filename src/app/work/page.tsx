import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WorkGrid } from "@/components/WorkGrid";
import { caseStudies } from "@/data/content";

const description = `All ${caseStudies.length} campaigns from the Go Rural India archive: festival activations, mobile van branding, haat and mela promotions, OOH and residential community campaigns across Telangana and Andhra Pradesh.`;

export const metadata: Metadata = {
  title: "Our Work",
  description,
  alternates: { canonical: "/work" },
  openGraph: {
    type: "website",
    url: "/work",
    title: "Our Work | Go Rural India",
    description,
  },
};

export default function WorkPage() {
  return (
    <>
      <Nav alwaysVisible />
      <main id="main" className="flex-1 pt-16 md:pt-20">
        <WorkGrid />
      </main>
      <Footer />
    </>
  );
}
