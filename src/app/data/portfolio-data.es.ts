import { Project } from '../models/project.model';
import { Experience } from '../models/experience.model';
import { Course } from '../models/course.model';
import { SkillCategory, PortfolioOwner } from '../models/skill.model';

export const ownerEs: PortfolioOwner = {
  firstName: 'Víctor Manuel',
  lastName: 'Mosquera Gutiérrez',
  initials: 'VM',
  role: 'Líder Técnico || Ingeniero de Software Backend & Cloud',
  tagline: 'Líder Técnico',
  description:
    'Construyo y lidero sistemas backend en producción con Node.js/NestJS y .NET. Microservicios, arquitecturas orientadas a eventos y nube en AWS que despliegan en minutos, fallan menos y cuestan menos.',
  email: 'victormmosquerag@gmail.com',
  stats: [
    { number: '3+', label: 'Años de Exp.' },
    { number: '6+', label: 'Proyectos Freelance' },
    { number: '40%', label: 'Menos Incidentes' },
    { number: '30%', label: 'Ahorro en Infra' },
  ],
  about: {
    paragraphs: [
      '<p>Soy <strong>Ingeniero de software</strong> con más de 3 años de experiencia construyendo y liderando sistemas backend en producción con <strong>Node.js/NestJS</strong> y <strong>.NET (ASP.NET Core)</strong>.</p><p>Actualmente soy <strong>Líder Técnico en KoralAT</strong>, donde dirigí la migración de un monolito a microservicios en AWS: despliegues de días a menos de 30 minutos, 40% menos incidentes y 30% menos costo de infraestructura.</p><p>Fuerte en microservicios, Clean Architecture, DDD, arquitecturas orientadas a eventos, Docker/Kubernetes y CI/CD. Combino <strong>criterio técnico</strong> con liderazgo de equipos Scrum y comunicación directa con negocio.</p>',
    ],
  },
  socials: [
    { icon: '⌘', label: 'LinkedIn — /in/MosqueraVictor', url: 'https://www.linkedin.com/in/mosqueravictorm/' },
    { icon: '✦', label: 'victormmosquerag@gmail.com', url: 'mailto:victormmosquerag@gmail.com' },
    { icon: '◈', label: 'GitHub — /VictorMMosqueraG', url: 'https://github.com/VictorMMosqueraG' },
  ],
};

