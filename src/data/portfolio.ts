"use client"
export const personal = {
  name: "Hamodi Marandang",
  role: "Full-Stack Developer",
  bio: "I'm a full-stack developer dedicated to building scalable, high-performance systems that solve complex business challenges. Blending modern web frameworks with the analytical depth of advanced mathematical studies, I deliver efficient, user-centric solutions.",
  github: "https://github.com/hmdmrndng-dev",
  linkedin: "https://www.linkedin.com/in/hamodi-marandang",
  email: "hmdmrndng@gmail.com",
}

export const techStack = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TailwindCSS", icon: "tailwindcss" },
      { name: "MUI", icon: "mui" },
      { name: "shadcn/ui", icon: "shadcnui" },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Prisma", icon: "prisma" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    category: "BaaS",
    items: [
      { name: "Supabase", icon: "supabase" },
      { name: "Firebase", icon: "firebase" },
      { name: "Neon", icon: "neon" },
    ],
  },
  {
    category: "Deployment & Tools",
    items: [
      { name: "Vercel", icon: "vercel" },
      { name: "GitHub", icon: "github" },
      { name: "GitLab", icon: "gitlab" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "VS Code", icon: "vscode" },
    ],
  },
]

export const workExperience = [
  {
    company: "Lake Shore Colleges",
    role: "IT STAFF - Admin Department",
    period: "January 22, 2025 – May 6, 2026",
    description: [
      "Developed and deployed a web-based HRIS",
      "Supervised Learning Management and Service Management System development",
      "Established automated systems for enrollment, cashier, report card, and inventory",
    ],
  },
]

export const projects = [
  {
    name: "Lake Shore Colleges HRIS",
    description:
      "A full-stack application tailored for Lake Shore Colleges, designed to streamline HR processes and enhance administrative efficieny.",
    items: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TailwindCSS", icon: "tailwindcss" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Prisma", icon: "prisma" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
    github: "https://github.com/hmdmrndng-dev/lsc-hris",
    live: "",
  },
]

export const education = [
  {
    institution: `Eulogio "Amang" Rodriguez Institute of Science and Technology - Manila Campus`,
    degree: "Master of Science in Mathematics",
    period: "October 2025 – Present",
    units: 9,
    bg: "bg-[url('assets/education/earist.jpg')]",
  },
  {
    institution: `Cavite State University – Carmona Campus`,
    degree: "Bachelor of Science in Computer Science",
    period: "August 2019 - April 2024",
    details: [
      "Vice President's Lister (First Semester of A.Y. 2020-2021)",
      "Vice President's Lister (First Semester of A.Y. 2021-2022)",
    ],
    bg: "bg-[url('assets/education/cvsu.jpg')]",
  },
  {
    institution: `Lake Shore Educational Institution`,
    degree: "Senior High School - Computer Hardware Servicing (TVL-ICT-CHS)",
    period: "June 2017 - April 2019",
    bg: "bg-[url('assets/education/lakeshore.jpg')]",
  },
  {
    institution: `Lake Shore Educational Institution`,
    degree: "Junior High School",
    period: "June 2013 - April 2017",
    bg: "bg-[url('assets/education/lakeshore.jpg')]",
  },
]
