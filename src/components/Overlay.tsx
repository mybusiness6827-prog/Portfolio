"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });

  // Fade out animations
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const section2Opacity = useTransform(scrollYProgress, [0.4, 0.57, 0.75], [0, 1, 0]);
  const section3Opacity = useTransform(scrollYProgress, [0.8, 0.98, 1], [0, 1, 1]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 w-full overflow-hidden text-white font-montserrat uppercase tracking-tight">
      {/* 
        HERO: 4-CORNER GRID SYSTEM
        Completely clears the center 50% of the screen horizontally.
      */}
      <motion.section
        style={{ opacity: heroOpacity }}
        className="sticky top-0 h-screen w-full p-8 md:p-16 flex flex-col justify-between"
      >
        {/* TOP REGION */}
        <div className="flex w-full justify-between items-start pt-4">
          {/* TOP Left: Title/ID */}
          <div className="flex flex-col gap-1 border-l border-white/30 pl-4 w-1/4">
            <span className="text-[10px] tracking-[0.4em] font-bold text-blue-500 uppercase">Hamza Amin</span>
            <span className="text-xs font-medium text-zinc-500 uppercase">AI & Web Developer</span>
          </div>

          {/* Top Right: Availability */}
          <div className="flex flex-col items-end gap-1 w-1/4">
            <span className="text-[10px] tracking-[0.4em] font-bold text-zinc-500">Availability</span>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-blue-400">Open for Projects</span>
            </div>
          </div>
        </div>

        {/* BOTTOM REGION */}
        <div className="flex w-full justify-between items-end pb-4 overflow-hidden">
          {/* Bottom Left: Impact Statement */}
          <div className="w-[30%]">
            <p className="text-[10px] md:text-sm leading-relaxed text-zinc-400 font-light border-b border-blue-500/30 pb-4 max-w-[280px]">
              Powering digital ecosystems with <span className="text-white font-bold italic">Intelligent Agents</span> and scalable web solutions.
            </p>
          </div>

          {/* Bottom Right: THE NAME */}
          <div className="flex flex-col items-end justify-end text-right w-[40%]">
            <span className="text-[10px] tracking-[0.5em] font-bold text-zinc-500 mb-2">Developed by</span>
            <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.8] mb-4">
              Hamza <br />
              <span className="text-blue-500 not-italic">Amin.</span>
            </h1>
            <span className="text-[10px] tracking-[0.2em] font-medium text-zinc-500">PAK / CHK © 2026</span>
          </div>
        </div>
      </motion.section>

      {/* --- SECTION 2: CLEAN MINIMALIST STATEMENT (SIDES) --- */}
      <section className="sticky top-0 flex h-screen items-center justify-between p-10 md:p-24 overflow-hidden">
        <motion.div
          style={{ opacity: section2Opacity }}
          className="w-1/3"
        >
          <span className="text-xs text-orange-500 font-bold mb-4 block underline decoration-white/20 underline-offset-8 italic">Visionary Approach</span>
          <h2 className="text-3xl md:text-6xl font-black leading-none">
            Architecture <br />Is Performance.
          </h2>
        </motion.div>

        <motion.div
          style={{ opacity: section2Opacity }}
          className="w-1/3 text-right"
        >
          <p className="text-sm font-medium text-zinc-500 tracking-widest uppercase">
            Crafting Seamless <br />Digital Journeys.
          </p>
        </motion.div>
      </section>

      {/* --- SECTION 3: THE FOCUS (BOTTOM CORNER) --- */}
      <section className="sticky top-0 flex h-screen items-end justify-end p-10 md:p-24">
        <motion.div
          style={{ opacity: section3Opacity }}
          className="max-w-2xl text-right p-8 bg-black/40 backdrop-blur-xl border-r-2 border-blue-500"
        >
          <h3 className="text-[10px] uppercase tracking-[0.8em] font-bold text-zinc-500 mb-6 italic">Excellence Statement</h3>
          <p className="text-xl md:text-4xl font-light tracking-tight text-white leading-tight italic">
            “Blending <span className="font-extrabold not-italic text-blue-400">Creative Intuition</span> <br />
            with <span className="text-zinc-600 font-bold">Technical Precision</span>.”
          </p>
        </motion.div>
      </section>
    </div>
  );
}
