"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InternalNav from "@/components/common/InternalNav";
import { motion } from "framer-motion";
import { Eye, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ComputerVisionPage() {
  return (
    <main className="bg-[#030712] min-h-screen text-white font-sans">
      <Navbar />
      
      {/* Introduction Section */}
      <section id="intro" className="pt-48 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-600/5 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto max-w-7xl text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-emerald-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Visual Intelligence</span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85]">
              Computer <br/> <span className="text-zinc-600 text-outline-white uppercase">Vision.</span>
            </h1>
            <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
              Transforming how machines perceive the world. We build visual intelligence that automates quality control, enhances security, and extracts deep insights from video and image data.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 pb-40">
        <aside className="lg:col-span-3">
          <InternalNav />
        </aside>

        <div className="lg:col-span-9 space-y-40">
          
          {/* Detailed Info Section */}
          <section id="ai-services" className="scroll-mt-40">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Visual <br/> <span className="text-zinc-600">Expertise.</span></h2>
            <div className="grid gap-8">
              {[
                { title: "Object Detection & Tracking", desc: "Real-time identification and movement analysis of objects for logistics, traffic, and industrial safety." },
                { title: "Facial Recognition Systems", desc: "Enterprise-grade biometrics for secure access control and personalized customer experiences." },
                { title: "Automated Quality Inspection", desc: "Deploying high-precision visual models on production lines to detect microscopic defects automatically." }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Security & Proof same as discuss before */}
          <section id="security" className="scroll-mt-40">
             <h2 className="text-4xl font-black uppercase mb-10">Privacy First.</h2>
             <p className="text-zinc-500">We prioritize edge-processing to ensure visual data remains on-site and secure, adhering to strict GDPR and SOC2 standards.</p>
          </section>

          <section id="faq" className="scroll-mt-40">
            <h2 className="text-4xl font-black uppercase mb-10">FAQ.</h2>
            <div className="space-y-4">
               <p className="text-white font-bold">Can Computer Vision work in low light?</p>
               <p className="text-zinc-500 text-sm">Yes, we use advanced thermal and IR-based models for challenging visual environments.</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}