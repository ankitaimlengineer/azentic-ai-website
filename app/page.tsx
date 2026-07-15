"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
import Pricing from "@/components/home/Pricing"; // નવું ઉમેર્યું
import Contact from "@/components/home/Contact"; // નવું ઉમેર્યું

export default function Home() {
  return (
    <main className="bg-[#030712] min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* ૧. Home Section */}
      <section id="home">
        <Hero />
      </section>
      
      <BrandLogos /> 

      <div className="space-y-0">
        <Mission />
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

        {/* ૫. Pricing Section (નવું) */}
        <section id="pricing" className="scroll-mt-20">
          <Pricing />
        </section>

        <FAQ />
        <LatestNews />

        {/* ૬. Contact Section (નવું - હવે પ્રોફેશનલ ફોર્મ સાથે) */}
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </div>

      <Footer />
    </main>
  );
}