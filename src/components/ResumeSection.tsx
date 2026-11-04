import React, { useState } from 'react';
import { EDUCATION, EXPERIENCE, PERSONAL_INFO } from '../data/portfolioData';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar, Sparkles, Building2, Download, FileText, Check } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadCV = () => {
    // Generate text/markdown format printable resume or trigger download
    const cvText = `# ${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.socials.github} | LinkedIn: ${PERSONAL_INFO.socials.linkedin}

## Professional Summary
${PERSONAL_INFO.aboutParagraphs.join('\n\n')}

## Experience
${EXPERIENCE.map(e => `* ${e.title} - ${e.institution} (${e.period})`).join('\n')}

## Education
${EDUCATION.map(ed => `* ${ed.title} - ${ed.institution} (${ed.period})`).join('\n')}
`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Sakib_Patwary_Software_Developer_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ACADEMIC & PROFESSIONAL BACKGROUND</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              RESUME
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl">
              Proven progression from academic foundations to professional software delivery at TGIT Bangladesh.
            </p>
          </div>

          <button
            type="button"
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-lg shrink-0"
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4 text-blue-400" />
                <span>Resume Downloaded!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-red-400" />
                <span>Download Resume (CV)</span>
              </>
            )}
          </button>
        </div>

        {/* Bento Columns: Experience & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Experience Column */}
          <div className="p-8 sm:p-10 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">Experience</h3>
                  <p className="text-xs font-mono text-gray-400">Engineering Roles</p>
                </div>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-red-500 before:to-transparent">
                {EXPERIENCE.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className="relative pl-9 group"
                  >
                    {/* Glowing Bullet */}
                    <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-blue-400 group-hover:border-white transition-colors flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-white" />
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/15 transition-all duration-200 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                          {item.title}
                        </span>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono">
                          <Calendar className="w-3 h-3" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-300">
                        <Building2 className="w-3.5 h-3.5 text-gray-400" />
                        <span>{item.institution}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div className="p-8 sm:p-10 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">Education</h3>
                  <p className="text-xs font-mono text-gray-400">Academic Degrees</p>
                </div>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-red-500 before:via-blue-500 before:to-transparent">
                {EDUCATION.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className="relative pl-9 group"
                  >
                    {/* Glowing Bullet */}
                    <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-red-400 group-hover:border-white transition-colors flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 group-hover:bg-white" />
                    </div>

                    <div className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/15 transition-all duration-200 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-sm sm:text-base font-bold text-white group-hover:text-red-400 transition-colors">
                          {item.title}
                        </span>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-400 text-xs font-mono">
                          <Calendar className="w-3 h-3" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-300">
                        <Building2 className="w-3.5 h-3.5 text-gray-400" />
                        <span>{item.institution}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
