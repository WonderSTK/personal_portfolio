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
    title: "Frontend Engineer",
    icon: <FrontendIcon />,
  },
  {
    title: "React Specialist",
    icon: <FullStackIcon />,
  },
  {
    title: "Next.js Developer",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Full Stack Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Web3 Developer",
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
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "SQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
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
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Vue.js",
      icon: "/assets/tech/javascript.svg", // Using JS icon as placeholder
      link: "https://vuejs.org/",
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
      name: "Zustand",
      icon: "/assets/tech/zustand.png",
      link: "https://zustand-demo.pmnd.rs/",
    },
    {
      name: "Tanstack Query",
      icon: "/assets/tech/tanstack-query.png",
      link: "https://tanstack.com/query/latest",
    },
    {
      name: "Framer Motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "Ant Design",
      icon: "/assets/tech/ant-design.svg",
      link: "https://ant.design/",
    },
    {
      name: "Material UI",
      icon: "/assets/tech/material-ui.png",
      link: "https://mui.com/material-ui/material-icons/",
    },
    {
      name: "DaisyUI",
      icon: "/assets/tech/tailwindcss.svg", // Using Tailwind icon as DaisyUI is Tailwind-based
      link: "https://daisyui.com/",
    },
    {
      name: "Headless UI",
      icon: "/assets/tech/headlessui.png",
      link: "https://headlessui.com/",
    },
    {
      name: "Radix UI",
      icon: "/assets/tech/radix-ui.png",
      link: "https://www.radix-ui.com/",
    },
    {
      name: "Pinia",
      icon: "/assets/tech/javascript.svg", // Using JS icon as placeholder
      link: "https://pinia.vuejs.org/",
    },
    {
      name: "Ethers.js",
      icon: "/assets/tech/ethers-logo.png",
      link: "https://docs.ethers.org/v5/",
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
    {
      name: "AWS",
      icon: "/assets/tech/aws.png",
      link: "https://aws.amazon.com/",
    },
    {
      name: "Sentry",
      icon: "/assets/tech/sentry.svg",
      link: "https://sentry.io/",
    },
    {
      name: "Mixpanel",
      icon: "/assets/tech/javascript.svg", // Using JS icon as placeholder
      link: "https://mixpanel.com/",
    },
    {
      name: "Stripe",
      icon: "/assets/tech/stripe.png",
      link: "https://stripe.com/",
    },
    {
      name: "Privy.io",
      icon: "/assets/tech/privy.jpg",
      link: "https://privy.io/",
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
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "GraphQL",
      icon: "/assets/tech/graphql.svg",
      link: "https://graphql.org/",
    },
    {
      name: "Supabase",
      icon: "/assets/tech/supabase.png",
      link: "https://supabase.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "Redis",
      icon: "/assets/tech/redis.png",
      link: "https://redis.io/",
    },
    {
      name: "Mongoose",
      icon: "/assets/tech/mongodb.svg", // Using MongoDB icon (Mongoose is MongoDB ODM)
      link: "https://mongoosejs.com/",
    },
  ],
};

const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "Proof of Skill",
    icon: "/assets/company/proofofskill-logo.svg", 
    iconBg: "#E6DEDD",
    date: "Mar 2025 – Jul 2025",
    points: [
      "Designed and implemented a new UI for Skill.CV based on Figma, ensuring pixel-perfect responsive layout and UX improvements.",
      "Refactored architecture using useRef and function-based flow—boosted performance by 40%.",
      "Enhanced user completion rate via performance and UX optimization strategies.",
      "Integrated Sentry for logging console, API, and user activity for better debugging and monitoring.",
      "Added real-time heatmap filter logic for analytics and data visualization.",
      "Worked closely with designers and backend teams to align UI implementation with business goals.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Naga Soft Labs Pvt. Ltd.",
    icon: "/assets/company/nagasoft-logo.svg", 
    iconBg: "#E6DEDD",
    date: "Aug 2024 – Mar 2025",
    points: [
      "Built full backend system using Node.js, Express.js, and SQL ensuring high performance and scalability.",
      "Fixed critical bugs and made UI enhancements for a social media platform, improving user experience.",
      "Integrated payment gateways for seamless transactions and enhanced e-commerce functionality.",
      "Developed responsive frontend components using React and Vue.js with modern state management.",
      "Collaborated with cross-functional teams to deliver feature-rich applications on time.",
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
    name: "Resume Genie",
    description:
      "Resume Genie is a full-stack app that helps users create professional resumes with AI. It features real-time preview, customization, and secure authentication via Clerk. Built with Next.js, Node.js, and MongoDB, it integrates the Gemini API for AI resume generation and TailwindCSS for responsive design, making resume creation easy and efficient.",
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
        name: "Next.js 14",
        color: "pink-text-gradient",
      },
      {
        name: "Gemini API",
        color: "orange-text-gradient",
      },
      {
        name: "Mongo DB || Node js",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/resume_genie.png",
    source_code_link: "https://github.com/WonderSTK/Resume-Genie",
    deployed_link: "https://resume-genie-iiy3.vercel.app/",
  },
  {
    name: "Formify AI",
    description:
      "Formify AI is an AI-powered form-building app that lets you create customizable forms effortlessly. With features like secure authentication, data export to Excel, and full form customization, Formify AI simplifies the form creation process for everyone.",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "next js",
        color: "green-text-gradient",
      },
      {
        name: "rizzle ORM",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "orange-text-gradient",
      },
      {
        name: "DaisyUI",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/formify_ai.png",
    source_code_link: "https://github.com/WonderSTK/Formify_AI",
    deployed_link: "https://formify-ai-ypp7.vercel.app/",
  },
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
  {
    name: "KharchaRupaiya",
    description:
      "KharchaRupaiya is your go-to expense tracker, making it simple to log, categorize, and monitor your spending. With an intuitive interface and real-time insights, it helps you stay on top of your finances, budget wisely, and achieve your financial goals. Take control of your expenses and manage your money effectively with KharchaRupaiya.",
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
        name: "React DOM",
        color: "pink-text-gradient",
      },
      {
        name: "Web Vitals",
        color: "orange-text-gradient",
      },
      
    ],
    image: "/assets/projects/kharcharupaiya.png",
    source_code_link: "https://github.com/WonderSTK/KharchaRupaiya",
    deployed_link: "https://kharcha-rupaiya.vercel.app/",
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
