"use client";

import React from "react";
import { siteConfig } from "@/lib/content";
import Scanner from "./Scanner";
import GlassIcon from "./GlassIcon";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-44 pb-20 md:pb-28 overflow-hidden bg-black text-white min-h-[85vh] flex flex-col justify-center">
      {/* Scanner Background with Subtle Midnight Indigo Sheen */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <Scanner
          color1="#0c0e1e"
          color2="#4f46e5"
          color3="#ffffff"
          speed={0.4}
          sweepSpeed={0.2}
          sweepWidth={1.6}
          sweepFalloff={6}
          scale={1.5}
          frequency={2}
          ripple={0.22}
          bandDensity={11}
          lineSharpness={5.5}
          glow={0.25}
          scanDirection="vertical"
          colorSpread={0.5}
          brightness={1.1}
          contrast={1.15}
          softness={1.4}
          vignette={0.45}
          scanline={true}
          grain={true}
          grainIntensity={0.04}
          opacity={0.7}
          mouseInteraction={true}
          mouseRadius={0.5}
          mouseStrength={0.5}
        />
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/[0.04] blur-[160px] pointer-events-none" />
        {/* Top & bottom gradient fades */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Badge with Subtle Accent */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 backdrop-blur-md mb-8 hover:border-indigo-500/40 transition-colors shadow-lg">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-300"></span>
            </span>
            <span className="text-xs md:text-sm text-indigo-200 font-geist tracking-wide font-medium">
              {siteConfig.name}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-urbanist drop-shadow-2xl">
            Building AI Products
            <br />
            <span className="text-gradient-accent">for the Next Generation</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-200 max-w-3xl mx-auto leading-relaxed mb-10 font-geist drop-shadow-md">
            {siteConfig.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-16 font-geist">
            <a
              href="#openchat"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black text-base px-8 py-3.5 rounded-full font-semibold hover:bg-zinc-100 active:scale-95 transition-all duration-200 shadow-[0_0_25px_rgba(255,255,255,0.2),0_0_35px_rgba(99,102,241,0.2)]"
            >
              <span>{siteConfig.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#what-we-build"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.05] text-white text-base px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 border border-white/20 backdrop-blur-md transition-all duration-200"
            >
              <span>What We Build</span>
            </a>
          </div>

          {/* Trust Value Points Bar with 3D Frosted Glass Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-4xl pt-6 border-t border-white/15">
            <div className="glass-panel p-4 rounded-2xl flex items-center gap-3.5 text-left border border-white/15 bg-black/60 backdrop-blur-xl hover:border-emerald-500/40 transition-colors group">
              <GlassIcon type="privacy" size="sm" />
              <div>
                <div className="text-xs font-bold text-white">Privacy</div>
                <div className="text-[11px] text-zinc-300">Data protection at the core</div>
              </div>
            </div>

            <div className="glass-panel p-4 rounded-2xl flex items-center gap-3.5 text-left border border-white/15 bg-black/60 backdrop-blur-xl hover:border-cyan-500/40 transition-colors group">
              <GlassIcon type="control" size="sm" />
              <div>
                <div className="text-xs font-bold text-white">User Control</div>
                <div className="text-[11px] text-zinc-300">Greater visibility & ownership</div>
              </div>
            </div>

            <div className="glass-panel p-4 rounded-2xl flex items-center gap-3.5 text-left border border-white/15 bg-black/60 backdrop-blur-xl hover:border-purple-500/40 transition-colors group">
              <GlassIcon type="multi-model" size="sm" />
              <div>
                <div className="text-xs font-bold text-white">Accessibility</div>
                <div className="text-[11px] text-zinc-300">Advanced AI made simple</div>
              </div>
            </div>

            <div className="glass-panel p-4 rounded-2xl flex items-center gap-3.5 text-left border border-white/15 bg-black/60 backdrop-blur-xl hover:border-amber-500/40 transition-colors group">
              <GlassIcon type="web" size="sm" />
              <div>
                <div className="text-xs font-bold text-white">Useful Tools</div>
                <div className="text-[11px] text-zinc-300">For users & businesses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
