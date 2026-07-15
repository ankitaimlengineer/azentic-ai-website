"use client";
import React from "react";
import { motion } from "framer-motion";
import { Terminal, Activity, Zap, ShieldCheck, Cpu } from "lucide-react";

export default function HeroDashboard() {
  const stats = [
    { label: "Throughput", value: "1.2M", unit: "tps", icon: <Zap className="w-3 h-3" /> },
    { label: "Neural Latency", value: "14", unit: "ms", icon: <Activity className="w-3 h-3" /> },
    { label: "Sync Accuracy", value: "99.9", unit: "%", icon: <ShieldCheck className="w-3 h-3" /> },
    { label: "Core Load", value: "32", unit: "%", icon: <Cpu className="w-3 h-3" /> },
  ];

  // Math.random() ને બદલે static values વાપરી છે જેથી Hydration Error ના આવે
  const codeLines = [
    "0x8f2b3 >> PROCESS_RECV [0.9421] >> SUCCESS",
    "0x1a4c9 >> NEURAL_SYNC [0.1242] >> ACTIVE",
    "0x9d2e1 >> DATA_SYNTH  [0.8821] >> SUCCESS",
    "0x4b1a2 >> AGENT_WORK  [0.4521] >> PENDING",
  ];

  return (
    <div className="relative group p-[1px] rounded-[32px] overflow-hidden">
      <div className="relative bg-[#05070A]/90 backdrop-blur-2xl rounded-[31px] border border-white/10 p-6 overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
            </div>
            <div className="h-4 w-px bg-white/10 mx-2" />
            <div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px] tracking-wider uppercase">
              <Terminal className="w-3 h-3" /> system.exec(&quot;azentic_core_v2&quot;)
            </div>
          </div>
          <div className="text-[10px] font-mono text-[#6366F1] animate-pulse">● SESSION_ACTIVE</div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="p-4 rounded-2xl border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#6366F1]/70">{stat.icon}</span>
                <p className="text-zinc-500 text-[9px] uppercase font-bold tracking-widest">{stat.label}</p>
              </div>
              <div className="flex items-baseline gap-1">
                <h3 className="text-2xl font-bold text-white tracking-tighter">{stat.value}</h3>
                <span className="text-[10px] font-mono text-zinc-600 uppercase">{stat.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Matrix Graph */}
        <div className="relative grid grid-cols-12 gap-2 h-40 bg-black/40 rounded-2xl border border-white/5 p-4 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] font-mono text-[8px] leading-tight p-2">
            {codeLines.map((line, i) => <div key={i}>{line}</div>)}
          </div>

          <div className="col-span-12 flex items-end justify-between gap-1.5 z-10">
            {[40, 70, 45, 90, 65, 80, 55, 95, 75, 60, 85, 40, 50].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: [`${h}%`, `${Math.min(100, h + 10)}%`, `${h}%`] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.05 }}
                className="flex-1 bg-gradient-to-t from-[#6366F1]/20 via-[#6366F1] to-cyan-400 rounded-t-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}