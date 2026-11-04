import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Facebook, Instagram, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative z-10 bg-[#050505]/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand and Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <div className="text-lg font-display font-extrabold text-white">
            {PERSONAL_INFO.name}
          </div>
          <p className="text-xs font-mono text-gray-400">
            {PERSONAL_INFO.title} · {PERSONAL_INFO.location}
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-2xl bg-white/5 hover:bg-blue-600/30 border border-white/10 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-2.5 rounded-2xl bg-white/5 hover:bg-blue-500/30 border border-white/10 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2.5 rounded-2xl bg-white/5 hover:bg-red-600/30 border border-white/10 text-gray-400 hover:text-red-400 transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to top */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-gray-500 font-mono">
            © {new Date().getFullYear()} Sakib Patwary
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
