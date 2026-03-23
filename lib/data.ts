export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
  features?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "DocVerse",
    description: "Doctor Appointment Management System | Role-based healthcare platform aligned with OWASP Top-10 security standards.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "OAuth", "Tailwind CSS", "Gemini API"],
    liveUrl: "https://doc-app-roan.vercel.app/",
    githubUrl: "https://github.com/AmiTtiwari43/DocAPP",
    features: [
      "Streamlined booking with MongoDB aggregations and indexing, achieving <50ms queries.",
      "Integrated AI health triage and analytics, improving specialist accuracy ~40%.",
      "Built a secure system following OWASP Top-10 standards."
    ]
  },
  {
    id: 2,
    title: "EventEase Lite",
    description: "Scalable MERN event platform with 9-state booking flow, UPI payments, and refunds.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
    tech: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "Tailwind CSS", "JWT", "bcrypt"],
    liveUrl: "https://event-ease-lite.vercel.app/",
    githubUrl: "https://github.com/AmiTtiwari43/EventEase-Event-booking-Website-using-React-And-Node-js",
    features: [
      "Strengthened multi-layer RBAC security with JWT and middleware hardening.",
      "Optimized React performance using memoization, cutting re-renders ~35%.",
      "Implemented complex 9-state booking flow with validation."
    ]
  },
  {
    id: 3,
    title: "AI Virtual Therapy Assistant",
    description: "AI-assisted CBT chatbot with structured dialogue flows and contextual emotion cues.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "Gemini API"],
    liveUrl: "#",
    githubUrl: "https://github.com/AmiTtiwari43/AI-VIRTUAL-THERAPY-ASSISTANT-BOT",
    features: [
      "Improved user understanding and clarity by 25% with structured dialogue.",
      "Implemented intent recovery and fallback routing, reducing failures by 30%.",
      "Refined context memory handling, reducing repeated queries by 20%."
    ]
  },
];

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  type: "Work" | "Training" | "Education";
}

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "NYERAS Edu-tech and Innovations Pvt. Ltd",
    period: "Aug 2025 - Dec 2025",
    description: "Designed and deployed a MERN healthcare system using MVC-based 3-tier architecture. Developed 40+ secure RESTful APIs with JWT/RBAC. Accelerated API latency by 75% and manual workflows by 90%.",
    type: "Work"
  },
  {
    id: 2,
    role: "Full Stack Development Trainee",
    company: "University Training",
    period: "June 2025 - Aug 2025",
    description: "Intensive program on React and Node focusing on scalable UI design and secure backend architecture. Executed multiple end-to-end projects with high accuracy, earning an 'A' grade.",
    type: "Training"
  },
  {
    id: 3,
    role: "B.Tech CSE Student",
    company: "Lovely Professional University",
    period: "Aug 2023 - Present",
    description: "Pursuing Bachelor of Technology in Computer Science and Engineering. Current CGPA: 7.9.",
    type: "Education"
  },
];

export const SKILLS = {
  frontend: ["React.js", "Next.js", "Tailwind CSS", "Redux", "HTML", "CSS", "Figma"],
  backend: ["Node.js", "Express.js", "JavaScript", "Python", "Java", "C", "C++", "PHP", "Flask"],
  database: ["MongoDB", "MySQL", "PostgreSQL"],
  cloud: ["GCP", "Docker", "Vercel", "Netlify", "Render", "Git", "GitHub", "VS Code"],
  soft: ["Teamwork", "Problem Solving", "Leadership", "Adaptability", "Critical Thinking", "Consistency", "Collaboration"]
};

export const CERTIFICATIONS = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
    issuer: "Oracle",
    date: "Oct 2025",
    image: "/ORACLE OCI DEVOPS PROFESSIONAL.png",
    link: "https://github.com/AmiTtiwari43/Certificates-Certifications/blob/a956af93b5dc077bc2a058c9ccc18aabc0897e66/ORACLE%20OCI%20DEVOPS%20PROFESSIONAL.pdf"
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: "Oct 2025",
    image: "/ORACLE OCI FOUNDATION ASSOCIATE.png",
    link: "https://github.com/AmiTtiwari43/Certificates-Certifications/blob/a956af93b5dc077bc2a058c9ccc18aabc0897e66/ORACLE%20OCI%20FOUNDATION%20ASSOCIATE.pdf"
  },
  {
    name: "Software Engineering Job Simulation",
    issuer: "Accenture / Forage",
    date: "Aug 2024",
    image: "/forage accenture job sim.png",
    link: "https://github.com/AmiTtiwari43/Certificates-Certifications/blob/a956af93b5dc077bc2a058c9ccc18aabc0897e66/forage%20accenture%20job%20sim.pdf"
  },
  {
    name: "AI for Engineers",
    issuer: "Outskill",
    date: "March 2024",
    image: "/Outskill Ai for engineers.png",
    link: "https://github.com/AmiTtiwari43/Certificates-Certifications/blob/a956af93b5dc077bc2a058c9ccc18aabc0897e66/Outskill%20AI%20for%20Engineers.pdf"
  }
];

export interface Achievement {
  title: string;
  description: string;
  link?: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "LeetCode",
    description: "Solved 600+ Data Structures and Algorithms problems.",
    link: "https://leetcode.com/u/AmitTiwari27/"
  },
  {
    title: "LeetCode Streak",
    description: "Maintained a 200+ day continuous coding streak.",
    link: "https://leetcode.com/u/AmitTiwari27/"
  },
  {
    title: "Leetcode Knight Badge Achieved",
    description: "Obtained Knight Badge on Leetcode with Rating of 1900+."
  }
];

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/amit-tiwari-cs/",
  github: "https://github.com/AmiTtiwari43",
  leetcode: "https://leetcode.com/u/AmitTiwari27/",
  resume: "/resume.pdf",
  email: "amit.tiwari2914@gmail.com",
  mobile: "+91-9115410470"
};
