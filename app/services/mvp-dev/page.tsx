"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InternalNav from "@/components/common/InternalNav";
import { motion } from "framer-motion";
import { Rocket, Target, Zap } from "lucide-react";

export default function MVPDevPage() {
  return (
    <main className="bg-[#030712] min-h-screen text-white font-sans selection:bg-orange-500/30">
      <Navbar />
      <section id="intro" className="pt-48 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-orange-600/5 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Rapid Launch</span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85]">MVP <br/> <span className="text-zinc-600 text-outline-white uppercase">Development.</span></h1>
            <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">From zero to launch in weeks. We help you validate your core vision through rapid, production-ready Minimum Viable Products.</p>
          </motion.div>
        </div>
      </section>
      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 pb-40">
        <aside className="lg:col-span-3"><InternalNav /></aside>
        <div className="lg:col-span-9 space-y-40">
          <section id="expertise" className="scroll-mt-40">
            <h2 className="text-4xl font-black uppercase mb-12">Strategic Launch.</h2>
            <div className="grid gap-6">
              {[
                { title: "Lean Architecture", desc: "Prioritizing the highest-ROI features to get your product into users' hands as fast as possible." },
                { title: "Iterative Refinement", desc: "A data-led approach to product building that evolves based on real user feedback loops." },
                { title: "Scalable Core", desc: "We build MVPs that are lean, but architecturally sound, so you don't have to rewrite when you scale." }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-orange-500/20 transition-all">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}