"use client";
import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Fingerprint, Zap, Globe, ShieldCheck, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Neural Architectures",
    desc: "Custom-built large language models tailored to your specific enterprise data and security needs.",
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    className: "md:col-span-2 md:row-span-2",
    bg: "bg-primary/5"
  },
  {
    title: "Global Edge",
    desc: "Deploy AI agents across 50+ regions with sub-20ms latency.",
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    className: "md:col-span-1 md:row-span-1",
    bg: "bg-cyan-500/5"
  },
  {
    title: "Secure by Design",
    desc: "Enterprise-grade encryption for all AI training workflows.",
    icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
    className: "md:col-span-1 md:row-span-1",
    bg: "bg-green-500/5"
  },
  {
    title: "Agentic Automation",
    desc: "Self-correcting AI agents that handle complex multi-step business processes without human intervention.",
    icon: <Zap className="w-6 h-6 text-secondary" />,
    className: "md:col-span-2 md:row-span-1",
    bg: "bg-secondary/5"
  }
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-[#030712] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mt-4 tracking-tight"
          >
            The Next Evolution of <br />
            <span className="text-zinc-500">Autonomous Intelligence.</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-[32px] border border-white/5 p-8 overflow-hidden backdrop-blur-sm hover:border-white/10 transition-all ${f.className} ${f.bg}`}
            >
              {/* Subtle Gradient Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-6 p-3 w-fit rounded-2xl bg-black/40 border border-white/5">
                    {f.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{f.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">{f.desc}</p>
                </div>
                
                {/* Visual element for larger cards */}
                {f.className.includes("md:col-span-2") && (
                  <div className="mt-12 h-32 w-full bg-gradient-to-t from-primary/10 to-transparent rounded-t-2xl border-t border-x border-white/5 relative overflow-hidden">
                     {/* Floating particles effect could go here */}
                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}