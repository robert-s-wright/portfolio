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

import { SheetProps, ProjectTileProps } from "../../Types";

export const ExperienceSheet = ({ tabName }: SheetProps) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <Stack sx={{ overflow: "hidden" }}>
      <Typography
        variant="h4"
        fontFamily="Montserrat"
        fontWeight={700}
        mt={2}
      >
        {tabName}
      </Typography>

      <Stack
        padding={4}
        textAlign="justify"
        spacing={2}
        alignItems="center"
        direction="row"
      >
        <ProjectTile
          title="hilti"
          setHoverState={setHoveredProject}
          hoveredProject={hoveredProject}
          imgLink="./../../../assets/Experience/monthview.PNG"
        />
      </Stack>
    </Stack>
  );
};
