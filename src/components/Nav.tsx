"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight - 96);
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
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Go Rural India"
            width={130}
            height={100}
            className="h-9 w-[47px] md:h-11 md:w-[57px]"
            priority
          />
        </a>

        <div className="hidden md:block">
          <NavHeader links={links} />
        </div>

        <div className="hidden md:block">
          <a
            href="/#contact"
            className="btn-shine inline-flex items-center rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-red-dark active:scale-[0.97] transition-all duration-200 cursor-pointer"
          >
            Get a Proposal
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden -mr-2 p-2 text-ink cursor-pointer"
        >
          {open ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-cream border-t border-line"
          >
            <div className="flex flex-col px-5 py-4 gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-semibold text-ink-soft active:text-brand-red transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="btn-shine mt-2 inline-flex items-center justify-center rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white"
              >
                Get a Proposal
              </a>
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
