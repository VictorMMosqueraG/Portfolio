export interface Project {
  id: number;
  number: string;
  type: string;
  name: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}
