"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Cpu, Zap, Rocket } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-[#030712] overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#6366F1] font-bold text-[10px] tracking-[0.4em] uppercase mb-6 block">Our Vision</span>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-10">
              Architecting <br />
              <span className="bg-gradient-to-r from-[#6366F1] via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Enterprise Growth.
              </span>
            </h2>
            <p className="text-zinc-400 text-xl leading-relaxed mb-12 font-light max-w-xl">
              At Azentic AI, we don&apos;t just build technology; we solve business complexity. We empower global enterprises with autonomous systems that eliminate manual bottlenecks and unlock 10x operational efficiency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#6366F1]/10 rounded-xl text-[#6366F1]"><ShieldCheck size={20}/></div>
                <div>
                  <p className="text-white font-bold mb-1">Enterprise Grade</p>
                  <p className="text-zinc-500 text-sm">Secure, scalable, and built for mission-critical reliability.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#6366F1]/10 rounded-xl text-[#6366F1]"><Rocket size={20}/></div>
                <div>
                  <p className="text-white font-bold mb-1">Rapid Scaling</p>
                  <p className="text-zinc-500 text-sm">Deploy AI agents that grow as your business grows.</p>
                </div>
              </div>
            </div>

            <button className="mt-12 px-10 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-white/10 transition-all">
              Schedule a Strategic Consultation
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[700px] w-full rounded-[60px] overflow-hidden border border-white/10 shadow-2xl shadow-[#6366F1]/10"
          >
            <Image 
              src="/images/Rocats.jpg" 
              alt="Neural Intelligence Visualization" 
              fill 
              className="object-cover brightness-75 hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
            <div className="absolute top-10 right-10 bg-black/40 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl">
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-white font-mono text-xs uppercase tracking-widest">SYSTEM_OPTIMIZED</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}