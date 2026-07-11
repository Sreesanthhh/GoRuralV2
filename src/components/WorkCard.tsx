"use client";

import { Camera } from "@phosphor-icons/react/dist/ssr";
import { PlusIcon } from "lucide-react";
import type { CaseStudy } from "@/data/content";
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

export function WorkCard({
  study,
  accent,
}: {
  study: CaseStudy;
  accent: "red" | "green";
}) {
  const subtitle = [study.tag, study.years].filter(Boolean).join(" · ");

  return (
    <MorphingDialog
      transition={{ type: "spring", bounce: 0.05, duration: 0.35 }}
    >
      <MorphingDialogTrigger
        style={{ borderRadius: "16px" }}
        className="group flex h-full w-full flex-col overflow-hidden border border-line bg-white shadow-[0_1px_2px_rgba(28,27,24,0.04)] transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/10"
      >
        <div className="relative">
          {study.placeholder ? (
            <PlaceholderArt accent={accent} />
          ) : (
            <MorphingDialogImage
              src={study.image!}
              alt={study.title}
              className="h-52 w-full"
            />
          )}
          <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-red">
            {study.tag}
          </div>
        </div>
        <div className="flex grow flex-row items-end justify-between gap-2 px-4 py-3.5">
          <div className="min-w-0">
            <MorphingDialogTitle className="truncate font-display font-bold text-ink text-base leading-snug">
              {study.title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="mt-0.5 text-xs font-semibold text-ink-soft">
              {subtitle}
            </MorphingDialogSubtitle>
          </div>
          <span
            aria-hidden
            className="mb-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-ink-soft transition-colors duration-200 group-hover:border-brand-red group-hover:text-brand-red"
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
          {study.placeholder ? (
            <PlaceholderArt accent={accent} tall />
          ) : (
            <MorphingDialogImage
              src={study.image!}
              alt={study.title}
              className="max-h-[420px] w-full"
            />
          )}
          <div className="p-6">
            <MorphingDialogTitle className="font-display text-2xl font-extrabold text-ink">
              {study.title}
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
                {study.description}
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-brand-red">
                Go Rural India{study.years ? ` · ${study.years}` : ""}
              </p>
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose
            className={
              study.placeholder
                ? "bg-white/80 text-ink hover:bg-white"
                : "bg-ink/40 text-white backdrop-blur-sm hover:bg-ink/60"
            }
          />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
