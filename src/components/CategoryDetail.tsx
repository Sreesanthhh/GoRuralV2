"use client";

import { ArrowLeft, Camera, Check } from "@phosphor-icons/react/dist/ssr";
import { caseStudies, type WorkCategory } from "@/data/content";
import { AnimatedSection, StaggerGroup, StaggerItem } from "./AnimatedSection";
import { WorkCard } from "./WorkCard";

/** Renders "140 High-End Digital LED Vans" with the leading number bolded,
    matching the corporate-profile checklist style. */
function Point({ text }: { text: string }) {
  const match = text.match(/^([\d,]+(?:\s?ft)?)\s+(.*)$/);
  if (!match) return <>{text}</>;
  return (
    <>
      <strong className="font-extrabold text-ink">{match[1]}</strong>{" "}
      {match[2]}
    </>
  );
}

export function CategoryDetail({ category }: { category: WorkCategory }) {
  const works = caseStudies.filter((c) => c.category === category.slug);

  return (
    <>
      <section className="px-5 sm:px-8 pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="max-w-3xl">
            <a
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-ink-soft hover:text-brand-red transition-colors duration-200"
            >
              <ArrowLeft size={14} weight="bold" />
              All Work
            </a>
            <span className="mt-5 block text-xs font-bold uppercase tracking-widest text-brand-red">
              Rural Marketing
            </span>
            <h1 className="mt-3 font-display font-extrabold text-brand-green text-4xl sm:text-5xl md:text-6xl leading-tight">
              {category.title}
            </h1>
            {category.tagline && (
              <p className="mt-3 font-display text-lg sm:text-xl font-bold text-ink">
                – {category.tagline}
              </p>
            )}
            {category.description && (
              <p className="mt-5 text-ink-soft text-base sm:text-lg leading-relaxed">
                {category.description}
              </p>
            )}
            {category.points && category.points.length > 0 && (
              <ul className="mt-6 space-y-3">
                {category.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                      <Check size={14} weight="bold" />
                    </span>
                    <span className="text-base sm:text-lg text-ink-soft leading-relaxed">
                      <Point text={point} />
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {category.highlight && (
              <p className="mt-8 font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-tight text-brand-red">
                {category.highlight}
              </p>
            )}
          </AnimatedSection>
        </div>
      </section>

      <section className="px-5 sm:px-8 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl">
          {works.length > 0 ? (
            <>
              <AnimatedSection className="mb-8">
                <h2 className="font-display font-extrabold text-ink text-2xl sm:text-3xl">
                  Past campaigns
                </h2>
              </AnimatedSection>
              <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {works.map((c, i) => (
                  <StaggerItem key={c.title} className="h-full">
                    <WorkCard study={c} accent={i % 2 === 0 ? "red" : "green"} />
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </>
          ) : (
            <AnimatedSection>
              <div className="flex flex-col items-center rounded-3xl border border-line bg-white px-8 py-16 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-red/10 via-cream to-brand-amber/10">
                  <Camera size={26} weight="light" className="text-brand-red/40" />
                </span>
                <h2 className="mt-5 font-display font-bold text-ink text-xl">
                  Case studies coming soon
                </h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
                  We&apos;re curating photos and results from our archive for
                  this service. In the meantime, we&apos;d be happy to walk
                  you through past campaigns in person.
                </p>
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection delay={0.1} className="mt-16 text-center">
            <h2 className="font-display font-extrabold text-ink text-2xl sm:text-3xl">
              Planning a {category.title.toLowerCase()}?
            </h2>
            <a
              href="/#contact"
              className="btn-shine mt-6 inline-flex items-center justify-center rounded-full bg-brand-red px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-brand-red/20 hover:bg-brand-red-dark active:scale-[0.97] transition-all duration-200 cursor-pointer"
            >
              Get a Proposal
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
