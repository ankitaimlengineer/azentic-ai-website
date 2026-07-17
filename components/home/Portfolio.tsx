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
  },
  {
  title: "Enterprise AI Copilot",
  tag: "Coming Soon",
  desc: "A secure enterprise AI copilot that assists employees with document search, email drafting, meeting summaries, knowledge retrieval, workflow automation, and intelligent decision support.",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "Enterprise Knowledge Intelligence Platform",
  tag: "Coming Soon",
  desc: "An enterprise knowledge platform powered by RAG, vector databases, and LLMs to deliver accurate answers across documents, policies, manuals, and internal business knowledge.",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "Autonomous Business Operations Platform",
  tag: "Coming Soon",
  desc: "A next-generation AI platform that automates end-to-end business operations using intelligent agents, workflow orchestration, and autonomous decision making.",
  image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "Multi-Agent Enterprise Intelligence",
  tag: "Coming Soon",
  desc: "A collaborative AI agent ecosystem where HR, Finance, Sales, Marketing, and Operations agents work together to automate enterprise processes.",
  image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "AI Customer Experience Platform",
  tag: "Coming Soon",
  desc: "An omnichannel AI platform delivering intelligent customer support across chat, voice, email, WhatsApp, and social media with personalized experiences.",
  image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "Executive Decision Intelligence",
  tag: "Coming Soon",
  desc: "An AI-powered executive dashboard providing predictive analytics, strategic insights, KPI monitoring, and real-time business intelligence.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "Intelligent Document Processing",
  tag: "Coming Soon",
  desc: "An enterprise document intelligence solution that extracts, classifies, validates, and analyzes contracts, invoices, forms, and business documents.",
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "Enterprise Workflow Automation",
  tag: "Coming Soon",
  desc: "A low-code AI workflow platform that automates approvals, tasks, notifications, and enterprise business processes with intelligent orchestration.",
  image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "AI Financial Intelligence Suite",
  tag: "Coming Soon",
  desc: "A financial AI platform offering forecasting, budgeting, cash flow analysis, anomaly detection, and automated financial reporting.",
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "Enterprise Fraud Detection System",
  tag: "Coming Soon",
  desc: "A machine learning platform that detects fraud, suspicious activities, and financial risks in real time using predictive intelligence.",
  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "AI Cyber Defense Center",
  tag: "Coming Soon",
  desc: "An AI-driven cybersecurity platform providing threat detection, incident response, security monitoring, and predictive risk analysis.",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "Enterprise Identity Intelligence",
  tag: "Coming Soon",
  desc: "A smart identity management platform for authentication, access governance, behavioral analytics, and enterprise security.",
  image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "Supply Chain Intelligence Platform",
  tag: "Coming Soon",
  desc: "An AI platform optimizing procurement, logistics, inventory, warehouse management, and demand forecasting for global enterprises.",
  image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "Smart Manufacturing Intelligence",
  tag: "Coming Soon",
  desc: "An Industry 4.0 platform that enables predictive maintenance, quality inspection, production optimization, and factory intelligence.",
  image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "Healthcare Intelligence Platform",
  tag: "Coming Soon",
  desc: "A secure AI platform for hospitals featuring clinical assistance, medical document analysis, patient support, and healthcare automation.",
  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "Banking Intelligence Platform",
  tag: "Coming Soon",
  desc: "A banking AI solution providing fraud prevention, customer insights, credit risk assessment, compliance monitoring, and intelligent automation.",
  image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "Legal Intelligence Platform",
  tag: "Coming Soon",
  desc: "An enterprise legal AI solution for contract review, compliance analysis, legal research, document drafting, and risk management.",
  image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "Enterprise HR Intelligence",
  tag: "Coming Soon",
  desc: "A comprehensive HR platform for talent acquisition, resume screening, workforce analytics, onboarding, and employee engagement.",
  image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "AI Research Intelligence Platform",
  tag: "Coming Soon",
  desc: "An AI research platform that performs deep web research, market analysis, competitive intelligence, and automated report generation.",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "Enterprise Data Intelligence Cloud",
  tag: "Coming Soon",
  desc: "A unified AI platform for enterprise data integration, analytics, visualization, predictive modeling, and intelligent insights.",
  image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "Smart City Intelligence Platform",
  tag: "Coming Soon",
  desc: "A smart city platform using AI for traffic management, public safety, energy optimization, and urban infrastructure monitoring.",
  image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "Retail Intelligence Platform",
  tag: "Coming Soon",
  desc: "An AI retail solution providing demand forecasting, personalized recommendations, customer analytics, and inventory optimization.",
  image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "AI Voice Agent Platform",
  tag: "Coming Soon",
  desc: "A human-like conversational voice AI platform capable of handling customer calls, bookings, support, and enterprise communication.",
  image: "https://images.unsplash.com/photo-1516321310764-8d4f0d5b1d57?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "Enterprise API Integration Hub",
  tag: "Coming Soon",
  desc: "A centralized platform connecting enterprise applications, AI services, databases, CRMs, ERPs, and third-party APIs securely.",
  image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
  github: "#",
  demo: "#"
},
{
  title: "Azentic AI Nexus Platform",
  tag: "Coming Soon",
  desc: "The flagship enterprise AI ecosystem combining copilots, autonomous agents, workflow automation, knowledge intelligence, analytics, voice AI, and enterprise security into one unified platform.",
  image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80",
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