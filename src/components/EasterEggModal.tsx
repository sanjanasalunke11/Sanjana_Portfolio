import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Play, RefreshCw, Zap, Sparkles, Code2 } from 'lucide-react';

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EasterEggModal: React.FC<EasterEggModalProps> = ({ isOpen, onClose }) => {
  const [output, setOutput] = useState<string[]>([
    "INITIALIZING SANJANA_AI NEURAL TERMINAL v4.2...",
    "CONNECTED TO REPOSITORY: sanjanasalunke11/Sanjana_Portfolio",
    "STATUS: ALL SYSTEMS NOMINAL",
    "Type 'help' or click a command below to explore."
  ]);
  const [commandInput, setCommandInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newOutput = [...output, `$ ${cmd}`];

    switch (trimmed) {
      case 'help':
        newOutput.push(
          "Available Commands:",
          "  train       - Run simulated deep convolutional neural network training",
          "  metrics     - Print model evaluation confusion matrix & AUC",
          "  projects    - List verified production deployments",
          "  art         - Reveal dancing & painting creative synergy",
          "  contact     - Display communication endpoints",
          "  clear       - Clear terminal console",
          "  exit        - Close terminal"
        );
        break;
      case 'train':
        newOutput.push(
          "[EPOCH 1/5] Loss: 0.6421 | Accuracy: 74.2%",
          "[EPOCH 2/5] Loss: 0.4109 | Accuracy: 86.8%",
          "[EPOCH 3/5] Loss: 0.2814 | Accuracy: 92.4%",
          "[EPOCH 4/5] Loss: 0.1652 | Accuracy: 96.1%",
          "[EPOCH 5/5] Loss: 0.0984 | Accuracy: 98.6% [CONVERGED]",
          "✓ Model weights saved to /checkpoints/agrivision_best.pt"
        );
        break;
      case 'metrics':
        newOutput.push(
          "CONFUSION MATRIX (AgriVision Pathology):",
          "  [TP: 420  | FP: 12]",
          "  [FN: 8    | TN: 560]",
          "  Precision: 97.2% | Recall: 98.1% | ROC-AUC: 0.994",
          "Status: Ready for clinical farm deployment."
        );
        break;
      case 'projects':
        newOutput.push(
          "1. SmartDocs (Featured) - Automated OCR & Profile Handler",
          "2. AgriVision - Leaf Disease Detection & Severity PDF Reporting",
          "3. Recomora & ShopVerse - Hybrid E-Commerce Recommender System",
          "4. Customer Churn Prediction - Codec Tech Retention Analytics",
          "5. Typeset / LaTeX Studio - AI Text to Publication PDF"
        );
        break;
      case 'art':
        newOutput.push(
          "🎨 Painting: Composition, color harmonies, and visual storytelling.",
          "💃 Dancing: Rhythm, temporal coordination, and creative discipline.",
          "Philosophy: True engineering beauty combines mathematical rigour with artistic intuition."
        );
        break;
      case 'contact':
        newOutput.push(
          "Email: dishasalunke780@gmail.com",
          "GitHub: https://github.com/sanjanasalunke11",
          "LinkedIn: https://linkedin.com/in/sanjana-salunke-023998298"
        );
        break;
      case 'clear':
        setOutput([]);
        return;
      case 'exit':
        onClose();
        return;
      default:
        newOutput.push(`Command not recognized: '${trimmed}'. Type 'help' for available actions.`);
        break;
    }

    setOutput(newOutput);
    setCommandInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(commandInput);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl glass-card rounded-2xl border border-purple-500/50 shadow-2xl shadow-purple-950/90 overflow-hidden bg-theme-bg flex flex-col h-[520px] text-left font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-theme-secondary border-b border-purple-900/40">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-xs text-purple-300 ml-2 font-bold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              SANJANA_AI_TERMINAL // EASTER_EGG
            </span>
          </div>
          <button 
            onClick={onClose}
            className="text-purple-400 hover:text-white"
            aria-label="Close Terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Action Pills */}
        <div className="flex flex-wrap items-center gap-1.5 px-4 py-2 bg-theme-card/70 border-b border-purple-950/60 text-xs">
          <span className="text-purple-400/70 text-[10px]">QUICK RUN:</span>
          {['train', 'metrics', 'projects', 'art', 'help'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-purple-950/80 hover:bg-purple-900/80 text-purple-300 border border-purple-800/40 text-[11px] transition-colors"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Console Log Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-1.5 text-xs text-purple-200">
          {output.map((line, idx) => (
            <div 
              key={idx} 
              className={line.startsWith('$') ? 'text-purple-400 font-bold' : line.includes('✓') ? 'text-emerald-400 font-semibold' : 'text-purple-200/90'}
            >
              {line}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Row */}
        <div className="flex items-center gap-2 px-4 py-3 bg-theme-secondary/90 border-t border-purple-900/40">
          <span className="text-purple-400 font-bold text-sm">&gt;</span>
          <input
            type="text"
            placeholder="Type command ('help', 'train', 'art')..."
            value={commandInput}
            onChange={(e) => setCommandInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            className="w-full bg-transparent border-none text-xs text-white placeholder-purple-400/40 focus:outline-none font-mono"
          />
          <button
            onClick={() => handleCommand(commandInput)}
            className="px-3 py-1 rounded bg-purple-700 hover:bg-purple-600 text-white text-[11px] transition-colors shrink-0"
          >
            Execute
          </button>
        </div>
      </div>
    </div>
  );
};
