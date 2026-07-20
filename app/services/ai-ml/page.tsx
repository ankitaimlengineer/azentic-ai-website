"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InternalNav from "@/components/common/InternalNav";
import { Brain, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AIMLPage() {
  return (
    <main className="bg-[#030712] min-h-screen text-white font-sans selection:bg-[#6366F1]/30">
      <Navbar />
      
      {/* 1. INTRODUCTION SECTION */}
      <section id="intro" className="pt-48 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#6366F1]/5 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <span className="text-[#6366F1] font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Neural Solutions</span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85]">
              AI Development <br/> <span className="text-zinc-600 text-outline-white uppercase">Services.</span>
            </h1>
            <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
              We engineer intelligent systems that automate complex business decision-making. From custom LLMs to autonomous agents, we deliver the future of enterprise intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT WITH SIDEBAR NAVIGATION */}
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* SIDEBAR NAVIGATION (Col 3) */}
          <aside className="lg:col-span-3">
            <InternalNav />
          </aside>

          {/* CONTENT SECTIONS (Col 9) */}
          <div className="lg:col-span-9 space-y-40 pb-40">
            
            {/* AI SERVICES SECTION */}
            <section id="expertise" className="scroll-mt-40">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Expertise & <br/> <span className="text-zinc-600">Core Services.</span></h2>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "Generative AI & Fine-Tuning", desc: "We fine-tune Large Language Models on your proprietary data to create custom AI solutions that reflect your brand's unique voice and operational needs." },
                  { title: "RAG Architecture", desc: "Implementation of Retrieval-Augmented Generation to ensure your AI provides accurate, source-backed answers from your internal document ecosystems." },
                  { title: "Multi-Agent Systems", desc: "Orchestrating autonomous agents that work together to solve complex, multi-step workflows across your business applications." }
                ].map((item, i) => (
                  <div key={i} className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-[#6366F1]/20 transition-all">
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CUSTOMER PROOF SECTION */}
            <section id="proof" className="scroll-mt-40">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Customer <br/> <span className="text-zinc-600">Proof.</span></h2>
              <div className="p-12 rounded-[56px] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-white font-bold text-lg mb-4">FinTech Transformation</h4>
                    <p className="text-zinc-500 text-sm font-light leading-relaxed mb-6">Reduced document processing time by 85% for a leading global financial institution using autonomous AI agents.</p>
                    <Link href="/#portfolio" className="text-[#6366F1] font-bold text-xs uppercase tracking-widest flex items-center gap-2">View Case Study <ArrowRight size={14}/></Link>
                  </div>
                  <div className="flex items-center justify-center border-l border-white/5 pl-12">
                    <div className="text-5xl font-black text-white">85% <span className="text-xs block text-zinc-600 uppercase tracking-widest mt-2">Efficiency Increase</span></div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECURITY SECTION */}
            <section id="security" className="scroll-mt-40">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Security & <br/> <span className="text-zinc-600">Data Privacy.</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex gap-6">
                  <ShieldCheck className="text-[#6366F1] shrink-0" size={32} />
                  <div>
                    <h4 className="text-white font-bold mb-2 uppercase text-sm tracking-widest">Zero-Data Leakage</h4>
                    <p className="text-zinc-500 text-sm font-light">We ensure your enterprise data never trains public models, keeping your proprietary knowledge secure.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Zap className="text-[#6366F1] shrink-0" size={32} />
                  <div>
                    <h4 className="text-white font-bold mb-2 uppercase text-sm tracking-widest">SOC2 Compliance</h4>
                    <p className="text-zinc-500 text-sm font-light">Adhering to the highest industry standards for data handling and operational security.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* AI INSIGHTS SECTION */}
            <section id="insights" className="scroll-mt-40">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Intelligence <br/> <span className="text-zinc-600">Insights.</span></h2>
              <div className="space-y-6">
                <p className="text-zinc-500 text-lg font-light leading-relaxed">
                  The future of AI isn t just about answering questions its about execution. Azentic provides deep strategic insights to help you navigate the shift towards Agentic workflows and multi-modal intelligence.
                </p>
                <ul className="grid gap-4">
                  {["Future of Agentic AI", "ROI on LLM Implementation", "Scalability Architectures"].map((insight, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/60 font-bold text-xs uppercase tracking-widest border-b border-white/5 pb-4">
                      <CheckCircle2 size={16} className="text-[#6366F1]" /> {insight}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* FAQ SECTION */}
            <section id="faq" className="scroll-mt-40">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Common <br/> <span className="text-zinc-600">Questions.</span></h2>
              <div className="space-y-4">
                {[
                  { q: "How long does it take to deploy a custom LLM?", a: "Most Proof-of-Concepts are delivered in 4-6 weeks, with full production scaling in 3 months." },
                  { q: "Do you handle data migration?", a: "Yes, we build end-to-end data pipelines to securely feed your AI infrastructure." }
                ].map((faq, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                    <p className="text-white font-bold mb-3">{faq.q}</p>
                    <p className="text-zinc-500 text-sm font-light leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}