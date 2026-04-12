"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const CAREER_LOG = [
  {
    role: "Lead Web Developer",
    period: "2024 — 2026",
    type: "Freelance & Client Works",
    duration: "2 Years Experience",
    details: "I have spent two years building fast, high-quality websites for many different clients. My work includes 3D designs, private projects, and full website setups that focus on speed and clear visual design.",
    color: "bg-[#121212]"
  },
  {
    role: "AI Agent Architect",
    period: "2025 — 2026",
    type: "Freelance & Logic Design",
    duration: "6 Months Experience",
    details: "Developing smart AI agents using n8n and advanced logic flows. I focus on making agents that talk, think, and help automate complex business tasks for private and freelance projects.",
    color: "bg-[#0d0d0d]"
  },
  {
    role: "Automation Specialist",
    period: "2025 — 2026",
    type: "Bot Systems & APIs",
    duration: "1 Year Experience",
    details: "I design and write custom scripts to connect different apps through APIs. I have built many automated bots that handle repetitive tasks and manage data flows without human help.",
    color: "bg-[#0f0f0f]"
  },
  {
    role: "Technical Operator",
    period: "2023 — 2026",
    type: "System Management",
    duration: "3 Years Experience",
    details: "Working as a professional computer operator with a focus on system management and high-speed data control. I maintain technical infrastructure with absolute precision and care.",
    color: "bg-[#0a0a0a]"
  },
  {
    role: "Digital Strategist",
    period: "2024 — 2026",
    type: "Social Media Handling",
    duration: "1.5 Years Experience",
    details: "Managing social media platforms and digital brand presence. I handle content flows, audience engagement, and overall strategy to grow digital reach across different social systems.",
    color: "bg-[#080808]"
  }
];

interface CardProps {
  item: typeof CAREER_LOG[0];
  i: number;
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>;
}

function Card({ item, i, range, targetScale, progress }: CardProps) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-[10vh] md:top-[15vh] flex items-center justify-center h-[75vh] md:h-[70vh]">
      <motion.div
        style={{ scale, top: `calc(-10% + ${i * 20}px)` }}
        className={`relative w-full max-w-[1000px] h-auto min-h-[400px] md:h-[500px] overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/10 ${item.color} p-6 md:p-16 flex flex-col justify-between shadow-2xl backdrop-blur-3xl`}
      >
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-amber-500/50" />
              <span className="text-amber-500 font-mono text-[10px] tracking-[0.5em] uppercase italic">Protocol 0{i + 1}</span>
            </div>
            <h4 className="text-2xl md:text-5xl font-black text-white tracking-tighter f-syne italic leading-none">
              {item.role}
            </h4>
            <span className="text-[11px] font-mono text-zinc-500 tracking-[0.4em] uppercase block">
              {item.type}
            </span>
          </div>

          <div className="text-left md:text-right space-y-1">
            <span className="text-[10px] font-mono text-zinc-500 tracking-[0.3em] uppercase italic block">{item.period}</span>
            <span className="text-white font-bold f-syne italic text-lg md:text-3xl whitespace-nowrap">{item.duration}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-12">
            <p className="text-zinc-400 text-sm md:text-xl leading-relaxed italic font-light">
              {item.details}
            </p>
          </div>
        </div>

        {/* Ambient Corner Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[60px] pointer-events-none rounded-full" />
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={container} className="bg-black pt-40 relative">
      <div className="max-w-7xl mx-auto px-2 md:px-6 relative z-10 mb-20">

        {/* SYMMETRICAL HEADER */}
        <div className="flex flex-col items-center text-center space-y-6 mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="h-[1px] w-8 bg-amber-500/50" />
            <span className="text-amber-500 font-mono text-[10px] tracking-[0.8em] uppercase italic">Career Trajectory</span>
            <div className="h-[1px] w-8 bg-amber-500/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            viewport={{ once: true }}
            className="text-white f-syne font-black italic tracking-tighter leading-none"
            style={{ fontSize: 'clamp(2.2rem, 12vw, 8.5rem)' }}
          >
            Journey.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-white font-mono text-[8px] md:text-[10px] tracking-[0.3em] uppercase max-w-xl leading-relaxed px-4"
          >
            A high performance timeline of technical mastery across the digital frontier.
          </motion.p>
        </div>

        {/* STICKY STACKING CARDS */}
        <div className="relative pb-[20vh]">
          {CAREER_LOG.map((item, i) => {
            const targetScale = 1 - ((CAREER_LOG.length - i) * 0.05);
            return (
              <Card
                key={i}
                i={i}
                item={item}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
