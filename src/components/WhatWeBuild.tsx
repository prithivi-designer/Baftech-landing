"use client";

import React from "react";
import { whatWeBuildItems } from "@/lib/content";
import { AppWindow, Bot, ShieldCheck, LayoutTemplate, Sparkles } from "lucide-react";

export default function WhatWeBuild() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Boxes":
        return <AppWindow className="w-6 h-6 text-white" />;
      case "Bot":
        return <Bot className="w-6 h-6 text-white" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-white" />;
      case "LayoutTemplate":
        return <LayoutTemplate className="w-6 h-6 text-white" />;
      default:
        return <AppWindow className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="what-we-build" className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/[0.08]">
      {/* Subtle Neutral Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-white/[0.02] blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-white mb-4">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>WHAT WE BUILD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 font-urbanist">
            What We Build
          </h2>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whatWeBuildItems.map((item, index) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover p-8 md:p-10 rounded-3xl relative overflow-hidden group flex flex-col justify-between min-h-[260px] border border-white/15"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/20 text-zinc-300 font-medium">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors font-urbanist">
                  {item.title}
                </h3>

                <p className="text-zinc-200 text-base leading-relaxed font-geist">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
