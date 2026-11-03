"use client";

import Link from "next/link";
import {
  Truck,
  Storefront,
  Buildings,
  Megaphone,
  Confetti,
  Monitor,
  FilmSlate,
  GraduationCap,
  Microphone,
  PersonSimpleRun,
  Sparkle,
  HandHeart,
  CirclesThreePlus,
  ArrowRight,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { workCategories, caseStudies, clients, stats } from "@/data/content";
import { SlideInSection } from "./AnimatedSection";
import { GlowCard } from "./ui/spotlight-card";

/** How many archived campaigns sit behind each service. Shown on the cards
    instead of a decorative 01–13 counter: these thirteen services are a
    taxonomy, not a sequence, so the slot should carry something true. */
const campaignCounts = caseStudies.reduce<Record<string, number>>((acc, c) => {
  acc[c.category] = (acc[c.category] ?? 0) + 1;
  return acc;
}, {});

const iconMap: Record<string, Icon> = {
  Truck,
  Storefront,
  Buildings,
  Megaphone,
  Confetti,
  Monitor,
  FilmSlate,
  GraduationCap,
  Microphone,
  PersonSimpleRun,
  Sparkle,
  HandHeart,
  CirclesThreePlus,
};

export function RuralMarketing() {
  return (
    <section id="services" className="px-5 sm:px-8 py-20 md:py-28">
      <SlideInSection direction="left" className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            What We Do
          </span>
          <h2 className="mt-3 font-display font-extrabold text-ink text-3xl sm:text-4xl md:text-[2.75rem] leading-tight">
            Rural Marketing
          </h2>
          <p className="mt-4 text-ink-soft text-base sm:text-lg">
            Thirteen ways we take brands into the heartland. Pick any one to
            see the past campaigns behind it.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {workCategories.map((cat, i) => {
            const IconComp = iconMap[cat.icon];
            const accent = i % 2 === 0 ? "red" : "green";
            return (
              <Link
                key={cat.slug}
                href={`/work/${cat.slug}`}
                className="block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
              >
                <GlowCard
                  glowColor={accent}
                  customSize
                  className="group h-full w-full border-2 border-brand-red/15 bg-white p-6 shadow-[0_1px_2px_rgba(28,27,24,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-red hover:shadow-2xl hover:shadow-brand-red/10"
                >
                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <div
                        className={`inline-flex items-center justify-center h-12 w-12 rounded-xl shadow-sm ring-1 transition-colors duration-300 ${
                          accent === "red"
                            ? "bg-gradient-to-br from-brand-red/15 to-brand-red/5 text-brand-red ring-brand-red/15 group-hover:bg-brand-red group-hover:text-white group-hover:ring-brand-red"
                            : "bg-gradient-to-br from-brand-green/15 to-brand-green/5 text-brand-green ring-brand-green/15 group-hover:bg-brand-green group-hover:text-white group-hover:ring-brand-green"
                        }`}
                      >
                        {IconComp && <IconComp size={24} weight="bold" />}
                      </div>
                      {campaignCounts[cat.slug] > 0 && (
                        <span className="text-right font-display text-[11px] font-extrabold uppercase leading-tight tracking-widest text-ink/45">
                          <span className="block text-base text-ink/75">
                            {campaignCounts[cat.slug]}
                          </span>
                          campaigns
                        </span>
                      )}
                    </div>
                    <h3 className="mt-5 font-display font-bold text-ink text-lg leading-snug">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                      {cat.short}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-4 text-xs font-bold uppercase tracking-widest text-brand-red opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      View Work
                      <ArrowUpRight size={13} weight="bold" />
                    </span>
                  </div>
                </GlowCard>
              </Link>
            );
          })}

          {/* Thirteen cards leave an orphan slot in the 2- and 4-column grids;
              this tile fills it and turns dead space into a second CTA. */}
          <Link
            href="/#contact"
            className="group flex h-full flex-col justify-between rounded-2xl bg-ink p-6 text-white transition-colors duration-300 hover:bg-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red lg:col-span-3"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-amber group-hover:text-white">
                Not sure which one?
              </p>
              <p className="mt-3 max-w-md font-display text-xl font-bold leading-snug sm:text-2xl">
                Tell us the brand, the budget and the belt you want to cover.
                We will map the mix.
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
              Talk to us
              <ArrowRight
                size={16}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/work"
            className="btn-shine group inline-flex items-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 text-sm sm:text-base font-semibold text-ink hover:border-brand-red hover:text-brand-red transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
          >
            View All Work
            <ArrowRight
              size={18}
              weight="bold"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mt-16">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-ink-soft mb-6">
            Trusted by
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {clients.map((c) => (
              <li
                key={c}
                className="font-display font-bold text-lg sm:text-xl text-ink/65 transition-colors duration-200 hover:text-ink"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 rounded-3xl bg-ink p-8 md:p-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display font-extrabold text-3xl md:text-4xl text-brand-amber">
                {s.value}
              </div>
              <div className="mt-1.5 text-xs md:text-sm text-white/70 leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </SlideInSection>
    </section>
  );
}
