import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Eye, 
  Terminal, 
  Sparkles, 
  ChevronDown 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NeuralSphere } from './NeuralSphere';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for animated roles
  useEffect(() => {
    const roles = PERSONAL_INFO.roles;
    const fullRole = roles[currentRoleIndex];

    const typingSpeed = isDeleting ? 35 : 75;
    const pauseBeforeDelete = 1800;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < fullRole.length) {
          setDisplayedText(fullRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(fullRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-900/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-violet-700/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Headline, Typewriter, Intro, Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-purple-500/30 text-xs font-mono text-purple-300 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
            <span>Open to AI/ML &amp; Data Science Roles</span>
            <span className="text-purple-400/50">|</span>
            <span className="text-purple-300/80">Nagpur, India</span>
          </div>

          {/* Main Name Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-purple-500 bg-clip-text text-transparent glow-text">
              {PERSONAL_INFO.name}.
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl lg:text-2xl font-medium text-purple-200/90 mb-4 tracking-tight">
            {PERSONAL_INFO.headline}
          </p>

          {/* Typewriter Terminal Role */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-theme-secondary/80 border border-purple-800/40 font-mono text-sm sm:text-base text-purple-300 mb-6 w-full max-w-lg shadow-inner">
            <Terminal className="w-4 h-4 text-purple-400 shrink-0" />
            <span className="text-purple-400/70 select-none">&gt;</span>
            <span className="text-white font-semibold min-h-[1.5rem]">
              {displayedText}
            </span>
            <span className="w-2 h-4 bg-purple-400 animate-pulse inline-block" />
          </div>

          {/* Short Professional Introduction */}
          <p className="text-sm sm:text-base text-purple-200/75 leading-relaxed max-w-xl mb-8">
            Data Science undergraduate at <strong className="text-purple-200 font-medium">SVPCET</strong> who bridges the gap between raw unstructured data and scalable, intelligent products. From deep learning pipelines and recommendation engines to real-time dashboards and full-stack web platforms.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-700 via-purple-600 to-violet-600 hover:from-purple-600 hover:to-violet-500 shadow-lg shadow-purple-900/40 transition-all hover:scale-102 active:scale-98 group"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="inline-flex items-center rounded-xl glass-card border border-purple-500/30 overflow-hidden shadow-sm">
              <a 
                href={PERSONAL_INFO.resumePath}
                download="Sanjana_Salunke_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-purple-200 hover:text-white hover:bg-purple-900/40 transition-colors"
                title="Direct PDF Download"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </a>
              <span className="h-5 w-px bg-purple-800/60" />
              <button
                onClick={onOpenResume}
                className="px-3 py-3 text-purple-300 hover:text-white hover:bg-purple-900/40 transition-colors"
                title="Preview Resume in Modal"
                aria-label="View Resume Preview"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Social Links & Verified Indicator */}
          <div className="flex items-center gap-5 pt-2 border-t border-purple-900/30 text-purple-300/80 text-sm">
            <span className="font-mono text-xs text-purple-400/80 uppercase tracking-widest">Connect:</span>
            
            <a 
              href={PERSONAL_INFO.contact.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <Github className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs">GitHub</span>
            </a>

            <span className="text-purple-800">·</span>

            <a 
              href={PERSONAL_INFO.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <Linkedin className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs">LinkedIn</span>
            </a>

            <span className="text-purple-800">·</span>

            <a 
              href={`mailto:${PERSONAL_INFO.contact.email}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <Mail className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs">Email</span>
            </a>
          </div>

        </div>

        {/* Right Column: 3D Interactive Neural Network Sphere & Avatar Hybrid */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          
          {/* 3D Neural Sphere Canvas */}
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
            <NeuralSphere className="absolute inset-0" />
            
            {/* Center avatar card floating in the neural core */}
            <div className="relative z-10 p-2 rounded-3xl glass-card border-2 border-purple-500/40 shadow-2xl shadow-purple-950/80 group">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border border-purple-400/30">
                <img 
                  src="/assets/avatar.jpg" 
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-center filter saturate-105 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to direct path if needed
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('avatar.jpg')) {
                      target.src = 'assets/avatar.jpg';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating pill badge */}
                <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-lg bg-theme-secondary/90 backdrop-blur-md border border-purple-500/40 text-[10px] font-mono text-center text-purple-200">
                  <span>Data Science • AI/ML</span>
                </div>
              </div>
            </div>

            {/* Orbiting stat badges */}
            <div className="absolute -top-2 right-2 px-3 py-1.5 rounded-xl glass-card border border-purple-500/30 shadow-lg flex items-center gap-2 animate-float">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <div className="text-left">
                <p className="text-[10px] text-purple-300/80 font-mono">Best Visualization</p>
                <p className="text-xs font-bold text-white">Award Winner</p>
              </div>
            </div>

            <div className="absolute -bottom-3 left-4 px-3 py-1.5 rounded-xl glass-card border border-purple-500/30 shadow-lg flex items-center gap-2 animate-float" style={{ animationDelay: '2s' }}>
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              <div className="text-left">
                <p className="text-[10px] text-purple-300/80 font-mono">Deep Learning</p>
                <p className="text-xs font-bold text-white">NVIDIA Certified</p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Smooth Scroll Indicator */}
      <a 
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-purple-400/60 hover:text-purple-300 transition-colors group"
        aria-label="Scroll to About Section"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce group-hover:translate-y-0.5 transition-transform" />
      </a>
    </section>
  );
};
