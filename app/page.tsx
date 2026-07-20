"use client";
import React from "react";
// Footer અહીંથી કાઢી નાખ્યું છે કારણ કે તે layout.tsx માંથી આવશે
import Hero from "@/components/home/hero/Hero";
import BrandLogos from "@/components/home/BrandLogos"; 

import Mission from "@/components/home/Mission";
import Process from "@/components/home/Process";
import AboutSection from "@/components/home/AboutSection";
import Statistics from "@/components/home/Statistics";
import BentoGrid from "@/components/home/hero/BentoGrid";
import AISolutions from "@/components/home/AISolutions";
import Portfolio from "@/components/home/Portfolio";
import FAQ from "@/components/home/FAQ";
import LatestNews from "@/components/home/LatestNews";
import Pricing from "@/components/home/Pricing"; 
import Contact from "@/components/home/Contact"; 

export default function Home() {
  return (
    <main className="bg-[#030712] min-h-screen overflow-x-hidden">
      {/* ૧. Home Section */}
      <section id="home">
        <Hero />
      </section>
      
      <BrandLogos /> 

      <div className="space-y-0">
        <div className="py-20">
           <Mission />
        </div>
        <Process />

        {/* ૨. About Section */}
        <section id="about" className="scroll-mt-20">
          <AboutSection />
        </section>

        <Statistics />
        <BentoGrid />

        {/* ૩. Services Section */}
        <section id="services" className="scroll-mt-20">
          <AISolutions />
        </section>

        {/* ૪. Portfolio Section */}
        <section id="portfolio" className="scroll-mt-20">
          <Portfolio />
        </section>

        {/* ૫. Pricing Section */}
        <section id="pricing" className="scroll-mt-20">
          <Pricing />
        </section>

        <FAQ />
        <LatestNews />

        {/* ૬. Contact Section */}
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </div>

      {/* Footer અહીંથી કાઢી નાખ્યો છે - હવે તે ડબલ નહીં દેખાય */}
    </main>
  );
}