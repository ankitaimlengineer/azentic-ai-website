"use client";
import React, { useState } from "react"; // useState ઉમેર્યું
import { motion, Variants } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import VideoModal from "@/components/ui/VideoModal"; // મોડલ ઇમ્પોર્ટ કર્યું

export default function HeroContent() {
  const [isVideoOpen, setIsVideoOpen] = useState(false); // મોડલ કંટ્રોલ કરવા માટે

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
        <span className="text-[10px] text-[#6366F1] font-bold uppercase tracking-[0.2em]">Architecting Future Intelligence</span>
      </motion.div>

      {/* 2. Grand Heading */}
      <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
        <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-white leading-[0.95] mb-4">
          Human Mind. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] via-cyan-400 to-[#8B5CF6]">Machine Precision.</span>
        </h1>
      </motion.div>

      {/* 3. Description */}
      <motion.p 
        custom={2} variants={fadeUp} initial="hidden" animate="visible"
        className="text-lg lg:text-xl text-zinc-400 max-w-xl leading-relaxed font-light"
      >
        Azentic AI builds autonomous agentic systems and neural architectures that transform how global enterprises scale intelligence.
      </motion.p>

      {/* 4. Action Buttons */}
      <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap items-center gap-5">
        
        {/* Primary Button: Scrolls to Contact */}
        <a href="#contact" className="group relative">
          <button className="relative px-10 py-5 bg-white text-black rounded-full font-black text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
             <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
             <span className="relative z-10 flex items-center gap-2">
               Start Your Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </span>
          </button>
        </a>

        {/* Watch Demo Button: Opens Video Modal */}
        <button 
          onClick={() => setIsVideoOpen(true)} // ક્લિક પર મોડલ ખુલશે
          className="flex items-center gap-3 px-8 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-sm transition-all hover:bg-white/10 hover:border-white/20 backdrop-blur-sm"
        >
          <PlayCircle size={20} className="text-[#6366F1]" /> Watch Demo
        </button>
      </motion.div>

      {/* 5. The Video Modal Component */}
      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoSrc="/videos/demo.mp4" // ખાતરી કરજો કે વિડિયો આ પાથ પર છે
      />

      {/* 6. Mini Stats */}
      <motion.div 
        custom={4} variants={fadeUp} initial="hidden" animate="visible"
        className="flex items-center gap-8 mt-4 pt-10 border-t border-white/5"
      >
        <div className="group cursor-default">
          <p className="text-3xl font-black text-white group-hover:text-[#6366F1] transition-colors">99.9%</p>
          <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Reliability</p>
        </div>
        <div className="w-px h-10 bg-white/10" />
        <div className="group cursor-default">
          <p className="text-3xl font-black text-white group-hover:text-[#6366F1] transition-colors">250ms</p>
          <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Latency</p>
        </div>
        <div className="w-px h-10 bg-white/10" />
        <div className="group cursor-default">
          <p className="text-3xl font-black text-white group-hover:text-[#6366F1] transition-colors">10x</p>
          <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Efficiency</p>
        </div>
      </motion.div>
    </div>
  );
}