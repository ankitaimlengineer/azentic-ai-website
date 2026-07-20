"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Users, Zap, LayoutGrid, ArrowRight, BarChart, ShieldCheck, Clock, Briefcase, Rocket } from "lucide-react";

const capabilities = [
  { 
    title: "On-Demand Staff Augmentation", 
    desc: "Scale your internal engineering capacity instantly with our elite pool of pre-vetted AI, Full-stack, and Mobile developers. We provide top 3% talent that integrates directly into your existing culture and development environment.",
    icon: <Users className="text-blue-500" size={28} />
  },
  { 
    title: "Full-Lifecycle Product Squads", 
    desc: "Deploy complete, cross-functional squads comprising Product Managers, Lead Architects, and QA Engineers. We take full ownership of your product roadmap, moving your vision from ideation to global launch with surgical precision.",
    icon: <LayoutGrid className="text-blue-500" size={28} />
  },
  { 
    title: "High-Velocity Agile Delivery", 
    desc: "We don't just write code; we optimize your delivery. By implementing world-class Scrum and CI/CD methodologies, we ensure that your product features are shipped faster, more predictably, and with zero technical debt.",
    icon: <Zap className="text-blue-500" size={28} />
  },
  { 
    title: "Strategic Tech Leadership", 
    desc: "Access fractional CTO and senior architecture services to guide your strategic technical decisions. We help you navigate complex tech-stack choices, security audits, and scalability planning to future-proof your business.",
    icon: <BarChart className="text-blue-500" size={28} />
  }
];

const techStack = ["Agile / Scrum", "Jira & Confluence", "Slack / Teams", "GitHub / GitLab", "CI/CD Pipelines", "DevOps Mastery", "Quality Assurance"];

export default function ManagedTeamsPage() {
  return (
    <main className="bg-[#030712] min-h-screen text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 relative overflow-hidden">
        {/* Blue Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 blur-[130px] rounded-full -z-10" />
        
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block px-4 py-2 bg-blue-500/5 border border-blue-500/20 rounded-full w-fit">
              Talent & Execution
            </span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.85]">
              Managed <br/> <span className="text-zinc-600 text-outline-white">Product Teams.</span>
            </h1>
            <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
              Eliminate recruitment friction and accelerate your roadmap. Azentic provides elite engineering squads that act as a seamless extension of your company, delivering high-stakes software with global standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">Team <span className="text-zinc-600">Solutions.</span></h2>
            <p className="text-zinc-500 text-lg font-light max-w-2xl">Flexible engagement models designed to meet the dynamic needs of fast-growing startups and enterprises.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="p-12 rounded-[56px] bg-white/[0.02] border border-white/5 hover:border-blue-500/40 transition-all duration-500 group"
              >
                <div className="mb-8 p-4 bg-black/40 rounded-2xl w-fit border border-white/5 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                  {cap.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-blue-500 transition-colors">{cap.title}</h3>
                <p className="text-zinc-500 font-light leading-relaxed text-base">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Methodology Section (Azumo Style) */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">
                The Azentic <br/> <span className="text-zinc-600">Way.</span>
              </h2>
              <p className="text-zinc-500 font-light">Our integration process ensures zero friction and immediate productivity for your projects.</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex gap-6 p-8 rounded-[32px] bg-white/[0.01] border border-white/5">
                <Clock className="text-blue-500 shrink-0" size={32} />
                <div>
                  <h4 className="text-white font-bold mb-2">Rapid Onboarding</h4>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">We deploy experts who can dive into your codebase and start delivering value within 48 to 72 hours.</p>
                </div>
              </div>
              <div className="flex gap-6 p-8 rounded-[32px] bg-white/[0.01] border border-white/5">
                <Briefcase className="text-blue-500 shrink-0" size={32} />
                <div>
                  <h4 className="text-white font-bold mb-2">Full Transparency</h4>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">Direct access to developers via Slack and Jira. No middlemen, just pure engineering collaboration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Ecosystem Section */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-600 mb-16">Operational Ecosystem</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-20">
            {techStack.map((tech) => (
              <span key={tech} className="text-3xl md:text-6xl font-black text-white/5 hover:text-white/40 transition-all duration-500 cursor-default select-none">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) */}
      <section className="py-40 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative p-16 md:p-28 rounded-[80px] bg-gradient-to-br from-blue-600 to-indigo-800 text-center overflow-hidden shadow-[0_40px_100px_rgba(37,99,235,0.2)]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            
            <div className="relative z-10">
              <Rocket className="mx-auto text-white/50 mb-8" size={48} />
              <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none">
                Scale Your <br/> Engineering Now.
              </h2>
              <p className="text-white/80 text-xl mb-14 max-w-2xl mx-auto font-light leading-relaxed">
                Ready to build faster? Hire a dedicated squad or augment your team with our world-class engineering experts.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-4 bg-white text-black px-14 py-6 rounded-full font-black uppercase tracking-[0.2em] text-[11px] hover:scale-105 hover:bg-zinc-100 transition-all shadow-2xl"
              >
                Request a Squad <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}