export interface Project {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  views: number;
  createdAt: string;
}

export interface Achievement {
  _id: string;
  title: string;
  organization: string;
  dateString: string;
  description: string;
  category: 'hackathon' | 'startup' | 'quiz' | 'academic' | 'other';
  rank: number;
  createdAt: string;
}

export interface Stats {
  dsaSolved: number;
  hackathonsWon: number;
  totalPageViews: number;
}

export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}
