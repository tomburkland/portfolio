"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  /** Stagger index — delays the animation by index * 0.06s. */
  delay?: number;
  className?: string;
  /** Render as a different element if needed (defaults to div). */
  as?: "div" | "section" | "li" | "header" | "footer";
};

/**
 * Subtle, premium scroll reveal: an 8px rise + fade, played once when the
 * element enters view. Respects prefers-reduced-motion.
 */
export default function FadeIn({
  children,
  delay = 0,
  className,
  as = "div",
}: FadeInProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: delay * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
