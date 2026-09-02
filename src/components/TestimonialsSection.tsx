import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { motion } from 'motion/react';
import { Quote, Star, Sparkles, Building2, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CLIENT & TEAM ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            TESTIMONIALS
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            What directors, project managers, and business owners say about collaborating with me.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-8 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col justify-between space-y-6 hover:border-white/20 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-white/20" />
                </div>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed italic">
                  "{testimonial.feedback}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3.5">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover border border-white/20 shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-sm font-bold text-white flex items-center gap-1.5 truncate">
                    <span>{testimonial.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  </div>
                  <div className="text-xs text-gray-400 truncate">
                    {testimonial.role} · <span className="text-gray-300">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
