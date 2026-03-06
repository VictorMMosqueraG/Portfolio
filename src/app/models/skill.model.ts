export interface SkillCategory {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  tags: string[];
}

export interface SocialLink {
  icon: string;
  label: string;
  url: string;
}

export interface PortfolioOwner {
  firstName: string;
  lastName: string;
  initials: string;
  role: string;
  tagline: string;
  description: string;
  email: string;
  stats: { number: string; label: string }[];
  about: { paragraphs: string[] };
  socials: SocialLink[];
}
