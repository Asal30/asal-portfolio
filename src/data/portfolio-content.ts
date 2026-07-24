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
      category: "Enterprise SaaS",
      summary:
        "Delivered multiple production features including report generation, greeting notifications and Global Search while optimizing backend performance across six services.",
      role: "Full Stack Software Engineering Intern",
      technologies: [
        "Angular",
        "ASP.NET Core",
        "C#",
        "TypeScript",
        "SQL Server",
        "REST API",
      ],
      outcome:
        "Successfully released multiple production features for Scandinavian customers while improving application performance.",
      href: "/projects/embla",
    },
    {
      title: "CataLyst",
      category: "Artificial Intelligence",
      summary:
        "Explainable AI platform for cataract assessment using deep learning and Grad-CAM visual explanations.",
      role: "Research Developer",
      technologies: [
        "Python",
        "PyTorch",
        "React",
        "Flask",
        "Grad-CAM",
      ],
      outcome:
        "Achieved strong prediction accuracy while providing explainable AI visualizations for medical diagnosis.",
      href: "/projects/catalyst",
    },
    {
      title: "Morpho",
      category: "Entrepreneurship",
      summary:
        "Co-founded a premium clothing brand inspired by childhood memories, combining branding, operations and product development.",
      role: "Co-Founder",
      technologies: [
        "Brand Strategy",
        "Operations",
        "Marketing",
        "Inventory Management",
      ],
      outcome:
        "Built an emerging apparel brand while managing operations, product launches and inventory.",
      href: "/projects/morpho",
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
