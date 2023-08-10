import { SkillStackProps } from "../../Types";

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
    },
    { Icon: SiDotnet, link: "https://dotnet.microsoft.com/en-us/" },
    {
      Icon: BiLogoNodejs,
      link: "https://nodejs.org",
    },
  ],
};

export const frontendSkills: SkillStackProps = {
  title: "Frontend",
  skillsArray: [
    {
      Icon: BiLogoHtml5,
      link: "https://html.com/html5/",
    },
    {
      Icon: BiLogoCss3,
      link: "https://developer.mozilla.org/docs/Web/CSS",
    },
    {
      Icon: BiLogoJavascript,
      link: "https://www.javascript.com/",
    },
    {
      Icon: BiLogoTypescript,
      link: "https://www.typescriptlang.org/",
    },
    {
      Icon: BiLogoReact,
      link: "https://react.dev/",
    },
    {
      Icon: SiMui,
      link: "https://mui.com/",
    },
  ],
};

export const dataSkills: SkillStackProps = {
  title: "Data",
  skillsArray: [
    {
      Icon: TbSql,
      link: "https://www.microsoft.com/sql-server/",
    },
    { Icon: BiLogoMongodb, link: "https://www.mongodb.com/" },
  ],
};

export const versionSkills: SkillStackProps = {
  title: "Version Control",
  skillsArray: [
    {
      Icon: BiLogoGithub,
      link: "https://github.com/",
    },
  ],
};
