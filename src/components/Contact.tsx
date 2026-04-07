"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";
import MagneticButton from "./MagneticButton";

const links = [
  { label: "Email", href: "mailto:josh@roanco.law" },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/joshualangsam",
  },
  {
    label: "GitHub",
    href: "https://github.com/joshualangsam-a11y",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/josh-langsam",
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section
      ref={ref}
      id="contact"
      className="px-6 md:px-16 lg:px-24 py-20 md:py-28 overflow-hidden"
    >
      <motion.div style={{ y }}>
        <FadeIn>
          <h2 className="text-[clamp(2.5rem,7vw,8rem)] font-light leading-[0.9] tracking-[-0.04em]">
            {"Let's build"}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-[clamp(2.5rem,7vw,8rem)] font-light leading-[0.9] tracking-[-0.04em] text-accent">
            something.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-16 flex flex-wrap gap-4">
            {links.map((link) => (
              <MagneticButton key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-8 py-4 text-sm tracking-widest uppercase text-text-muted transition-all duration-300 hover:border-accent/40 hover:text-accent rounded-[7px]"
                >
                  {link.label}
                </a>
              </MagneticButton>
            ))}
          </div>
        </FadeIn>
      </motion.div>

      <div className="mt-20 flex items-end justify-between border-t border-border pt-8">
        <span className="text-xs text-text-muted/50">
          &copy; {new Date().getFullYear()} Josh Langsam
        </span>
        <span className="text-xs text-text-muted/50 tracking-widest">
          Florida
        </span>
      </div>
    </section>
  );
}
