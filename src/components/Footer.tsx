import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-purple-900/30 bg-theme-secondary/70 backdrop-blur-md pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Main Footer Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-purple-900/30">
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-700 to-violet-500 flex items-center justify-center text-white text-xs font-black shadow-md">
                SS
              </span>
              <span className="font-bold text-lg text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-purple-300/80 font-mono italic">
              "Designed with curiosity. Built with creativity."
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-card border border-purple-500/20 text-purple-300 hover:text-white hover:border-purple-400 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-card border border-purple-500/20 text-purple-300 hover:text-white hover:border-purple-400 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="p-2.5 rounded-xl glass-card border border-purple-500/20 text-purple-300 hover:text-white hover:border-purple-400 transition-all"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-md shadow-purple-900/40 ml-2"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-purple-400/70 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-purple-300/80">
            <span>Data Science</span>
            <span>•</span>
            <span>Machine Learning</span>
            <span>•</span>
            <span>Full-Stack Development</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
