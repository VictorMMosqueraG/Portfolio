import { Project } from '../models/project.model';
import { Experience } from '../models/experience.model';
import { Course } from '../models/course.model';
import { SkillCategory, PortfolioOwner } from '../models/skill.model';

export const ownerEs: PortfolioOwner = {
  firstName: 'Victor Manuel',
  lastName: 'Mosquera Gutierrez',
  initials: 'VM',
  role: 'Ingeniero de Software || Full Stack Developer || Arquitecto de Soluciones',
  tagline: 'Ingeniero de Software',
  description:
    'Forjo soluciones digitales que escalan sin límites. Arquitecturas robustas, interfaces intuitivas, nube imbatible. Código que no solo funciona: transforma negocios.',
  email: 'hola@ejemplo.com',
  stats: [
    { number: '4+', label: 'Años de Exp.' },
    { number: '30+', label: 'Proyectos' },
    { number: '12+', label: 'Clientes' },
    { number: '∞', label: 'Pasión' },
  ],
  about: {
    paragraphs: [
      '<p>Soy un <strong>Ingeniero de software</strong> con sólida experiencia construyendo aplicaciones enterprise-grade. Mi enfoque combina <strong>arquitectura robusta</strong> en el backend con interfaces modernas y fluidas en el frontend.</p><p>He trabajado con equipos multidisciplinarios para entregar soluciones que no solo funcionan, sino que <strong>escalan, perduran y deleitan</strong> a los usuarios finales.</p><p>Mi filosofía: código limpio es código que se lee como prosa — claro, intencional y elegante.</p>',
    ],
  },
  socials: [
    { icon: '⌘', label: 'LinkedIn — /in/MosqueraVictor', url: 'https://www.linkedin.com/in/mosqueravictorm/' },
    { icon: '✦', label: 'victormmosquerag@gmail.com', url: 'mailto:victormmosquerag@gmail.com' },
    { icon: '◈', label: 'GitHub — /VictorMMosqueraG', url: 'https://github.com/VictorMMosqueraG' },
  ],
};

export const skillsEs: SkillCategory[] = [
  { id: 1, icon: '⬡', title: 'Frontend', subtitle: 'UI Engineering', tags: ['Angular 17+', 'TypeScript', 'RxJS', 'NgRx', 'SCSS', 'Tailwind'] },
  { id: 2, icon: '◈', title: 'Backend', subtitle: 'Server & APIs', tags: ['Node.js', 'Java', 'NestJS', '.NET Core', 'REST APIs', 'Spring Boot', 'C#', 'PHP', 'Laravel'] },
  { id: 3, icon: '◎', title: 'Bases de Datos', subtitle: 'Data Layer', tags: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'SQL Server', 'Oracle DB'] },
  { id: 4, icon: '◇', title: 'Cloud & DevOps', subtitle: 'Infrastructure', tags: ['AWS', 'Azure', 'Docker', 'CI/CD', 'GitHub Actions', 'Terraform'] },
];

export const experiencesEs: Experience[] = [
  {
    id: 1,
    company: 'BM Software',
    role: 'Backend Developer',
    period: 'Dic 2022 - Abr 2023',
    bullets: [
      'Desarrollé múltiples aplicaciones usando Java 8 y Spring Boot, implementando microservicios y APIs RESTful.',
      'Trabajé con bases de datos relacionales como MariaDB, MySQL y SQL Server, gestionando esquemas y optimizando consultas SQL.',
      'Utilicé Spring Data JPA para persistencia eficiente y optimicé rendimiento de bases de datos para mejorar escalabilidad.',
    ],
  },
  {
    id: 2,
    company: 'DreamCode',
    role: 'Backend Developer',
    period: 'Abr 2023 — Abr 2024',
    bullets: [
      'Desarrollé aplicaciones backend escalables usando TypeScript y NestJS, aplicando patrones como MVC y CQRS, y construí frontends con Angular optimizando routing y estado.',
      'Gestioné bases de datos PostgreSQL y Oracle, optimizando consultas SQL y creando procedimientos PL/SQL.',
      'Implementé soluciones en AWS (EC2, ECS, RDS, S3, Lambda) y automatizé infraestructura con Terraform y CloudFormation.',
      'Construí microservicios con Java 8/17 y Spring Boot, usando contenedores Docker para mejorar portabilidad y despliegues.',
    ],
  },
  {
    id: 3,
    company: 'Freelancer',
    role: 'Full Stack Developer',
    period: 'Abr 2024 — May 2025',
    bullets: [
      'Desarrollé aplicaciones backend y frontend escalables usando .NET Core, C#, Angular y contenedores Docker.',
      'Trabajé con bases de datos PostgreSQL y Oracle, optimizando consultas y creando procedimientos almacenados.',
      'Implementé soluciones en AWS (EC2, ECS, S3, RDS) y automatizé infraestructura con Terraform y CloudFormation.',
      'Construí microservicios con Spring Boot y desplegué sistemas en producción asegurando confiabilidad y rendimiento.',
    ],
  },
  {
    id: 4,
    company: 'Caja Morelia Valladolid',
    role: 'Desarrollador Backend || Líder de Proyectos',
    period: 'May 2025 — Presente',
    bullets: [
      'Lideré desarrollo de soluciones usando tecnologías .NET, aplicando arquitecturas Hexagonal y Clean para sistemas escalables y mantenibles.',
      'Apliqué patrones de diseño, principios SOLID y prácticas Clean Code para garantizar código de alta calidad.',
      'Gestión de calidad con SonarQube, contenedorización Docker y servicios AWS para despliegues confiables.',
      'Experiencia en Linux, liderazgo de equipos, promoviendo mejores prácticas y alineando soluciones técnicas con objetivos de negocio.',
    ],
  },
];

