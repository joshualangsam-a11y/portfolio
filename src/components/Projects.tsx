"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef, MouseEvent } from "react";
import FadeIn from "./FadeIn";

type Project = {
  name: string;
  category: string;
  description: string;
  color: string;
  url?: string;
  metrics?: string;
  year: string;
};

const projects: Project[] = [
  {
    name: "Litigation Juris",
    category: "Legal Tech / AI",
    description:
      "AI-powered case management for Florida PI firms. 230+ API routes, intelligent document analysis, automated workflows.",
    color: "#c8a97e",
    url: "https://app.roanco.law",
    metrics: "469 tests passing",
    year: "2025",
  },
  {
    name: "Agent Command Center",
    category: "AI / Orchestration",
    description:
      "47-agent system orchestrating sales, enrichment, outreach, deploys, and content across 15 products. One master routes to named specialists in parallel.",
    color: "#8ec87e",
    metrics: "47 agents, 15 products",
    year: "2025",
  },
  {
    name: "Cortex",
    category: "Dev Tools / Elixir",
    description:
      "Terminal orchestrator in Elixir. Manages 8-9 concurrent PTY sessions with intelligent routing, process supervision, and real-time multiplexing.",
    color: "#e07e5a",
    metrics: "8 concurrent PTYs",
    year: "2026",
  },
  {
    name: "FuelOps",
    category: "SaaS / Operations",
    description:
      "Gas station management platform. Daily fuel reconciliation, cash variance tracking, and c-store inventory for multi-location operators.",
    color: "#7eb8c8",
    metrics: "$400/mo SaaS",
    year: "2025",
  },
  {
    name: "VapeOps",
    category: "SaaS / Retail",
    description:
      "Vape shop management SaaS. Inventory tracking, compliance monitoring, and POS integration for independent retailers.",
    color: "#c87ea9",
    metrics: "$299/mo SaaS",
    year: "2025",
  },
  {
    name: "Hemp Route CRM",
    category: "Sales / CRM",
    description:
      "Route management and CRM for wholesale hemp distribution. Commission tracking, visit logging, prospect pipeline for 500-account target.",
    color: "#7ec88a",
    metrics: "180 accounts",
    year: "2026",
  },
  {
    name: "SiteScout",
    category: "Elixir / Prospecting",
    description:
      "Automated website prospecting tool built in Elixir. Scans local businesses, audits site quality, scores leads, and generates outreach.",
    color: "#c8b87e",
    metrics: "Elixir + LiveView",
    year: "2026",
  },
  {
    name: "Servicewright",
    category: "SaaS / Home Services",
    description:
      "AI-powered platform for Florida home service businesses. Client onboarding, engagement tracking, and marketplace matching for snowbird property care.",
    color: "#7e9ec8",
    metrics: "FL market focus",
    year: "2026",
  },
  {
    name: "AlphaSwarm",
    category: "AI / Finance",
    description:
      "Multi-agent AI trading system in Elixir. Eight GenServer agents analyze markets, manage risk, and execute trades through broker APIs.",
    color: "#7ec88a",
    metrics: "8 GenServer agents",
    year: "2025",
  },
  {
    name: "StreamSnip",
    category: "AI / Video",
    description:
      "Paste a YouTube URL. AI detects viral moments, cuts vertical clips with burned-in captions. FastAPI + Vite, deployed on Railway.",
    color: "#c87ea9",
    year: "2025",
  },
  {
    name: "FanForge",
    category: "SaaS / Music",
    description:
      "AI music marketing platform. Artists connect TikTok, Instagram, YouTube, and X. Generates content strategies and schedules posts.",
    color: "#c87e7e",
    metrics: "Active users",
    year: "2025",
  },
  {
    name: "VerdictAds",
    category: "AI / Marketing",
    description:
      "AI ad generation for PI law firms. Campaign creatives, copy, and video ads with Remotion rendering, tailored to personal injury verticals.",
    color: "#c8c87e",
    year: "2025",
  },
  {
    name: "GreekLedger",
    category: "Fintech / AI",
    description:
      "AI budget auditor for fraternities. Ingests bank statements, categorizes expenses, flags anomalies, and generates savings recommendations.",
    color: "#a97ec8",
    year: "2025",
  },
  {
    name: "Tab Commander",
    category: "Dev Tools",
    description:
      "Chrome extension for tab management. Workspaces, auto-suspend, command palette, and keyboard-driven navigation.",
    color: "#7e8ec8",
    metrics: "v1.0 shipped",
    year: "2026",
  },
];

function Card3D({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const brightness = useMotionValue(1);

  const handleMouse = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(((y - centerY) / centerY) * -6);
    rotateY.set(((x - centerX) / centerX) * 6);
    brightness.set(1.05);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    brightness.set(1);
  };

  return (
    <div className="card-3d flex-shrink-0 w-[340px] md:w-[400px]">
      <motion.div
        ref={cardRef}
        className="card-3d-inner gradient-border group relative bg-bg-elevated overflow-hidden h-full rounded-[7px]"
        style={
          {
            rotateX,
            rotateY,
            filter: `brightness(${brightness.get()})`,
            "--card-color": project.color,
          } as React.CSSProperties
        }
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
      >
        {/* Top accent line */}
        <div
          className="h-[2px] w-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
            opacity: 0.5,
          }}
        />

        {/* Number */}
        <div className="absolute top-6 right-6 text-xs font-mono text-text-muted/20">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="p-8 md:p-10 flex flex-col h-full">
          <div className="flex items-center justify-between">
            <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted">
              {project.category}
            </span>
            <span className="text-[10px] font-mono text-text-muted/40">
              {project.year}
            </span>
          </div>

          <h3 className="mt-5 text-2xl md:text-3xl font-light tracking-[-0.02em]">
            {project.name}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-text-muted flex-grow">
            {project.description}
          </p>

          {project.metrics && (
            <div className="mt-5 inline-flex items-center gap-2 text-xs font-mono text-accent/80">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: project.color }}
              />
              {project.metrics}
            </div>
          )}

          <div className="mt-6 flex items-center gap-2 text-xs tracking-widest uppercase text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.url ? "Visit" : "Details"}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${((projects.length - 2) / projects.length) * 100}%`],
  );

  return (
    <section id="work">
      <div className="px-6 md:px-16 lg:px-24 pt-16 pb-8 md:pt-20 md:pb-10">
        <FadeIn>
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-text-muted">
                Selected Work
              </span>
              <h2 className="mt-4 text-[clamp(2rem,5vw,4rem)] font-light tracking-[-0.03em]">
                What I&apos;ve built
              </h2>
            </div>
            <span className="text-xs font-mono text-text-muted/50">
              {projects.length} projects
            </span>
          </div>
        </FadeIn>
      </div>

      {/* Horizontal scroll section */}
      <div ref={containerRef} className="relative h-[200vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            ref={scrollRef}
            className="horizontal-scroll"
            style={{ x }}
          >
            {projects.map((project, i) =>
              project.url ? (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card3D project={project} index={i} />
                </a>
              ) : (
                <Card3D key={project.name} project={project} index={i} />
              ),
            )}
          </motion.div>

          {/* Scroll progress indicator */}
          <div className="absolute bottom-12 left-6 md:left-16 lg:left-24 right-6 md:right-16 lg:right-24">
            <div className="h-px bg-border">
              <motion.div
                className="h-px bg-accent"
                style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
              />
            </div>
            <div className="mt-4 flex justify-between text-[10px] font-mono text-text-muted/40">
              <span>01</span>
              <span>{String(projects.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
