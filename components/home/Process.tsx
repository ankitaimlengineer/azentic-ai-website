"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Cpu, ShieldCheck, Rocket } from "lucide-react"; // npm install lucide-react

const steps = [
  { 
    no: "01", 
    title: "Strategy", 
    desc: "Defining autonomous goals and high-fidelity data sourcing for neural architectures.",
    icon: <Target className="w-5 h-5" />,
    sub: "Inception Phase"
  },
  { 
    no: "02", 
    title: "Training", 
    desc: "Deploying large-scale compute on distributed GPU clusters for model convergence.",
    icon: <Cpu className="w-5 h-5" />,
    sub: "Neural Compute"
  },
  { 
    no: "03", 
    title: "Alignment", 
    desc: "Rigorous safety checks and RLHF fine-tuning to ensure human-centric reliability.",
    icon: <ShieldCheck className="w-5 h-5" />,
    sub: "Safety Protocol"
  },
  { 
    no: "04", 
    title: "Launch", 
    desc: "Seamless API integration and global scaling across edge-node infrastructures.",
    icon: <Rocket className="w-5 h-5" />,
    sub: "Deployment"
  },
];

export default function Process() {
  return (
    <section className="py-32 bg-[#030712] border-y border-white/5 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_70%)] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase">The Pipeline</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mt-4 leading-tight">
            Our Neural <br /><span className="text-zinc-500">Methodology.</span>
          </h2>
        </div>

        {/* Process Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-12" />

          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative"
            >
              {/* Step Card */}
              <div className="relative z-10 bg-white/[0.02] border border-white/5 p-10 rounded-[40px] hover:bg-white/[0.04] hover:border-primary/30 transition-all duration-500 h-full backdrop-blur-sm">
                
                {/* Step Number & Icon */}
                <div className="flex justify-between items-center mb-10">
                  <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">
                    [ {step.no} ]
                  </span>
                  <div className="p-3 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-500">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                    {step.sub}
                  </p>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-[40px] blur-2xl transition-opacity duration-500 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}