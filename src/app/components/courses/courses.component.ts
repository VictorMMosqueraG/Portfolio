import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { Course } from '../../models/course.model';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  private dataService = inject(PortfolioDataService);
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = this.dataService.getCourses();
  }
}
