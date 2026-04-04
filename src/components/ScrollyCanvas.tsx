"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import filenames from "./filenames.json";

interface ScrollyCanvasProps {
  onProgress: (progress: number) => void;
  onFinish: () => void;
  onFrameChange: (frame: number) => void;
}

export default function ScrollyCanvas({ onProgress, onFinish, onFrameChange }: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

  // Requirements
  const MIN_FRAMES = 45;
  const totalFrames = filenames.length;
  const progress = (loadedCount / totalFrames) * 100;

  useEffect(() => {
    onProgress(progress);
    if (loadedCount >= MIN_FRAMES && loadedCount >= totalFrames) {
      const timer = setTimeout(() => {
        onFinish();
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [loadedCount, totalFrames, progress, onFinish, onProgress]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

  useEffect(() => {
    let count = 0;

    filenames.forEach((name, index) => {
      const img = new Image();
      img.src = `/sequence/${name}`;
      img.onload = () => {
        count++;
        setLoadedCount(count);

        // Initial frame instant render
        if (index === 0) {
          renderFrame(0);
        }
      };
      imagesRef.current[index] = img;
    });
  }, []);

  const renderFrame = (index: number) => {
    const images = imagesRef.current;
    if (canvasRef.current && images[index]) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (!context) return;

      const img = images[index];

      // Responsive Cover Logic
      const canvasAspectRatio = canvas.width / canvas.height;
      const imgAspectRatio = img.width / img.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasAspectRatio > imgAspectRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgAspectRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgAspectRatio;
        drawHeight = canvas.height;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  };

  // Update canvas on frame index change
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const frame = Math.floor(latest);
    renderFrame(frame);
    onFrameChange(frame);
  });

  // Initial render & resize handling
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        renderFrame(Math.floor(frameIndex.get()));
      }
    };

    // --- SNAP LOGIC (0 -> 43 -> End) ---
    const handleSnap = (e: KeyboardEvent) => {
      const containerTop = containerRef.current?.offsetTop || 0;
      const containerHeight = containerRef.current?.offsetHeight || 0;
      const currentFrame = Math.round(frameIndex.get());
      const scrollRange = containerHeight - window.innerHeight;

      const scrollToFrame = (frame: number) => {
        const targetProgress = frame / (totalFrames - 1);
        const targetY = containerTop + (targetProgress * scrollRange);
        window.scrollTo({
          top: targetY,
          behavior: "smooth"
        });
      };

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        if (currentFrame < 20) { // Near Frame 0
          e.preventDefault();
          scrollToFrame(43);
        } else if (currentFrame >= 20 && currentFrame < 60) { // Near Frame 43
          e.preventDefault();
          scrollToFrame(totalFrames - 1);
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        if (currentFrame > 60) { // Near End
          e.preventDefault();
          scrollToFrame(43);
        } else if (currentFrame <= 60 && currentFrame > 20) { // Near Frame 43
          e.preventDefault();
          scrollToFrame(0);
        }
      }
    };

    window.addEventListener("keydown", handleSnap);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("keydown", handleSnap);
      window.removeEventListener("resize", handleResize);
    };
  }, [loadedCount, totalFrames]);

  // --- FRAME-PERFECT OVERLAY LOGIC ---
  const heroOpacity = useTransform(frameIndex, [0, 8, 12], [1, 0, 0]);

  // Section 2: Peaks perfectly at Frame 43 (Stable peak between 40-47)
  const section2Opacity = useTransform(frameIndex, [0, 32, 40, 47, 58, 75], [0, 0, 1, 1, 0, 0]);

  // Section 3: Peaks at Frame 74/75 (End)
  const section3Opacity = useTransform(frameIndex, [0, 65, 74, 75], [0, 0, 1, 1]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      {/* Sticky Base */}
      <div className="sticky top-0 h-screen w-full overflow-hidden text-white font-sans uppercase tracking-[0.2em]">
        {/* Layer 0: Canvas Rendering */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Layer 50: CONTENT OVERLAY */}
        <div className="pointer-events-none absolute inset-0 z-50 w-full h-full overflow-hidden">

          {/* SECTION 1: LUXURY FASHION EDITORIAL */}
          <motion.div
            style={{ opacity: heroOpacity }}
            className="absolute inset-0 z-50 pointer-events-none select-none"
          >
            {/* Diagonal amber light wash — barely visible, gives depth */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(118deg, transparent 0%, transparent 40%, rgba(217,119,6,0.05) 42%, transparent 44%, transparent 100%)',
              }}
            />

            {/* TOP-LEFT: Pulsing availability dot */}
            <div className="absolute top-10 left-10 md:left-14 flex items-center gap-3 mix-blend-difference">
              <span
                className="block w-2 h-2 rounded-full bg-amber-400"
                style={{ boxShadow: '0 0 10px #f59e0b, 0 0 20px #f59e0b40' }}
              />
              <span className="text-[9px] font-mono tracking-[0.45em] text-white/40 uppercase">
                Open to work
              </span>
            </div>

            {/* TOP-RIGHT: Edition label */}
            <div className="absolute top-10 right-10 md:right-14 text-right mix-blend-difference">
              <p className="text-[9px] font-mono tracking-[0.5em] text-amber-400/70 uppercase mb-1">
                Portfolio — 2026
              </p>
              <p className="text-[9px] font-mono tracking-[0.3em] text-white/20 uppercase">
                Lahore, Pakistan
              </p>
            </div>

            {/* BOTTOM-LEFT: The name — compact, anchored, face-clear */}
            <div className="absolute bottom-10 md:bottom-14 left-8 md:left-14 mix-blend-difference">
              <p className="text-[9px] font-mono tracking-[0.5em] text-amber-400/60 uppercase mb-3 ml-0.5">
                Web Engineer · UI Architect
              </p>
              <h1
                className="f-syne font-black italic tracking-tighter leading-[0.85] text-white"
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)' }}
              >
                Hamza<br />
                <span
                  style={{
                    WebkitTextStroke: '1px rgba(255,255,255,0.25)',
                    color: 'transparent',
                  }}
                >
                  Amin.
                </span>
              </h1>
              <p className="text-[11px] text-zinc-500 font-light mt-3 max-w-[220px] leading-relaxed">
                Interfaces that stop people mid-scroll — then keep them.
              </p>
            </div>

            {/* BOTTOM-RIGHT: Animated "View work" CTA */}
            <div className="absolute bottom-10 md:bottom-14 right-8 md:right-14 flex flex-col items-end gap-5 pointer-events-auto mix-blend-difference">
              <button
                className="group flex items-center gap-4"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <span className="text-[10px] font-mono tracking-[0.45em] uppercase text-white/50 group-hover:text-amber-400 transition-colors duration-400">
                  View my work
                </span>
                <span className="block h-[1px] w-10 bg-white/30 group-hover:w-16 group-hover:bg-amber-400 transition-all duration-500" />
              </button>
              <p className="text-[8px] font-mono tracking-[0.35em] text-white/15 uppercase">
                Scroll to explore
              </p>
            </div>
          </motion.div>

          {/* SECTION 2: SELECTED WORK — LUXURY EDITORIAL */}
          <motion.div
            style={{ opacity: section2Opacity }}
            className="absolute inset-0 z-50 pointer-events-none select-none"
          >
            {/* TOP-RIGHT: Section label */}
            <div className="absolute top-10 right-10 md:right-14 text-right mix-blend-difference">
              <p className="text-[9px] font-mono tracking-[0.5em] text-amber-400/70 uppercase mb-1">
                Chapter 02
              </p>
              <p className="text-[9px] font-mono tracking-[0.3em] text-white/20 uppercase">
                Selected Work
              </p>
            </div>

            {/* LEFT RAIL: Project index — hugs the far left, face is clear */}
            <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-14 flex flex-col gap-8 mix-blend-difference">

              {/* Section intro */}
              <div className="flex flex-col gap-1 mb-4">
                <span className="text-[8px] font-mono tracking-[0.5em] text-amber-400/60 uppercase">
                  Delivered
                </span>
                <h2
                  className="f-syne font-black italic tracking-tighter text-white leading-[0.85]"
                  style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)' }}
                >
                  Work that<br />
                  <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.22)', color: 'transparent' }}>
                    hits.
                  </span>
                </h2>
              </div>

              {/* Project 01 */}
              <div className="flex flex-col gap-1 group cursor-default">
                <div className="flex items-center gap-3">
                  <span className="text-[8px] font-mono text-amber-400/50 tracking-widest">01</span>
                  <div className="h-[1px] w-4 bg-white/10 group-hover:w-8 group-hover:bg-amber-400 transition-all duration-500" />
                </div>
                <p className="text-[9px] font-mono tracking-[0.3em] text-zinc-500 uppercase">
                  E-commerce / Retail
                </p>
                <h3 className="text-sm md:text-base font-semibold text-white tracking-tight">
                  BMW Hoodie Store
                </h3>
              </div>

              {/* Separator */}
              <div className="h-[1px] w-12 bg-white/5" />

              {/* Project 02 */}
              <div className="flex flex-col gap-1 group cursor-default">
                <div className="flex items-center gap-3">
                  <span className="text-[8px] font-mono text-amber-400/50 tracking-widest">02</span>
                  <div className="h-[1px] w-4 bg-white/10 group-hover:w-8 group-hover:bg-amber-400 transition-all duration-500" />
                </div>
                <p className="text-[9px] font-mono tracking-[0.3em] text-zinc-500 uppercase">
                  Marketplace / Dynamic
                </p>
                <h3 className="text-sm md:text-base font-semibold text-white tracking-tight">
                  Sneaker Marketplace
                </h3>
              </div>

              {/* Bottom tag */}
              <div className="mt-2 flex items-center gap-3">
                <span className="block w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                <span className="text-[8px] font-mono tracking-[0.4em] text-white/20 uppercase">
                  Next.js · Framer
                </span>
              </div>
            </div>

            {/* RIGHT RAIL: How I work — vertically centered, right edge */}
            <div className="absolute top-1/2 -translate-y-1/2 right-8 md:right-14 flex flex-col gap-7 items-end text-right mix-blend-difference max-w-[260px]">

              <span className="text-[8px] font-mono tracking-[0.5em] text-amber-400/60 uppercase">
                How I work
              </span>

              {/* Quality 01 */}
              <div className="flex flex-col gap-1 items-end">
                <div className="flex items-center gap-3 justify-end">
                  <div className="h-[1px] w-4 bg-white/10" />
                  <span className="text-[8px] font-mono text-amber-400/50 tracking-widest">01</span>
                </div>
                <h3 className="text-sm font-semibold text-white tracking-tight">
                  Delivered Fast
                </h3>
                <p className="text-[10px] font-mono text-zinc-500 tracking-wide leading-relaxed">
                  Tight deadlines don't scare me.<br />
                  Speed without cutting corners.
                </p>
              </div>

              <div className="h-[1px] w-10 bg-white/5 self-end" />

              {/* Quality 02 */}
              <div className="flex flex-col gap-1 items-end">
                <div className="flex items-center gap-3 justify-end">
                  <div className="h-[1px] w-4 bg-white/10" />
                  <span className="text-[8px] font-mono text-amber-400/50 tracking-widest">02</span>
                </div>
                <h3 className="text-sm font-semibold text-white tracking-tight">
                  Pixel Perfect
                </h3>
                <p className="text-[10px] font-mono text-zinc-500 tracking-wide leading-relaxed">
                  Every detail at 1:1 with the design.<br />
                  Zero tolerance for slop.
                </p>
              </div>

              <div className="h-[1px] w-10 bg-white/5 self-end" />

              {/* Quality 03 */}
              <div className="flex flex-col gap-1 items-end">
                <div className="flex items-center gap-3 justify-end">
                  <div className="h-[1px] w-4 bg-white/10" />
                  <span className="text-[8px] font-mono text-amber-400/50 tracking-widest">03</span>
                </div>
                <h3 className="text-sm font-semibold text-white tracking-tight">
                  Blazing Performance
                </h3>
                <p className="text-[10px] font-mono text-zinc-500 tracking-wide leading-relaxed">
                  Optimized to the bone.<br />
                  Fast load, smooth scroll, zero lag.
                </p>
              </div>

              <div className="h-[1px] w-10 bg-white/5 self-end" />

              {/* Quality 04 */}
              <div className="flex flex-col gap-1 items-end">
                <div className="flex items-center gap-3 justify-end">
                  <div className="h-[1px] w-4 bg-white/10" />
                  <span className="text-[8px] font-mono text-amber-400/50 tracking-widest">04</span>
                </div>
                <h3 className="text-sm font-semibold text-white tracking-tight">
                  Clean Code
                </h3>
                <p className="text-[10px] font-mono text-zinc-500 tracking-wide leading-relaxed">
                  Scalable, readable, maintainable.<br />
                  Built to last beyond launch.
                </p>
              </div>

            </div>
          </motion.div>

          {/* SECTION 3: CLIENT DIALOGUE — LUXURY EDITORIAL */}
          <motion.div
            style={{ opacity: section3Opacity }}
            className="absolute inset-0 z-50 pointer-events-none select-none"
          >
            {/* BOTTOM-LEFT: Section context */}
            <div className="absolute bottom-10 md:bottom-14 left-8 md:left-14 mix-blend-difference">
              <p className="text-[8px] font-mono tracking-[0.5em] text-amber-400/50 uppercase mb-2">
                Chapter 03
              </p>
              <p className="text-[9px] font-mono tracking-[0.3em] text-white/15 uppercase">
                The Dialogue
              </p>
            </div>

            {/* RIGHT SIDE: Client Q&A — face is center-left, right is open void */}
            <div className="absolute top-1/2 -translate-y-1/2 right-8 md:right-14 flex flex-col gap-10 items-end text-right mix-blend-difference max-w-[360px]">

              {/* Dialogue Header */}
              <div className="flex flex-col gap-1 items-end mb-4">
                <span className="text-[8px] font-mono tracking-[0.5em] text-amber-400/60 uppercase">
                  Common Inquiry
                </span>
                <h2
                  className="f-syne font-black italic tracking-tighter text-white leading-[0.85] text-right"
                  style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}
                >
                  Ask the<br />
                  <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.22)', color: 'transparent' }}>
                    architect.
                  </span>
                </h2>
              </div>

              {/* Q&A 01 */}
              <div className="flex flex-col gap-3 items-end group">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-bold text-white italic f-syne">Why choose your execution over others?</span>
                  <span className="text-[8px] font-mono text-amber-400/50 tracking-widest px-2 py-0.5 border border-white/10 rounded-full">Q1</span>
                </div>
                <p className="text-[10px] md:text-[11px] font-mono text-zinc-400 tracking-wide leading-relaxed pl-12">
                  I eliminate the friction between design and reality. While others compromise, I ship refined digital monuments that define industry standards.
                </p>
              </div>

              {/* Q&A 02 */}
              <div className="flex flex-col gap-3 items-end group">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-bold text-white italic f-syne">How fast can we scale from concept to launch?</span>
                  <span className="text-[8px] font-mono text-amber-400/50 tracking-widest px-2 py-0.5 border border-white/10 rounded-full">Q2</span>
                </div>
                <p className="text-[10px] md:text-[11px] font-mono text-zinc-400 tracking-wide leading-relaxed pl-12">
                  Velocity is core to my protocol. I utilize high performance architectures to build scalable ecosystems in fractions of the traditional timeline.
                </p>
              </div>

              {/* Q&A 03 */}
              <div className="flex flex-col gap-3 items-end group">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-bold text-white italic f-syne">What defines the quality of your build?</span>
                  <span className="text-[8px] font-mono text-amber-400/50 tracking-widest px-2 py-0.5 border border-white/10 rounded-full">Q3</span>
                </div>
                <p className="text-[10px] md:text-[11px] font-mono text-zinc-400 tracking-wide leading-relaxed pl-12">
                  Obsessive precision in every line of code. My websites are optimized for extreme load speeds and buttery smooth interactions with zero visual lag.
                </p>
              </div>

              {/* Final Power Line */}
              <div className="pt-6 border-t border-white/5 w-24 flex flex-col items-end gap-2">
                <span className="text-[7px] font-mono tracking-[0.4em] text-white/20 uppercase">End Dialogue</span>
                <div className="h-[1px] w-full bg-amber-400/30" />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
