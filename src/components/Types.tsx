import { IconType } from "react-icons";

//About Sheet

export type SheetProps = {
  tabName?: string;
};

export type StyledIconProps = {
  Icon: IconType;

  link: string;
};

export type SkillStackProps = {
  title: string;

  skillsArray: StyledIconProps[];
};

//Experience Sheet

export type ProjectTileProps = {
  title: string;
  setHoverState: React.Dispatch<React.SetStateAction<string | null>>;
  hoveredProject: string | null;
  imgLink: string;
};
