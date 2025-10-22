export type NavLink = {
  title: string;
  href: string;
  description?: string;
};

export type ExperienceEntry = {
  organization: string;
  role: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  achievements: string[];
};

export type EducationEntry = {
  institution: string;
  area: string;
  credential: string;
  start: string;
  end: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  contribution: string;
  links: { github?: string; live?: string };
  technologies: string[];
  status?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  content: string;
};

export type HighlightStat = {
  label: string;
  value: string;
  description: string;
};

export type ContactChannel = {
  label: string;
  href: string;
  instructions: string;
  type: 'async' | 'realtime' | 'social';
};

export type NowUpdate = {
  period: string;
  summary: string;
  experiments: string[];
  learning: string[];
  focus: { shipping: string; community: string; personal: string };
};

export type CloudflareBinding = {
  name: string;
  type: 'kv' | 'd1' | 'durableObject' | 'queue' | 'r2';
  description: string;
  placeholder: string;
};
