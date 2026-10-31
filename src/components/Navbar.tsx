import React, { useState, useEffect } from 'react';
import { Menu, X, Command, Sparkles, FileText, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCommand: () => void;
  onOpenResume: () => void;
  onOpenEasterEgg: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommand,
  onOpenResume,
  onOpenEasterEgg
}) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Playground', href: '#playground' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'projects', 'playground', 'journey', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3 sm:py-4 transition-all duration-300">
      <nav 
        className={`w-full max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav shadow-2xl shadow-purple-950/40 border border-purple-500/25' 
            : 'bg-theme-secondary/60 backdrop-blur-md border border-purple-900/20'
        }`}
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-2 text-lg font-bold tracking-tight text-white focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-lg px-1"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-700 to-violet-500 flex items-center justify-center text-white text-sm font-black shadow-md shadow-purple-600/30 group-hover:scale-105 transition-transform">
            SS
          </span>
          <span className="hidden sm:inline font-mono text-sm tracking-wider text-purple-200 group-hover:text-white transition-colors">
            SANJANA<span className="text-purple-400">.AI</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-purple-500/15 font-semibold shadow-inner shadow-purple-500/20'
                    : 'text-purple-200/75 hover:text-white hover:bg-purple-500/10'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-purple-500 to-violet-400 rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Quick Command Palette Button */}
          <button
            onClick={onOpenCommand}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-purple-200/80 bg-theme-card/80 hover:bg-purple-900/40 border border-purple-500/20 rounded-lg transition-all hover:border-purple-500/40 shadow-sm"
            title="Open Command Palette (Ctrl+K or ⌘+K)"
            aria-label="Open Command Palette"
          >
            <Command className="w-3.5 h-3.5 text-purple-400" />
            <span className="hidden lg:inline text-[11px] text-purple-300">Search</span>
            <kbd className="hidden sm:inline text-[10px] bg-purple-950/60 px-1.5 py-0.5 rounded border border-purple-800/40 text-purple-300">
              ⌘K
            </kbd>
          </button>

          {/* Resume View/Download Action */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-purple-700 to-violet-600 hover:from-purple-600 hover:to-violet-500 rounded-lg shadow-md shadow-purple-900/40 transition-all hover:scale-102 active:scale-98"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Easter Egg Trigger */}
          <button
            onClick={onOpenEasterEgg}
            className="p-1.5 text-purple-300/80 hover:text-purple-200 hover:bg-purple-900/30 rounded-lg border border-purple-500/20 transition-all"
            title="Activate Neural Core Easter Egg"
            aria-label="Secret Easter Egg"
          >
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-purple-200 hover:text-white rounded-lg bg-theme-card/60 border border-purple-500/20"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 glass-card rounded-2xl p-5 border border-purple-500/30 shadow-2xl shadow-purple-950/70 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === item.href.replace('#', '')
                    ? 'bg-purple-600/20 text-white font-semibold border border-purple-500/30'
                    : 'text-purple-200/80 hover:text-white hover:bg-purple-900/20'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-purple-400/60" />
              </a>
            ))}
            
            <div className="pt-3 mt-2 border-t border-purple-900/40 flex items-center gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-lg shadow-purple-900/50"
              >
                <FileText className="w-4 h-4" />
                View Resume PDF
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommand();
                }}
                className="p-2.5 rounded-xl border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-900/30"
                aria-label="Open search palette"
              >
                <Command className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
