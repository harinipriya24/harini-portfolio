import resumeAsset from "@/assets/resume.pdf.asset.json";
import { assetUrl } from "@/lib/asset-url";

// Edit your personal links here.
export const profile = {
  name: "Kakkerla Harini Priya",
  shortName: "Harini Priya",
  title: "AI & Full-Stack Developer",
  github: "https://github.com/harinipriya24",
  linkedin: "https://www.linkedin.com/in/kakkerla-harini-priya-477371326/",
  email: "harinipriyakakkerla@gmail.com",
  resumeUrl: assetUrl(resumeAsset.url),
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const currentlyLearning = [
  "Advanced React",
  "Backend Development",
  "MongoDB",
  "REST APIs",
  "AI Integration",
  "Full-Stack Application Development",
];

export const experiences = [
  {
    org: "SkillCraft Technology",
    role: "Prompt Engineering Intern",
    kind: "Internship",
    description:
      "Worked on prompt engineering concepts and explored techniques for designing effective prompts for AI systems and improving AI-generated responses.",
  },
  {
    org: "Deloitte",
    role: "Data Analytics Job Simulation",
    kind: "Job Simulation",
    description:
      "Completed a practical data analytics job simulation involving data analysis, business insights and problem-solving tasks.",
  },
  {
    org: "AWS",
    role: "AWS Certified Cloud Practitioner",
    kind: "Certification & Learning",
    description:
      "Earned the AWS Certified Cloud Practitioner certification, building a foundation in cloud concepts and AWS services.",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  demonstrates?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "raghavendra",
    title: "Raghavendra Auto Finance",
    category: "Real-World Business Website",
    description:
      "A modern, responsive business website developed for Raghavendra Auto Finance to establish a professional online presence and make it easier for customers to explore the company's automotive finance services and get in touch.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Responsive Web Design"],
    features: [
      "Professional business landing page",
      "Company/service information",
      "Responsive design",
      "Contact/enquiry section",
      "Mobile-friendly navigation",
      "Modern UI",
      "Smooth interactions",
      "Clear call-to-action sections",
    ],
    liveUrl: "https://raghavendra-auto-sparkle-j7mubsam1-harini-5348.vercel.app/",
    featured: true,
  },
  {
    slug: "interviewiq",
    title: "InterviewIQ",
    category: "AI + Full-Stack Application",
    description:
      "An AI-powered interview preparation platform that helps users analyze resumes, generate interview questions, evaluate answers and track interview performance.",
    technologies: ["React", "Tailwind CSS", "Flask", "Python", "MongoDB", "AI/NLP"],
    features: [
      "Resume upload",
      "Resume text extraction",
      "Skill extraction",
      "ATS score",
      "Resume suggestions",
      "AI-generated interview questions",
      "Answer evaluation",
      "Performance analytics",
      "User profile",
    ],
    demonstrates: ["AI Integration", "Frontend Development", "Backend APIs", "Database Integration", "Full-Stack Development"],
    featured: true,
  },
  {
    slug: "travelkart",
    title: "TravelKart",
    category: "Full-Stack Travel Booking Platform",
    description:
      "A full-stack travel booking application where users can explore hotels and rooms available in different locations, view hotel details and complete the booking flow.",
    technologies: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    features: [
      "Hotel browsing",
      "Hotel details",
      "Room availability",
      "Booking flow",
      "User profile",
      "Responsive UI",
      "REST API integration",
      "MongoDB database",
    ],
    demonstrates: ["Frontend Development", "Backend Development", "REST APIs", "Database Integration", "Full-Stack Development"],
    featured: true,
  },
  {
    slug: "hospital",
    title: "Smart Hospital Management System",
    category: "Database Application",
    description:
      "A Python and SQL based hospital management application designed to manage hospital-related information efficiently.",
    technologies: ["Python", "SQL", "Database Management"],
    features: [
      "Hospital information management",
      "Patient-related data management",
      "Database operations",
      "Structured data handling",
    ],
  },
  {
    slug: "robot",
    title: "Human Following Robot",
    category: "Embedded Systems / Robotics",
    description:
      "A hardware project using sensors and a microcontroller to detect and follow a person while maintaining a safe distance and avoiding obstacles.",
    technologies: ["Arduino", "Sensors", "Microcontroller", "Embedded Systems"],
    features: [
      "Human detection",
      "Distance measurement",
      "Person following",
      "Obstacle detection",
      "Microcontroller-based control",
    ],
  },
];

export const skillGroups = [
  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
  { title: "Backend", skills: ["Flask", "Node.js", "Express.js", "Python"] },
  { title: "Databases", skills: ["MongoDB", "MySQL", "SQL", "Mongoose", "Python"] },
  { title: "AI & Data", skills: ["Machine Learning", "Data Analysis", "Pandas", "NumPy", "Scikit-learn", "AI/NLP", "Python"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman", "Jupyter Notebook", "Vite"] },
];

export const certifications = [
  { issuer: "AWS", title: "AWS Certified Cloud Practitioner", type: "Certification" },
  { issuer: "SkillCraft Technology", title: "Prompt Engineering Internship", type: "Internship" },
  { issuer: "Deloitte", title: "Data Analytics Job Simulation", type: "Job Simulation" },
];

export const achievements = [
  { title: "Strong Academic Performance", text: "CGPA 8.76 / 10 in B.Tech Artificial Intelligence & Data Science." },
  { title: "AI Application Development", text: "Built InterviewIQ, an AI-powered interview preparation platform." },
  { title: "Full-Stack Development", text: "Built TravelKart using React, Node.js, Express.js and MongoDB." },
  { title: "Real-World Development", text: "Developed and deployed a professional business website for Raghavendra Auto Finance." },
  { title: "Hands-On Learning", text: "Gained practical experience through internships, job simulations and development projects." },
];
