"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useId,
  useMemo,
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

function MorphingDialog({
  children,
  transition,
}: {
  children: React.ReactNode;
  transition?: Transition;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const uniqueId = useId();

  const contextValue = useMemo(
    () => ({ isOpen, setIsOpen, uniqueId }),
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
  const { setIsOpen, isOpen, uniqueId } = useMorphingDialog();

  return (
    <motion.div
      layoutId={`dialog-${uniqueId}`}
      className={cn("relative cursor-pointer", className)}
      style={style}
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      onClick={() => setIsOpen(true)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsOpen(true);
        }
      }}
    >
      {children}
    </motion.div>
  );
}

function MorphingDialogContainer({ children }: { children: React.ReactNode }) {
  const { isOpen, setIsOpen, uniqueId } = useMorphingDialog();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, setIsOpen]);

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
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const { uniqueId } = useMorphingDialog();

  return (
    <motion.div
      layoutId={`dialog-${uniqueId}`}
      className={cn("overflow-hidden", className)}
      style={style}
      role="dialog"
      aria-modal="true"
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
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const { uniqueId } = useMorphingDialog();

  return (
    <motion.img
      src={src}
      alt={alt}
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
        "absolute right-4 top-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full",
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
