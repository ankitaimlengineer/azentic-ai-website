"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Database, Cloud, BarChart3, Workflow, ArrowRight, ShieldCheck, Zap, Globe, Share2 } from "lucide-react";

const capabilities = [
  { 
    title: "Data Engineering & Pipelines", 
    desc: "We build robust ETL/ELT pipelines that automate the flow of data from disparate sources into centralized repositories. Our systems ensure high data quality, reliability, and sub-second latency for real-time processing.",
    icon: <Workflow className="text-purple-500" size={28} />
  },
  { 
    title: "Cloud Migration & Architecture", 
    desc: "Modernize your legacy infrastructure with our cloud-native migration services. We specialize in architecting secure, scalable ecosystems on AWS, Azure, and Google Cloud Platform tailored for high-availability.",
    icon: <Cloud className="text-purple-500" size={28} />
  },
  { 
    title: "Data Warehousing & Lakehouse", 
    desc: "Design and implement high-performance data warehouses using Snowflake, BigQuery, and Databricks. We enable your business to store and analyze petabytes of data with ease and cost-efficiency.",
    icon: <Database className="text-purple-500" size={28} />
  },
  { 
    title: "Real-time Business Intelligence", 
    desc: "Transform raw data into actionable insights. We develop custom dashboards and analytics engines that empower your leadership to make data-driven decisions based on live business metrics.",
    icon: <BarChart3 className="text-purple-500" size={28} />
  }
];

const techStack = ["AWS", "Azure", "Snowflake", "Databricks", "BigQuery", "Apache Kafka", "Terraform", "Spark"];

export default function CloudDataPage() {
  return (
    <main className="bg-[#030712] min-h-screen text-white font-sans selection:bg-purple-500/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-purple-600/10 blur-[130px] rounded-full -z-10" />
        
        <div className="container mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <span className="text-purple-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block px-4 py-2 bg-purple-500/5 border border-purple-500/20 rounded-full w-fit">
              Data & Infrastructure
            </span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85]">
              Cloud & Data <br/> <span className="text-zinc-600 text-outline-white">Engineering.</span>
            </h1>
            <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
              Building the foundation for intelligent enterprises. We engineer scalable data architectures and secure cloud environments that enable your business to harness the full power of information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">Operational <span className="text-zinc-600">Scope.</span></h2>
            <p className="text-zinc-500 text-lg font-light max-w-2xl">Industrial-grade data and cloud solutions for modern data-driven organizations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5 hover:border-purple-500/40 transition-all duration-500 group">
                <div className="mb-8 p-4 bg-black/40 rounded-2xl w-fit border border-white/5 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500">
                  {cap.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-purple-500 transition-colors">{cap.title}</h3>
                <p className="text-zinc-500 font-light leading-relaxed text-base">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Data Section */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">
                The Data <br/> <span className="text-zinc-600">Advantage.</span>
              </h2>
              <p className="text-zinc-500 font-light">Information is only as valuable as your ability to process and secure it.</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex gap-6 p-8 rounded-[32px] bg-white/[0.01] border border-white/5">
                <ShieldCheck className="text-purple-500 shrink-0" size={32} />
                <div>
                  <h4 className="text-white font-bold mb-2">Zero-Trust Security</h4>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">End-to-end encryption and identity management to protect your most sensitive data assets in the cloud.</p>
                </div>
              </div>
              <div className="flex gap-6 p-8 rounded-[32px] bg-white/[0.01] border border-white/5">
                <Share2 className="text-purple-500 shrink-0" size={32} />
                <div>
                  <h4 className="text-white font-bold mb-2">Scalable Interoperability</h4>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">Seamlessly integrate your cloud data with AI models, external APIs, and business intelligence tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-600 mb-16">The Infrastructure Stack</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-20">
            {techStack.map((tech) => (
              <span key={tech} className="text-3xl md:text-6xl font-black text-white/5 hover:text-white/40 transition-all duration-500 cursor-default select-none">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-40 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative p-16 md:p-28 rounded-[80px] bg-gradient-to-br from-purple-600 to-indigo-900 text-center overflow-hidden shadow-[0_40px_100px_rgba(147,51,234,0.15)]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 relative z-10 tracking-tighter leading-none">Optimize Your <br/> Infrastructure.</h2>
            <p className="text-white/80 text-xl mb-14 max-w-2xl mx-auto relative z-10 font-light leading-relaxed">Partner with our engineers to build a resilient, scalable, and data-first cloud architecture.</p>
            <Link href="/contact" className="inline-flex items-center gap-4 bg-white text-black px-14 py-6 rounded-full font-black uppercase tracking-[0.2em] text-[11px] hover:scale-105 hover:bg-zinc-100 transition-all shadow-2xl relative z-10">Start Your Data Strategy <ArrowRight size={20} /></Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}