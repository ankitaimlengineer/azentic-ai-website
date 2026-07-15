"use client";
import { motion } from "framer-motion";

export default function LatestNews() {
  return (
    <section className="py-32 bg-background border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl font-bold text-white tracking-tight">Research & Updates</h2>
          <button className="text-primary text-sm font-bold hover:underline">View All &rarr;</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-video bg-surface border border-white/5 rounded-[24px] mb-6 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
              </div>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Feb 14, 2024 — Research</span>
              <h4 className="text-xl font-bold text-white mt-3 group-hover:text-primary transition-colors">Safety alignment in multi-modal models.</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}