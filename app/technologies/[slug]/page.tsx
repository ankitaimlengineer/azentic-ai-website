"use client";
import React from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { 
  Zap, Shield, ArrowRight, Database, Globe, Layers, Code, 
  Cloud, Cpu, Sparkles, Terminal, Smartphone, Activity, 
  HardDrive, RefreshCw, Box, Network, Scale 
} from "lucide-react";
import Link from "next/link";

interface TechDetail {
  title: string;
  desc: string;
  use: string;
  icon: React.ReactNode;
  strategy: string;
}

const techData: Record<string, TechDetail> = {
  // AI & DATA
  python: { 
    title: "Python", 
    desc: "The absolute standard for modern AI and high-performance computing. We leverage Python's rich ecosystem—including PyTorch for neural modeling, scikit-learn for traditional ML, and FastAPI for ultra-low-latency deployment. Its versatility allows us to handle everything from heavy data processing to building complex backend logic for autonomous agents.", 
    use: "Neural Architectures, Distributed Data Processing, MLOps Backend",
    icon: <Code className="text-[#6366F1]" />,
    strategy: "Our strategy focuses on writing highly optimized, type-safe Python code that ensures seamless integration between mathematical models and production-grade software."
  },
  langchain: { 
    title: "LangChain", 
    desc: "The architectural bridge that transforms Large Language Models from simple text predictors into sophisticated reasoning engines. We use LangChain to orchestrate complex cognitive workflows, manage long-term state across conversations, and build autonomous agents that can intelligently navigate and operate disparate enterprise software ecosystems.", 
    use: "LLM Orchestration, Agentic Chains, RAG Workflows",
    icon: <Layers className="text-[#6366F1]" />,
    strategy: "We build modular, modularized AI chains that allow for persistent memory and reliable decision-making in high-stakes business environments."
  },
  openai: { 
    title: "OpenAI / GPT-4", 
    desc: "The industry benchmark for reasoning-intensive Generative AI. We integrate GPT-4 and Claude 3.5 architectures to build enterprise-grade cognitive systems. Our implementation goes beyond basic API integration; we architect multi-modal pipelines that handle everything from structured data extraction to human-level reasoning and complex decision support.", 
    use: "Cognitive Automation, Complex Reasoning, Multi-modal UI",
    icon: <Sparkles className="text-[#6366F1]" />,
    strategy: "Our focus is on implementing sophisticated prompt engineering and source-backed retrieval systems to ensure 99.9% accuracy and zero-hallucination results."
  },
  pytorch: { 
    title: "TensorFlow / PyTorch", 
    desc: "Industrial-grade neural computing. We utilize PyTorch for its dynamic computational graph, allowing us to build and iterate on bespoke deep learning models for computer vision, time-series forecasting, and proprietary natural language processing tasks. This ensures maximum hardware acceleration and flexibility for custom AI training.", 
    use: "Custom Model Training, Deep Learning Research, Predictive Modeling",
    icon: <Cpu className="text-[#6366F1]" />,
    strategy: "We utilize these frameworks to train models on proprietary enterprise data while maintaining strict data isolation and performance benchmarks."
  },
  pinecone: { 
    title: "Pinecone (Vector DB)", 
    desc: "The long-term memory for intelligent systems. Pinecone's specialized high-dimensional semantic indexing allows our AI models to retrieve relevant business context from millions of documents in milliseconds. This is critical for building RAG (Retrieval-Augmented Generation) systems that are fast, scalable, and secure.", 
    use: "Semantic Search, Persistent AI Memory, Knowledge Retrieval",
    icon: <Database className="text-[#6366F1]" />,
    strategy: "By designing optimized embedding pipelines, we enable AI to access 'hallucination-free' knowledge directly from your private enterprise data silo."
  },

  // FRAMEWORKS
  react: { 
    title: "Next.js / React", 
    desc: "Performance-first frontend engineering. We build neural-native user interfaces using Next.js 15, ensuring sub-second initial loads and seamless real-time AI streaming responses. Our architecture utilizes Server-Side Rendering (SSR) and Edge-Functions to provide high-concurrency AI dashboards that are globally accessible.", 
    use: "Low-latency Dashboards, AI Streaming UI, Enterprise SaaS Frontend",
    icon: <Globe className="text-[#6366F1]" />,
    strategy: "We prioritize user experience by building reactive, fluid interfaces that handle complex data visualizations and real-time AI interactions effortlessly."
  },
  nodejs: { 
    title: "Node.js / Express", 
    desc: "High-concurrency backend scaling. We leverage Node.js's event-driven, non-blocking I/O to build the orchestration layer between AI models and internal business systems. This architecture is perfect for handling thousands of simultaneous requests required for real-time conversational agents and data pipelines.", 
    use: "Real-time Microservices, API Gateways, Webhook Orchestration",
    icon: <Terminal className="text-[#6366F1]" />,
    strategy: "Our backends are designed for horizontal scalability, ensuring your AI services remain responsive as your user base and data volume grow."
  },

  // INFRASTRUCTURE
  aws: { 
    title: "AWS / Azure", 
    desc: "The bedrock of global-scale neural infrastructure. We design resilient, multi-region cloud architectures on AWS Bedrock and SageMaker. Our focus is on zero-trust security protocols, automated elastic scaling, and industrial-grade compliance (SOC2/GDPR), ensuring your AI services are always operational and secure.", 
    use: "Global Infrastructure, Elastic Computing, Cloud Security",
    icon: <Cloud className="text-[#6366F1]" />,
    strategy: "We architect infrastructure that automatically scales with demand while minimizing idle costs through intelligent serverless strategies."
  },
  docker: { 
    title: "Docker / Kubernetes", 
    desc: "Operational consistency and MLOps. We containerize every component of the AI lifecycle to ensure absolute environment consistency from local development to cloud production. Using Kubernetes (K8s), we orchestrate these services to provide auto-healing, load balancing, and zero-downtime updates.", 
    use: "Service Orchestration, Containerization, High Availability",
    icon: <HardDrive className="text-[#6366F1]" />,
    strategy: "Our goal is 'Build Once, Run Anywhere,' ensuring that complex AI deployments are predictable, stable, and easily maintainable."
  },
  mongodb: { 
    title: "PostgreSQL / MongoDB", 
    desc: "Robust data persistence layer. We implement hybrid database strategies—choosing PostgreSQL for transactional integrity and relational data, while utilizing MongoDB for flexible, unstructured AI datasets. This ensures optimal performance for both metadata management and high-volume data ingestion.", 
    use: "Relational Persistence, Document Storage, Unstructured Data Handling",
    icon: <Database className="text-[#6366F1]" />,
    strategy: "We design database schemas specifically optimized for high-read throughput required by modern business intelligence and AI models."
  },
  cicd: { 
    title: "CI / CD Pipelines", 
    desc: "High-velocity delivery protocols. We automate the entire testing and deployment lifecycle using GitHub Actions and automated MLOps pipelines. This ensures that every line of code—from frontend UI to neural model logic—is rigorously validated before it ever reaches your production users.", 
    use: "Automated Deployment, Technical Quality Assurance, MLOps",
    icon: <RefreshCw className="text-[#6366F1]" />,
    strategy: "We prioritize security and stability by implementing automated 'canary' deployments and rollback strategies for all mission-critical AI services."
  }
};

