export interface Project {
  id: string;
  title: string;
  category: string;
  url: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Code' | 'Palette' | 'Smartphone' | 'Layers';
}

export interface TimelineItem {
  id: string;
  institution: string;
  title: string;
  period: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    icon?: string;
    description?: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  avatar: string;
  email: string;
  phone: string;
  birthday: string;
  location: string;
  mapEmbedUrl: string;
  aboutParagraphs: string[];
  socials: {
    github: string;
    linkedin: string;
    facebook: string;
    instagram: string;
  };
}
