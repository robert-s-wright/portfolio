import { Stack, Tabs, Tab, ThemeProvider } from "@mui/material";

import { tabNames } from "../App";

import { sheetNames } from "./Sheets/SheetNames";

import { theme } from "./theme";

type HeaderProps = {
  selectedTab: number | null;
  setSelectedTab: React.Dispatch<React.SetStateAction<number | null>>;
};

export const Header = (props: HeaderProps) => {
  const { selectedTab, setSelectedTab } = props;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(null);
    setTimeout(() => {
      setSelectedTab(newValue);
    }, 300);
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="row"
        justifyContent="space-between"
        style={{ backgroundColor: theme.palette.primary.dark }}
        zIndex={10}
      >
        <div>Logo</div>
        <Stack padding={1}>
          <Tabs
            onChange={handleChange}
            value={selectedTab}
            TabIndicatorProps={{
              style: {
                top: 0,
                height: "100%",
                backgroundColor: theme.palette.primary.light,
                opacity: "10%",
                border: `2px solid ${theme.palette.primary.dark} `,
                // boxShadow: `0px 1px 1px 1px ${theme.palette.secondary.light}, 0px 1px 1px 1px ${theme.palette.secondary.light}, 0px 1px 1px 1px ${theme.palette.secondary.light}`,
              },
            }}
          >
            {sheetNames.map((sheet, index) => {
              return (
                <Tab
                  key={index}
                  label={sheet.tabName}
                  {...allyProps(index)}
                  style={{ color: theme.palette.secondary.light }}
                />
              );
            })}
          </Tabs>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

function allyProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
