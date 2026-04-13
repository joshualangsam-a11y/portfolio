"use client";

import FadeIn from "./FadeIn";
import AnimatedCounter from "./AnimatedCounter";

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

export default function About() {
  return (
    <section id="about" className="px-6 md:px-16 lg:px-24 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1200px]">
        <FadeIn>
          <span className="text-xs tracking-[0.2em] uppercase text-text-muted">
            About
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-8 max-w-[900px] text-[clamp(1.5rem,4vw,3.5rem)] font-light leading-[1.2] tracking-[-0.02em]">
            I build AI-powered software for industries that move slow.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-6 max-w-[700px] text-base md:text-lg leading-relaxed text-text-muted">
            At 21, I&apos;ve shipped 15 products across legal tech, SaaS,
            fintech, and AI — not because someone told me to, but because I
            kept finding industries running on spreadsheets and phone calls. I
            didn&apos;t learn to code in a classroom. I learned by building
            things people actually use, breaking them, and shipping the fix
            before anyone noticed.
          </p>
          <p className="mt-4 max-w-[700px] text-base md:text-lg leading-relaxed text-text-muted">
            I&apos;m the co-founder and CTO of{" "}
            <span className="text-accent">Roan Co.</span>, where we build
            AI-powered software for industries that move slow. I orchestrate a
            47-agent system that handles sales, enrichment, deployments, and QA
            across every product — autonomously.
          </p>
        </FadeIn>

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
