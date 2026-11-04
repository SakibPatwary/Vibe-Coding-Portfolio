/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TechnicalSkillsSection } from './components/TechnicalSkillsSection';
import { ResumeSection } from './components/ResumeSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Atmosphere } from './components/Atmosphere';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 selection:text-blue-300 relative selection:outline-none overflow-x-hidden">
      <Atmosphere />
      {/* Background ambient radial gradients for glowing Bento atmosphere */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
        aria-hidden="true"
      >
        <div className="absolute top-[-10%] left-[-10%] w-[50%] max-w-[700px] h-[500px] bg-blue-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] max-w-[700px] h-[500px] bg-red-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-[35%] right-[-5%] w-[400px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-[70%] left-[-5%] w-[400px] h-[500px] bg-red-600/10 rounded-full blur-[150px]" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections with complete portfolio capabilities */}
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <TechnicalSkillsSection />
        <ResumeSection />
        <ProjectShowcase />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
