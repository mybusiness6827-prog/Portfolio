"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface LoadingScreenProps {
  progress: number;
  isFinished: boolean;
}

export default function LoadingScreen({ progress, isFinished }: LoadingScreenProps) {
  // Prevent any auto-scroll during loading
  useEffect(() => {
    if (!isFinished) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0); // Lock to top
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFinished]);

  // Engaging phrases to keep the user interested
  const getPhrase = (p: number) => {
    if (p < 25) return "Igniting the Vision";
    if (p < 50) return "Architecture in Progress";
    if (p < 75) return "Syncing Intelligence";
    return "Prepare for Brilliance";
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0a0a0a]"
        >
          {/* Solid Container to ensure NOTHING bleeds through */}
          <div className="absolute inset-0 bg-[#0a0a0a]" />

          <div className="relative z-10 flex flex-col items-center gap-12">
            {/* Minimalist Progress Circle */}
            <div className="relative h-40 w-40 flex items-center justify-center">
              <svg className="h-full w-full -rotate-90 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  className="fill-none stroke-white/5 stroke-[1]"
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  className="fill-none stroke-blue-500 stroke-[2]"
                  strokeDasharray="100 100"
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: 100 - progress }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                  className="text-5xl font-black italic tracking-tighter text-white"
                  key={Math.round(progress)}
                >
                  {Math.round(progress)}<span className="text-2xl text-blue-500 font-bold ml-1">%</span>
                </motion.span>
              </div>
            </div>

            {/* Engaging Minimal Text */}
            <div className="flex flex-col items-center text-center gap-3">
              <motion.p
                key={getPhrase(progress)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-bold uppercase tracking-[0.8em] text-zinc-500"
              >
                {getPhrase(progress)}
              </motion.p>

              <h1 className="text-2xl font-light italic tracking-[0.2em] text-white/80">
                Hamza Amin <span className="text-blue-500 font-bold not-italic">.</span>
              </h1>
            </div>

            {/* Hint Text */}
            <div className="absolute bottom-[-80px] w-64 text-center">
              <p className="text-[9px] font-mono text-zinc-700 uppercase tracking-widest leading-relaxed">
                First time loading may take longer.<br />

              </p>
            </div>
          </div>

          {/* Bottom Visual Element */}
          <div className="absolute bottom-12 w-full flex flex-col items-center">
            <div className="h-[1px] w-12 bg-white/10" />
            <span className="mt-4 text-[8px] tracking-[0.5em] text-zinc-800 font-bold uppercase">2026 Edition</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
