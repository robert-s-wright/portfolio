import { useState } from "react";

import { Stack } from "@mui/material";

import { ProjectTile } from "./ProjectTile";

import { projects } from "./Projects";

export const ExperienceSheet = () => {
  const [hoveredProject, setHoveredProject] = useState<number | undefined>(
    undefined
  );

  return (
    <Stack
      padding={4}
      textAlign="justify"
      spacing={2}
      justifyContent="space-evenly"
      alignItems="center"
      direction="row"
    >
      {projects.map((project, ind) => {
        return (
          <ProjectTile
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
