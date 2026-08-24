"use client";

import React from "react";
import { siteConfig } from "@/lib/content";
import Scanner from "./Scanner";
import { ArrowRight, ShieldCheck, Sparkles, Cpu, EyeOff } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-44 pb-20 md:pb-28 overflow-hidden bg-black text-white min-h-[85vh] flex flex-col justify-center">
      {/* Scanner Background Component from React Bits */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <Scanner
          color1="#18181B"
          color2="#71717A"
          color3="#FFFFFF"
          speed={0.5}
          sweepSpeed={0.25}
          sweepWidth={1.6}
          sweepFalloff={6}
          scale={1.5}
          frequency={2}
          ripple={0.22}
          bandDensity={11}
          lineSharpness={5.5}
          glow={0.3}
          scanDirection="vertical"
          colorSpread={0.7}
          brightness={1.2}
          contrast={1.15}
          softness={1.4}
          vignette={0.4}
          scanline={true}
          grain={true}
          grainIntensity={0.05}
          opacity={0.85}
          mouseInteraction={true}
          mouseRadius={0.5}
          mouseStrength={0.6}
        />
        {/* Subtle top and bottom gradient fades to ensure content legibility and smooth section transitions */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-md mb-8 hover:border-white/40 transition-colors shadow-lg">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-xs md:text-sm text-white font-geist tracking-wide font-medium">
              {siteConfig.tagline}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-urbanist drop-shadow-2xl">
            Building Practical AI
            <br />
            <span className="text-gradient">For The Next Generation</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed mb-10 font-geist drop-shadow-md">
            {siteConfig.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-16 font-geist">
            <a
              href="#openchat"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black text-base px-8 py-3.5 rounded-full font-semibold hover:bg-zinc-200 active:scale-95 transition-all duration-200 shadow-glow"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#what-we-build"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black/60 text-white text-base px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 border border-white/25 backdrop-blur-md transition-all duration-200"
            >
              <span>What We Build</span>
            </a>
          </div>

          {/* Trust Value Points Bar - Pure Monochrome & High Contrast */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-4xl pt-6 border-t border-white/20">
            <div className="glass-panel p-4 rounded-2xl flex items-center gap-3.5 text-left border border-white/15 bg-black/50 backdrop-blur-xl">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <EyeOff className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">0% Data Retention</div>
                <div className="text-[11px] text-zinc-300">Zero persistent conversation logs</div>
              </div>
            </div>

            <div className="glass-panel p-4 rounded-2xl flex items-center gap-3.5 text-left border border-white/15 bg-black/50 backdrop-blur-xl">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">End-to-End Control</div>
                <div className="text-[11px] text-zinc-300">Client-side security first</div>
              </div>
            </div>

            <div className="glass-panel p-4 rounded-2xl flex items-center gap-3.5 text-left border border-white/15 bg-black/50 backdrop-blur-xl">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Multi-Model AI</div>
                <div className="text-[11px] text-zinc-300">Frontier LLMs unified</div>
              </div>
            </div>

            <div className="glass-panel p-4 rounded-2xl flex items-center gap-3.5 text-left border border-white/15 bg-black/50 backdrop-blur-xl">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Instant Access</div>
                <div className="text-[11px] text-zinc-300">No account required to start</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
