import { Experience, Education, Project, SkillCategory } from './types';
import { 
  Code2, 
  BrainCircuit, 
  Globe, 
  Container, 
  Database, 
  Server, 
  Layout, 
  Cpu
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Adarsh Srikakolapu",
  title: "Full Stack & ML Engineer",
  tagline: "Bridging Geoinformatics, AI, and Scalable Web Systems",
  email: "contact@adarsh.dev", // Placeholder
  location: "IIT Bombay, India",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  }
};

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    role: "BackEnd Developer Intern",
    company: "Young Thames LLP, Noida",
    period: "July 2025 - Oct 2025", // Future date in resume, assuming typo or planned. Using as is.
    description: [
      "Developed dynamic features using React.js for frontend and Node.js for backend APIs.",
      "Integrated RESTful APIs and dynamic server-side rendering in Next.js, enhancing SEO.",
      "Collaborated in Agile environment using GitHub and CI/CD pipelines."
    ]
  },
  {
    id: "exp2",
    role: "M.Tech Thesis Researcher",
    company: "IIT Bombay",
    period: "July 2025 - Present",
    description: [
      "Developing unsupervised ML models (K-means, CNN, PCA) to predict mineral probabilities.",
      "Leveraging geochemical, DEM, and magnetic datasets for remote bedrock identification.",
      "Built a data fusion framework combining remote sensing and ML."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "edu1",
    degree: "M.Tech in Geoinformatics",
    institution: "Indian Institute of Technology Bombay",
    year: "2026",
    
  },
  {
    id: "edu2",
    degree: "Graduation (CSE)",
    institution: "DR Br Ambedkar University",
    year: "2023",
  
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "Agentic-AI VS Code Extension",
    category: "AI/ML",
    tech: ["React.js", "Node.js", "OpenAI API", "AWS Lambda"],
    description: [
      "AI-powered extension for semantic search and code navigation.",
      "Improved efficiency by 40% with scalable Client-Server architecture.",
      "Real-time repository parsing deployed on AWS Lambda."
    ]
  },
  {
    id: "proj2",
    title: "IIT Bombay Campus Navigation App",
    category: "Full Stack",
    tech: ["JavaScript", "Leaflet", "pgRouting", "Azure"],
    description: [
      "Maps web app using Dijkstra’s Algorithm for optimized routing.",
      "Deployed on Azure VMs with configured server environment.",
      "Enhanced navigation experience with visual elements."
    ]
  },
  {
    id: "proj3",
    title: "Automated CI/CD Pipeline",
    category: "DevOps",
    tech: ["Docker", "GitHub Actions", "AWS EC2", "Node.js"],
    description: [
      "End-to-end CI/CD pipeline for Node.js application.",
      "Secure cloud hosting on AWS EC2 as reverse proxy.",
      "Automated delivery with Docker Hub integration."
    ]
  },
  {
    id: "proj4",
    title: "SkillSwap Platform",
    category: "Full Stack",
    tech: ["MERN Stack", "Socket.io", "Tailwind UI", "JWT"],
    description: [
      "Skill exchange platform with real-time chat and matchmaking.",
      "Deployed on Vercel and Render with CI/CD pipelines.",
      "Secure authentication using JWT."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages & Core",
    skills: ["Python", "JavaScript", "TypeScript", "HTML5", "CSS3"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "Tailwind CSS", "Next.js", "Redux", "Framer Motion"]
  },
  {
    category: "Backend & DB",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL", "REST APIs"]
  },
  {
    category: "DevOps & Cloud",
    skills: ["AWS (EC2, Lambda)", "Docker", "CI/CD", "Azure", "Git"]
  },
  {
    category: "AI / ML",
    skills: ["TensorFlow", "PyTorch", "OpenCV", "CNNs", "NLP", "Pandas"]
  }
];

export const ICON_MAP = {
  Code2, BrainCircuit, Globe, Container, Database, Server, Layout, Cpu
};
