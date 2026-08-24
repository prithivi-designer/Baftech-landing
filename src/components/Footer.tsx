"use client";

import React from "react";
import Link from "next/link";
import { footerContent } from "@/lib/content";
import { ArrowUp } from "lucide-react";

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
              <span className="text-white text-[26px] tracking-tight whitespace-nowrap font-montserrat font-normal">
                {footerContent.brand}
              </span>
            </Link>

            <p className="text-zinc-300 text-sm font-geist leading-relaxed max-w-sm">
              {footerContent.tagline}
            </p>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-mono tracking-wider text-zinc-400 font-semibold">
              Company
            </div>
            <ul className="space-y-2 text-sm text-zinc-300 font-geist">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Products */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-mono tracking-wider text-zinc-400 font-semibold">
              Products
            </div>
            <ul className="space-y-2 text-sm text-zinc-300 font-geist">
              <li>
                <a href="#openchat" className="hover:text-white transition-colors">
                  OpenChat
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-mono tracking-wider text-zinc-400 font-semibold">
              Legal
            </div>
            <ul className="space-y-2 text-sm text-zinc-300 font-geist">
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
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-400 font-geist">
            {footerContent.copyright}
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
