import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  projects: any;

  constructor(private portfolioService: PortfolioService){}
  
  ngOnInit(): void {
    this.projects =  this.portfolioService.getProjectDetails();
  }

}
