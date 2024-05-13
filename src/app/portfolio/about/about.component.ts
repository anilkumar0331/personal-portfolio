import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/constants';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

  about = About;
  profileImage = '';

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.profileImage = this.portfolioService.profileImage;
  }

}
