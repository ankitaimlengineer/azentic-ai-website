import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll"; 
import PreLoader from "@/components/ui/PreLoader";      // નવું ઉમેર્યું
import CustomCursor from "@/components/ui/CustomCursor"; // નવું ઉમેર્યું

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azentic AI | Architecting Autonomous Intelligence",
  description: "Global leaders in neural architectures and enterprise AI solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#030712] text-white antialiased selection:bg-[#6366F1]/30`}>
        {/* સાઈટ લોડ થાય ત્યારે એનિમેશન બતાવશે */}
        <PreLoader /> 

        {/* માઉસની પાછળ ચાલતો ગ્લો */}
        <CustomCursor />

        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}