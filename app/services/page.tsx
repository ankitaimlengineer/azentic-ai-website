"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/hero/Hero";
import BrandLogos from "@/components/home/BrandLogos"; 

// નવા સેક્શન જે આપણે Azumo માંથી ઇન્સ્પાયર થઈને બનાવ્યા છે
import Capabilities from "@/components/home/Capabilities";
import Industries from "@/components/home/Industries";

// તમારા બાકીના ઇમ્પોર્ટ્સ
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
      
      {/* ૧. હીરો સેક્શન - ફર્સ્ટ ઇમ્પ્રેશન */}
      <Hero />
      
      {/* ૨. બ્રાન્ડ લોગોઝ - ટ્રસ્ટ બિલ્ડિંગ */}
      <BrandLogos /> 

      <div className="space-y-0">
        <div className="py-20">
          <Mission />
        </div>

        {/* ૩. Capabilities (Azumo મોડલ) - શું કામ કરો છો તેની પ્રોફેશનલ વિગત */}
        <Capabilities />

        {/* ૪. Process - કામ કરવાની પદ્ધતિ */}
        <Process />

        {/* ૫. Industries (નવું) - તમે કયા બિઝનેસને મદદ કરો છો */}
        <Industries />

        <AboutSection />
        
        <Statistics />
        
        {/* વિઝ્યુઅલ અપીલ માટે */}
        <BentoGrid />
        
        {/* ટેકનિકલ એક્સપર્ટાઇઝ */}
        <AISolutions />
        
        {/* પ્રોજેક્ટ્સ (જેમાં આપણે પેજિનેશન સેટ કર્યું છે) */}
        <Portfolio />
        
        <FAQ />
        
        <LatestNews />
      </div>

      <Footer />
    </main>
  );
}