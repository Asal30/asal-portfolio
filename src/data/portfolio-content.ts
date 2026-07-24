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
      title: "Software Engineering Intern",
      organization: "Embla Software Innovation",
      timeframe: "Jun 2024 – Dec 2025",
      description:
        "Developed enterprise SaaS features across Angular, ASP.NET Core and SQL Server while leading the intern team's Agile workflow through Jira management, sprint coordination and feature delivery.",
    },
    {
      title: "IT Support Intern",
      organization: "Axiata Digital Labs",
      timeframe: "Jun 2023 – Aug 2023",
      description:
        "Provided IT infrastructure, network and end-user support while maintaining operational continuity across the organization.",
    },
    {
      title: "B.Eng. (Hons) Software Engineering",
      organization: "Informatics Institute of Technology",
      timeframe: "2022 – 2026",
      description:
        "Completed Software Engineering degree with a strong focus on full-stack development, AI, software architecture and concurrent programming.",
    },
  ],

  leadershipResponsibilities: [
    {
      responsibility: "Created and maintained Jira stories",
    },
    {
      responsibility:
        "Estimated story points and reviewed them with the Product Owner",
    },
    {
      responsibility:
        "Coordinated task selection among interns through team discussions",
    },
    {
      responsibility: "Tracked progress and time logging",
    },
    {
      responsibility: "Helped coordinate the intern team",
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