export const projectsEs: Project[] = [
  {
    id: 1, number: '01', type: 'Arquitectura Limpia',
    name: 'Backend modular con Arquitectura Limpia y principios SOLID',
    description: 'Proyecto de referencia que implementa una API backend aplicando Arquitectura Limpia, separación de capas (Domain, Application, Infrastructure) y buenas prácticas para lograr un código mantenible, testeable y escalable.',
    stack: ['Java', 'Spring Boot', 'Clean Architecture', 'Testing', 'Swagger', 'Base de Datos Relacional', 'Docker'],
    liveUrl: '#', githubUrl: 'https://github.com/VictorMMosqueraG/Clean_Architecture', featured: true,
  },
  {
    id: 2, number: '02', type: 'Arquitectura Hexagonal',
    name: 'Backend modular con Arquitectura Hexagonal',
    description: 'Proyecto backend diseñado con Arquitectura Hexagonal, separando claramente dominio, aplicación e infraestructura para lograr un sistema desacoplado, testeable y fácil de extender ante nuevos requisitos.',
    stack: ['.NET', 'Arquitectura Hexagonal', 'Domain-Driven Design', 'Testing', 'Swagger', 'MongoDB', 'Docker'],
    liveUrl: '#', githubUrl: 'https://github.com/VictorMMosqueraG/Architecture_Hexagonal', featured: true,
  },
  {
    id: 3, number: '03', type: 'Aplicación de Facturación',
    name: 'Billing App para gestión de facturas',
    description: 'Aplicación de facturación enfocada en la gestión de órdenes, clientes, productos y comprobantes, permitiendo crear, visualizar y administrar facturas de forma simple y organizada para negocios pequeños y medianos.',
    stack: ['Full Stack', 'Billing', 'Gestión de clientes', 'Gestión de productos', 'Angular', 'MongoDB'],
    liveUrl: '#', githubUrl: 'https://github.com/VictorMMosqueraG/Billing-App', featured: false,
  },
];

export const coursesEs: Course[] = [
  { id: 1, badge: 'Certificado', issuer: 'Udemy', name: 'Amazon AWS', date: 'Octubre 2023', verifyUrl: 'https://www.udemy.com/certificate/UC-3d1fd85f-2f94-4815-8362-2b0c3705f726/' },
  { id: 2, badge: 'Certificado', issuer: 'Udemy', name: 'Spring Framework 6 y Spring boot 3', date: 'Agosto 2024', verifyUrl: 'https://www.udemy.com/certificate/UC-54097cf3-7796-4053-a0b1-25c98a9ca3f5/' },
  { id: 3, badge: 'Completado', issuer: 'Udemy', name: 'Docker', date: 'Febrero 2024', verifyUrl: 'https://www.udemy.com/certificate/UC-c2dfc46c-ef6b-44f1-969b-6f8975103aee/' },
  { id: 4, badge: 'Completado', issuer: 'Cisco', name: 'Introducción a la Ciberseguridad', date: 'Abril 2024', verifyUrl: 'https://www.credly.com/badges/a6321a4e-285b-4565-957d-8b18cbd5ff7c/linked_in_profile' },
  { id: 5, badge: 'Certificado', issuer: 'CertiProf', name: 'Scrum', date: 'Abr 2023', verifyUrl: 'https://media.licdn.com/dms/image/v2/D4E2DAQFCwtqGuSLWJQ/profile-treasury-document-images_1280/profile-treasury-document-images_1280/1/1708715654870?e=1773878400&v=beta&t=BMFHXFMbjB9ToSfSXYznoaAZAu-0pTpC0mD_wzu_aMs' },
];
