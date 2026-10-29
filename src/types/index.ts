export type ProjectCategory =
  | "Ticketing & DMS"
  | "E-Commerce & Logistics"
  | "Mobile & PWA";

export type ProjectFilter = "All" | ProjectCategory;

export interface ProfilePhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Profile {
  name: string;
  role: string;
  experienceYears: number;
  email: string;
  phone: string;
  location: string;
  summary: string;
  highlights: string[];
  linkedInUrl?: string;
  photo?: ProfilePhoto;
}

export type SkillCategory = "Testing" | "API & Database" | "Performance" | "Tools & Process";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  tools?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  /** IDs of projects delivered in this role. */
  projectIds?: string[];
}

export interface ExperienceHighlight {
  id: string;
  title: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  startYear: string;
  endYear: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  company?: string;
  /** True when the category was inferred rather than verified. */
  categoryInferred?: boolean;
  techStack?: string[];
  responsibilities?: string[];
  achievements?: string[];
}

export interface CvData {
  profile: Profile;
  skills: Skill[];
  experience: Experience[];
  experienceHighlights: ExperienceHighlight[];
  projects: Project[];
  education: Education[];
  languages: string[];
  certifications: string[];
  cvPath: string;
}
