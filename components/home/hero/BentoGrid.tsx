"use client";
import { motion } from "framer-motion";

export default function BentoGrid() {
  return (
    <section className="py-24 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Custom LLMs", desc: "Training specialized models on enterprise-scale datasets." },
            { title: "Neural Vision", desc: "Advanced computer vision for autonomous real-time processing." },
            { title: "API Scale", desc: "High-throughput neural infrastructure for global deployments." }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-surface border border-white/5 p-10 rounded-[32px] hover:border-primary/20 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-inner rounded-2xl mb-8 flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#0066FF]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}