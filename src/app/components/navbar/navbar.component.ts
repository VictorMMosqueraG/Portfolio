import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface NavLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  links: NavLink[] = [
    { label: 'Sobre mí', fragment: 'about' },
    { label: 'Skills', fragment: 'skills' },
    { label: 'Experiencia', fragment: 'experience' },
    { label: 'Proyectos', fragment: 'projects' },
    { label: 'Cursos', fragment: 'courses' },
    { label: 'Contacto', fragment: 'contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
  }

  scrollTo(fragment: string): void {
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }
}
