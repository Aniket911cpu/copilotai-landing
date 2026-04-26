"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="relative bg-[#08080C] min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-40 pb-24 relative z-10">
        <div className="max-w-3xl mx-auto glass-card p-12 border-white/5">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-sm text-text-muted mb-8 font-mono">Last updated: April 26, 2026</p>
          
          <div className="space-y-8 text-text-muted leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p>
                We prioritize your privacy. CopilotAI is designed to process audio locally whenever possible. We collect basic account information (email, name) when you register. We do not store transcripts or audio recordings of your meetings on our servers.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Information</h2>
              <p>
                The information we collect is used solely to provide and improve the CopilotAI service, manage your account, and communicate important updates. Your resume data is stored securely and used only to contextualize AI responses during active sessions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information. Communication between the CopilotAI client and our servers is encrypted using TLS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
              <p>
                We use trusted third-party providers (like OpenAI and Anthropic) to process text and generate responses. We ensure these providers comply with strict privacy standards and do not use your data to train their public models.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