export default function TechDetailPage() {
  const { slug } = useParams();
  const data = techData[slug as string] || { 
    title: "Technology Integration", 
    desc: "This technical module is part of our strategic intelligence stack. We are constantly updating our documentation to reflect the latest neural architecture advancements.", 
    use: "Enterprise Scalability",
    icon: <Zap className="text-[#6366F1]" />,
    strategy: "Engineering Excellence."
  };

  return (
    <main className="bg-[#030712] min-h-screen text-white font-sans selection:bg-[#6366F1]/30">
      <Navbar />
      
      {/* Dynamic Hero Section */}
      <section className="pt-48 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#6366F1]/5 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#6366F1] font-black uppercase tracking-[0.5em] text-[10px] mb-8 block px-4 py-2 bg-[#6366F1]/5 border border-[#6366F1]/20 rounded-full w-fit">
              Neural Strategy
            </span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85]">
              {data.title}.
            </h1>
            <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
              Understanding the technical nuances and strategic value of {data.title} in the modern autonomous enterprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Deep Information Grid */}
      <div className="container mx-auto max-w-6xl px-6 pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-white/10 pt-20">
           
           {/* Primary Info (Left) */}
           <div className="lg:col-span-8 space-y-16">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-[#6366F1]">
                   {data.icon}
                   <h2 className="text-3xl font-black uppercase tracking-tighter">The Engineering Perspective.</h2>
                </div>
                <p className="text-zinc-400 text-xl font-light leading-relaxed">
                  {data.desc}
                </p>
              </div>

              <div className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-20"><Network size={40} /></div>
                 <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                   <Shield size={24} className="text-[#6366F1]" /> Strategic Integration
                 </h3>
                 <p className="text-zinc-500 text-lg font-light leading-relaxed">
                   {data.strategy}
                 </p>
              </div>
           </div>

           {/* Metrics & Specs (Right Sidebar) */}
           <div className="lg:col-span-4 space-y-8">
              <div className="bg-gradient-to-br from-[#6366F1]/10 to-transparent p-10 rounded-[48px] border border-white/5">
                 <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-6">Industrial Applications</p>
                 <p className="text-white text-lg font-bold leading-relaxed">{data.use}</p>
              </div>

              <div className="p-10 rounded-[48px] bg-white/[0.01] border border-white/5">
                 <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] mb-8">Performance Score</p>
                 <div className="space-y-6">
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                          <span>Scalability</span>
                          <span>99%</span>
                       </div>
                       <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-[#6366F1] w-[99%]" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                          <span>Security</span>
                          <span>100%</span>
                       </div>
                       <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 w-[100%]" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Global Call to Action */}
      <section className="py-20 px-6 container mx-auto max-w-5xl">
         <div className="p-16 md:p-24 rounded-[70px] bg-white text-black text-center relative overflow-hidden shadow-[0_40px_100px_rgba(255,255,255,0.1)]">
            <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-none">Ready to Build with <br/> {data.title}?</h2>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-4 bg-black text-white px-14 py-6 rounded-full font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-all shadow-2xl"
            >
              Start Neural Scoping <ArrowRight size={20}/>
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}