"use client";

import React from "react";
import { aboutContent } from "@/lib/content";
import { Sparkles, Shield, SlidersHorizontal, Layers } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-black border-t border-white/[0.08] overflow-hidden">
      {/* Subtle Neutral Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/[0.02] blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-white mb-6">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>{aboutContent.title.toUpperCase()}</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-8 font-urbanist max-w-3xl">
            {aboutContent.subtitle}
          </h2>

          {/* Story Paragraphs */}
          <div className="space-y-5 text-base sm:text-lg md:text-xl text-zinc-300 font-geist leading-relaxed max-w-3xl">
            {aboutContent.paragraphs.map((p, idx) => (
              <p key={idx} className="text-zinc-200">
                {p}
              </p>
            ))}
          </div>

          {/* 3 Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12 pt-10 border-t border-white/10 w-full max-w-4xl">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col items-center text-center hover:border-white/20 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-3">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="text-base font-bold text-white font-urbanist">Privacy</div>
              <p className="text-xs text-zinc-300 mt-1 font-geist">Data protection at the core</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col items-center text-center hover:border-white/20 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-3">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <div className="text-base font-bold text-white font-urbanist">Accessibility</div>
              <p className="text-xs text-zinc-300 mt-1 font-geist">Simple user experiences</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col items-center text-center hover:border-white/20 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-3">
                <SlidersHorizontal className="w-5 h-5 text-white" />
              </div>
              <div className="text-base font-bold text-white font-urbanist">User Control</div>
              <p className="text-xs text-zinc-300 mt-1 font-geist">Greater visibility & ownership</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
