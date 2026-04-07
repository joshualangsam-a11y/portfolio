"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

const line = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: {
      delay: 0.1 + i * 0.12,
      duration: 1,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  }),
};

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7 + i * 0.12,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col justify-center px-6 md:px-16 lg:px-24"
    >
      <motion.div className="max-w-[1200px]" style={{ opacity }}>
        {/* First name */}
        <div className="overflow-hidden">
          <motion.div style={{ y: y1 }}>
            <motion.h1
              className="text-[clamp(4rem,10vw,11rem)] font-light leading-[0.85] tracking-[-0.04em] text-text"
              variants={line}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Josh
            </motion.h1>
          </motion.div>
        </div>

        {/* Last name */}
        <div className="overflow-hidden">
          <motion.div style={{ y: y2 }}>
            <motion.h1
              className="text-[clamp(4rem,10vw,11rem)] font-light leading-[0.85] tracking-[-0.04em] text-accent"
              variants={line}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Langsam
            </motion.h1>
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.div style={{ y: y3 }}>
          <motion.p
            className="mt-10 max-w-md text-base md:text-lg text-text-muted leading-relaxed"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            I build AI agent systems that run businesses.
            <br />
            <span className="text-text">
              15 products shipped. 47 agents orchestrated.
            </span>
          </motion.p>

          <motion.div
            className="mt-12 flex gap-5"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <MagneticButton>
              <a
                href="mailto:josh@roanco.law"
                className="inline-flex items-center gap-2 border border-accent/40 px-8 py-4 text-sm tracking-widest uppercase text-accent transition-all duration-300 hover:bg-accent hover:text-bg rounded-[7px]"
              >
                Get in touch
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-widest uppercase text-text-muted transition-colors duration-300 hover:text-text"
              >
                View work
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom indicators */}
      <motion.div
        className="absolute bottom-12 left-6 md:left-16 lg:left-24 flex items-center gap-3 text-xs tracking-widest uppercase text-text-muted"
        variants={fade}
        initial="hidden"
        animate="visible"
        custom={3}
        style={{ opacity }}
      >
        <motion.div
          className="h-12 w-px bg-accent/40"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
        Scroll
      </motion.div>

      <motion.div
        className="absolute bottom-12 right-6 md:right-16 lg:right-24 flex items-center gap-3 text-xs tracking-widest uppercase text-text-muted"
        variants={fade}
        initial="hidden"
        animate="visible"
        custom={3}
        style={{ opacity }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
        </span>
        Available for work
      </motion.div>
    </section>
  );
}
