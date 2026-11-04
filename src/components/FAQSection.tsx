import React, { useState } from 'react';
import { FAQS } from '../data/portfolioData';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMON INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Everything you need to know about working together, timelines, and technical solutions.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-[24px] border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white/[0.05] border-white/20 shadow-xl'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/15'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-display font-semibold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-white bg-white/10' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Callout box */}
        <div className="p-6 rounded-[28px] bg-gradient-to-r from-blue-500/10 via-red-500/10 to-transparent border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-base font-display font-bold text-white">Have a specific or custom question?</h4>
            <p className="text-xs sm:text-sm text-gray-400">
              I'm always open to discussing custom architecture, enterprise contracts, or technical advising.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-gray-100 text-black font-bold text-xs shrink-0 transition-colors shadow-lg"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Ask Directly</span>
          </a>
        </div>
      </div>
    </section>
  );
};
