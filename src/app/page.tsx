import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { BrandStatement } from "@/components/BrandStatement";
import { RuralMarketing } from "@/components/RuralMarketing";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <HeroSection />
        <BrandStatement />
        <RuralMarketing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
