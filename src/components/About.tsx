"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import AnimatedCounter from "./AnimatedCounter";
import GradientOrb from "./GradientOrb";

const stats = [
  { value: 21, label: "Years old" },
  { value: 15, label: "Products shipped" },
  { value: 47, label: "AI agents built" },
  { value: 469, label: "Tests passing", suffix: "+" },
];

const stack = [
  "Elixir / Phoenix",
  "TypeScript",
  "Next.js",
  "React",
  "Python",
  "PostgreSQL",
  "Claude API",
  "Tailwind",
  "Supabase",
  "Stripe",
  "Fly.io",
  "Vercel",
];

const terminalLines = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "josh langsam — builder, architect, operator" },
  { prompt: true, text: "cat stack.txt" },
  { prompt: false, text: "elixir · typescript · next.js · python · claude api" },
  { prompt: true, text: "wc -l products/" },
  { prompt: false, text: "15 products, 47 agents, 469+ tests" },
  { prompt: true, text: "uptime" },
  { prompt: false, text: "21 years, shipping since 19" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-16 lg:px-24 py-20 md:py-28 overflow-hidden">
      <GradientOrb color="#7eb8c8" size={500} top="0%" right="-10%" delay={1} />

      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <FadeIn>
          <span className="text-xs tracking-[0.2em] uppercase text-text-muted">
            About
          </span>
        </FadeIn>

        <div className="mt-8 grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left — narrative */}
          <div>
            <FadeIn delay={0.1}>
              <h2 className="max-w-[900px] text-[clamp(1.5rem,4vw,3.5rem)] font-light leading-[1.2] tracking-[-0.02em]">
                I build AI-powered software for industries that move slow.
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-text-muted">
                At 21, I&apos;ve shipped 15 products across legal tech, SaaS,
                fintech, and AI — not because someone told me to, but because I
                kept finding industries running on spreadsheets and phone calls. I
                didn&apos;t learn to code in a classroom. I learned by building
                things people actually use, breaking them, and shipping the fix
                before anyone noticed.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-text-muted">
                I&apos;m the co-founder and CTO of{" "}
                <span className="text-accent">Roan Co.</span>, where we build
                AI-powered software for industries that move slow. I orchestrate a
                47-agent system that handles sales, enrichment, deployments, and QA
                across every product — autonomously.
              </p>
            </FadeIn>
          </div>

          {/* Right — terminal visual */}
          <FadeIn delay={0.2}>
            <div className="terminal-block">
              <div className="terminal-header">
                <div className="terminal-dot" style={{ background: "#ff5f57" }} />
                <div className="terminal-dot" style={{ background: "#febc2e" }} />
                <div className="terminal-dot" style={{ background: "#28c840" }} />
                <span className="ml-3 text-[10px] font-mono text-text-muted/30">
                  ~/josh
                </span>
              </div>
              <div className="p-5 font-mono text-xs md:text-sm space-y-1.5 leading-relaxed">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      delay: 0.3 + i * 0.08,
                      duration: 0.4,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    {line.prompt ? (
                      <span>
                        <span className="text-accent">$</span>{" "}
                        <span className="text-text">{line.text}</span>
                      </span>
                    ) : (
                      <span className="text-text-muted">{line.text}</span>
                    )}
                  </motion.div>
                ))}
                <motion.span
                  className="inline-block w-2 h-4 bg-accent/60"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Animated Stats */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.1 + i * 0.08}>
              <div className="relative">
                <div className="text-3xl md:text-5xl font-light text-accent tabular-nums">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix || ""}
                  />
                </div>
                <div className="mt-3 text-[10px] tracking-[0.2em] uppercase text-text-muted">
                  {stat.label}
                </div>
                <div className="mt-4 h-px w-8 bg-accent/20" />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Stack */}
        <FadeIn delay={0.2}>
          <div className="mt-14">
            <span className="text-xs tracking-[0.2em] uppercase text-text-muted">
              Stack
            </span>
            <div className="mt-6 flex flex-wrap gap-3">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-border px-5 py-2.5 text-xs tracking-wide text-text-muted transition-all duration-300 hover:border-accent/30 hover:text-text rounded-[7px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
