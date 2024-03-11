import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  about = "Hi there! I'm a Full Stack Web Developer with a passion for crafting engaging digital experiences. My expertise spans a variety of programming languages, including Java, Python, R, and PHP, allowing me to tackle a wide range of projects with ease. I excel at creating dynamic and responsive web applications, thanks to my in-depth knowledge of HTML, CSS3, Bootstrap, JavaScript, and TypeScript. Leveraging powerful frameworks like Angular, Spring Boot, and Express.js, alongside essential tools such as Visual Studio Code, Eclipse, and Postman, I streamline development processes to deliver high-quality solutions efficiently. My experience with databases like MySQL and MongoDB ensures robust backend support for complex applications, while my proficiency in Git facilitates smooth collaboration within team environments."
  about2 = "Driven by a commitment to excellence and a relentless pursuit of innovation, I approach each project with a unique blend of technical skill and creative vision. My ability to manage projects effectively is enhanced by my familiarity with platforms like Rally and Jira, ensuring timely completion and success. Whether you're looking to bring a new idea to life or seeking to elevate your existing digital presence, I'm here to help you achieve your goals. Let's connect and explore how we can work together to create something exceptional."

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

  profileImage = 'assets/images/portfolio-profile-photo.jpg'

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

