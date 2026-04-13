"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import MagneticButton from "./MagneticButton";
import ParticleField from "./ParticleField";
import GradientOrb from "./GradientOrb";

const roles = ["Builder", "Architect", "Operator", "Founder"];

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

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Layered backgrounds */}
      <ParticleField />
      <div className="hero-grid" />
      <div className="hero-aurora" />
      <GradientOrb color="#c8a97e" size={800} top="-20%" right="-10%" />
      <GradientOrb color="#7eb8c8" size={600} bottom="-10%" left="-5%" delay={3} />

      <motion.div className="relative z-10 mx-auto w-full max-w-[1200px]" style={{ opacity }}>
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

        {/* Last name — gradient text */}
        <div className="overflow-hidden">
          <motion.div style={{ y: y2 }}>
            <motion.h1
              className="text-[clamp(4rem,10vw,11rem)] font-light leading-[0.85] tracking-[-0.04em] gradient-text"
              variants={line}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Langsam
            </motion.h1>
          </motion.div>
        </div>

        {/* Subtitle with rotating role */}
        <motion.div style={{ y: y3 }}>
          <motion.div
            className="mt-10 flex items-baseline gap-3"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="text-base md:text-lg text-text-muted">I&apos;m a</span>
            <span className="relative inline-flex h-[1.6em] w-[200px] md:w-[260px] overflow-hidden items-baseline">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  className="absolute left-0 text-xl md:text-2xl font-light gradient-text"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p
            className="mt-4 max-w-md text-base md:text-lg text-text-muted leading-relaxed"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            I build AI agent systems that run businesses.
            <br />
            <span className="text-text">
              15 products shipped. 47 agents orchestrated.
            </span>
          </motion.p>

          <motion.div
            className="mt-12 flex flex-wrap gap-5"
            variants={fade}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <MagneticButton>
              <a
                href="mailto:josh@roanco.law"
                className="group relative inline-flex items-center gap-2 border border-accent/40 px-8 py-4 text-sm tracking-widest uppercase text-accent transition-all duration-300 hover:border-accent rounded-[7px] overflow-hidden"
              >
                <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative group-hover:text-bg transition-colors duration-300">Get in touch</span>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-widest uppercase text-text-muted transition-colors duration-300 hover:text-text"
              >
                View work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-y-1">
                  <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom indicators */}
      <motion.div
        className="absolute bottom-12 left-6 md:left-16 lg:left-24 flex items-center gap-3 text-xs tracking-widest uppercase text-text-muted z-10"
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
        className="absolute bottom-12 right-6 md:right-16 lg:right-24 flex items-center gap-3 text-xs tracking-widest uppercase text-text-muted z-10"
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
