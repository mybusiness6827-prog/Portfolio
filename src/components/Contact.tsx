"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Globe, ArrowUpRight, Send, Clock, MapPin, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-black pt-60 pb-20 px-6 md:px-12 relative overflow-hidden border-t border-white/5">
      {/* Background Liquid Atmosphere */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/[0.03] rounded-full blur-[180px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SYMMETRICAL HEADER: High Balance */}
        <div className="mb-40 flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="h-[1px] w-8 bg-amber-500/50" />
            <span className="text-amber-500 font-mono text-[10px] tracking-[0.8em] uppercase italic">Final Destination</span>
            <div className="h-[1px] w-8 bg-amber-500/50" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            viewport={{ once: true }}
            className="text-white f-syne font-black italic tracking-tighter leading-none"
            style={{ fontSize: 'clamp(4rem, 15vw, 12rem)' }}
          >
            Talk.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-white font-mono text-[10px] tracking-[0.3em] uppercase max-w-xl leading-relaxed"
          >
            Available for professional global collaborations and high-impact digital engineering.
          </motion.p>
        </div>

        {/* BHRA BHRA CONTENT: Professional Grid Expansion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 mb-60">
           
           {/* LEFT: Core Contact Info */}
           <div className="lg:col-span-5 flex flex-col gap-1">
              {/* EMAIL */}
              <motion.a 
                href="mailto:workmailofhamza99@gmail.com"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="group bg-white/[0.01] border border-white/5 p-12 hover:bg-amber-500/[0.02] transition-all duration-700"
              >
                 <div className="flex flex-col gap-6">
                    <Mail className="w-5 h-5 text-amber-500" />
                    <div>
                       <span className="text-[10px] font-mono text-zinc-500 tracking-[0.4em] uppercase font-bold text-xs">Mail.</span>
                       <h4 className="text-white f-syne font-black italic text-lg lg:text-xl tracking-tight group-hover:text-amber-500 transition-colors break-all">workmailofhamza99@gmail.com</h4>
                    </div>
                 </div>
              </motion.a>

              {/* PHONE / WHATSAPP */}
              <motion.a 
                href="https://wa.me/923484377237"
                target="_blank"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="group bg-white/[0.01] border border-white/5 p-12 hover:bg-amber-500/[0.02] transition-all duration-700"
              >
                 <div className="flex flex-col gap-6">
                    <Phone className="w-5 h-5 text-amber-500" />
                    <div>
                       <span className="text-[10px] font-mono text-zinc-500 tracking-[0.4em] uppercase font-bold text-xs">Call / Whatsapp.</span>
                       <h4 className="text-white f-syne font-black italic text-xl md:text-2xl tracking-tight group-hover:text-amber-500 transition-colors">+92 348 4377237</h4>
                    </div>
                 </div>
              </motion.a>

              {/* SOCIAL REACH: Professional Links */}
              <div className="bg-white/[0.01] border border-white/5 p-12 flex flex-col gap-8">
                 <span className="text-[10px] font-mono text-zinc-500 tracking-[0.4em] uppercase font-bold text-xs">Follow.</span>
                 <div className="flex flex-wrap gap-8">
                    {/* INSTAGRAM */}
                    <a href="https://instagram.com" target="_blank" className="flex items-center gap-3 group/link">
                       <Instagram className="w-4 h-4 text-white/20 group-hover/link:text-amber-500 transition-colors" />
                       <span className="text-white font-mono text-[10px] tracking-widest uppercase italic group-hover/link:text-amber-500 transition-colors">Instagram</span>
                    </a>
                    {/* FACEBOOK */}
                    <a href="https://facebook.com" target="_blank" className="flex items-center gap-3 group/link">
                       <Facebook className="w-4 h-4 text-white/20 group-hover/link:text-amber-500 transition-colors" />
                       <span className="text-white font-mono text-[10px] tracking-widest uppercase italic group-hover/link:text-amber-500 transition-colors">Facebook</span>
                    </a>
                    {/* TIKTOK */}
                    <a href="https://tiktok.com" target="_blank" className="flex items-center gap-3 group/link">
                       <div className="w-4 h-4 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-white/20 group-hover/link:text-amber-500 transition-colors">T</span>
                       </div>
                       <span className="text-white font-mono text-[10px] tracking-widest uppercase italic group-hover/link:text-amber-500 transition-colors">Tiktok</span>
                    </a>
                 </div>
              </div>
           </div>

           {/* RIGHT: High-End Inquriy Visual */}
           <div className="lg:col-span-7 bg-white/[0.01] border border-white/5 p-16 md:p-24 flex flex-col justify-between group relative overflow-hidden">
              <div className="space-y-12 relative z-10">
                 <div className="space-y-4">
                    <h3 className="text-white f-syne font-black italic text-4xl tracking-tighter">Ready to Build?</h3>
                    <p className="text-zinc-500 font-mono text-[10px] tracking-[0.4em] uppercase">Start a professional inquiry today.</p>
                 </div>

                 <div className="space-y-8">
                    <div className="border-b border-white/10 pb-4 flex justify-between items-center group-hover:border-amber-500/40 transition-colors">
                       <span className="text-white/20 font-mono text-[10px] tracking-[0.4em] uppercase italic">Identity Header (Name)</span>
                       <div className="h-1 w-1 bg-amber-500/20" />
                    </div>
                    <div className="border-b border-white/10 pb-4 flex justify-between items-center group-hover:border-amber-500/40 transition-colors">
                       <span className="text-white/20 font-mono text-[10px] tracking-[0.4em] uppercase italic">Objective Topic</span>
                       <div className="h-1 w-1 bg-amber-500/20" />
                    </div>
                 </div>
              </div>

              <div className="mt-20 group/btn relative cursor-pointer z-10">
                 <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:border-amber-500/50 group-hover/btn:bg-amber-500 transition-all duration-500">
                       <Send className="w-5 h-5 text-zinc-500 group-hover/btn:text-black transition-colors" />
                    </div>
                    <span className="text-white f-syne font-bold italic tracking-widest text-xl group-hover/btn:text-amber-500 transition-colors">Initiate Flow</span>
                 </div>
              </div>

              <Clock className="absolute top-12 right-12 w-6 h-6 text-white/[0.02]" />
           </div>
        </div>

        {/* FINAL FOOTER: The Terminal Line */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-24 border-t border-white/5 gap-12 md:gap-0">
           <div className="flex items-center gap-6">
              <Globe className="w-4 h-4 text-amber-500/40" />
              <span className="text-zinc-600 font-mono text-[9px] tracking-[0.6em] uppercase italic">Network Status: Online / Accepting Projects</span>
           </div>
           
           <div className="flex items-center gap-12">
              <span className="text-zinc-600 font-mono text-[9px] tracking-[0.4em] uppercase font-bold italic">© 2026 Crafted by Hamza Amin</span>
              <div className="hidden md:flex gap-8">
                 <MapPin className="w-4 h-4 text-zinc-800" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
