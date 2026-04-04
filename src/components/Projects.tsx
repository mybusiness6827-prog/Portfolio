"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PROJECTS = [
  {
    title: "THE BMW ARCHIVE",
    id: "P.01",
    category: "3D Immersive Apparel",
    description: "A high-end 3D interactive web environment for professional BMW hoodie commerce and digital showcases.",
    image: "https://images.unsplash.com/photo-1614165933396-487603947230?auto=format&fit=crop&q=80&w=1200",
    tech: ["3D Physics", "Immersive UI", "Commerce Logic"]
  },
  {
    title: "KINETIC SNEAKERS",
    id: "P.02",
    category: "Spatial Motion Web",
    description: "Advanced 3D landing page for luxury footwear brands with cinematic product photography and motion physics.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1200",
    tech: ["Web Graphics", "Motion Design", "3D Logic"]
  },
  {
    title: "OMNICORE OS",
    id: "P.03",
    category: "Integrated Commerce",
    description: "Professional full scale store management and commerce ecosystem with advanced analytics and operational control.",
    image: "https://images.unsplash.com/photo-1642132652859-3ef5a1048fd1?auto=format&fit=crop&q=80&w=1200",
    tech: ["System Logic", "Data Analysis", "Commerce OS"]
  },
  {
    title: "SYNERGY AI",
    id: "P.04",
    category: "Agentic Logic Hub",
    description: "Developing autonomous intelligence flows and n8n agentic protocols for complex business process scaling.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    tech: ["n8n Protocols", "AI Logic", "Automation"]
  },
  {
    title: "AUTOMATON V1",
    id: "P.05",
    category: "Custom Bot Registry",
    description: "Professional API based automation bot scripting and high speed integration protocols for digital operations.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    tech: ["API Mastery", "Scripting", "Bot Systems"]
  },
  {
    title: "LEGACY STATIC",
    id: "P.06",
    category: "High Speed Interface",
    description: "Building unshakeable high performance static websites for global brands with maximum SEO and speed metrics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    tech: ["Modern HTML", "Speed Meta", "SEO Mastery"]
  }
];

export default function Projects() {
  return (
    <section className="bg-black pt-32 pb-40 px-6 md:px-12 relative overflow-hidden">
      {/* Background Deep Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* SYMMETRICAL HEADER: High Balance */}
        <div className="mb-24 flex flex-col items-center text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="h-[1px] w-8 bg-amber-500/50" />
            <span className="text-amber-500 font-mono text-[10px] tracking-[0.8em] uppercase italic">The Lab</span>
            <div className="h-[1px] w-8 bg-amber-500/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            viewport={{ once: true }}
            className="text-white f-syne font-black italic tracking-tighter leading-none"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 8.5rem)' }}
          >
            Works.
          </motion.h2>
        </div>

        {/* PROJECTS GRID: Balanced Bento architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-4 md:px-0">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-white/[0.01] border border-white/5 p-8 md:p-12 hover:bg-white/[0.02] transition-all duration-500"
            >
              <div className="flex flex-col h-full justify-between gap-12 relative z-10">
                <div className="relative w-full aspect-video overflow-hidden rounded-[2rem] border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-1000 bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-1000 opacity-40 group-hover:opacity-100"
                  />
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-amber-500/80 tracking-[0.4em] uppercase">{project.category}</span>
                      <h4 className="text-3xl font-bold text-white tracking-tight f-syne italic">{project.title}</h4>
                    </div>
                    <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase italic">{project.id}</span>
                  </div>
                  <p className="text-zinc-500 text-sm font-light italic leading-relaxed max-w-sm">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-white/5">
                  {project.tech.map((tag) => (
                    <div key={tag} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-amber-500/40" />
                      <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ATTRACTIVE TICKER FOOTER: High-Volume Non-Interactive Archive */}
        <div className="mt-32 pt-20 border-t border-white/5 overflow-hidden relative">
          <div className="flex flex-col items-center mb-10 opacity-30">
            <span className="text-[9px] font-mono text-amber-500 tracking-[0.8em] uppercase italic">The Vault Feed</span>
            <span className="text-[7px] font-mono text-white/50 tracking-[1em] uppercase">Confidential Project Registry / No Public Access</span>
          </div>

          <div className="flex whitespace-nowrap overflow-hidden relative">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-20 items-center pr-20"
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-20 items-center">
                  <span className="text-white/10 font-black f-syne italic text-6xl tracking-tighter">P.07 / OMNI WEB</span>
                  <span className="text-amber-500/10 font-black f-syne italic text-6xl tracking-tighter">P.08 / CYBER CORE</span>
                  <span className="text-white/10 font-black f-syne italic text-6xl tracking-tighter">P.09 / NEURAL FLOW</span>
                  <span className="text-amber-500/10 font-black f-syne italic text-6xl tracking-tighter">P.10 / DATA SENTINEL</span>
                  <span className="text-white/10 font-black f-syne italic text-6xl tracking-tighter">P.11 / QUANTUM UI</span>
                  <span className="text-amber-500/10 font-black f-syne italic text-6xl tracking-tighter">P.12 / SYSTEM OS</span>
                  <span className="text-white/10 font-black f-syne italic text-6xl tracking-tighter">P.13 / LOGIC HUB</span>
                  <span className="text-amber-500/10 font-black f-syne italic text-6xl tracking-tighter">P.14 / GLOBAL FLOW</span>
                </div>
              ))}
            </motion.div>
            {/* Fade Edges for Professional Aesthetic */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
