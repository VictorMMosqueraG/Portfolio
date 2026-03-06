import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  @Input() activeCompany?: string;

  private dataService = inject(PortfolioDataService);

  experiences: Experience[] = [];
  activeIndex = signal(0);

  ngOnInit(): void {
    this.experiences = this.dataService.getExperiences();

    if (this.activeCompany) {
      const idx = this.experiences.findIndex(
        (e) => e.company.toLowerCase() === this.activeCompany!.toLowerCase()
      );
      if (idx !== -1) this.activeIndex.set(idx);
    }
  }

  setActive(index: number): void {
    this.activeIndex.set(index);
  }

  get active(): Experience {
    return this.experiences[this.activeIndex()];
  }
}
