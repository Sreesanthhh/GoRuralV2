"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { caseStudies, stats, workCategories } from "@/data/content";
import { AnimatedSection, StaggerGroup, StaggerItem } from "./AnimatedSection";
import { WorkCard } from "./WorkCard";

const ALL = "all";

export function WorkGrid() {
  const [active, setActive] = useState<string>(ALL);

  // Only offer a chip for categories that actually have campaigns behind them.
  const filters = useMemo(() => {
    const counts = new Map<string, number>();
    for (const c of caseStudies) {
      counts.set(c.category, (counts.get(c.category) ?? 0) + 1);
    }
    return workCategories
      .filter((cat) => counts.has(cat.slug))
      .map((cat) => ({
        slug: cat.slug,
        title: cat.title,
        count: counts.get(cat.slug) ?? 0,
      }));
  }, []);

  const visible = useMemo(
    () =>
      active === ALL
        ? caseStudies
        : caseStudies.filter((c) => c.category === active),
    [active]
  );

  return (
    <>
      <section className="px-5 sm:px-8 pt-8 pb-10 md:pt-12 md:pb-12">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Our Work
            </span>
            <h1 className="mt-3 font-display font-extrabold text-ink text-4xl sm:text-5xl md:text-6xl leading-tight">
              Campaigns that met millions, on their own ground
            </h1>
            <p className="mt-4 text-ink-soft text-base sm:text-lg">
              Every confirmed campaign from our archive. Tap any card for the
              full story: festival mega-events, residential community
              activations, mobile van branding and more from across Telangana
              and Andhra Pradesh.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-5 sm:px-8 pb-10">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection>
            {/* Thirteen chips wrap to thirteen full-width rows on a phone, so
                below sm they become a single horizontal rail instead. */}
            <div
              role="group"
              aria-label="Filter campaigns by service"
              className="filter-rail -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
            >
              <button
                type="button"
                onClick={() => setActive(ALL)}
                aria-pressed={active === ALL}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${
                  active === ALL
                    ? "border-brand-red bg-brand-red text-white"
                    : "border-line bg-white text-ink-soft hover:border-brand-red hover:text-brand-red"
                }`}
              >
                All {caseStudies.length}
              </button>
              {filters.map((f) => (
                <button
                  key={f.slug}
                  type="button"
                  onClick={() => setActive(f.slug)}
                  aria-pressed={active === f.slug}
                  className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${
                    active === f.slug
                      ? "border-brand-red bg-brand-red text-white"
                      : "border-line bg-white text-ink-soft hover:border-brand-red hover:text-brand-red"
                  }`}
                >
                  {f.title} {f.count}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-5 sm:px-8 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <p aria-live="polite" className="sr-only">
            Showing {visible.length} of {caseStudies.length} campaigns
          </p>
          <StaggerGroup
            key={active}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visible.map((c, i) => (
              <StaggerItem key={c.title} className="h-full">
                <WorkCard study={c} accent={i % 2 === 0 ? "red" : "green"} />
              </StaggerItem>
            ))}
          </StaggerGroup>

          {active !== ALL && (
            <div className="mt-10 text-center">
              <Link
                href={`/work/${active}`}
                className="inline-flex items-center rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink hover:border-brand-red hover:text-brand-red transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
              >
                Read about this service
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="px-5 sm:px-8 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-3xl bg-ink p-8 md:p-10">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="text-center md:text-left">
                <div className="font-display font-extrabold text-3xl md:text-4xl text-brand-amber">
                  {s.value}
                </div>
                <div className="mt-1.5 text-xs md:text-sm text-white/70 leading-snug">
                  {s.label}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <AnimatedSection delay={0.1} className="mt-16 text-center">
            <h2 className="font-display font-extrabold text-ink text-2xl sm:text-3xl">
              Want your brand on this wall?
            </h2>
            <Link
              href="/#contact"
              className="btn-shine mt-6 inline-flex items-center justify-center rounded-full bg-brand-red px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-brand-red/20 hover:bg-brand-red-dark active:scale-[0.97] transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            >
              Get a Proposal
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
