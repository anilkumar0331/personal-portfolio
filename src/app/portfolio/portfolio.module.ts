import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectCardsComponent } from './project-cards/project-cards.component';
import { SkillsSliderComponent } from './skills-slider/skills-slider.component';



@NgModule({
  declarations: [
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    IntroductionComponent,
    ProjectsComponent,
    SkillsComponent,
    ProjectCardsComponent,
    SkillsSliderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
