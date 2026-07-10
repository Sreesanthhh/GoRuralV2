"use client";

import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { taglines } from "@/data/content";
import { SlideInSection } from "./AnimatedSection";

export function About() {
  return (
    <section id="about" className="px-5 sm:px-8 py-20 md:py-28">
      <SlideInSection
        direction="left"
        className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center"
      >
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            Who We Are
          </span>
          <h2 className="mt-3 font-display font-extrabold text-ink text-3xl sm:text-4xl md:text-[2.75rem] leading-tight">
            We&apos;re simply passionate — and a little crazy, 24×7
          </h2>
          <div className="mt-6 space-y-4 text-ink-soft text-base sm:text-lg leading-relaxed">
            <p>
              Go Rural India started as a brand-building company for the
              hinterlands — taking clients deep into Telangana and Andhra
              Pradesh through fairs, festivals, mobile vans, and bus
              branding that mass media simply couldn&apos;t reach.
            </p>
            <p>
              Today we&apos;re a full-service agency. The same ground
              intelligence that built campaigns at Medaram Jatara and the
              Godavari Pushkaralu now powers digital strategy, social
              content, and 360° communication plans for brands that want
              both reach and resonance.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-line bg-white p-8 md:p-10 shadow-sm">
          <Quotes size={36} weight="fill" className="text-brand-amber" />
          <div className="mt-6 space-y-5">
            {taglines.map((t) => (
              <p
                key={t}
                className="font-display font-bold text-xl sm:text-2xl text-ink leading-snug"
              >
                &ldquo;{t}&rdquo;
              </p>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3 pt-6 border-t border-line">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-green" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-red" />
            <span className="text-sm text-ink-soft">
              Boundaryless colours, limitless words.
            </span>
          </div>
        </div>
      </SlideInSection>
    </section>
  );
}
