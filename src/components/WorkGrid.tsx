"use client";

import { Camera } from "@phosphor-icons/react/dist/ssr";
import { PlusIcon } from "lucide-react";
import { caseStudies, stats } from "@/data/content";
import { AnimatedSection, StaggerGroup, StaggerItem } from "./AnimatedSection";
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

function PlaceholderArt({
  accent,
  tall,
}: {
  accent: "red" | "green";
  tall?: boolean;
}) {
  return (
    <div
      className={`relative flex w-full items-center justify-center bg-gradient-to-br ${
        tall ? "h-64 sm:h-72" : "h-52"
      } ${
        accent === "red"
          ? "from-brand-red/10 via-cream to-brand-amber/10"
          : "from-brand-green/10 via-cream to-brand-amber/10"
      }`}
    >
      <Camera
        size={40}
        weight="light"
        className={accent === "red" ? "text-brand-red/20" : "text-brand-green/20"}
      />
      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-ink/85 px-3 py-1.5 text-[11px] font-semibold text-white">
        <Camera size={13} weight="bold" />
        Photo coming soon
      </div>
    </div>
  );
}

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
            {caseStudies.map((c, i) => {
              const accent = i % 2 === 0 ? "red" : "green";
              const subtitle = [c.tag, c.years].filter(Boolean).join(" · ");
              return (
                <StaggerItem key={c.title} className="h-full">
                  <MorphingDialog
                    transition={{ type: "spring", bounce: 0.05, duration: 0.35 }}
                  >
                    <MorphingDialogTrigger
                      style={{ borderRadius: "16px" }}
                      className="flex h-full w-full flex-col overflow-hidden border border-line bg-white shadow-[0_1px_2px_rgba(28,27,24,0.04)] transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/10"
                    >
                      <div className="relative">
                        {c.placeholder ? (
                          <PlaceholderArt accent={accent} />
                        ) : (
                          <MorphingDialogImage
                            src={c.image!}
                            alt={c.title}
                            className="h-52 w-full"
                          />
                        )}
                        <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-red">
                          {c.tag}
                        </div>
                      </div>
                      <div className="flex grow flex-row items-end justify-between gap-2 px-4 py-3.5">
                        <div className="min-w-0">
                          <MorphingDialogTitle className="truncate font-display font-bold text-ink text-base leading-snug">
                            {c.title}
                          </MorphingDialogTitle>
                          <MorphingDialogSubtitle className="mt-0.5 text-xs font-semibold text-ink-soft">
                            {subtitle}
                          </MorphingDialogSubtitle>
                        </div>
                        <span
                          aria-hidden
                          className="mb-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-ink-soft transition-colors duration-200 group-hover:border-brand-red"
                        >
                          <PlusIcon size={14} />
                        </span>
                      </div>
                    </MorphingDialogTrigger>

                    <MorphingDialogContainer>
                      <MorphingDialogContent
                        style={{ borderRadius: "24px" }}
                        className="pointer-events-auto relative flex h-auto max-h-[90vh] w-full flex-col overflow-y-auto border border-line bg-white sm:w-[520px]"
                      >
                        {c.placeholder ? (
                          <PlaceholderArt accent={accent} tall />
                        ) : (
                          <MorphingDialogImage
                            src={c.image!}
                            alt={c.title}
                            className="max-h-[420px] w-full"
                          />
                        )}
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
                        <MorphingDialogClose
                          className={
                            c.placeholder
                              ? "bg-white/80 text-ink hover:bg-white"
                              : "bg-ink/40 text-white backdrop-blur-sm hover:bg-ink/60"
                          }
                        />
                      </MorphingDialogContent>
                    </MorphingDialogContainer>
                  </MorphingDialog>
                </StaggerItem>
              );
            })}
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
