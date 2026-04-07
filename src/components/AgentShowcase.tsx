"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const coreAgents = [
  {
    name: "Kingpin",
    role: "Master orchestrator",
    color: "#c8a97e",
    x: 50,
    y: 50,
    size: "lg",
  },
];

const innerRing = [
  {
    name: "Closer",
    role: "PI firm prospecting",
    color: "#c87e7e",
    x: 25,
    y: 20,
  },
  {
    name: "Hawkeye",
    role: "Lead intelligence",
    color: "#7eb8c8",
    x: 75,
    y: 20,
  },
  {
    name: "Oracle",
    role: "Financial modeling",
    color: "#7ec88a",
    x: 85,
    y: 50,
  },
  { name: "Counselor", role: "Lit Juris lead", color: "#a97ec8", x: 75, y: 80 },
  { name: "Quant", role: "AlphaSwarm lead", color: "#c8c87e", x: 25, y: 80 },
  { name: "Commander", role: "Tab Commander", color: "#7e8ec8", x: 15, y: 50 },
];

const outerRing = [
  { name: "Sentinel", role: "Security", color: "#8ec87e" },
  { name: "Gremlin", role: "QA & testing", color: "#c87e7e" },
  { name: "Beacon", role: "SEO agent", color: "#7eb8c8" },
  { name: "Shield", role: "Compliance", color: "#c8b87e" },
  { name: "Rockstar", role: "FanForge lead", color: "#c87ea9" },
  { name: "Pumper", role: "FuelOps lead", color: "#7ec88a" },
  { name: "Bullhorn", role: "Marketing", color: "#c8a97e" },
  { name: "Webmaster", role: "SiteScout lead", color: "#a97ec8" },
  { name: "Clipper", role: "StreamSnip lead", color: "#c87ea9" },
  { name: "Foreman", role: "Rivett lead", color: "#7e8ec8" },
];

function AgentNode({
  name,
  role,
  color,
  delay,
  size = "sm",
}: {
  name: string;
  role: string;
  color: string;
  delay: number;
  size?: "sm" | "lg";
}) {
  return (
    <motion.div
      className="group relative flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Pulse ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size === "lg" ? 56 : 36,
          height: size === "lg" ? 56 : 36,
          border: `1px solid ${color}`,
          opacity: 0.2,
        }}
        animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: delay * 2 }}
      />

      {/* Node */}
      <div
        className="relative rounded-full flex items-center justify-center z-10"
        style={{
          width: size === "lg" ? 48 : 32,
          height: size === "lg" ? 48 : 32,
          background: `${color}15`,
          border: `1px solid ${color}40`,
        }}
      >
        <div
          className="rounded-full"
          style={{
            width: size === "lg" ? 12 : 8,
            height: size === "lg" ? 12 : 8,
            background: color,
          }}
        />
      </div>

      {/* Label */}
      <span
        className={`mt-2 font-medium text-text ${size === "lg" ? "text-sm" : "text-xs"}`}
      >
        {name}
      </span>
      <span className="text-[10px] text-text-muted">{role}</span>
    </motion.div>
  );
}

export default function AgentShowcase() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-border overflow-hidden">
      <div className="mx-auto w-full max-w-[1200px]">
        <FadeIn>
          <span className="text-xs tracking-[0.2em] uppercase text-text-muted">
            Infrastructure
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-8 text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.1] tracking-[-0.03em]">
            47 AI agents.
            <br />
            <span className="text-accent">One command center.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-6 max-w-lg text-text-muted leading-relaxed">
            A named-specialist architecture where one master agent routes
            requests to domain experts running in parallel. Sales, enrichment,
            outreach, deployments, content, and QA all run autonomously.
          </p>
        </FadeIn>

        {/* Network visualization */}
        <div className="mt-14 relative">
          {/* SVG connection lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {innerRing.map((agent, i) => (
              <motion.line
                key={agent.name}
                x1="50"
                y1="50"
                x2={agent.x}
                y2={agent.y}
                stroke={agent.color}
                strokeWidth="0.15"
                className="network-line"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 1 }}
              />
            ))}
          </svg>

          {/* Center - Kingpin */}
          <div className="flex justify-center mb-16">
            <AgentNode
              name="Kingpin"
              role="Master orchestrator"
              color="#c8a97e"
              delay={0.1}
              size="lg"
            />
          </div>

          {/* Inner ring - team leads */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-16">
            {innerRing.map((agent, i) => (
              <AgentNode
                key={agent.name}
                name={agent.name}
                role={agent.role}
                color={agent.color}
                delay={0.2 + i * 0.05}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted/40">
              Specialists
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Outer ring - specialists */}
          <div className="grid grid-cols-5 md:grid-cols-10 gap-6">
            {outerRing.map((agent, i) => (
              <AgentNode
                key={agent.name}
                name={agent.name}
                role={agent.role}
                color={agent.color}
                delay={0.3 + i * 0.03}
              />
            ))}
          </div>
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-12 text-xs text-text-muted/40 font-mono">
            + 31 more specialists across product, sales, QA, and ops
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
