import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import sastra from "../assets/sastra-logo.png"
import ub from "../assets/ub-logo.png"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. As a recent graduate, I am actively seeking new opportunities to apply my skills and continue growing in the field of software development.`;

export const EXPERIENCES = [
  {
    year: "July 2020 - July 2022",
    role: "Senior Software Engineer",
    company: "Infosys Limited",
    description: `Developed a tourism portal for Infosys employees using AWS services, React.js with hooks and memoization, and deployed applications with Docker and Kubernetes, enhancing processing efficiency and scalability.`,
    technologies: ["Javascript", "React.js", "Docker", "Kubernetes", ],
  },
  {
    year: "July 2019 - July 2021",
    role: "Software Engineer",
    company: "Infosys Limited",
    description: `Developed an e-commerce website for Infosys using Node.js, Express.js, and MVC architecture, optimized API performance with ES6+, SASS, and async/await, and deployed microservices using Jenkins and Kubernetes, enhancing user engagement and scalability.

`,
    technologies: ["Node.js", "Express.js", "SASS", "React.js", "Jenkins","3o4ubfiwerbf" ],
  },
];

export const PROJECTS = [
  {
    title: "UB Event Scheduler",
    image: project1,
    description:
      "A scalable event scheduler with real-time data communication, efficient state management using Redux, and a responsive UI built with Next.js, Ant Design, and PostgreSQL for backend management.",
    technologies: ["Next.js", "JavaScript", "Redux", "Ant Design", "PostgreSQL", "WebSockets"],
  },
  {
    title: "Lexicon Leap” (English Learning Web Application)",
    image: project2,
    description:
      "An English learning web application with personalized vocabulary features, responsive design using Material-UI, built with the MERN stack and Python, and automated deployment via CI/CD pipelines.",
    technologies: ["Python","React.js", "Node.js", "Material-UI", "MongoDB", ],
  },
];


export const EDUCATION = [{
    degree: "Master of Computer Science",
    institution: "University at Buffalo",
    year: "2022",
    logo: ub
  },
  {
    degree: "Bachelor of Electroincs and Communication Engineering",
    institution: "SASTRA University",
    year: "2019",
    logo: sastra, 
  },
  
  
];