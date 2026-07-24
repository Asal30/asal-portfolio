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
      timeframe: "Jun 2024 - Dec 2025",
      problem:
        "Build and improve product features for a Norwegian family history platform.",
      context: "Embla Software Innovation",
      constraints: ["[CONTENT REQUIRED]"],
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
      implementationDetails: [
        "Implemented report generation features",
        "Implemented greeting notification features",
        "Implemented Global Search features",
        "Worked across frontend, backend and database layers",
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
      challenges: ["[CONTENT REQUIRED]"],
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
      timeframe: "[CONTENT REQUIRED]",
      problem:
        "Support cataract assessment with prediction output and visual explanation.",
      context: "[CONTENT REQUIRED]",
      constraints: ["[CONTENT REQUIRED]"],
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
      implementationDetails: ["[CONTENT REQUIRED]"],
      technologies: ["Python", "PyTorch", "React", "Flask", "Grad-CAM"],
      outcome: "[CONTENT REQUIRED]",
      challenges: ["[CONTENT REQUIRED]"],
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
      timeframe: "[CONTENT REQUIRED]",
      problem:
        "Create and operate a premium clothing brand inspired by childhood memories.",
      context: "Morpho clothing brand",
      constraints: ["[CONTENT REQUIRED]"],
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
      implementationDetails: ["[CONTENT REQUIRED]"],
      technologies: [
        "Brand Strategy",
        "Operations",
        "Marketing",
        "Inventory Management",
      ],
      outcome: "[CONTENT REQUIRED]",
      challenges: ["[CONTENT REQUIRED]"],
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
      timeframe: "[CONTENT REQUIRED]",
      problem: "[CONTENT REQUIRED]",
      context: "[CONTENT REQUIRED]",
      constraints: ["[CONTENT REQUIRED]"],
      role: "[CONTENT REQUIRED]",
      responsibilities: ["[CONTENT REQUIRED]"],
      technicalDecisions: ["[CONTENT REQUIRED]"],
      productDecisions: ["[CONTENT REQUIRED]"],
      implementationDetails: ["[CONTENT REQUIRED]"],
      technologies: ["[CONTENT REQUIRED]"],
      outcome: "[CONTENT REQUIRED]",
      challenges: ["[CONTENT REQUIRED]"],
      lessonsLearned: "[CONTENT REQUIRED]",
      galleryImages: [],
      slug: "concurrent-exam-submission-system",
      featured: false,
    },
    {
      title: "Hospital patient-management simulation",
      positioning: "[CONTENT REQUIRED]",
      projectType: "Simulation",
      timeframe: "[CONTENT REQUIRED]",
      problem: "[CONTENT REQUIRED]",
      context: "[CONTENT REQUIRED]",
      constraints: ["[CONTENT REQUIRED]"],
      role: "[CONTENT REQUIRED]",
      responsibilities: ["[CONTENT REQUIRED]"],
      technicalDecisions: ["[CONTENT REQUIRED]"],
      productDecisions: ["[CONTENT REQUIRED]"],
      implementationDetails: ["[CONTENT REQUIRED]"],
      technologies: ["[CONTENT REQUIRED]"],
      outcome: "[CONTENT REQUIRED]",
      challenges: ["[CONTENT REQUIRED]"],
      lessonsLearned: "[CONTENT REQUIRED]",
      galleryImages: [],
      slug: "hospital-patient-management-simulation",
      featured: false,
    },
    {
      title: "Printer-management concurrency system",
      positioning: "[CONTENT REQUIRED]",
      projectType: "Concurrency",
      timeframe: "[CONTENT REQUIRED]",
      problem: "[CONTENT REQUIRED]",
      context: "[CONTENT REQUIRED]",
      constraints: ["[CONTENT REQUIRED]"],
      role: "[CONTENT REQUIRED]",
      responsibilities: ["[CONTENT REQUIRED]"],
      technicalDecisions: ["[CONTENT REQUIRED]"],
      productDecisions: ["[CONTENT REQUIRED]"],
      implementationDetails: ["[CONTENT REQUIRED]"],
      technologies: ["[CONTENT REQUIRED]"],
      outcome: "[CONTENT REQUIRED]",
      challenges: ["[CONTENT REQUIRED]"],
      lessonsLearned: "[CONTENT REQUIRED]",
      galleryImages: [],
      slug: "printer-management-concurrency-system",
      featured: false,
    },
    {
      title: "Morpho order and inventory automation",
      positioning: "[CONTENT REQUIRED]",
      projectType: "Automation",
      timeframe: "[CONTENT REQUIRED]",
      problem: "[CONTENT REQUIRED]",
      context: "Morpho clothing brand",
      constraints: ["[CONTENT REQUIRED]"],
      role: "[CONTENT REQUIRED]",
      responsibilities: ["[CONTENT REQUIRED]"],
      technicalDecisions: ["[CONTENT REQUIRED]"],
      productDecisions: ["[CONTENT REQUIRED]"],
      implementationDetails: ["[CONTENT REQUIRED]"],
      technologies: ["[CONTENT REQUIRED]"],
      outcome: "[CONTENT REQUIRED]",
      challenges: ["[CONTENT REQUIRED]"],
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
      timeframe: "[CONTENT REQUIRED]",
      problem:
        "Create a portfolio that feels like a case-study experience rather than a generic resume page.",
      context: "Personal portfolio",
      constraints: [
        "Avoid generic portfolio patterns",
        "Keep content grounded in verified information",
        "Respect reduced-motion preferences",
      ],
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
      implementationDetails: [
        "Created centralized typed content",
        "Built reusable section components",
        "Prepared dynamic case-study routing",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
      outcome: "[CONTENT REQUIRED]",
      challenges: ["[CONTENT REQUIRED]"],
      lessonsLearned: "[CONTENT REQUIRED]",
      galleryImages: [],
      slug: "portfolio-experience",
      featured: true,
    },
  ],

  uxPrinciples: [
    {
      title: "Clarity before complexity",
      shortExplanation:
        "Start by making the user's next step obvious, then add detail only where it helps the task.",
      practicalExample: "[CONTENT REQUIRED]",
      visualDemonstration: {
        label: "Generic interface clarity demonstration",
        before: [
          "Crowded layout",
          "Weak action emphasis",
          "Unclear labels",
        ],
        after: [
          "Clear hierarchy",
          "Specific action labels",
          "Improved spacing",
        ],
      },
    },
    {
      title: "Motion with purpose",
      shortExplanation:
        "Use motion to support orientation, feedback and flow instead of decorating every interaction.",
      practicalExample: "[CONTENT REQUIRED]",
    },
    {
      title: "Technology serving people",
      shortExplanation:
        "Choose tools and implementation patterns around the human problem the product needs to solve.",
      practicalExample: "[CONTENT REQUIRED]",
      projectReference: {
        label: "Portfolio experience",
        slug: "portfolio-experience",
      },
    },
  ],

  technicalCapabilityGroups: [
    {
      title: "Build interfaces",
      outcome:
        "Create responsive, typed and accessible product interfaces across modern frontend stacks.",
      capabilities: [
        {
          name: "Angular",
          category: "Build interfaces",
          shortDescription:
            "Build enterprise SaaS interface features with component-based frontend architecture.",
          relatedProjects: [
            {
              label: "Embla Family Treasure",
              slug: "embla-family-treasure",
            },
          ],
          iconName: "PanelsTopLeft",
        },
        {
          name: "React",
          category: "Build interfaces",
          shortDescription:
            "Build interactive interfaces and project experiences with reusable components.",
          relatedProjects: [
            {
              label: "CataLyst",
              slug: "catalyst",
            },
          ],
          iconName: "Component",
        },
        {
          name: "Next.js",
          category: "Build interfaces",
          shortDescription:
            "Structure App Router pages, metadata and reusable portfolio experiences.",
          relatedProjects: [
            {
              label: "Portfolio experience",
              slug: "portfolio-experience",
            },
          ],
          iconName: "Globe",
        },
        {
          name: "TypeScript",
          category: "Build interfaces",
          shortDescription:
            "Use typed content and component props to keep implementation maintainable.",
          relatedProjects: [
            {
              label: "Portfolio experience",
              slug: "portfolio-experience",
            },
          ],
          iconName: "Braces",
        },
        {
          name: "Tailwind CSS",
          category: "Build interfaces",
          shortDescription:
            "Create responsive layouts and centralized visual tokens without percentage-based skill claims.",
          relatedProjects: [
            {
              label: "Portfolio experience",
              slug: "portfolio-experience",
            },
          ],
          iconName: "Palette",
        },
        {
          name: "HTML5",
          category: "Build interfaces",
          shortDescription:
            "Use semantic structure as the foundation for accessible interface implementation.",
          relatedProjects: [],
          iconName: "Code2",
        },
        {
          name: "SCSS",
          category: "Build interfaces",
          shortDescription:
            "Work with stylesheet architecture in frontend codebases where SCSS is part of the stack.",
          relatedProjects: [],
          iconName: "Paintbrush",
        },
      ],
    },
    {
      title: "Build systems",
      outcome:
        "Connect interfaces to backend services, APIs and data persistence layers.",
      capabilities: [
        {
          name: "C#",
          category: "Build systems",
          shortDescription:
            "Contribute to backend implementation in ASP.NET Core service work.",
          relatedProjects: [
            {
              label: "Embla Family Treasure",
              slug: "embla-family-treasure",
            },
          ],
          iconName: "Server",
        },
        {
          name: "ASP.NET Core",
          category: "Build systems",
          shortDescription:
            "Build and maintain backend features for enterprise SaaS applications.",
          relatedProjects: [
            {
              label: "Embla Family Treasure",
              slug: "embla-family-treasure",
            },
          ],
          iconName: "ServerCog",
        },
        {
          name: "REST APIs",
          category: "Build systems",
          shortDescription:
            "Work with API contracts between frontend experiences and backend services.",
          relatedProjects: [
            {
              label: "Embla Family Treasure",
              slug: "embla-family-treasure",
            },
          ],
          iconName: "Cable",
        },
        {
          name: "SQL Server",
          category: "Build systems",
          shortDescription:
            "Use relational data persistence in full-stack application work.",
          relatedProjects: [
            {
              label: "Embla Family Treasure",
              slug: "embla-family-treasure",
            },
          ],
          iconName: "Database",
        },
        {
          name: "Node.js",
          category: "Build systems",
          shortDescription:
            "Build server-side services where the project stack calls for Node.js.",
          relatedProjects: [],
          iconName: "Box",
        },
        {
          name: "Express.js",
          category: "Build systems",
          shortDescription:
            "Create lightweight API services in Node.js application contexts.",
          relatedProjects: [],
          iconName: "Route",
        },
        {
          name: "Flask",
          category: "Build systems",
          shortDescription:
            "Support Python-backed application flows for AI project interfaces.",
          relatedProjects: [
            {
              label: "CataLyst",
              slug: "catalyst",
            },
          ],
          iconName: "FlaskConical",
        },
      ],
    },
    {
      title: "Deliver collaboratively",
      outcome:
        "Move work through shared delivery systems with communication, version control and task visibility.",
      capabilities: [
        {
          name: "Git",
          category: "Deliver collaboratively",
          shortDescription:
            "Use version control as part of collaborative software delivery.",
          relatedProjects: [],
          iconName: "GitBranch",
        },
        {
          name: "GitHub",
          category: "Deliver collaboratively",
          shortDescription:
            "Work with repository-based collaboration and source control workflows.",
          relatedProjects: [],
          iconName: "GitFork",
        },
        {
          name: "Bitbucket",
          category: "Deliver collaboratively",
          shortDescription:
            "Contribute inside repository workflows that use Bitbucket.",
          relatedProjects: [],
          iconName: "GitPullRequest",
        },
        {
          name: "Jira",
          category: "Deliver collaboratively",
          shortDescription:
            "Create stories, coordinate task selection, estimate points and track progress.",
          relatedProjects: [
            {
              label: "Embla Family Treasure",
              slug: "embla-family-treasure",
            },
          ],
          iconName: "ListChecks",
        },
        {
          name: "Agile workflow",
          category: "Deliver collaboratively",
          shortDescription:
            "Support team planning, task ownership discussions and progress visibility.",
          relatedProjects: [
            {
              label: "Embla Family Treasure",
              slug: "embla-family-treasure",
            },
          ],
          iconName: "Workflow",
        },
        {
          name: "Story estimation",
          category: "Deliver collaboratively",
          shortDescription:
            "Estimate story points and review those estimates with the Product Owner.",
          relatedProjects: [
            {
              label: "Embla Family Treasure",
              slug: "embla-family-treasure",
            },
          ],
          iconName: "Gauge",
        },
        {
          name: "Docker",
          category: "Deliver collaboratively",
          shortDescription:
            "Work with container tooling where it appears in the project workflow.",
          relatedProjects: [],
          iconName: "Container",
        },
        {
          name: "Postman",
          category: "Deliver collaboratively",
          shortDescription:
            "Use API tooling to inspect and validate service behavior.",
          relatedProjects: [],
          iconName: "Send",
        },
      ],
    },
    {
      title: "Think like a product builder",
      outcome:
        "Translate requirements, UX choices and team coordination into clearer product work.",
      capabilities: [
        {
          name: "Requirements analysis",
          category: "Think like a product builder",
          shortDescription:
            "Understand requirements before shaping stories, scope and implementation.",
          relatedProjects: [],
          iconName: "Search",
        },
        {
          name: "UX thinking",
          category: "Think like a product builder",
          shortDescription:
            "Prioritize clarity, purposeful motion and human-centered technology decisions.",
          relatedProjects: [
            {
              label: "Portfolio experience",
              slug: "portfolio-experience",
            },
          ],
          iconName: "MousePointer2",
        },
        {
          name: "Responsive design",
          category: "Think like a product builder",
          shortDescription:
            "Shape interfaces that stay readable and useful across mobile and desktop layouts.",
          relatedProjects: [
            {
              label: "Portfolio experience",
              slug: "portfolio-experience",
            },
          ],
          iconName: "Smartphone",
        },
        {
          name: "Accessibility",
          category: "Think like a product builder",
          shortDescription:
            "Use semantic structure, clear labels, focus visibility and reduced-motion support.",
          relatedProjects: [
            {
              label: "Portfolio experience",
              slug: "portfolio-experience",
            },
          ],
          iconName: "Accessibility",
        },
        {
          name: "Product communication",
          category: "Think like a product builder",
          shortDescription:
            "Balance technical implementation with communication and organization.",
          relatedProjects: [
            {
              label: "Embla Family Treasure",
              slug: "embla-family-treasure",
            },
          ],
          iconName: "MessagesSquare",
        },
        {
          name: "Task coordination",
          category: "Think like a product builder",
          shortDescription:
            "Coordinate task selection, ownership and progress through team discussions.",
          relatedProjects: [
            {
              label: "Embla Family Treasure",
              slug: "embla-family-treasure",
            },
          ],
          iconName: "Network",
        },
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
    closingMessage:
      "The next meaningful product might begin with one conversation.",
    resumePath: "[CONTENT REQUIRED]",
  },
};
