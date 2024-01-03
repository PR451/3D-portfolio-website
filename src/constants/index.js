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
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "FullStack Developer",
      icon: backend,
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
      title: "Full stack Developer",
      company_name: "MindBowser InfoSolutions Pvt. Ltd",
      icon: meta,
      iconBg: "#E6DEDD",
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
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "MaterialUI",
          color: "pink-text-gradient",
        },
        {
            name: "HTML/CSS",
            color: "pink-text-gradient",
        },

      ],
      image: carrent,
      source_code_link: "https://github.com/PR451/MovieLens",
    },
    {
      name: "Weather App",
      description:
        "It is simple weather app built using ReactJS and OpenWeatherMap to get weather details for particular city. The weather details include Current Temperature, wind speed, humidity %, pressure, sunrise and sunset time, and also weather forecast for next 48 hours",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Axios",
          color: "pink-text-gradient",
        },
        {
            name: "HTML/CSS",
            color: "pink-text-gradient",
        },

      ],
      image: jobit,
      source_code_link: "https://github.com/PR451/weather-app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };