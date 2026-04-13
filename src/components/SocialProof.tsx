"use client";

import { useRef } from "react";
import FadeIn from "./FadeIn";

// TODO: Replace these placeholder quotes with real testimonials
const testimonials = [
  {
    quote:
      "Josh built our entire case management platform from scratch. The AI document analysis alone saved us hours per case.",
    name: "Kyle Soch",
    role: "Attorney",
    company: "BillBone Law",
    color: "#c8a97e",
  },
  {
    quote:
      "He took our distribution tracking from spreadsheets to a real system. Reliable, fast, and he actually understands the business.",
    name: "Ethan Hampton",
    role: "Founder",
    company: "Hampton Reserve",
    color: "#7ec88a",
  },
  {
    quote:
      "Delivered ahead of schedule and went beyond the original scope. Rare to find a developer who thinks about the product, not just the code.",
    name: "Tal",
    role: "Client",
    company: "SushiLab",
    color: "#7eb8c8",
  },
];

function GlowCard({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    ref.current.style.setProperty("--glow-x", `${x}%`);
    ref.current.style.setProperty("--glow-y", `${y}%`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="glow-card border border-border rounded-[9px] p-8 h-full flex flex-col transition-all duration-300 hover:border-border/60"
      style={
        {
          "--glow-color": color,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-border">
      <div className="mx-auto w-full max-w-[1200px]">
        <FadeIn>
          <span className="text-xs tracking-[0.2em] uppercase text-text-muted">
            What people say
          </span>
        </FadeIn>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={0.1 + i * 0.1}>
              <GlowCard color={t.color}>
                {/* Large styled quote mark */}
                <div className="text-5xl font-serif leading-none mb-4" style={{ color: `${t.color}30` }}>
                  &ldquo;
                </div>

                <p className="text-sm leading-relaxed text-text-muted flex-grow">
                  {t.quote}
                </p>

                <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium"
                    style={{
                      background: `${t.color}15`,
                      color: t.color,
                      border: `1px solid ${t.color}30`,
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text">{t.name}</div>
                    <div className="text-xs text-text-muted">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
