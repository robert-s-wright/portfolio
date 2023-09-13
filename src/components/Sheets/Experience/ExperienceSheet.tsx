import { useState } from "react";

import { Stack } from "@mui/material";

import { ProjectTile } from "./ProjectTile";

import { projects } from "./Projects";

import styles from "./ExperienceSheet.module.css";

export const ExperienceSheet = () => {
  const [hoveredProject, setHoveredProject] = useState<number | undefined>(
    undefined
  );

  return (
    <Stack
      padding={4}
      textAlign="justify"
      spacing={2}
      rowGap={2}
      justifyContent="space-between"
      alignItems="center"
      direction={{ sm: "column", md: "column", lg: "row", xl: "row" }}
    >
      {projects.map((project, ind) => {
        return (
          <ProjectTile
            key={ind}
            setHoverState={setHoveredProject}
            hoveredProject={hoveredProject}
            index={ind}
            {...project}
          />
        );
      })}
    </Stack>
  );
};
