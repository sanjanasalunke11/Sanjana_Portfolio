import React, { useState } from 'react';
import { 
  GraduationCap, 
  BrainCircuit, 
  Code2, 
  Palette, 
  Sparkles, 
  Layers, 
  Compass, 
  CheckCircle2, 
  Music2 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mindset' | 'academics' | 'creative'>('mindset');

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-mono text-purple-300 border border-purple-500/20 mb-3">
          <Layers className="w-3.5 h-3.5 text-purple-400" />
          <span>01 // IDENTITY &amp; PHILOSOPHY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Analysis <span className="text-purple-400">→</span> Modeling <span className="text-purple-400">→</span> Deployment
        </h2>
        <p className="text-purple-300/80 text-base max-w-2xl mt-2">
          Bridging mathematics, machine intelligence, and practical software design to construct systems that solve real problems.
        </p>
      </div>

      {/* Grid: Stats Top Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {PERSONAL_INFO.stats.map((stat, idx) => (
          <div 
            key={idx}
            className="glass-card rounded-2xl p-5 border border-purple-500/20 flex flex-col items-center text-center group hover:border-purple-400/50 transition-all"
          >
            <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              {stat.value}
            </span>
            <span className="text-xs text-purple-200/70 font-medium mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Main Interactive Narrative Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Tabbed Narrative */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Tab Selector Buttons */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl glass-card border border-purple-500/25">
            <button
              onClick={() => setActiveTab('mindset')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'mindset'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/50'
                  : 'text-purple-300/70 hover:text-white hover:bg-purple-900/20'
              }`}
            >
              <BrainCircuit className="w-4 h-4" />
              <span>Engineering Mindset</span>
            </button>
            <button
              onClick={() => setActiveTab('academics')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'academics'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/50'
                  : 'text-purple-300/70 hover:text-white hover:bg-purple-900/20'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Academic Focus</span>
            </button>
            <button
              onClick={() => setActiveTab('creative')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'creative'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/50'
                  : 'text-purple-300/70 hover:text-white hover:bg-purple-900/20'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Creative Passions</span>
            </button>
          </div>

          {/* Dynamic Tab Content Cards */}
          {activeTab === 'mindset' && (
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-purple-500/30 shadow-xl space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Full-Stack Data Engineering</h3>
                  <p className="text-xs text-purple-300 font-mono">From exploratory insights to production APIs</p>
                </div>
              </div>
              <p className="text-purple-200/80 text-sm leading-relaxed">
                Rather than treating machine learning as isolated notebooks, I believe in building cohesive software solutions. My process starts with rigorous EDA and feature engineering in Pandas, transitions to model architecture in PyTorch/Scikit-learn, and finishes with performant backend endpoints and intuitive user interfaces.
              </p>
              <div className="pt-3 border-t border-purple-900/40 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-purple-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Iterative hypothesis testing &amp; validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Explainable ML &amp; diagnostic metrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Clean, maintainable code standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Human-centric visualization clarity</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'academics' && (
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-purple-500/30 shadow-xl space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">SVPCET Nagpur</h3>
                  <p className="text-xs text-purple-300 font-mono">B.Tech in CSE (Data Science) • 2023–2027</p>
                </div>
              </div>
              <p className="text-purple-200/80 text-sm leading-relaxed">
                Pursuing my degree at St. Vincent Pallotti College of Engineering &amp; Technology, Nagpur. My academic trajectory is grounded in solid theoretical computer science combined with modern specialization in artificial intelligence and deep neural networks.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'Natural Language Processing',
                  'Deep Learning',
                  'Machine Learning',
                  'Data Structures & Algorithms',
                  'Database Management Systems',
                  'Software Methodology',
                  'Computer Vision'
                ].map((course, i) => (
                  <span 
                    key={i} 
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-purple-950/70 border border-purple-700/40 text-purple-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'creative' && (
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-purple-500/30 shadow-xl space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Dancing &amp; Painting</h3>
                  <p className="text-xs text-purple-300 font-mono">Creative expression meets structured logic</p>
                </div>
              </div>
              <p className="text-purple-200/80 text-sm leading-relaxed">
                Engineering thrives on disciplined problem-solving, but creative breakthroughs come from visual sensitivity and rhythm. Through <strong>painting</strong>, I cultivate an acute eye for color harmony, visual balance, and storytelling — skills that directly elevate my UI designs and data visualizations.
              </p>
              <p className="text-purple-200/80 text-sm leading-relaxed">
                Through <strong>dancing</strong>, I embrace discipline, fluidity, and creative focus. These artistic passions prevent burnout, encourage holistic thinking, and inspire human warmth in technical software.
              </p>
              <div className="flex items-center gap-4 pt-2 text-xs font-mono text-purple-300">
                <div className="flex items-center gap-1.5">
                  <Palette className="w-4 h-4 text-purple-400" />
                  <span>Visual Composition</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Music2 className="w-4 h-4 text-purple-400" />
                  <span>Rhythm &amp; Expression</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Right Column: Creative Cards Layout */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Card 1: What I'm Exploring Right Now */}
          <div className="glass-card rounded-2xl p-5 border border-purple-500/25 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-purple-600/20 transition-colors pointer-events-none" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-purple-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                ACTIVE FOCUS
              </span>
              <span className="text-[10px] font-mono text-purple-300/70 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">
                2026 Q3/Q4
              </span>
            </div>
            <h4 className="text-base font-bold text-white mb-2">Deep Learning, NLP &amp; Vision Pipelines</h4>
            <p className="text-xs text-purple-200/80 leading-relaxed">
              Advancing end-to-end multi-modal models, Transformer architectures for domain text processing, and automated image segmentation for biomedical/agricultural diagnostic platforms.
            </p>
          </div>

          {/* Card 2: Industry Verified Recognition */}
          <div className="glass-card rounded-2xl p-5 border border-purple-500/25 relative overflow-hidden">
            <span className="text-xs font-mono text-purple-400 flex items-center gap-1.5 mb-3">
              <Code2 className="w-3.5 h-3.5 text-purple-400" />
              INDUSTRY VALIDATION
            </span>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-white">NVIDIA Deep Learning Institute</p>
                  <p className="text-[11px] text-purple-300/70">Certified in Neural Networks for Computer Vision &amp; NLP</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-white">TATA GenAI Powered Data Analytics</p>
                  <p className="text-[11px] text-purple-300/70">Executive insights simulation &amp; AI-driven business intelligence</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-white">Envision Best Visualization Award</p>
                  <p className="text-[11px] text-purple-300/70">First prize winner in data storytelling and analytical graphics</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Creative Balance */}
          <div className="glass-card rounded-2xl p-5 border border-purple-500/25 bg-gradient-to-br from-purple-950/30 to-violet-950/20">
            <div className="flex items-center gap-2 mb-2">
              <Palette className="w-4 h-4 text-purple-300" />
              <h4 className="text-sm font-bold text-white">Dancing &amp; Visual Arts</h4>
            </div>
            <p className="text-xs text-purple-200/75 leading-relaxed">
              "Data analysis is the science of patterns; painting and dancing are the art of rhythm. Combining both builds technology that is both functionally sharp and aesthetically engaging."
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
