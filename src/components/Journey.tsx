import React, { useState } from 'react';
import { 
  GraduationCap, 
  Trophy, 
  Award, 
  Briefcase, 
  Bot, 
  Sparkles, 
  FileCheck, 
  Cloud, 
  Calendar, 
  Layers, 
  ChevronRight, 
  CheckCircle2 
} from 'lucide-react';
import { TIMELINE_MILESTONES } from '../data/portfolioData';
import { TimelineMilestone } from '../types';

export const Journey: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filterOptions = [
    'All',
    'Education',
    'Hackathon & Award',
    'Experience',
    'Certification',
    'Technical'
  ];

  const filteredMilestones = selectedCategory === 'All'
    ? TIMELINE_MILESTONES
    : TIMELINE_MILESTONES.filter(m => m.category === selectedCategory);

  const getMilestoneIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-4 h-4 text-purple-300" />;
      case 'Trophy': return <Trophy className="w-4 h-4 text-amber-300" />;
      case 'Award': return <Award className="w-4 h-4 text-violet-300" />;
      case 'Briefcase': return <Briefcase className="w-4 h-4 text-purple-300" />;
      case 'Bot': return <Bot className="w-4 h-4 text-cyan-300" />;
      case 'FileCheck': return <FileCheck className="w-4 h-4 text-emerald-300" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-sky-300" />;
      default: return <Sparkles className="w-4 h-4 text-purple-300" />;
    }
  };

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-mono text-purple-300 border border-purple-500/20 mb-3">
          <Layers className="w-3.5 h-3.5 text-purple-400" />
          <span>05 // VERIFIED MILESTONES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Journey &amp; Recognition
        </h2>
        <p className="text-purple-300/80 text-base max-w-2xl mt-2">
          An authentic, verifiable timeline tracing academic roots, hackathons, robotics challenges, industry certifications, and internships.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-12 p-1.5 rounded-2xl glass-card border border-purple-500/25 w-fit">
        {filterOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelectedCategory(opt)}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === opt
                ? 'bg-purple-600 text-white font-semibold shadow-md shadow-purple-900/50'
                : 'text-purple-200/70 hover:text-white hover:bg-purple-900/20'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-500/30 space-y-10">
        {filteredMilestones.map((item: TimelineMilestone, index: number) => {
          const isExpanded = expandedId === item.id;
          return (
            <div key={item.id} className="relative group">
              {/* Timeline Connector Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-theme-secondary border-2 border-purple-500 group-hover:border-violet-400 flex items-center justify-center shadow-md shadow-purple-900/50 transition-colors">
                {getMilestoneIcon(item.iconName)}
              </div>

              {/* Milestone Card */}
              <div 
                className="glass-card rounded-2xl p-5 sm:p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 group-hover:translate-x-1"
              >
                {/* Top Row: Date, Badge, Category */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 text-xs font-mono text-purple-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.dateStr}
                    </span>
                    <span className="text-purple-800">·</span>
                    <span className="text-[11px] font-mono text-purple-300/80 bg-theme-secondary px-2 py-0.5 rounded border border-purple-800/40">
                      {item.category}
                    </span>
                  </div>

                  {item.highlightBadge && (
                    <span className="text-[11px] font-mono font-bold text-violet-200 bg-purple-900/60 px-2.5 py-0.5 rounded-full border border-purple-500/40 shadow-sm">
                      {item.highlightBadge}
                    </span>
                  )}
                </div>

                {/* Title & Organization */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-purple-300/90 font-medium mb-3">
                  {item.organization}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Expandable Achievements Details */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="space-y-2 mt-3 pt-3 border-t border-purple-900/40">
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-purple-200/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies / Skills Tags */}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-purple-900/30">
                    {item.technologies.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-purple-950/70 border border-purple-800/40 text-purple-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
