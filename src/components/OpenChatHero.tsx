"use client";

import React from "react";
import Image from "next/image";
import { openChatDetails } from "@/lib/content";
import { ArrowRight, Sparkles, Shield, Cpu } from "lucide-react";

export default function OpenChatHero() {
  return (
    <section id="openchat" className="bg-black relative w-full overflow-hidden pt-12 md:pt-20 pb-20 md:pb-28">
      {/* Subtle Neutral Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-indigo-500/[0.03] blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-[1552px] mx-auto px-4 md:px-14">
        {/* Section Pill Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{openChatDetails.sectionTitle.toUpperCase()}</span>
          </div>
          <span className="text-xs text-zinc-600 font-mono">|</span>
          <span className="text-xs text-zinc-300 font-mono">{openChatDetails.headline}</span>
        </div>

        {/* Content Section - Exact Figma Layout */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-[73px] mb-12 md:mb-16">
          {/* Title with Exact Urbanist Font Split */}
          <h2
            className="shrink-0 text-white leading-none text-[clamp(56px,12vw,136px)] w-full md:w-auto tracking-tight select-none font-urbanist"
          >
            <span className="font-semibold text-white">Open</span>
            <span className="font-extralight text-zinc-400">Chat</span>
          </h2>

          {/* Description + CTA */}
          <div className="flex flex-col items-start gap-6 md:gap-[36px] mt-6 md:mt-2 w-full md:flex-1">
            <p
              className="text-white text-[17px] sm:text-[20px] md:text-[24px] leading-relaxed max-w-3xl font-geist font-normal text-shadow-hero"
            >
              {openChatDetails.figmaText}
            </p>

            <div className="flex flex-wrap items-center gap-4 font-geist">
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 bg-white text-black text-[16px] px-8 py-3.5 rounded-full font-medium hover:bg-zinc-200 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2),0_0_30px_rgba(99,102,241,0.2)]"
              >
                <span>{openChatDetails.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#privacy"
                className="inline-flex items-center gap-2 bg-white/[0.06] text-white text-[15px] px-6 py-3.5 rounded-full font-medium hover:bg-white/[0.12] border border-white/15 transition-all duration-200"
              >
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Privacy Architecture</span>
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Product Copy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {openChatDetails.paragraphs.map((p, i) => (
            <div
              key={i}
              className="glass-panel p-6 rounded-3xl border border-white/15 bg-white/[0.02] hover:border-indigo-500/30 transition-colors"
            >
              <div className="text-xs font-mono text-indigo-300 mb-2 font-semibold">
                Feature Point 0{i + 1}
              </div>
              <p className="text-sm sm:text-base text-zinc-200 font-geist leading-relaxed">
                {p}
              </p>
            </div>
          ))}
        </div>

        {/* Hero Curved Viewport Artwork - Top-Only 77px Border Radius matching Figma */}
        <div className="relative w-full rounded-t-[36px] md:rounded-t-[77px] rounded-b-none overflow-hidden border-t border-x border-white/15 bg-[#050505] shadow-2xl group">
          {/* Subtle top glare reflection */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent z-20 pointer-events-none" />

          {/* Desktop Image */}
          <div className="hidden md:block relative w-full h-[520px] lg:h-[620px] xl:h-[720px] overflow-hidden">
            <Image
              src="/images/desktop.png"
              alt="OpenChat Desktop Interface Artwork"
              fill
              priority
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
          </div>

          {/* Mobile Image */}
          <div className="md:hidden relative w-full h-[460px] overflow-hidden">
            <Image
              src="/images/mobile.png"
              alt="OpenChat Mobile Interface Artwork"
              fill
              priority
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
          </div>

          {/* Floating Live Indicator Tag in artwork */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="glass-panel px-4 py-2 rounded-2xl flex items-center gap-2.5 backdrop-blur-xl border border-emerald-500/30 bg-black/60 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-white font-geist">
                Private AI Platform Active
              </span>
            </div>

            <div className="hidden sm:flex glass-panel px-4 py-2 rounded-2xl items-center gap-2 backdrop-blur-xl border border-indigo-500/20 bg-black/60 text-xs text-zinc-300">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>Multi-Model Orchestration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
