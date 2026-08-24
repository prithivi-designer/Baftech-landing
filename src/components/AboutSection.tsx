"use client";

import React from "react";
import { aboutContent } from "@/lib/content";
import { Sparkles, Globe, Mail, Shield, SlidersHorizontal, Layers } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-black border-t border-white/[0.08] overflow-hidden">
      {/* Subtle Neutral Glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Story */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-white w-fit mb-6">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>{aboutContent.title.toUpperCase()}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6 font-urbanist">
              {aboutContent.subtitle}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-geist leading-relaxed">
              {aboutContent.paragraphs.map((p, idx) => (
                <p key={idx} className="text-zinc-200">
                  {p}
                </p>
              ))}
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <Shield className="w-5 h-5 text-white mb-2" />
                <div className="text-sm font-bold text-white">Privacy</div>
                <p className="text-xs text-zinc-300 mt-1">Data protection at the core</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <Layers className="w-5 h-5 text-white mb-2" />
                <div className="text-sm font-bold text-white">Accessibility</div>
                <p className="text-xs text-zinc-300 mt-1">Simple user experiences</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <SlidersHorizontal className="w-5 h-5 text-white mb-2" />
                <div className="text-sm font-bold text-white">User Control</div>
                <p className="text-xs text-zinc-300 mt-1">Greater visibility & ownership</p>
              </div>
            </div>
          </div>

          {/* Right Column: Company Information Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl bg-[#050505] space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  Company Overview
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 font-urbanist">
                  {aboutContent.title}
                </h3>
              </div>

              <p className="text-sm text-zinc-200 leading-relaxed font-geist">
                {aboutContent.companyDetails.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 text-sm font-mono">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-white" /> Website:
                  </span>
                  <span className="text-white font-semibold">{aboutContent.companyDetails.website}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-white" /> Business Email:
                  </span>
                  <a href={`mailto:${aboutContent.companyDetails.businessEmail}`} className="text-white font-semibold hover:underline">
                    {aboutContent.companyDetails.businessEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
