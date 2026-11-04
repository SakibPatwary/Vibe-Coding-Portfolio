import React from 'react';
import { PERSONAL_INFO, SERVICES } from '../data/portfolioData';
import { motion } from 'motion/react';
import { Code, Palette, Smartphone, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const serviceIcons: Record<string, React.ReactNode> = {
  Code: <Code className="w-6 h-6 text-blue-400" />,
  Palette: <Palette className="w-6 h-6 text-red-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-blue-400" />,
  Layers: <Layers className="w-6 h-6 text-red-400" />
};

const serviceGradients: Record<string, string> = {
  Code: 'from-blue-500/20 via-blue-500/5 to-transparent border-blue-500/30 hover:border-blue-500/60',
  Palette: 'from-red-500/20 via-red-500/5 to-transparent border-red-500/30 hover:border-red-500/60',
  Smartphone: 'from-blue-500/20 via-blue-500/5 to-transparent border-blue-500/30 hover:border-blue-500/60',
  Layers: 'from-red-500/20 via-red-500/5 to-transparent border-red-500/30 hover:border-red-500/60'
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* About Card */}
        <div className="p-8 sm:p-12 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>BIOGRAPHY & PHILOSOPHY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                ABOUT ME
              </h2>
            </div>
            <span className="text-xs font-mono text-gray-400">
              {PERSONAL_INFO.name} · {PERSONAL_INFO.title}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-gray-300 leading-relaxed">
              <p className="font-medium text-white/95">
                {PERSONAL_INFO.aboutParagraphs[0]}
              </p>
              <p className="text-gray-400">
                {PERSONAL_INFO.aboutParagraphs[1]}
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                Core Focus
              </div>
              <div className="space-y-2.5 text-sm text-gray-300 font-normal">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Functional & User-Friendly</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Attractive & Eye-Catching</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Personal Touch & Clear Identity</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Client & Company Proven</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-blue-400 transition-colors"
                >
                  <span>Inquire for new projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services ("What I can do!") */}
        <div id="services" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
              <span>SPECIALIZED CAPABILITIES</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              What I can do!
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              End-to-end digital creation crafted to represent your unique brand and functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((service, index) => {
              const borderClass = serviceGradients[service.iconName] || 'border-white/10';
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`p-6 sm:p-7 rounded-[28px] bg-gradient-to-b ${borderClass} border backdrop-blur-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50`}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {serviceIcons[service.iconName]}
                    </div>
                    <h4 className="text-lg font-display font-bold text-white group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
                    <span>Capability 0{index + 1}</span>
                    <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-blue-400 transition-colors" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
