"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Instagram } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-glass"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo Wordmark */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none"
          >
            <span className="text-white text-[28px] md:text-[32px] tracking-tight whitespace-nowrap transition-opacity group-hover:opacity-90 font-montserrat font-normal select-none">
              BAFtech
            </span>
          </Link>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-3">
            {/* Instagram Link */}
            <a
              href="https://instagram.com/baftech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/15 hover:bg-white/20 hover:border-white/40 flex items-center justify-center text-zinc-300 hover:text-white transition-all shadow-sm focus:outline-none"
              aria-label="Follow BAFtech on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Telegram Link */}
            <a
              href="https://t.me/baftech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/15 hover:bg-white/20 hover:border-white/40 flex items-center justify-center text-zinc-300 hover:text-white transition-all shadow-sm focus:outline-none"
              aria-label="Join BAFtech on Telegram"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>

            {/* CTA Button */}
            <a
              href="#openchat"
              className="inline-flex items-center gap-1.5 bg-white text-black text-[13.5px] px-5 py-2 rounded-full font-semibold hover:bg-zinc-200 active:scale-[0.98] transition-all duration-200 shadow-glow-sm font-geist ml-1"
            >
              <span>Explore OpenChat</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
