export type NavigationItem = {
  label: string;
  href: string;
};

export type SiteIdentity = {
  name: string;
  status: string;
};

export type PersonalInformation = {
  name: string;
  location: string;
  professionalAreas: string[];
  shortBio: string;
};

export type HeroContent = {
  eyebrow: string;
  heading: string;
  supportingText: string;
  primaryActionLabel: string;
  primaryActionHref: string;
};

export type ProfessionalSummary = {
  headline: string;
  body: string;
};

export type JourneyMilestone = {
  title: string;
  period: string;
  context: string;
  role: string;
  shortDescription: string;
  keyResponsibilities: string[];
  technologies: string[];
  image?: {
    src: string;
    alt: string;
  };
  externalLink?: {
    label: string;
    href: string;
  };
};

export type LeadershipResponsibility = {
  title: string;
  responsibility: string;
  status: string;
};

export type LeadershipWorkflowStep = {
  title: string;
  description: string;
  status: string;
  responsibilities: string[];
};

export type FeaturedProject = {
  title: string;
  positioning: string;
  projectType: string;
  timeframe: string;
  problem: string;
  context: string;
  constraints: string[];
  role: string;
  responsibilities: string[];
  technicalDecisions: string[];
  productDecisions: string[];
  implementationDetails: string[];
  technologies: string[];
  outcome: string;
  challenges: string[];
  lessonsLearned: string;
  coverImage?: {
    src: string;
    alt: string;
  };
  galleryImages: {
    src: string;
    alt: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
  slug: string;
  featured: boolean;
};

export type UxPrinciple = {
  title: string;
  shortExplanation: string;
  practicalExample: string;
  projectReference?: {
    label: string;
    slug: string;
  };
  visualDemonstration?: {
    label: string;
    before: string[];
    after: string[];
  };
};

export type TechnicalCapability = {
  name: string;
  category: string;
  shortDescription: string;
  experienceLabel?: string;
  relatedProjects: {
    label: string;
    slug: string;
  }[];
  iconName?: string;
};

export type TechnicalCapabilityGroup = {
  title: string;
  outcome: string;
  capabilities: TechnicalCapability[];
};

export type MusicJourney = {
  category: string;
  summary: string;
  highlights: string[];
};

export type MorphoBrand = {
  category: string;
  name: string;
  slogan: string;
  summary: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type ContactInformation = {
  email: string;
  phone: string;
  location: string;
  availability: string;
  closingMessage: string;
  resumePath: string;
};

export type PortfolioContent = {
  personal: PersonalInformation;
  hero: HeroContent;
  professionalSummary: ProfessionalSummary;
  journeyMilestones: JourneyMilestone[];
  leadershipResponsibilities: LeadershipResponsibility[];
  leadershipWorkflow: LeadershipWorkflowStep[];
  featuredProjects: FeaturedProject[];
  uxPrinciples: UxPrinciple[];
  technicalCapabilityGroups: TechnicalCapabilityGroup[];
  musicJourney: MusicJourney;
  morphoBrand: MorphoBrand;
  socialLinks: SocialLink[];
  contact: ContactInformation;
};
