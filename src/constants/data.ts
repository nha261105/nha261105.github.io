export interface NavLink {
  id: string;
  label: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Project {
  id: number;
  name: string;
  tagline: string;
  timeline: string;
  team: string;
  problem: string;
  solution: string;
  highlights: string[];
  tech: string[];
  github: string;
  demo: string | null;
  image: string | null;
}

export interface TechItem {
  name: string;
  primary: boolean;
  icon: string;
}

export interface InterestTag {
  iconClass: string | null;
  label: string;
  url: string;
}

export interface InterestItem {
  id: number;
  iconClass: string | null;
  title: string;
  description: string;
  tags: InterestTag[];
}

import meJpg from '../assets/me.jpg';
import cvPdf from '../assets/CV_Nguyen_Hoang_Anh.pdf';
import imgSmartDocAI from '../assets/img_SmartDocAI.png';

export const personalInfo = {
  name: "Nguyen Hoang Anh",
  role: "Backend Engineer",
  tagline: "> backend engineer --mode=learning",
  greeting: "Hello —",
  description: "I build backend systems that handle real-world complexity — from high-concurrency registration flows to AI-integrated pipelines. Clean Architecture is how I think. Java,Python are how I ship.",
  email: "nha261105@gmail.com",
  phone: "098 5922 611",
  location: "Phu Thanh, Ho Chi Minh City",
  github: "https://github.com/nha261105",
  linkedin: "https://linkedin.com/in/nha261105",
  discord: "https://discord.com/users/1058334582786752615",
  resume: cvPdf,
  avatar: meJpg
};

export const about = {
  bio: "Backend-focused Software Engineer Intern with hands-on experience building REST APIs, AI-integrated pipelines, and cloud-deployed applications. I approach problems through the lens of Clean Architecture, system design, and concurrency control. My toolkit spans Java, Python, and C#, with a focus on applied AI (RAG, LLM integration) and production-grade backend systems.",
  university: "Sai Gon University",
  degree: "Software Engineering",
  period: "2023–2028",
  stats: [
    { label: "Production Projects", value: "3" },
    { label: "Backend Languages", value: "3" },
    { label: "Expertise", value: "System Design & Clean Architecture" }
  ] as Stat[]
};

export const projects: Project[] = [
  {
    id: 1,
    name: "ExamSlot",
    tagline: "High-Concurrency Exam Registration System",
    timeline: "2025 (In Development)",
    team: "Solo project",
    problem: "University exam slot portals collapse under peak-time traffic — race conditions cause double-booking and data inconsistency.",
    solution: "Designed a 2-layer concurrency control: Redis Distributed Lock (outer layer) + Optimistic Locking via @Version (inner layer). Async processing via RabbitMQ decouples registration from confirmation, keeping response time fast. Real-time slot updates pushed via WebSocket Watchlist.",
    highlights: [
      "2-layer concurrency: Redis Distributed Lock + Optimistic Locking (@Version)",
      "Async confirmation pipeline with RabbitMQ",
      "Real-time Watchlist via WebSocket (multiple concurrent subscribers)",
      "Auth: Spring Security + JWT"
    ],
    tech: ["Java 17", "Spring Boot 3", "PostgreSQL", "Redis", "RabbitMQ", "WebSocket", "JUnit 5", "Docker"],
    github: "https://github.com/nha261105",
    demo: null,
    image: null
  },
  {
    id: 2,
    name: "SmartDoc AI",
    tagline: "Offline Document Q&A System",
    timeline: "Feb 2026 – Present",
    team: "Team of 4 (Led)",
    problem: "Teams handling sensitive documents (PDF, DOCX) can't rely on cloud LLMs due to data privacy concerns.",
    solution: "Built a fully offline RAG pipeline running on local hardware via Ollama. Applied Cross-Encoder re-ranking to improve retrieval quality. Explored GraphRAG as an alternative to standard vector similarity search.",
    highlights: [
      "Modular RAG pipeline: chunking → embedding (FAISS) → retrieval → generation",
      "Cross-Encoder re-ranking for precision improvement",
      "GraphRAG exploration vs standard RAG benchmarking",
      "Fully air-gapped — no internet dependency"
    ],
    tech: ["Python", "LangChain", "FAISS", "Ollama (Qwen2.5)", "Streamlit"],
    github: "https://github.com/nha261105",
    demo: null,
    image: imgSmartDocAI
  },
  {
    id: 3,
    name: "InteractHub",
    tagline: "Social Media Platform Backend",
    timeline: "Feb 2026 – Present",
    team: "Team of 4",
    problem: "Social platform backends often become monolithic and hard to test — tightly coupled layers make feature extension risky.",
    solution: "Structured the entire backend with Clean Architecture + Onion pattern (API / Core / Infrastructure / Tests). Deployed on Azure with full auth flows, file storage, and real-time notifications.",
    highlights: [
      "Clean Architecture + Onion pattern (4 layers, independently testable)",
      "JWT auth: register / login / logout / forgot & reset password",
      "Azure Blob Storage for file upload",
      "Real-time notifications via SignalR",
      "Deployed: Azure App Service + Azure SQL Database"
    ],
    tech: ["C# ASP.NET Core 8", "EF Core", "MSSQL", "JWT", "SignalR", "Azure Blob", "Swagger"],
    github: "https://github.com/nha261105",
    demo: null,
    image: null
  }
];

export const techStack: { items: TechItem[]; concepts: string[] } = {
  items: [
    { name: "Java",         primary: true,  icon: "ci ci-java" },
    { name: "Python",       primary: false, icon: "ci ci-python" },
    { name: "C#",           primary: false, icon: "ci ci-csharp" },
    { name: "Spring Boot",  primary: true,  icon: "ci ci-spring" },
    { name: "ASP.NET Core", primary: false, icon: "ci ci-dotnetcore" },
    { name: "FastAPI",      primary: false, icon: "ci ci-fastapi" },
    { name: "React",        primary: true,  icon: "ci ci-react" },
    { name: "PostgreSQL",   primary: true,  icon: "ci ci-postgresql" },
    { name: "Supabase",     primary: false, icon: "ci ci-supabase" },
    { name: "Docker",       primary: true,  icon: "ci ci-docker" },
    { name: "Git",          primary: false, icon: "ci ci-git" },
    { name: "Postman",      primary: true,  icon: "ci ci-postman" },
    { name: "Swagger",      primary: false, icon: "ci ci-swagger" },
    { name: "JUnit 5",      primary: false, icon: "ci ci-junit" },
    { name: "Latex",        primary: false, icon: "ci ci-latex" },
    { name: "Vscode",       primary: true,  icon: "ci ci-vscode" },
    { name: "IntelliJ",     primary: false, icon: "ci ci-intellij" },
    { name: "Ubuntu",       primary: false, icon: "ci ci-ubuntu" },
    { name: "Markdown",     primary: false, icon: "ci ci-markdown" },
  ],
  concepts: [
    "RESTful APIs",
    "Clean Architecture",
    "JWT Auth",
    "OOP",
    "SOLID",
    "Concurrency",
    "RAG"
  ]
};

export const education = {
  institution: "Sai Gon University",
  degree: "Bachelor of Software Engineering",
  period: "2023 – Expected 2028",
  location: "Ho Chi Minh City, Vietnam"
};

export const navLinks: NavLink[] = [
  { id: "hero",      label: "About" },
  { id: "projects",  label: "Projects" },
  { id: "tech-stack",label: "Tech Stack" },
  { id: "education", label: "Education" },
  { id: "interests", label: "Interests" },
  { id: "contact",   label: "Contact" }
];

export const interests: InterestItem[] = [
  {
    id: 1,
    iconClass: "ci ci-spotify ci-xl",
    title: "Music",
    description: "Nghe nhạc khi code. Mostly lo-fi, podcast, và dark academic.",
    tags: [
      { iconClass: "ci ci-spotify", label: "Spotify", url: "https://open.spotify.com/user/3177b6o5mok5sx4aubtuts2o3ng4?si=f3be02cc77284b3c" },
    ],
  },
  {
    id: 2,
    iconClass: "ci ci-cpp ci-xl",
    title: "Competitive Programming",
    description: "Solve problem hàng ngày, yêu thích thuật toán và tối ưu.",
    tags: [
      { iconClass: "ci ci-codeforces", label: "Codeforces", url: "https://codeforces.com/profile/Kurano" },
      { iconClass: "ci ci-leetcode",   label: "LeetCode",   url: "https://leetcode.com/u/kurano26" },
    ],
  },
  {
    id: 3,
    iconClass: "ci ci-gitbook ci-xl",
    title: "Reading",
    description: "Tech blogs, papers, và đôi khi là light novel để giải trí.",
    tags: [
      { iconClass: null, label: "Docln", url: "https://ln.hako.vn/danh-sach" },
    ],
  },
  {
    id: 4,
    iconClass: null,
    title: "Badminton",
    description: "Môn thể thao yêu thích — vừa rèn thể lực vừa xả stress sau những buổi debug dài.",
    tags: [],
  },
];
