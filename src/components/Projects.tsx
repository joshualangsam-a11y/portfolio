"use client";

import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, MouseEvent } from "react";
import FadeIn from "./FadeIn";

type Project = {
  name: string;
  category: string;
  tags: string[];
  description: string;
  color: string;
  url?: string;
  metrics?: string;
  year: string;
};

const filters = ["All", "AI", "SaaS", "Dev Tools", "Sales"];

const projects: Project[] = [
  {
    name: "Litigation Juris",
    category: "Legal Tech / AI",
    tags: ["AI"],
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
    tags: ["AI"],
    description:
      "47-agent system orchestrating sales, enrichment, outreach, deploys, and content across 15 products. One master routes to named specialists in parallel.",
    color: "#8ec87e",
    metrics: "47 agents, 15 products",
    year: "2025",
  },
  {
    name: "Cortex",
    category: "Dev Tools / Elixir",
    tags: ["Dev Tools"],
    description:
      "Terminal orchestrator in Elixir. Manages 8-9 concurrent PTY sessions with intelligent routing, process supervision, and real-time multiplexing.",
    color: "#e07e5a",
    metrics: "8 concurrent PTYs",
    year: "2026",
  },
  {
    name: "FuelOps",
    category: "SaaS / Operations",
    tags: ["SaaS"],
    description:
      "Gas station management platform. Daily fuel reconciliation, cash variance tracking, and c-store inventory for multi-location operators.",
    color: "#7eb8c8",
    metrics: "$400/mo SaaS",
    year: "2025",
  },
  {
    name: "VapeOps",
    category: "SaaS / Retail",
    tags: ["SaaS"],
    description:
      "Vape shop management SaaS. Inventory tracking, compliance monitoring, and POS integration for independent retailers.",
    color: "#c87ea9",
    metrics: "$299/mo SaaS",
    year: "2025",
  },
  {
    name: "Hemp Route CRM",
    category: "Sales / CRM",
    tags: ["Sales"],
    description:
      "Route management and CRM for wholesale hemp distribution. Commission tracking, visit logging, prospect pipeline for 500-account target.",
    color: "#7ec88a",
    metrics: "180 accounts",
    year: "2026",
  },
  {
    name: "SiteScout",
    category: "Elixir / Prospecting",
    tags: ["Dev Tools", "Sales"],
    description:
      "Automated website prospecting tool built in Elixir. Scans local businesses, audits site quality, scores leads, and generates outreach.",
    color: "#c8b87e",
    metrics: "Elixir + LiveView",
    year: "2026",
  },
  {
    name: "Servicewright",
    category: "SaaS / Home Services",
    tags: ["SaaS"],
    description:
      "AI-powered platform for Florida home service businesses. Client onboarding, engagement tracking, and marketplace matching for snowbird property care.",
    color: "#7e9ec8",
    metrics: "FL market focus",
    year: "2026",
  },
  {
    name: "AlphaSwarm",
    category: "AI / Finance",
    tags: ["AI"],
    description:
      "Multi-agent AI trading system in Elixir. Eight GenServer agents analyze markets, manage risk, and execute trades through broker APIs.",
    color: "#7ec88a",
    metrics: "8 GenServer agents",
    year: "2025",
  },
  {
    name: "StreamSnip",
    category: "AI / Video",
    tags: ["AI"],
    description:
      "Paste a YouTube URL. AI detects viral moments, cuts vertical clips with burned-in captions. FastAPI + Vite, deployed on Railway.",
    color: "#c87ea9",
    year: "2025",
  },
  {
    name: "FanForge",
    category: "SaaS / Music",
    tags: ["SaaS", "AI"],
    description:
      "AI music marketing platform. Artists connect TikTok, Instagram, YouTube, and X. Generates content strategies and schedules posts.",
    color: "#c87e7e",
    metrics: "Active users",
    year: "2025",
  },
  {
    name: "VerdictAds",
    category: "AI / Marketing",
    tags: ["AI"],
    description:
      "AI ad generation for PI law firms. Campaign creatives, copy, and video ads with Remotion rendering, tailored to personal injury verticals.",
    color: "#c8c87e",
    year: "2025",
  },
  {
    name: "GreekLedger",
    category: "Fintech / AI",
    tags: ["AI"],
    description:
      "AI budget auditor for fraternities. Ingests bank statements, categorizes expenses, flags anomalies, and generates savings recommendations.",
    color: "#a97ec8",
    year: "2025",
  },
  {
    name: "Tab Commander",
    category: "Dev Tools",
    tags: ["Dev Tools"],
    description:
      "Chrome extension for tab management. Workspaces, auto-suspend, command palette, and keyboard-driven navigation.",
    color: "#7e8ec8",
    metrics: "v1.0 shipped",
    year: "2026",
  },
];

