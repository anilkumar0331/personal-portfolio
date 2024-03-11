import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

  about = '';
  about2 = '';

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.about = this.portfolioService.about;
    this.about2 = this.portfolioService.about2;
  }

}
