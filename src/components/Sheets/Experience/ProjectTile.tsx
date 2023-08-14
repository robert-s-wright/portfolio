import React from "react";

import { Box, Slide, Typography, Stack, Paper } from "@mui/material";

import { ProjectTileProps, ProjectProps } from "../../Types";
import { MoreInfoTile } from "./MoreInfoTile";

export const ProjectTile = ({
  // title,
  setHoverState,
  hoveredProject,
  imgLink,
  index,
  ...project
}: ProjectTileProps) => {
  return (
    <Paper
      sx={{
        height: "400px",
        maxWidth: "525px",
        width: "auto",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHoverState(index)}
      onMouseLeave={() => setHoverState(undefined)}
      elevation={10}
      square
    >
      <img
        src={imgLink}
        height="100%"
        style={{ position: "relative" }}
      />
      <MoreInfoTile
        hoveredProject={hoveredProject}
        index={index}
        {...project}
      />
    </Paper>
  );
};
