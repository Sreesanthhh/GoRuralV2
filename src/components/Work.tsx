"use client";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PlusIcon } from "lucide-react";
import { caseStudies, clients, stats } from "@/data/content";
import { SlideInSection } from "./AnimatedSection";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogImage,
  MorphingDialogDescription,
  MorphingDialogClose,
} from "./ui/morphing-dialog";

export function Work() {
  const featured = caseStudies.filter((c) => !c.placeholder).slice(0, 3);

  return (
    <section id="work" className="px-5 sm:px-8 py-20 md:py-28">
      <SlideInSection direction="right" className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6 max-w-2xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Our Work
            </span>
            <h2 className="mt-3 font-display font-extrabold text-ink text-3xl sm:text-4xl md:text-[2.75rem] leading-tight">
              Campaigns that met millions, on their own ground
            </h2>
            <p className="mt-4 text-ink-soft text-base sm:text-lg">
              Real activations for real brands — from festival mega-events to
              residential community campaigns across Hyderabad.
            </p>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((c) => {
            const subtitle = [c.tag, c.years].filter(Boolean).join(" · ");
            return (
              <MorphingDialog
                key={c.title}
                transition={{ type: "spring", bounce: 0.05, duration: 0.35 }}
              >
                <MorphingDialogTrigger
                  style={{ borderRadius: "16px" }}
                  className="group flex h-full w-full flex-col overflow-hidden border border-line bg-white shadow-[0_1px_2px_rgba(28,27,24,0.04)] transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/10"
                >
                  <div className="relative">
                    <MorphingDialogImage
                      src={c.image!}
                      alt={c.title}
                      className="aspect-[4/5] w-full"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-red">
                      {c.tag}
                    </div>
                  </div>
                  <div className="flex grow flex-col p-5">
                    <div className="flex items-center justify-between gap-2">
                      <MorphingDialogTitle className="font-display font-bold text-ink text-base leading-snug">
                        {c.title}
                      </MorphingDialogTitle>
                      <span
                        aria-hidden
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-ink-soft transition-colors duration-200 group-hover:border-brand-red group-hover:text-brand-red"
                      >
                        <PlusIcon size={14} />
                      </span>
                    </div>
                    <MorphingDialogSubtitle className="mt-0.5 text-xs font-semibold text-ink-soft">
                      {subtitle}
                    </MorphingDialogSubtitle>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                </MorphingDialogTrigger>

                <MorphingDialogContainer>
                  <MorphingDialogContent
                    style={{ borderRadius: "24px" }}
                    className="pointer-events-auto relative flex h-auto max-h-[90vh] w-full flex-col overflow-y-auto border border-line bg-white sm:w-[520px]"
                  >
                    <MorphingDialogImage
                      src={c.image!}
                      alt={c.title}
                      className="max-h-[420px] w-full"
                    />
                    <div className="p-6">
                      <MorphingDialogTitle className="font-display text-2xl font-extrabold text-ink">
                        {c.title}
                      </MorphingDialogTitle>
                      <MorphingDialogSubtitle className="mt-1 text-sm font-semibold text-ink-soft">
                        {subtitle}
                      </MorphingDialogSubtitle>
                      <MorphingDialogDescription
                        disableLayoutAnimation
                        variants={{
                          initial: { opacity: 0, scale: 0.9, y: 40 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0.9, y: 40 },
                        }}
                      >
                        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                          {c.description}
                        </p>
                        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-brand-red">
                          Go Rural India · {c.years}
                        </p>
                      </MorphingDialogDescription>
                    </div>
                    <MorphingDialogClose className="bg-ink/40 text-white backdrop-blur-sm hover:bg-ink/60" />
                  </MorphingDialogContent>
                </MorphingDialogContainer>
              </MorphingDialog>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/work"
            className="btn-shine group inline-flex items-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 text-sm sm:text-base font-semibold text-ink hover:border-brand-red hover:text-brand-red transition-all duration-200 cursor-pointer"
          >
            View All Work
            <ArrowRight
              size={18}
              weight="bold"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="mt-16">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-ink-soft mb-6">
            Trusted by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {clients.map((c) => (
              <span
                key={c}
                className="font-display font-bold text-lg sm:text-xl text-ink/40 hover:text-ink/70 transition-colors duration-200"
              >
                {c}
              </span>
            ))}
          </div>
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
