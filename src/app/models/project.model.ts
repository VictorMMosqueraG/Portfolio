export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  number: string;
  type: string;
  name: string;
  context?: string;
  description: string;
  metrics?: ProjectMetric[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}
