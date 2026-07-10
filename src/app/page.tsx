import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { BrandStatement } from "@/components/BrandStatement";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <HeroSection />
        <BrandStatement />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
