"use client";

import { useEffect, useState } from "react";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";

interface ScrollIndicatorProps {
  frame: number;
}

export default function ScrollIndicator({ frame }: ScrollIndicatorProps) {
  const [scrollY, setScrollY] = useState(0);
  const { scrollY: framerScrollY } = useScroll();

  // VARIABLES: Set to true to show
  const showIndicator = false;
  const showFrame = false;

  useMotionValueEvent(framerScrollY, "change", (latest) => {
    setScrollY(Math.round(latest));
  });

  if (!showIndicator) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-10 right-10 z-[100] flex flex-col items-end pointer-events-none"
    >
      <div className="bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-3">
        <div className="flex flex-col">
          <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-blue-400">Position</span>
          <span className="text-sm font-mono font-bold text-white leading-none">
            {scrollY}<span className="text-[10px] text-zinc-500 ml-1">PX</span>
          </span>
        </div>

        {showFrame && (
          <>
            <div className="h-8 w-[1px] bg-white/10 mx-2" />
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-emerald-400">Current Frame</span>
              <span className="text-sm font-mono font-bold text-white leading-none">
                {frame}
              </span>
            </div>
          </>
        )}

        {/* Dynamic Indicator Dot */}
        <div className="h-8 w-[1px] bg-white/10 mx-2" />

        <div className="flex flex-col items-center">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
}
