"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/content";
import { ArrowUp, Shield } from "lucide-react";

interface FooterProps {
  onOpenLegal: (type: "privacy" | "terms") => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/10 text-white pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Neutral Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-white/[0.02] blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center group">
              <span
                className="text-white text-[26px] tracking-tight whitespace-nowrap font-montserrat font-normal"
              >
                BAFtech
              </span>
            </Link>

            <p className="text-zinc-400 text-sm font-geist leading-relaxed max-w-sm">
              Building intelligent AI products with privacy, accessibility, and user control at their core.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-1.5 text-xs text-white bg-white/[0.06] border border-white/15 px-3 py-1 rounded-full font-mono">
                <Shield className="w-3.5 h-3.5 text-white" />
                <span>Zero-Retention Certified</span>
              </div>
            </div>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-mono tracking-wider text-zinc-400">
              Company
            </div>
            <ul className="space-y-2 text-sm text-zinc-400 font-geist">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About BAFtech
                </a>
              </li>
              <li>
                <a href="#what-we-build" className="hover:text-white transition-colors">
                  What We Build
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-white transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Enquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Products */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-mono tracking-wider text-zinc-400">
              Products
            </div>
            <ul className="space-y-2 text-sm text-zinc-400 font-geist">
              <li>
                <a href="#openchat" className="hover:text-white transition-colors">
                  OpenChat Overview
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Multi-Model Gateway
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Document Analysis
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">
                  Confidential AI Compute
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Security */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-mono tracking-wider text-zinc-400">
              Legal & Trust
            </div>
            <ul className="space-y-2 text-sm text-zinc-400 font-geist">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal("privacy")}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal("terms")}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <span className="text-zinc-600 block text-xs font-mono pt-1">
                  Domain: {siteConfig.url.replace("https://", "")}
                </span>
              </li>
              <li>
                <span className="text-zinc-600 block text-xs font-mono">
                  Support: {siteConfig.email}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 font-geist">
            © {siteConfig.copyrightYear} {siteConfig.registeredName}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
