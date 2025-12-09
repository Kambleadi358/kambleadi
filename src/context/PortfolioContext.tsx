import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Skill {
  id: string;
  name: string;
  level: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  grade?: string;
  activities?: string;
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
  location: string;
  profileImage: string;
  about: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  awards: Award[];
}

const defaultData: PortfolioData = {
  name: "Aditya Kamble",
  title: "B.Tech Computer Engineering Student @ VIT'28 | Best Outgoing Student 24-25 @ SVIP | Intern @ CodeSoft | Ex-Intern @ Operant Tech & IT Solutions LLP | Co-Founder of projectCave",
  location: "India",
  profileImage: "",
  about: "Pursuing B.Tech in Computer Engineering at VIT'28. Passionate about software development, web development, and ERP systems. Co-founder of projectCave, building solutions for technical students. Recognized as Best Outgoing Student 24-25 at SVIP with experience across multiple internships in software development.",
  email: "aditya.kamble@email.com",
  phone: "+91 XXXXXXXXXX",
  linkedin: "linkedin.com/in/adityakamble",
  github: "github.com/adityakamble",
  skills: [
    { id: "1", name: "Network Marketing", level: 85 },
    { id: "2", name: "Enterprise Resource Planning (ERP)", level: 90 },
    { id: "3", name: "Software Development", level: 88 },
    { id: "4", name: "Presentation Skills", level: 82 },
    { id: "5", name: "Web Development", level: 92 },
  ],
  projects: [
    {
      id: "1",
      title: "Journey Easy",
      description: "Web application for tourist hotel and travel bookings developed at Operand Technologies & IT Solutions LLP. Streamlined booking process with intuitive user interface.",
      techStack: ["HTML", "CSS", "JavaScript", "Frontend Web Development"],
      link: "#"
    },
    {
      id: "2",
      title: "Smart ERP",
      description: "Comprehensive college ERP system managing admissions, send-ups, and day-to-day operations. Built to streamline administrative processes.",
      techStack: ["ERP", "Database Management", "Full Stack"],
      link: "#"
    },
    {
      id: "3",
      title: "projectCave",
      description: "Platform providing software projects for technical students with a zero-error policy and focus on client satisfaction. Co-founded to bridge the gap between students and quality projects.",
      techStack: ["Web Development", "Project Management", "Client Relations"],
      link: "#"
    }
  ],
  experience: [
    {
      id: "1",
      company: "CodeSoft",
      role: "Software Development Intern",
      duration: "Present",
      description: "Working on software development projects, contributing to codebase and learning industry best practices."
    },
    {
      id: "2",
      company: "Operand Technologies & IT Solutions LLP",
      role: "Web Developer Intern",
      duration: "Previous",
      description: "Developed Journey Easy web application for tourist bookings. Worked on frontend development and user experience optimization."
    },
    {
      id: "3",
      company: "NativeSoftTech",
      role: "Web Developer Intern",
      duration: "Previous",
      description: "Gained hands-on experience in web development, working with modern technologies and collaborative development practices."
    },
    {
      id: "4",
      company: "Forever Living Products",
      role: "Digital Network Marketing",
      duration: "Previous",
      description: "Developed skills in digital marketing, client relations, and business development through network marketing initiatives."
    }
  ],
  education: [
    {
      id: "1",
      institution: "Vishwakarma Institute of Technology",
      degree: "B.Tech, Computer Engineering",
      duration: "Aug 2025 – Jun 2028",
      activities: "Active participant in technical events and student activities"
    },
    {
      id: "2",
      institution: "Maharashtra State Board of Technical Education",
      degree: "Diploma, Computer Engineering",
      duration: "Sep 2022 – Jun 2025",
      grade: "95.66%",
      activities: "Festival Organizer, Student Activities"
    }
  ],
  awards: [
    {
      id: "1",
      title: "Association Project Manager (APM)",
      year: "Aug 2025",
      description: "Recognized for leadership and project management excellence"
    },
    {
      id: "2",
      title: "Dr. APJ Abdul Kalam Bhartiya Ratna Samman",
      year: "2025",
      description: "Prestigious honor recognizing outstanding contributions"
    },
    {
      id: "3",
      title: "Exclusive Global Honour 2025",
      year: "2025",
      description: "Awarded for outstanding engineering performance and academic excellence"
    },
    {
      id: "4",
      title: "Best Outgoing Student 24-25",
      year: "2024-25",
      description: "Recognized at SVIP for overall excellence in academics and extracurriculars"
    }
  ]
};

interface PortfolioContextType {
  data: PortfolioData;
  updateData: (newData: Partial<PortfolioData>) => void;
  isAdmin: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(() => {
    const saved = localStorage.getItem('portfolioData');
    return saved ? JSON.parse(saved) : defaultData;
  });
  
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('isAdmin') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('portfolioData', JSON.stringify(data));
  }, [data]);

  const updateData = (newData: Partial<PortfolioData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  const login = (username: string, password: string): boolean => {
    // Simple hardcoded authentication
    if (username === 'admin' && password === 'aditya2024') {
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
