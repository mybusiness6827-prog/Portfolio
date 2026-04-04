"use client";

import { motion } from "framer-motion";

const SKILLS_DATA = [
  {
    category: "WEB DEVELOPMENT",
    id: "01",
    label: "Digital Architecture",
    description: "Creating professional static and modern 3D websites with absolute visual precision.",
    skills: ["HTML5 / CSS3", "Javascript / UI", "Static Layouts", "3D Web Design"],
    progress: 96
  },
  {
    category: "AI AGENT DEV",
    id: "02",
    label: "Autonomous Logic",
    description: "Developing intelligent agents using n8n and advanced agentic workflow protocols.",
    skills: ["n8n Automation", "Agentic Flows", "Logic Design", "Platform Setup"],
    progress: 92
  },
  {
    category: "BOT DEVELOPMENT",
    id: "03",
    label: "System Automation",
    description: "Building automated bots through expert script writing and seamless API connections.",
    skills: ["Script Writing", "API Integration", "Automation Bots", "Data Handling"],
    progress: 94
  },
  {
    category: "OPERATIONS",
    id: "04",
    label: "System Precision",
    description: "Professional computer operations and system management with extreme speed control.",
    skills: ["Operator Master", "System Management", "Data Precision", "Tech Support"],
    progress: 98
  },
  {
    category: "OFFICE PERFORMANCE",
    id: "05",
    label: "Productivity Suite",
    description: "Expert level management of professional documentation and complex data analysis environments.",
    skills: ["MicroSoft Office", "Advanced MS Word", "Excel Analytics", "Workflow Doc"],
    progress: 95
  },
  {
    category: "DIGITAL REACH & DATA",
    id: "06",
    label: "Communications & Data",
    description: "Handling high speed data entry and strategic social media management for brand growth.",
    skills: ["Data Entry 45WPM+", "Social Media Handling", "Content Flow", "Data Control"],
    progress: 90
  }
];

export default function Skills() {
  return (
    <section className="bg-[#080808] pt-60 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Liquid Light — Minimal & Premium */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-amber-500/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION HEADER: Architectural Elegance */}
        <div className="mb-32 flex flex-col items-center text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="h-[1px] w-8 bg-amber-500/50" />
            <span className="text-amber-500 font-mono text-[10px] tracking-[0.8em] uppercase italic">The Technical Deck</span>
            <div className="h-[1px] w-8 bg-amber-500/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            viewport={{ once: true }}
            className="text-white f-syne font-black italic tracking-tighter leading-none"
            style={{ fontSize: 'clamp(3rem, 10vw, 8.5rem)' }}
          >
            Expertise.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-white font-mono text-[10px] tracking-[0.3em] uppercase max-w-lg leading-relaxed"
          >
            Uncompromising standards in engineering and digital design execution.
          </motion.p>
        </div>

        {/* SKILLS GRID: High-End Bento Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-4 md:px-0">
          {SKILLS_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-white/[0.01] border border-white/5 p-12 hover:bg-white/[0.03] transition-all duration-700"
            >
              {/* Card Decoration */}
              <div className="absolute top-0 right-0 p-8 flex flex-col items-end opacity-20 group-hover:opacity-60 transition-all duration-700">
                <span className="text-[10px] font-mono text-white tracking-[0.5em] uppercase mb-1">Mastery</span>
                <span className="text-4xl font-black text-amber-500 f-syne italic leading-none">{item.id}</span>
              </div>

              <div className="flex flex-col h-full justify-between gap-16 relative z-10">
                <div className="space-y-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-amber-500/80 tracking-[0.4em] uppercase">{item.label}</span>
                    <h4 className="text-3xl font-bold text-white tracking-tight f-syne italic">{item.category}</h4>
                  </div>
                  <p className="text-zinc-500 text-sm font-light italic leading-relaxed max-w-[280px]">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Discrete Skill Tags */}
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {item.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-amber-500/40" />
                        <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">{skill}</span>
                      </div>
                    ))}
                  </div>

                  {/* Razor Thin Progress Protocol */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-[9px] font-mono text-white/20 tracking-[0.4em] uppercase">Proficiency</span>
                      <span className="text-[10px] font-mono text-amber-500 italic">{item.progress}%</span>
                    </div>
                    <div className="h-[1px] w-full bg-white/5 relative overflow-hidden">
                      <motion.div
                        className="absolute h-full bg-amber-500/80"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        transition={{ duration: 2, ease: "circOut", delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Edge Gradient Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM METADATA: Final Premium Touch */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="mt-32 pt-10 border-t border-white/5 flex justify-between items-center opacity-30 px-4 md:px-0"
        >
          <span className="text-[8px] font-mono tracking-[0.5em] uppercase">Built for Performance</span>
          <span className="text-[8px] font-mono tracking-[0.5em] uppercase italic underline underline-offset-8">Global Standard 2026</span>
        </motion.div>
      </div>
    </section>
  );
}
