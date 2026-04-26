"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="relative bg-[#08080C] min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-40 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
              Have questions about CopilotAI? Whether you're looking for enterprise pricing, technical support, or just want to say hi, we're here for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="glass-card p-8 border-white/5 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent-primary/10 text-accent-primary flex items-center justify-center mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Email Us</h3>
              <p className="text-text-muted text-sm mb-4">For general inquiries and support.</p>
              <a href="mailto:hello@copilotai.com" className="text-accent-primary font-bold hover:underline">hello@copilotai.com</a>
            </div>
            <div className="glass-card p-8 border-white/5 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent-violet/10 text-accent-violet flex items-center justify-center mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Visit Us</h3>
              <p className="text-text-muted text-sm mb-4">Our headquarters.</p>
              <span className="text-white font-bold">123 AI Boulevard, San Francisco, CA</span>
            </div>
            <div className="glass-card p-8 border-white/5 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Call Us</h3>
              <p className="text-text-muted text-sm mb-4">Mon-Fri from 9am to 6pm PT.</p>
              <a href="tel:+15551234567" className="text-emerald-500 font-bold hover:underline">+1 (555) 123-4567</a>
            </div>
          </div>

          <div className="glass-card p-12 border-white/5">
            <h2 className="text-3xl font-bold mb-8 text-center">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white">First Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-primary transition-all text-white" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white">Last Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-primary transition-all text-white" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-primary transition-all text-white" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white">Message</label>
                <textarea rows={6} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-primary transition-all text-white resize-none" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="w-full bg-accent-primary text-white font-bold py-4 rounded-xl hover:bg-accent-primary/90 transition-all shadow-lg shadow-accent-primary/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
