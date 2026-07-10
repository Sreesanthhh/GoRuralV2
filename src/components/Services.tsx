"use client";

import {
  MapTrifold,
  DeviceMobile,
  Confetti,
  Buildings,
  Truck,
  CircleNotch,
  Plant,
  Microphone,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { services } from "@/data/content";
import { SlideInSection } from "./AnimatedSection";
import { GlowCard } from "./ui/spotlight-card";

const iconMap: Record<string, Icon> = {
  MapTrifold,
  DeviceMobile,
  Confetti,
  Buildings,
  Truck,
  CircleNotch,
  Plant,
  Microphone,
};

export function Services() {
  return (
    <section id="services" className="px-5 sm:px-8 py-20 md:py-28">
      <SlideInSection direction="left" className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            What We Do
          </span>
          <h2 className="mt-3 font-display font-extrabold text-ink text-3xl sm:text-4xl md:text-[2.75rem] leading-tight">
            Full-service marketing, rooted in real-world reach
          </h2>
          <p className="mt-4 text-ink-soft text-base sm:text-lg">
            From the busiest jatara to the busiest Instagram feed — we plan,
            create, and execute campaigns that move with your audience.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const IconComp = iconMap[s.icon];
            const accent = i % 2 === 0 ? "red" : "green";
            return (
              <GlowCard
                key={s.title}
                glowColor={accent}
                customSize
                className="group h-full w-full border-2 border-brand-red/15 bg-white p-7 shadow-[0_1px_2px_rgba(28,27,24,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-red hover:shadow-2xl hover:shadow-brand-red/10"
              >
                <div>
                  <div
                    className={`inline-flex items-center justify-center h-12 w-12 rounded-xl shadow-sm ring-1 transition-colors duration-300 ${
                      accent === "red"
                        ? "bg-gradient-to-br from-brand-red/15 to-brand-red/5 text-brand-red ring-brand-red/15 group-hover:bg-brand-red group-hover:text-white group-hover:ring-brand-red"
                        : "bg-gradient-to-br from-brand-green/15 to-brand-green/5 text-brand-green ring-brand-green/15 group-hover:bg-brand-green group-hover:text-white group-hover:ring-brand-green"
                    }`}
                  >
                    {IconComp && <IconComp size={24} weight="bold" />}
                  </div>
                  <h3 className="mt-5 font-display font-bold text-ink text-lg">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </SlideInSection>
    </section>
  );
}
