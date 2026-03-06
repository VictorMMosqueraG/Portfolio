import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { PortfolioOwner } from '../../models/skill.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  private dataService = inject(PortfolioDataService);
  owner!: PortfolioOwner;

  @Input() photoUrl: string = 'images/photo.jpg';

  ngOnInit(): void {
    this.owner = this.dataService.getOwner();
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
