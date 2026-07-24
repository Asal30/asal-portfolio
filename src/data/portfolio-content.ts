import type { PortfolioContent } from "@/src/types/portfolio";

export const portfolioContent: PortfolioContent = {
  personal: {
    name: "Asal Samarasinghe",
    location: "Colombo, Sri Lanka",
    professionalAreas: [
      "Software Engineering",
      "Product Thinking",
      "Team Coordination",
    ],
    shortBio:
      "Software Engineering undergraduate with industry experience building enterprise SaaS applications. Passionate about creating meaningful digital products, leading teams, and combining technology with creativity.",
  },

  hero: {
    eyebrow: "Software Engineer • Product Thinker • Team Leader",
    heading: "Asal Samarasinghe",
    supportingText:
      "Building thoughtful software experiences through engineering, leadership, and product thinking.",
    primaryActionLabel: "View Projects",
    primaryActionHref: "/projects",
  },

  professionalSummary: {
    headline: "Software Engineer with a passion for building products and leading teams.",
    body:
      "I'm a Software Engineering undergraduate with 21 months of industry experience developing enterprise SaaS applications at Embla Software Innovation. Alongside software development, I led the intern team's Agile workflow by managing our Jira board, creating user stories, estimating story points with the Product Owner, coordinating sprint tasks, and tracking progress throughout development. Outside engineering, I enjoy building products, leading communities, performing music, and growing my clothing brand, Morpho.",
  },

  journeyMilestones: [
    {
      title: "Academic foundation",
      period: "2022 - 2026",
      context: "Informatics Institute of Technology",
      role: "B.Eng. (Hons) Software Engineering",
      shortDescription:
        "Built a foundation in software engineering through full-stack development, AI, software architecture and concurrent programming.",
      keyResponsibilities: ["[CONTENT REQUIRED]"],
      technologies: [
        "Full-stack development",
        "AI",
        "Software architecture",
        "Concurrent programming",
      ],
    },
    {
      title: "IT Support Intern",
      period: "Jun 2023 - Aug 2023",
      context: "Axiata Digital Labs",
      role: "IT Support Intern",
      shortDescription:
        "Provided IT infrastructure, network and end-user support while maintaining operational continuity across the organization.",
      keyResponsibilities: [
        "Provided IT infrastructure support",
        "Provided network support",
        "Provided end-user support",
      ],
      technologies: ["IT infrastructure", "Network support", "End-user support"],
    },
    {
      title: "Software engineering internship",
      period: "Jun 2024 - Dec 2025",
      context: "Embla Software Innovation",
      role: "Software Engineering Intern",
      shortDescription:
        "Developed enterprise SaaS features across Angular, ASP.NET Core and SQL Server.",
      keyResponsibilities: [
        "Developed enterprise SaaS features",
        "Worked across Angular, ASP.NET Core and SQL Server",
      ],
      technologies: ["Angular", "ASP.NET Core", "SQL Server"],
    },
    {
      title: "Team coordination",
      period: "[CONTENT REQUIRED]",
      context: "Intern team coordination",
      role: "Team Coordinator",
      shortDescription:
        "Helped coordinate the intern team's Agile workflow through Jira management, sprint discussions, progress tracking and time logging.",
      keyResponsibilities: [
        "Created and maintained Jira stories",
        "Estimated story points and reviewed them with the Product Owner",
        "Coordinated task selection among interns through team discussions",
        "Tracked progress and time logging",
        "Helped coordinate the intern team",
      ],
      technologies: ["Jira", "Agile coordination", "Story point estimation"],
    },
    {
      title: "Creative and entrepreneurial work",
      period: "[CONTENT REQUIRED]",
      context: "Music and Morpho clothing brand",
      role: "Creative contributor and entrepreneur",
      shortDescription:
        "Built creative range through music and stage performance while growing Morpho, a clothing brand shaped around the slogan Wear Your Memories.",
      keyResponsibilities: [
        "Organized rehearsals and performances",
        "Managed Morpho product planning",
        "Managed inventory and operations",
      ],
      technologies: [
        "Music performance",
        "Brand strategy",
        "Operations",
        "Inventory management",
      ],
      image: {
        src: "/images/morpho/morpho-product-blue-01.webp",
        alt: "Morpho clothing product photographed against a blue backdrop",
      },
    },
    {
      title: "Current career direction",
      period: "[CONTENT REQUIRED]",
      context: "Software engineering, product thinking and team coordination",
      role: "Software Engineer · Product Thinker · Team Coordinator",
      shortDescription:
        "Continuing toward opportunities that combine software engineering, product thinking and team coordination.",
      keyResponsibilities: ["[CONTENT REQUIRED]"],
      technologies: ["[CONTENT REQUIRED]"],
    },
  ],

  leadershipResponsibilities: [
    {
      title: "Story clarity",
      responsibility: "Created and maintained Jira stories.",
      status: "Backlog",
    },
    {
      title: "Estimation",
      responsibility: "Estimated story points.",
      status: "Planned",
    },
    {
      title: "Product alignment",
      responsibility: "Reviewed estimates with the Product Owner.",
      status: "Planned",
    },
    {
      title: "Task ownership",
      responsibility:
        "Coordinated task selection among interns through team discussions.",
      status: "In progress",
    },
    {
      title: "Progress tracking",
      responsibility: "Tracked task progress.",
      status: "In progress",
    },
    {
      title: "Time visibility",
      responsibility: "Tracked time logging.",
      status: "Review",
    },
    {
      title: "Team coordination",
      responsibility: "Helped coordinate the intern team.",
      status: "Review",
    },
    {
      title: "Delivery balance",
      responsibility:
        "Balanced technical implementation with communication and organization.",
      status: "Completed",
    },
  ],

  leadershipWorkflow: [
    {
      title: "Understand",
      description: "Understand the requirement before shaping the work.",
      status: "Backlog",
      responsibilities: ["Story clarity"],
    },
    {
      title: "Translate",
      description: "Convert the requirement into clear Jira stories.",
      status: "Backlog",
      responsibilities: ["Story clarity"],
    },
    {
      title: "Estimate",
      description: "Discuss scope and story point estimates.",
      status: "Planned",
      responsibilities: ["Estimation", "Product alignment"],
    },
    {
      title: "Coordinate",
      description: "Coordinate task ownership through intern team discussions.",
      status: "In progress",
      responsibilities: ["Task ownership", "Team coordination"],
    },
    {
      title: "Track",
      description: "Track progress and time logging as work moves forward.",
      status: "In progress",
      responsibilities: ["Progress tracking", "Time visibility"],
    },
    {
      title: "Unblock",
      description: "Identify blockers through communication and visibility.",
      status: "Review",
      responsibilities: ["Team coordination"],
    },
    {
      title: "Support",
      description: "Support delivery through technical work and organization.",
      status: "Completed",
      responsibilities: ["Delivery balance"],
    },
  ],

  featuredProjects: [
    {
      title: "Embla Family Treasure",
      positioning:
        "Enterprise SaaS feature work shaped through implementation, coordination and product-facing delivery habits.",
      projectType: "Enterprise SaaS",
      problem:
        "Build and improve product features for a Norwegian family history platform.",
      context: "Embla Software Innovation",
      role: "Full Stack Software Engineering Intern",
      responsibilities: [
        "Developed report generation features",
        "Developed greeting notification features",
        "Developed Global Search features",
        "Worked across backend services",
      ],
      technicalDecisions: [
        "Used Angular for frontend implementation",
        "Used ASP.NET Core and C# for backend implementation",
        "Used SQL Server for data persistence",
        "Worked with REST APIs",
      ],
      productDecisions: [
        "Coordinated Jira stories and implementation scope",
        "Reviewed story point estimates with the Product Owner",
        "[CONTENT REQUIRED]",
      ],
      technologies: [
        "Angular",
        "ASP.NET Core",
        "C#",
        "TypeScript",
        "SQL Server",
        "REST API",
      ],
      outcome:
        "Released multiple product features while working across frontend, backend and database layers.",
      lessonsLearned:
        "Learned how implementation quality, estimation, product communication and delivery visibility connect inside a professional software team.",
      coverImage: {
        src: "/images/projects/embla-project-preview.webp.png",
        alt: "Preview image for Embla Family Treasure project work",
      },
      galleryImages: [],
      slug: "embla-family-treasure",
      featured: true,
    },
    {
      title: "CataLyst",
      positioning:
        "An explainable AI project focused on making model output easier to interpret.",
      projectType: "Artificial Intelligence",
      problem:
        "Support cataract assessment with prediction output and visual explanation.",
      context: "[CONTENT REQUIRED]",
      role: "Research Developer",
      responsibilities: [
        "Built cataract assessment functionality",
        "Implemented Grad-CAM visual explanations",
        "[CONTENT REQUIRED]",
      ],
      technicalDecisions: [
        "Used deep learning for cataract assessment",
        "Used Grad-CAM for explainability",
        "[CONTENT REQUIRED]",
      ],
      productDecisions: [
        "Presented visual explanations alongside model output",
        "[CONTENT REQUIRED]",
      ],
      technologies: ["Python", "PyTorch", "React", "Flask", "Grad-CAM"],
      outcome: "[CONTENT REQUIRED]",
      lessonsLearned: "[CONTENT REQUIRED]",
      galleryImages: [],
      slug: "catalyst",
      featured: true,
    },
    {
      title: "Morpho",
      positioning:
        "A clothing brand shaped around memory, product planning and operations.",
      projectType: "Entrepreneurship",
      problem:
        "Create and operate a premium clothing brand inspired by childhood memories.",
      context: "Morpho clothing brand",
      role: "Co-Founder",
      responsibilities: [
        "Managed product planning",
        "Managed inventory",
        "Managed operations",
        "Supported brand growth",
      ],
      technicalDecisions: ["[CONTENT REQUIRED]"],
      productDecisions: [
        "Built the brand around the slogan Wear Your Memories",
        "Connected product direction to childhood-memory inspiration",
      ],
      technologies: [
        "Brand Strategy",
        "Operations",
        "Marketing",
        "Inventory Management",
      ],
      outcome: "[CONTENT REQUIRED]",
      lessonsLearned: "[CONTENT REQUIRED]",
      coverImage: {
        src: "/images/morpho/morpho-product-green-01.webp",
        alt: "Morpho clothing product photographed against a green backdrop",
      },
      galleryImages: [
        {
          src: "/images/morpho/morpho-product-blue-01.webp",
          alt: "Morpho clothing product photographed against a blue backdrop",
        },
      ],
      liveUrl: "https://www.instagram.com/morpho_clothing.sl/",
      slug: "morpho",
      featured: true,
    },
    {
      title: "Concurrent exam-submission system",
      positioning: "[CONTENT REQUIRED]",
      projectType: "Concurrency",
      problem: "[CONTENT REQUIRED]",
      context: "[CONTENT REQUIRED]",
      role: "[CONTENT REQUIRED]",
      responsibilities: ["[CONTENT REQUIRED]"],
      technicalDecisions: ["[CONTENT REQUIRED]"],
      productDecisions: ["[CONTENT REQUIRED]"],
      technologies: ["[CONTENT REQUIRED]"],
      outcome: "[CONTENT REQUIRED]",
      lessonsLearned: "[CONTENT REQUIRED]",
      galleryImages: [],
      slug: "concurrent-exam-submission-system",
      featured: false,
    },
    {
      title: "Hospital patient-management simulation",
      positioning: "[CONTENT REQUIRED]",
      projectType: "Simulation",
      problem: "[CONTENT REQUIRED]",
      context: "[CONTENT REQUIRED]",
      role: "[CONTENT REQUIRED]",
      responsibilities: ["[CONTENT REQUIRED]"],
      technicalDecisions: ["[CONTENT REQUIRED]"],
      productDecisions: ["[CONTENT REQUIRED]"],
      technologies: ["[CONTENT REQUIRED]"],
      outcome: "[CONTENT REQUIRED]",
      lessonsLearned: "[CONTENT REQUIRED]",
      galleryImages: [],
      slug: "hospital-patient-management-simulation",
      featured: false,
    },
    {
      title: "Printer-management concurrency system",
      positioning: "[CONTENT REQUIRED]",
      projectType: "Concurrency",
      problem: "[CONTENT REQUIRED]",
      context: "[CONTENT REQUIRED]",
      role: "[CONTENT REQUIRED]",
      responsibilities: ["[CONTENT REQUIRED]"],
      technicalDecisions: ["[CONTENT REQUIRED]"],
      productDecisions: ["[CONTENT REQUIRED]"],
      technologies: ["[CONTENT REQUIRED]"],
      outcome: "[CONTENT REQUIRED]",
      lessonsLearned: "[CONTENT REQUIRED]",
      galleryImages: [],
      slug: "printer-management-concurrency-system",
      featured: false,
    },
    {
      title: "Morpho order and inventory automation",
      positioning: "[CONTENT REQUIRED]",
      projectType: "Automation",
      problem: "[CONTENT REQUIRED]",
      context: "Morpho clothing brand",
      role: "[CONTENT REQUIRED]",
      responsibilities: ["[CONTENT REQUIRED]"],
      technicalDecisions: ["[CONTENT REQUIRED]"],
      productDecisions: ["[CONTENT REQUIRED]"],
      technologies: ["[CONTENT REQUIRED]"],
      outcome: "[CONTENT REQUIRED]",
      lessonsLearned: "[CONTENT REQUIRED]",
      galleryImages: [],
      slug: "morpho-order-inventory-automation",
      featured: false,
    },
    {
      title: "Portfolio experience",
      positioning:
        "A personal portfolio built to present engineering, product thinking, coordination and creative work through a cinematic editorial interface.",
      projectType: "Personal portfolio",
      problem:
        "Create a portfolio that feels like a case-study experience rather than a generic resume page.",
      context: "Personal portfolio",
      role: "Designer and Developer",
      responsibilities: [
        "Designed the content architecture",
        "Built the visual foundation",
        "Implemented responsive portfolio sections",
      ],
      technicalDecisions: [
        "Used Next.js App Router",
        "Used TypeScript for typed content",
        "Used Tailwind CSS for centralized design tokens",
        "Used Motion for lightweight reveals",
      ],
      productDecisions: [
        "Centered evidence of engineering and coordination",
        "Structured the homepage as scroll-based storytelling",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
      outcome: "[CONTENT REQUIRED]",
      lessonsLearned: "[CONTENT REQUIRED]",
      galleryImages: [],
      slug: "portfolio-experience",
      featured: true,
    },
  ],

  uxPrinciples: [
    {
      title: "Design with Purpose",
      description:
        "Every interface should solve a real problem while remaining intuitive and visually balanced.",
    },
    {
      title: "Engineering Meets Experience",
      description:
        "Great software is not only functional but also enjoyable to use.",
    },
    {
      title: "Details Matter",
      description:
        "Small improvements in interaction, performance and accessibility create memorable experiences.",
    },
  ],

  technicalCapabilityGroups: [
    {
      title: "Frontend",
      capabilities: [
        "Angular",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "SCSS",
      ],
    },
    {
      title: "Backend",
      capabilities: [
        "ASP.NET Core",
        "Node.js",
        "Express.js",
        "REST APIs",
        "Flask",
      ],
    },
    {
      title: "Databases",
      capabilities: [
        "SQL Server",
        "MySQL",
        "MongoDB",
        "SQLite",
      ],
    },
    {
      title: "AI & Machine Learning",
      capabilities: [
        "PyTorch",
        "TensorFlow",
        "OpenCV",
        "Grad-CAM",
      ],
    },
    {
      title: "Tools",
      capabilities: [
        "Git",
        "GitHub",
        "Bitbucket",
        "Jira",
        "Docker",
        "Azure",
        "Postman",
      ],
    },
  ],

  musicJourney: {
    category: "Music and stage performance",
    summary:
      "Founder and manager of Thraive Band SL, performing as a drummer, percussionist and violinist while organizing rehearsals, performances and team coordination.",
    highlights: [
      "Founder of Thraive Band SL",
      "Professional drummer",
      "Percussionist",
      "Violinist",
      "Stage performer",
    ],
  },

  morphoBrand: {
    category: "Morpho clothing brand",
    name: "Morpho",
    slogan: "Wear Your Memories",
    summary:
      "Co-founded Morpho, a premium clothing brand inspired by childhood memories. Responsible for product planning, inventory management, operations and brand growth.",
  },

  socialLinks: [
    {
      label: "LinkedIn",
      href: "YOUR_LINKEDIN_URL",
    },
    {
      label: "GitHub",
      href: "YOUR_GITHUB_URL",
    },
    {
      label: "Morpho",
      href: "https://www.instagram.com/morpho_clothing.sl/",
    },
  ],

  contact: {
    email: "asalsamarasinghe30@gmail.com",
    phone: "+94 77 642 2399",
    location: "Colombo, Sri Lanka",
    availability: "Open to Software Engineering, Product and Leadership opportunities.",
  },
};
