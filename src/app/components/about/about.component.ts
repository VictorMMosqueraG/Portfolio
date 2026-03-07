import { Component, inject, computed, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { LanguageService } from '../../services/language.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  private dataService = inject(PortfolioDataService);
  private langService = inject(LanguageService);

  lang = this.langService.lang;

  owner = computed(() => {
    this.langService.lang();
    return this.dataService.getOwner();
  });

  countersStarted = false;
  @ViewChildren('statNumber') statNumbers!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.countersStarted) {
          this.countersStarted = true;
          this.animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    const el = document.querySelector('.stats-grid');
    if (el) observer.observe(el);
  }

  private animateCounters(): void {
    this.statNumbers.forEach((ref) => {
      const el = ref.nativeElement;
      const text = el.dataset['value'] ?? el.textContent ?? '';
      if (text === '∞') return;
      const num = parseInt(text);
      const suffix = text.replace(/[0-9]/g, '');
      let current = 0;
      const step = num / 40;
      const timer = setInterval(() => {
        current = Math.min(current + step, num);
        el.textContent = Math.round(current) + suffix;
        if (current >= num) clearInterval(timer);
      }, 40);
    });
  }
}
