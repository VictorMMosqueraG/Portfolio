import { Component, inject, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  private dataService = inject(PortfolioDataService);
  private langService = inject(LanguageService);

  @Input() photoUrl: string = 'images/photo.jpg';

  lang = this.langService.lang;

  owner = computed(() => {
    this.langService.lang();
    return this.dataService.getOwner();
  });

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
