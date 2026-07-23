"use client";
import React from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  { 
    name: "Startup Pilot", 
    price: "POC", 
    desc: "Perfect for validating AI use-cases within your startup workflow.", 
    features: ["Custom Strategy Audit", "Initial Agent Design", "MVP Development", "2-Week Integration"],
    buttonText: "Start My Pilot",
    highlight: false
  },
  { 
    name: "Business Growth", 
    price: "Scale", 
    desc: "For companies ready to fully automate their business operations.", 
    features: ["Full Workflow Automation", "Unlimited Credits", "Dedicated AI Support", "Custom API Integration", "Performance Analytics"], 
    highlight: true,
    buttonText: "Request a Quote"
  },
  { 
    name: "Enterprise", 
    price: "Custom", 
    desc: "Bespoke AI architectures for large-scale global enterprises.", 
    features: ["Dedicated GPU Cluster", "Private On-premise Deployment", "Unlimited Fine-tuning", "SLA & High Security", "24/7 Priority Engineer"],
    buttonText: "Contact Sales",
    highlight: false
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-[#030712] relative overflow-hidden scroll-mt-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#6366F1]/5 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6366F1]/20 bg-[#6366F1]/5 mb-6">
            <Sparkles size={12} className="text-[#6366F1]" />
            <span className="text-[#6366F1] font-bold text-[10px] tracking-[0.3em] uppercase">Solution Architecture</span>
          </div>
          <h2 className="text-6xl md:text-9xl font-black text-white mt-4 tracking-tighter leading-[0.9]">
            Flexible AI <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">Partnerships.</span>
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -12 }}
            className={`p-12 rounded-[56px] border ${
              plan.highlight 
              ? "border-[#6366F1] bg-white/[0.03] shadow-[0_0_60px_rgba(99,102,241,0.1)]" 
              : "border-white/5 bg-white/[0.01]"
            } relative overflow-hidden group transition-all duration-500 flex flex-col h-full backdrop-blur-sm`}
          >
            {plan.highlight && (
              <div className="absolute top-8 right-8 bg-[#6366F1] text-white text-[10px] font-black px-4 py-1.5 rounded-full flex items-center gap-1">
                <Sparkles size={10} /> RECOMMENDED
              </div>
            )}

            <div className="mb-10 text-left">
              <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{plan.name}</h4>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-black text-white tracking-tighter">{plan.price}</span>
              </div>
              <p className="text-zinc-500 text-sm font-light leading-relaxed min-h-[40px]">{plan.desc}</p>
            </div>

            <div className="flex-grow">
              <ul className="space-y-5 mb-12 text-left border-t border-white/5 pt-10">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-zinc-300 text-sm font-medium">
                    <div className="mt-1 p-0.5 bg-[#6366F1]/20 rounded-full flex-shrink-0">
                      <Check size={12} className="text-[#6366F1]" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <Link 
              href="/#contact" 
              className={`w-full py-5 rounded-[24px] font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all duration-500 active:scale-95 overflow-hidden relative group/btn ${
                plan.highlight 
                ? "bg-white text-black hover:bg-[#6366F1] hover:text-white shadow-2xl" 
                : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {plan.buttonText} <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}