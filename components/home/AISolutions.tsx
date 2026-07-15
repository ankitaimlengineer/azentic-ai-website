"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Cpu, Code2, ArrowUpRight } from "lucide-react";

const solutions = [
  {
    icon: <Zap className="text-blue-400" size={28} />,
    title: "Real-time Inference",
    description: "Ultra-low latency inference engines designed for high-throughput enterprise applications and mission-critical workflows.",
    tag: "Deployment Core",
    glow: "group-hover:bg-blue-500/10"
  },
  {
    icon: <ShieldCheck className="text-emerald-400" size={28} />,
    title: "Secure AI Guardrails",
    description: "Advanced safety layers to prevent hallucinations and ensure ethical AI behavior across all organizational touchpoints.",
    tag: "Safety Layer",
    glow: "group-hover:bg-emerald-500/10"
  },
  {
    icon: <Cpu className="text-purple-400" size={28} />,
    title: "Edge Optimization",
    description: "Deploy heavy models on edge devices with our proprietary quantization and neural pruning techniques.",
    tag: "Hardware Sync",
    glow: "group-hover:bg-purple-500/10"
  },
  {
    icon: <Code2 className="text-amber-400" size={28} />,
    title: "Custom LLM Fine-tuning",
    description: "Tailor our base models to your specific industry data, private terminology, and specialized business logic.",
    tag: "Model Forge",
    glow: "group-hover:bg-amber-500/10"
  }
];

export default function AISolutions() {
  return (
    <section className="py-32 bg-[#030712] border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10" />
      
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase">Enterprise Ready</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mt-4 leading-tight">
              Dedicated AI <br />
              <span className="text-zinc-500">Infrastructures.</span>
            </h2>
          </motion.div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-12 rounded-[48px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
              {/* Spotlight Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 -z-10 ${item.glow}`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/5 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <div className="flex-grow">
                  <h4 className="text-3xl font-bold text-white mb-6 tracking-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-zinc-400 text-lg leading-relaxed font-light max-w-md">
                    {item.description}
                  </p>
                </div>

                <div className="mt-12 flex items-center gap-2 text-white/40 group-hover:text-white transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer">
                  Technical Specifications <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}