"use client";

import React, { useCallback, useRef, ReactNode, CSSProperties } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "green" | "red" | "orange";
  size?: "sm" | "md" | "lg";
  width?: string | number;
  height?: string | number;
  customSize?: boolean; // When true, ignores size prop and uses width/height or className
}

// Hue per color family. The spotlight is always rendered at this exact hue —
// it never drifts toward other colors based on cursor position.
const glowColorMap: Record<NonNullable<GlowCardProps["glowColor"]>, number> = {
  blue: 220,
  purple: 280,
  green: 140,
  red: 0,
  orange: 30,
};

const sizeMap = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
};

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = "",
  glowColor = "blue",
  size = "md",
  width,
  height,
  customSize = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Tracked on the card itself rather than on `document`, so only the card
  // under the cursor measures itself. A document-level listener meant every
  // card on the page forced a layout on every pointer move.
  const syncPointer = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", (e.clientX - rect.left).toFixed(0));
    el.style.setProperty("--y", (e.clientY - rect.top).toFixed(0));
  }, []);

  const clearPointer = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.removeProperty("--x");
    el.style.removeProperty("--y");
  }, []);

  const hue = glowColorMap[glowColor];

  const getSizeClasses = () => (customSize ? "" : sizeMap[size]);

  const getInlineStyles = (): CSSProperties => {
    const styles: Record<string, string | number> = {
      backgroundImage: `radial-gradient(180px circle at calc(var(--x, -999) * 1px) calc(var(--y, -999) * 1px), hsl(${hue} 80% 50% / 0.12), transparent 72%)`,
    };
    if (width !== undefined) {
      styles.width = typeof width === "number" ? `${width}px` : width;
    }
    if (height !== undefined) {
      styles.height = typeof height === "number" ? `${height}px` : height;
    }
    return styles as CSSProperties;
  };

  return (
    <div
      ref={cardRef}
      style={getInlineStyles()}
      onPointerMove={syncPointer}
      onPointerLeave={clearPointer}
      className={`
        ${getSizeClasses()}
        ${!customSize ? "aspect-[3/4]" : ""}
        relative overflow-hidden rounded-2xl
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export { GlowCard };
