"use client";
import { motion, Variants } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HeroContent() {
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
      {/* 1. Sleek Badge */}
      <motion.div 
        custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6366F1]/20 bg-[#6366F1]/5 w-fit backdrop-blur-md"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#6366F1]" />
        <span className="text-[10px] text-[#6366F1] font-bold uppercase tracking-[0.2em]">Next-Gen Agentic AI Systems</span>
      </motion.div>

      {/* 2. Grand Heading */}
      <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
        <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-white leading-[0.95] mb-4">
          Build Smarter. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] via-cyan-400 to-[#8B5CF6]">Scale Faster.</span>
        </h1>
      </motion.div>

      {/* 3. Description - અહીં આપણે ફાયદો બતાવ્યો છે */}
      <motion.p 
        custom={2} variants={fadeUp} initial="hidden" animate="visible"
        className="text-lg lg:text-xl text-zinc-400 max-w-xl leading-relaxed font-light"
      >
        Azentic AI develops autonomous agents that automate complex workflows, allowing enterprises to reduce operational costs by 70% while scaling 10x faster.
      </motion.p>

      {/* 4. Action Buttons */}
      <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap items-center gap-5">
        <Link href="/contact" className="group relative block">
          <div className="px-10 py-5 bg-white text-black rounded-full font-black text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center gap-2 relative">
             <span className="relative z-10 flex items-center gap-2">
               Get a Free AI Audit <ArrowRight size={18} />
             </span>
          </div>
        </Link>

        <Link href="/#portfolio" className="flex items-center gap-3 px-8 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-sm transition-all hover:bg-white/10 hover:border-white/20 backdrop-blur-sm">
          <PlayCircle size={20} className="text-[#6366F1]" /> View AI Solutions
        </Link>
      </motion.div>

      {/* 5. Mini Stats */}
      <motion.div 
        custom={4} variants={fadeUp} initial="hidden" animate="visible"
        className="flex items-center gap-8 mt-4 pt-10 border-t border-white/5"
      >
        <div className="group cursor-default">
          <p className="text-3xl font-black text-white group-hover:text-[#6366F1] transition-colors">70%</p>
          <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Cost Reduction</p>
        </div>
        <div className="w-px h-10 bg-white/10" />
        <div className="group cursor-default">
          <p className="text-3xl font-black text-white group-hover:text-[#6366F1] transition-colors">10x</p>
          <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Growth Speed</p>
        </div>
        <div className="w-px h-10 bg-white/10" />
        <div className="group cursor-default">
          <p className="text-3xl font-black text-white group-hover:text-[#6366F1] transition-colors">24/7</p>
          <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Autonomous Support</p>
        </div>
      </motion.div>
    </div>
  );
}