/**
 * Single source of truth — all content sourced directly from
 * Prateek Srivastava's resume (Prateek_Resume.pdf).
 */

export const PROFILE = {
  name: "Prateek Srivastava",
  firstName: "Prateek",
  lastName: "Srivastava",
  initials: "PS",
  title: "Final Year Undergraduate",
  field: "Electronics Engineering",
  university: "Harcourt Butler Technical University, Kanpur",
  location: "India",
  email: "pratiksri1976@gmail.com",
  phone: "+91 9918927749",
  github: "https://github.com/prateek-workspace/",
  linkedin: "https://www.linkedin.com/in/prateek-workspace",
  portfolio: "https://prateek-workspace.github.io/portfolio/",
  resumePdf: "https://drive.google.com/file/d/173Owsqtck-Qez0IattsHCZt7XimqIJdF/view",
  roles: ["Backend Developer", "Full-Stack Developer", "AI Engineer", "Automation Developer"],
  tagline:
    "Backend & AI Engineer building agentic systems, real-time platforms, and production-grade applications that reach hundreds of thousands of users.",
} as const;

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  points: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    company: "Dualite AI",
    role: "Backend Intern",
    period: "Aug 2025 – Present",
    points: [
      "Scaled backend systems with cross-functional teams, contributing to product growth to 100K+ users.",
      "Tested and validated end-to-end payment pipelines, ensuring reliable transaction processing.",
      "Delivered 5+ production-ready full-stack applications with robust backend logic, APIs, and deployments.",
      "Contributed to the Prompt Enhancer and Visual Editor, improving manual user interaction efforts by 30%.",
      "Performed backend testing and debugging, improving system stability and production readiness.",
    ],
  },
  {
    company: "STC — Indian Railways",
    role: "AI Research Intern",
    period: "Jun 2025 – Jul 2025",
    location: "Lucknow",
    points: [
      "Built and deployed a face recognition system using computer vision integrated with a humanoid robot.",
      "Improved model accuracy from 60–70% to 94% via dataset enhancement and model optimization.",
      "Enabled real-time inference (sub-second latency) through collaboration with the robotics team.",
    ],
  },
  {
    company: "SoftPro India",
    role: "SDE Intern",
    period: "Jul 2023 – Sep 2023",
    location: "Lucknow",
    points: [
      "Contributed to an e-learning platform serving 30,000+ users.",
      "Optimized backend and database queries, reducing response time by 15%.",
      "Delivered scalable, production-ready features with cross-functional teams.",
    ],
  },
];

export interface Project {
  title: string;
  category: string;
  summary: string;
  demo?: string;
  repo?: string;
  stack: string[];
  points: string[];
  image: string;
  span: string;
  aspect: string;
}

export const PROJECTS: Project[] = [
  {
    title: "ASHA AI",
    category: "Voice-First Rural Health Companion",
    summary:
      "A multilingual, voice-first AI health companion bringing healthcare to rural users over WhatsApp & mobile.",
    demo: "https://asha-ai-techx.pages.dev/",
    repo: "",
    stack: [
      "FastAPI",
      "React",
      "Supabase Auth",
      "NeonDB",
      "Google Cloud",
      "AI Agents",
      "Whisper",
      "Mistral",
      "Vertex AI",
    ],
    points: [
      "Developed a multilingual voice-first AI assistant enabling rural users to access healthcare via WhatsApp and mobile apps.",
      "Built a speech-to-intent pipeline using Whisper and fine-tuned LLMs to interpret regional dialect inputs.",
      "Designed a medical knowledge system using WHO + government guidelines for safe AI responses.",
      "Implemented voice-based tracking, nutrition planning, and risk detection for maternal and adolescent health.",
      "Engineered an ASHA worker module for automated logging, summaries, and high-risk case detection.",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-7",
    aspect: "aspect-[16/11]",
  },
  {
    title: "Pulse AI",
    category: "Clinical Surveillance System",
    summary:
      "Event-driven clinical surveillance with a 0–100 CareScore and real-time, multi-role dashboards.",
    demo: "https://pulseai-hackshodh.pages.dev/",
    repo: "", 
    stack: [
      "FastAPI",
      "React",
      "Supabase Auth",
      "NeonDB",
      "TimescaleDB",
      "Google Cloud",
      "AI Agents",
      "Vertex AI",
    ],
    points: [
      "Built an event-driven health monitoring system for early risk detection using time-series analysis.",
      "Developed data ingestion pipelines using Google OAuth + Drive API (ZIP → SQLite → structured data).",
      "Designed a CareScore (0–100) engine to track patient health trends across multiple signals.",
      "Implemented a multi-role system (Patient, Doctor, Caretaker) with RBAC and real-time dashboards for updates & alerts.",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    span: "md:col-span-5",
    aspect: "aspect-[16/11]",
  },
  {
    title: "AI Job Hunting Agent",
    category: "Agentic AI + Automation",
    summary:
      "An autonomous n8n pipeline that scrapes, ranks & alerts on job fits every 6 hours — saving 10+ hrs/week.",
    demo: "https://www.linkedin.com/posts/prateek-workspace_ai-jobsearch-automation-activity-7348274499743555584-3a0i",
    repo: "", 
    stack: ["n8n", "Agentic AI", "Automation", "Google Sheets API"],
    points: [
      "Built an AI-driven job pipeline scraping platforms and ranking jobs based on resume fit.",
      "Automated workflows using n8n, running every 6 hours with real-time updates.",
      "Delivered structured outputs to Google Sheets with email alerts, saving 10+ hrs/week.",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
    span: "md:col-span-5",
    aspect: "aspect-[16/11]",
  },
  {
    title: "MDRS",
    category: "Multimodal Deception Risk Scorer · iSAFE World Finalist",
    summary:
      "World-finalist, explainable media-authenticity scorer — 0–100 deception risk across image, video, audio & text, with a Chrome extension for in-page triage.",
    demo: "https://isafe-hackathon.pages.dev/", 
    repo: "https://github.com/prateekhbtu/isafe-hackathon",
    stack: [
      "Python",
      "FastAPI",
      "Next.js 14",
      "Chrome Extension (MV3)",
      "AI Detectors",
      "NewsAPI",
      "Gemini",
    ],
    points: [
      "World Finalist at the iSAFE Hackathon for an explainable, probabilistic media-authenticity risk scorer (0–100).",
      "Built multimodal detectors for image, video, audio, and text — surfacing manipulation artifacts, temporal/spectral anomalies, synthesis cues, and stylometric drift.",
      "Engineered a weighted risk engine with threshold mapping, signal-level confidence, evidence breakdown, and human-in-the-loop reviewer guidance.",
      "Shipped a stateless FastAPI gateway with pluggable detectors and bounded URL media ingestion for horizontal scaling.",
      "Created a Manifest V3 Chrome extension (content script + service worker + side panel) for in-context scanning on any web page.",
      "Added optional external verification via NewsAPI credibility checks and Gemini-based risk synthesis.",
    ],
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-7",
    aspect: "aspect-[16/11]",
  },
  {
    title: "Discom",
    category: "Mentor Connect Platform",
    summary:
      "A real-time mentor-connect platform with chat, video calls & WebSockets — supporting 100+ concurrent users.",
    demo: "http://discom.pythonanywhere.com/",
    repo: "", 
    stack: ["React", "WebSockets", "Real-Time Systems", "Full-Stack"],
    points: [
      "Built a real-time collaboration platform with chat, video calls, and WebSockets, supporting 100+ concurrent users.",
      "Implemented role-based access, an AI assistant, and scalable backend architecture.",
    ],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-7",
    aspect: "aspect-[16/11]",
  },
  {
    title: "Targeted Commenting Agent",
    category: "Agentic AI + Backend",
    summary:
      "A human-in-the-loop agent for safe, auditable social engagement built on a state-machine workflow.",
    demo: "https://auto-commenting-agent.onrender.com/docs", 
    repo: "https://github.com/prateek-workspace/auto-commenting-agent",
    stack: ["Agentic AI", "LLM", "State Machine", "Backend"],
    points: [
      "Built a human-in-the-loop agentic system for targeted social media engagement across platforms.",
      "Designed a state-machine workflow with safe transitions and auditability (no unintended posting).",
      "Implemented LLM + platform adapters with a context-aware prompt pipeline for consistent outputs.",
      "Developed a feedback loop + compliance layer to improve generations and ensure brand safety.",
    ],
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-5",
    aspect: "aspect-[16/11]",
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    label: "Languages",
    items: ["C", "C++", "Python", "JavaScript", "SQL"],
  },
  {
    label: "Frameworks & Libraries",
    items: [
      "Django",
      "React.js",
      "Node.js",
      "Hono.js",
      "Tailwind CSS",
      "MaterialUI",
      "Bootstrap",
      "Tkinter",
      "OpenCV",
    ],
  },
  {
    label: "Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "SQLite3",
      "MongoDB",
      "Supabase",
      "NeonDB",
      "TimescaleDB",
    ],
  },
  {
    label: "Dev Tools & Utilities",
    items: ["Git", "GitHub", "Docker", "Postman", "Figma", "Notion", "Jira"],
  },
];

/** Visual focus areas used in the parallax gallery. */
export const FOCUS_AREAS: { label: string; image: string }[] = [
  {
    label: "Agentic AI",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=700&q=80",
  },
  {
    label: "Backend Systems",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80",
  },
  {
    label: "Computer Vision",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=700&q=80",
  },
  {
    label: "Real-Time Systems",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=700&q=80",
  },
  {
    label: "Automation",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
  },
  {
    label: "Full-Stack",
    image:
      "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?auto=format&fit=crop&w=700&q=80",
  },
];

export interface Achievement {
  title: string;
  detail: string;
  meta: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "iSAFE Hackathon — World Finalist",
    detail:
      "World Finalist at the iSAFE Hackathon by International Telecommunication (UK) among 10K+ participants worldwide.",
    meta: "10K+ worldwide",
  },
  {
    title: "5x Hackathon Winner",
    detail: "Won Square Hacks Finals (IIT Delhi) among 600+ teams nationwide.",
    meta: "₹40,000 prize",
  },
  {
    title: "Best AI Innovative Use Case",
    detail: "GenAI Hackathon Finals among 85+ teams (AI Community Lucknow & TFUG).",
    meta: "Winner",
  },
  {
    title: "Runner-up, TechX Hackathon",
    detail: "Built a cybersecurity solution for Cyber Police Lucknow.",
    meta: "₹10,000 prize",
  },
  {
    title: "Smart India Hackathon (SIH)",
    detail: "Internal Qualifier among 100+ teams across institute-level selection.",
    meta: "Qualifier",
  },
  {
    title: "Community Organizer",
    detail:
      "Organized hackathons and tech events under GDG HBTU & AETE, engaging 500+ students.",
    meta: "500+ students",
  },
  {
    title: "Mentor",
    detail:
      "Mentored students in Web Development, AI/ML, and emerging technologies across communities.",
    meta: "Mentorship",
  },
];

export interface Position {
  role: string;
  org: string;
}

export const POSITIONS: Position[] = [
  { role: "Lead", org: "Google Developers Group On Campus (GDGoC), HBTU Kanpur Chapter" },
  { role: "Technical Head", org: "Association of Electronics Engineers (AETE), HBTU Kanpur" },
  { role: "Technical Team", org: "NSS, HBTU Kanpur" },
];

export const CERTIFICATIONS: string[] = [
  "100 Hours Course on Cyber Security and Digital Forensics — IIT Kota",
  "Course on Computer Concepts — NIELIT (National Institute of Electronics and Information Technology)",
];

export interface Education {
  exam: string;
  institute: string;
  board: string;
  year: string;
  score: string;
}

export const EDUCATION: Education[] = [
  {
    exam: "B.Tech (Electronics & Telecommunication)",
    institute: "HBTU Kanpur",
    board: "HBTU Kanpur",
    year: "2024 – Present",
    score: "7.0 / 10.0 CPI",
  },
  {
    exam: "Diploma (Information Technology)",
    institute: "Government Polytechnic, Lucknow",
    board: "BTEUP",
    year: "2024",
    score: "77.78%",
  },
  {
    exam: "Class XII",
    institute: "Sri Sai Inter College",
    board: "UP Board",
    year: "2021",
    score: "86.80%",
  },
];

export const STATS: { value: string; label: string }[] = [
  { value: "100K+", label: "Users Reached" },
  { value: "5×", label: "Hackathons Won" },
  { value: "10+", label: "Projects delivered" },
  { value: "600+", label: "Teams Outperformed" },
];
