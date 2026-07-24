"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const projects = [
  {
    title: "documents-qa-bot",
    slug: "documents-qa-bot",
    tag: "Enterprise RAG",
    desc: "Enterprise-grade AI document intelligence platform powered by Retrieval-Augmented Generation (RAG), enabling contextual question answering, semantic search, and knowledge extraction from PDF documents.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
    status: "Active"
  },
  {
    title: "multi-agent-code-review",
    slug: "multi-agent-code-review",
    tag: "Agentic AI",
    desc: "Autonomous multi-agent code review system where specialized AI agents collaborate to detect issues, improve code quality, optimize performance, and generate intelligent review reports.",
    image: "https://images.unsplash.com/photo-1560732488-6b0df240254a?q=80&w=1000",
    status: "Active"
  },
  {
    title: "AI-Resume-Analyzer",
    slug: "ai-resume-analyzer",
    tag: "LLM Application",
    desc: "AI-powered resume intelligence platform that evaluates ATS compatibility, analyzes professional profiles, identifies skill gaps, and delivers personalized career recommendations.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
    status: "Active"
  },
  {
    title: "school-admission-rag",
    slug: "school-admission-rag",
    tag: "Conversational AI",
    desc: "Intelligent admission assistant built with RAG architecture, enabling accurate, context-aware responses to school admission queries using enterprise knowledge retrieval and AI reasoning.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1000",
    status: "Active"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-[#030712] scroll-mt-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
            Strategic <span className="text-zinc-600">Deployments.</span>
          </h2>
          <p className="text-zinc-500 text-xl font-light max-w-2xl">Proven AI architectures driving real-world business outcomes.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[500px] rounded-[56px] overflow-hidden border border-white/5 bg-white/[0.01]"
            >
              <Image src={p.image} alt={p.title} fill className="object-cover opacity-20 group-hover:opacity-40 transition-all duration-1000" />
              <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="p-4 bg-[#6366F1]/10 rounded-2xl text-[#6366F1]"><Sparkles size={20} /></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">{p.tag}</span>
                </div>
                <div>
                  <h3 className="text-4xl font-black text-white mb-6 tracking-tighter group-hover:text-[#6366F1] transition-colors">{p.title}</h3>
                  <p className="text-zinc-400 text-lg mb-10 max-w-md">{p.desc}</p>
                  {p.status === "Active" ? (
                    <Link href={`/portfolio/${p.slug}`} className="inline-flex items-center gap-3 text-white font-bold uppercase text-[10px] tracking-[0.3em] group/btn">
                      Explore Case Study <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                  ) : (
                    <span className="text-zinc-700 font-bold uppercase text-[10px] tracking-[0.3em]">Phase: Technical Validation</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}