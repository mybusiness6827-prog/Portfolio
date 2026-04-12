"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const COMPARISON_DATA = [
  {
    feature: "3D Immersive Website",
    me: true,
    others: false,
    detail: "High quality interactive design."
  },
  {
    feature: "AI Agent Integration",
    me: true,
    others: false,
    detail: "Custom automation for your work."
  },
  {
    feature: "Fast 48h Delivery",
    me: true,
    others: false,
    detail: "Getting your site live quickly."
  },
  {
    feature: "Cheap Prices",
    me: true,
    others: true,
    detail: "Best rates for top quality work."
  },
  {
    feature: "Free Maintenance",
    me: true,
    others: false,
    detail: "Full support after finishing task."
  },
  {
    feature: "Free Domain & Hosting",
    me: true,
    others: false,
    detail: "Ready to use setup included."
  },
  {
    feature: "Top Speed & SEO",
    me: true,
    others: false,
    detail: "Fully optimized for search results."
  },
  {
    feature: "24/7 Priority Support",
    me: true,
    others: false,
    detail: "Direct contact anytime you need."
  }
];

export default function Comparison() {
  return (
    <section className="bg-black pt-32 md:pt-60 pb-20 md:pb-40 px-2 md:px-12 relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-amber-500/[0.03] rounded-full blur-[150px] pointer-events-none translate-x-[-20%] -translate-y-[20%]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* SYMMETRICAL HEADER: High Balance */}
        <div className="mb-32 flex flex-col items-center text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="h-[1px] w-8 bg-amber-500/50" />
            <span className="text-amber-500 font-mono text-[10px] tracking-[0.8em] uppercase italic">Service Comparison</span>
            <div className="h-[1px] w-8 bg-amber-500/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            viewport={{ once: true }}
            className="text-white f-syne font-black italic tracking-tighter leading-none"
            style={{ fontSize: 'clamp(2.5rem, 11vw, 8.5rem)' }}
          >
            Why Me?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-white font-mono text-[8px] md:text-[10px] tracking-[0.3em] uppercase max-w-xl leading-relaxed px-4"
          >
            Why choosing me is the best decision for your business projects.
          </motion.p>
        </div>

        {/* COMPARISON ARCHITECTURE: Professional Table Look */}
        <div className="relative group p-[1px] bg-gradient-to-b from-white/10 to-transparent">
          <div className="bg-[#080808] overflow-hidden rounded-sm">
            {/* Header Row */}
            <div className="grid grid-cols-12 gap-2 p-4 md:p-8 border-b border-white/5 items-center bg-white/[0.02]">
              <div className="col-span-6 md:col-span-8">
                <span className="text-[8px] md:text-[10px] font-mono text-zinc-500 tracking-[0.4em] uppercase">Features</span>
              </div>
              <div className="col-span-3 md:col-span-2 text-center">
                <span className="text-amber-500 font-mono text-[8px] md:text-[10px] tracking-[0.4em] uppercase font-black italic">Me</span>
              </div>
              <div className="col-span-3 md:col-span-2 text-center">
                <span className="text-white/20 font-mono text-[8px] md:text-[10px] tracking-[0.4em] uppercase">Others</span>
              </div>
            </div>

            {/* Data Rows */}
            {COMPARISON_DATA.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-12 gap-2 md:gap-4 p-4 md:p-8 border-b border-white/5 items-center hover:bg-white/[0.01] transition-colors"
              >
                <div className="col-span-6 md:col-span-8 space-y-1">
                  <h4 className="text-white f-syne font-bold italic tracking-tight text-sm md:text-xl">{row.feature}</h4>
                  <p className="text-zinc-600 text-[7px] md:text-[9px] font-mono tracking-widest uppercase italic">{row.detail}</p>
                </div>

                <div className="col-span-3 md:col-span-2 flex justify-center">
                  {row.me ? (
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
                    </div>
                  ) : (
                    <XCircle className="w-4 h-4 md:w-6 md:h-6 text-white/5" />
                  )}
                </div>

                <div className="col-span-3 md:col-span-2 flex justify-center opacity-30 group-hover:opacity-100 transition-opacity">
                  {row.others ? (
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-white/10" />
                  ) : (
                    <XCircle className="w-4 h-4 md:w-5 md:h-5 text-white/10" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
