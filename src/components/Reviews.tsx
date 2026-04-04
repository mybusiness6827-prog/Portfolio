"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";
import React, { useState } from "react";

const REVIEWS = [
  {
    name: "Zubair Ahmed",
    initials: "ZA",
    role: "E-Commerce",
    text: "Bhai bohot hi fit website hai. Thanks! 🔥",
    verified: true,
    rating: 5
  },
  {
    name: "Sana Khan",
    initials: "SK",
    role: "Agency Master",
    text: "The AI agents setup for our agency is literally a game changer. We were struggling with lead follow-ups but now n8n handles 90% of the initial filtration. Although we had some delays in the UI phase but the final result is 10/10. ✨",
    verified: true,
    rating: 4
  },
  {
    name: "Muhammad Bilal",
    initials: "MB",
    role: "Store Owner",
    text: "Fit ha bhai! ✨",
    verified: false,
    rating: 5
  },
  {
    name: "Ayesha Malik",
    initials: "AM",
    role: "Brand Director",
    text: "Great work on the 3D elements. Communication thori fast ho sakti thi but overall satisfied with the final delivery. 👍",
    verified: true,
    rating: 4
  },
  {
    name: "Hamza Sheikh",
    initials: "HS",
    role: "SaaS Founder",
    text: "Unmatchable quality. Perfectly aligned with my vision. 🚀",
    verified: true,
    rating: 5
  },
  {
    name: "Faizan Raza",
    initials: "FR",
    role: "Tech Lead",
    text: "Bot development was seamless. API integration performance is top notch. Slightly expensive but worth every penny for this level of code quality and logic building.",
    verified: false,
    rating: 5
  },
  {
    name: "Zainab Bibi",
    initials: "ZB",
    role: "Marketing",
    text: "Best work! 🙌",
    verified: true,
    rating: 5
  },
  {
    name: "Ali Haider",
    initials: "AH",
    role: "Startup Owner",
    text: "Technical precision is on another level. Portfolio ka design bohot solid hai. Response time can be improved but the delivery is beast mode.",
    verified: true,
    rating: 4
  },
  {
    name: "Sara Javed",
    initials: "SJ",
    role: "Luxury Client",
    text: "Real luxury brand feel. Amazing work on the 3D interactive layout. Everyone is asking who built this. ✨",
    verified: true,
    rating: 5
  },
  {
    name: "Usman Ghani",
    initials: "UG",
    role: "Ops Manager",
    text: "Speed top class hai but support is a bit slow on weekends. Overall great result for our store management project.",
    verified: false,
    rating: 3
  },
  {
    name: "Hassan Ali",
    initials: "HA",
    role: "Business Owner",
    text: "n8n agents setup smoothly done. Automated our whole workflow. 👍👍",
    verified: true,
    rating: 4
  },
  {
    name: "Maryam Nawaz",
    initials: "MN",
    role: "Private",
    text: "Expertise in every module. Truly a professional who understands logic perfectly.",
    verified: false,
    rating: 5
  },
  {
    name: "Raza Shah",
    initials: "RS",
    role: "Engineer",
    text: "Clean code but minor bugs were there which were fixed later. Okay experience overall.",
    verified: false,
    rating: 3
  }
];

const ReviewCard = ({ review }: { review: typeof REVIEWS[0] }) => (
  <div className="w-[350px] md:w-[450px] flex-shrink-0 group relative bg-white/[0.01] border border-white/5 p-8 md:p-10 hover:bg-white/[0.03] transition-all duration-700 flex flex-col justify-between">
    <div className="flex justify-between items-start mb-6">
      <div className="flex gap-1">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
        ))}
        {[...Array(5 - review.rating)].map((_, i) => (
          <Star key={i} className="w-3 h-3 text-white/5" />
        ))}
      </div>
      {review.verified && (
        <div className="bg-amber-500/[0.08] border border-amber-500/20 rounded-full px-3 py-1 flex items-center gap-2">
          <CheckCircle2 className="w-3 h-3 text-amber-500 fill-amber-500/20" />
          <span className="text-[8px] font-mono text-amber-500 uppercase tracking-widest font-bold">Verified</span>
        </div>
      )}
    </div>
    <p className="text-zinc-400 text-base md:text-lg leading-relaxed italic font-light mb-8">
      &quot;{review.text}&quot;
    </p>
    <div className="flex items-center gap-4 border-t border-white/5 pt-6">
      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] f-syne font-black italic text-amber-500 text-[10px] group-hover:border-amber-500/40 transition-colors uppercase">
        {review.initials}
      </div>
      <div className="flex flex-col">
        <h4 className="text-white f-syne font-bold italic tracking-tight text-base">{review.name}</h4>
        <span className="text-[9px] font-mono text-zinc-600 tracking-[0.2em] uppercase">{review.role}</span>
      </div>
    </div>
  </div>
);

export default function Reviews() {
  const [isPaused, setIsPaused] = useState(false);

  const row1 = REVIEWS.slice(0, 7);
  const row2 = REVIEWS.slice(7);

  return (
    <section 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="bg-[#080808] pt-60 pb-40 relative overflow-hidden border-t border-white/5"
    >
      {/* Background Liquid Atmosphere */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-amber-500/[0.02] rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-24">
        {/* SYMMETRICAL HEADER */}
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="h-[1px] w-8 bg-amber-500/50" />
            <span className="text-amber-500 font-mono text-[10px] tracking-[0.8em] uppercase italic">Social Integrity</span>
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
            Trust.
          </motion.h2>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="px-6 py-3 bg-white/[0.02] border border-white/10 rounded-full flex items-center gap-5"
           >
              <div className="flex gap-1">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                 ))}
              </div>
              <div className="h-3 w-[1px] bg-white/10" />
              <span className="text-white f-syne font-black italic text-lg uppercase">Rating 4.9 / 5.0</span>
           </motion.div>
        </div>
      </div>

      {/* INFINITE MARQUEE ROWS */}
      <div className="space-y-1 relative">
         {/* Row 1: Right to Left */}
         <div className="flex overflow-hidden">
            <motion.div 
              animate={isPaused ? {} : { x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-1"
            >
               {[...row1, ...row1].map((review, i) => (
                 <ReviewCard key={i} review={review} />
               ))}
            </motion.div>
         </div>

         {/* Row 2: Left to Right */}
         <div className="flex overflow-hidden">
            <motion.div 
              animate={isPaused ? {} : { x: ["-50%", "0%"] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="flex gap-1"
            >
               {[...row2, ...row2].map((review, i) => (
                 <ReviewCard key={i} review={review} />
               ))}
            </motion.div>
         </div>

         {/* Side Fades for Professional Aesthetic */}
         <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
         <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24">
        {/* IMPACTFUL SUMMARY */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center justify-center py-16 px-12 border-t border-white/5 opacity-50 select-none pointer-events-none"
        >
           <h4 className="text-white f-syne font-black italic text-5xl md:text-7xl tracking-tighter text-center">
              +198 MORE.
           </h4>
           <span className="text-amber-500 font-mono text-[9px] tracking-[0.8em] uppercase italic mt-4">Verified Professional Reviews</span>
        </motion.div>
      </div>
    </section>
  );
}
