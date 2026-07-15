"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="py-32 bg-zinc-950">
      <div className="container mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white leading-tight">
            &quot;Our mission is to ensure that artificial general intelligence benefits all of humanity. 
            We are building a future where AI acts as an amplifier for human potential.&quot;
          </h2>
          <div className="mt-12 flex justify-center">
             <div className="h-px w-24 bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}