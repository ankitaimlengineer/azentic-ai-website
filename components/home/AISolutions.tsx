"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Cpu, Code2, ArrowUpRight, Sparkles } from "lucide-react";

const solutions = [
  {
    icon: <Zap className="text-blue-400" size={28} />,
    title: "Real-time Inference",
    description: "Ultra-low latency inference engines designed for high-throughput enterprise applications and mission-critical workflows.",
    tag: "Deployment Core",
    glow: "group-hover:bg-blue-500/20"
  },
  {
    icon: <ShieldCheck className="text-emerald-400" size={28} />,
    title: "Secure AI Guardrails",
    description: "Advanced safety layers to prevent hallucinations and ensure ethical AI behavior across all organizational touchpoints.",
    tag: "Safety Layer",
    glow: "group-hover:bg-emerald-500/20"
  },
  {
    icon: <Cpu className="text-purple-400" size={28} />,
    title: "Edge Optimization",
    description: "Deploy heavy models on edge devices with our proprietary quantization and neural pruning techniques.",
    tag: "Hardware Sync",
    glow: "group-hover:bg-purple-500/20"
  },
  {
    icon: <Code2 className="text-amber-400" size={28} />,
    title: "Custom LLM Fine-tuning",
    description: "Tailor our base models to your specific industry data, private terminology, and specialized business logic.",
    tag: "Model Forge",
    glow: "group-hover:bg-amber-500/20"
  }
];

export default function AISolutions() {
  return (
    <section id="services" className="py-32 bg-[#030712] border-t border-white/5 relative overflow-hidden scroll-mt-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6366F1]/5 blur-[140px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] -z-10" />
      
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mb-24 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6">
              <Sparkles size={12} className="text-primary" />
              <span className="text-primary font-bold text-[10px] tracking-[0.3em] uppercase">Enterprise Ready</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
              Neural <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">Infrastructures.</span>
            </h2>
          </motion.div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item, index) => (
            <a href="#contact" key={index} className="block group">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="relative p-12 rounded-[56px] bg-white/[0.02] border border-white/5 group-hover:border-primary/40 group-hover:bg-white/[0.04] transition-all duration-500 overflow-hidden h-full cursor-pointer shadow-2xl"
              >
                {/* Spotlight/Glow Effect on Hover */}
                <div className={`absolute -inset-24 opacity-0 group-hover:opacity-100 blur-[100px] transition-opacity duration-1000 -z-10 ${item.glow}`} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-5 rounded-2xl bg-black/60 border border-white/10 group-hover:scale-110 group-hover:border-primary/50 group-hover:text-white transition-all duration-500 shadow-inner">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] bg-white/5 px-5 py-2 rounded-full border border-white/5 group-hover:text-zinc-300 group-hover:border-white/10 transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex-grow">
                    <h4 className="text-4xl font-bold text-white mb-6 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-zinc-400 text-lg leading-relaxed font-light max-w-md group-hover:text-zinc-300 transition-colors">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-16 flex items-center gap-3 text-zinc-500 group-hover:text-white transition-all duration-300">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em]">Inquire for deployment</span>
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary group-hover:text-black transition-all">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>

                {/* Subtle Inner Border Shine */}
                <div className="absolute inset-0 border-t border-white/5 pointer-events-none rounded-[56px]" />
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}