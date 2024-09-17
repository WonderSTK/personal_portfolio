import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Web3 Enthusiast",
    icon: <BackendIcon />,
  },
  {
    title: "Open Source Contributor",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C++",
      icon: "/assets/tech/c++.svg",
      link: "https://en.cppreference.com/w/c++",
    },
    {
      name: "Solidity",
      icon: "/assets/tech/solidity.svg",
      link: "https://soliditylang.org/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Refine",
      icon: "/assets/tech/refine-logo.png",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Redux/Redux Toolkit",
      icon: "/assets/tech/redux.svg",
      link: "https://redux.js.org/",
    },
    {
      name: "Ant Design",
      icon: "/assets/tech/ant-design.svg",
      link: "https://ant.design/",
    },
    {
      name: "Ethers.js",
      icon: "/assets/tech/ethers-logo.png",
      link: "https://docs.ethers.org/v5//",
    },
    {
      name: "Material UI",
      icon: "/assets/tech/material-ui.png",
      link: "https://mui.com/material-ui/material-icons/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Vercel",
      icon: "/assets/tech/vercel.png",
      link: "https://vercel.com/",
    },
    {
      name: "Netlify",
      icon: "/assets/tech/netlify.png",
      link: "https://www.netlify.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "NPM",
      icon: "/assets/tech/Npm-logo.png",
      link: "https://www.npmjs.com/",
    },
  ],
  databases: [
    {
      name: "GraphQL",
      icon: "/assets/tech/graphql.svg",
      link: "https://graphql.org/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
  {
    title: "Freelance Front-End Developer",
    company_name: "Upwork",
    icon: "/assets/company/upwork-logo.png", 
    iconBg: "#E6DEDD",
    date: "February 2024 - Present",
    points: [
      "Delivered high-quality front-end development services, specializing in React, Redux, and Next.js to create responsive and dynamic web applications.",
      "Developed visually appealing and user-friendly websites using modern UI/UX design principles with frameworks such as Tailwind CSS, Ant Design, and Material UI.",
      "Collaborated closely with clients to understand project requirements and deliver customized solutions, meeting deadlines and staying within project budgets.",
      "Integrated APIs and handled state management using Redux to ensure seamless data flow and interaction between front-end components.",
      "Kept up with the latest web development trends and technologies, actively exploring Web3 and blockchain-related front-end projects.",
    ],
  },
  {
    title: "Open-Source Contribution",
    company_name: "GirlScript Summer of Code (GSSoC)",
    icon: "/assets/company/gssoc.jpg",
    iconBg: "#E6DEDD",
    date: "Summer 2023",
    points: [
      "Actively participated in GirlScript Summer of Code (GSSoC), a global program promoting participation in open-source projects, by completing tasks across multiple projects.",
      "Gained valuable insights into software development processes, open-source best practices, and effective collaboration within distributed teams.",
      "Plan to continue contributing to open-source projects beyond GSSoC, leveraging acquired skills and experiences to further personal and professional growth in software development and community engagement.",
      "earned certificates for contributions, showcasing commitment to the open-source community.",
    ],
  },
  {
    title: "Open-Source Contribution",
    company_name: "Hacktoberfest 2022| Digital Ocean",
    icon: "/assets/company/digital_ocean.svg",
    iconBg: "#E6DEDD",
    date: "October 2022",
    points: [
      "Actively participated in Hacktoberfest, an annual event promoting open-source contributions, by submitting 29 pull requests to various repositories.",
      "Contributed to projects demonstrating proficiency in [Js/React,Redux-toolkit, solidity] and familiarity with version control systems like Git.",
      "Collaborated with project maintainers and other contributors to implement new features, fix bugs, and improve code quality.",
      "earned swags and certificates for contributions, showcasing commitment to the open-source community.",
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
    name: "Admin Dashboard",
    description:
      "A React-based CRM dashboard built with Refine, featuring secure authentication, real-time data, and a fully functional Kanban board. It includes company management, dynamic charts, and responsive design for seamless use across all devices.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "refine",
        color: "pink-text-gradient",
      },
      {
        name: "ant-design",
        color: "orange-text-gradient",
      },
      {
        name: "graphql",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/admin_dashboard.png",
    source_code_link: "https://github.com/WonderSTK/admin_dashboard",
    deployed_link: "https://admin-dashboard-vosi.vercel.app/",
  },
  {
    name: "GeminiFlix",
    description:
      "GeminiFlix is a movie streaming app that features personalized movie suggestions powered by the Gemini API. Built with React, Redux, Tailwind CSS, and Firebase, it offers user authentication and a responsive design for an engaging and modern movie browsing experience.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react/redux",
        color: "green-text-gradient",
      },
      {
        name: "GEMINI API",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/GeminiFlix.png",
    source_code_link: "https://github.com/WonderSTK/GeminiFlix",
    deployed_link: "https://gemini-flix-beige.vercel.app/browse",
  },
  {
    name: "MyTube",
    description:
      "MyTube is a YouTube clone built with React, Redux, Tailwind CSS, and the YouTube API, that replicates the interface and functionality of YouTube, including smart search suggestions and voice-activated search for easy content discovery. It features API polling for live chat updates and offers a seamless user experience with real-time interaction capabilities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "youtube API",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/MyTube.png",
    source_code_link:
      "https://github.com/WonderSTK/MyTube",
    deployed_link:
      "https://my-tube-xi.vercel.app/",
  },
  
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/WonderSTK",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/mehul-kumar-19209b203",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://twitter.com/im_mehulk",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/im_mehul.k",
  },
];

const heroTexts = [
  "React Developer",
  500,
  "Frontend developer",
  500,
  "Web3 Enthusiast",
  500,
  "Open Source Contributor",
  500,
  "Freelancer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
