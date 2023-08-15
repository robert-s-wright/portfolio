import React from "react";

import { Slide, Paper, Stack } from "@mui/material";

import style from "./Body.module.css";

import { sheetNames } from "./Sheets/SheetNames";

import { theme } from "./theme";
import { SheetTitle } from "./Sheets/SheetTitle";

type BodyProps = {
  selectedTab: number | null;
  setSelectedTab: React.Dispatch<React.SetStateAction<number | null>>;
  headerRef: React.MutableRefObject<HTMLDivElement | null>;
};

export const Body = ({ selectedTab, setSelectedTab, headerRef }: BodyProps) => {
  return (
    <div
      className={style.container}
      style={{
        backgroundColor: theme.palette.secondary.dark,
        position: "relative",
        marginTop:
          headerRef.current !== null ? headerRef.current.offsetHeight : 0,
        minHeight: "70%",
      }}
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
  return (
    <Slide
      in={value === index}
      direction="down"
      easing="cubic-bezier(0.3, 1.1, .5, 1)"
      timeout={{ enter: 900, exit: 300 }}
      unmountOnExit
    >
      <Paper
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1500px",
          "&.MuiPaper-root": {
            backgroundColor: "#F2F0EB",
          },
          zIndex: value === index ? 4 : 3,
        }}
        square
        elevation={5}
      >
        <Stack
          alignItems="center"
          sx={{ overflow: "hidden" }}
        >
          <SheetTitle tabName={tabName} />
          <Component />
        </Stack>
      </Paper>
    </Slide>
  );
};
