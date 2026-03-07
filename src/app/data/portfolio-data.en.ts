import { Project } from '../models/project.model';
import { Experience } from '../models/experience.model';
import { Course } from '../models/course.model';
import { SkillCategory, PortfolioOwner } from '../models/skill.model';

export const ownerEn: PortfolioOwner = {
  firstName: 'Victor Manuel',
  lastName: 'Mosquera Gutierrez',
  initials: 'VM',
  role: 'Software Engineer || Full Stack Developer || Solutions Architect',
  tagline: 'Software Engineer',
  description:
    'I forge digital solutions that scale without limits. Robust architectures, intuitive interfaces, unbeatable cloud. Code that doesn\'t just work: it transforms businesses.',
  email: 'hello@example.com',
  stats: [
    { number: '4+', label: 'Years of Exp.' },
    { number: '30+', label: 'Projects' },
    { number: '12+', label: 'Clients' },
    { number: '∞', label: 'Passion' },
  ],
  about: {
    paragraphs: [
      '<p>I am a <strong>Software Engineer</strong> with solid experience building enterprise-grade applications. My approach combines <strong>robust architecture</strong> on the backend with modern, fluid interfaces on the frontend.</p><p>I have worked with multidisciplinary teams to deliver solutions that not only work, but <strong>scale, endure, and delight</strong> end users.</p><p>My philosophy: clean code is code that reads like prose — clear, intentional, and elegant.</p>',
    ],
  },
  socials: [
    { icon: '⌘', label: 'LinkedIn — /in/MosqueraVictor', url: 'https://www.linkedin.com/in/mosqueravictorm/' },
    { icon: '✦', label: 'victormmosquerag@gmail.com', url: 'mailto:victormmosquerag@gmail.com' },
    { icon: '◈', label: 'GitHub — /VictorMMosqueraG', url: 'https://github.com/VictorMMosqueraG' },
  ],
};

export const skillsEn: SkillCategory[] = [
  { id: 1, icon: '⬡', title: 'Frontend', subtitle: 'UI Engineering', tags: ['Angular 17+', 'TypeScript', 'RxJS', 'NgRx', 'SCSS', 'Tailwind'] },
  { id: 2, icon: '◈', title: 'Backend', subtitle: 'Server & APIs', tags: ['Node.js', 'Java', 'NestJS', '.NET Core', 'REST APIs', 'Spring Boot', 'C#', 'PHP', 'Laravel'] },
  { id: 3, icon: '◎', title: 'Databases', subtitle: 'Data Layer', tags: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'SQL Server', 'Oracle DB'] },
  { id: 4, icon: '◇', title: 'Cloud & DevOps', subtitle: 'Infrastructure', tags: ['AWS', 'Azure', 'Docker', 'CI/CD', 'GitHub Actions', 'Terraform'] },
];

export const experiencesEn: Experience[] = [
  {
    id: 1,
    company: 'BM Software',
    role: 'Backend Developer',
    period: 'Dec 2022 - Apr 2023',
    bullets: [
      'Developed multiple applications using Java 8 and Spring Boot, implementing microservices and RESTful APIs.',
      'Worked with relational databases such as MariaDB, MySQL, and SQL Server, managing schemas and optimizing SQL queries.',
      'Used Spring Data JPA for efficient persistence and optimized database performance to improve scalability.',
    ],
  },
  {
    id: 2,
    company: 'DreamCode',
    role: 'Backend Developer',
    period: 'Apr 2023 — Apr 2024',
    bullets: [
      'Developed scalable backend applications using TypeScript and NestJS, applying MVC and CQRS patterns, and built frontends with Angular optimizing routing and state.',
      'Managed PostgreSQL and Oracle databases, optimizing SQL queries and creating PL/SQL procedures.',
      'Implemented AWS solutions (EC2, ECS, RDS, S3, Lambda) and automated infrastructure with Terraform and CloudFormation.',
      'Built microservices with Java 8/17 and Spring Boot, using Docker containers to improve portability and deployments.',
    ],
  },
  {
    id: 3,
    company: 'Freelancer',
    role: 'Full Stack Developer',
    period: 'Apr 2024 — May 2025',
    bullets: [
      'Developed scalable backend and frontend applications using .NET Core, C#, Angular, and Docker containers.',
      'Worked with PostgreSQL and Oracle databases, optimizing queries and creating stored procedures.',
      'Implemented AWS solutions (EC2, ECS, S3, RDS) and automated infrastructure with Terraform and CloudFormation.',
      'Built microservices with Spring Boot and deployed production systems ensuring reliability and performance.',
    ],
  },
  {
    id: 4,
    company: 'Caja Morelia Valladolid',
    role: 'Backend Developer || Project Lead',
    period: 'May 2025 — Present',
    bullets: [
      'Led development of solutions using .NET technologies, applying Hexagonal and Clean architectures for scalable and maintainable systems.',
      'Applied design patterns, SOLID principles, and Clean Code practices to ensure high-quality code.',
      'Quality management with SonarQube, Docker containerization, and AWS services for reliable deployments.',
      'Experience in Linux, team leadership, promoting best practices and aligning technical solutions with business objectives.',
    ],
  },
];

