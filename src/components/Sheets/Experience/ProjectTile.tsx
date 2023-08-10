import React from "react";

import { Box, Slide } from "@mui/material";

import { ProjectTileProps } from "../../Types";

export const ProjectTile = ({
  title,
  setHoverState,
  hoveredProject,
  imgLink,
}: ProjectTileProps) => {
  return (
    <Box
      sx={{ maxWidth: "30%", position: "relative", overflow: "hidden" }}
      onMouseEnter={() => setHoverState(title)}
      onMouseLeave={() => setHoverState(null)}
    >
      <img
        src={require("./../../../assets/Experience/monthview.PNG")}
        width="100%"
        style={{}}
        // onMouseEnter={() => setHoveredProject("hilti")}
        // onMouseLeave={() => setHoveredProject(null)}
      />
      <Slide
        in={hoveredProject === title}
        direction="right"
      >
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundColor: "red",
            opacity: "50%",
            top: 0,
          }}
        ></Box>
      </Slide>
    </Box>
  );
};
