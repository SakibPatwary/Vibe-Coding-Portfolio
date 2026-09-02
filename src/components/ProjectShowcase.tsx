import React, { useState, useMemo } from 'react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Search,
  Globe,
  Sparkles,
  Eye,
  X,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export const ProjectShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header and Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LIVE CLIENT & COMPANY WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              PORTFOLIO
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl">
              Showcasing all 17 live deployed web solutions built for businesses, educational institutes, travel agencies, and eCommerce brands.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 17 projects..."
              aria-label="Search projects"
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.08] transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (idx % 6) * 0.08 }}
              className="group rounded-[28px] bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-blue-500/40 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60"
            >
              {/* Project Image & Live Badge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900/80">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback placeholder pattern if image is unreachable
                    (e.target as HTMLImageElement).src =
                      `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80`;
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-blue-300">
                    {project.category}
                  </span>
                </div>

                {/* Hover Quick Action */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform shadow-lg cursor-pointer"
                    title="Quick Preview"
                    aria-label={`Preview ${project.title}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-blue-600 text-white hover:scale-110 transition-transform shadow-lg cursor-pointer"
                    title="Visit Live Site"
                    aria-label={`Visit ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-5 sm:p-6 space-y-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 truncate mt-1">
                    {project.url.replace(/^https?:\/\//, '')}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-500">
                    Project #0{idx + 1}
                  </span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded-[32px] bg-white/[0.02] border border-white/10 space-y-3">
            <p className="text-gray-400 text-sm">No project found matching "{searchQuery}"</p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl rounded-[32px] bg-[#0c0d12] border border-white/20 p-6 sm:p-8 space-y-6 relative shadow-2xl shadow-black overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80`;
                  }}
                />
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono uppercase">
                  {selectedProject.category}
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-gray-400 font-mono break-all">
                  {selectedProject.url}
                </p>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  Close
                </button>
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
                >
                  <span>Open Live Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
