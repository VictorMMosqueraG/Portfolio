import { Injectable, inject } from '@angular/core';
import { LanguageService } from './language.service';
import { ownerEs, skillsEs, experiencesEs, projectsEs, coursesEs } from '../data/portfolio-data.es';
import { ownerEn, skillsEn, experiencesEn, projectsEn, coursesEn } from '../data/portfolio-data.en';


@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  private langService = inject(LanguageService);

  private get lang() { return this.langService.lang(); }

  getOwner()      { return this.lang === 'en' ? ownerEn      : ownerEs; }
  getSkills()     { return this.lang === 'en' ? skillsEn     : skillsEs; }
  getExperiences(){ return this.lang === 'en' ? experiencesEn: experiencesEs; }
  getProjects()   { return this.lang === 'en' ? projectsEn   : projectsEs; }
  getCourses()    { return this.lang === 'en' ? coursesEn    : coursesEs; }
}
