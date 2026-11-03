import Image from "next/image";
import Link from "next/link";
import {
  FacebookLogo,
  LinkedinLogo,
  Phone,
  EnvelopeSimple,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { company } from "@/data/content";

const footerLinks = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 md:py-16 grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="inline-flex w-[60px] shrink-0 items-center rounded-xl bg-white px-3 py-2">
            <Image
              src="/images/logo.png"
              alt="Go Rural India"
              width={130}
              height={100}
              className="h-7 w-[36px]"
            />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            A full-service marketing agency taking brands from Hyderabad to
            the hinterlands. Two decades of on-ground reach, now paired with
            sharp digital strategy.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Go Rural India on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 cursor-pointer"
            >
              <FacebookLogo size={18} weight="bold" />
            </a>
            <a
              href={company.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Go Rural India on LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 cursor-pointer"
            >
              <LinkedinLogo size={18} weight="bold" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="font-utility text-xs font-bold uppercase tracking-widest text-brand-amber">
            Explore
          </p>
          <ul className="mt-5 space-y-3">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="rounded-sm text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-amber"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-utility text-xs font-bold uppercase tracking-widest text-brand-amber">
            Get in Touch
          </p>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2.5 hover:text-white transition-colors duration-200"
              >
                <Phone size={16} weight="bold" className="shrink-0" />
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2.5 hover:text-white transition-colors duration-200"
              >
                <EnvelopeSimple size={16} weight="bold" className="shrink-0" />
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 leading-relaxed">
              <MapPin size={16} weight="bold" className="mt-0.5 shrink-0" />
              {company.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/60 text-center">
            © {new Date().getFullYear()} {company.legalName}. All rights
            reserved.
          </p>
          <p className="text-xs text-white/60">
            Taking Your Brand To Hinterlands
          </p>
        </div>
      </div>
    </footer>
  );
}
