"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import FadeIn from "./FadeIn";
import BrowserMockup from "./BrowserMockup";
import GradientOrb from "./GradientOrb";

const studies = [
  {
    title: "Litigation Juris",
    subtitle: "AI-Powered Case Management for PI Law",
    challenge:
      "Florida PI firms were drowning in paper — managing cases across spreadsheets, email chains, and filing cabinets. No existing legal software was built for the PI workflow.",
    solution:
      "Built a full case management platform with AI document analysis, automated demand letter generation, medical record parsing, and intelligent workflow routing. 230+ API routes powering every stage of a case lifecycle.",
    results: [
      { label: "Tests passing", value: "469" },
      { label: "API routes", value: "230+" },
      { label: "Client demo items", value: "25" },
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Claude API", "Stripe"],
    color: "#c8a97e",
    gradient: "linear-gradient(135deg, #1a1510 0%, #2a1f14 30%, #1a1510 60%, #0d1117 100%)",
    url: "app.roanco.law",
    mockupLines: [
      { w: "60%", accent: true },
      { w: "100%", accent: false },
      { w: "80%", accent: false },
      { w: "45%", accent: true },
      { w: "90%", accent: false },
    ],
  },
  {
    title: "Agent Command Center",
    subtitle: "47 AI Agents Running 15 Products",
    challenge:
      "Managing 15 live products across legal tech, SaaS, fintech, and distribution as a solo builder. Manual task switching was killing velocity.",
    solution:
      "Designed a named-specialist architecture with one master orchestrator routing to domain-expert agents running in parallel. Sales, enrichment, outreach, deployments, QA, and content all run autonomously.",
    results: [
      { label: "Named agents", value: "47" },
      { label: "Products managed", value: "15" },
      { label: "Parallel pipelines", value: "6" },
    ],
    stack: ["Claude API", "TypeScript", "Shell", "MCP Servers"],
    color: "#8ec87e",
    gradient: "linear-gradient(135deg, #0d1a10 0%, #142a14 30%, #0d1a10 60%, #0d1117 100%)",
    url: "cli",
    mockupLines: [
      { w: "40%", accent: true },
      { w: "100%", accent: false },
      { w: "70%", accent: false },
      { w: "55%", accent: true },
      { w: "85%", accent: false },
    ],
  },
  {
    title: "Hemp Route CRM",
    subtitle: "Wholesale Distribution Intelligence",
    challenge:
      "Scaling a hemp distribution route from 0 to 500+ accounts required real-time route optimization, commission tracking, and visit logging — not a generic CRM.",
    solution:
      "Built a purpose-built CRM with route optimization, prospect scoring, visit logging, and commission tracking. Five intelligence engines power daily route decisions and expansion targets.",
    results: [
      { label: "Active accounts", value: "180+" },
      { label: "Route efficiency", value: "3x" },
      { label: "Intel engines", value: "5" },
    ],
    stack: ["Next.js", "Supabase", "TypeScript", "Claude API"],
    color: "#7ec88a",
    gradient: "linear-gradient(135deg, #0d1a12 0%, #0f2a18 30%, #0d1a12 60%, #0d1117 100%)",
    url: "crm.roanco.law",
    mockupLines: [
      { w: "50%", accent: true },
      { w: "90%", accent: false },
      { w: "75%", accent: false },
      { w: "60%", accent: true },
      { w: "100%", accent: false },
    ],
  },
];

function MockupContent({ study }: { study: (typeof studies)[number] }) {
  return (
    <div className="absolute inset-0 p-6 flex flex-col">
      {/* Fake sidebar + content layout */}
      <div className="flex gap-4 h-full">
        {/* Sidebar */}
        <div className="w-1/4 flex flex-col gap-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-2 rounded-full"
              style={{
                width: `${60 + Math.random() * 40}%`,
                background: i === 1 ? `${study.color}40` : "rgba(255,255,255,0.04)",
              }}
            />
          ))}
          <div className="mt-auto h-8 rounded-md" style={{ background: "rgba(255,255,255,0.03)" }} />
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Header bar */}
          <div className="flex items-center gap-3">
            <div className="h-3 rounded-full" style={{ width: "30%", background: `${study.color}30` }} />
            <div className="ml-auto flex gap-2">
              <div className="w-6 h-6 rounded-md" style={{ background: `${study.color}20` }} />
              <div className="w-6 h-6 rounded-md" style={{ background: "rgba(255,255,255,0.04)" }} />
            </div>
          </div>

          {/* Content blocks */}
          <div className="grid grid-cols-3 gap-2 flex-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-lg flex flex-col p-3 gap-2" style={{ background: "rgba(255,255,255,0.02)" }}>
                <div className="h-2 w-3/4 rounded-full" style={{ background: i === 0 ? `${study.color}30` : "rgba(255,255,255,0.06)" }} />
                <div className="h-8 rounded-md" style={{ background: `${study.color}${i === 0 ? "15" : "08"}` }} />
                <div className="h-2 w-1/2 rounded-full" style={{ background: "rgba(255,255,255,0.04)" }} />
              </div>
            ))}
          </div>

          {/* Bottom table */}
          <div className="rounded-lg p-3 space-y-2" style={{ background: "rgba(255,255,255,0.02)" }}>
            {study.mockupLines.map((line, i) => (
              <div
                key={i}
                className="h-1.5 rounded-full"
                style={{
                  width: line.w,
                  background: line.accent ? `${study.color}25` : "rgba(255,255,255,0.04)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-border overflow-hidden">
      <GradientOrb color={studies[active].color} size={500} top="10%" right="-10%" delay={1} />

      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <FadeIn>
          <span className="text-xs tracking-[0.2em] uppercase text-text-muted">
            Deep Dives
          </span>
          <h2 className="mt-4 text-[clamp(2rem,5vw,4rem)] font-light tracking-[-0.03em]">
            Case Studies
          </h2>
        </FadeIn>

        {/* Tab selector */}
        <FadeIn delay={0.1}>
          <div className="mt-10 flex gap-2 overflow-x-auto">
            {studies.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                className={`px-6 py-3 text-sm tracking-wide rounded-[7px] border transition-all duration-300 whitespace-nowrap ${
                  active === i
                    ? "border-accent/40 text-accent bg-accent/5"
                    : "border-border text-text-muted hover:border-accent/20 hover:text-text"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Active study */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10"
        >
          {/* Browser mockup */}
          <div className="mb-10">
            <BrowserMockup gradient={studies[active].gradient} url={studies[active].url}>
              <MockupContent study={studies[active]} />
            </BrowserMockup>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left — narrative */}
            <div>
              <div
                className="h-[2px] w-16 mb-8"
                style={{
                  background: `linear-gradient(90deg, ${studies[active].color}, transparent)`,
                }}
              />
              <h3 className="text-2xl md:text-3xl font-light tracking-[-0.02em]">
                {studies[active].subtitle}
              </h3>

              <div className="mt-8 space-y-6">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted">
                    Challenge
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {studies[active].challenge}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted">
                    Solution
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {studies[active].solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Right — results + stack */}
            <div className="space-y-6">
              {/* Big stat cards */}
              <div className="grid grid-cols-3 gap-3">
                {studies[active].results.map((r) => (
                  <div
                    key={r.label}
                    className="border border-border rounded-[7px] p-5 text-center"
                  >
                    <div
                      className="text-2xl md:text-3xl font-light"
                      style={{ color: studies[active].color }}
                    >
                      {r.value}
                    </div>
                    <div className="mt-1 text-[10px] tracking-[0.15em] uppercase text-text-muted">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="border border-border rounded-[7px] p-6">
                <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted">
                  Stack
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {studies[active].stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs border border-border text-text-muted rounded-[7px] hover:border-accent/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
