import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll"; 
import PreLoader from "@/components/ui/PreLoader";
import CustomCursor from "@/components/ui/CustomCursor";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Azentic AI | Autonomous Agentic Systems for Global Enterprises",
  description: "Azentic AI Technologies architects next-gen neural systems and autonomous agents to automate complex workflows and drive 10x efficiency.",
  keywords: ["Azentic AI", "Autonomous AI Agents", "Agentic Systems", "Enterprise AI Solution India", "Workflow Automation AI", "Neural Architecture"],
  authors: [{ name: "Ankit", url: "https://azentic.in" }],
  openGraph: {
    title: "Azentic AI | Architecting Future Intelligence",
    description: "Empowering global businesses with autonomous AI solutions.",
    url: "https://azentic.in",
    siteName: "Azentic AI Technologies",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azentic AI | Autonomous Intelligence",
    description: "10x your enterprise efficiency with Agentic AI.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon1.png",
    apple: "/icon1.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#030712] text-white antialiased selection:bg-[#6366F1]/30`}>
        <PreLoader /> 
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}