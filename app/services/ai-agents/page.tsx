"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InternalNav from "@/components/common/InternalNav";
import { motion } from "framer-motion";
import { Bot, Zap, ShieldCheck, ArrowRight, Target, Workflow } from "lucide-react";
import Link from "next/link";

export default function AIAgentsPage() {
  return (
    <main className="bg-[#030712] min-h-screen text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      <section id="intro" className="pt-48 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Autonomous Intelligence</span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85]">Autonomous <br/> <span className="text-zinc-600 text-outline-white uppercase">AI Agents.</span></h1>
            <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
              Moving beyond static automation. We build goal-oriented AI agents capable of multi-step reasoning, tool usage, and independent execution to solve complex business operations 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 pb-40">
        <aside className="lg:col-span-3"><InternalNav /></aside>
        <div className="lg:col-span-9 space-y-40">
          <section id="expertise" className="scroll-mt-40">
            <h2 className="text-4xl font-black uppercase mb-12 tracking-tighter">Agentic <span className="text-zinc-600">Capabilities.</span></h2>
            <div className="grid gap-6">
              {[
                { title: "Multi-Step Reasoning", desc: "Our agents can break down high-level goals into smaller tasks, plan their execution, and adjust their strategy based on real-time feedback." },
                { title: "Tool & API Integration", desc: "Autonomous interaction with your software ecosystem. Our agents can use APIs, read databases, and operate enterprise software just like a human team member." },
                { title: "24/7 Autonomous Operations", desc: "Deploy digital workers that never sleep. Our agents handle customer support, data processing, and system monitoring around the clock without human intervention." }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
          
          <section id="security" className="scroll-mt-40">
            <h2 className="text-4xl font-black uppercase mb-10">Safe & Managed.</h2>
            <p className="text-zinc-500 leading-relaxed">We implement rigorous Human in the loop safeguards and audit trails to ensure your AI agents operate within defined ethical and operational boundaries.</p>
          </section>

          <section id="faq" className="scroll-mt-40">
            <h2 className="text-4xl font-black uppercase mb-10 text-zinc-600">Frequently Asked.</h2>
            <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
              <p className="text-white font-bold mb-2">Can AI Agents handle sensitive data?</p>
              <p className="text-zinc-500 text-sm">Yes, we deploy agents in secure VPC environments with strict data encryption and zero-knowledge architectures.</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}