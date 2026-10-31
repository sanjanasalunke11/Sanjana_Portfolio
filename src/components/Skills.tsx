import React, { useState } from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Globe, 
  Database, 
  Terminal, 
  Filter, 
  Check, 
  Layers 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'languages', label: 'Programming' },
    { id: 'ai-ml', label: 'Data Science & ML' },
    { id: 'web', label: 'Web Development' },
    { id: 'tools', label: 'Database & Tools' },
  ];

  const filteredCategories = selectedFilter === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.category === selectedFilter);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-purple-400" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-violet-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-purple-400" />;
      case 'Database': return <Database className="w-5 h-5 text-violet-400" />;
      default: return <Terminal className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-mono text-purple-300 border border-purple-500/20 mb-3">
          <Layers className="w-3.5 h-3.5 text-purple-400" />
          <span>02 // TECHNICAL MATRIX</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Tools of Intelligence &amp; Engineering
        </h2>
        <p className="text-purple-300/80 text-base max-w-2xl mt-2">
          Curated technical stack spanning low-level algorithms, machine learning frameworks, data visualization, and modern web application development.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 rounded-2xl glass-card border border-purple-500/25 w-fit">
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-purple-400/80">
          <Filter className="w-3.5 h-3.5" />
          <span>FILTER:</span>
        </div>
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedFilter(tab.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              selectedFilter === tab.id
                ? 'bg-purple-600 text-white font-semibold shadow-md shadow-purple-900/50'
                : 'text-purple-200/70 hover:text-white hover:bg-purple-900/20'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Interactive Category Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCategories.map((cat, idx) => (
          <div 
            key={idx}
            className="glass-card rounded-2xl p-6 sm:p-7 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-purple-300/70 font-mono">
                      {cat.description}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-purple-400/70 bg-purple-950/40 px-2 py-1 rounded-md border border-purple-800/40">
                  {cat.skills.length} tools
                </span>
              </div>

              {/* Skills Interactive Badges */}
              <div className="flex flex-wrap gap-2.5 mt-5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-theme-secondary/90 border border-purple-500/20 hover:border-purple-400/60 hover:bg-purple-900/30 transition-all cursor-default group/pill shadow-sm"
                  >
                    <Check className="w-3.5 h-3.5 text-purple-400 group-hover/pill:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm font-medium text-purple-100 group-hover/pill:text-white">
                      {skill.name}
                    </span>
                    {skill.badge && (
                      <span className="text-[10px] font-mono text-purple-300/70 bg-purple-950/80 px-1.5 py-0.5 rounded border border-purple-800/40">
                        {skill.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle Bottom Accent Indicator */}
            <div className="pt-5 mt-6 border-t border-purple-900/30 flex items-center justify-between text-[11px] font-mono text-purple-400/60">
              <span>VERIFIED COMPETENCY</span>
              <span className="group-hover:text-purple-300 transition-colors">No simulated ratings • Real code only</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
