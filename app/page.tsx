"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";

// Lazy load sections below the fold
const Problem = dynamic(() => import("@/components/Problem"), { ssr: false });
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), { ssr: false });
const Features = dynamic(() => import("@/components/Features"), { ssr: false });
const DemoMockup = dynamic(() => import("@/components/DemoMockup"), { ssr: false });
const Pricing = dynamic(() => import("@/components/Pricing"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const CTABanner = dynamic(() => import("@/components/CTABanner"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-bg-base min-h-screen">
      <Navbar />
      
      <div className="relative">
        <Hero />
        <SocialProof />
        
        <div className="space-y-0">
          <Problem />
          <HowItWorks />
          <Features />
          <DemoMockup />
          <Pricing />
          <Testimonials />
          <FAQ />
          <CTABanner />
        </div>
      </div>

      <Footer />
    </main>
  );
}
