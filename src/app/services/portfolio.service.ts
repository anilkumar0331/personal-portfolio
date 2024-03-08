import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  about = "I am a Full Stack Web Developer with expertise in multiple programming languages such as Java, Python, R, and PHP, allowing me to handle a wide range of projects. Additionally, my proficiency in web technologies including HTML, CSS3, Bootstrap, JavaScript, and TypeScript enables me to create dynamic and responsive web applications. I am also well-versed in popular frameworks like Angular, Spring Boot, and Express.js, which facilitate efficient development and deployment. Furthermore, my knowledge of databases such as MySQL and MongoDB ensures seamless data management, while my proficiency in version control using Git helps in collaborative development. With tools like Visual Studio Code, Eclipse, STS, Postman, MySQL Workbench, Spyder, Jupyter, and RStudio, I can efficiently work with various software development environments and carry out testing and debugging. Lastly, my experience with project management platforms like Rally and Jira allows me to effectively plan and organize projects, ensuring their successful completion."

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

  exprienceData: any = [
    {
      id: 3,
      company: 'Cognizant',
      location: 'Hyderabad, India',
      timeline: 'December 2020 - July 2022',
      role: 'Programmer Analyst',
      work: `
      Led UI development from analysis to testing within the SDLC framework, including creating specifications, design documents, test cases, and technical documentation, for 2 major projects and 1 mini project .

      Designed responsive web interfaces utilizing HTML, CSS, JavaScript, and Angular, resulting in a 40% increase in user engagement and a 30% improvement in page load times for a website with over 100,000 monthly visitors .
      
      Created unit test cases with Jasmine and Karma, coupled with extensive knowledge of the DOM, to optimize application performance, achieving a 25% reduction in load times for complex applications .
      
      Established backend services utilizing Java and Spring Boot to create RESTful APIs, and deployed them using Swagger for 10+ services, enhancing system integration and efficiency .
      
      Managed code collaboration using GitHub and streamlined project workflows with Rally and Jira for effective team coordination, reducing project delivery times by 20% .
      
      Collaborated on deploying applications to AWS and Azure, ensuring scalability and high availability with a focus on cloud-based solution resilience, leading to a 99.9% uptime for critical applications.
      `
    },
  ]

  projectDetails: any = [
    {
      id: 1,
      title: 'Food Delivery Application',
      description: '',
      img: 'assets/images/food-delivery-app-cover.jpg',
      demoUrl: 'https://anilkumar0331.github.io/Omnifood-delivery/',
      codeUrl: 'https://github.com/anilkumar0331/Omnifood-delivery'
    },
    {
      id: 2,
      title: 'Online Shopping Application',
      description: '',
      img: 'assets/images/online-shopping-app-cover.webp',
      demoUrl: 'https://anilkumar0331.github.io/estore-online-shopping/',
      codeUrl: 'https://github.com/anilkumar0331/estore-online-shopping'
    },
    {
      id: 3,
      title: 'Bus Ticket Booking Application',
      description: '',
      img: 'assets/images/bus-booking-app-cover.png',
      demoUrl: 'https://anilkumar0331.github.io/Bus-Booking-App/',
      codeUrl: 'https://github.com/anilkumar0331/Bus-Booking-App'
    },
  ];

  constructor() { }

  skills(): Observable<any> {
    return this.skillsData;
  }

  exprience(): Observable<any> {
    return this.exprienceData;
  }

  getProjectDetails(): Observable<any> {
    return this.projectDetails;
  }
}

