import { Project } from '../models/project.model';
import { Experience } from '../models/experience.model';
import { Course } from '../models/course.model';
import { SkillCategory, PortfolioOwner } from '../models/skill.model';

export const ownerEn: PortfolioOwner = {
  firstName: 'Víctor Manuel',
  lastName: 'Mosquera Gutiérrez',
  initials: 'VM',
  role: 'Tech Lead || Backend & Cloud Software Engineer',
  tagline: 'Tech Lead',
  description:
    'I build and lead production backend systems with Node.js/NestJS and .NET. Microservices, event-driven architectures and AWS cloud that deploy in minutes, fail less and cost less.',
  email: 'victormmosquerag@gmail.com',
  stats: [
    { number: '3+', label: 'Years of Exp.' },
    { number: '6+', label: 'Freelance Projects' },
    { number: '40%', label: 'Fewer Incidents' },
    { number: '30%', label: 'Infra Savings' },
  ],
  about: {
    paragraphs: [
      '<p>I am a <strong>Software Engineer</strong> with 3+ years of experience building and leading production backend systems with <strong>Node.js/NestJS</strong> and <strong>.NET (ASP.NET Core)</strong>.</p><p>I am currently <strong>Tech Lead at KoralAT</strong>, where I led the migration from a monolith to microservices on AWS: deployments went from days to under 30 minutes, with 40% fewer incidents and 30% lower infrastructure costs.</p><p>Strong in microservices, Clean Architecture, DDD, event-driven architectures, Docker/Kubernetes and CI/CD. I combine <strong>technical judgment</strong> with Scrum team leadership and direct communication with the business.</p>',
    ],
  },
  socials: [
    { icon: '⌘', label: 'LinkedIn — /in/MosqueraVictor', url: 'https://www.linkedin.com/in/mosqueravictorm/' },
    { icon: '✦', label: 'victormmosquerag@gmail.com', url: 'mailto:victormmosquerag@gmail.com' },
    { icon: '◈', label: 'GitHub — /VictorMMosqueraG', url: 'https://github.com/VictorMMosqueraG' },
  ],
};

