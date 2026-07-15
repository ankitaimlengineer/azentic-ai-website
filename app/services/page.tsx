"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/hero/Hero";
import BrandLogos from "@/components/home/BrandLogos"; // ફક્ત આ જ પટ્ટી રાખવાની છે

// બાકીના ઇમ્પોર્ટ્સ...
import Mission from "@/components/home/Mission";
import Process from "@/components/home/Process";
import AboutSection from "@/components/home/AboutSection";
import Statistics from "@/components/home/Statistics";
import BentoGrid from "@/components/home/hero/BentoGrid";
import AISolutions from "@/components/home/AISolutions";
import Portfolio from "@/components/home/Portfolio";
import FAQ from "@/components/home/FAQ";
import LatestNews from "@/components/home/LatestNews";

export default function Home() {
  return (
    <main className="bg-[#030712] min-h-screen overflow-x-hidden scroll-smooth">
      <Navbar />
      
      {/* ૧. હીરો સેક્શન */}
      <Hero />
      
      {/* ૨. આ એક જ પટ્ટી સતત ચાલશે (સિંગલ અને પરફેક્ટ) */}
      <BrandLogos /> 

      <div className="space-y-0">
        {/* અહીંથી TrustedCompanies કાઢી નાખ્યું છે */}
        <div className="py-20">
          <Mission />
        </div>
        <Process />
        <AboutSection />
        <Statistics />
        <BentoGrid />
        <AISolutions />
        <Portfolio />
        <FAQ />
        <LatestNews />
      </div>

      <Footer />
    </main>
  );
}