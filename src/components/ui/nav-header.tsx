"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface NavLink {
  href: string;
  label: string;
}

/** Position of the sliding pill behind the hovered tab. */
type CursorPosition = {
  left: number;
  width: number;
  opacity: number;
};

const defaultLinks: NavLink[] = [
  { href: "#", label: "Home" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "About" },
  { href: "#", label: "Services" },
  { href: "#", label: "Contact" },
];

function NavHeader({ links = defaultLinks }: { links?: NavLink[] }) {
  const [position, setPosition] = useState<CursorPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border-2 border-ink bg-white p-1"
      onMouseLeave={() => {
        setPosition((pv) => ({ ...pv, opacity: 0 }));
        setHovered(null);
      }}
    >
      {links.map((link) => (
        <Tab
          key={link.label}
          href={link.href}
          active={hovered === link.label}
          setPosition={setPosition}
          onHover={() => setHovered(link.label)}
        >
          {link.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  href,
  active,
  setPosition,
  onHover,
}: {
  children: React.ReactNode;
  href: string;
  active: boolean;
  setPosition: React.Dispatch<React.SetStateAction<CursorPosition>>;
  onHover: () => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  const highlight = () => {
    if (!ref.current) return;
    const { width } = ref.current.getBoundingClientRect();
    setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
    onHover();
  };

  return (
    <li ref={ref} className="relative z-10 block" onMouseEnter={highlight}>
      <a
        href={href}
        // Keyboard users get the same highlight as the mouse.
        onFocus={highlight}
        className={`block cursor-pointer rounded-full px-3 py-1.5 text-xs font-semibold uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red md:px-5 md:py-3 md:text-base ${
          active ? "text-white" : "text-ink"
        }`}
      >
        {children}
      </a>
    </li>
  );
};

const Cursor = ({ position }: { position: CursorPosition }) => {
  return (
    <motion.li
      aria-hidden
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-ink md:h-12"
    />
  );
};

export default NavHeader;
