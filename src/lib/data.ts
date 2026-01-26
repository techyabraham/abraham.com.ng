export type Project = {
  slug: string;
  name: string;
  summary: string;
  category: string;
  year: string;
  role: string;
  stack: string[];
  outcome: string[];
  cover: string;
  overview: string;
  problem: string;
  solution: string;
  screenshots: string[];
  links?: {
    live?: string;
    github?: string;
  };
  cta: {
    label: string;
    href: string;
  };
};

export type Writing = {
  title: string;
  summary: string;
  date: string;
  readTime: string;
  href: string;
};

export type Book = {
  title: string;
  summary: string;
  status: string;
  cover: string;
};

export type Talk = {
  title: string;
  event: string;
  year: string;
  location: string;
  summary: string;
};

export const stats = [
  { label: "Projects Delivered", value: "200+" },
  { label: "Years of Tech Experience", value: "19+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Products & Platforms Built", value: "10+" },
];

export const paths = [
  {
    title: "Consulting & Growth Systems",
    body: "Strategic advisory for scaling digital products and marketing systems.",
    href: "/consulting",
    theme: "blue",
    icon: "rocket",
  },
  {
    title: "Products I'm Building",
    body: "Explore the digital products and platforms currently in development.",
    href: "/portfolio",
    theme: "purple",
    icon: "code",
  },
  {
    title: "Writing & Ideas",
    body: "Deep dives on product strategy, growth, and technology leadership.",
    href: "/writing",
    theme: "amber",
    icon: "pen",
  },
  {
    title: "Speaking & Media",
    body: "Conference talks, workshops, and public speaking engagements.",
    href: "/speaking",
    theme: "green",
    icon: "mic",
  },
];

export const stackColumns = [
  {
    title: "THINKING",
    theme: "blue",
    items: [
      "Product Strategy",
      "User Psychology",
      "Market Positioning",
      "Growth Frameworks",
    ],
  },
  {
    title: "BUILDING",
    theme: "purple",
    items: ["Web Applications", "Mobile Apps", "Platform Systems", "Integrations"],
  },
  {
    title: "SCALING",
    theme: "amber",
    items: [
      "SEO Architecture",
      "Advertising Systems",
      "Marketing Automation",
      "Analytics & Metrics",
    ],
  },
];

export const consultingServices = [
  {
    title: "Product Strategy",
    body: "Roadmaps, research, and positioning for products that ship with clarity.",
  },
  {
    title: "Growth Architecture",
    body: "Acquisition, activation, and retention systems that compound results.",
  },
  {
    title: "Founder Operations",
    body: "Operating cadences and metrics that keep teams aligned and fast.",
  },
];

export const consultingEngagements = [
  {
    title: "Fractional Head of Product",
    body: "Embedded leadership across product, engineering, and growth teams.",
  },
  {
    title: "Growth Sprint",
    body: "4-6 week sprint to sharpen positioning, funnels, and activation.",
  },
  {
    title: "Founder Advisory",
    body: "Ongoing advisory to keep priorities clear and execution consistent.",
  },
  {
    title: "Product Launch Pod",
    body: "End-to-end launch support from go-to-market to feedback loops.",
  },
];

