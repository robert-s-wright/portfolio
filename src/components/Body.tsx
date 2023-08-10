import React, { ReactNode } from "react";

import { Slide, Paper } from "@mui/material";

import style from "./Body.module.css";

import { sheetNames } from "./Sheets/SheetNames";

import { theme } from "./theme";

type BodyProps = {
  selectedTab: number | null;
  setSelectedTab: React.Dispatch<React.SetStateAction<number | null>>;
};

export const Body = (props: BodyProps) => {
  const { selectedTab } = props;
  return (
    <div
      className={style.container}
      style={{ backgroundColor: theme.palette.secondary.dark }}
    >
      {sheetNames.map((sheetName, index) => {
        return (
          <TabPanel
            key={index}
            tabName={sheetName.tabName}
            value={index}
            index={selectedTab}
            Component={sheetName.sheet}
          />
        );
      })}
    </div>
  );
};

type TabPanelProps = {
  tabName: string;
  value: number;
  index: number | null;
  Component: React.ElementType;
};

const TabPanel = ({ tabName, value, index, Component }: TabPanelProps) => {
  const tabColorIndex = value !== null ? value * 100 : 500;

  return (
    <Slide
      in={value === index}
      direction="down"
      easing="cubic-bezier(0.3, 1.1, .5, 1)"
      timeout={{ enter: 900, exit: 300, appear: 2000 }}
      appear
      unmountOnExit
    >
      <Paper
        sx={{
          position: "relative",
          width: "100%",

          "&.MuiPaper-root": {
            backgroundColor: "#F2F0EB",
          },
          zIndex: value === index ? 4 : 3,
        }}
        square
        elevation={5}
      >
        <Component
          tabName={tabName}
          sx={{ height: "100%" }}
        />
      </Paper>
    </Slide>
  );
};
