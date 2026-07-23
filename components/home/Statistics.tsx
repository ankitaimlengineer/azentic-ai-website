"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Operational Cost", value: "70", suffix: "%+", sub: "Direct Savings" },
  { label: "Workflow Speed", value: "10", suffix: "X", sub: "Faster Automation" },
  { label: "Model Accuracy", value: "99.9", suffix: "%", sub: "Neural Precision" },
  { label: "Service Uptime", value: "24", suffix: "/7", sub: "Autonomous Ops" },
];

export default function Statistics() {
  return (
    <section className="py-32 bg-[#030712] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col group"
            >
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl md:text-6xl font-bold tracking-tighter text-white group-hover:text-primary transition-colors duration-500">
                  {stat.value}
                </span>
                <span className="text-xl font-bold text-zinc-500">{stat.suffix}</span>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">
                  {stat.label}
                </p>
                <p className="text-[10px] text-zinc-600 uppercase font-medium">
                  {stat.sub}
                </p>
              </div>
              <div className="mt-6 h-[1px] w-full bg-white/5 relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "100%" }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}