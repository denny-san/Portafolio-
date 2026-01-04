
export interface NavItem {
  name: string;
  path: string;
}

export interface SkillItem {
  title: string;
  desc: string;
  icon: string;
  proficiency: number;
  mainIcon: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  icon: string;
  tasks: string[];
  tags: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  id: string;
  desc: string;
  icon: string;
  image: string;
}
