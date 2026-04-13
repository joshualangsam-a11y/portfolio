"use client";

import { useState, useCallback } from "react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import AgentShowcase from "@/components/AgentShowcase";
import Contact from "@/components/Contact";
import SocialProof from "@/components/SocialProof";
import CaseStudies from "@/components/CaseStudies";
import CursorGlow from "@/components/CursorGlow";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handleComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Loader onComplete={handleComplete} />
      <main
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.5s ease" }}
      >
        <SmoothScroll />
        <CursorGlow />
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <CaseStudies />
        <SocialProof />
        <AgentShowcase />
        <Contact />
      </main>
    </>
  );
}
