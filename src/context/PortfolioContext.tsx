import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import profilePhoto from '@/assets/profile-photo.jpg';

export interface Skill {
  id: string;
  name: string;
  category: string;
}

export interface Course {
  id: string;
  name: string;
  provider?: string;
  year?: string;
}

export type ProjectCategory = 'Web' | 'AI/ML' | 'Full Stack' | 'Mobile' | 'Other';

export interface Project {
  id: string;
  title: string;
  description: string;
  problem?: string;
  features: string[];
  techStack: string[];
  category: ProjectCategory;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  tech?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  grade?: string;
  cgpa?: string;
  activities?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  link?: string;
}

export interface Award {
  id: string;
  title: string;
  year: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  location: string;
  profileImage: string;
  about: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  instagram: string;
  cvUrl: string;
  skills: Skill[];
  courses: Course[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  awards: Award[];
}

export const SKILL_CATEGORIES = [
  'Programming',
  'Frontend',
  'Backend',
  'Database',
  'Tools',
  'AI / ML',
  'Core CS',
  'Professional',
];

const defaultData: PortfolioData = {
  name: 'Aditya Kamble',
  title: 'Computer Engineering Student & Full Stack Developer',
  tagline:
    'I build responsive web applications and data-driven systems — from institutional ERP platforms to AI-assisted accessibility tooling.',
  location: 'Pune, India',
  profileImage: profilePhoto,
  about:
    "I'm a B.Tech Computer Engineering student at Vishwakarma Institute of Technology, Pune (2025–2028, CGPA 9.07), with a Diploma in Computer Engineering (95.66%) before it. My work focuses on full stack web development — PHP/MySQL and JavaScript-based systems — alongside data analytics and AI-assisted tooling. I've built an ERP system for educational institutions, a WCAG accessibility evaluation tool, and a community governance platform, and I completed a front-end development internship at Operant Tech. & IT Solutions LLP. I'm currently looking for software engineering internships and freelance web development work.",
  email: 'aditya.1252070010@vit.edu',
  phone: '+91 8275956954',
  linkedin: 'linkedin.com/in/kambleadi358',
  github: 'github.com/kambleadi358',
  instagram: 'instagram.com/bizbyte_adi',
  cvUrl: '/resume/Aditya-Kamble-Resume.pdf',
  skills: [
    { id: 's1', name: 'Java', category: 'Programming' },
    { id: 's2', name: 'JavaScript', category: 'Programming' },
    { id: 's3', name: 'PHP', category: 'Programming' },
    { id: 's4', name: 'SQL', category: 'Programming' },
    { id: 's5', name: 'HTML', category: 'Frontend' },
    { id: 's6', name: 'CSS', category: 'Frontend' },
    { id: 's7', name: 'Bootstrap', category: 'Frontend' },
    { id: 's8', name: 'Responsive Web Design', category: 'Frontend' },
    { id: 's9', name: 'PHP Backend Development', category: 'Backend' },
    { id: 's10', name: 'REST APIs', category: 'Backend' },
    { id: 's11', name: 'MySQL', category: 'Database' },
    { id: 's12', name: 'Database Design', category: 'Database' },
    { id: 's13', name: 'Git', category: 'Tools' },
    { id: 's14', name: 'GitHub', category: 'Tools' },
    { id: 's15', name: 'VS Code', category: 'Tools' },
    { id: 's16', name: 'Vercel', category: 'Tools' },
    { id: 's17', name: 'Power BI', category: 'Tools' },
    { id: 's18', name: 'Microsoft Office', category: 'Tools' },
    { id: 's19', name: 'Generative AI', category: 'AI / ML' },
    { id: 's20', name: 'AI API Integration', category: 'AI / ML' },
    { id: 's21', name: 'Data Structures & Algorithms', category: 'Core CS' },
    { id: 's22', name: 'Operating Systems', category: 'Core CS' },
    { id: 's23', name: 'Computer Networks', category: 'Core CS' },
    { id: 's24', name: 'DBMS', category: 'Core CS' },
    { id: 's25', name: 'Software Engineering', category: 'Core CS' },
    { id: 's26', name: 'Critical Thinking', category: 'Professional' },
    { id: 's27', name: 'Presentation Skills', category: 'Professional' },
  ],
  courses: [
    { id: 'c1', name: 'Data Structures & Algorithms', provider: 'VIT Pune', year: '2025' },
    { id: 'c2', name: 'Database Management Systems', provider: 'VIT Pune', year: '2025' },
    { id: 'c3', name: 'Operating Systems', provider: 'VIT Pune', year: '2026' },
    { id: 'c4', name: 'Computer Networks', provider: 'VIT Pune', year: '2026' },
    { id: 'c5', name: 'Software Engineering', provider: 'VIT Pune', year: '2026' },
    { id: 'c6', name: 'Web Technologies', provider: 'VIT Pune', year: '2026' },
  ],
  projects: [
    {
      id: 'p1',
      title: 'Smart ERP System',
      description:
        'ERP system for educational institutions covering student records and administrative operations.',
      problem:
        'Colleges track admissions, attendance and academic records across disconnected registers and spreadsheets.',
      features: [
        'User management and role-based access',
        'Attendance and academic records modules',
        'Notifications for students and staff',
      ],
      techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      category: 'Full Stack',
      github: 'https://github.com/kambleadi358/smart-erp-system',
      featured: true,
    },
    {
      id: 'p2',
      title: 'AccessFix',
      description:
        'Web accessibility evaluation tool that analyses websites against WCAG guidelines using AI.',
      problem:
        'Small teams ship sites with accessibility issues they never get a readable report on.',
      features: [
        'Automated WCAG compliance checks',
        'Generated accessibility reports',
        'Highlights issues with improvement guidance',
      ],
      techStack: ['JavaScript', 'AI APIs', 'WCAG', 'Web'],
      category: 'AI/ML',
      github: 'https://github.com/kambleadi358/accessfix',
      featured: true,
    },
    {
      id: 'p3',
      title: 'VicharManch',
      description:
        'Digital community governance platform for constitutional literacy and intelligent reporting.',
      problem:
        'The Vicharmanch organisation managed events, registrations and reporting manually across channels.',
      features: [
        'Event and competition registration',
        'Announcements and member communication',
        'Centralised administrative dashboard',
      ],
      techStack: ['React', 'Web App', 'Vercel'],
      category: 'Full Stack',
      demo: 'https://vicharmanch.vercel.app',
      featured: true,
    },
    {
      id: 'p4',
      title: 'Journey Easy',
      description:
        'Web application for tourist hotel and travel bookings, built during an internship at Operant Tech. & IT Solutions LLP.',
      problem: 'Manual booking enquiries slowed down the travel agency workflow.',
      features: ['Booking flow UI', 'Responsive layouts', 'Front-end integration with backend tasks'],
      techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      category: 'Web',
      featured: true,
    },
    {
      id: 'p5',
      title: 'projectCave',
      description:
        'Co-founded platform providing software projects and build support for technical students.',
      problem: 'Students struggle to find reliable, working project implementations and guidance.',
      features: ['Project catalogue', 'Client-focused delivery process', 'Zero-error delivery policy'],
      techStack: ['Web Development', 'Project Management'],
      category: 'Other',
    },
  ],
  experience: [
    {
      id: 'e1',
      company: 'Operant Tech. & IT Solutions LLP',
      role: 'Web Development Intern — Front End Developer',
      duration: 'May 2024 – Jun 2024 · Latur',
      description:
        'Developed responsive web pages, contributed to front-end and back-end development tasks, and improved existing web applications following industry best practices.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    },
    {
      id: 'e2',
      company: 'Operant Tech. & IT Solutions LLP',
      role: 'Industrial Training',
      duration: 'May 2024 – Jul 2024 · Latur',
      description:
        'Completed industrial training covering practical web development workflows and team delivery practices.',
      tech: ['Web Development'],
    },
    {
      id: 'e3',
      company: 'projectCave',
      role: 'Co-Founder',
      duration: 'Ongoing',
      description:
        'Co-founded a student-focused software project service; handles client requirements, delivery quality and project coordination.',
      tech: ['Web Development', 'Client Relations'],
    },
  ],
  education: [
    {
      id: 'ed1',
      institution: 'Vishwakarma Institute of Technology, Pune',
      degree: 'B.Tech, Computer Engineering',
      duration: 'Aug 2025 – Jun 2028 (expected)',
      cgpa: '9.07',
      activities:
        'Coursework in Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering and Web Technologies.',
    },
    {
      id: 'ed2',
      institution: 'Maharashtra State Board of Technical Education',
      degree: 'Diploma, Computer Engineering',
      duration: 'Sep 2022 – Jun 2025',
      grade: '95.66%',
      activities: 'Best Outgoing Student 24-25 (SVIP); festival organiser and student activities.',
    },
  ],
  certifications: [
    {
      id: 'cert1',
      name: 'Tata Cybersecurity Security Analyst Job Simulation',
      issuer: 'Forage',
      date: 'Jul 2026',
    },
    {
      id: 'cert2',
      name: 'Generative AI for Everyone',
      issuer: 'DeepLearning.AI',
      date: 'Jul 2026',
    },
    {
      id: 'cert3',
      name: 'Industrial Training Completion',
      issuer: 'Operant Tech. & IT Solutions LLP',
      date: 'May – Jul 2024',
    },
  ],
  awards: [
    {
      id: 'a1',
      title: 'Best Outgoing Student 24-25',
      year: '2024-25',
      description: 'Awarded at SVIP for overall excellence in academics and extracurricular activities.',
    },
    {
      id: 'a2',
      title: 'Association Project Manager (APM)',
      year: 'Aug 2025',
      description: 'Recognised for leadership and project coordination.',
    },
    {
      id: 'a3',
      title: 'Dr. APJ Abdul Kalam Bhartiya Ratna Samman',
      year: '2025',
      description: 'Honour recognising outstanding contributions.',
    },
    {
      id: 'a4',
      title: 'Exclusive Global Honour 2025',
      year: '2025',
      description: 'Awarded for engineering performance and academic excellence.',
    },
  ],
};

interface PortfolioContextType {
  data: PortfolioData;
  updateData: (newData: Partial<PortfolioData>) => void;
  isAdmin: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const STORAGE_KEY = 'portfolioData_v2';

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return defaultData;
      const parsed = JSON.parse(saved);
      return { ...defaultData, ...parsed };
    } catch {
      return defaultData;
    }
  });

  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('isAdmin') === 'true');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const updateData = (newData: Partial<PortfolioData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  const login = (username: string, password: string): boolean => {
    if (username === 'admin' && password === 'Kamble@358') {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
  };

  return (
    <PortfolioContext.Provider value={{ data, updateData, isAdmin, login, logout }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
