"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react"; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-4 md:px-6 py-6">
      <motion.div 
        className={`max-w-[1300px] mx-auto flex items-center justify-between px-8 py-4 rounded-full border transition-all duration-500 ${
          scrolled || isOpen
          ? "bg-black/80 backdrop-blur-2xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
          : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo Section */}
        <a href="#home" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute inset-0 bg-[#6366F1]/20 blur-xl rounded-full group-hover:bg-[#6366F1]/40 transition-all" />
            <Image 
              src="/Azentic-Final-Brand.png" 
              alt="Azentic" 
              width={48} // સાઈઝ વધારી છે
              height={48} 
              className="relative z-10 group-hover:rotate-[360deg] transition-transform duration-700" 
            />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            AZENTIC <span className="text-[#6366F1]">AI</span>
          </span>
        </a>
        
        {/* Desktop Navigation - સાઈઝ મોટું કરવા માટે અહીં ફેરફાર કર્યો છે */}
        <nav className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="relative text-[17px] font-bold text-zinc-400 hover:text-white transition-all duration-300 group"
            >
              {item.name}
              {/* Hover Underline Effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#6366F1] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-6">
          <button className="hidden md:block relative group overflow-hidden bg-white text-black px-8 py-3 rounded-full text-[15px] font-black transition-all hover:scale-105 active:scale-95 shadow-xl">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            Get Started
          </button>
          
          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-white p-2 hover:bg-white/5 rounded-xl transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-28 left-4 right-4 bg-black/95 backdrop-blur-3xl border border-white/10 p-10 rounded-[40px] lg:hidden z-[90] shadow-2xl"
          >
            <nav className="flex flex-col gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black text-zinc-500 hover:text-white transition-all"
                >
                  {item.name}
                </a>
              ))}
              <hr className="border-white/10 my-2" />
              <button className="bg-[#6366F1] text-white p-6 rounded-3xl text-xl font-black flex justify-between items-center group">
                Get Started <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}