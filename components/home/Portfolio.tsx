"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const ExternalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const projects = [
  {
    title: "Multi-Agent Code Review",
    tag: "LangGraph + CrewAI",
    desc: "Intelligent multi-agent system that reviews source code and detects bugs.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
    github: "https://github.com/ankitaimlengineer/multi-agent-code-review.git", 
    demo: "#"
  },
  {
    title: "Document Q&A Bot",
    tag: "RAG + LangChain",
    desc: "AI-powered Document Q&A system for PDF, DOCX, and TXT files.",
    image: "https://images.unsplash.com/photo-1560732488-6b0df240254a?q=80&w=1000",
    github: "https://github.com/ankitaimlengineer/documents-qa-bot.git", 
    demo: "#"
  },
  {
    title: "Enterprise AI Copilot",
    tag: "Coming Soon",
    desc: "Secure enterprise AI copilot for document search and workflow automation.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
    github: "#",
    demo: "#"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-[#030712]">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-20">Neural <span className="text-zinc-500">Repositories.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="group relative h-[550px] rounded-[48px] overflow-hidden border border-white/5 bg-white/[0.02]">
              <Image src={p.image} alt={p.title} fill className="object-cover opacity-40 group-hover:opacity-30 transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="p-4 bg-black/50 rounded-2xl text-white"><GithubIcon /></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 bg-white/5 px-4 py-2 rounded-full border border-white/10">{p.tag}</span>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-4">{p.title}</h3>
                  <p className="text-zinc-400 text-sm font-light mb-8 line-clamp-3">{p.desc}</p>
                  
                  {/* શરત: જો Coming Soon હોય તો બટન્સ ના બતાવો */}
                  {p.tag !== "Coming Soon" && (
                    <div className="flex items-center gap-3">
                      <a href={p.github} target="_blank" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-black rounded-2xl font-bold text-xs hover:bg-[#6366F1] hover:text-white transition-all">
                        <GithubIcon /> Code
                      </a>
                      <a href={p.demo} target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-white/10">
                        <ExternalIcon />
                      </a>
                    </div>
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