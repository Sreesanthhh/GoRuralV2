"use client";

import { motion } from "framer-motion";

const words: { text: string; accent?: boolean }[] = [
  { text: "Taking" },
  { text: "brands" },
  { text: "to" },
  { text: "the" },
  { text: "hinterlands", accent: true },
  { text: "—" },
  { text: "and" },
  { text: "beyond." },
];

export function BrandStatement() {
  return (
    <section
      aria-label="Brand statement"
      className="px-5 sm:px-8 py-24 md:py-36"
    >
      <div className="mx-auto max-w-5xl text-center">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
          className="font-display font-extrabold tracking-tight text-ink text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08]"
        >
          {words.map((w, i) => (
            <span key={i}>
              {/* Clip box for the masked rise; padding extends the clip area
                  below the baseline so descenders (g, y) aren't cut off. */}
              <span className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
                <motion.span
                  variants={{
                    hidden: { y: "115%" },
                    show: {
                      y: 0,
                      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className={`inline-block ${w.accent ? "text-brand-red" : ""}`}
                >
                  {w.text}
                </motion.span>
              </span>
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-xl text-base sm:text-lg text-ink-soft"
        >
          On-ground roots. Digital reach. One agency for every mile in
          between.
        </motion.p>
      </div>
    </section>
  );
}
