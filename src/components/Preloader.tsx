"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const SESSION_KEY = "gri-preloader-shown";

export function Preloader() {
  // Rendered visible on the server so the very first paint is the curtain,
  // not a flash of unstyled page; the effect below decides what happens next.
  const [phase, setPhase] = useState<"loading" | "lifting" | "done">("loading");
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Synchronising with sessionStorage, which cannot be read during SSR, so
    // the decision has to happen after the first client render.
    if (sessionStorage.getItem(SESSION_KEY) || reducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPhase("done");
      sessionStorage.setItem(SESSION_KEY, "1");
      return;
    }
    sessionStorage.setItem(SESSION_KEY, "1");

    // Kept short on purpose: the curtain sits on top of the hero, so every
    // extra millisecond here is added directly to Largest Contentful Paint.
    const liftAt = setTimeout(() => setPhase("lifting"), 1000);
    // Failsafe: the overlay locks scroll, so it must never be able to get
    // stuck covering the page if animation callbacks are dropped (throttled
    // background tabs, dropped rAF, etc.).
    const forceDone = setTimeout(() => setPhase("done"), 4500);
    return () => {
      clearTimeout(liftAt);
      clearTimeout(forceDone);
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (phase === "done") return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          aria-hidden
          initial={{ y: 0 }}
          animate={{ y: phase === "lifting" ? "-100%" : 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={() => {
            if (phase === "lifting") setPhase("done");
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <Image
              src="/images/logo.png"
              alt=""
              width={130}
              height={100}
              priority
              className="h-20 w-[104px] md:h-24 md:w-[124px]"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-5 font-utility text-xs font-extrabold uppercase tracking-[0.3em] text-ink-soft"
            >
              Taking Brands to Hinterlands
            </motion.p>
          </motion.div>

          {/* Thin brand accent line that fills while "loading" */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.85, ease: "easeInOut", delay: 0.1 }}
            className="absolute bottom-16 h-[3px] w-40 origin-left rounded-full bg-gradient-to-r from-brand-red to-brand-green md:w-52"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
