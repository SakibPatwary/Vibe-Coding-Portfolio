import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Sparkles,
  Clock,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
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

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields.');
      return;
    }

    setStatus('submitting');
    // Simulate real asynchronous submission
    setTimeout(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setTimeout(() => setStatus('idle'), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIRECT COMMUNICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            CONTACT
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Have a project in mind, an opportunity, or want to discuss a new software build? Let's connect!
          </p>
        </div>

        {/* Top: 2 Balanced Equal-Height Columns (Direct Info + Contact Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Info & Availability (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-6 sm:p-8 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-5 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <h3 className="text-lg font-display font-bold text-white">
                    Direct Contact Details
                  </h3>
                  <span className="text-[11px] font-mono text-blue-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    Available for hire
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Email */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:border-white/15 transition-colors">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-mono uppercase text-gray-400">Email</div>
                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          className="text-xs sm:text-sm font-medium text-white truncate block hover:text-blue-400 transition-colors"
                        >
                          {PERSONAL_INFO.email}
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                      title="Copy Email"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-blue-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Phone */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:border-white/15 transition-colors">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-mono uppercase text-gray-400">Phone / WhatsApp</div>
                        <a
                          href={`tel:${PERSONAL_INFO.phone}`}
                          className="text-xs sm:text-sm font-medium text-white truncate block hover:text-red-400 transition-colors"
                        >
                          {PERSONAL_INFO.phone}
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyPhone}
                      className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                      title="Copy Phone"
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-blue-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Location */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-gray-400">Location</div>
                      <div className="text-xs sm:text-sm font-medium text-white">{PERSONAL_INFO.location}</div>
                    </div>
                  </div>

                  {/* Birthday */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-gray-400">Birthday</div>
                      <div className="text-xs sm:text-sm font-medium text-white">{PERSONAL_INFO.birthday}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Commitments */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent border border-blue-500/20 text-xs text-gray-300 space-y-2 mt-4">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Rapid Response Time</span>
                </div>
                <p className="text-gray-400 text-[11px] leading-relaxed">
                  Inquiries answered typically within 12–24 hours. Available for scheduled Zoom/Meet consultations and async reviews.
                </p>
                <div className="flex items-center gap-2 pt-1 text-[11px] text-gray-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>NDA & Privacy Respected</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="p-8 sm:p-10 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl space-y-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white">Send A Direct Message</h3>
                  </div>
                  <span className="text-xs font-mono text-gray-400">24/7 Form</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">
                  Fill out the form below with your project goals or inquiries.
                </p>
              </div>

              {status === 'success' && (
                <div className="p-4 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-300 text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-blue-400" />
                  <span>Your message sent successfully! Thank you for reaching out.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-2xl bg-red-500/15 border border-red-500/30 text-red-300 text-sm flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSend} className="space-y-4 flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono text-gray-300 block">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.08] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono text-gray-300 block">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. name@company.com"
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.08] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-mono text-gray-300 block">
                    Subject / Project Category
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Web App Development / Hiring / Consulting"
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.08] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-mono text-gray-300 block">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, timeline, or requirements..."
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.08] transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  id="contact-submit-btn"
                  className="w-full py-4 rounded-2xl bg-white hover:bg-gray-100 text-black font-bold text-sm shadow-xl shadow-white/10 flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Full-Width Panoramic Map Experience - Beautifully balanced without empty space */}
        <div className="p-4 sm:p-6 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-2">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-display font-bold text-white">Dhaka Base of Operations & Global Remote</h4>
                <p className="text-xs text-gray-400 font-mono">Latitude 23.8103° N, Longitude 90.4125° E · Bangladesh (UTC+6)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                <span>Working with Clients Worldwide</span>
              </span>
            </div>
          </div>

          <div className="h-72 sm:h-96 w-full rounded-[24px] overflow-hidden relative border border-white/10">
            <iframe
              src={PERSONAL_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dhaka Location Map - Sakib Patwary"
            />
            <div className="absolute bottom-4 left-4 px-4 py-2 rounded-2xl bg-black/85 backdrop-blur-md border border-white/20 text-xs font-mono text-white flex items-center gap-2 shadow-2xl">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="font-semibold">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
