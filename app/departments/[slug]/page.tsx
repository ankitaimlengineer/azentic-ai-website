"use client";
import React from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InternalNav from "@/components/common/InternalNav";
import { motion } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";

// ડેટાનો પ્રકાર (Type) નક્કી કર્યો
interface DeptDetail {
  title: string;
  desc: string;
  focus: string;
}

const deptData: Record<string, DeptDetail> = {
  "customer-support": { title: "Customer Support", desc: "Automate empathy. We build AI bots and virtual assistants that resolve issues 24/7.", focus: "Support Automation, Sentiment Analysis" },
  finance: { title: "Finance", desc: "Eliminating data friction. AI to automate financial reporting and risk assessment with 100% accuracy.", focus: "Financial Automation, Risk Intelligence" },
  marketing: { title: "Marketing", desc: "Hyper-scaling content and analysis. Use Generative AI to create high-performing assets.", focus: "Generative Content, Predictive Marketing" },
  operations: { title: "Operations", desc: "Efficiency at scale. We optimize business processes using autonomous agents.", focus: "Process Optimization, Strategic Operations" }
};

export default function DeptDetailPage() {
  const { slug } = useParams();
  const data = deptData[slug as string] || { title: "Department", desc: "Strategic AI solutions for business functions.", focus: "Operational Excellence" };

  return (
    <main className="bg-[#030712] min-h-screen text-white font-sans">
      <Navbar />
      <section className="pt-48 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-emerald-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block px-4 py-2 bg-emerald-500/5 border border-emerald-500/20 rounded-full w-fit">Department Transformation</span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85]">{data.title}.</h1>
            <p className="text-zinc-400 text-xl font-light leading-relaxed max-w-3xl">{data.desc}</p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 pb-40">
        <aside className="lg:col-span-3"><InternalNav /></aside>
        <div className="lg:col-span-9 space-y-40">
           <section id="expertise" className="scroll-mt-40">
              <h2 className="text-4xl font-black uppercase mb-12 tracking-tighter italic flex items-center gap-4">
                Impact <span className="text-zinc-600">Area.</span> <Cpu className="text-emerald-500" size={30}/>
              </h2>
              <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5">
                 <p className="text-zinc-400 text-lg font-light leading-relaxed">{data.focus}</p>
              </div>
           </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}