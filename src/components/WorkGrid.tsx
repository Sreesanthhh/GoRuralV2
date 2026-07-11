"use client";

import { caseStudies, stats } from "@/data/content";
import { AnimatedSection, StaggerGroup, StaggerItem } from "./AnimatedSection";
import { WorkCard } from "./WorkCard";

export function WorkGrid() {
  return (
    <>
      <section className="px-5 sm:px-8 pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Our Work
            </span>
            <h1 className="mt-3 font-display font-extrabold text-ink text-4xl sm:text-5xl md:text-6xl leading-tight">
              Campaigns that met millions, on their own ground
            </h1>
            <p className="mt-4 text-ink-soft text-base sm:text-lg">
              Every confirmed campaign from our archive — tap any card for
              the full story. Festival mega-events, residential community
              activations, mobile van branding, and more from across
              Telangana &amp; Andhra Pradesh.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-5 sm:px-8 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((c, i) => (
              <StaggerItem key={c.title} className="h-full">
                <WorkCard study={c} accent={i % 2 === 0 ? "red" : "green"} />
              </StaggerItem>
            ))}
          </StaggerGroup>
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
