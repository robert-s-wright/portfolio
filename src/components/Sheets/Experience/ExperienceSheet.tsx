import React, { useState } from "react";

import {
  Container,
  Stack,
  Typography,
  Box,
  Backdrop,
  Slide,
} from "@mui/material";

import { ProjectTile } from "./ProjectTile";

import { SheetProps } from "../../Types";

import { projects } from "./Projects";
import { SheetTitle } from "../SheetTitle";

export const ExperienceSheet = ({ tabName }: SheetProps) => {
  const [hoveredProject, setHoveredProject] = useState<number | undefined>(
    undefined
  );

  return (
    <Stack sx={{ overflow: "hidden" }}>
      <SheetTitle tabName={tabName} />

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
    </Stack>
  );
};
