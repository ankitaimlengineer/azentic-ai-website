"use client";
import React from "react";
import Image from "next/image";

// SVG Icons - કોઈ ઇમ્પોર્ટની જરૂર નથી, એટલે એરર આવશે જ નહીં
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function Footer() {
  const footerLinks = [
    { title: "Platform", links: ["Neural Engine", "Agentic Flow", "Vision AI"] },
    { title: "Company", links: ["About Us", "Research", "Careers"] },
    { title: "Legal", links: ["Privacy Policy", "Security", "Ethics"] }
  ];

  return (
    <footer className="relative bg-[#030712] border-t border-white/5 pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Image src="/AzenticLogo.png" alt="Azentic" width={55} height={55} />
              <span className="text-xl font-bold text-white tracking-tighter uppercase">AZENTIC <span className="text-[#6366F1]">AI</span></span>
            </div>
            <p className="text-zinc-500 max-w-sm text-sm mb-8 leading-relaxed">
              Engineering autonomous neural architectures for global enterprises.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2.5 rounded-xl border border-white/5 bg-white/[0.02] text-zinc-500 hover:text-white transition-all"><TwitterIcon /></a>
              <a href="#" className="p-2.5 rounded-xl border border-white/5 bg-white/[0.02] text-zinc-500 hover:text-white transition-all"><GithubIcon /></a>
              <a href="#" className="p-2.5 rounded-xl border border-white/5 bg-white/[0.02] text-zinc-500 hover:text-white transition-all"><LinkedinIcon /></a>
            </div>
          </div>

          {footerLinks.map((group, i) => (
            <div key={i}>
              <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">{group.title}</h4>
              <ul className="space-y-4">
                {group.links.map((link, j) => (
                  <li key={j}><a href="#" className="text-zinc-500 hover:text-[#6366F1] transition-colors text-sm font-medium">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[11px] font-bold uppercase tracking-[0.2em]">© 2024 Azentic AI Technologies — All Rights Reserved</p>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/10 bg-green-500/5">
             <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
             <span className="text-[10px] font-bold text-green-500 uppercase tracking-tighter">Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}