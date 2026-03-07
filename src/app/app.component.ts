import {
  Component,
  OnInit,
  AfterViewInit,
  HostListener,
  signal,
  inject,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactComponent } from './components/contact/contact.component';
import { LanguageService } from './services/language.service';
import { LangToggle } from './components/lang-toggle/lang-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    CoursesComponent,
    ContactComponent,
    LangToggle,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  private langService = inject(LanguageService);

  scrollProgress = signal(0);
  cursorX = signal(0);
  cursorY = signal(0);
  ringX = signal(0);
  ringY = signal(0);
  hovered = signal(false);

  footerYear = computed(() =>
    this.langService.lang() === 'en'
      ? `© ${new Date().getFullYear()} — Crafted with artisanal precision`
      : `© ${new Date().getFullYear()} — Diseñado con precisión artesanal`
  );

  private targetX = 0;
  private targetY = 0;
  private currentRingX = 0;
  private currentRingY = 0;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.animateCursor();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress.set((window.scrollY / max) * 100);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    this.targetX = e.clientX;
    this.targetY = e.clientY;
    this.cursorX.set(e.clientX);
    this.cursorY.set(e.clientY);
  }

  private animateCursor(): void {
    this.currentRingX += (this.targetX - this.currentRingX) * 0.12;
    this.currentRingY += (this.targetY - this.currentRingY) * 0.12;
    this.ringX.set(this.currentRingX);
    this.ringY.set(this.currentRingY);
    requestAnimationFrame(() => this.animateCursor());
  }

  onHoverEnter(): void { this.hovered.set(true); }
  onHoverLeave(): void { this.hovered.set(false); }

  get currentYear(): number {
    return new Date().getFullYear();
  }
}
