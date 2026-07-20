"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InternalNav from "@/components/common/InternalNav";
import { motion } from "framer-motion";
import { MessageSquare, Mic, Globe, Languages, Headset, ArrowRight } from "lucide-react";

export default function VoiceChatbotsPage() {
  return (
    <main className="bg-[#030712] min-h-screen text-white font-sans selection:bg-pink-500/30">
      <Navbar />
      <section id="intro" className="pt-48 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-pink-600/5 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Conversational AI</span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85]">Voice and <br/> <span className="text-zinc-600 text-outline-white uppercase">Chatbots.</span></h1>
            <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
              Elevate customer experiences with Natural Language Understanding (NLU). We build human-like conversational interfaces that understand intent, emotion, and context in any language.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 pb-40">
        <aside className="lg:col-span-3"><InternalNav /></aside>
        <div className="lg:col-span-9 space-y-40">
          <section id="expertise" className="scroll-mt-40">
            <h2 className="text-4xl font-black uppercase mb-12 tracking-tighter">Conversational <span className="text-zinc-600">Power.</span></h2>
            <div className="grid gap-6">
              {[
                { title: "Advanced NLU & Intent Recognition", desc: "Beyond simple keyword matching. Our chatbots understand the underlying intent and nuances of human language, providing accurate and helpful responses." },
                { title: "Multi-lingual Support", desc: "Break language barriers. We deploy conversational systems that can communicate fluently in over 50+ languages, including local dialects." },
                { title: "Human-like Voice Synthesis", desc: "Leverage state-of-the-art Text-to-Speech (TTS) and Speech-to-Text (STT) technologies to create voice assistants that sound natural and empathetic." }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-pink-500/30 transition-all">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="insights" className="scroll-mt-40">
             <h2 className="text-4xl font-black uppercase mb-10">Smart Engagement.</h2>
             <p className="text-zinc-500 leading-relaxed">Our chatbots integrate with CRM, WhatsApp, and Social Media to provide a unified, omni-channel customer experience that drives loyalty and conversion.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}