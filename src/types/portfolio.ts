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
  category: string;
  summary: string;
  role: string;
  technologies: string[];
  outcome: string;
  href: string;
};

export type UxPrinciple = {
  title: string;
  description: string;
};

export type TechnicalCapabilityGroup = {
  title: string;
  capabilities: string[];
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
