"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => {
        const step = prev < 30 ? 3 : prev < 70 ? 5 : prev < 90 ? 8 : 12;
        return Math.min(prev + step, 100);
      });
    }, 30);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (count >= 100 && !exiting) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setExiting(true);
      // Start exit, then reveal content
      setTimeout(() => {
        setGone(true);
        onComplete();
      }, 900);
    }
  }, [count, exiting, onComplete]);

  if (gone) return null;

  return (
    <motion.div
      className="loader-curtain"
      animate={
        exiting
          ? { clipPath: "inset(0 0 100% 0)" }
          : { clipPath: "inset(0 0 0% 0)" }
      }
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative flex flex-col items-center">
        <span className="text-[clamp(4rem,12vw,10rem)] font-light tracking-[-0.04em] text-text tabular-nums font-mono">
          {String(count).padStart(3, "0")}
        </span>

        <div className="mt-6 h-px w-48 bg-border overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-100"
            style={{ width: `${count}%` }}
          />
        </div>

        <span className="mt-4 text-xs tracking-[0.3em] uppercase text-text-muted">
          Josh Langsam
        </span>
      </div>
    </motion.div>
  );
}
