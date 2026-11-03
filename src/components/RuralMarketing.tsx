"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import {
  workCategories,
  caseStudies,
  clients,
  stats,
  folkArts,
} from "@/data/content";
import { SlideInSection } from "./AnimatedSection";

/** How many archived campaigns sit behind each service. */
const campaignCounts = caseStudies.reduce<Record<string, number>>((acc, c) => {
  acc[c.category] = (acc[c.category] ?? 0) + 1;
  return acc;
}, {});

/**
 * The archive behind these thirteen services runs from 29 campaigns down to
 * none, so the index is ordered by volume rather than alphabetically or by
 * the order they happen to sit in the data. The count itself stays small and
 * recessive: it is a footnote to the service, not the headline.
 */
const servicesByWeight = [...workCategories].sort(
  (a, b) => (campaignCounts[b.slug] ?? 0) - (campaignCounts[a.slug] ?? 0)
);

export function RuralMarketing() {
  return (
    <section id="services" className="px-5 sm:px-8 py-20 md:py-28">
      <SlideInSection direction="left" className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="font-utility text-xs font-bold uppercase tracking-widest text-brand-red">
            What We Do
          </span>
          <h2 className="mt-3 font-display font-extrabold text-ink text-3xl sm:text-4xl md:text-[2.75rem] leading-tight">
            Rural Marketing
          </h2>
          <p className="mt-4 text-ink-soft text-base sm:text-lg">
            Fifteen services, ordered by how much of the work they actually
            account for. Each number is the campaigns in our archive behind
            that service. Open any row to read them.
          </p>
        </div>

        {/* Narrower than the page grid: an index is read as text, and at full
            width the count ends up marooned half a screen from its title. */}
        <ul className="mt-12 max-w-4xl border-b border-line">
          {servicesByWeight.map((cat) => {
            const n = campaignCounts[cat.slug] ?? 0;
            return (
              <li key={cat.slug} className="border-t border-line">
                <Link
                  href={`/work/${cat.slug}`}
                  className="group flex items-baseline gap-5 py-5 sm:gap-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-lg font-bold leading-snug text-ink transition-colors duration-200 group-hover:text-brand-red group-focus-visible:text-brand-red sm:text-xl">
                      {cat.title}
                    </span>
                    <span className="mt-1 block max-w-xl text-sm leading-relaxed text-ink-soft">
                      {cat.short}
                    </span>
                  </span>

                  {/* Count and arrow ride the title's baseline: a flex box
                      takes the baseline of its first child, which is the
                      count, so the two line up across every row. */}
                  <span className="flex shrink-0 items-center gap-3 sm:gap-4">
                    <span className="w-7 text-right font-utility text-sm font-bold tabular-nums text-ink-soft/70 transition-colors duration-200 group-hover:text-brand-red group-focus-visible:text-brand-red">
                      {n > 0 ? (
                        n
                      ) : (
                        <span className="text-[10px] uppercase tracking-widest">
                          New
                        </span>
                      )}
                    </span>
                    <ArrowUpRight
                      size={16}
                      weight="bold"
                      aria-hidden
                      className="shrink-0 translate-y-px text-ink/20 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-brand-red group-focus-visible:text-brand-red motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* The troupe network is the least reproducible thing the company
            owns, so the names of the forms are the content. Set as a plain
            run of display type rather than a card grid or an icon row. */}
        <div className="mt-16 max-w-4xl">
          <span className="font-utility text-xs font-bold uppercase tracking-widest text-brand-red">
            How the message travels
          </span>
          <p className="mt-3 max-w-2xl text-ink-soft text-base sm:text-lg">
            In a village the crowd stays for the performance, not the
            advertisement. We work with {folkArts.groups} folk art troupes
            across {folkArts.region} who carry the brand inside the show.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 sm:gap-x-8">
            {folkArts.forms.map((form) => (
              <li
                key={form}
                className="font-display text-base text-ink/75 sm:text-lg"
              >
                {form}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-6 bg-ink p-8 text-white sm:flex-row sm:items-end sm:justify-between md:p-10">
          <div>
            <p className="font-utility text-xs font-bold uppercase tracking-widest text-brand-amber">
              Not sure which one?
            </p>
            <p className="mt-3 max-w-lg font-display text-xl font-bold leading-snug sm:text-2xl">
              Tell us the brand, the budget and the belt you want to cover. We
              will map the mix.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-x-7 gap-y-3">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 font-utility text-sm font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:text-brand-amber focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-amber"
            >
              Talk to us
              <ArrowRight
                size={16}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
              />
            </Link>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 font-utility text-sm font-bold uppercase tracking-widest text-white/60 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-amber"
            >
              All 117 campaigns
              <ArrowRight
                size={16}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
              />
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-center font-utility text-xs font-bold uppercase tracking-widest text-ink-soft mb-6">
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
