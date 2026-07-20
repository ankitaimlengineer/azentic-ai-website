"use client";
import React from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link"; // Next.js Link ઈમ્પોર્ટ કર્યું

const plans = [
  { 
    name: "Starter", 
    price: "$0", 
    desc: "For individual developers & neural research.", 
    features: ["1,000 API Credits", "Community Support", "Basic Neural Models", "Public Access"],
    buttonText: "Get Started",
    highlight: false
  },
  { 
    name: "Professional", 
    price: "$149", 
    desc: "For scaling startups & specialized AI teams.", 
    features: ["Unlimited Credits", "Priority Support", "Custom Fine-tuning", "Advanced Analytics", "Private Dedicated Nodes"], 
    highlight: true,
    buttonText: "Get Started"
  },
  { 
    name: "Enterprise", 
    price: "Custom", 
    desc: "For global corporations & research labs.", 
    features: ["Dedicated GPU Cluster", "24/7 Concierge", "On-premise Deployment", "Custom Ethics Layer", "SLA Guarantee"],
    buttonText: "Contact Sales",
    highlight: false
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-[#030712] relative overflow-hidden scroll-mt-24">
      {/* Background Cinematic Glow */}
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
            <span className="text-[#6366F1] font-bold text-[10px] tracking-[0.3em] uppercase">Pricing Architecture</span>
          </div>
          <h2 className="text-6xl md:text-9xl font-black text-white mt-4 tracking-tighter leading-[0.9]">
            Scale with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">Confidence.</span>
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
            {/* Most Popular Badge */}
            {plan.highlight && (
              <div className="absolute top-8 right-8 bg-[#6366F1] text-white text-[10px] font-black px-4 py-1.5 rounded-full flex items-center gap-1 shadow-2xl">
                <Sparkles size={10} /> MOST POPULAR
              </div>
            )}

            <div className="mb-10 text-left">
              <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{plan.name}</h4>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-black text-white tracking-tighter">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-zinc-500 text-sm font-medium">/month</span>}
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

            {/* FIX: હવે આ લિંક સીધી તમારા મેઈન Inquiry System (#contact) પર જશે */}
            <Link 
              href="/#contact" 
              className={`w-full py-5 rounded-[24px] font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all duration-500 active:scale-95 overflow-hidden relative group/btn ${
                plan.highlight 
                ? "bg-white text-black hover:bg-[#6366F1] hover:text-white shadow-2xl" 
                : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
              }`}
            >
              {/* Shimmer effect only for highlighted button */}
              {plan.highlight && (
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {plan.buttonText} <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Subtle Gradient Glow inside cards on hover */}
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-[#6366F1]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}