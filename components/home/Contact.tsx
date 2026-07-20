"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Sparkles, ShieldCheck, Mail, Globe, ArrowRight, Zap, Briefcase } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = ["Agentic AI", "SaaS Solutions", "Cloud Engineering", "MLOps", "Custom Software"];

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "90b0e191-38dd-410b-951f-b0ae72dd6527");
    formData.append("selected_services", selectedServices.join(", "));
    formData.append("subject", "Azentic AI: Strategic Partnership Inquiry");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <main className="bg-[#030712] min-h-screen text-white font-sans selection:bg-[#6366F1]/30">
      <Navbar />

      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6366F1]/5 blur-[120px] -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] -z-10 rounded-full" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Content: Strategic Pitch */}
            <div className="lg:col-span-5">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-8 h-[1px] bg-[#6366F1]"></span>
                  <span className="text-[#6366F1] font-black text-[10px] tracking-[0.5em] uppercase">Connect Intelligence</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-10">
                  Ready to <br /> <span className="text-zinc-600 text-outline-white">Collaborate?</span>
                </h1>
                <p className="text-zinc-500 text-xl font-light leading-relaxed max-w-md mb-16">
                  Join a select group of enterprises leveraging autonomous neural architectures to redefine their industry.
                </p>

                {/* Info Cards */}
                <div className="grid grid-cols-1 gap-10">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-[#6366F1]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-1">Direct Channel</p>
                      <p className="text-white font-medium">hello@azentic.in</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0">
                      <Globe size={18} className="text-[#6366F1]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-1">HQ</p>
                      <p className="text-white font-medium">Remote-First / Global Scale</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Content: Modern Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="bg-white/[0.02] border border-white/5 p-8 md:p-14 rounded-[56px] backdrop-blur-3xl shadow-2xl relative"
              >
                {status === "success" ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                    <div className="w-24 h-24 bg-[#6366F1]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#6366F1]/20">
                      <CheckCircle2 size={40} className="text-[#6366F1]" />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase">Inquiry Successful.</h3>
                    <p className="text-zinc-500 text-base font-light mb-10 max-w-xs mx-auto">Your technical request has been processed. A strategist will contact you within 24 business hours.</p>
                    <button onClick={() => setStatus("idle")} className="px-10 py-4 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Send New Message</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-8">
                       <h3 className="text-2xl font-black text-white tracking-tight uppercase flex items-center gap-3">
                        <Sparkles className="text-[#6366F1]" size={20} /> Inquiry System
                       </h3>
                       <div className="text-[9px] font-bold text-[#6366F1] px-3 py-1 bg-[#6366F1]/10 rounded-full border border-[#6366F1]/20 uppercase tracking-widest">v2.0 ACTIVE</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="flex flex-col gap-4 group">
                        <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest group-focus-within:text-white transition-colors">Full Name</label>
                        <input name="name" required type="text" placeholder="John Doe" className="bg-transparent border-b border-white/10 py-2 text-white outline-none focus:border-[#6366F1] transition-all font-light placeholder:text-zinc-800" />
                      </div>
                      <div className="flex flex-col gap-4 group">
                        <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest group-focus-within:text-white transition-colors">Business Email</label>
                        <input name="email" required type="email" placeholder="john@company.com" className="bg-transparent border-b border-white/10 py-2 text-white outline-none focus:border-[#6366F1] transition-all font-light placeholder:text-zinc-800" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Select Intelligence Area(s)</label>
                        <div className="flex flex-wrap gap-3">
                          {services.map((service) => (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={`px-6 py-3 rounded-2xl text-[11px] font-bold transition-all border ${
                                selectedServices.includes(service) 
                                ? "bg-[#6366F1] border-[#6366F1] text-white shadow-[0_10px_20px_rgba(99,102,241,0.3)]" 
                                : "bg-white/[0.03] border-white/5 text-zinc-500 hover:border-white/20"
                              }`}
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 group">
                      <label className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest group-focus-within:text-white transition-colors">Technical Scope</label>
                      <textarea name="message" required rows={3} placeholder="Tell us about your technical goals and business challenges..." className="bg-transparent border-b border-white/10 py-2 text-white resize-none outline-none focus:border-[#6366F1] transition-all font-light placeholder:text-zinc-800"></textarea>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8 pt-6">
                      <button type="submit" disabled={status === "sending"} className="w-full md:w-auto px-16 py-6 bg-white text-black rounded-[24px] font-black text-xs uppercase tracking-[0.3em] hover:scale-105 active:scale-95 disabled:opacity-50 shadow-2xl transition-all flex items-center justify-center gap-3">
                        {status === "sending" ? "Processing..." : "Initiate Briefing"} <ArrowRight size={16} />
                      </button>
                      <div className="flex items-center gap-3 opacity-30">
                         <ShieldCheck size={16} />
                         <p className="text-[9px] font-bold uppercase tracking-widest">AES-256 Encrypted</p>
                      </div>
                    </div>

                    {status === "error" && (
                      <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest text-center">Something went wrong. Transmission failed.</p>
                    )}
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}