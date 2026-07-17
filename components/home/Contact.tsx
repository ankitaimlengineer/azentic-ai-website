"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) setStatus("success");
      else setStatus("error");
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-32 bg-[#030712] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#6366F1]/10 blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-12">
            <div>
              <span className="text-[#6366F1] font-bold text-[10px] tracking-[0.4em] uppercase mb-4 block">Connect with us</span>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight mb-6">
                {"Let's"} scale the <br /> <span className="text-zinc-500">Future.</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-md font-light leading-relaxed">
                Our global engineering team is ready to architect your next autonomous neural infrastructure. 
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white/5 rounded-2xl text-[#6366F1]"><Mail size={24} /></div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Official Email</p>
                <p className="text-white font-bold text-lg">hello@azentic.in</p>
              </div>
            </div>
          </motion.div>

          {/* Glowing Glass Inquiry Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
            <div className="relative z-10 bg-white/[0.02] border border-white/10 p-10 md:p-14 rounded-[48px] backdrop-blur-3xl shadow-2xl">
              
              {status === "success" ? (
                <div className="text-center py-20">
                  <CheckCircle2 size={60} className="text-green-500 mx-auto mb-6 animate-bounce" />
                  <h3 className="text-2xl font-bold text-white mb-2">Inquiry Received!</h3>
                  <p className="text-zinc-400">Our architects will review and respond via hello@azentic.in shortly.</p>
                  <button onClick={() => setStatus("idle")} className="mt-8 text-[#6366F1] font-bold uppercase text-xs underline">Send New Message</button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-10">
                    <div className="p-2 bg-[#6366F1]/20 rounded-lg text-[#6366F1]"><Sparkles size={20} /></div>
                    <h3 className="text-2xl font-bold text-white">Inquiry Form</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-500 uppercase ml-4">Full Name</label>
                        <input name="name" required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#6366F1]/50 transition-all outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-500 uppercase ml-4">Work Email</label>
                        <input name="email" required type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#6366F1]/50 transition-all outline-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase ml-4">Inquiry Type</label>
                      <select name="type" className="w-full bg-[#0A0A0A] border border-white/10 rounded-2xl px-6 py-4 text-white outline-none cursor-pointer">
                        <option>Enterprise AI Solutions</option>
                        <option>Neural Architecture Design</option>
                        <option>Agentic Workflows</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase ml-4">Message</label>
                      <textarea name="message" required rows={4} placeholder="Describe your project..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white resize-none outline-none"></textarea>
                    </div>

                    <button type="submit" disabled={status === "sending"} className="group w-full relative overflow-hidden bg-white text-black py-5 rounded-2xl font-black text-lg transition-all active:scale-95 disabled:opacity-50 shadow-2xl">
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {status === "sending" ? "Analysing Data..." : "Send Inquiry"} <Send size={20} />
                      </span>
                    </button>
                    {status === "error" && (
                      <div className="flex items-center justify-center gap-2 text-red-500 text-xs mt-4">
                        <AlertCircle size={14} /> Something went wrong. Try again.
                      </div>
                    )}
                  </form>
                </>
              )}
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#6366F1]/10 blur-3xl -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}