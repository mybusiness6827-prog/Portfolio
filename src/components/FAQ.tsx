"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const FAQ_DATA = [
  {
    question: "Will a 3D immersive website be slow to load?",
    answer: "Absolutely not. I use advanced optimization techniques like Draco compression for 3D models and lazy-loading protocols. Your site will maintain 90+ lighthouse scores while delivering a high-end interactive experience."
  },
  {
    question: "Can I actually get a 3D website for free?",
    answer: "While the professional development of a 3D environment requires significant expertise, I often include basic 3D elements or interactive backgrounds for free within my standard web packages to ensure your brand stands out."
  },
  {
    question: "How much lower are your prices compared to standard agencies?",
    answer: "Because I operate as an independent specialist without the overhead costs of a large agency, my prices are typically 40% to 60% lower while delivering a much higher technical and creative standard."
  },
  {
    question: "Do you provide free maintenance after the site is live?",
    answer: "Yes. Every project includes a lifetime free maintenance plan for minor updates, security patches, and basic performance checks to ensure your digital asset remains in perfect condition."
  },
  {
    question: "How long does it take to build a professional 3D site?",
    answer: "Most high-end interactive websites are delivered within 48 to 72 hours. Larger, complex ecosystems with AI agent integrations may take up to 5-7 days depending on the logic complexity."
  },
  {
    question: "Is the hosting and domain really free of cost?",
    answer: "Yes. For your first year, I provide premium high-speed hosting and a professional domain name entirely free of charge as part of my complete 'Ready-to-Launch' service package."
  }
];

const FAQItem = ({ item, index }: { item: typeof FAQ_DATA[0]; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-b border-white/5"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between group text-left"
      >
        <span className="text-white f-syne font-bold italic text-xl md:text-2xl tracking-tight group-hover:text-amber-500 transition-colors">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.4, ease: "circOut" }}
          className="flex-shrink-0 ml-8"
        >
          <Plus className={`w-6 h-6 ${isOpen ? "text-amber-500" : "text-white/20"}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 pr-12">
               <p className="text-zinc-500 text-lg leading-relaxed font-light italic">
                 {item.answer}
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQ() {
  return (
    <section className="bg-black pt-60 pb-40 px-6 md:px-12 relative overflow-hidden border-t border-white/5">
      {/* Background Liquid Atmosphere */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/[0.02] rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        
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
            <span className="text-amber-500 font-mono text-[10px] tracking-[0.8em] uppercase italic">Information Hub</span>
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
            FAQs.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-white font-mono text-[10px] tracking-[0.3em] uppercase max-w-xl leading-relaxed"
          >
            Clearing technical doubts and providing absolute project transparency.
          </motion.p>
        </div>

        {/* FAQ ACCORDION: Staggered Reveal */}
        <div className="space-y-1">
          {FAQ_DATA.map((item, index) => (
            <FAQItem key={index} item={item} index={index} />
          ))}
        </div>

        {/* BOTTOM DECORATION */}
        <div className="mt-20 flex justify-center opacity-10">
           <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
