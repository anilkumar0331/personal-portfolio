import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  skillsData: any = [
    { 'id': '1', 'skill': 'HTML', 'progress': '100%' },
    { 'id': '2', 'skill': 'CSS', 'progress': '90%' },
    { 'id': '3', 'skill': 'BOOTSTRAP', 'progress': '90%' },
    { 'id': '4', 'skill': 'JAVASCRIPT', 'progress': '80%' },
    { 'id': '5', 'skill': 'TYPESCRIPT', 'progress': '80%' },
    { 'id': '6', 'skill': 'EXPRESSJS', 'progress': '75%' },
    { 'id': '7', 'skill': 'ANGULAR', 'progress': '80%' },
    { 'id': '8', 'skill': 'GIT', 'progress': '75%' },
    { 'id': '9', 'skill': 'JAVA', 'progress': '80%' },
    { 'id': '10', 'skill': 'SPRING BOOT', 'progress': '80%' },
    { 'id': '11', 'skill': 'PHP', 'progress': '70%' },
    { 'id': '12', 'skill': 'PYTHON', 'progress': '70%' },
    { 'id': '13', 'skill': 'R', 'progress': '70%' },
    { 'id': '14', 'skill': 'SQL/MYSQL', 'progress': '80%' },
    { 'id': '15', 'skill': 'NOSQL/MONGODB', 'progress': '80%' },
    { 'id': '16', 'skill': 'JIRA/RALLY', 'progress': '80%' }
  ];

  profileImage = 'assets/images/portfolio-profile-photo.jpg'

  projectDetails: any = {
    webAppProjects: [
      {
        id: 1,
        title: 'Personal Portfolio Application',
        description: 'Showcasing skills, work experience, projects, and more. Developed with Angular for a dynamic user experience.',
        img: 'assets/images/personal-portfolio-app-cover.jpg',
        demoUrl: 'https://anilkumar0331.github.io/Personal-Portfolio/',
        codeUrl: 'https://github.com/anilkumar0331/Personal-Portfolio'
      },
      {
        id: 2,
        title: 'Omnifood Delivery Application',
        description: 'A responsive single-page web application for seamless food delivery. Developed with HTML, CSS, and JavaScript.',
        img: 'assets/images/food-delivery-app-cover.jpg',
        demoUrl: 'https://anilkumar0331.github.io/Omnifood-delivery/',
        codeUrl: 'https://github.com/anilkumar0331/Omnifood-delivery'
      },
      {
        id: 3,
        title: 'Online Shopping Application',
        description: 'A single-page web application for easy browsing and purchasing. Developed with HTML and CSS.',
        img: 'assets/images/online-shopping-app-cover.webp',
        demoUrl: 'https://anilkumar0331.github.io/estore-online-shopping/',
        codeUrl: 'https://github.com/anilkumar0331/estore-online-shopping'
      },
      {
        id: 4,
        title: 'Bus Ticket Booking Application',
        description: 'A responsive web application for Swift, hassle-free reservations. Developed with Express.js, Angular, and MongoDB.',
        img: 'assets/images/bus-booking-app-cover.png',
        demoUrl: 'https://anilkumar0331.github.io/Bus-Booking-App/',
        codeUrl: 'https://github.com/anilkumar0331/Bus-Booking-App'
      }
    ],
    mlProjects: [
      {
        id: 1,
        title: 'Large Language Model Behaviour Pattern',
        description: 'Examined Large Language Models to understand hallucinations and inconsistencies in their responses.',
        img: 'assets/images/llm-behaviour-pattern-cover.jpg',
        demoUrl: 'https://github.com/anilkumar0331/LLM-Behaviour-Pattern',
        codeUrl: 'https://github.com/anilkumar0331/LLM-Behaviour-Pattern'
      },
      {
        id: 2,
        title: 'Bank Customer Churn Prediction',
        description: 'Regression analysis on BankChurner data to help banks reduce customer churn and foster lasting relationships.',
        img: 'assets/images/churn-prediction-cover.png',
        demoUrl: 'https://github.com/anilkumar0331/churn-prediction-in-banking',
        codeUrl: 'https://github.com/anilkumar0331/churn-prediction-in-banking'
      },
      {
        id: 3,
        title: 'Bad Graph vs Good Graph',
        description: 'Addresses data misrepresentation by correcting misleading visualizations using R and its libraries.',
        img: 'assets/images/graph-redesign-cover.webp',
        demoUrl: 'https://github.com/anilkumar0331/bad-graph-redesign',
        codeUrl: 'https://github.com/anilkumar0331/bad-graph-redesign'
      },
      {
        id: 4,
        title: 'Exploration Of Udemy Courses Growth',
        description: "Analyzed Udemy's data to aid students in selecting courses based on interests, cost, duration, popularity, and ratings.",
        img: 'assets/images/udemy-growth-cover.jpg',
        demoUrl: 'https://github.com/anilkumar0331/udemy-growth-of-courses',
        codeUrl: 'https://github.com/anilkumar0331/udemy-growth-of-courses'
      }
    ]
  };

  constructor() { }

  skills(): Observable<any> {
    return this.skillsData;
  }

  getProjectDetails(): Observable<any> {
    return this.projectDetails;
  }
}

