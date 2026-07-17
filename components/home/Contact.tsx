"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Sparkles, CheckCircle2, AlertCircle, Globe, ShieldCheck } from "lucide-react";

export default function Contact() {
  // ફોર્મ સ્ટેટ સેટઅપ
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      type: formData.get("type"),
      message: formData.get("message"),
    };

    try {
      // API ને ડેટા મોકલી રહ્યા છીએ
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
      } else {
        console.error("Submission failed:", result.error);
        setStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-32 bg-[#030712] overflow-hidden">
      {/* Background Cinematic Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#6366F1]/10 blur-[160px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Side: Brand Presence */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <span className="text-[#6366F1] font-bold text-[10px] tracking-[0.4em] uppercase mb-4 block">Get In Touch</span>
              <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                {"Let's"} scale the <br /> <span className="text-zinc-500">Future.</span>
              </h2>
              <p className="text-zinc-400 text-xl font-light leading-relaxed max-w-md">
                Our global engineering team is ready to architect your next autonomous neural infrastructure. 
              </p>
            </div>

            {/* Social Proof Badges */}
            <div className="space-y-6">
               <div className="flex items-center gap-4 text-zinc-500">
                  <Globe size={18} className="text-[#6366F1]" />
                  <span className="text-sm font-medium">Operations: San Francisco • London • Remote</span>
               </div>
               <div className="flex items-center gap-4 text-zinc-500">
                  <ShieldCheck size={18} className="text-[#6366F1]" />
                  <span className="text-sm font-medium">Privacy: Enterprise-grade encryption guaranteed.</span>
               </div>
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white/5 rounded-2xl text-[#6366F1] border border-white/5 shadow-inner">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Inquiry Channel</p>
                  <p className="text-white font-bold text-lg">hello@azentic.in</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Premium Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-white/[0.02] border border-white/10 p-10 md:p-14 rounded-[50px] backdrop-blur-3xl shadow-2xl overflow-hidden">
              
              {status === "success" ? (
                // Success View
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <CheckCircle2 size={70} className="text-green-500 mx-auto mb-6 animate-pulse" />
                  <h3 className="text-3xl font-bold text-white mb-3">Transmission Received.</h3>
                  <p className="text-zinc-400 leading-relaxed">Our AI architects will analyze your request and respond to hello@azentic.in within 24 hours.</p>
                  <button 
                    onClick={() => setStatus("idle")} 
                    className="mt-10 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                // Form View
                <>
                  <div className="flex items-center gap-3 mb-10">
                    <div className="p-2 bg-[#6366F1]/20 rounded-lg text-[#6366F1]"><Sparkles size={20} /></div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">System Inquiry</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-500 uppercase ml-4 tracking-widest">Full Name</label>
                        <input name="name" required type="text" placeholder="Elon Musk" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#6366F1]/50 transition-all outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-500 uppercase ml-4 tracking-widest">Work Email</label>
                        <input name="email" required type="email" placeholder="ceo@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#6366F1]/50 transition-all outline-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase ml-4 tracking-widest">Inquiry Type</label>
                      <select name="type" className="w-full bg-[#0A0A0A] border border-white/10 rounded-2xl px-6 py-4 text-white outline-none cursor-pointer focus:border-[#6366F1]/50 transition-all">
                        <option>Enterprise AI Solutions</option>
                        <option>Neural Architecture Design</option>
                        <option>Agentic Workflow Automation</option>
                        <option>Custom LLM Development</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase ml-4 tracking-widest">Project Details</label>
                      <textarea name="message" required rows={4} placeholder="Describe the neural challenges you want to solve..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white resize-none outline-none focus:border-[#6366F1]/50 transition-all"></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={status === "sending"} 
                      className="group w-full relative overflow-hidden bg-white text-black py-6 rounded-2xl font-black text-lg transition-all active:scale-95 disabled:opacity-50"
                    >
                      {/* Premium Shimmer Effect */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                      
                      <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-tighter">
                        {status === "sending" ? "Analysing Data..." : "Send Inquiry"} <Send size={20} />
                      </span>
                    </button>

                    {status === "error" && (
                      <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="flex items-center justify-center gap-2 text-red-500 text-xs mt-4"
                      >
                        <AlertCircle size={14} /> Connection failed. Please check Vercel API logs.
                      </motion.div>
                    )}
                  </form>
                </>
              )}
            </div>
            {/* Glow behind the form */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#6366F1]/10 blur-3xl -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}