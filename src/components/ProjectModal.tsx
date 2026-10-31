import React, { useEffect } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  Cpu 
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-2xl glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/40 shadow-2xl shadow-purple-950/80 my-8 overflow-hidden bg-theme-secondary/95 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-purple-300 hover:text-white hover:bg-purple-900/40 border border-purple-500/20 transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Featured Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-purple-950/80 border border-purple-700/50 text-purple-300">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-violet-500/20 border border-violet-400/40 text-violet-200 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-violet-300" />
              Featured Innovation
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-purple-300 font-medium mb-6">
          {project.subtitle}
        </p>

        {/* Metrics Bar if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-6 p-3 rounded-2xl bg-theme-card/80 border border-purple-500/20">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <p className="text-[11px] text-purple-300/70 font-mono">{m.label}</p>
                <p className="text-sm sm:text-base font-bold text-white font-mono mt-0.5">{m.value}</p>
              </div>
            ))}
          </div>
        )}

        {/* Long Description */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-2 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5" />
            Project Overview
          </h4>
          <p className="text-sm text-purple-200/85 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Architectural Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            Key Capabilities &amp; Architecture
          </h4>
          <div className="space-y-2">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-purple-200">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-purple-950/60 border border-purple-500/30 text-purple-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-purple-900/40">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-purple-700 hover:bg-purple-600 shadow-md shadow-purple-900/40 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Source on GitHub</span>
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-purple-200 hover:text-white glass-card border border-purple-500/30 hover:border-purple-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-purple-400" />
              <span>Live Demonstration</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="ml-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-purple-300 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
