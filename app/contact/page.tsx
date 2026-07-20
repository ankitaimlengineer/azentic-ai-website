"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Sparkles, CheckCircle2, AlertCircle, Globe, ShieldCheck, ArrowRight, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "90b0e191-38dd-410b-951f-b0ae72dd6527");
    formData.append("subject", "New High-Stakes Inquiry - Azentic AI");

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
      console.error("Error:", error);
      setStatus("error");
    }
  }

  return (
    <main className="bg-[#030712] min-h-screen text-white font-sans selection:bg-[#6366F1]/30">
      <Navbar />

      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        {/* Ambient Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#6366F1]/5 blur-[140px] -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            
            {/* Left Side: Strategic Info */}
            <div className="lg:col-span-5 space-y-12">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <span className="text-[#6366F1] font-black text-[10px] tracking-[0.5em] uppercase mb-8 block px-4 py-2 bg-[#6366F1]/5 border border-[#6366F1]/20 rounded-full w-fit">
                  Neural Contact Point
                </span>
                <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-10">
                  Let&apos;s build <br /> the <span className="text-zinc-600 text-outline-white">Future.</span>
                </h2>
                <p className="text-zinc-400 text-xl font-light leading-relaxed max-w-md mb-12">
                  Partner with our global engineering team to architect your next autonomous neural infrastructure. 
                </p>

                <div className="space-y-8">
                   <div className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6366F1] group-hover:bg-[#6366F1] group-hover:text-white transition-all duration-500">
                        <Globe size={22} />
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Operations</p>
                        <p className="text-white font-bold">Global / Remote First</p>
                      </div>
                   </div>

                   <div className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#6366F1] group-hover:bg-[#6366F1] group-hover:text-white transition-all duration-500">
                        <Mail size={22} />
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Direct Channel</p>
                        <p className="text-white font-bold">hello@azentic.in</p>
                      </div>
                   </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Professional Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="relative z-10 bg-white/[0.02] border border-white/10 p-8 md:p-16 rounded-[60px] backdrop-blur-3xl shadow-2xl"
              >
                {status === "success" ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                    <CheckCircle2 size={80} className="text-emerald-500 mx-auto mb-8" />
                    <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">Transmission Received.</h3>
                    <p className="text-zinc-500 text-lg font-light max-w-xs mx-auto leading-relaxed">Our AI strategy team will respond to your inquiry within 24 hours.</p>
                    <button onClick={() => setStatus("idle")} className="mt-12 px-10 py-4 bg-white/5 border border-white/10 rounded-full text-zinc-400 text-[10px] font-black uppercase tracking-widest hover:text-white transition-all">Send New Message</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-[#6366F1]/10 rounded-2xl text-[#6366F1]"><Sparkles size={24} /></div>
                      <h3 className="text-3xl font-black text-white tracking-tighter uppercase">Inquiry System</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="flex flex-col gap-3 group">
                        <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest group-focus-within:text-[#6366F1] transition-colors">Full Name</label>
                        <input name="name" required type="text" placeholder="e.g. John Doe" className="bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-white transition-all font-light placeholder:text-zinc-800" />
                      </div>
                      <div className="flex flex-col gap-3 group">
                        <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest group-focus-within:text-[#6366F1] transition-colors">Work Email</label>
                        <input name="email" required type="email" placeholder="john@enterprise.com" className="bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-white transition-all font-light placeholder:text-zinc-800" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="flex flex-col gap-3 group">
                        <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Company</label>
                        <input name="company" type="text" placeholder="Organization Name" className="bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-white transition-all font-light placeholder:text-zinc-800" />
                      </div>
                      <div className="flex flex-col gap-3 group">
                        <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Interest</label>
                        <select name="type" className="bg-transparent border-b border-white/10 py-3 text-white outline-none cursor-pointer font-light appearance-none">
                          <option className="bg-[#0A0B10]">Agentic AI Systems</option>
                          <option className="bg-[#0A0B10]">Custom Software Development</option>
                          <option className="bg-[#0A0B10]">Managed Product Teams</option>
                          <option className="bg-[#0A0B10]">Strategic Consulting</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 group">
                      <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest group-focus-within:text-[#6366F1] transition-colors">Project Scope</label>
                      <textarea name="message" required rows={3} placeholder="Tell us about your technical goals..." className="bg-transparent border-b border-white/10 py-3 text-white resize-none outline-none focus:border-white transition-all font-light placeholder:text-zinc-800"></textarea>
                    </div>

                    <button type="submit" disabled={status === "sending"} className="group w-full relative overflow-hidden bg-white text-black py-6 rounded-[24px] font-black text-xs uppercase tracking-[0.3em] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 shadow-2xl">
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {status === "sending" ? "Processing..." : "Initiate Contact"} <ArrowRight size={18} />
                      </span>
                    </button>

                    {status === "error" && (
                      <div className="flex items-center justify-center gap-2 text-red-500 font-bold text-xs mt-4">
                        <AlertCircle size={14} /> Something went wrong. Please refresh or email hello@azentic.in
                      </div>
                    )}
                  </form>
                )}
                
                {/* Security Badge */}
                <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-4 opacity-30">
                   <ShieldCheck size={16} />
                   <p className="text-[9px] font-bold uppercase tracking-widest">Secure Data Encryption & Privacy Protocol Active</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}