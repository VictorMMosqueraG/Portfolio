import { Component, inject, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { LanguageService } from '../../services/language.service';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  @Input() activeCompany?: string;

  private dataService = inject(PortfolioDataService);
  private langService = inject(LanguageService);

  lang = this.langService.lang;
  activeIndex = signal(0);

  experiences = computed(() => {
    this.langService.lang();
    const list = this.dataService.getExperiences();
    if (this.activeCompany) {
      const idx = list.findIndex(
        (e) => e.company.toLowerCase() === this.activeCompany!.toLowerCase()
      );
      if (idx !== -1) this.activeIndex.set(idx);
    }
    return list;
  });

  get active(): Experience {
    return this.experiences()[this.activeIndex()];
  }

  setActive(index: number): void {
    this.activeIndex.set(index);
  }
}
