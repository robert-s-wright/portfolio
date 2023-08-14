import { SkillStackProps, ContactLinkProps } from "../../Types";

import { SiCsharp, SiDotnet, SiMui } from "react-icons/si";
import {
  BiLogoCss3,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import { TbSql } from "react-icons/tb";

export const backendSkills: SkillStackProps = {
  title: "Backend",
  skillsArray: [
    {
      Icon: SiCsharp,
      link: "https://dotnet.microsoft.com/languages/csharp",
      skillName: "C Sharp",
    },
    {
      Icon: SiDotnet,
      link: "https://dotnet.microsoft.com/en-us/",
      skillName: ".Net",
    },
    {
      Icon: BiLogoNodejs,
      link: "https://nodejs.org",
      skillName: "Node.JS",
    },
  ],
};

export const frontendSkills: SkillStackProps = {
  title: "Frontend",
  skillsArray: [
    {
      Icon: BiLogoHtml5,
      link: "https://html.com/html5/",
      skillName: "HTML",
    },
    {
      Icon: BiLogoCss3,
      link: "https://developer.mozilla.org/docs/Web/CSS",
      skillName: "CSS",
    },
    {
      Icon: BiLogoJavascript,
      link: "https://www.javascript.com/",
      skillName: "Javascript",
    },
    {
      Icon: BiLogoTypescript,
      link: "https://www.typescriptlang.org/",
      skillName: "Typescript",
    },
    {
      Icon: BiLogoReact,
      link: "https://react.dev/",
      skillName: "React",
    },
    {
      Icon: SiMui,
      link: "https://mui.com/",
      skillName: "Material UI",
    },
  ],
};

export const dataSkills: SkillStackProps = {
  title: "Data",
  skillsArray: [
    {
      Icon: TbSql,
      link: "https://www.microsoft.com/sql-server/",
      skillName: "SQL",
    },
    {
      Icon: BiLogoMongodb,
      link: "https://www.mongodb.com/",
      skillName: "MongoDB",
    },
  ],
};

export const versionSkills: SkillStackProps = {
  title: "Version Control",
  skillsArray: [
    {
      Icon: BiLogoGithub,
      link: "https://github.com/",
      skillName: "GitHub",
    },
  ],
};

export const contactLinks: ContactLinkProps = [
  { title: "GitHub", link: "https://github.com/robert-s-wright" },
  { title: "LinkedIn", link: "https://linkedin.com/in/robertstephenwright" },
  { title: "rs.wrightdev@gmail.com", link: "mailto:rs.wrightdev@gmail.com" },
];
