"use client";
import React from "react";
import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";
import AuroraBackground from "./AuroraBackground";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden px-6 lg:px-8 bg-[#030712]">
      <AuroraBackground />

      <div className="container mx-auto max-w-[1400px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-400">
              Azentic v2.0 is now live
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <HeroContent />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 bg-primary/20 blur-[60px] rounded-[40px] -z-10" />
            <HeroDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}