export const skillsEs: SkillCategory[] = [
  { id: 1, icon: '◈', title: 'Backend', subtitle: 'Server & APIs', tags: ['Node.js', 'NestJS', '.NET / ASP.NET Core', 'Java', 'Spring Boot', 'TypeScript', 'JavaScript'] },
  { id: 2, icon: '⬡', title: 'Frontend', subtitle: 'UI Engineering', tags: ['Angular', 'HTML5', 'CSS3'] },
  { id: 3, icon: '⬢', title: 'Arquitectura', subtitle: 'System Design', tags: ['Microservicios', 'Clean Architecture', 'DDD', 'Event-Driven Architecture'] },
  { id: 4, icon: '◎', title: 'Bases de Datos', subtitle: 'Data Layer', tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
  { id: 5, icon: '◇', title: 'Cloud & DevOps', subtitle: 'Infrastructure', tags: ['AWS (EC2, S3)', 'Docker', 'Kubernetes', 'CI/CD', 'Infrastructure as Code'] },
  { id: 6, icon: '⇄', title: 'Integración', subtitle: 'APIs & Messaging', tags: ['REST', 'GraphQL', 'Kafka', 'RabbitMQ'] },
  { id: 7, icon: '⛨', title: 'Seguridad', subtitle: 'Identity & Secrets', tags: ['Keycloak', 'Vault', 'MinIO', 'JWT'] },
  { id: 8, icon: '✓', title: 'Testing & Metodologías', subtitle: 'Quality & Process', tags: ['Jest', 'JUnit', 'xUnit', 'Scrum', 'Kanban', 'Git/GitHub', 'Code Review', 'Mentoría técnica'] },
];

export const experiencesEs: Experience[] = [
  {
    id: 1,
    company: 'KoralAT',
    role: 'Líder Técnico',
    period: 'May 2025 — Presente',
    bullets: [
      'Lideré a un equipo de 5 desarrolladores en la migración de una aplicación monolítica a microservicios: los despliegues pasaron de 2–3 días a menos de 30 minutos, sin downtime.',
      'Definí la arquitectura base (NestJS + .NET) adoptada como estándar del equipo, eliminando 8 horas semanales de retrabajo por decisiones técnicas inconsistentes.',
      'Implementé pipelines CI/CD que redujeron los incidentes en producción un 40% (de 10 a 6 por mes).',
      'Introduje contenedorización con Docker y Kubernetes en AWS, reduciendo costos de infraestructura un 30% frente a servidores dedicados.',
      'Optimicé queries críticas en PostgreSQL y MongoDB: tiempos de respuesta de 800 ms a 200 ms en los endpoints de mayor tráfico.',
      'Establecí un proceso de code review que bajó los PRs con defectos del 45% al 15% en 3 meses.',
      'Coordiné sprints Scrum; la velocidad del equipo subió de 25 a 40 story points por sprint en 4 meses.',
    ],
  },
  {
    id: 2,
    company: 'CargaYA',
    role: 'Arquitecto Cloud || Consultoría',
    period: '2026',
    bullets: [
      'Diseñé la arquitectura cloud-native en AWS para una plataforma logística con alta disponibilidad (SLA > 99,5%) y arquitectura orientada a eventos con Kafka y RabbitMQ, desacoplando 6 servicios críticos (latencia entre servicios de 500 ms a 80 ms).',
      'Automaticé despliegues (de 4 horas manuales a 15 minutos) y reduje costos de AWS un 25% con right-sizing y autoscaling.',
      'Acompañé técnicamente a un equipo de 4 personas con code review y mentoría; la cobertura de tests subió del 20% al 65%.',
    ],
  },
  {
    id: 3,
    company: 'Consultoría Independiente',
    role: 'Full Stack Developer',
    period: 'Abr 2024 — Presente',
    bullets: [
      '6+ proyectos entregados de punta a punta para clientes de logística, comercio y servicios (requerimientos, diseño, desarrollo, despliegue), con 100% de recontratación.',
      'Arquitecturas modulares reutilizables que redujeron el time-to-market de 3 productos de 4 meses a 6 semanas.',
      'Migración de 2 aplicaciones a AWS (EC2, S3, Docker): disponibilidad de 95% a 99,5% y 35% menos costo de hosting.',
    ],
  },
  {
    id: 4,
    company: 'Dreamcode',
    role: 'Software Developer',
    period: 'Abr 2023 — Abr 2024',
    bullets: [
      'Construí 4 microservicios en NestJS que reemplazaron un módulo legado, bajando el tiempo de respuesta de las APIs de 1,2 s a 300 ms.',
      'Rediseñé el modelo de datos en PostgreSQL aplicando DDD, reduciendo la carga del servidor de base de datos un 35%.',
      'Lideré la migración a Clean Architecture en 3 servicios core, permitiendo agregar funcionalidades 2x más rápido sin regresiones.',
      'Implementé autenticación JWT con control de roles, cerrando brechas de acceso no autorizado en endpoints críticos.',
      'Automaticé el entorno de desarrollo con Docker Compose: onboarding de nuevos desarrolladores de 3 días a menos de 4 horas.',
    ],
  },
  {
    id: 5,
    company: 'BM Software Tech',
    role: 'Software Developer',
    period: 'Dic 2022 — May 2023',
    bullets: [
      'Desarrollé 2 aplicaciones web full stack (Angular + .NET Core) para automatizar procesos internos de clientes empresariales.',
      'Optimicé consultas SQL que redujeron la carga de reportes de 12 s a 2 s.',
      'Estabilicé un sistema legado de 8 a 2 incidentes mensuales mediante refactoring y corrección de deuda técnica.',
      'Integré 3 sistemas externos vía APIs REST, eliminando 5 horas semanales de procesamiento manual.',
    ],
  },
];

export const projectsEs: Project[] = [
  {
    id: 1, number: '01', type: 'Caso de estudio · Microservicios',
    name: 'Del monolito a microservicios en AWS, sin downtime',
    context: 'KoralAT · Líder Técnico · 2025 — hoy',
    description: 'Lideré a un equipo de 5 desarrolladores en la migración de una aplicación monolítica a microservicios con NestJS y .NET sobre Docker y Kubernetes en AWS. Definí la arquitectura base que hoy es el estándar del equipo, monté los pipelines CI/CD y un proceso de code review que bajó los PRs con defectos del 45% al 15%.',
    metrics: [
      { value: '<30 min', label: 'por despliegue (antes 2–3 días)' },
      { value: '−40%', label: 'incidentes en producción' },
      { value: '−30%', label: 'costo de infraestructura' },
    ],
    stack: ['NestJS', '.NET', 'AWS', 'Kubernetes', 'Docker', 'CI/CD', 'PostgreSQL', 'MongoDB'],
    featured: true,
  },
  {
    id: 2, number: '02', type: 'Caso de estudio · Event-Driven',
    name: 'Plataforma logística cloud-native con Kafka y RabbitMQ',
    context: 'CargaYA · Arquitecto Cloud · 2026',
    description: 'Diseñé la arquitectura en AWS de una plataforma logística: alta disponibilidad y comunicación orientada a eventos para desacoplar 6 servicios críticos. Automaticé los despliegues, ajusté la infraestructura con right-sizing y autoscaling, y acompañé al equipo con code review y mentoría.',
    metrics: [
      { value: '>99,5%', label: 'SLA de disponibilidad' },
      { value: '80 ms', label: 'latencia entre servicios (antes 500 ms)' },
      { value: '15 min', label: 'por despliegue (antes 4 h manuales)' },
    ],
    stack: ['AWS', 'Kafka', 'RabbitMQ', 'Event-Driven Architecture', 'Autoscaling', 'Code Review'],
    featured: true,
  },
  {
    id: 3, number: '03', type: 'Caso de estudio · Modernización',
    name: 'Reemplazo de un módulo legado con NestJS, DDD y Clean Architecture',
    context: 'Dreamcode · Software Developer · 2023 — 2024',
    description: 'Construí 4 microservicios en NestJS que reemplazaron un módulo legado, rediseñé el modelo de datos en PostgreSQL con DDD y lideré la migración de 3 servicios core a Clean Architecture. Sumé autenticación JWT con roles y un entorno Docker Compose que llevó el onboarding de 3 días a menos de 4 horas.',
    metrics: [
      { value: '300 ms', label: 'respuesta de APIs (antes 1,2 s)' },
      { value: '−35%', label: 'carga del servidor de BD' },
      { value: '2×', label: 'velocidad para sacar features' },
    ],
    stack: ['NestJS', 'TypeScript', 'PostgreSQL', 'DDD', 'Clean Architecture', 'JWT', 'Docker Compose'],
    featured: true,
  },
  {
    id: 4, number: '04', type: 'Caso de estudio · Consultoría',
    name: 'Productos a medida para logística, comercio y servicios',
    context: 'Consultoría independiente · 2024 — hoy',
    description: 'Más de 6 proyectos entregados de punta a punta: requerimientos, diseño, desarrollo y despliegue. Arquitecturas modulares reutilizables que acortaron el time-to-market de 3 productos de 4 meses a 6 semanas, y migración de 2 aplicaciones a AWS con un 35% menos de costo de hosting.',
    metrics: [
      { value: '100%', label: 'de clientes vuelven a contratar' },
      { value: '6 sem', label: 'time-to-market (antes 4 meses)' },
      { value: '99,5%', label: 'disponibilidad (antes 95%)' },
    ],
    stack: ['Angular', 'Node.js', '.NET', 'AWS EC2', 'S3', 'Docker'],
    featured: true,
  },
  {
    id: 5, number: '05', type: 'Arquitectura Limpia',
    name: 'Backend modular con Arquitectura Limpia y principios SOLID',
    description: 'Proyecto de referencia que implementa una API backend aplicando Arquitectura Limpia, separación de capas (Domain, Application, Infrastructure) y buenas prácticas para lograr un código mantenible, testeable y escalable.',
    stack: ['Java', 'Spring Boot', 'Clean Architecture', 'Testing', 'Swagger', 'Base de Datos Relacional', 'Docker'],
    githubUrl: 'https://github.com/VictorMMosqueraG/Clean_Architecture', featured: false,
  },
  {
    id: 6, number: '06', type: 'Arquitectura Hexagonal',
    name: 'Backend modular con Arquitectura Hexagonal',
    description: 'Proyecto backend diseñado con Arquitectura Hexagonal, separando claramente dominio, aplicación e infraestructura para lograr un sistema desacoplado, testeable y fácil de extender ante nuevos requisitos.',
    stack: ['.NET', 'Arquitectura Hexagonal', 'Domain-Driven Design', 'Testing', 'Swagger', 'MongoDB', 'Docker'],
    githubUrl: 'https://github.com/VictorMMosqueraG/Architecture_Hexagonal', featured: false,
  },
  {
    id: 7, number: '07', type: 'Aplicación de Facturación',
    name: 'Billing App para gestión de facturas',
    description: 'Aplicación de facturación enfocada en la gestión de órdenes, clientes, productos y comprobantes, permitiendo crear, visualizar y administrar facturas de forma simple y organizada para negocios pequeños y medianos.',
    stack: ['Full Stack', 'Billing', 'Gestión de clientes', 'Gestión de productos', 'Angular', 'MongoDB'],
    githubUrl: 'https://github.com/VictorMMosqueraG/Billing-App', featured: false,
  },
];

export const coursesEs: Course[] = [
  { id: 1, badge: 'Certificado', issuer: 'Udemy', name: 'Amazon AWS', date: 'Octubre 2023', verifyUrl: 'https://www.udemy.com/certificate/UC-3d1fd85f-2f94-4815-8362-2b0c3705f726/' },
  { id: 2, badge: 'Certificado', issuer: 'Udemy', name: 'Spring Framework 6 y Spring boot 3', date: 'Agosto 2024', verifyUrl: 'https://www.udemy.com/certificate/UC-54097cf3-7796-4053-a0b1-25c98a9ca3f5/' },
  { id: 3, badge: 'Completado', issuer: 'Udemy', name: 'Docker', date: 'Febrero 2024', verifyUrl: 'https://www.udemy.com/certificate/UC-c2dfc46c-ef6b-44f1-969b-6f8975103aee/' },
  { id: 4, badge: 'Completado', issuer: 'Cisco', name: 'Introducción a la Ciberseguridad', date: 'Abril 2024', verifyUrl: 'https://www.credly.com/badges/a6321a4e-285b-4565-957d-8b18cbd5ff7c/linked_in_profile' },
  { id: 5, badge: 'Certificado', issuer: 'CertiProf', name: 'Scrum', date: 'Abr 2023', verifyUrl: 'https://media.licdn.com/dms/image/v2/D4E2DAQFCwtqGuSLWJQ/profile-treasury-document-images_1280/profile-treasury-document-images_1280/1/1708715654870?e=1773878400&v=beta&t=BMFHXFMbjB9ToSfSXYznoaAZAu-0pTpC0mD_wzu_aMs' },
];
