import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { motion } from 'motion/react';
import {
  Code,
  Server,
  Wrench,
  Sparkles,
  Cpu,
  Layers,
  Terminal,
  CheckCircle2
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'Frontend & UI Engineering': <Code className="w-5 h-5 text-blue-400" />,
  'Backend, APIs & Architecture': <Server className="w-5 h-5 text-purple-400" />,
  'Design, Tools & Workflow': <Wrench className="w-5 h-5 text-emerald-400" />
};

const categoryAccents: Record<string, { bar: string; badge: string }> = {
  'Frontend & UI Engineering': {
    bar: 'bg-gradient-to-r from-blue-500 to-indigo-500',
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  },
  'Backend, APIs & Architecture': {
    bar: 'bg-gradient-to-r from-purple-500 to-pink-500',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
  },
  'Design, Tools & Workflow': {
    bar: 'bg-gradient-to-r from-emerald-500 to-teal-500',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
  }
};

export const TechnicalSkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            SKILLS & TOOLCHAIN
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Technologies, frameworks, and engineering standards utilized across production web architectures.
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((categoryGroup, index) => {
            const accents = categoryAccents[categoryGroup.category] || {
              bar: 'bg-blue-500',
              badge: 'bg-white/5 text-white border-white/10'
            };

            return (
              <motion.div
                key={categoryGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 sm:p-8 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col justify-between space-y-6 hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10">
                        {categoryIcons[categoryGroup.category] || <Terminal className="w-5 h-5 text-gray-400" />}
                      </div>
                      <h3 className="text-base sm:text-lg font-display font-bold text-white leading-tight">
                        {categoryGroup.category}
                      </h3>
                    </div>
                  </div>

                  {/* Skills List with Progress Bars & Descriptions */}
                  <div className="space-y-5">
                    {categoryGroup.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="font-semibold text-white tracking-wide">{skill.name}</span>
                          <span className="text-gray-400">{skill.level}%</span>
                        </div>
                        {/* Progress track */}
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${accents.bar}`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        {skill.description && (
                          <p className="text-[11px] text-gray-400 pt-0.5">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Production Grade</span>
                  </span>
                  <span>Stack {index + 1}/3</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Tech Badges Marquee Strip */}
        <div className="p-6 rounded-[28px] bg-white/[0.02] border border-white/5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <span className="text-xs font-mono text-gray-400 uppercase tracking-wider mr-2">Core Arsenal:</span>
          {[
            'React.js',
            'Next.js',
            'TypeScript',
            'JavaScript ES6+',
            'Tailwind CSS',
            'Node.js',
            'Express.js',
            'REST APIs',
            'PostgreSQL',
            'MongoDB',
            'Git / GitHub',
            'Figma',
            'Vite',
            'Responsive UI/UX'
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
