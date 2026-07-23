"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Sparkles, ShieldCheck, Mail, Globe, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");

  const services = ["Agentic AI", "Workflow Automation", "Custom LLM", "Neural Systems", "Enterprise MLOps"];
  const budgets = ["<$10k", "$10k - $50k", "$50k - $100k", "$100k+"];

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "90b0e191-38dd-410b-951f-b0ae72dd6527"); // તમારી કી
    formData.append("selected_services", selectedServices.join(", "));
    formData.append("estimated_budget", budget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) setStatus("success");
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <main className="bg-[#030712] min-h-screen text-white">
      <Navbar />
      <section className="relative pt-44 pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-[#6366F1] font-black text-[10px] tracking-[0.5em] uppercase mb-8 block">Strategic Intake</span>
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-10">
                Partner with <br /> <span className="text-zinc-600">Intelligence.</span>
              </h1>
              <p className="text-zinc-500 text-xl font-light mb-16">Schedule a technical briefing to explore how Azentic AI can optimize your enterprise operations.</p>
              <div className="space-y-10">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-[#6366F1]"><Mail size={20}/></div>
                  <div><p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Email</p><p className="text-white">hello@azentic.in</p></div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-[#6366F1]"><Globe size={20}/></div>
                  <div><p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Presence</p><p className="text-white">Global Remote / Bengaluru Hub</p></div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-14 rounded-[56px] backdrop-blur-3xl">
              {status === "success" ? (
                <div className="text-center py-20">
                  <CheckCircle2 size={60} className="text-[#6366F1] mx-auto mb-6" />
                  <h3 className="text-3xl font-black uppercase mb-4">Briefing Initiated.</h3>
                  <p className="text-zinc-500 mb-10">Our strategist will contact you within 24 hours.</p>
                  <button onClick={() => setStatus("idle")} className="text-white font-bold underline">Send Another Request</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <input name="name" required placeholder="Full Name" className="bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#6366F1] transition-all" />
                    <input name="company" required placeholder="Company Website" className="bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#6366F1] transition-all" />
                  </div>
                  <input name="email" required type="email" placeholder="Business Email" className="bg-transparent border-b border-white/10 py-3 w-full outline-none focus:border-[#6366F1] transition-all" />
                  
                  <div className="space-y-6">
                    <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Select Area of Interest</label>
                    <div className="flex flex-wrap gap-3">
                      {services.map(s => (
                        <button key={s} type="button" onClick={() => toggleService(s)} className={`px-5 py-2 rounded-xl text-[10px] font-bold border transition-all ${selectedServices.includes(s) ? "bg-[#6366F1] border-[#6366F1]" : "bg-white/5 border-white/10 text-zinc-500"}`}>{s}</button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Estimated Project Investment</label>
                    <div className="flex flex-wrap gap-3">
                      {budgets.map(b => (
                        <button key={b} type="button" onClick={() => setBudget(b)} className={`px-5 py-2 rounded-xl text-[10px] font-bold border transition-all ${budget === b ? "bg-white text-black" : "bg-white/5 border-white/10 text-zinc-500"}`}>{b}</button>
                      ))}
                    </div>
                  </div>

                  <textarea name="message" required rows={3} placeholder="Tell us about your technical objectives..." className="bg-transparent border-b border-white/10 py-3 w-full outline-none focus:border-[#6366F1] transition-all" />
                  
                  <button type="submit" disabled={status === "sending"} className="w-full py-6 bg-white text-black rounded-[24px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:scale-105 transition-all">
                    {status === "sending" ? "TRANSMITTING..." : "INITIATE BRIEFING"} <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}