"use client";
import React, { useState, useEffect } from "react";

const navItems = [
  { name: "INTRODUCTION", id: "intro" },
  { name: "AI DEVELOPMENT SERVICES", id: "expertise" },
  { name: "CUSTOMER PROOF", id: "proof" },
  { name: "SECURITY & PRIVACY", id: "security" },
  { name: "AI INSIGHTS", id: "insights" },
  { name: "FAQ", id: "faq" },
];

export default function InternalNav() {
  const [activeSection, setActiveSection] = useState("intro");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-40 hidden lg:block w-full">
      <div className="flex flex-col border-t border-white/10">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item.id)}
            className="group flex items-center justify-between py-5 border-b border-white/10 text-left transition-all hover:pl-2"
          >
            <span className={`text-[10px] font-black tracking-[0.25em] transition-colors uppercase ${
              activeSection === item.id ? "text-white" : "text-zinc-600 group-hover:text-white"
            }`}>
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}