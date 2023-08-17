import {
  SkillStackProps,
  ContactLinkProps,
  aboutContentProps,
} from "../../Types";

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

export const aboutContent: aboutContentProps = [
  "I'm Robbie, a 34 year old web developer with an emphasis on React with Javascript and some experience using Typescript. I come from a background in engineering working with CAD and estimating for prototype/production in a machining & welding environment. While managing the engineering team, I initiated multiple projects to streamline our procedures and enlisted those with a programming background to increase efficiency in the department.",
  "I began coding at the beginning of 2020 and enrolled in a coding bootcamp. I started learning HTML, CSS, and Javascript on my own via Free Code Camp, but COVID-19 put an end to all in-person bootcamps.",
  "Fast forward to the summer of 2022... My wife and I moved to Sweden and I was looking for a new job. It was at this time I decided now was the time to commit to following the programming path I started.",
  "I attempted to learn coding at a technical institute, but most schools require a full year of Swedish language school. I decided I could better utilize that time to teach myself programming with online resources instead. Since I began in August 2022, I have worked with HTML, CSS, Javascript, Typescript, React, C#, .NET, Node.JS, SQL, and MongoDB.",
];

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
  title: "Versions",
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
