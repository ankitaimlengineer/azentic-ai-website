"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Sparkles, CheckCircle2, AlertCircle, Globe, ShieldCheck } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    
    // આપણે સીધું જ Web3Forms ને ડેટા મોકલી રહ્યા છીએ (API વગર)
    formData.append("access_key", "90b0e191-38dd-410b-951f-b0ae72dd6527");
    formData.append("subject", "New Inquiry from Azentic AI");

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
    <section id="contact" className="relative py-32 bg-[#030712] overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#6366F1]/10 blur-[160px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Side Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-12">
            <div>
              <span className="text-[#6366F1] font-bold text-[10px] tracking-[0.4em] uppercase mb-4 block">Get In Touch</span>
              <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                {"Let's"} scale the <br /> <span className="text-zinc-500">Future.</span>
              </h2>
              <p className="text-zinc-400 text-xl font-light leading-relaxed max-w-md">
                Our global engineering team is ready to architect your next autonomous neural infrastructure. 
              </p>
            </div>

            <div className="space-y-6">
               <div className="flex items-center gap-4 text-zinc-500">
                  <Globe size={18} className="text-[#6366F1]" />
                  <span className="text-sm font-medium">Operations: Global / Remote</span>
               </div>
               <div className="flex items-center gap-4 text-zinc-500">
                  <ShieldCheck size={18} className="text-[#6366F1]" />
                  <span className="text-sm font-medium">Privacy: Enterprise-grade encryption.</span>
               </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex items-center gap-4">
                <div className="p-4 bg-white/5 rounded-2xl text-[#6366F1] border border-white/5">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Inquiry Channel</p>
                  <p className="text-white font-bold text-lg">hello@azentic.in</p>
                </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
            <div className="relative z-10 bg-white/[0.02] border border-white/10 p-10 md:p-14 rounded-[50px] backdrop-blur-3xl shadow-2xl">
              
              {status === "success" ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                  <CheckCircle2 size={70} className="text-green-500 mx-auto mb-6 animate-pulse" />
                  <h3 className="text-3xl font-bold text-white mb-3">Transmission Received.</h3>
                  <p className="text-zinc-400">Our team will respond to hello@azentic.in within 24 hours.</p>
                  <button onClick={() => setStatus("idle")} className="mt-10 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-all">Send another inquiry</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-[#6366F1]/20 rounded-lg text-[#6366F1]"><Sparkles size={20} /></div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">System Inquiry</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input name="name" required type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#6366F1]/50 transition-all outline-none" />
                    <input name="email" required type="email" placeholder="Work Email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#6366F1]/50 transition-all outline-none" />
                  </div>

                  <select name="type" className="w-full bg-[#0A0A0A] border border-white/10 rounded-2xl px-6 py-4 text-white outline-none cursor-pointer">
                    <option>Enterprise AI Solutions</option>
                    <option>Neural Architecture Design</option>
                    <option>Custom LLM Development</option>
                  </select>

                  <textarea name="message" required rows={4} placeholder="Project details..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white resize-none outline-none focus:border-[#6366F1]/50 transition-all"></textarea>

                  <button type="submit" disabled={status === "sending"} className="group w-full relative overflow-hidden bg-white text-black py-6 rounded-2xl font-black text-lg transition-all active:scale-95 disabled:opacity-50">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {status === "sending" ? "Processing..." : "Send Inquiry"} <Send size={20} />
                    </span>
                  </button>

                  {status === "error" && (
                    <div className="flex items-center justify-center gap-2 text-red-500 text-xs mt-4">
                      <AlertCircle size={14} /> Something went wrong. Please try again later.
                    </div>
                  )}
                </form>
              )}
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#6366F1]/10 blur-3xl -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}