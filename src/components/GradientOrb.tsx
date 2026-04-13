"use client";

import { motion } from "framer-motion";

export default function GradientOrb({
  color = "#c8a97e",
  size = 600,
  top,
  left,
  right,
  bottom,
  delay = 0,
}: {
  color?: string;
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none rounded-full blur-[120px]"
      style={{
        width: size,
        height: size,
        background: color,
        opacity: 0,
        top,
        left,
        right,
        bottom,
      }}
      animate={{
        opacity: [0.03, 0.07, 0.03],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}
