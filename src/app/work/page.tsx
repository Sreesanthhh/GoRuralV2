import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Our Work | Go Rural India",
  description:
    "Real campaigns for real brands — festival activations, RWA campaigns, building branding, and more from Go Rural India's portfolio.",
};

export default function WorkPage() {
  return (
    <>
      <Nav alwaysVisible />
      <main className="flex-1 pt-16 md:pt-20">
        <WorkGrid />
      </main>
      <Footer />
    </>
  );
}
