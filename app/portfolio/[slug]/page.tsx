"use client";
import React from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InternalNav from "@/components/common/InternalNav";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

// ૧. Interface નક્કી કર્યો
interface CaseStudyDetail {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  impact: string;
  tech: string[];
}

const projectsData: Record<string, CaseStudyDetail> = {
  "multi-agent-code-review": {
    title: "Multi-Agent Code Review System",
    client: "Global Tech Enterprise",
    challenge: "The client was struggling with slow manual code reviews, leading to security vulnerabilities and delayed shipping cycles.",
    solution: "We engineered a multi-agent ecosystem using LangGraph and CrewAI. One agent focuses on syntax, another on security, and a third on performance optimization.",
    impact: "Reduced code review time by 90% and identified 45% more critical bugs.",
    tech: ["LangGraph", "CrewAI", "Python", "GPT-4"]
  },
  "documents-qa-bot": {
    title: "Enterprise Document Q&A (RAG)",
    client: "Legal & Compliance Firm",
    challenge: "Managing thousands of PDF and DOCX files made it impossible for employees to find specific clauses quickly.",
    solution: "Azentic deployed a high-precision RAG pipeline using Pinecone and OpenAI providing source-backed answers with 99.9% accuracy.",
    impact: "Saved approximately 120 hours per week in document search and retrieval.",
    tech: ["Pinecone", "LangChain", "OpenAI", "Next.js"]
  }
};

export default function CaseStudyPage() {
  const { slug } = useParams();
  const data = projectsData[slug as string] || { title: "Success Story", client: "Confidential", challenge: "Information coming soon...", solution: "Engineering in progress.", impact: "High ROI Deployment", tech: ["AI", "Cloud"] };

  return (
    <main className="bg-[#030712] min-h-screen text-white font-sans selection:bg-[#6366F1]/30">
      <Navbar />
      <section className="pt-48 pb-20 px-6 relative overflow-hidden text-center lg:text-left">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#6366F1]/5 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#6366F1] font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Case Study</span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85]">{data.title}.</h1>
            <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest">Client: {data.client}</p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 pb-40">
        <aside className="lg:col-span-3"><InternalNav /></aside>
        <div className="lg:col-span-9 space-y-32">
          <section id="expertise" className="scroll-mt-40">
            <h2 className="text-4xl font-black uppercase mb-10 tracking-tighter">The <span className="text-zinc-600">Challenge.</span></h2>
            <p className="text-zinc-400 text-xl font-light leading-relaxed italic border-l-2 border-[#6366F1] pl-8">&quot;{data.challenge}&quot;</p>
          </section>

          <section id="process" className="scroll-mt-40">
            <h2 className="text-4xl font-black uppercase mb-10 tracking-tighter">The <span className="text-zinc-600">Solution.</span></h2>
            <div className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5">
               <p className="text-zinc-300 text-lg leading-relaxed font-light mb-12">{data.solution}</p>
               <div className="flex flex-wrap gap-3">
                  {data.tech.map((t) => (<span key={t} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/50">{t}</span>))}
               </div>
            </div>
          </section>

          <section id="proof" className="scroll-mt-40">
            <h2 className="text-4xl font-black uppercase mb-10 tracking-tighter text-[#6366F1]">The Impact.</h2>
            <div className="p-12 rounded-[48px] bg-[#6366F1] text-white">
               <Zap size={40} className="mb-6 opacity-50" />
               <p className="text-3xl font-black tracking-tighter leading-tight">{data.impact}</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}