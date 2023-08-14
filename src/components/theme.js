import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: { main: "#3a3b40", light: "#f2f2f2", dark: "#262625" },

    secondary: { main: "#737372", light: "#f2e6a7" },
  },
  transitions: {
    duration: {
      enteringScreen: 1000,
      leavingScreen: 800,
    },
  },
});

export const sheetBackgrounds = ["#F2F0EB", ""];
