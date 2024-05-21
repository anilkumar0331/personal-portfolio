import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  educationDetails: any;

  constructor(private portfolioService: PortfolioService){}
  
  ngOnInit() {
    this.educationDetails = this.portfolioService.getEducationDetails();
  }

}
