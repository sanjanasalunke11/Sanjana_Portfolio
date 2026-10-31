import React, { useEffect } from 'react';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume Preview Modal"
    >
      <div 
        className="relative w-full max-w-4xl h-[88vh] glass-card rounded-3xl border border-purple-500/40 shadow-2xl shadow-purple-950/80 overflow-hidden flex flex-col bg-theme-secondary text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/40 bg-theme-card/90">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-purple-300">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Sanjana Salunke — Curriculum Vitae</h3>
              <p className="text-xs font-mono text-purple-300/80">Verified PDF Document</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-purple-200 hover:text-white glass-card border border-purple-500/20 hover:border-purple-400 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
            </a>

            <a
              href={PERSONAL_INFO.resumePath}
              download="Sanjana_Salunke_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 shadow-md shadow-purple-900/50 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-purple-300 hover:text-white hover:bg-purple-900/30 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 w-full bg-theme-bg relative">
          <object
            data={PERSONAL_INFO.resumePath}
            type="application/pdf"
            className="w-full h-full"
          >
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <FileText className="w-16 h-16 text-purple-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Resume PDF Preview</h4>
              <p className="text-sm text-purple-300/80 max-w-md mb-6">
                Your browser may not support inline PDF preview. You can view or download the authentic resume file directly below:
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-purple-200 glass-card border border-purple-500/30 hover:border-purple-400 transition-colors"
                >
                  Open in New Tab
                </a>
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Sanjana_Salunke_Resume.pdf"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-900/40 transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
};
