"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OpenChatHero from "@/components/OpenChatHero";
import AboutSection from "@/components/AboutSection";
import WhatWeBuild from "@/components/WhatWeBuild";
import CapabilitiesPlayground from "@/components/CapabilitiesPlayground";
import PrivacySection from "@/components/PrivacySection";
import WorkflowsSection from "@/components/WorkflowsSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LegalModal from "@/components/LegalModal";

export default function Home() {
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null);

  return (
    <main className="min-h-screen bg-black text-white relative selection:bg-indigo-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Brand Hero Introduction */}
      <Hero />

      {/* Flagship OpenChat Hero Section (Exact Figma Spec & Artwork) */}
      <OpenChatHero />

      {/* About BAFtech & Practical AI Products */}
      <AboutSection />

      {/* Core Offerings Bento Grid (What We Build) */}
      <WhatWeBuild />

      {/* Interactive 8-Capability Live Lab */}
      <CapabilitiesPlayground />

      {/* Privacy by Design & Security Architecture */}
      <PrivacySection />

      {/* Built for More Than Chat (Workflows & Outcomes) */}
      <WorkflowsSection />

      {/* Our Approach (Privacy, Intelligence, Control) */}
      <PhilosophySection />

      {/* Contact & Business Enquiries Form */}
      <ContactSection />

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Legal Dialog Modals */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </main>
  );
}
