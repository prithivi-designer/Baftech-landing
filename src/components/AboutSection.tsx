"use client";

import React from "react";
import { aboutContent } from "@/lib/content";
import GlassIcon from "./GlassIcon";
import { Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-black border-t border-white/[0.08] overflow-hidden">
      {/* Subtle Neutral Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-500/[0.03] blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
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

          {/* 3 Core Pillars with Frosted Neon Glass Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12 pt-10 border-t border-white/10 w-full max-w-4xl">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-center text-center hover:border-emerald-500/40 hover:bg-emerald-500/[0.02] transition-all group">
              <div className="mb-4">
                <GlassIcon type="privacy" size="md" />
              </div>
              <div className="text-base font-bold text-white font-urbanist">Privacy</div>
              <p className="text-xs text-zinc-300 mt-1 font-geist">Data protection at the core</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-center text-center hover:border-purple-500/40 hover:bg-purple-500/[0.02] transition-all group">
              <div className="mb-4">
                <GlassIcon type="multi-model" size="md" />
              </div>
              <div className="text-base font-bold text-white font-urbanist">Accessibility</div>
              <p className="text-xs text-zinc-300 mt-1 font-geist">Simple user experiences</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-center text-center hover:border-cyan-500/40 hover:bg-cyan-500/[0.02] transition-all group">
              <div className="mb-4">
                <GlassIcon type="control" size="md" />
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
