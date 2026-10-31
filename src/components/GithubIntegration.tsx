import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Star, 
  GitFork, 
  ExternalLink, 
  Layers, 
  Code2, 
  RefreshCw, 
  AlertCircle 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitHubRepo } from '../types';

export const GithubIntegration: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fallback verified repos in case of API rate-limiting or offline
  const fallbackRepos: GitHubRepo[] = [
    {
      id: 1,
      name: "ShopVERSE_Ecommerce",
      description: "Full-stack e-commerce platform with Postgres row-level security, cart, wishlist, and recommendations.",
      html_url: "https://github.com/sanjanasalunke11/ShopVERSE_Ecommerce",
      homepage: null,
      language: "TypeScript",
      stargazers_count: 1,
      forks_count: 0,
      updated_at: "2024-08-16T15:00:00Z",
      topics: ["react", "vite", "tailwind", "supabase"]
    },
    {
      id: 2,
      name: "AgriVision",
      description: "AI-based multi-crop leaf disease detection with severity estimation and automated PDF diagnostic reports.",
      html_url: "https://github.com/sanjanasalunke11/AgriVision",
      homepage: null,
      language: "Python",
      stargazers_count: 1,
      forks_count: 0,
      updated_at: "2024-08-12T10:00:00Z",
      topics: ["pytorch", "fastapi", "opencv", "computer-vision"]
    },
    {
      id: 3,
      name: "E-Commerce-Recommendation-System",
      description: "Recomora: Multi-model product recommender comparing popularity, content-based (TF-IDF), collaborative (SVD), and hybrid blend.",
      html_url: "https://github.com/sanjanasalunke11/E-Commerce-Recommendation-System",
      homepage: null,
      language: "Python",
      stargazers_count: 1,
      forks_count: 0,
      updated_at: "2024-07-28T09:00:00Z",
      topics: ["machine-learning", "flask", "scikit-learn", "svd"]
    },
    {
      id: 4,
      name: "Customer-Churn-Prediction",
      description: "Machine learning pipeline predicting customer churn from transactional & behavioral telemetry with retention risk scoring.",
      html_url: "https://github.com/sanjanasalunke11/Customer-Churn-Prediction",
      homepage: null,
      language: "Jupyter Notebook",
      stargazers_count: 1,
      forks_count: 0,
      updated_at: "2024-07-15T12:00:00Z",
      topics: ["scikit-learn", "pandas", "eda", "random-forest"]
    },
    {
      id: 5,
      name: "Netflix-Content-Analytics-Dashboard",
      description: "Exploratory catalog intelligence dashboard built with Power BI, DAX measures, and Power Query.",
      html_url: "https://github.com/sanjanasalunke11/Netflix-Content-Analytics-Dashboard",
      homepage: null,
      language: "Power BI",
      stargazers_count: 0,
      forks_count: 0,
      updated_at: "2024-06-20T16:00:00Z",
      topics: ["power-bi", "dax", "analytics"]
    },
    {
      id: 6,
      name: "Latex_studio",
      description: "Web application compiling raw research text to structured LaTeX with AI polish mode and live in-browser compiler.",
      html_url: "https://github.com/sanjanasalunke11/Latex_studio",
      homepage: null,
      language: "Python",
      stargazers_count: 1,
      forks_count: 0,
      updated_at: "2024-05-18T18:00:00Z",
      topics: ["latex", "flask", "codemirror"]
    }
  ];

  const fetchGithubRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://api.github.com/users/${PERSONAL_INFO.contact.githubUsername}/repos?sort=updated&per_page=6`);
      if (!res.ok) {
        throw new Error(`GitHub API returned status ${res.status}`);
      }
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setRepos(data);
      } else {
        setRepos(fallbackRepos);
      }
    } catch {
      // Fallback gracefully on rate limits or connectivity issues
      setRepos(fallbackRepos);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubRepos();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-mono text-purple-300 border border-purple-500/20 mb-3">
            <Github className="w-3.5 h-3.5 text-purple-400" />
            <span>OPEN SOURCE ACTIVITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Live GitHub Repositories
          </h2>
          <p className="text-purple-300/80 text-sm mt-1">
            Synchronized directly with <code className="text-purple-300 font-mono">@{PERSONAL_INFO.contact.githubUsername}</code>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchGithubRepos}
            disabled={loading}
            className="p-2 rounded-xl text-purple-300 hover:text-white glass-card border border-purple-500/20 hover:border-purple-400 transition-all"
            title="Refresh Repositories"
            aria-label="Refresh GitHub Repositories"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <a
            href={PERSONAL_INFO.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-theme-secondary border border-purple-500/30 hover:border-purple-400 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Follow on GitHub</span>
            <ExternalLink className="w-3 h-3 text-purple-400" />
          </a>
        </div>
      </div>

      {/* Repos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-5 border border-purple-500/20 hover:border-purple-400/60 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-purple-400 flex items-center gap-1.5 font-semibold group-hover:text-purple-300">
                  <Code2 className="w-4 h-4" />
                  {repo.name}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-purple-400/60 group-hover:text-purple-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              <p className="text-xs text-purple-200/75 leading-relaxed line-clamp-3 mb-4">
                {repo.description || "Public repository containing source code, data science models, or documentation."}
              </p>
            </div>

            <div className="pt-3 border-t border-purple-900/30 flex items-center justify-between text-[11px] font-mono text-purple-300/70">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-400 inline-block" />
                {repo.language || "Multi-language"}
              </span>

              <div className="flex items-center gap-3">
                {repo.stargazers_count > 0 && (
                  <span className="flex items-center gap-1 text-purple-300">
                    <Star className="w-3 h-3 fill-current text-purple-400" />
                    {repo.stargazers_count}
                  </span>
                )}
                {repo.forks_count > 0 && (
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3 text-purple-400" />
                    {repo.forks_count}
                  </span>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
