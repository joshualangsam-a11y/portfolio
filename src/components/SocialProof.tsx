"use client";

import FadeIn from "./FadeIn";

// TODO: Replace these placeholder quotes with real testimonials from each person
const testimonials = [
  {
    quote:
      "Josh built our entire case management platform from scratch. The AI document analysis alone saved us hours per case.",
    name: "Kyle Soch",
    role: "Attorney",
    company: "BillBone Law",
  },
  {
    quote:
      "He took our distribution tracking from spreadsheets to a real system. Reliable, fast, and he actually understands the business.",
    name: "Ethan Hampton",
    role: "Founder",
    company: "Hampton Reserve",
  },
  {
    quote:
      "Delivered ahead of schedule and went beyond the original scope. Rare to find a developer who thinks about the product, not just the code.",
    name: "Tal",
    role: "Client",
    company: "SushiLab",
  },
];

export default function SocialProof() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-border">
      <div className="mx-auto w-full max-w-[1200px]">
        <FadeIn>
          <span className="text-xs tracking-[0.2em] uppercase text-text-muted">
            What people say
          </span>
        </FadeIn>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={0.1 + i * 0.1}>
              <div className="relative border border-border p-8 rounded-[7px] h-full flex flex-col">
                <div className="text-accent/30 text-4xl font-serif leading-none mb-4">
                  &ldquo;
                </div>
                <p className="text-sm leading-relaxed text-text-muted flex-grow">
                  {t.quote}
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="text-sm font-medium text-text">{t.name}</div>
                  <div className="text-xs text-text-muted mt-1">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
