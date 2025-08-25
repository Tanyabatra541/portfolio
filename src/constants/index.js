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
    title: "Software Engineer",
    company_name: "Dispatch Technologies",
    company_url: "https://dispatch.me/",
    icon: DecisionPointAnalytics,
    iconBg: "#E4E4E4",
    date: "January 2025 - June 2025",
    points: [
      "Engineered core enhancements to Dispatch Technologies' Service Orchestration Platform, optimizing job management, service provider allocation, and mobile workflow automation through scalable React, React Native, Ruby on Rails, and Golang solutions",
      "Redesigned the job acceptance process by implementing a modal-driven workflow with dynamic UI updates and API synchronization, enabling real-time approvals, reducing code redundancy by 30%, and improving operational efficiency",
      "Developed an automated photo-naming system in React Native for technician service forms in a mobile app (iOS & Android), leveraging logic-based UI control to assign labels or timestamps, minimizing naming inconsistencies across 95% of uploads",
      "Engineered two GitHub Actions workflows — one for weekly Terraform drift checks across stacks (EKS, CloudFront, WAF) with Slack notifications, and another to trigger Docker image updates automatically to the latest version",
      "Led x86 to ARM migration efforts for multiple production services and implemented KEDA-based event-driven auto-scaling across key workloads, enhancing performance efficiency and reducing compute overhead in containerized environments",
    ],
  },
  {
    title: "Full stack Developer Intern",
    company_name: "Soma Reality",
    company_url: "https://www.simplify3x.com/",
    icon: DecisionPointAnalytics,
    iconBg: "#E4E4E4",
    date: "May 2024 - Present",
    points: [
      "Spearheading key functionalities for the iOS Halfgram app, utilizing React Native for the front end, Node.js for the backend, and Firebase for real-time database management and authentication",
      "Engineering advanced audio recording and posting features using react-native-ffmpeg for high-quality processing and integrating Firebase Storage for seamless data management",
      "Utilizing Google Cloud Speech-to-Text API to transcribe user recordings and develop a recommendation system using NLP libraries, expected to improve transcription accuracy by 85% and title relevance by 90%",
      "Revamping the UI and introducing new screens for the iOS mobile app, utilizing React Native components and Styling Libraries like React Native Paper and React Native Elements, projected to enhance user retention by 40%",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Simplify 3x Software Private Limited",
    company_url: "https://www.simplify3x.com/",
    icon: DecisionPointAnalytics,
    iconBg: "#E4E4E4",
    date: "January 2023 - April 2023",
    points: [
      "Designed and implemented DevOpsArk, a Django and React-based platform for optimization of Dev Ops pipelines through dynamic content delivery and real-time updates via WebSocket, significantly improving operational efficiency.",
      "Developed robust Python REST APIs secured with JWT and utilizing JSON for data serialization, leading to a 40% reduction in unauthorized access and bolstering platform scalability with Docker Containerization and automated CI/CD pipelines",
      "Created an innovative Role-Based Access Control System using Flask-RBAC and SQLAlchemy, which streamlined user permissions and access management, setting a new standard in access control.",
      "Enhanced performance improvements and search capabilities by 30% with Kafka and Elasticsearch integration, reducing manual oversight and manual documentation",
      "Optimized deployment and infrastructure management workflows using GitLab CI and Kubernetes, significantly enhancing deployment frequency and ensuring system stability through advanced automation and orchestration techniques.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Qatar Computing Research Institute",
    company_url: "https://www.hbku.edu.qa/en/qcri/about",
    icon: Freelancer,
    iconBg: "#E4E4E4",
    date: "May 2021 - July 2021",
    points: [
      "Developed a progressive web app (PWA) for a multilingual fake news detection product using Angularjs, and GraphQL, enhancing SEO and user interaction cross-functionally for 10,000+ articles in 4+ languages, demonstrating problem-solving skills",
      "Boosted user engagement from 50% to 86% through interactive ChartsJS visualizations within a React Native framework, leveraging Bootstrap and Tailwind CSS for responsive, stylish design to visualize the fake news detected through graphs",
      "Tripled data processing execution with Elastic Search for scalable searches, ensuring solutions to quick analysis of disinformation",
      "Enhanced content analysis precision with the Tanbih API, employing Node for a scalable backend and modern web technologies like HTML5, CSS3, and JavaScript ES6+ for a robust, intuitive front end experience for the fast-paced market",
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
    source_code_link:
      "https://github.com/Tanyabatra541/Handwritten_Equation_Solving_System",
  },
  {
    name: "Notion Clone",
    description:
      "Developed a full-stack web application using MongoDB for data storage, Express for middleware, Node.js for backend CRUD, and TypeScript for the frontend, integrating Bootstrap for styling and Figma for UI/UX design. Secured with OAuth authentication, implemented OTP using Nodemailer, and integrated external APIs like Google Analytics",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://notion-clone-inky-one.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
