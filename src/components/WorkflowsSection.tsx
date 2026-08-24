"use client";

import React from "react";
import { workflowsContent } from "@/lib/content";
import { Search, Palette, Cpu, BarChart3, Zap, Sparkles } from "lucide-react";

export default function WorkflowsSection() {
  const getWorkflowIcon = (iconName: string) => {
    switch (iconName) {
      case "Search":
        return <Search className="w-5 h-5 text-white" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-white" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-white" />;
      case "BarChart3":
        return <BarChart3 className="w-5 h-5 text-white" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-white" />;
      default:
        return <Sparkles className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="workflows" className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/[0.08]">
      {/* Subtle Neutral Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-white mb-4">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>ACTIONABLE WORKFLOWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 font-urbanist">
            {workflowsContent.title}
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-geist">
            {workflowsContent.subtitle}
          </p>
        </div>

        {/* 5 Workflows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowsContent.items.map((wf, idx) => (
            <div
              key={wf.id}
              className={`glass-panel glass-panel-hover p-8 rounded-3xl border border-white/15 flex flex-col justify-between group min-h-[220px] ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
                    {getWorkflowIcon(wf.icon)}
                  </div>
                  <span className="text-xs font-mono text-zinc-400 font-medium">0{idx + 1}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors font-urbanist">
                  {wf.title}
                </h3>

                <p className="text-sm text-zinc-300 font-geist leading-relaxed">
                  {wf.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
