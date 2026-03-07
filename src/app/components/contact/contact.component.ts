import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  private dataService = inject(PortfolioDataService);
  private langService = inject(LanguageService);

  lang = this.langService.lang;

  owner = computed(() => {
    this.langService.lang();
    return this.dataService.getOwner();
  });
}
