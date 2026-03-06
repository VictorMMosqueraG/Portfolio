import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { PortfolioOwner } from '../../models/skill.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  private dataService = inject(PortfolioDataService);
  owner!: PortfolioOwner;

  ngOnInit(): void {
    this.owner = this.dataService.getOwner();
  }
}
