"use client";

import React from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What makes Azentic AI different from other providers?",
    a: "We focus on vertical-specific intelligence with a heavy emphasis on safety guardrails and sub-millisecond latency for enterprise use cases."
  },
  {
    q: "How do you ensure the security of our enterprise data?",
    a: "All data is encrypted in transit and at rest. We offer on-premise deployment options for organizations with strict compliance requirements."
  },
  {
    q: "Can I integrate Azentic models into my existing workflow?",
    a: "Yes, we provide robust RESTful APIs and SDKs for Python, JavaScript, and Go, making integration seamless."
  }
];

export default function FAQ() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-white mb-16 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pb-8 border-b border-white/5"
            >
              <h4 className="text-xl font-medium text-white mb-4">{faq.q}</h4>
              <p className="text-zinc-500 leading-relaxed font-light">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}