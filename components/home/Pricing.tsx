"use client";
import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  { name: "Starter", price: "$0", desc: "For individual developers", features: ["1,000 API Credits", "Community Support", "Basic Neural Models"] },
  { name: "Professional", price: "$149", desc: "For scaling startups", features: ["Unlimited Credits", "Priority Support", "Custom Fine-tuning", "Advanced Analytics"], highlight: true },
  { name: "Enterprise", price: "Custom", desc: "For global corporations", features: ["Dedicated GPU Cluster", "24/7 Concierge", "On-premise Deployment", "Custom Ethics Layer"] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <span className="text-[#6366F1] font-bold text-[10px] tracking-[0.4em] uppercase">Pricing Plans</span>
        <h2 className="text-5xl md:text-7xl font-black text-white mt-4 tracking-tighter">Scale with <span className="text-zinc-500">Confidence.</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className={`p-10 rounded-[40px] border ${plan.highlight ? "border-[#6366F1] bg-[#6366F1]/5" : "border-white/5 bg-white/[0.02]"} relative overflow-hidden group`}
          >
            {plan.highlight && <div className="absolute top-6 right-6 bg-[#6366F1] text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1"><Sparkles size={10}/> MOST POPULAR</div>}
            <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black text-white">{plan.price}</span>
              {plan.price !== "Custom" && <span className="text-zinc-500 text-sm">/month</span>}
            </div>
            <p className="text-zinc-400 text-sm mb-8">{plan.desc}</p>
            <ul className="space-y-4 mb-10 text-left">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3 text-zinc-300 text-sm">
                  <Check size={16} className="text-[#6366F1]" /> {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.highlight ? "bg-[#6366F1] text-white" : "bg-white/5 text-white hover:bg-white/10"}`}>
              {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}