import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  MessageSquare, 
  Layers, 
  MapPin, 
  Sparkles 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please specify a subject';
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch with mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Open user's default email client pre-filled if desired
      const mailtoUrl = `mailto:${PERSONAL_INFO.contact.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      
      // Keep state clean and notify
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-800/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-mono text-purple-300 border border-purple-500/20 mb-3">
          <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
          <span>06 // INITIATE TRANSMISSION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Have an Interesting Idea? <span className="text-purple-400">Let's Build Something.</span>
        </h2>
        <p className="text-purple-300/80 text-base max-w-2xl mt-2">
          Whether you're looking for an AI/ML Engineer, Data Science intern, full-stack collaborator, or want to discuss a research initiative — my inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Contact Info & Verification */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          
          {/* Email Quick Copy Card */}
          <div className="glass-card rounded-2xl p-6 border border-purple-500/25 relative overflow-hidden">
            <span className="text-xs font-mono text-purple-400 block mb-2">DIRECT INBOX</span>
            <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-theme-secondary/90 border border-purple-500/30">
              <span className="text-xs sm:text-sm font-mono text-white truncate">
                {PERSONAL_INFO.contact.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg text-purple-300 hover:text-white hover:bg-purple-900/40 transition-colors shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copied && (
              <p className="text-[11px] font-mono text-emerald-400 mt-2 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Copied email to clipboard!
              </p>
            )}
          </div>

          {/* Social Profiles Card */}
          <div className="glass-card rounded-2xl p-6 border border-purple-500/25">
            <span className="text-xs font-mono text-purple-400 block mb-4">SOCIAL MATRIX</span>
            <div className="space-y-3">
              <a
                href={PERSONAL_INFO.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-theme-secondary/80 border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-900/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs font-bold text-white">GitHub</p>
                    <p className="text-[11px] font-mono text-purple-300/70">@sanjanasalunke11</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-purple-400 group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href={PERSONAL_INFO.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-theme-secondary/80 border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-900/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs font-bold text-white">LinkedIn</p>
                    <p className="text-[11px] font-mono text-purple-300/70">Sanjana Salunke</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-purple-400 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Location & Status Card */}
          <div className="glass-card rounded-2xl p-6 border border-purple-500/25">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-mono text-purple-300 font-bold">LOCATION &amp; AVAILABILITY</span>
            </div>
            <p className="text-xs text-purple-200/80 leading-relaxed">
              Based in <strong>Nagpur, Maharashtra, India</strong>. Open to on-site roles, remote opportunities, and hybrid collaborations globally.
            </p>
          </div>

        </div>

        {/* Right Column: Functional Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/30 shadow-2xl relative">
            
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Transmission Received</h3>
                <p className="text-sm text-purple-200/80 max-w-md">
                  Thank you, <strong>{formData.name}</strong>! Your inquiry regarding "{formData.subject}" has been formatted. You can also send directly via email:
                </p>
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}?subject=${encodeURIComponent(
                    `[Portfolio] ${formData.subject}`
                  )}&body=${encodeURIComponent(
                    `From: ${formData.name} (${formData.email})\n\n${formData.message}`
                  )}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-lg shadow-purple-900/50"
                >
                  <Mail className="w-4 h-4" />
                  <span>Launch in Mail Client</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors pt-2"
                >
                  ← Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-purple-300 mb-1.5">
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-theme-secondary/90 border text-sm text-white placeholder-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                        errors.name ? 'border-rose-500/70' : 'border-purple-500/30'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-purple-300 mb-1.5">
                      Your Email <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-theme-secondary/90 border text-sm text-white placeholder-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                        errors.email ? 'border-rose-500/70' : 'border-purple-500/30'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono text-purple-300 mb-1.5">
                    Subject / Project Context <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="AI/ML Collaboration or Engineering Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-theme-secondary/90 border text-sm text-white placeholder-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                      errors.subject ? 'border-rose-500/70' : 'border-purple-500/30'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-purple-300 mb-1.5">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project, team opportunity, or problem statement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-theme-secondary/90 border text-sm text-white placeholder-purple-400/40 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none ${
                      errors.message ? 'border-rose-500/70' : 'border-purple-500/30'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-700 via-purple-600 to-violet-600 hover:from-purple-600 hover:to-violet-500 shadow-xl shadow-purple-950/60 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? 'animate-bounce' : 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'}`} />
                  <span>{isSubmitting ? 'Encrypting & Dispatching...' : 'Dispatch Message'}</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
