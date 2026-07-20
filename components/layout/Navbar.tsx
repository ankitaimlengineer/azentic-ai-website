"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ArrowRight, ChevronDown, Brain, MessageSquare, 
  Bot, Eye, Sparkles, Settings2, Rocket, Building, 
  Headset, Zap, Users, Shield, Code, Layout, Database, 
  Terminal, Globe, Smartphone, Search, Lightbulb, FlaskConical, Layers, HardDrive, Cpu, Activity, CloudCog,
  HeartPulse, Landmark, Building2, ShoppingCart, Factory, Laptop, GraduationCap, Gamepad2, Radio,
  Users2, Landmark as FinanceIcon, Scale, Megaphone, Cog, ShoppingBag, BarChart3
} from "lucide-react"; 

interface MenuLinkProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface TechLinkProps {
  href: string;
  title: string;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-4 md:px-6 py-6 font-sans">
      <motion.div 
        className={`max-w-[1450px] mx-auto flex items-center justify-between px-8 py-4 rounded-full border transition-all duration-500 ${
          scrolled || isOpen ? "bg-black/90 backdrop-blur-3xl border-white/10 shadow-2xl" : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo Section */}
        <Link href="/#home" className="flex items-center gap-4 group cursor-pointer">
          <Image src="/Azentic-Final-Brand1.png" alt="Azentic" width={40} height={40} />
          <span className="text-xl font-black tracking-tighter text-white uppercase">AZENTIC <span className="text-[#6366F1]">AI</span></span>
        </Link>
        
        {/* Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          <Link href="/#home" className="text-[11px] font-bold text-zinc-400 hover:text-white transition-all tracking-widest uppercase">Home</Link>
          
          {/* MEGA MENU 1: AI DEVELOPMENT */}
          <div className="relative py-2" onMouseEnter={() => setActiveMenu("ai")} onMouseLeave={() => setActiveMenu(null)}>
            <button className="flex items-center gap-1 text-[11px] font-bold text-zinc-400 group-hover:text-white transition-all tracking-widest outline-none uppercase cursor-default">
              AI Development <ChevronDown size={12} className={`transition-transform duration-300 ${activeMenu === "ai" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {activeMenu === "ai" && (
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className="absolute top-full left-[-150px] mt-4 w-[1000px] bg-[#0A0B10] border border-white/10 p-10 rounded-[40px] shadow-2xl grid grid-cols-3 gap-10">
                  <div>
                    <p className="text-[10px] font-black tracking-[0.25em] text-zinc-600 mb-6 uppercase">Our AI Services</p>
                    <div className="grid gap-1">
                      <MenuLink href="/services/ai-agents" icon={<Bot size={16}/>} title="Agentic AI Systems" desc="Autonomous multi-step reasoning" />
                      <MenuLink href="/services/ai-ml" icon={<Brain size={16}/>} title="Neural Architectures" desc="Custom strategic AI implementation" />
                      <MenuLink href="/services/voice-chatbots" icon={<MessageSquare size={16}/>} title="AI Chatbots" desc="Intelligent engaging 24/7 bots" />
                      <MenuLink href="/services/generative-ai" icon={<Sparkles size={16}/>} title="Generative AI" desc="Fine-tuned LLM solutions" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-black tracking-[0.25em] text-zinc-600 mb-6 uppercase">Specialized AI</p>
                    <MenuLink href="/services/computer-vision" icon={<Eye size={16}/>} title="Computer Vision" desc="Advanced visual data processing" />
                    <MenuLink href="/services/mlops" icon={<Settings2 size={16}/>} title="MLOps & Integration" desc="Scaling models in production" />
                  </div>
                  <Link href="/contact" className="bg-[#6366F1] p-8 rounded-[32px] flex flex-col justify-between shadow-2xl group/cta transition-all hover:scale-[1.02]">
                     <div className="text-white">
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-70">Strategic Partner</p>
                        <h4 className="text-xl font-black leading-tight mb-4">Empowering <br/> Future Intelligence.</h4>
                        <p className="text-sm opacity-80 leading-relaxed font-medium">Transforming complex business logic into autonomous systems.</p>
                     </div>
                     <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest mt-6">Get Started <ArrowRight size={14} className="group-hover/cta:translate-x-2 transition-transform" /></div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* MEGA MENU 2: SERVICES (તમારા લિસ્ટ મુજબ) */}
          <div className="relative py-2" onMouseEnter={() => setActiveMenu("services")} onMouseLeave={() => setActiveMenu(null)}>
            <button className="flex items-center gap-1 text-[11px] font-bold text-zinc-400 group-hover:text-white transition-all tracking-widest outline-none uppercase cursor-default">
              Services <ChevronDown size={12} className={`transition-transform duration-300 ${activeMenu === "services" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {activeMenu === "services" && (
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className="absolute top-full left-[-300px] mt-4 w-[1150px] bg-[#0A0B10] border border-white/10 p-10 rounded-[40px] shadow-2xl grid grid-cols-3 gap-10">
                  <div>
                    <p className="text-[10px] font-black tracking-[0.25em] text-[#6366F1] mb-6 uppercase">Strategic Solutions</p>
                    <MenuLink href="/services/ai-ml" icon={<Cpu size={16}/>} title="AI Business Solutions" desc="Bespoke intelligence strategy" />
                    <MenuLink href="/services/business-automation" icon={<Zap size={16}/>} title="Intelligent Automation" desc="Automate & reduce operational costs" />
                    <MenuLink href="/services/voice-chatbots" icon={<Headset size={16}/>} title="Virtual Assistants" desc="Human-like digital concierge" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black tracking-[0.25em] text-[#6366F1] mb-6 uppercase">Development</p>
                    <MenuLink href="/services/software-development" icon={<Code size={16}/>} title="Custom Software Dev" desc="Enterprise-grade platform engineering" />
                    <MenuLink href="/services/web-apps" icon={<Globe size={16}/>} title="Web & Mobile Apps" desc="AI-native omnichannel platforms" />
                    <MenuLink href="/services/saas-solutions" icon={<Layers size={16}/>} title="SaaS Architectures" desc="Scalable cloud-ready products" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black tracking-[0.25em] text-[#6366F1] mb-6 uppercase">Infrastructure</p>
                    <MenuLink href="/services/cloud-devops" icon={<CloudCog size={16}/>} title="Cloud & AI Integration" desc="Seamless neural-cloud connectivity" />
                    <MenuLink href="/services/data-engineering" icon={<Database size={16}/>} title="Data Analytics & ETL" desc="Turning data into intelligence" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* MEGA MENU 3: TECHNOLOGIES */}
          <div className="relative py-2" onMouseEnter={() => setActiveMenu("tech")} onMouseLeave={() => setActiveMenu(null)}>
            <button className="flex items-center gap-1 text-[11px] font-bold text-zinc-400 group-hover:text-white transition-all tracking-widest outline-none uppercase cursor-default">
              Technologies <ChevronDown size={12} className={`transition-transform duration-300 ${activeMenu === "tech" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {activeMenu === "tech" && (
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className="absolute top-full left-[-450px] mt-4 w-[1100px] bg-[#0A0B10] border border-white/10 p-10 rounded-[40px] shadow-2xl grid grid-cols-4 gap-8">
                  <div>
                    <p className="text-[10px] font-black tracking-[0.25em] text-[#6366F1] mb-8 uppercase">AI & Data</p>
                    <div className="flex flex-col gap-5">
                      <TechLink href="/technologies/python" title="Python" />
                      <TechLink href="/technologies/langchain" title="LangChain" />
                      <TechLink href="/technologies/openai" title="OpenAI / GPT-4" />
                      <TechLink href="/technologies/pytorch" title="TensorFlow / PyTorch" />
                      <TechLink href="/technologies/pinecone" title="Pinecone (Vector DB)" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-black tracking-[0.25em] text-[#6366F1] mb-8 uppercase">Frameworks</p>
                    <div className="flex flex-col gap-5">
                      <TechLink href="/technologies/react" title="Next.js / React" />
                      <TechLink href="/technologies/nodejs" title="Node.js / Express" />
                      <TechLink href="/technologies/streamlit" title="Streamlit" />
                      <TechLink href="/technologies/flutter" title="Flutter / React Native" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-black tracking-[0.25em] text-[#6366F1] mb-8 uppercase">Infrastructure</p>
                    <div className="flex flex-col gap-5">
                      <TechLink href="/technologies/aws" title="AWS / Azure" />
                      <TechLink href="/technologies/docker" title="Docker / Kubernetes" />
                      <TechLink href="/technologies/mongodb" title="PostgreSQL / MongoDB" />
                      <TechLink href="/technologies/cicd" title="CI / CD Pipelines" />
                    </div>
                  </div>
                  <div className="p-8 bg-white/[0.02] rounded-[32px] border border-white/5 flex flex-col justify-center">
                     <p className="text-[10px] font-black text-white/40 mb-4 uppercase tracking-widest">Tech Philosophy</p>
                     <p className="text-[12px] text-zinc-500 leading-relaxed font-medium italic">&quot;We leverage the most advanced technical stack to ensure industrial-grade performance.&quot;</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* MEGA MENU 4: INDUSTRIES (નવા સ્ક્રીનશોટ મુજબ) */}
          <div className="relative py-2" onMouseEnter={() => setActiveMenu("industries")} onMouseLeave={() => setActiveMenu(null)}>
            <button className="flex items-center gap-1 text-[11px] font-bold text-zinc-400 group-hover:text-white transition-all tracking-widest outline-none uppercase cursor-default">
              Industries <ChevronDown size={12} className={`transition-transform duration-300 ${activeMenu === "industries" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {activeMenu === "industries" && (
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className="absolute top-full left-[-600px] mt-4 w-[1250px] bg-[#0A0B10] border border-white/10 p-10 rounded-[40px] shadow-2xl grid grid-cols-12 gap-10">
                  {/* Left & Center: INDUSTRIES (2 Cols) */}
                  <div className="col-span-8 grid grid-cols-2 gap-x-12">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black tracking-[0.25em] text-zinc-600 mb-6 uppercase">Industries</p>
                      <MenuLink href="/industries/fintech" icon={<Landmark size={16}/>} title="Fintech" desc="AI software built by banking engineers" />
                      <MenuLink href="/industries/healthcare" icon={<HeartPulse size={16}/>} title="Healthcare Services" desc="AI solutions for clinical workflows" />
                      <MenuLink href="/industries/ecommerce" icon={<ShoppingCart size={16}/>} title="E-commerce & Retail" desc="Intelligent shopping experiences" />
                      <MenuLink href="/industries/manufacturing" icon={<Factory size={16}/>} title="Manufacturing" desc="Run smarter production lines with AI" />
                    </div>
                    <div className="space-y-1 pt-10">
                      <MenuLink href="/industries/saas" icon={<Laptop size={16}/>} title="SaaS" desc="AI-native team for SaaS development" />
                      <MenuLink href="/industries/real-estate" icon={<Building2 size={16}/>} title="Real Estate" desc="Property valuation & automation" />
                      <MenuLink href="/industries/education" icon={<GraduationCap size={16}/>} title="Education" desc="Personalized AI-powered platforms" />
                      <MenuLink href="/industries/game-dev" icon={<Gamepad2 size={16}/>} title="Game Development" desc="AI-accelerated production pipelines" />
                    </div>
                  </div>
                  {/* Right Column: DEPARTMENTS */}
                  <div className="col-span-4 border-l border-white/5 pl-10">
                    <p className="text-[10px] font-black tracking-[0.25em] text-zinc-600 mb-6 uppercase">Departments</p>
                    <div className="grid gap-1">
                      <MenuLink href="/departments/customer-support" icon={<Headset size={16}/>} title="Customer Support" desc="Resolve issues faster with AI bots" />
                      <MenuLink href="/departments/finance" icon={<FinanceIcon size={16}/>} title="Finance" desc="Reduce data friction in finance" />
                      <MenuLink href="/departments/marketing" icon={<Megaphone size={16}/>} title="Marketing" desc="AI critical assets & analysis" />
                      <MenuLink href="/departments/operations" icon={<Cog size={16}/>} title="Operations" desc="Optimize processes & scale" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/#portfolio" className="text-[11px] font-bold text-zinc-400 hover:text-white transition-all tracking-widest uppercase">Portfolio</Link>
          <Link href="/contact" className="text-[11px] font-bold text-zinc-400 hover:text-white transition-all tracking-widest uppercase">Contact</Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-6">
          <Link href="/contact" className="hidden md:block bg-white text-black px-7 py-3 rounded-full text-[11px] font-black hover:scale-105 active:scale-95 transition-all shadow-xl uppercase">Get Started</Link>
          <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-28 left-4 right-4 bg-black/95 backdrop-blur-3xl border border-white/10 p-10 rounded-[40px] lg:hidden z-[90] flex flex-col gap-8 shadow-2xl">
            <Link href="/#home" onClick={() => setIsOpen(false)} className="text-4xl font-black text-white uppercase tracking-tighter">Home</Link>
            <Link href="/services/ai-ml" onClick={() => setIsOpen(false)} className="text-4xl font-black text-white uppercase tracking-tighter">AI Services</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-4xl font-black text-[#6366F1] uppercase tracking-tighter">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// --- Helper Components ---

function MenuLink({ href, icon, title, desc }: MenuLinkProps) {
  return (
    <Link href={href} className="group/item block w-full">
      <div className="flex items-start gap-4 p-4 rounded-[24px] hover:bg-white/[0.04] border border-transparent hover:border-white/5 transition-all cursor-pointer">
        <div className="mt-1 text-zinc-500 group-hover/item:text-[#6366F1] transition-colors shrink-0">
          {icon}
        </div>
        <div>
          <p className="text-[13px] font-bold text-white group-hover/item:text-[#6366F1] transition-colors">
            {title}
          </p>
          <p className="text-[10px] text-zinc-600 leading-tight mt-1 font-medium">
            {desc}
          </p>
        </div>
      </div>
    </Link>
  );
}

function TechLink({ href, title }: TechLinkProps) {
  return (
    <Link 
      href={href} 
      className="text-[14px] font-bold text-zinc-500 hover:text-white hover:translate-x-1 transition-all duration-300 block w-full py-1 cursor-pointer"
    >
      {title}
    </Link>
  );
}