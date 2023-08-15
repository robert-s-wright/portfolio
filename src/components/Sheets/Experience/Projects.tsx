import { ProjectProps } from "../../Types";

export const projects: ProjectProps[] = [
  {
    title: "Rebelz Sizing Guide",
    subTitle:
      "An application to gather customer feedback and determine sizing differences between brands based on customer measurements.",
    imgLinks: [
      "./assets/Experience/sizingGuideDashboard.PNG",
      // "./assets/Experience/sizingGuideAdminPanel.PNG",
    ],
    description:
      " Utilizes a Javascript/React frontend, .NET backend, and SQL database. This was my first project creating a backend with .NET, and it was a great lesson in utilizing an ORM and best practices writing API endpoints. The backend consists of Domain, Application, Infrastructure, and Presentation layers for separation of concerns.  ",
    languages: ["Javascript", "React", "MUI", "C#", "Dapper", "SQL"],
    frontendRepoLink:
      "https://github.com/robert-s-wright/rebelz-sizing-guide-interface",
    backendRepoLink: "https://github.com/robert-s-wright/rebelz-sizing-guide",
  },
  {
    title: "BJJ Training App",
    subTitle: "An application to schedule training sessions for BJJ clubs.",
    imgLinks: ["./assets/Experience/monthview.PNG"],
    description:
      " Uses a React (Javascript) frontend, Node.JS backend, and MongoDB. This was my first project using MongoDB, Node.JS and taught me about using MongoDB drivers in Node.JS to perform CRUD operations. The Node.JS backend follows MVC architecture.",
    languages: ["Javascript", "React", "MUI", "Node.js", "MongoDB"],
    frontendRepoLink: "https://github.com/robert-s-wright/bjj-calendar-app",
    backendRepoLink: "https://github.com/robert-s-wright/bjj-api",
  },
  {
    title: "Hilti Website",
    subTitle: "A multi-page website for my gym.",
    imgLinks: ["./assets/Experience/hiltihome.PNG"],
    description:
      "This was the first website I created. It utilizes, HTML, CSS, and Javascript (no frameworks or libraries). This taught me a lot about responsive design and utilizing JS to implement extra functionality like an image carousel and responsive navigation panel.",
    languages: ["HTML", "CSS", "Javascript"],
    link: "https://github.com/robert-s-wright/hilti-bjj-eskilstuna",
    frontendRepoLink: "https://github.com/robert-s-wright/hilti-bjj-eskilstuna",
  },
];
