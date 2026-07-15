"use client";

import React from "react";
import { motion } from "framer-motion";

const companies = [
  "NVIDIA", "MICROSOFT", "GOOGLE", "AMAZON", "META", "TESLA", "ORACLE"
];

export default function TrustedCompanies() {
  return (
    <section className="py-20 bg-black overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em]">
          Powering the next generation of industry leaders
        </p>
      </div>
      
      {/* Infinite Scroll Marquee */}
      <div className="flex w-full">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-none gap-20 items-center whitespace-nowrap"
        >
          {[...companies, ...companies].map((company, index) => (
            <span key={index} className="text-3xl md:text-5xl font-bold text-zinc-800 hover:text-zinc-400 transition-colors cursor-default tracking-tighter">
              {company}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}