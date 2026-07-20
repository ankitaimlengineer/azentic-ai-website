"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InternalNav from "@/components/common/InternalNav";
import { motion } from "framer-motion";
import { Settings2, Activity, Database, ShieldCheck, Zap, Layers, RefreshCw } from "lucide-react";

export default function MLOpsPage() {
  return (
    <main className="bg-[#030712] min-h-screen text-white font-sans selection:bg-violet-500/30">
      <Navbar />
      
      {/* Introduction Section */}
      <section id="intro" className="pt-48 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-violet-600/5 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-violet-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Operational Excellence</span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85]">MLOps & AI <br/> <span className="text-zinc-600 text-outline-white uppercase">Integration.</span></h1>
            <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
              Bridge the gap between research and reality. We build the industrial-grade pipelines required to deploy, monitor, and scale machine learning models in high-stakes production environments.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 pb-40">
        {/* Left Sidebar Navigation */}
        <aside className="lg:col-span-3">
          <InternalNav />
        </aside>

        {/* Right Content Sections */}
        <div className="lg:col-span-9 space-y-40">
          
          {/* Detailed Expertise Section */}
          <section id="expertise" className="scroll-mt-40">
            <h2 className="text-4xl font-black uppercase mb-12 tracking-tighter">Operational <span className="text-zinc-600">Infrastructure.</span></h2>
            <div className="grid gap-6">
              {[
                { 
                    title: "Continuous Delivery for ML (CD4ML)", 
                    desc: "Automate the entire lifecycle of your models. We implement CI/CD pipelines specifically for AI, ensuring that every model update is tested, validated, and deployed with zero downtime." 
                },
                { 
                    title: "Monitoring & Drift Detection", 
                    desc: "AI models degrade over time. We build real-time monitoring systems that track model performance, detect data drift, and alert your team before the degradation affects your business." 
                },
                { 
                    title: "Scalable Inference Architectures", 
                    desc: "Handle millions of requests without breaking. We design high-performance serverless and containerized inference layers using Kubernetes to ensure your AI scales with your user base." 
                }
              ].map((item, i) => (
                <div key={i} className="p-12 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-all duration-500">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Security & Reliability */}
          <section id="security" className="scroll-mt-40">
             <h2 className="text-4xl font-black uppercase mb-10 tracking-tighter">Enterprise <span className="text-zinc-600">Reliability.</span></h2>
             <div className="flex gap-8 p-10 bg-white/[0.01] border border-white/10 rounded-[40px]">
                <ShieldCheck className="text-violet-500 shrink-0" size={32} />
                <p className="text-zinc-400 font-light leading-relaxed">
                  We integrate AI into your existing IT infrastructure while adhering to strict security protocols. Every model we deploy is versioned, auditable, and compliant with enterprise security standards.
                </p>
             </div>
          </section>

          {/* Tech Stack for MLOps */}
          <section id="tech" className="scroll-mt-40">
            <h2 className="text-4xl font-black uppercase mb-12 tracking-tighter">The MLOps <span className="text-zinc-600">Stack.</span></h2>
            <div className="flex flex-wrap gap-4">
               {["Kubernetes", "Docker", "MLflow", "Kubeflow", "GitHub Actions", "Terraform", "Weights & Biases"].map((t) => (
                 <span key={t} className="px-8 py-3 rounded-full border border-white/5 bg-white/[0.02] text-zinc-500 font-bold text-xs uppercase tracking-[0.2em]">{t}</span>
               ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="scroll-mt-40">
            <h2 className="text-4xl font-black uppercase mb-10 text-zinc-600 tracking-tighter">Common Questions.</h2>
            <div className="space-y-4">
              <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5">
                <p className="text-white font-bold mb-2">Why is MLOps important?</p>
                <p className="text-zinc-500 text-sm leading-relaxed">Without MLOps, AI models often remain as research projects. MLOps ensures they become scalable, reliable, and maintainable software products.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}