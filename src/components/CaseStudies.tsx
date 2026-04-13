"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import FadeIn from "./FadeIn";

const studies = [
  {
    title: "Litigation Juris",
    subtitle: "AI-Powered Case Management for PI Law",
    challenge:
      "Florida PI firms were drowning in paper — managing cases across spreadsheets, email chains, and filing cabinets. No existing legal software was built for the PI workflow.",
    solution:
      "Built a full case management platform with AI document analysis, automated demand letter generation, medical record parsing, and intelligent workflow routing. 230+ API routes powering every stage of a case lifecycle.",
    results: [
      "469 tests passing",
      "25-action-item roadmap from first client demo",
      "Full case lifecycle from intake to settlement",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Claude API", "Stripe"],
    color: "#c8a97e",
  },
  {
    title: "Agent Command Center",
    subtitle: "47 AI Agents Running 15 Products",
    challenge:
      "Managing 15 live products across legal tech, SaaS, fintech, and distribution as a solo builder. Manual task switching was killing velocity.",
    solution:
      "Designed a named-specialist architecture with one master orchestrator routing to domain-expert agents running in parallel. Sales, enrichment, outreach, deployments, QA, and content all run autonomously.",
    results: [
      "47 named agents across 15 products",
      "Parallel execution across domains",
      "Autonomous sales, QA, and deploy pipelines",
    ],
    stack: ["Claude API", "TypeScript", "Shell", "MCP Servers"],
    color: "#8ec87e",
  },
  {
    title: "Hemp Route CRM",
    subtitle: "Wholesale Distribution Intelligence",
    challenge:
      "Scaling a hemp distribution route from 0 to 500+ accounts required real-time route optimization, commission tracking, and visit logging — not a generic CRM.",
    solution:
      "Built a purpose-built CRM with route optimization, prospect scoring, visit logging, and commission tracking. Five intelligence engines power daily route decisions and expansion targets.",
    results: [
      "180 active accounts",
      "~$600/day revenue tracked",
      "5 intelligence engines",
    ],
    stack: ["Next.js", "Supabase", "TypeScript", "Claude API"],
    color: "#7ec88a",
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-border">
      <div className="mx-auto w-full max-w-[1200px]">
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
            <div>
              <div className="border border-border rounded-[7px] p-8">
                <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted">
                  Results
                </span>
                <div className="mt-4 space-y-4">
                  {studies[active].results.map((r) => (
                    <div key={r} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0"
                        style={{ background: studies[active].color }}
                      />
                      <span className="text-sm text-text">{r}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted">
                    Stack
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {studies[active].stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs border border-border text-text-muted rounded-[7px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
