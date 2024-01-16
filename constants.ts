// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Marcin Leszek",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience and server using modern frontend and backend architecture.",
  siteUrl: "https://ayushsingh.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I optimize Frontend and Backend",
  "I design and develop motion",
];

export const EMAIL = "not allowed in upwork";

export const SOCIAL_LINKS = {
  // linkedin: "https://www.linkedin.com/in/alphaayush/",
  // github: "https://github.com/ayush013",
  // medium: "https://alphaayush.medium.com/",
  // instagram: "https://www.instagram.com/alphaayush/",
  // facebook: "https://www.facebook.com/ayush013",
  // dribbble: "https://dribbble.com/alphaayush",
  // behance: "https://www.behance.net/alphaayush/",
  // twitter: "https://twitter.com/ayush013",
  // topmate: "https://www.topmate.io/alphaayush/",
  linkedin: "#",
  github: "#",
  medium: "#",
  instagram: "#",
  facebook: "#",
  dribbble: "#",
  behance: "#",
  twitter: "#",
  topmate: "#",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Design Landing Page",
    image: "/projects/pr1.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Desined a landing page of react theme",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "d-themes.com/react/porto",
    tech: ["figma"],
  },
  {
    name: "SEO Website",
    image: "/projects/pr9.png",
    blurImage: "/projects/blur/orchestrator-blur.jpg",
    description: "Built a perfect SEO website",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://nova-speaker.webflow.io/",
    tech: ["react"],
  },
  {
    name: "Publishing React Theme as a Team Leader",
    image: "/projects/pr2.png",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Led a Team to publish a React Theme, worked as a backend developer.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "d-themes.com/react/riode",
    tech: ["react", "next"],
  },
  {
    name: "Build a Website Frontend with Wonderful animation",
    image: "/projects/pr3.png",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Plant-based protection for longer-lasting produce.",
    gradient: ["#245B57", "#004741"],
    url: "https://www.makersfund.com/",
    tech: ["figma", "react", "gsap", "next"],
  },
  {
    name: "Build a Full Site with Orchard Core, .Net Framework",
    image: "/projects/pr4.png",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "Built the application from zero to production 🚀",
    gradient: ["#003052", "#167187"],
    url: "https://dayvo.com/",
    tech: ["tailwind", "figma"],
  },
  {
    name: "Build a Attractive animatin Site with MEVN Stack",
    image: "/projects/pr5.png",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "NPM Package for Quill JS uploads from Vue, Gsap",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://www.wundermanthompson.com/",
    tech: ["npm", "vue", "typescript", 'gsap'],
  },
  {
    name: "Design and Develop Backend of a MadeWithVue",
    image: "/projects/pr6.png",
    blurImage: "/projects/blur/akgec-blur.jpg",
    description: "Contributed in overall backend design and development",
    gradient: ["#5E4C06", "#746528"],
    url: "https://madewithvuejs.com/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Dark mode site design and development",
    image: "/projects/pr7.png",
    blurImage: "/projects/blur/alpha-blur.jpg",
    description: "Designed and developed the platform with Angular, Javascript, Express.js, MongoDB",
    gradient: ["#172839", "#334659"],
    url: "https://www.avocadosys.com/",
    tech: ["illustrator", "javascript", "angular"],
  },
  {
    name: "Chat App",
    image: "/projects/pr8.png",
    blurImage: "/projects/blur/farewell18-blur.jpg",
    description: "Chat Gpt Open AI Implementation",
    gradient: ["#142D46", "#2E4964"],
    url: "https://farewell18.ayushsingh.net/",
    tech: ["javascript", "html", "css"],
  }
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  backend: ["laravel", "nestjs", "golang", "python", "netframework"],
  database: ["mongodb", "mysql", "postgresql"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [

  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Leader of a Web Developer Team",
    size: ItemSize.SMALL,
    subtitle:
      "Manage team, worked as a mockup designer and backend developer",
    image: "/timeline/octanner.svg",
    slideImage: "/timeline/hotstar.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "FullStack Developer at itCraft, US IT Company",
    size: ItemSize.SMALL,
    subtitle:
      "Contributed to Server driven Backend for powering experiences @ Flipkart Wholesale 😎",
    image: "/timeline/flipkarts.png",
    slideImage: "/timeline/flipkart.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Developer at itCraft, US IT Company",
    size: ItemSize.SMALL,
    subtitle:
      "Built solutions for employee engagement, productivity and performance 🎯",
    image: "/timeline/flipkarts.png",
    slideImage: "/timeline/flipkart.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