export const projectsEn: Project[] = [
  {
    id: 1, number: '01', type: 'Clean Architecture',
    name: 'Modular Backend with Clean Architecture and SOLID principles',
    description: 'Reference project implementing a backend API with Clean Architecture, layer separation (Domain, Application, Infrastructure) and best practices for maintainable, testable, and scalable code.',
    stack: ['Java', 'Spring Boot', 'Clean Architecture', 'Testing', 'Swagger', 'Relational Database', 'Docker'],
    liveUrl: '#', githubUrl: 'https://github.com/VictorMMosqueraG/Clean_Architecture', featured: true,
  },
  {
    id: 2, number: '02', type: 'Hexagonal Architecture',
    name: 'Modular Backend with Hexagonal Architecture',
    description: 'Backend project designed with Hexagonal Architecture, clearly separating domain, application, and infrastructure for a decoupled, testable system easy to extend for new requirements.',
    stack: ['.NET', 'Hexagonal Architecture', 'Domain-Driven Design', 'Testing', 'Swagger', 'MongoDB', 'Docker'],
    liveUrl: '#', githubUrl: 'https://github.com/VictorMMosqueraG/Architecture_Hexagonal', featured: true,
  },
  {
    id: 3, number: '03', type: 'Billing Application',
    name: 'Billing App for invoice management',
    description: 'Billing application focused on managing orders, clients, products and receipts, allowing creation, visualization, and administration of invoices for small and medium businesses.',
    stack: ['Full Stack', 'Billing', 'Client Management', 'Product Management', 'Angular', 'MongoDB'],
    liveUrl: '#', githubUrl: 'https://github.com/VictorMMosqueraG/Billing-App', featured: false,
  },
];

export const coursesEn: Course[] = [
  { id: 1, badge: 'Certified', issuer: 'Udemy', name: 'Amazon AWS', date: 'October 2023', verifyUrl: 'https://www.udemy.com/certificate/UC-3d1fd85f-2f94-4815-8362-2b0c3705f726/' },
  { id: 2, badge: 'Certified', issuer: 'Udemy', name: 'Spring Framework 6 & Spring Boot 3', date: 'August 2024', verifyUrl: 'https://www.udemy.com/certificate/UC-54097cf3-7796-4053-a0b1-25c98a9ca3f5/' },
  { id: 3, badge: 'Completed', issuer: 'Udemy', name: 'Docker', date: 'February 2024', verifyUrl: 'https://www.udemy.com/certificate/UC-c2dfc46c-ef6b-44f1-969b-6f8975103aee/' },
  { id: 4, badge: 'Completed', issuer: 'Cisco', name: 'Introduction to Cybersecurity', date: 'April 2024', verifyUrl: 'https://www.credly.com/badges/a6321a4e-285b-4565-957d-8b18cbd5ff7c/linked_in_profile' },
  { id: 5, badge: 'Certified', issuer: 'CertiProf', name: 'Scrum', date: 'Apr 2023', verifyUrl: 'https://media.licdn.com/dms/image/v2/D4E2DAQFCwtqGuSLWJQ/profile-treasury-document-images_1280/profile-treasury-document-images_1280/1/1708715654870?e=1773878400&v=beta&t=BMFHXFMbjB9ToSfSXYznoaAZAu-0pTpC0mD_wzu_aMs' },
];
