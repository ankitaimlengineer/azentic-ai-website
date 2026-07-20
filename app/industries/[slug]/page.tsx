"use client";
import React from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InternalNav from "@/components/common/InternalNav";
import { motion } from "framer-motion";
import { Zap, ArrowRight, BarChart3 } from "lucide-react";

// ડેટાનો પ્રકાર (Type) નક્કી કર્યો
interface IndustryDetail {
  title: string;
  desc: string;
  focus: string;
}

const industryData: Record<string, IndustryDetail> = {
  fintech: { title: "Fintech", desc: "Revolutionizing financial services with AI-driven security, automated fraud detection, and high-frequency trading algorithms.", focus: "Fraud Prevention, Algorithmic Trading, Credit Scoring" },
  healthcare: { title: "Healthcare Services", desc: "Deploying AI solutions for clinical workflows, predictive patient diagnostics, and secure health data management.", focus: "Diagnostic AI, Workflow Automation, Patient Data Analysis" },
  ecommerce: { title: "E-commerce & Retail", desc: "Building intelligent shopping experiences through personalized recommendation engines and automated supply chains.", focus: "Personalization, Inventory AI, Customer Sentiment" },
  manufacturing: { title: "Manufacturing", desc: "Engineering the smart factories of the future. Our AI models optimize production lines and ensure quality control.", focus: "Predictive Maintenance, Quality Control, Supply Chain" },
  saas: { title: "SaaS", desc: "Accelerating SaaS innovation. We act as an embedded AI-native team to build and scale modern software platforms.", focus: "Product Engineering, Scalability, AI Integration" },
  "real-estate": { title: "Real Estate", desc: "Transforming property markets with AI-powered valuation models and automated lead management.", focus: "Valuation Models, Lead Scoring, Smart Buildings" },
  education: { title: "Education", desc: "Empowering the future of learning with personalized AI platforms that adapt to student needs.", focus: "Adaptive Learning, Admin Automation" },
  "game-dev": { title: "Game Development", desc: "Pushing boundaries with AI-accelerated production pipelines and intelligent NPC behavior systems.", focus: "Procedural Content, AI NPCs, Pipeline Automation" }
};

export default function IndustryDetailPage() {
  const { slug } = useParams();
  const data = industryData[slug as string] || { title: "Industry Solution", desc: "Enterprise-grade intelligence for your market sector.", focus: "Strategic AI Deployment" };

  return (
    <main className="bg-[#030712] min-h-screen text-white font-sans selection:bg-[#6366F1]/30">
      <Navbar />
      <section className="pt-48 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#6366F1]/5 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#6366F1] font-black uppercase tracking-[0.4em] text-[10px] mb-8 block px-4 py-2 bg-[#6366F1]/5 border border-[#6366F1]/20 rounded-full w-fit">Industry Sector</span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85]">{data.title}.</h1>
            <p className="text-zinc-400 text-xl font-light leading-relaxed max-w-3xl">{data.desc}</p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 pb-40">
        <aside className="lg:col-span-3"><InternalNav /></aside>
        <div className="lg:col-span-9 space-y-40">
          <section id="expertise" className="scroll-mt-40">
            <h2 className="text-4xl font-black uppercase mb-12">Core <span className="text-zinc-600">Focus.</span></h2>
            <div className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5">
               <div className="flex items-center gap-6 mb-8">
                  <BarChart3 className="text-[#6366F1]" size={32} />
                  <h3 className="text-2xl font-bold italic flex items-center gap-3">Strategic Impact <Zap className="text-amber-500" size={20}/></h3>
               </div>
               <p className="text-zinc-400 text-lg font-light leading-relaxed italic">{data.focus}</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}