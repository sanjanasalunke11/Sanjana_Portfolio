import React, { useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  ArrowRight, 
  FileText, 
  Code2, 
  Terminal, 
  ExternalLink, 
  Sparkles, 
  GraduationCap, 
  Mail, 
  Github, 
  Activity 
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenEasterEgg: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenEasterEgg
}) => {
  const [query, setQuery] = useState('');

  // Close on Escape, Open on Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Parent triggers open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickLinks = [
    { label: 'View Resume (PDF)', icon: <FileText className="w-4 h-4 text-purple-400" />, action: () => { onClose(); onOpenResume(); } },
    { label: 'Jump to About Me', icon: <GraduationCap className="w-4 h-4 text-purple-400" />, action: () => { onClose(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); } },
    { label: 'Jump to Technical Skills', icon: <Code2 className="w-4 h-4 text-purple-400" />, action: () => { onClose(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); } },
    { label: 'Jump to Innovation Projects', icon: <Terminal className="w-4 h-4 text-purple-400" />, action: () => { onClose(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); } },
    { label: 'Open Data Playground', icon: <Activity className="w-4 h-4 text-purple-400" />, action: () => { onClose(); document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' }); } },
    { label: 'Jump to Journey & Milestones', icon: <Sparkles className="w-4 h-4 text-purple-400" />, action: () => { onClose(); document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' }); } },
    { label: 'Contact Sanjana', icon: <Mail className="w-4 h-4 text-purple-400" />, action: () => { onClose(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); } },
    { label: 'Secret Easter Egg: Neural Core', icon: <Sparkles className="w-4 h-4 text-violet-300" />, action: () => { onClose(); onOpenEasterEgg(); } },
    { label: 'Open GitHub Profile', icon: <Github className="w-4 h-4 text-purple-400" />, action: () => { window.open(PERSONAL_INFO.contact.github, '_blank'); } },
  ];

  // Also include matching projects in search
  const matchingProjects = PROJECTS.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.technologies.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  ).map(p => ({
    label: `Project: ${p.title} (${p.category})`,
    icon: <Code2 className="w-4 h-4 text-violet-400" />,
    action: () => {
      onClose();
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  }));

  const allItems = [...quickLinks, ...matchingProjects];
  const filtered = query.trim() === ''
    ? quickLinks
    : allItems.filter(item => item.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-xl glass-card rounded-2xl border border-purple-500/40 shadow-2xl shadow-purple-950/90 overflow-hidden bg-theme-secondary/95 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-purple-900/40">
          <Search className="w-4 h-4 text-purple-400 shrink-0" />
          <input
            type="text"
            placeholder="Type a command, skill, or project name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent border-none text-sm text-white placeholder-purple-400/50 focus:outline-none font-mono"
          />
          <button 
            onClick={onClose} 
            className="p-1 rounded-md text-purple-400 hover:text-white"
            aria-label="Close Command Palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={item.action}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-purple-200 hover:text-white hover:bg-purple-900/40 transition-colors text-left group"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-purple-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
            ))
          ) : (
            <div className="p-6 text-center text-xs font-mono text-purple-400/60">
              No matching commands or projects found.
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-purple-900/40 flex items-center justify-between text-[10px] font-mono text-purple-400/60 bg-theme-card/60">
          <span>Navigate with mouse or arrow keys</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
};
