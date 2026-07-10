"use client";

import { useState, type FormEvent } from "react";
import {
  Phone,
  WhatsappLogo,
  EnvelopeSimple,
  MapPin,
  FacebookLogo,
  LinkedinLogo,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import { company } from "@/data/content";
import { SlideInSection } from "./AnimatedSection";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-5 sm:px-8 py-20 md:py-28 bg-ink">
      <SlideInSection
        direction="right"
        className="mx-auto max-w-7xl grid lg:grid-cols-[0.9fr_1.1fr] gap-12"
      >
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-amber">
            Let&apos;s Talk
          </span>
          <h2 className="mt-3 font-display font-extrabold text-white text-3xl sm:text-4xl md:text-[2.75rem] leading-tight">
            Ready to take your brand further?
          </h2>
          <p className="mt-4 text-white/70 text-base sm:text-lg">
            Tell us about your campaign and we&apos;ll get back within one
            business day with a tailored proposal.
          </p>

          <div className="mt-9 space-y-4">
            <a
              href={company.phoneHref}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-amber group-hover:bg-brand-amber group-hover:text-ink transition-colors duration-200">
                <Phone size={20} weight="bold" />
              </span>
              <span className="text-white/90 font-medium">{company.phone}</span>
            </a>

            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group cursor-pointer"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors duration-200">
                <WhatsappLogo size={20} weight="fill" />
              </span>
              <span className="text-white/90 font-medium">
                Chat on WhatsApp
              </span>
            </a>

            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-200">
                <EnvelopeSimple size={20} weight="bold" />
              </span>
              <span className="text-white/90 font-medium">{company.email}</span>
            </a>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80">
                <MapPin size={20} weight="bold" />
              </span>
              <span className="text-white/90 font-medium leading-relaxed pt-2.5">
                {company.address}
              </span>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 cursor-pointer"
            >
              <FacebookLogo size={18} weight="bold" />
            </a>
            <a
              href={company.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 cursor-pointer"
            >
              <LinkedinLogo size={18} weight="bold" />
            </a>
          </div>
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-6 sm:p-8 shadow-2xl"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <CheckCircle size={48} weight="fill" className="text-brand-green" />
                <p className="mt-4 font-display font-bold text-xl text-ink">
                  Message sent
                </p>
                <p className="mt-2 text-ink-soft text-sm">
                  We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-ink mb-1.5"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-line bg-cream px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-ink mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full rounded-xl border border-line bg-cream px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-colors duration-200"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-ink mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="w-full rounded-xl border border-line bg-cream px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-colors duration-200"
                      placeholder="+91"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-ink mb-1.5"
                  >
                    Tell us about your campaign
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-xl border border-line bg-cream px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-colors duration-200 resize-none"
                    placeholder="What are you trying to promote, and where?"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm font-medium text-brand-red" role="alert">
                    Something went wrong. Please try again or email us
                    directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-shine w-full inline-flex items-center justify-center rounded-full bg-brand-red px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-red/20 hover:bg-brand-red-dark active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </div>
            )}
          </form>
        </div>
      </SlideInSection>
    </section>
  );
}
