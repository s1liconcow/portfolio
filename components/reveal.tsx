"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { type ReactNode } from "react";

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
};

export function Reveal({
  children,
  delay = 0,
  y = 14,
  duration = 0.9,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.0, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.span>
  );
}
