"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { workCategories, caseStudies, clients, stats } from "@/data/content";
import { SlideInSection } from "./AnimatedSection";

/** How many archived campaigns sit behind each service. */
const campaignCounts = caseStudies.reduce<Record<string, number>>((acc, c) => {
  acc[c.category] = (acc[c.category] ?? 0) + 1;
  return acc;
}, {});

/**
 * Thirteen services, but the work behind them runs from 29 campaigns down to
 * none. An even grid of thirteen tiles flattens that, so the index is ordered
 * by volume and the count is set at a size that follows its own value. The
 * numeral is the only ornament in the row, and it is information rather than
 * decoration: the section visibly tapers as the archive thins out.
 *
 * The title stays one size throughout, so a service is never harder to read
 * for being a smaller line of business.
 */
function numeralSize(n: number) {
  if (n >= 20) return "text-5xl sm:text-7xl lg:text-8xl";
  if (n >= 10) return "text-4xl sm:text-6xl lg:text-7xl";
  if (n >= 5) return "text-3xl sm:text-5xl lg:text-6xl";
  return "text-3xl sm:text-4xl lg:text-5xl";
}

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
            Thirteen services, ordered by how much of the work they actually
            account for. Each number is the campaigns in our archive behind
            that service. Open any row to read them.
          </p>
        </div>

        <ul className="mt-12 border-b border-line">
          {servicesByWeight.map((cat) => {
            const n = campaignCounts[cat.slug] ?? 0;
            return (
              <li key={cat.slug} className="border-t border-line">
                <Link
                  href={`/work/${cat.slug}`}
                  className="group relative isolate flex items-baseline gap-5 overflow-hidden px-2 py-6 sm:gap-8 sm:px-4 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-red"
                >
                  {/* The paint. Sweeps in from the left edge on hover and on
                      keyboard focus, so the row fills the way a wall does.
                      Sits behind the content via -z-10 on an isolated stack. */}
                  <span
                    aria-hidden
                    className="absolute inset-0 -z-10 origin-left scale-x-0 bg-brand-red transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
                  />

                  <span
                    className={`w-16 shrink-0 text-right font-display leading-[0.8] tabular-nums text-ink/85 transition-colors duration-300 group-hover:text-cream group-focus-visible:text-cream sm:w-24 lg:w-32 ${numeralSize(
                      n
                    )}`}
                  >
                    {n > 0 ? (
                      n
                    ) : (
                      <span className="font-utility text-[10px] font-bold uppercase tracking-widest text-ink-soft group-hover:text-cream/80 sm:text-[11px]">
                        New
                      </span>
                    )}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-xl font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-cream group-focus-visible:text-cream sm:text-2xl">
                      {cat.title}
                    </span>
                    <span className="mt-1.5 block max-w-xl text-sm leading-relaxed text-ink-soft transition-colors duration-300 group-hover:text-cream/80 group-focus-visible:text-cream/80 sm:text-base">
                      {cat.short}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={22}
                    weight="bold"
                    aria-hidden
                    className="mt-1 shrink-0 self-center text-ink/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cream group-focus-visible:text-cream motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                  />
                </Link>
              </li>
            );
          })}
        </ul>

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
