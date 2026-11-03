"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MinimalistHeroProps {
  logoText: string;
  /** Optional rich logo (e.g. an <Image>); falls back to logoText when omitted. */
  logo?: React.ReactNode;
  /** Optional small uppercase label above mainText, for editorial hierarchy. */
  eyebrow?: string;
  navLinks: { label: string; href: string }[];
  /** Primary CTA, shown inside the mobile menu. */
  cta?: { label: string; href: string };
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  /** Intrinsic pixel size of imageSrc, so next/image can reserve space. */
  imageWidth: number;
  imageHeight: number;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  /** Click-to-call shown bottom-left of the hero and in the mobile menu. */
  contactLink?: { label: string; href: string };
  className?: string;
}

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="rounded-sm text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
  >
    {children}
  </a>
);

const SocialIcon = ({
  href,
  icon: Icon,
}: {
  href: string;
  icon: LucideIcon;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-sm text-foreground/60 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
  >
    <Icon className="h-5 w-5" />
  </a>
);

export const MinimalistHero = ({
  logoText,
  logo,
  eyebrow,
  navLinks,
  cta,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  overlayText,
  socialLinks,
  locationText,
  contactLink,
  className,
}: MinimalistHeroProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={cn(
        // svh (not vh) so mobile browser chrome never crops the hero.
        "relative flex min-h-[100svh] w-full flex-col items-center justify-between overflow-hidden bg-background px-5 py-6 font-sans sm:p-8 md:p-12",
        className
      )}
    >
      {/* Header */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex shrink-0 items-center text-xl font-bold tracking-wider"
        >
          {logo ?? logoText}
        </motion.div>
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <motion.button
          type="button"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setMenuOpen((v) => !v)}
          className="-mr-2 flex flex-col items-end space-y-1.5 p-2 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="hero-mobile-menu"
        >
          <span
            className={cn(
              "block h-0.5 w-6 origin-center bg-foreground transition-transform duration-300",
              menuOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-foreground transition-opacity duration-200",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 origin-center bg-foreground transition-all duration-300",
              menuOpen && "w-6 -translate-y-2 -rotate-45"
            )}
          />
        </motion.button>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="hero-mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute inset-x-0 top-0 z-40 border-b border-line bg-background px-5 pb-6 pt-20 shadow-xl md:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Primary">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-1 py-3 text-base font-semibold tracking-wide text-foreground/80 transition-colors active:text-brand-red"
                >
                  {link.label}
                </a>
              ))}
              {cta && (
                <a
                  href={cta.href}
                  onClick={() => setMenuOpen(false)}
                  className="btn-shine mt-3 inline-flex items-center justify-center rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white"
                >
                  {cta.label}
                </a>
              )}
              {contactLink && (
                <a
                  href={contactLink.href}
                  className="mt-3 text-center text-sm font-medium text-foreground/60"
                >
                  {contactLink.label}
                </a>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl grow grid-cols-1 items-center gap-y-8 py-8 md:grid-cols-3 md:gap-y-0 md:py-0">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="z-20 order-3 text-center md:order-1 md:text-left"
        >
          {eyebrow && (
            <p className="mb-3 font-utility text-sm font-extrabold uppercase tracking-[0.2em] text-brand-red md:text-base">
              {eyebrow}
            </p>
          )}
          <p className="mx-auto max-w-sm text-base leading-relaxed text-foreground/85 md:mx-0 md:text-lg">
            {mainText}
          </p>
          <a
            href={readMoreLink}
            className="mt-4 inline-block rounded-sm text-base font-medium text-foreground underline decoration-from-font underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
          >
            Read More
          </a>
        </motion.div>

        {/* Center illustration. Ring, accent dot and artwork all live inside one
            square box so they scale together and never collide with the text
            or the header around them. */}
        <div className="order-2 flex items-center justify-center md:order-2">
          <div className="relative aspect-square w-[min(78vw,290px)] md:w-[400px] lg:w-[480px]">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
              className="absolute inset-0 z-0 rounded-full border-[12px] border-brand-red shadow-[0_40px_90px_-30px_rgba(226,35,26,0.35)] md:border-[18px] lg:border-[22px]"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-red/5 via-transparent to-brand-green/10" />
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.7,
              }}
              className="absolute right-[2%] top-[2%] z-20 h-[14%] w-[14%] rounded-full bg-brand-green shadow-lg ring-[5px] ring-background md:ring-[6px]"
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.35,
              }}
              className="absolute inset-x-0 bottom-[-6%] z-10 mx-auto w-[86%]"
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                priority
                sizes="(max-width: 768px) 70vw, (max-width: 1024px) 350px, 420px"
                className="h-auto w-full drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Right wordmark. Decorative: the page's real <h1> is in HeroSection. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="z-20 order-1 flex items-center justify-center text-center md:order-3 md:justify-start"
        >
          <p
            aria-hidden
            className="font-display text-6xl font-extrabold leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl"
          >
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </p>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
          {contactLink && (
            <a
              href={contactLink.href}
              className="rounded-sm text-sm font-semibold text-foreground/80 transition-colors hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
            >
              {contactLink.label}
            </a>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.05 }}
          className="shrink-0 text-sm font-medium text-foreground/80"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
