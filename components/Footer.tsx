import React from "react";
import Link from "next/link";
import { Bot, Twitter, Github, Linkedin, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050508] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-accent-primary flex items-center justify-center text-white">
                <Bot size={20} />
              </div>
              <span className="text-xl font-bold gradient-text">CopilotAI</span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-8 max-w-[200px]">
              The AI edge for every interview. Ace your next round with real-time assistance.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/copilotai" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://github.com/copilotai" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/company/copilotai" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hello@copilotai.com" className="text-text-muted hover:text-white transition-colors">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link href="/features" className="text-text-muted hover:text-white text-sm transition-colors">Features</Link></li>
              <li><Link href="/#pricing" className="text-text-muted hover:text-white text-sm transition-colors">Pricing</Link></li>
              <li><Link href="/download" className="text-text-muted hover:text-white text-sm transition-colors">Download</Link></li>
              <li><Link href="/changelog" className="text-text-muted hover:text-white text-sm transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link href="/support#bug-report" className="text-text-muted hover:text-white text-sm transition-colors">Report a Bug</Link></li>
              <li><Link href="/support#testimonial" className="text-text-muted hover:text-white text-sm transition-colors">Submit Testimonial</Link></li>
              <li><Link href="/support#feedback" className="text-text-muted hover:text-white text-sm transition-colors">General Feedback</Link></li>
              <li><Link href="/support#faq" className="text-text-muted hover:text-white text-sm transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-text-muted hover:text-white text-sm transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-text-muted hover:text-white text-sm transition-colors">Blog</Link></li>
              <li><Link href="/privacy" className="text-text-muted hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-text-muted hover:text-white text-sm transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="text-text-muted hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-text-muted text-xs">
            © 2026 CopilotAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-text-muted text-xs font-mono">Proprietary License</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-accent-green" />
              <span className="text-text-muted text-xs font-bold uppercase tracking-widest">Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