function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);
  return isTouch;
}

function Card3D({ project, index, disableTilt }: { project: Project; index: number; disableTilt: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const brightness = useMotionValue(1);

  const handleMouse = (e: MouseEvent) => {
    if (disableTilt || !cardRef.current) return;
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
            rotateX: disableTilt ? 0 : rotateX,
            rotateY: disableTilt ? 0 : rotateY,
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

          {project.url && (
            <div className="mt-6 flex items-center gap-2 text-xs tracking-widest uppercase text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Visit
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
          )}
        </div>
      </motion.div>
    </div>
  );
}

function CardWrapper({
  project,
  index,
  isDragging,
  disableTilt,
}: {
  project: Project;
  index: number;
  isDragging: boolean;
  disableTilt: boolean;
}) {
  const clickStartX = useRef(0);

  const handleClick = (e: React.MouseEvent) => {
    if (Math.abs(e.clientX - clickStartX.current) > 5) {
      e.preventDefault();
      return;
    }
    if (project.url) {
      window.open(project.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseDown={(e) => {
        clickStartX.current = e.clientX;
      }}
      onClick={handleClick}
      style={{ cursor: project.url ? "pointer" : "default" }}
    >
      <Card3D project={project} index={index} disableTilt={disableTilt} />
    </motion.div>
  );
}

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const dragStartX = useRef(0);
  const scrollStart = useRef(0);
  const isTouch = useIsTouchDevice();

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll > 0) {
        setProgress(track.scrollLeft / maxScroll);
      }
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  // Reset scroll when filter changes
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.scrollLeft = 0;
      setProgress(0);
    }
  }, [activeFilter]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isTouch) return; // Let native touch scroll handle it
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(true);
    dragStartX.current = e.clientX;
    scrollStart.current = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !trackRef.current) return;
    const dx = e.clientX - dragStartX.current;
    trackRef.current.scrollLeft = scrollStart.current - dx;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const scrollBy = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = 424;
    track.scrollTo({
      left: track.scrollLeft + direction * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="work">
      <div className="px-6 md:px-16 lg:px-24 pt-16 pb-8 md:pt-20 md:pb-10">
        <FadeIn>
          <div className="mx-auto w-full max-w-[1200px] flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-text-muted">
                Selected Work
              </span>
              <h2 className="mt-4 text-[clamp(2rem,5vw,4rem)] font-light tracking-[-0.03em]">
                What I&apos;ve built
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-text-muted/50 mr-4">
                {filtered.length} projects
              </span>
              <button
                onClick={() => scrollBy(-1)}
                className="hidden md:flex w-10 h-10 rounded-[7px] border border-border items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-colors"
                aria-label="Previous project"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
              <button
                onClick={() => scrollBy(1)}
                className="hidden md:flex w-10 h-10 rounded-[7px] border border-border items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-colors"
                aria-label="Next project"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn delay={0.1}>
          <div className="mx-auto w-full max-w-[1200px] mt-8 flex gap-2 overflow-x-auto">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 text-xs tracking-widest uppercase rounded-[7px] border transition-all duration-300 whitespace-nowrap ${
                  activeFilter === f
                    ? "border-accent/40 text-accent bg-accent/5"
                    : "border-border text-text-muted hover:border-accent/20 hover:text-text"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Horizontal scroll track */}
      <div className="relative">
        <div
          ref={trackRef}
          className="overflow-x-auto"
          style={{
            cursor: isTouch ? "auto" : isDragging ? "grabbing" : "grab",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div className="horizontal-scroll">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <CardWrapper
                  key={project.name}
                  project={project}
                  index={i}
                  isDragging={isDragging}
                  disableTilt={isTouch}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Scroll progress indicator */}
        <div className="mt-8 mb-16 px-6 md:px-16 lg:px-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="h-px bg-border">
              <motion.div
                className="h-px bg-accent"
                style={{ scaleX: progress, transformOrigin: "left" }}
              />
            </div>
            <div className="mt-4 flex justify-between text-[10px] font-mono text-text-muted/40">
              <span>{isTouch ? "Swipe to explore" : "Drag or scroll to explore"}</span>
              <span>
                {String(Math.min(Math.round(progress * (filtered.length - 1)) + 1, filtered.length)).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
