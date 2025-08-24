import {
  SiOpenai,
  SiTailwindcss,
  FaCss3,
  AiOutlineEdit,
  SiFirebase,
  SiCodemirror,
  FaAws,
  FaReact,
  TbBrandThreejs,
  AiOutlineMail,
  SiFramer,
  SiNextdotjs,
  TbGridDots,
  SiRazorpay,
} from "src/components/icons";

import {cn} from "lib/utils/cn";
export const PROJECTS = [
  {
    title: "VaultX",
    description: `A secure, role-savvy digital bank with Spring-powered armor.`,
    techStack: [
      {name: "Java"},
      {name: "SpringBoot"},
      {name: "SQL"},
      {name: "JPA"},
      {name: "JWT"},
    ],
  },
  {
    title: "SympTrack AI",
    description: `An ML-powered symptom whisperer for early disease prediction.`,
    techStack: [
      {name: "Python"},
      {name: "Streamlit"},
      {name: "ML"},
    ],
  },
  {
    title: "Chainlytics",
    description: `Turning messy supply data into clean decisions.`,
    techStack: [
      {name: "Excel"},
      {name: "Tableau"},
      {name: "Data Analysis"},
    ],
  },
  {
    title: "MallMaster 360",
    description: `Your all-in-one mall universe — powered by Java`,
    techStack: [
      {name: "Java"},
      {name: "Swing"},
      {name: "SQL"},
    ],
  },
];
