"use client";

import Image from "next/image";
import { MinimalistHero } from "@/components/ui/minimalist-hero";

const navLinks = [
  { label: "SERVICES", href: "#services" },
  { label: "WORK", href: "/work" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export function HeroSection() {
  return (
    <div id="top">
      <MinimalistHero
        logoText="Go Rural India"
        logo={
          <Image
            src="/images/logo.png"
            alt="Go Rural India"
            width={130}
            height={100}
            className="h-12 w-[62px] md:h-14 md:w-[72px]"
            priority
          />
        }
        eyebrow="Full-Service Marketing Agency"
        navLinks={navLinks}
        mainText="Two decades of on-ground rural marketing expertise, now paired with sharp digital strategy — taking brands from Hyderabad to the hinterlands."
        readMoreLink="#about"
        imageSrc="/images/rickshaw.png"
        imageAlt="Illustration of a branded rural promotion rickshaw with a megaphone speaker"
        overlayText={{
          part1: "Go",
          part2: "Rural.",
        }}
        socialLinks={[]}
        locationText="Hyderabad, India"
      />
    </div>
  );
}
