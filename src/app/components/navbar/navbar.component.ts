import { Component, HostListener, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

interface NavLink { label: string; fragment: string; }

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  private langService = inject(LanguageService);

  scrolled = signal(false);
  menuOpen = signal(false);

  links = computed((): NavLink[] => {
    const es = this.langService.lang() === 'es';
    return [
      { label: es ? 'Sobre mí'    : 'About',      fragment: 'about' },
      { label: 'Skills',                           fragment: 'skills' },
      { label: es ? 'Experiencia' : 'Experience',  fragment: 'experience' },
      { label: es ? 'Proyectos'   : 'Projects',    fragment: 'projects' },
      { label: es ? 'Cursos'      : 'Courses',     fragment: 'courses' },
      { label: es ? 'Contacto'    : 'Contact',     fragment: 'contact' },
    ];
  });

  @HostListener('window:scroll')
  onScroll(): void { this.scrolled.set(window.scrollY > 50); }

  scrollTo(fragment: string): void {
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen.set(false);
  }

  toggleMenu(): void { this.menuOpen.update(v => !v); }
}