export const projects: Project[] = [
  {
    slug: "envoysjobs",
    name: "EnvoysJobs",
    summary:
      "A modern job marketplace connecting trusted job seekers with individuals and businesses that need skilled workers fast.",
    category: "Job Board / Service Listing",
    year: "2025",
    role: "Product Designer • Product Manager • Developer • Brand Strategist",
    stack: [
      "React.js",
      "WordPress",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "REST API",
      "Figma",
      "GitHub",
      "Vercel",
    ],
    outcome: [
      "Designed a mobile-first job discovery experience.",
      "Simplified hiring for non-technical users.",
      "Created clear separation between hirers and job seekers.",
      "Improved trust through verified profiles.",
      "Built a scalable foundation for nationwide expansion.",
    ],
    cover: "/images/projects/envoysjobs.jpg",
    overview:
      "EnvoysJobs bridges everyday employers with capable workers through a streamlined, mobile-first marketplace built for speed and clarity.",
    problem:
      "Job seekers struggled to find genuine opportunities while employers found traditional platforms too complex. Informal workers lacked visibility, mobile experiences were weak, and trust signals were missing in local hiring systems.",
    solution:
      "We introduced the Envoy identity for seekers, simplified hiring flows, built clean human-language UI, prioritized mobile performance, and added verification plus skill visibility to make discovery fast and trustworthy.",
    screenshots: ["/images/projects/envoysjobs.jpg"],
    links: {
      live: "https://envoysjobs.com",
      github: "https://github.com/techyabraham/envoysjobs",
    },
    cta: {
      label: "View Project",
      href: "/portfolio/envoysjobs",
    },
  },
  {
    slug: "genius-quest-hub",
    name: "Genius Quest Hub",
    summary:
      "An intelligent career discovery and skills-assessment platform that maps strengths to real-world paths.",
    category: "EdTech / Travel",
    year: "2025",
    role: "Product Manager • Developer • UX Strategist • Assessment Designer • Frontend Developer",
    stack: [
      "React.js",
      "WordPress",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "REST API",
      "Figma",
      "GitHub",
      "Vercel",
    ],
    outcome: [
      "Built an interactive career discovery system.",
      "Designed structured personality and skills assessments.",
      "Improved clarity for users unsure of career direction.",
      "Created scalable assessment logic and result mapping.",
      "Delivered clean, readable result interpretation pages.",
    ],
    cover: "/images/projects/genius-quest-hub.jpg",
    overview:
      "Genius Quest Hub helps students, career switchers, and professionals gain clarity through assessments, learning guidance, and curated discovery paths.",
    problem:
      "People often choose careers without self-understanding. Guidance is generic, learning options overwhelm users, and many do not know what skill to learn next.",
    solution:
      "We built structured self-discovery assessments, mapped traits to careers, presented results in clear language, and recommended skill tracks that move users from confusion to clarity.",
    screenshots: ["/images/projects/genius-quest-hub.jpg"],
    links: {
      live: "https://geniusquesthub.com",
      github: "https://github.com/techyabraham/genius-quest-hub",
    },
    cta: {
      label: "View Project",
      href: "https://geniusquesthub.com",
    },
  },
  {
    slug: "skillsair",
    name: "SkillsAir",
    summary:
      "A modern digital learning platform that helps people build in-demand skills through structured, practical courses.",
    category: "EdTech",
    year: "2022",
    role: "Product Manager • Learning Experience Designer • Developer • Brand Strategist",
    stack: [
      "PHP",
      "MySQL",
      "WordPress",
      "Tutor LMS",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Elementor",
      "Figma",
      "Paystack",
      "cPanel Hosting",
    ],
    outcome: [
      "Built a structured skills-learning ecosystem.",
      "Designed beginner-friendly learning flows.",
      "Simplified complex skills into practical lessons.",
      "Enabled course monetization and certification.",
      "Created scalable learning paths for multiple careers.",
    ],
    cover: "/images/projects/skillsair.jpg",
    overview:
      "SkillsAir helps learners move from confusion to competence with guided, income-relevant courses and clear progression paths.",
    problem:
      "Learners struggle to choose the right skill, courses are often too theoretical, and platforms lack clear progression paths and practical certification.",
    solution:
      "We delivered structured learning paths, a personality assessment quiz to match learners to courses, practical project-based lessons, and certificates that reflect real competence.",
    screenshots: ["/images/projects/skillsair.jpg"],
    links: {
      live: "https://skillsair.com",
    },
    cta: {
      label: "Start Learning",
      href: "https://skillsair.com",
    },
  },
  {
    slug: "roadworthy",
    name: "RoadWorthy",
    summary:
      "A predictive fleet health platform that keeps logistics teams ahead of breakdowns.",
    category: "Mobility SaaS",
    year: "2024",
    role: "Product & Engineering Lead",
    stack: ["Next.js", "Node.js", "Postgres", "Prisma", "Stripe"],
    outcome: [
      "30% drop in emergency repair costs across pilot fleets.",
      "3x faster maintenance scheduling cycles.",
      "Launched in 5 cities within 90 days.",
    ],
    cover: "/images/projects/roadworthy.svg",
    overview:
      "RoadWorthy unifies vehicle diagnostics, driver insights, and finance ops into one fleet command center.",
    problem:
      "Fleet managers were juggling spreadsheets, inconsistent vendor data, and reactive maintenance workflows.",
    solution:
      "We built a real-time diagnostics hub with automated alerts, vendor matching, and cost controls.",
    screenshots: [
      "/images/projects/roadworthy-1.svg",
      "/images/projects/roadworthy-2.svg",
    ],
    links: {
      live: "/portfolio/roadworthy",
      github: "https://github.com/",
    },
    cta: {
      label: "Request a demo",
      href: "/contact",
    },
  },
  {
    slug: "lifeline",
    name: "LifeLine",
    summary:
      "A care navigation product that connects families to vetted health providers.",
    category: "HealthTech",
    year: "2023",
    role: "Founder & Product Architect",
    stack: ["Next.js", "TypeScript", "Supabase", "Algolia"],
    outcome: [
      "Reduced search time for care by 60%.",
      "Curated 1,200+ provider profiles.",
      "Boosted conversion to paid plans by 22%.",
    ],
    cover: "/images/projects/lifeline.svg",
    overview:
      "LifeLine blends trusted medical data with concierge workflows to guide families to care.",
    problem:
      "Families were stuck between fragmented directories and unreliable reviews.",
    solution:
      "We built a guided marketplace with verified data, personalized paths, and live support.",
    screenshots: [
      "/images/projects/lifeline-1.svg",
      "/images/projects/lifeline-2.svg",
    ],
    links: {
      live: "/portfolio/lifeline",
      github: "https://github.com/",
    },
    cta: {
      label: "Partner with LifeLine",
      href: "/contact",
    },
  },
  {
    slug: "autside",
    name: "Autside",
    summary:
      "A commerce platform for independent auto dealers to scale digital sales.",
    category: "Commerce",
    year: "2022",
    role: "Growth & Product Lead",
    stack: ["Next.js", "Node.js", "Redis", "Paystack"],
    outcome: [
      "Enabled 4x faster inventory turnover.",
      "Unified payments for 300+ dealers.",
      "Expanded to three new regions.",
    ],
    cover: "/images/projects/autside.svg",
    overview:
      "Autside gives dealers a modern storefront, CRM, and financing pipeline in one suite.",
    problem:
      "Dealers lacked visibility, digital demand capture, and scalable finance tooling.",
    solution:
      "We delivered a unified platform with AI-backed listings, payments, and reporting.",
    screenshots: [
      "/images/projects/autside-1.svg",
      "/images/projects/autside-2.svg",
    ],
    links: {
      live: "/portfolio/autside",
      github: "https://github.com/",
    },
    cta: {
      label: "See the platform",
      href: "/contact",
    },
  },
];

