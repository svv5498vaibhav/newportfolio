"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionRevealProps {
  children: React.ReactNode;
  /** Extra class names on the wrapper */
  className?: string;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Slide direction */
  direction?: "up" | "left" | "right";
  /** Stagger children inside this container */
  stagger?: boolean;
}

const directionMap = {
  up: { y: 40, x: 0 },
  left: { y: 0, x: -40 },
  right: { y: 0, x: 40 },
};

/**
 * Wraps any content in a viewport-triggered fade-in + slide reveal.
 * Fires `once: true` so the animation only plays on first scroll-in.
 */
export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  stagger = false,
}: SectionRevealProps) {
  const offset = directionMap[direction];

  const variants = stagger
    ? {
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as const,
            delay,
            staggerChildren: 0.1,
            delayChildren: delay + 0.1,
          },
        },
      }
    : {
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as const,
            delay,
          },
        },
      };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
