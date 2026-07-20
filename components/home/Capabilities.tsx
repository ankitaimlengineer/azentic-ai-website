import { motion } from "framer-motion";

const caps = [
  { title: "Managed AI Teams", desc: "Scale your capacity with dedicated AI engineering squads.", icon: "👥" },
  { title: "Strategic AI Solutions", desc: "Custom LLMs and Agentic workflows for enterprise automation.", icon: "🧠" },
  { title: "Cloud Engineering", desc: "High-performance, scalable cloud platforms and microservices.", icon: "☁️" }
];

export default function Capabilities() {
  return (
    <section className="py-24 bg-[#030712]">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-16 tracking-tighter">
          Strategic <span className="text-zinc-600">Capabilities.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caps.map((cap, i) => (
            <div key={i} className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all group">
              <div className="text-4xl mb-6">{cap.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{cap.title}</h3>
              <p className="text-zinc-500 font-light">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}