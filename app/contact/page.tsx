"use client";

import React, { useState } from "react";
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
            <ContactForm />
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      type: "contact",
      name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send message");
      
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center p-8 bg-accent-green/10 border border-accent-green/20 rounded-xl">
        <h3 className="text-xl font-bold text-accent-green mb-2">Message Sent!</h3>
        <p className="text-text-muted mb-4">We'll get back to you as soon as possible.</p>
        <button onClick={() => setSuccess(false)} className="text-sm text-white underline">Send another message</button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="p-4 bg-accent-rose/10 border border-accent-rose/20 text-accent-rose rounded-xl text-sm">
          {error}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-white">First Name</label>
          <input name="firstName" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-primary transition-all text-white" placeholder="John" required disabled={loading} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-white">Last Name</label>
          <input name="lastName" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-primary transition-all text-white" placeholder="Doe" required disabled={loading} />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold text-white">Email</label>
        <input name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-primary transition-all text-white" placeholder="john@example.com" required disabled={loading} />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold text-white">Message</label>
        <textarea name="message" rows={6} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-primary transition-all text-white resize-none" placeholder="How can we help you?" required disabled={loading}></textarea>
      </div>
      <button type="submit" disabled={loading} className="w-full bg-accent-primary text-white font-bold py-4 rounded-xl hover:bg-accent-primary/90 transition-all shadow-lg shadow-accent-primary/20 disabled:opacity-50 disabled:cursor-not-allowed">
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
