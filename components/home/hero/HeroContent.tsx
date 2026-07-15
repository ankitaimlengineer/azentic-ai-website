"use client";
import { motion, Variants } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

export default function HeroContent() {
  // TypeScript Type 'Variants' ઉમેર્યું છે જેથી એરર ના આવે
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    })
  };

  return (
    <div className="flex flex-col gap-10 relative z-10">
      {/* 1. Badge */}
      <motion.div 
        custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6366F1]/20 bg-[#6366F1]/5 w-fit backdrop-blur-md"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#6366F1]" />
        <span className="text-[10px] text-[#6366F1] font-bold uppercase tracking-[0.2em]">Architecting Future Intelligence</span>
      </motion.div>

      {/* 2. Heading */}
      <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
        <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.95] mb-4">
          Human Mind. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] via-cyan-400 to-[#8B5CF6]">Machine Precision.</span>
        </h1>
      </motion.div>

      {/* 3. Description */}
      <motion.p 
        custom={2} variants={fadeUp} initial="hidden" animate="visible"
        className="text-lg lg:text-xl text-zinc-400 max-w-xl leading-relaxed"
      >
        Azentic AI builds autonomous agentic systems and neural architectures for the next generation of global computing.
      </motion.p>

      {/* 4. Action Buttons */}
      <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap items-center gap-5">
        <button className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-sm overflow-hidden transition-all hover:scale-105">
           <span className="relative z-10 flex items-center gap-2">Start Project <ArrowRight size={16} /></span>
        </button>
        <button className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-sm transition-all hover:bg-white/10">
          <PlayCircle size={20} /> Watch Demo
        </button>
      </motion.div>

      {/* 5. Stats */}
      <motion.div 
        custom={4} variants={fadeUp} initial="hidden" animate="visible"
        className="flex items-center gap-8 mt-4 pt-8 border-t border-white/5"
      >
        <div><p className="text-2xl font-bold text-white">99.9%</p><p className="text-[10px] text-zinc-500 uppercase font-bold">Reliability</p></div>
        <div className="w-px h-10 bg-white/10" />
        <div><p className="text-2xl font-bold text-white">250ms</p><p className="text-[10px] text-zinc-500 uppercase font-bold">Latency</p></div>
        <div className="w-px h-10 bg-white/10" />
        <div><p className="text-2xl font-bold text-white">10x</p><p className="text-[10px] text-zinc-500 uppercase font-bold">Efficiency</p></div>
      </motion.div>
    </div>
  );
}