export const skillsEn: SkillCategory[] = [
  { id: 1, icon: '◈', title: 'Backend', subtitle: 'Server & APIs', tags: ['Node.js', 'NestJS', '.NET / ASP.NET Core', 'Java', 'Spring Boot', 'TypeScript', 'JavaScript'] },
  { id: 2, icon: '⬡', title: 'Frontend', subtitle: 'UI Engineering', tags: ['Angular', 'HTML5', 'CSS3'] },
  { id: 3, icon: '⬢', title: 'Architecture', subtitle: 'System Design', tags: ['Microservices', 'Clean Architecture', 'DDD', 'Event-Driven Architecture'] },
  { id: 4, icon: '◎', title: 'Databases', subtitle: 'Data Layer', tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
  { id: 5, icon: '◇', title: 'Cloud & DevOps', subtitle: 'Infrastructure', tags: ['AWS (EC2, S3)', 'Docker', 'Kubernetes', 'CI/CD', 'Infrastructure as Code'] },
  { id: 6, icon: '⇄', title: 'Integration', subtitle: 'APIs & Messaging', tags: ['REST', 'GraphQL', 'Kafka', 'RabbitMQ'] },
  { id: 7, icon: '⛨', title: 'Security', subtitle: 'Identity & Secrets', tags: ['Keycloak', 'Vault', 'MinIO', 'JWT'] },
  { id: 8, icon: '✓', title: 'Testing & Methodologies', subtitle: 'Quality & Process', tags: ['Jest', 'JUnit', 'xUnit', 'Scrum', 'Kanban', 'Git/GitHub', 'Code Review', 'Technical Mentoring'] },
];

export const experiencesEn: Experience[] = [
  {
    id: 1,
    company: 'KoralAT',
    role: 'Tech Lead',
    period: 'May 2025 — Present',
    bullets: [
      'Led a team of 5 developers migrating a monolithic application to microservices: deployments went from 2–3 days to under 30 minutes, with zero downtime.',
      'Defined the base architecture (NestJS + .NET) adopted as the team standard, eliminating 8 hours per week of rework caused by inconsistent technical decisions.',
      'Implemented CI/CD pipelines that cut production incidents by 40% (from 10 to 6 per month).',
      'Introduced containerization with Docker and Kubernetes on AWS, reducing infrastructure costs by 30% compared to dedicated servers.',
      'Optimized critical PostgreSQL and MongoDB queries: response times dropped from 800 ms to 200 ms on the highest-traffic endpoints.',
      'Established a code review process that lowered defective PRs from 45% to 15% in 3 months.',
      'Coordinated Scrum sprints; team velocity rose from 25 to 40 story points per sprint in 4 months.',
    ],
  },
  {
    id: 2,
    company: 'CargaYA',
    role: 'Cloud Architect || Consulting',
    period: '2026',
    bullets: [
      'Designed a highly available cloud-native AWS architecture (SLA > 99.5%) for a logistics platform, with an event-driven design on Kafka and RabbitMQ decoupling 6 critical services (inter-service latency from 500 ms to 80 ms).',
      'Automated deployments (from 4 manual hours to 15 minutes) and cut AWS costs by 25% through right-sizing and autoscaling.',
      'Provided technical guidance to a team of 4 through code review and mentoring; test coverage rose from 20% to 65%.',
    ],
  },
  {
    id: 3,
    company: 'Independent Consulting',
    role: 'Full Stack Developer',
    period: 'Apr 2024 — Present',
    bullets: [
      '6+ projects delivered end to end for logistics, retail and services clients (requirements, design, development, deployment), with a 100% rehire rate.',
      'Reusable modular architectures that reduced time-to-market for 3 products from 4 months to 6 weeks.',
      'Migrated 2 applications to AWS (EC2, S3, Docker): availability from 95% to 99.5% and 35% lower hosting costs.',
    ],
  },
  {
    id: 4,
    company: 'Dreamcode',
    role: 'Software Developer',
    period: 'Apr 2023 — Apr 2024',
    bullets: [
      'Built 4 NestJS microservices that replaced a legacy module, lowering API response times from 1.2 s to 300 ms.',
      'Redesigned the PostgreSQL data model applying DDD, reducing database server load by 35%.',
      'Led the migration to Clean Architecture in 3 core services, enabling features to ship 2x faster without regressions.',
      'Implemented JWT authentication with role-based access control, closing unauthorized-access gaps on critical endpoints.',
      'Automated the development environment with Docker Compose: new developer onboarding went from 3 days to under 4 hours.',
    ],
  },
  {
    id: 5,
    company: 'BM Software Tech',
    role: 'Software Developer',
    period: 'Dec 2022 — May 2023',
    bullets: [
      'Developed 2 full stack web applications (Angular + .NET Core) to automate internal processes for enterprise clients.',
      'Optimized SQL queries, cutting report load time from 12 s to 2 s.',
      'Stabilized a legacy system from 8 to 2 monthly incidents through refactoring and technical debt cleanup.',
      'Integrated 3 external systems via REST APIs, eliminating 5 hours per week of manual processing.',
    ],
  },
];

export const projectsEn: Project[] = [
  {
    id: 1, number: '01', type: 'Case Study · Microservices',
    name: 'From monolith to microservices on AWS, with zero downtime',
    context: 'KoralAT · Tech Lead · 2025 — present',
    description: 'Led a team of 5 developers migrating a monolithic application to microservices with NestJS and .NET on Docker and Kubernetes on AWS. Defined the base architecture that is now the team standard, built the CI/CD pipelines and a code review process that cut defective PRs from 45% to 15%.',
    metrics: [
      { value: '<30 min', label: 'per deployment (was 2–3 days)' },
      { value: '−40%', label: 'production incidents' },
      { value: '−30%', label: 'infrastructure cost' },
    ],
    stack: ['NestJS', '.NET', 'AWS', 'Kubernetes', 'Docker', 'CI/CD', 'PostgreSQL', 'MongoDB'],
    featured: true,
  },
  {
    id: 2, number: '02', type: 'Case Study · Event-Driven',
    name: 'Cloud-native logistics platform with Kafka and RabbitMQ',
    context: 'CargaYA · Cloud Architect · 2026',
    description: 'Designed the AWS architecture for a logistics platform: high availability and event-driven communication decoupling 6 critical services. Automated deployments, tuned the infrastructure with right-sizing and autoscaling, and guided the team through code review and mentoring.',
    metrics: [
      { value: '>99.5%', label: 'availability SLA' },
      { value: '80 ms', label: 'inter-service latency (was 500 ms)' },
      { value: '15 min', label: 'per deployment (was 4 manual hours)' },
    ],
    stack: ['AWS', 'Kafka', 'RabbitMQ', 'Event-Driven Architecture', 'Autoscaling', 'Code Review'],
    featured: true,
  },
  {
    id: 3, number: '03', type: 'Case Study · Modernization',
    name: 'Replacing a legacy module with NestJS, DDD and Clean Architecture',
    context: 'Dreamcode · Software Developer · 2023 — 2024',
    description: 'Built 4 NestJS microservices that replaced a legacy module, redesigned the PostgreSQL data model with DDD and led the migration of 3 core services to Clean Architecture. Added role-based JWT authentication and a Docker Compose environment that cut onboarding from 3 days to under 4 hours.',
    metrics: [
      { value: '300 ms', label: 'API response (was 1.2 s)' },
      { value: '−35%', label: 'database server load' },
      { value: '2×', label: 'faster feature delivery' },
    ],
    stack: ['NestJS', 'TypeScript', 'PostgreSQL', 'DDD', 'Clean Architecture', 'JWT', 'Docker Compose'],
    featured: true,
  },
  {
    id: 4, number: '04', type: 'Case Study · Consulting',
    name: 'Custom products for logistics, retail and services',
    context: 'Independent consulting · 2024 — present',
    description: '6+ projects delivered end to end: requirements, design, development and deployment. Reusable modular architectures shortened time-to-market for 3 products from 4 months to 6 weeks, and 2 applications were migrated to AWS with 35% lower hosting costs.',
    metrics: [
      { value: '100%', label: 'client rehire rate' },
      { value: '6 wks', label: 'time-to-market (was 4 months)' },
      { value: '99.5%', label: 'availability (was 95%)' },
    ],
    stack: ['Angular', 'Node.js', '.NET', 'AWS EC2', 'S3', 'Docker'],
    featured: true,
  },
  {
    id: 5, number: '05', type: 'Clean Architecture',
    name: 'Modular Backend with Clean Architecture and SOLID principles',
    description: 'Reference project implementing a backend API with Clean Architecture, layer separation (Domain, Application, Infrastructure) and best practices for maintainable, testable, and scalable code.',
    stack: ['Java', 'Spring Boot', 'Clean Architecture', 'Testing', 'Swagger', 'Relational Database', 'Docker'],
    githubUrl: 'https://github.com/VictorMMosqueraG/Clean_Architecture', featured: false,
  },
  {
    id: 6, number: '06', type: 'Hexagonal Architecture',
    name: 'Modular Backend with Hexagonal Architecture',
    description: 'Backend project designed with Hexagonal Architecture, clearly separating domain, application, and infrastructure for a decoupled, testable system easy to extend for new requirements.',
    stack: ['.NET', 'Hexagonal Architecture', 'Domain-Driven Design', 'Testing', 'Swagger', 'MongoDB', 'Docker'],
    githubUrl: 'https://github.com/VictorMMosqueraG/Architecture_Hexagonal', featured: false,
  },
  {
    id: 7, number: '07', type: 'Billing Application',
    name: 'Billing App for invoice management',
    description: 'Billing application focused on managing orders, clients, products and receipts, allowing creation, visualization, and administration of invoices for small and medium businesses.',
    stack: ['Full Stack', 'Billing', 'Client Management', 'Product Management', 'Angular', 'MongoDB'],
    githubUrl: 'https://github.com/VictorMMosqueraG/Billing-App', featured: false,
  },
];

export const coursesEn: Course[] = [
  { id: 1, badge: 'Certified', issuer: 'Udemy', name: 'Amazon AWS', date: 'October 2023', verifyUrl: 'https://www.udemy.com/certificate/UC-3d1fd85f-2f94-4815-8362-2b0c3705f726/' },
  { id: 2, badge: 'Certified', issuer: 'Udemy', name: 'Spring Framework 6 & Spring Boot 3', date: 'August 2024', verifyUrl: 'https://www.udemy.com/certificate/UC-54097cf3-7796-4053-a0b1-25c98a9ca3f5/' },
  { id: 3, badge: 'Completed', issuer: 'Udemy', name: 'Docker', date: 'February 2024', verifyUrl: 'https://www.udemy.com/certificate/UC-c2dfc46c-ef6b-44f1-969b-6f8975103aee/' },
  { id: 4, badge: 'Completed', issuer: 'Cisco', name: 'Introduction to Cybersecurity', date: 'April 2024', verifyUrl: 'https://www.credly.com/badges/a6321a4e-285b-4565-957d-8b18cbd5ff7c/linked_in_profile' },
  { id: 5, badge: 'Certified', issuer: 'CertiProf', name: 'Scrum', date: 'Apr 2023', verifyUrl: 'https://media.licdn.com/dms/image/v2/D4E2DAQFCwtqGuSLWJQ/profile-treasury-document-images_1280/profile-treasury-document-images_1280/1/1708715654870?e=1773878400&v=beta&t=BMFHXFMbjB9ToSfSXYznoaAZAu-0pTpC0mD_wzu_aMs' },
];
