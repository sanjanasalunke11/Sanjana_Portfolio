import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  FileCheck2, 
  ScanLine, 
  TrendingDown, 
  ShoppingBag, 
  Film, 
  FileCode, 
  PieChart, 
  BarChart3, 
  Sparkles, 
  ArrowUpRight, 
  Info, 
  Layers 
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Machine Learning',
    'Deep Learning & CV',
    'Full-Stack & Tools',
    'Data Analytics'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck2': return <FileCheck2 className="w-5 h-5 text-purple-400" />;
      case 'ScanLine': return <ScanLine className="w-5 h-5 text-violet-400" />;
      case 'TrendingDown': return <TrendingDown className="w-5 h-5 text-purple-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-violet-400" />;
      case 'Film': return <Film className="w-5 h-5 text-purple-400" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-violet-400" />;
      case 'PieChart': return <PieChart className="w-5 h-5 text-purple-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-violet-400" />;
      default: return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-mono text-purple-300 border border-purple-500/20 mb-3">
          <Layers className="w-3.5 h-3.5 text-purple-400" />
          <span>03 // DIGITAL INNOVATION LAB</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Engineered Systems &amp; Deployments
        </h2>
        <p className="text-purple-300/80 text-base max-w-2xl mt-2">
          From full-stack automated document handling platforms to computer vision crop pathology and personalized multi-algorithm recommendation engines.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 rounded-2xl glass-card border border-purple-500/25 w-fit">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-purple-600 text-white font-semibold shadow-md shadow-purple-900/50'
                : 'text-purple-200/70 hover:text-white hover:bg-purple-900/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`glass-card rounded-2xl p-6 sm:p-7 border flex flex-col justify-between group transition-all duration-300 hover:scale-[1.01] hover:border-purple-400/60 ${
              project.featured 
                ? 'border-purple-500/40 bg-gradient-to-b from-purple-950/20 to-theme-card/90 shadow-xl shadow-purple-950/30' 
                : 'border-purple-500/20'
            }`}
          >
            <div>
              {/* Top Row: Icon + Category Badge + Featured Indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                  {getProjectIcon(project.icon)}
                </div>

                <div className="flex items-center gap-2">
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium text-violet-300 bg-violet-950/80 px-2 py-0.5 rounded border border-violet-500/40">
                      <Sparkles className="w-3 h-3 text-violet-400" />
                      Featured
                    </span>
                  )}
                  <span className="text-[10px] font-mono text-purple-300/75 bg-theme-secondary/80 px-2 py-0.5 rounded border border-purple-800/40">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors mb-1.5 flex items-center justify-between">
                <span>{project.title}</span>
              </h3>
              <p className="text-xs text-purple-400/90 font-mono mb-3 line-clamp-1">
                {project.subtitle}
              </p>

              {/* Concise Description */}
              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed line-clamp-3 mb-5">
                {project.description}
              </p>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.slice(0, 4).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-purple-950/60 border border-purple-800/40 text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-1.5 py-0.5 rounded-md text-[11px] font-mono text-purple-400/80">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Actions: View Details Modal + Code Links */}
            <div className="pt-4 border-t border-purple-900/30 flex items-center justify-between">
              <button
                onClick={() => setActiveModalProject(project)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-white transition-colors group/btn"
              >
                <Info className="w-3.5 h-3.5 text-purple-400" />
                <span>View Details</span>
                <ArrowUpRight className="w-3 h-3 text-purple-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>

              <div className="flex items-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-purple-300 hover:text-white hover:bg-purple-900/30 border border-purple-500/20 transition-all"
                    title="View Source on GitHub"
                    aria-label={`GitHub repo for ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-purple-300 hover:text-white hover:bg-purple-900/30 border border-purple-500/20 transition-all"
                    title="Live Demo"
                    aria-label={`Live Demo for ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal 
        project={activeModalProject} 
        onClose={() => setActiveModalProject(null)} 
      />
    </section>
  );
};
