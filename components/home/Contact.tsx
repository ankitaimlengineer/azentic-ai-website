"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, Send, Sparkles, CheckCircle2 } from "lucide-react";

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

            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/5 rounded-xl text-[#6366F1]"><Mail size={20} /></div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase">Email us</p>
                  <p className="text-white font-medium">hello@azentic.in</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
            <div className="relative z-10 bg-white/[0.02] border border-white/10 p-10 md:p-14 rounded-[48px] backdrop-blur-3xl shadow-2xl">
              {status === "success" ? (
                <div className="text-center py-20 space-y-4">
                  <CheckCircle2 size={60} className="text-green-500 mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-zinc-400">Our team will reach out to you at hello@azentic.in within 24 hours.</p>
                  <button onClick={() => setStatus("idle")} className="text-[#6366F1] text-sm font-bold uppercase underline">Send another</button>
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
                        <input name="name" required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#6366F1]/50 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-500 uppercase ml-4">Work Email</label>
                        <input name="email" required type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#6366F1]/50 transition-all" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase ml-4">Inquiry Type</label>
                      <select name="type" className="w-full bg-[#0A0A0A] border border-white/10 rounded-2xl px-6 py-4 text-white appearance-none">
                        <option>Enterprise AI Solutions</option>
                        <option>Neural Architecture Design</option>
                        <option>Agentic Workflows</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-zinc-500 uppercase ml-4">Message</label>
                      <textarea name="message" required rows={4} placeholder="How can we help?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white resize-none"></textarea>
                    </div>

                    <button disabled={status === "sending"} className="group w-full relative overflow-hidden bg-white text-black py-5 rounded-2xl font-black text-lg transition-all active:scale-95 disabled:opacity-50">
                      {status === "sending" ? "Processing..." : "Send Inquiry"}
                    </button>
                    {status === "error" && <p className="text-red-500 text-xs text-center">Something went wrong. Please try again.</p>}
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}