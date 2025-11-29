export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  score: string;
}

export interface Project {
  id: string;
  title: string;
  tech: string[];
  description: string[];
  link?: string;
  category: 'Full Stack' | 'AI/ML' | 'DevOps' | 'Other';
}

export interface SkillCategory {
  category: string;
  skills: string[];
}