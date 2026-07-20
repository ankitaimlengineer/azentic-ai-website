"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InternalNav from "@/components/common/InternalNav";
import { motion } from "framer-motion";
import { Sparkles, Image as ImageIcon, Type, PenTool, Database, ArrowRight } from "lucide-react";

export default function GenerativeAIPage() {
  return (
    <main className="bg-[#030712] min-h-screen text-white font-sans selection:bg-amber-500/30">
      <Navbar />
      <section id="intro" className="pt-48 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-amber-600/5 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-amber-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Creative Intelligence</span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85]">Generative <br/> <span className="text-zinc-600 text-outline-white uppercase">AI Solutions.</span></h1>
            <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
              Unleash the power of synthesis. We specialize in custom LLM training, high-fidelity image generation, and creative AI workflows that redefine content production for the enterprise.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 pb-40">
        <aside className="lg:col-span-3"><InternalNav /></aside>
        <div className="lg:col-span-9 space-y-40">
          <section id="expertise" className="scroll-mt-40">
            <h2 className="text-4xl font-black uppercase mb-12 tracking-tighter">Synthesis <span className="text-zinc-600">Expertise.</span></h2>
            <div className="grid gap-6">
              {[
                { title: "Custom LLM Training & Fine-Tuning", desc: "Don't settle for generic models. We fine-tune models like Llama 3 and GPT-4 on your specific datasets to ensure absolute brand and knowledge alignment." },
                { title: "Enterprise Image & Visual Generation", desc: "Automate creative workflows. We build custom Stable Diffusion and Midjourney-integrated pipelines for automated marketing, design, and visual prototyping." },
                { title: "Advanced Text-to-Speech (TTS)", desc: "Create your brand's unique voice. We develop high-fidelity synthetic voices for narrations, customer interaction, and multi-modal content creation." }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="tech" className="scroll-mt-40">
            <h2 className="text-4xl font-black uppercase mb-10">The Stack.</h2>
            <div className="flex flex-wrap gap-4">
               {["OpenAI", "Midjourney", "Stable Diffusion", "Llama 3", "DALL-E", "Anthropic"].map((t) => (
                 <span key={t} className="px-6 py-2 rounded-full border border-white/10 text-zinc-500 font-bold text-xs uppercase tracking-widest">{t}</span>
               ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}