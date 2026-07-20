"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles, Globe } from "lucide-react";

interface Project {
  title: string;
  slug: string;
  tag: string;
  desc: string;
  image: string;
  demo: string;
  status: "Active" | "Soon";
}

const projects: Project[] = [
  {
    title: "Multi-Agent Code Review",
    slug: "multi-agent-code-review",
    tag: "LangGraph + CrewAI",
    desc: "Intelligent multi-agent system that reviews source code and detects logic bugs autonomously.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
    demo: "#",
    status: "Active"
  },
  {
    title: "Document Q&A Bot",
    slug: "documents-qa-bot",
    tag: "RAG + LangChain",
    desc: "AI-powered Document Q&A system for PDF, DOCX, and TXT files with 99.9% source accuracy.",
    image: "https://images.unsplash.com/photo-1560732488-6b0df240254a?q=80&w=1000",
    demo: "#",
    status: "Active"
  },
  {
    title: "Enterprise AI Copilot",
    slug: "enterprise-ai-copilot",
    tag: "Coming Soon",
    desc: "Secure enterprise AI assistant with RAG, multi-agent workflows, and business automation.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
    demo: "#",
    status: "Soon"
  },
  {
    title: "AI Customer Support Platform",
    slug: "ai-customer-support-platform",
    tag: "Coming Soon",
    desc: "Omnichannel AI customer support platform with chatbot, ticketing, and human handoff.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1000&q=80",
    demo: "#",
    status: "Soon"
  },
  {
    title: "AI Voice Agent",
    slug: "ai-voice-agent",
    tag: "Coming Soon",
    desc: "AI-powered voice assistant for inbound and outbound calls with real-time understanding.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    demo: "#",
    status: "Soon"
  },
  {
    title: "AI WhatsApp Automation",
    slug: "ai-whatsapp-automation",
    tag: "Coming Soon",
    desc: "Automate WhatsApp conversations, lead generation, and appointment booking seamlessly.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80",
    demo: "#",
    status: "Soon"
  },
  {
    title: "AI Sales Copilot",
    slug: "ai-sales-copilot",
    tag: "Coming Soon",
    desc: "AI assistant for sales teams with lead scoring, email generation, and CRM insights.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80",
    demo: "#",
    status: "Soon"
  },
  {
    title: "AI Document Intelligence",
    slug: "ai-document-intelligence",
    tag: "Coming Soon",
    desc: "Extract, analyze, and search enterprise documents using advanced OCR and LLMs.",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1000&q=80",
    demo: "#",
    status: "Soon"
  },
  {
    title: "AI Workflow Automation",
    slug: "ai-workflow-automation",
    tag: "Coming Soon",
    desc: "Automate complex business workflows using intelligent AI agents and task orchestration.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
    demo: "#",
    status: "Soon"
  }
];

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="py-32 bg-[#030712] scroll-mt-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
            Case <span className="text-zinc-600 text-outline-white">Studies.</span>
          </h2>
          <p className="text-zinc-500 text-xl font-light max-w-2xl">
            Strategic AI deployments and architectural breakthroughs across global enterprises.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px]">
          <AnimatePresence mode="wait">
            {currentProjects.map((p, i) => (
              <motion.div 
                key={`${currentPage}-${p.slug}`} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative h-[580px] rounded-[56px] overflow-hidden border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-700"
              >
                <Image src={p.image} alt={p.title} fill className="object-cover opacity-20 group-hover:opacity-10 transition-all duration-1000 group-hover:scale-110" />
                
                <div className="absolute inset-0 p-10 md:p-12 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-[#6366F1] backdrop-blur-xl">
                       <Sparkles size={20} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                      {p.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl font-black text-white mb-6 tracking-tighter leading-tight group-hover:text-[#6366F1] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-zinc-500 text-sm font-light mb-10 line-clamp-3 leading-relaxed">
                      {p.desc}
                    </p>
                    
                    {p.status === "Active" ? (
                      <div className="flex flex-col gap-3">
                        <Link 
                          href={`/portfolio/${p.slug}`}
                          className="w-full py-5 bg-white text-black rounded-[24px] font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#6366F1] hover:text-white transition-all shadow-2xl"
                        >
                          View Case Study <ArrowRight size={16} />
                        </Link>
                        {p.demo !== "#" && (
                          <a href={p.demo} target="_blank" className="w-full py-4 bg-white/5 border border-white/10 rounded-[20px] text-zinc-400 font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:text-white transition-all">
                             <Globe size={14} /> Live Demo
                          </a>
                        )}
                      </div>
                    ) : (
                      <div className="py-4 border-t border-white/5 italic text-zinc-700 text-[10px] tracking-widest font-black uppercase">
                         Case Study in Production
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="mt-24 flex justify-center items-center">
          <div className="flex items-center bg-white/[0.02] px-6 py-4 rounded-full border border-white/10 backdrop-blur-xl shadow-2xl">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 text-sm font-black ${
                  currentPage === number 
                  ? "bg-white text-black scale-110 shadow-[0_0_30px_rgba(255,255,255,0.2)]" 
                  : "text-white/30 hover:text-white"
                }`}
              >
                {number}
              </button>
            ))}

            {currentPage < totalPages && (
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                className="flex items-center gap-3 ml-8 text-white font-black uppercase text-[10px] tracking-[0.3em] hover:text-[#6366F1] transition-all group"
              >
                Next <ArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}