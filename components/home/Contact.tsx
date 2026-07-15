"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Send, Sparkles } from "lucide-react";

const offices = [
  { city: "San Francisco", type: "HQ / Research Lab", address: "Market St, SF, CA 94103, USA" },
  { city: "London", type: "European Operations", address: "Canary Wharf, London E14, UK" },
  { city: "Singapore", type: "APAC Intelligence Hub", address: "Marina Bay, Singapore 018981" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-[#030712] overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#6366F1]/10 blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <span className="text-[#6366F1] font-bold text-[10px] tracking-[0.4em] uppercase mb-4 block">Connect with us</span>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight mb-6">
                {"Let's"} scale the <br />
                <span className="text-zinc-500">Future.</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-md font-light leading-relaxed">
                Our global engineering team is ready to architect your next autonomous neural infrastructure. 
              </p>
            </div>

            <div className="space-y-8">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                <Globe size={16} className="text-[#6366F1]" /> Global Presence
              </h4>
              <div className="grid gap-6">
                {offices.map((office, i) => (
                  <div key={i} className="group cursor-default">
                    <p className="text-white font-bold text-lg group-hover:text-[#6366F1] transition-colors">{office.city}</p>
                    <p className="text-[#6366F1] text-[10px] font-bold uppercase tracking-widest mb-1">{office.type}</p>
                    <p className="text-zinc-500 text-sm">{office.address}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/5 rounded-xl text-[#6366F1]"><Mail size={20} /></div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase">Email us</p>
                  <p className="text-white font-medium">hello@azentic.in</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/5 rounded-xl text-[#6366F1]"><Phone size={20} /></div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase">Call us</p>
                  <p className="text-white font-medium">+91 8320390508</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-white/[0.02] border border-white/10 p-10 md:p-14 rounded-[48px] backdrop-blur-3xl shadow-2xl">
              <div className="flex items-center gap-3 mb-10">
                <div className="p-2 bg-[#6366F1]/20 rounded-lg text-[#6366F1]"><Sparkles size={20} /></div>
                <h3 className="text-2xl font-bold text-white">Inquiry Form</h3>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase ml-4">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#6366F1]/50 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase ml-4">Work Email</label>
                    <input type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#6366F1]/50 transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase ml-4">Inquiry Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#6366F1]/50 transition-all appearance-none">
                    <option className="bg-[#030712]">Enterprise AI Solutions</option>
                    <option className="bg-[#030712]">Neural Architecture Design</option>
                    <option className="bg-[#030712]">Research Collaboration</option>
                    <option className="bg-[#030712]">Agentic Workflows</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase ml-4">Message</label>
                  <textarea rows={4} placeholder="Describe your project requirements..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#6366F1]/50 transition-all resize-none"></textarea>
                </div>

                <button className="group w-full relative overflow-hidden bg-white text-black py-5 rounded-2xl font-black text-lg transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  Send Inquiry <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#6366F1]/20 blur-3xl -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}