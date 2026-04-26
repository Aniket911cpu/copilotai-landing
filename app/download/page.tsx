"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useOS } from "@/lib/useOS";
import { 
  Monitor, 
  Apple, 
  Terminal, 
  ArrowRight, 
  Download, 
  ShieldCheck, 
  Zap, 
  Cpu,
  Info,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const DOWNLOADS = [
  {
    id: "windows",
    name: "Windows",
    icon: Monitor,
    version: "v2.4.1",
    build: "64-bit",
    format: ".exe",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    url: "/CopilotAI-Setup.exe",
  },
  {
    id: "macos",
    name: "macOS",
    icon: Apple,
    version: "v2.4.1",
    build: "Universal",
    format: ".dmg",
    color: "text-white",
    bgColor: "bg-white/10",
    url: "/CopilotAI-macOS.dmg",
  },
  {
    id: "linux",
    name: "Linux",
    icon: Terminal,
    version: "v2.4.1",
    build: "x64",
    format: ".AppImage",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    url: "/CopilotAI-Linux.AppImage",
  }
];

export default function DownloadPage() {
  const currentOS = useOS();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="relative bg-[#08080C] min-h-screen">
      <Navbar />
      
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-primary/20 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-violet/20 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="container mx-auto px-6 pt-40 pb-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <ShieldCheck size={14} className="text-accent-green" />
            Verified Safe & Digitally Signed
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            Get the Edge. <br />
            <span className="gradient-text">Download CopilotAI.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted"
          >
            The world&apos;s most advanced real-time interview assistant, now optimized for {currentOS === "unknown" ? "all desktop platforms" : currentOS}.
          </motion.p>
        </div>

        {/* OS Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {DOWNLOADS.map((dl, i) => (
            <motion.div
              key={dl.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredId(dl.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={cn(
                "glass-card p-10 relative overflow-hidden transition-all duration-500",
                currentOS === dl.id ? "border-accent-primary/50 bg-accent-primary/5 ring-1 ring-accent-primary/20" : "border-white/5",
                hoveredId === dl.id && "scale-[1.02] -translate-y-2 border-white/20"
              )}
            >
              {currentOS === dl.id && (
                <div className="absolute top-4 right-4 bg-accent-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
                  Recommended
                </div>
              )}

              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8", dl.bgColor, dl.color)}>
                <dl.icon size={32} />
              </div>

              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">{dl.name}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-text-muted">{dl.version}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-xs font-mono text-text-muted">{dl.build}</span>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <CheckCircle2 size={16} className="text-accent-green" />
                  Stealth Mode Ready
                </div>
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <CheckCircle2 size={16} className="text-accent-green" />
                  Local Processing Support
                </div>
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <CheckCircle2 size={16} className="text-accent-green" />
                  Low-Latency Audio Engine
                </div>
              </div>

              <a 
                href={dl.url}
                download
                className={cn(
                  "w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all",
                  currentOS === dl.id 
                    ? "bg-accent-primary text-white shadow-xl shadow-accent-primary/20" 
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                )}
              >
                Download {dl.format}
                <Download size={18} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Steps Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="space-y-12">
            <h2 className="text-4xl font-bold">Quick Installation</h2>
            <div className="space-y-8">
              <Step number="01" title="Download & Install" description="Choose your platform above and run the installer. The app is notarized for security." />
              <Step number="02" title="Grant Permissions" description="Enable Microphone and Accessibility permissions to allow the AI to hear and overlay answers." />
              <Step number="03" title="Sync Account" description="Sign in with your CopilotAI account to sync your resume and preferred AI models." />
              <Step number="04" title="Start Copiloting" description="Launch any meeting app and click 'Start Session' in the CopilotAI tray menu." />
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-accent-primary/20 blur-[100px] rounded-full" />
            <div className="relative glass-card p-4 border-white/10">
              <div className="bg-bg-surface rounded-2xl overflow-hidden aspect-video relative">
                <Image 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                  alt="App Interface" 
                  fill
                  className="object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-accent-primary flex items-center justify-center shadow-2xl shadow-accent-primary/50">
                    <Download size={32} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="glass-card p-12 border-white/5">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-accent-violet/10 flex items-center justify-center text-accent-violet">
              <Info size={24} />
            </div>
            <h2 className="text-3xl font-bold">System Requirements</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <Requirement icon={Cpu} title="Processor" value="Intel i5 / AMD Ryzen 5 or better" />
            <Requirement icon={Zap} title="Memory" value="8GB RAM minimum (16GB recommended)" />
            <Requirement icon={Monitor} title="Display" value="1080p+ Resolution for best overlay" />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function Step({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="flex gap-6 group">
      <div className="text-2xl font-mono font-bold text-accent-primary opacity-30 group-hover:opacity-100 transition-opacity">
        {number}
      </div>
      <div>
        <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
          {title}
          <ChevronRight size={16} className="text-accent-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
        </h4>
        <p className="text-text-muted leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
}

function Requirement({ icon: Icon, title, value }: any) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-text-muted">
        <Icon size={18} />
        <span className="text-xs font-bold uppercase tracking-widest">{title}</span>
      </div>
      <div className="text-lg font-bold text-white">{value}</div>
    </div>
  );
}
