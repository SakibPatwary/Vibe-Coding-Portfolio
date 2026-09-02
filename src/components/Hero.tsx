import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InteractiveHeroCanvas } from './InteractiveHeroCanvas';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ArrowRight,
  Check,
  Copy,
  ExternalLink,
  Code2,
  FolderGit2,
  Send,
  Linkedin,
  Github,
  Facebook,
  Instagram
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Dynamic interactive canvas background */}
      <InteractiveHeroCanvas />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Top Bento Header Card */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/80 relative overflow-hidden">
          {/* Subtle decorative glow orb */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Avatar & Quick Info Bento Card */}
            <div className="lg:col-span-4 flex flex-col items-center text-center lg:text-left lg:items-start space-y-5">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-60 group-hover:opacity-100 blur-md transition duration-500" />
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-white/30 bg-neutral-900 shadow-2xl">
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80';
                    }}
                  />
                </div>
                {/* Active status bubble */}
                <div className="absolute bottom-2 right-2 flex items-center justify-center p-1.5 rounded-full bg-[#050505] border border-white/20 shadow-lg">
                  <span className="w-4 h-4 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-2">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.title.toUpperCase()}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white leading-tight">
                  {PERSONAL_INFO.name}
                </h1>
              </div>

              {/* Social Channels Pill Badges */}
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-2xl bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-2xl bg-white/5 hover:bg-blue-600/30 border border-white/10 text-gray-300 hover:text-blue-400 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Profile"
                  className="p-2.5 rounded-2xl bg-white/5 hover:bg-blue-500/30 border border-white/10 text-gray-300 hover:text-blue-400 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="p-2.5 rounded-2xl bg-white/5 hover:bg-pink-600/30 border border-white/10 text-gray-300 hover:text-pink-400 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Pitch, Bio, and Direct Contact Credentials */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
              {/* Bold Headline & High-Impact Summary */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-gray-400 leading-snug">
                  Full-Stack Software Developer Crafting High-Performance Web Applications.
                </h2>
                <div className="space-y-2 text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                  <p>
                    Specialized in modern JavaScript/TypeScript, React ecosystems, scalable backend APIs, and intuitive user experiences. Currently engineering web products at <span className="text-white font-medium">TGIT Bangladesh</span>.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Trusted by 15+ companies worldwide across the UK, Australia, and Bangladesh to build reliable, high-converting digital platforms.
                  </p>
                </div>
              </div>

              {/* Bento Grid of Real Personal Attributes (From Present Portfolio) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {/* Email */}
                <div className="group p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-gray-400 uppercase">Email</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-medium text-white truncate hover:text-blue-400 block transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="group p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-gray-400 uppercase">Phone</div>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-xs sm:text-sm font-medium text-white truncate hover:text-purple-400 block transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-gray-400 uppercase">Location</div>
                    <div className="text-xs sm:text-sm font-medium text-white">{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                {/* Birthday */}
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-gray-400 uppercase">Birthday</div>
                    <div className="text-xs sm:text-sm font-medium text-white">{PERSONAL_INFO.birthday}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href="#portfolio"
                  id="hero-view-portfolio-btn"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-black bg-white hover:bg-gray-100 shadow-xl shadow-white/10 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <FolderGit2 className="w-4 h-4" />
                  <span>View 17 Live Projects</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <a
                  href="#contact"
                  id="hero-contact-btn"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-blue-400" />
                  <span>Send Message</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
