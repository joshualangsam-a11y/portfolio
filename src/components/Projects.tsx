"use client";

import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, MouseEvent } from "react";
import FadeIn from "./FadeIn";
import GradientOrb from "./GradientOrb";

type Project = {
  name: string;
  category: string;
  tags: string[];
  description: string;
  color: string;
  gradient: string;
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
    gradient: "linear-gradient(135deg, #1a1510 0%, #2a1f14 50%, #1a1510 100%)",
    url: "https://app.roanco.law",
    metrics: "469 tests passing",
    year: "2025",
  },
  {
    name: "Agent Command Center",
    category: "AI / Orchestration",
    tags: ["AI"],
    description:
      "47-agent system orchestrating sales, enrichment, outreach, deploys, and content across 15 products.",
    color: "#8ec87e",
    gradient: "linear-gradient(135deg, #0d1a10 0%, #142a14 50%, #0d1a10 100%)",
    metrics: "47 agents, 15 products",
    year: "2025",
  },
  {
    name: "Cortex",
    category: "Dev Tools / Elixir",
    tags: ["Dev Tools"],
    description:
      "Terminal orchestrator in Elixir. 8-9 concurrent PTY sessions with intelligent routing and process supervision.",
    color: "#e07e5a",
    gradient: "linear-gradient(135deg, #1a100d 0%, #2a1510 50%, #1a100d 100%)",
    metrics: "8 concurrent PTYs",
    year: "2026",
  },
  {
    name: "FuelOps",
    category: "SaaS / Operations",
    tags: ["SaaS"],
    description:
      "Gas station management platform. Daily fuel reconciliation, cash variance tracking, c-store inventory.",
    color: "#7eb8c8",
    gradient: "linear-gradient(135deg, #0d151a 0%, #10202a 50%, #0d151a 100%)",
    metrics: "Multi-location SaaS",
    year: "2025",
  },
  {
    name: "VapeOps",
    category: "SaaS / Retail",
    tags: ["SaaS"],
    description:
      "Vape shop management SaaS. Inventory tracking, compliance monitoring, POS integration.",
    color: "#c87ea9",
    gradient: "linear-gradient(135deg, #1a0d15 0%, #2a1020 50%, #1a0d15 100%)",
    metrics: "Retail SaaS",
    year: "2025",
  },
  {
    name: "Hemp Route CRM",
    category: "Sales / CRM",
    tags: ["Sales"],
    description:
      "Route management and CRM for wholesale hemp distribution. Commission tracking, visit logging, prospect pipeline.",
    color: "#7ec88a",
    gradient: "linear-gradient(135deg, #0d1a12 0%, #0f2a18 50%, #0d1a12 100%)",
    metrics: "180+ accounts",
    year: "2026",
  },
  {
    name: "SiteScout",
    category: "Elixir / Prospecting",
    tags: ["Dev Tools", "Sales"],
    description:
      "Automated website prospecting tool. Scans businesses, audits site quality, scores leads, generates outreach.",
    color: "#c8b87e",
    gradient: "linear-gradient(135deg, #1a1810 0%, #2a2414 50%, #1a1810 100%)",
    metrics: "Elixir + LiveView",
    year: "2026",
  },
  {
    name: "Servicewright",
    category: "SaaS / Home Services",
    tags: ["SaaS"],
    description:
      "AI platform for FL home service businesses. Client onboarding, engagement tracking, marketplace matching.",
    color: "#7e9ec8",
    gradient: "linear-gradient(135deg, #0d121a 0%, #101e2a 50%, #0d121a 100%)",
    metrics: "FL market focus",
    year: "2026",
  },
  {
    name: "AlphaSwarm",
    category: "AI / Finance",
    tags: ["AI"],
    description:
      "Multi-agent AI trading system in Elixir. Eight GenServer agents analyze markets, manage risk, execute trades.",
    color: "#7ec88a",
    gradient: "linear-gradient(135deg, #0d1a12 0%, #0f2a18 50%, #0d1a12 100%)",
    metrics: "8 GenServer agents",
    year: "2025",
  },
  {
    name: "StreamSnip",
    category: "AI / Video",
    tags: ["AI"],
    description:
      "Paste a YouTube URL. AI detects viral moments, cuts vertical clips with burned-in captions.",
    color: "#c87ea9",
    gradient: "linear-gradient(135deg, #1a0d15 0%, #2a1020 50%, #1a0d15 100%)",
    year: "2025",
  },
  {
    name: "FanForge",
    category: "SaaS / Music",
    tags: ["SaaS", "AI"],
    description:
      "AI music marketing platform. Artists connect social accounts, generate content strategies, schedule posts.",
    color: "#c87e7e",
    gradient: "linear-gradient(135deg, #1a0d0d 0%, #2a1414 50%, #1a0d0d 100%)",
    metrics: "Active users",
    year: "2025",
  },
  {
    name: "VerdictAds",
    category: "AI / Marketing",
    tags: ["AI"],
    description:
      "AI ad generation for PI law firms. Campaign creatives, copy, and video ads with Remotion rendering.",
    color: "#c8c87e",
    gradient: "linear-gradient(135deg, #1a1a0d 0%, #2a2a14 50%, #1a1a0d 100%)",
    year: "2025",
  },
  {
    name: "GreekLedger",
    category: "Fintech / AI",
    tags: ["AI"],
    description:
      "AI budget auditor for fraternities. Ingests bank statements, categorizes expenses, flags anomalies.",
    color: "#a97ec8",
    gradient: "linear-gradient(135deg, #150d1a 0%, #201020 50%, #150d1a 100%)",
    year: "2025",
  },
  {
    name: "Tab Commander",
    category: "Dev Tools",
    tags: ["Dev Tools"],
    description:
      "Chrome extension for tab management. Workspaces, auto-suspend, command palette, keyboard-driven nav.",
    color: "#7e8ec8",
    gradient: "linear-gradient(135deg, #0d101a 0%, #10182a 50%, #0d101a 100%)",
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

function CardMockup({ project }: { project: Project }) {
  return (
    <div
      className="aspect-[16/9] rounded-t-[7px] overflow-hidden relative"
      style={{ background: project.gradient }}
    >
      {/* Abstract app mockup */}
      <div className="absolute inset-0 p-4 flex gap-3">
        {/* Sidebar hint */}
        <div className="w-1/5 flex flex-col gap-1.5">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-1 rounded-full"
              style={{
                width: `${50 + Math.random() * 50}%`,
                background: i === 0 ? `${project.color}35` : "rgba(255,255,255,0.03)",
              }}
            />
          ))}
        </div>
        {/* Content hint */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-1.5 w-2/5 rounded-full" style={{ background: `${project.color}25` }} />
          <div className="flex-1 grid grid-cols-2 gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="rounded-md"
                style={{ background: i === 0 ? `${project.color}10` : "rgba(255,255,255,0.015)" }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Glow overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${project.color}10 0%, transparent 70%)`,
        }}
      />
    </div>
  );
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
        {/* Visual mockup preview */}
        <CardMockup project={project} />

        {/* Number */}
        <div className="absolute top-3 right-3 z-10 text-xs font-mono text-white/10">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="p-6 md:p-8 flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-[10px] tracking-[0.2em] uppercase text-text-muted">
              {project.category}
            </span>
            <span className="text-[10px] font-mono text-text-muted/40">
              {project.year}
            </span>
          </div>

          <h3 className="mt-4 text-xl md:text-2xl font-light tracking-[-0.02em]">
            {project.name}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-text-muted flex-grow">
            {project.description}
          </p>

          {project.metrics && (
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-accent/80">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: project.color }}
              />
              {project.metrics}
            </div>
          )}

          {project.url && (
            <div className="mt-4 flex items-center gap-2 text-xs tracking-widest uppercase text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.scrollLeft = 0;
      setProgress(0);
    }
  }, [activeFilter]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isTouch) return;
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
    <section id="work" className="relative overflow-hidden">
      <GradientOrb color="#c8a97e" size={400} top="20%" left="-5%" delay={2} />

      <div className="relative z-10 px-6 md:px-16 lg:px-24 pt-16 pb-8 md:pt-20 md:pb-10">
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
      <div className="relative z-10">
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

        {/* Scroll progress */}
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
