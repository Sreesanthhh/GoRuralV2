"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Lenis drives window scroll itself; the CSS smooth-behavior fallback
    // must be off while it's active or programmatic scrolls animate twice.
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      duration: 1.1,
    });

    return () => {
      lenis.destroy();
      html.style.scrollBehavior = prevBehavior;
    };
  }, []);

  return null;
}
