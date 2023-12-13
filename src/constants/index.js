import {
  mobile,
  backend,
  creator,
  web,
  callour,
  sds,
  srt,
  altek,
  linkedin,
  github,
  instagram,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  websrt,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experiences",
    title: "Experiences",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const socials = [
  {
    title: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/saujanashafi/",
  },
  {
    title: "Github",
    icon: github,
    link: "https://github.com/Shafnaa",
  },
  {
    title: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/saujanashafi/",
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Callour Studio",
    icon: callour,
    iconBg: "#1227e2",
    date: "June 2023 - Sep 2023",
    points: [
      "Crafting pixel-perfect products with precision and attention to detail.",
      "Utilizing Webflow technologies to develop tailored websites that align seamlessly with client requirements.",
      "Customizing WordPress themes to efficiently manage client-specific content types and requirements.",
    ],
  },
];

const organizational = [
  {
    title: "Academic Staff",
    company_name: "Soedirman Digital School",
    icon: sds,
    iconBg: "#0b1225",
    date: "June 2023 - October 2023",
    points: [
      "Provided tutoring to fellow committee members in Software Engineering, focusing on the intricacies of Web Development.",
      "Offered assistance and guidance to Software Engineering students in their learning journeys.",
      "Oversaw and guided students in collaborative teamwork for their final projects.",
    ],
  },
  {
    title: "Creative Media Staff",
    company_name: "Soedirman",
    icon: srt,
    iconBg: "#0b1225",
    date: "March 2023 - Present",
    points: [
      "Overseeing content creation for social media platforms and websites.",
      "Delivered an exceptional 90% boost in Instagram engagement during Q3 2023.",
      "Conceptualize, design, and produce a wide range of visual materials, including posters, flyers, banners, social media graphics, and website assets.",
    ],
  },
  {
    title: "TTL Division Staff",
    company_name: "Aliansi Laboratorium Teknik Elektro",
    icon: altek,
    iconBg: "#fff",
    date: "January 2023 - Present",
    points: [
      "Supervised and recruited lab work assistants while coordinating various laboratory requirements.",
      "Managed the Energy Conversion Practicum, overseeing its successful execution and outcomes.",
    ],
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
    name: "Redux Toolkit",
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
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "Soedirman Robotic Team",
    description:
      "An organization website that uses WordPress as a Headless CMS using React and GraphQL.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "GraphQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: websrt,
    source_code_link: "https://github.com/Shafnaa/srt-v2",
  },
];

export {
  services,
  socials,
  experiences,
  organizational,
  technologies,
  projects,
};