export const writings: Writing[] = [
  {
    title: "The Founder Operating System",
    summary:
      "How senior builders design systems that scale products, teams, and revenue.",
    date: "Jan 2026",
    readTime: "8 min read",
    href: "/writing",
  },
  {
    title: "Positioning the Product, Not the Person",
    summary:
      "A playbook for turning complex offerings into magnetic narratives.",
    date: "Dec 2025",
    readTime: "6 min read",
    href: "/writing",
  },
  {
    title: "The Calm Growth Stack",
    summary:
      "A practical system for growth without burning out the team.",
    date: "Nov 2025",
    readTime: "7 min read",
    href: "/writing",
  },
];

export const featuredWriting = {
  title: "Building Products That Scale: Lessons from 19 Years in Tech",
  summary:
    "A deep dive into the frameworks and mental models that separate products that grow from those that plateau.",
  date: "January 15, 2026",
  readTime: "12 min read",
  category: "Product Strategy",
  href: "/writing",
};

export const recentWritings = [
  {
    title: "The Marketing Systems Framework: How to Build Growth That Compounds",
    summary:
      "Why most marketing efforts fail and how to design systems that generate predictable growth.",
    date: "January 8, 2026",
    readTime: "8 min read",
    category: "Growth",
    href: "/writing",
  },
  {
    title: "From Idea to MVP: A Practical Guide for Technical Founders",
    summary:
      "The exact process used to validate and ship products in weeks, not months.",
    date: "December 20, 2025",
    readTime: "10 min read",
    category: "Product Development",
    href: "/writing",
  },
  {
    title: "User Psychology: Understanding the Invisible Forces That Drive Behavior",
    summary:
      "How to design products that align with human psychology and behavioral patterns.",
    date: "December 12, 2025",
    readTime: "15 min read",
    category: "UX & Psychology",
    href: "/writing",
  },
];

export const books: Book[] = [
  {
    title: "Founder Throughput",
    summary:
      "A field guide to building products, shipping faster, and leading with clarity.",
    status: "In progress",
    cover: "/images/books/founder-throughput.svg",
  },
  {
    title: "Growth for Builders",
    summary: "A tactical playbook for sustainable demand and product momentum.",
    status: "Drafting",
    cover: "/images/books/growth-for-builders.svg",
  },
];

export const publications = [
  {
    title: "The Product Playbook",
    subtitle: "Systems for Building Digital Products That Scale",
    summary:
      "A comprehensive guide to product development, from ideation to market fit.",
    theme: "amber",
    href: "/books",
  },
  {
    title: "Growth Architecture",
    subtitle: "Engineering Marketing Systems That Compound",
    summary:
      "How to build sustainable growth engines for digital businesses.",
    theme: "blue",
    href: "/books",
  },
  {
    title: "The Technical Leader",
    subtitle: "Bridging Code, Strategy, and Impact",
    summary:
      "Leadership lessons for developers transitioning into strategic roles.",
    theme: "purple",
    href: "/books",
  },
];

export const talks: Talk[] = [
  {
    title: "Designing Growth Systems",
    event: "Lagos Product Summit",
    year: "2024",
    location: "Lagos, NG",
    summary:
      "Frameworks for repeatable growth across product, marketing, and revenue.",
  },
  {
    title: "Shipping with Authority",
    event: "West Africa DevCon",
    year: "2023",
    location: "Accra, GH",
    summary:
      "How senior teams align product, engineering, and brand in one operating cadence.",
  },
  {
    title: "The Calm Tech Lead",
    event: "Product House",
    year: "2022",
    location: "Nairobi, KE",
    summary: "Lessons from leading multi-product portfolios without chaos.",
  },
];

export const speakingTopics = [
  "Product Strategy & Development",
  "Growth Marketing Systems",
  "Technical Leadership",
  "Building in Emerging Markets",
  "Entrepreneurship & Startups",
  "Digital Transformation",
];

export const speakingStats = [
  { value: "25+", label: "Talks" },
  { value: "10k+", label: "Audience" },
  { value: "15", label: "Countries" },
];

export const speakingAvailability = [
  "Conference Keynotes",
  "Workshops & Masterclasses",
  "Podcast Interviews",
];

export const recentTalks = [
  {
    title: "Building Products in Emerging Markets",
    event: "Tech Summit Lagos 2025",
    tags: ["Product Strategy", "Market Adaptation", "Growth"],
  },
  {
    title: "From Developer to Product Leader",
    event: "DevFest Africa 2024",
    tags: ["Leadership", "Career Growth", "Technical Strategy"],
  },
  {
    title: "The Future of Digital Products in Africa",
    event: "Innovation Week 2024",
    tags: ["Innovation", "Market Trends", "Technology"],
  },
];

export const labProjects = [
  {
    name: "QuantumFlow",
    description: "AI-powered workflow automation platform for modern teams.",
    status: "Live",
    phase: "Scaling",
    progress: 100,
    theme: "green",
  },
  {
    name: "MentorMatch",
    description: "Connecting professionals with expert mentors in their field.",
    status: "MVP",
    phase: "Testing",
    progress: 75,
    theme: "blue",
  },
  {
    name: "ContentEngine",
    description: "Smart content management and distribution system for creators.",
    status: "Concept",
    phase: "Research",
    progress: 25,
    theme: "amber",
  },
];

export const contactMethods = [
  {
    title: "Consulting",
    description: "Growth and digital systems for serious businesses.",
    cta: "Book a Call",
    theme: "blue",
  },
  {
    title: "Collaboration & Partnerships",
    description: "For founders and product teams building something ambitious.",
    cta: "Let's Talk",
    theme: "purple",
  },
];

export const contactDirect = {
  email: "hello@abrahamakomolafe.com",
  whatsapp: "WhatsApp",
  responseTime: "Average response time: 24 hours",
};

export const microAbout = {
  title: "A quiet note",
  body:
    "Nearly two decades of building products and growth systems has taught me that clarity beats complexity, especially when real people are involved. I care most about the decisions behind the work, and the systems that make those decisions repeatable.",
};

export const whyBuild = {
  introTitle: "Why I Build",
  introBody:
    "I build to remove friction, create momentum, and help teams move with confidence. The best work feels calm, decisive, and grounded in reality.",
  beliefs: [
    "I believe technology should reduce friction.",
    "I believe growth without clarity creates noise.",
    "I build for people, not pitch decks.",
    "I focus on systems that work in real environments.",
    "I ship what teams can sustain.",
  ],
};

export const aboutPage = {
  intro: {
    title: "The Story Behind the Work",
    body:
      "My work lives at the intersection of product, growth, and systems. I aim for outcomes that feel durable, not just impressive. This page is a window into how I think and why the work matters.",
  },
  howIThink: {
    title: "How I Think",
    body:
      "I approach products as living systems. Growth is a feedback loop, not a funnel. Teams perform best when goals, constraints, and priorities are explicit. The human layer is always part of the architecture.",
  },
  learned: {
    title: "What I've Learned",
    items: [
      "Simple systems scale faster than clever ones.",
      "Narrative clarity is a growth multiplier.",
      "Execution is a design problem, not just a delivery problem.",
      "Great products earn trust through consistency.",
    ],
  },
  focus: {
    title: "What I'm Focused On Now",
    items: [
      "Building multi-product platforms with resilient foundations.",
      "Writing frameworks that help teams make better bets.",
      "Advising founders on product strategy and growth systems.",
      "Speaking on building in real-world environments.",
      "Long-term: designing calm, high-leverage operating systems.",
    ],
  },
  values: {
    title: "Personal Values",
    items: [
      "Clarity over noise.",
      "Craft over spectacle.",
      "Systems over shortcuts.",
      "People over posturing.",
    ],
  },
};
