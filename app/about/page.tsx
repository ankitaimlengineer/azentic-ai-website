"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#05070A] min-h-screen text-white">
      <Navbar />
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Mission Card */}
            <div className="lg:col-span-8 bg-[#11151F] border border-white/5 p-12 rounded-[40px]">
              <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em] mb-8">Core Mission</h2>
              <h1 className="text-5xl font-bold leading-tight mb-8">
                Building safe AI that <br /> <span className="text-primary">benefits all humanity.</span>
              </h1>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl">
                Azentic AI is a research and deployment company. Our goal is to ensure that general-purpose artificial intelligence benefits everyone.
              </p>
            </div>

            {/* Performance Card */}
            <div className="lg:col-span-4 bg-[#1C212E] border border-white/5 p-10 rounded-[40px] flex flex-col justify-between">
               <h3 className="font-bold text-white uppercase text-xs tracking-widest">Global Reach</h3>
               <div className="text-6xl font-bold text-primary">50+</div>
               <p className="text-zinc-500 text-sm">International enterprise partners trust our core neural infrastructure.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}