export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'Machine Learning' | 'Deep Learning & CV' | 'Full-Stack & Tools' | 'Data Analytics';
  featured?: boolean;
  github?: string;
  demo?: string;
  metrics?: { label: string; value: string }[];
  highlights: string[];
  icon: string;
}

export interface SkillCategory {
  title: string;
  category: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    badge?: string;
  }[];
}

export interface TimelineMilestone {
  id: string;
  year: string;
  dateStr: string;
  title: string;
  organization: string;
  category: 'Education' | 'Hackathon & Award' | 'Experience' | 'Certification' | 'Technical';
  description: string;
  achievements?: string[];
  technologies?: string[];
  highlightBadge?: string;
  iconName: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}
