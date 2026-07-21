"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Cpu, Globe, Shield, Sparkles, Zap } from "lucide-react";

// --- ૧. TypeScript Interface ---
interface PhilosophyCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function AboutPage() {
  return (
    <main className="bg-[#030712] min-h-screen text-white selection:bg-primary/30 overflow-x-hidden font-sans">
      <Navbar />

      {/* ૨. HERO SECTION */}
      <section className="relative pt-44 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-10 inline-block">
              Since 2024 • The AI Revolution
            </span>
            <h1 className="text-6xl md:text-[110px] font-black leading-[0.9] tracking-tighter mb-10 text-white">
              WE ARE THE <br />
              <span className="bg-ai-gradient bg-clip-text text-transparent italic text-center">ARCHITECTS</span>
            </h1>
            <p className="max-w-3xl mx-auto text-zinc-400 text-lg md:text-2xl leading-relaxed font-medium">
              Azentic AI is a research-first intelligence agency. We specialize in building autonomous Agentic systems that bridge the gap between human thought and machine execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ૩. CEO SECTION (વર્તુળાકાર ફોટો અને વ્હાઈટ બોર્ડર) */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* CEO Photo - CLEAN CIRCLE WITH WHITE BORDER */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex justify-center relative"
            >
              {/* સર્કલ કન્ટેનર અને વ્હાઈટ બોર્ડર */}
              <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full border-[6px] border-white overflow-hidden shadow-2xl">
                  <Image 
                    src="/images/ceo-photo.jpeg" 
                    alt="Ankit Thummar - CEO" 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  {/* ફોટા પર હળવો બ્લેક ગ્રેડિયન્ટ જેથી લુક પ્રીમિયમ આવે */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Vision Text */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8 text-left"
            >
              <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
                <p className="text-zinc-300 font-bold text-[10px] uppercase tracking-widest">Founder & CEO</p>
              </div>
              <h3 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight text-white">
                Ankit <span className="text-primary italic">Thummar</span>
              </h3>
              <div className="space-y-6 text-zinc-400 text-lg md:text-xl font-medium leading-relaxed">
                <p className="italic text-zinc-300 border-l-4 border-white/20 pl-6">
                  &quot;Intelligence is the most valuable resource in the universe. At Azentic, we are ensuring it becomes the foundation of every human endeavor.&quot;
                </p>
                <p>
                  Azentic AI started with a single mission: to build technology that feels like a natural extension of human thought. We bridge the gap between complex data and actionable intelligence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ૪. CORE PHILOSOPHY CARDS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PhilosophyCard 
                icon={<Brain size={24} />} 
                title="Neural First" 
                desc="Deep reasoning architectures designed for complex logic." 
            />
            <PhilosophyCard 
                icon={<Shield size={24} />} 
                title="Privacy Core" 
                desc="Enterprise safety is our non-negotiable standard." 
            />
            <PhilosophyCard 
                icon={<Globe size={24} />} 
                title="Global Sync" 
                desc="Deploying intelligent systems at worldwide scale." 
            />
            <PhilosophyCard 
                icon={<Sparkles size={24} />} 
                title="Hyper Growth" 
                desc="Driving exponential ROI through cognitive automation." 
            />
          </div>
        </div>
      </section>

      {/* ૫. CALL TO ACTION */}
      <section className="py-40 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 leading-[0.9] text-white text-center">
            READY TO START <br /> THE <span className="text-primary italic">EVOLUTION?</span>
          </h2>
          <Link href="/contact" className="group relative inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">
            Work with us <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] whitespace-nowrap -z-10 select-none">
          AZENTIC AI
        </div>
      </section>

      <Footer />
    </main>
  );
}

// --- ૬. SUB COMPONENTS ---

function PhilosophyCard({ icon, title, desc }: PhilosophyCardProps) {
  return (
    <div className="p-10 rounded-[40px] bg-[#0F172A] border border-white/5 hover:border-white/20 transition-all duration-500 group text-left">
      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-xl">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-4 text-white">{title}</h4>
      <p className="text-zinc-500 text-sm leading-relaxed font-medium">{desc}</p>
    </div>
  );
}