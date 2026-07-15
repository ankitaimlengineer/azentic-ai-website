"use client";
import React from "react";
import { motion } from "framer-motion";

const brands = [
  "NVIDIA", "SAMSUNG", "MICROSOFT", "TESLA", "ADOBE", "IBM", "OPENAI", "META",
  "NVIDIA", "SAMSUNG", "MICROSOFT", "TESLA", "ADOBE", "IBM", "OPENAI", "META" 
];

export default function BrandLogos() {
  return (
    <section className="py-10 bg-[#030712] border-y border-white/5 overflow-hidden">
      <div className="relative flex items-center">
        {/* Infinite Loop Wrapper */}
        <motion.div 
          className="flex whitespace-nowrap gap-20"
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {brands.map((brand, i) => (
            <span 
              key={i}
              className="text-2xl md:text-3xl font-extrabold text-white/20 tracking-tighter hover:text-white/60 transition-colors duration-500"
            >
              {brand}
            </span>
          ))}
        </motion.div>

        {/* Side Fading Shadows */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10" />
      </div>
    </section>
  );
}