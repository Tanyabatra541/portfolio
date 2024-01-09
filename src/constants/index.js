import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  DecisionPointAnalytics,
  Elev8Solar,
  Freelancer,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "project",
    title: "Projects",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Simplify 3x Software Private Limited",
    company_url: "https://www.simplify3x.com/",
    icon: DecisionPointAnalytics,
    iconBg: "#E4E4E4",
    date: "January 2023 - April 2023",
    points: [
      "Created and maintained custom Python packages and APIs, achieving a 25% improvement in access management efficiency. This ensured streamlined operations and enabled efficient collaboration across multiple organizations",
      "Engineered and executed a specialized backend API, facilitating seamless access, management, and safeguarding of individual projects, groups, and repositories for enterprise clients",
      "Resulted in a 30% increase in user accessibility, data privacy, and platform satisfaction",
      "Leveraged Postman extensively for thorough API testing, attaining an 89% success rate to ensure smooth functionality and user-friendly access control",
      "Implemented a structured parent-child class hierarchy, reducing data segregation issues by 80% enhancing organizational data management efficiency"   
    ],
  },
  {
    title: "UI/UX Designer Intern",
    company_name: "IoTAGI - Redefining Things",
    company_url: "#",
    icon: Elev8Solar,
    iconBg: "#E4E4E4",
    date: "June 2022 - August 2023",
    points: [
      "Upgraded website performance, boosting engagement by 20%, reducing bounce rate by 15%, and speeding up page loads by 30% through wire framing",
      "Elevated brand attractiveness by crafting appealing logos and cards, leading to a 10% increase in brand visibility and greater interest with effective design principles",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Qatar Computing Research Institute",
    company_url: "https://www.hbku.edu.qa/en/qcri/about",
    icon: Freelancer,
    iconBg: "#E4E4E4",
    date: "August 2021 - June 2021",
    points: [
      "Orchestrated functional web pages with HTML, CSS, JavaScript, Charts.js, and React.js, boosting real-time engagement by 73%. Improved efficiency in categorizing tweets by 84% using Elasticsearch queries",
      "Crafted an interactive front-end interface for better visualization of false information trends, increasing user engagement and comprehension by 81%. This enhancement refined the analysis of extensive misinformation data-sets",
    ],
  },
];

const projects = [
  {
    name: "Image Editor",
    description:
      "Crafted a sophisticated Java-based Image Processing app, leveraging Object-Oriented Design, MVC architecture, Builder pattern, and Java Swing for collaborative development. Achieved a remarkable 70% reduction in integration time, showcasing precision and sophistication in software engineering. The application features modular image manipulation, setting a new standard for seamless user experiences in image processing.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "swing",
        color: "green-text-gradient",
      },
      {
        name: "junit",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Tanyabatra541/Assignment4_MVC",
  },
  {
    name: "Event Management System",
    description:
      "Implemented a feature-rich social media app, securing a 20% increase in user interaction while ensuring seamless access. Engineered streamlined event processes and an intuitive profile section, enhancing the overall user experience. The app introduces innovative event navigation and user-friendly profile management, delivering an engaging and accessible social media platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://main--wonderful-tarsier-4c5895.netlify.app/#/",
  },
  {
    name: "Handwritten Equation Solver ",
    description:
      "Created a web app for solving handwritten math equations with an impressive 93.5% accuracy. Developed using Python, HTML, and JavaScript, the application includes automated equation detection, significantly enhancing user convenience. This impactful solution caters to math enthusiasts and learners, providing a user-friendly platform for efficient problem-solving and learning.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Tanyabatra541/Handwritten_Equation_Solving_System",
  },
];

export { services, technologies, experiences, projects };
