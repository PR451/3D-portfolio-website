import {
    mobile,
    web,
    backend,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    icon,//mindbowser icon
    icon_freelancer,
    movieLens,
    portfolio,
    weatherapp,
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
  ];
  
  const services = [
    {
      title: "FullStack Developer",
      icon: backend,
    },
    {
      title: "Freelance Developer",
      icon: web,
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
      name: "Redux",
      icon: redux,
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
  ];
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "MindBowser InfoSolutions Pvt. Ltd",
      icon: icon,
      iconBg: "#5A270F",
      date: "Dec 2016 - Nov 2019",
      points: [
        "Developed web application for client using ReactJS for front-end and NodeJS for back-end. ",
        "Ensured the performance, quality and responsiveness of web application. Wrote readable, maintainable, and well-structured code and reviewed the team's code.",
        "Improved the performance of the client's React Web Application Lighthouse by 50%, resulting in a better end user experience.",
        "Enhanced the client's App loading time by 2x by using React routing and lazy loading of components.",
        "Produced multiple visual elements of web applications by translating UI design wireframes into code, producing high quality markup using HTML, CSS.",
        "Extended an existing automated test framework to cover new functionality.",
        "Worked on the development and execution of performance testing using automation.",
        "Developed web applications and components, including best software Testing practices.",
      ],
    },
    {
      title: "Freelance Full stack Developer",
      company_name: "Freelance",
      icon: icon_freelancer,
      iconBg: "#5A270F",
      date: "Jan 2023 - Present",
      points: [
        "Accumulated extensive experience in crafting end-to-end solutions for a diverse range of projects.",
        "Leveraging my skills in both front-end and back-end development, I've successfully delivered robust and user-friendly applications.",
        "collaborated closely with clients to understand their specific requirements, ensuring that the final products not only meet but exceed expectations.",
        "My work has involved utilizing various technologies such as HTML, CSS, JavaScript for the front end, and languages like Python, Node.js for the back end.",
        "I have integrated databases and employed frameworks like React and Angular for efficient UI development.",
        "My commitment to staying updated with the latest industry trends and my passion for creating seamless digital experiences have been integral to my success as a freelancer Full Stack Developer.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Movie Lens",
      description:
        " In this project I have created website to search Movie/Series. To get trending items, I am using TMDB APIs. Additionally, users can search for movies and view all TV shows based on genre.",
      tags: [
        {
          name: "react, Javascript, MaterialUI, HTML/CSS",
          color: "white-text-gradient",
        },

      ],
      image: movieLens,
      source_code_link: "https://github.com/PR451/MovieLens",
    },
    {
      name: "Weather App",
      description:
        "It is simple weather app built using ReactJS and OpenWeatherMap to get weather details for particular city. The weather details include Current Temperature, wind speed, humidity %, pressure, sunrise and sunset time, and also weather forecast for next 48 hours",
      tags: [
        {
          name: "react, Javascript, Axios, HTML/CSS",
          color: "white-text-gradient",
        },

      ],
      image: weatherapp,
      source_code_link: "https://github.com/PR451/weather-app",
    },
    {
      name: "Portfolio website",
      description:
        "It is a Portfolio website I created using ReactJs, Css3 and Javascript. Created this website to showcase my skills. This is my first portfolio website. This website shows all my projects, background and Experience.  ",
      tags: [
        {
          name: "ReactJs, Css3, Javascript, HTML/CSS",
          color: "white-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/PR451/portfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };