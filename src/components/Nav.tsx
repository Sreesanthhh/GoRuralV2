"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { motion, AnimatePresence } from "framer-motion";
import NavHeader from "@/components/ui/nav-header";
import { company } from "@/data/content";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Nav({ alwaysVisible = false }: { alwaysVisible?: boolean }) {
  const [scrolled, setScrolled] = useState(alwaysVisible);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (alwaysVisible) return;
    // The homepage hero has its own built-in header, so this sticky nav
    // only reveals itself once the user scrolls past it — avoiding two
    // overlapping logo/nav bars stacked on the first screen.
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight - 96;
      setScrolled(past);
      // Collapse the mobile sheet when the bar hides itself again, otherwise
      // it stays open behind the hero and traps clicks on the way back up.
      if (!past) setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysVisible]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "translate-y-0 opacity-100 bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-line)]"
          : "-translate-y-full opacity-0 pointer-events-none bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto max-w-7xl px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between"
      >
        <Link
          href="/"
          aria-label="Go Rural India, home"
          className="flex items-center gap-2 shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
        >
          <Image
            src="/images/logo.png"
            alt="Go Rural India"
            width={130}
            height={100}
            className="h-9 w-[47px] md:h-11 md:w-[57px]"
            priority
          />
        </Link>

        <div className="hidden md:block">
          <NavHeader links={links} />
        </div>

        <div className="hidden md:block">
          <Link
            href="/#contact"
            className="btn-shine inline-flex items-center rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-red-dark active:scale-[0.97] transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
          >
            Get a Proposal
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden -mr-2 p-2 text-ink cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
        >
          {open ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="nav-mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-cream border-t border-line"
          >
            <div className="flex flex-col px-5 py-4 gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-semibold text-ink-soft active:text-brand-red transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="btn-shine mt-2 inline-flex items-center justify-center rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white"
              >
                Get a Proposal
              </Link>
              <a
                href={company.phoneHref}
                className="mt-2 text-center text-sm text-ink-soft"
              >
                Or call {company.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
