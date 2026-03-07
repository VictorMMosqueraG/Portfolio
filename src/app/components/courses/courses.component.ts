import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { LanguageService } from '../../services/language.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  private dataService = inject(PortfolioDataService);
  private langService = inject(LanguageService);

  lang = this.langService.lang;

  courses = computed(() => {
    this.langService.lang();
    return this.dataService.getCourses();
  });
}
