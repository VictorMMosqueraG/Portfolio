# Victor Manuel Mosquera — Portfolio

> Portafolio profesional Full Stack Developer construido con **Angular 21** — Luxury Refined.

[victormmosquerag.github.io/Portfolio](https://victormmosquerag.github.io/Portfolio/)

---

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Angular 21 (Standalone Components, Signals) |
| Lenguaje | TypeScript 5.9 |
| Estilos | SCSS + CSS Variables |
| Formularios | ReactiveFormsModule + EmailJS |
| CI/CD | GitHub Actions → GitHub Pages |

---

## Estructura

```
src/
├── environments/
│   ├── environment.ts                 
│   └── environment.production.ts    
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── courses/
│   │   └── contact/                  
│   ├── models/
│   │   ├── project.model.ts
│   │   ├── experience.model.ts
│   │   ├── course.model.ts
│   │   └── skill.model.ts
│   ├── services/
│   │   └── portfolio-data.service.ts 
│   └── directives/
│       └── scroll-reveal.directive.ts
└── styles.scss                      
```

---

## Desarrollo local

### 1. Clonar e instalar

```bash
git clone https://github.com/victormmosquerag/Portfolio.git
cd Portfolio
npm install
```

### 2. Configurar variables de entorno

Crea el archivo `src/environments/environment.ts` (está en `.gitignore`):

```typescript
export const environment = {
  production: false,
  emailjs: {
    serviceId:  'TU_SERVICE_ID',
    templateId: 'TU_TEMPLATE_ID',
    publicKey:  'TU_PUBLIC_KEY',
  },
};
```

> Obtén las credenciales en [emailjs.com/admin](https://dashboard.emailjs.com/admin)

### 3. Levantar servidor

```bash
ng serve
```

Abre `http://localhost:4200/`

---

## Personalizar contenido

Todo el contenido del portafolio está centralizado en un solo archivo:

```
src/app/services/portfolio-data.service.ts
```

Edita los métodos:

| Método | Qué contiene |
|--------|-------------|
| `getOwner()` | Nombre, rol, descripción, email, redes sociales |
| `getSkills()` | Categorías y tecnologías |
| `getExperiences()` | Historial laboral con tabs |
| `getProjects()` | Proyectos con URLs |
| `getCourses()` | Certificados con links de verificación |

---

## Foto de perfil

Coloca tu foto en:

```
public/images/photo.jpg
```

Se carga automáticamente en el hero. Si no existe, muestra las iniciales.

---

## Build de producción

```bash
ng build --configuration production
```

El output queda en `dist/portfolio/browser/`.

---

## Deploy — GitHub Actions

El pipeline se dispara automáticamente al hacer push a `main`.

### Deploy manual

```bash
git add .
git commit -m "feat: descripción del cambio"
git push origin main
```

El sitio queda disponible en `https://victormmosquerag.github.io/Portfolio/`

---



