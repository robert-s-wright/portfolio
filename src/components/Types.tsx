import { IconType } from "react-icons";

export type SheetProps = {
  tabName?: string;
};

//Components
export type SheetTitleProps = {
  tabName?: string;
};

//About Sheet

export type StyledIconProps = {
  Icon: IconType;

  link: string;
};

export type SkillStackProps = {
  title: string;

  skillsArray: StyledIconProps[];
};

//Experience Sheet

export type ProjectProps = {
  title: string;
  subTitle: string;
  imgLink?: string;
  link?: string;
  frontendRepoLink?: string;
  backendRepoLink?: string;
  description?: string;
  languages: string[];
};

export type ProjectTileProps = ProjectProps & {
  setHoverState: React.Dispatch<React.SetStateAction<number | undefined>>;
  hoveredProject?: number;
  index: number;
};

export type MoreInfoTileProps = ProjectProps & {
  hoveredProject?: number;
  index: number;
};

//Contact Sheet
