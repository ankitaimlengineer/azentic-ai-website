"use client";
import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    /* મેં અહીં -z-50 અને pointer-events-none ઉમેર્યું છે */
    <div className="absolute inset-0 overflow-hidden bg-[#030712] -z-50 pointer-events-none">
      
      {/* 1. Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* 2. Moving Aurora Blobs */}
      <div className="relative h-full w-full">
        {/* Blue Glow */}
        <motion.div
          className="absolute -left-[10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-primary/30 blur-[120px]"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, 100, 40, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Purple/Indigo Glow */}
        <motion.div
          className="absolute -right-[5%] top-[10%] h-[550px] w-[550px] rounded-full bg-secondary/20 blur-[140px]"
          animate={{
            x: [0, -80, 40, 0],
            y: [0, 50, 100, 0],
            scale: [1, 1.2, 1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Cyan Glow (Center Bottom) */}
        <motion.div
          className="absolute left-1/2 bottom-[-20%] -translate-x-1/2 h-[500px] w-[800px] rounded-[100%] bg-cyan-500/10 blur-[150px]"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* 3. Gradient Mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030712]" />
    </div>
  );
}