"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  type Transition,
  type Variants,
} from "framer-motion";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type MorphingDialogContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  uniqueId: string;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
};

const MorphingDialogContext = createContext<MorphingDialogContextType | null>(
  null
);

function useMorphingDialog() {
  const context = useContext(MorphingDialogContext);
  if (!context) {
    throw new Error(
      "useMorphingDialog must be used within a MorphingDialog"
    );
  }
  return context;
}

const FOCUSABLE =
  'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])';

function MorphingDialog({
  children,
  transition,
}: {
  children: React.ReactNode;
  transition?: Transition;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const uniqueId = useId();
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const contextValue = useMemo(
    () => ({ isOpen, setIsOpen, uniqueId, triggerRef }),
    [isOpen, uniqueId]
  );

  return (
    <MorphingDialogContext.Provider value={contextValue}>
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </MorphingDialogContext.Provider>
  );
}

function MorphingDialogTrigger({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const { setIsOpen, isOpen, uniqueId, triggerRef } = useMorphingDialog();

  return (
    <motion.button
      ref={triggerRef}
      type="button"
      layoutId={`dialog-${uniqueId}`}
      className={cn(
        "relative cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red",
        className
      )}
      style={style}
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      onClick={() => setIsOpen(true)}
    >
      {children}
    </motion.button>
  );
}

function MorphingDialogContainer({ children }: { children: React.ReactNode }) {
  const { isOpen, setIsOpen, uniqueId, triggerRef } = useMorphingDialog();
  const [mounted, setMounted] = useState(false);

  // Portals need a DOM to target, which only exists after hydration.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) return;
    const opener = triggerRef.current;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      // Keep Tab inside the dialog while it is open.
      const panel = document.querySelector<HTMLElement>(
        `[data-dialog-panel="${uniqueId}"]`
      );
      if (!panel) return;
      const items = [...panel.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
        (el) => el.offsetParent !== null
      );
      if (items.length === 0) {
        e.preventDefault();
        panel.focus();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      // Send focus back where the user left it.
      opener?.focus();
    };
  }, [isOpen, setIsOpen, uniqueId, triggerRef]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence initial={false} mode="sync">
      {isOpen && (
        <>
          <motion.div
            key={`backdrop-${uniqueId}`}
            className="fixed inset-0 z-[60] bg-ink/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          <div className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center p-4">
            {children}
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

function MorphingDialogContent({
  children,
  className,
  style,
  ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Accessible name for the dialog, usually the item's title. */
  ariaLabel?: string;
}) {
  const { uniqueId } = useMorphingDialog();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    panelRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <motion.div
      ref={panelRef}
      layoutId={`dialog-${uniqueId}`}
      data-dialog-panel={uniqueId}
      className={cn("overflow-hidden focus:outline-none", className)}
      style={style}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      tabIndex={-1}
    >
      {children}
    </motion.div>
  );
}

function MorphingDialogTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { uniqueId } = useMorphingDialog();

  return (
    <motion.div layoutId={`dialog-title-${uniqueId}`} className={className}>
      {children}
    </motion.div>
  );
}

function MorphingDialogSubtitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { uniqueId } = useMorphingDialog();

  return (
    <motion.div layoutId={`dialog-subtitle-${uniqueId}`} className={className}>
      {children}
    </motion.div>
  );
}

function MorphingDialogImage({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  /** Skip lazy-loading for images likely to be above the fold. */
  priority?: boolean;
}) {
  const { uniqueId } = useMorphingDialog();

  return (
    <motion.img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={cn("object-cover", className)}
      layoutId={`dialog-img-${uniqueId}`}
    />
  );
}

function MorphingDialogDescription({
  children,
  className,
  variants,
  disableLayoutAnimation,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  disableLayoutAnimation?: boolean;
}) {
  const { uniqueId } = useMorphingDialog();

  return (
    <motion.div
      key={`dialog-description-${uniqueId}`}
      layoutId={
        disableLayoutAnimation
          ? undefined
          : `dialog-description-${uniqueId}`
      }
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MorphingDialogClose({ className }: { className?: string }) {
  const { setIsOpen } = useMorphingDialog();

  return (
    <motion.button
      type="button"
      aria-label="Close dialog"
      onClick={() => setIsOpen(false)}
      className={cn(
        "absolute right-4 top-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
    >
      <XIcon size={20} />
    </motion.button>
  );
}

export {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogImage,
  MorphingDialogDescription,
  MorphingDialogClose,
};
