"use client";

const items = [
  "Legal Tech",
  "AI Agents",
  "Multi-Agent Systems",
  "Full-Stack",
  "SaaS",
  "Elixir",
  "Claude API",
  "Automation",
  "Phoenix",
  "Orchestration",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-border py-6 md:py-8">
      <div className="marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-6 md:mx-8 text-[clamp(1.5rem,4vw,4rem)] font-light tracking-[-0.02em] text-text-muted/15 select-none"
          >
            {item}
            <span className="ml-6 md:ml-8 text-accent/20">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}
