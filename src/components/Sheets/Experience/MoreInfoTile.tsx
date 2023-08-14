import {
  Button,
  Chip,
  IconButton,
  Slide,
  Stack,
  Typography,
  createTheme,
} from "@mui/material";
import { MoreInfoTileProps } from "../../Types";

import { BiLogoGithub } from "react-icons/bi";

import { theme } from "./../../theme";

const tileTheme = createTheme(theme);

export const MoreInfoTile = ({
  hoveredProject,
  title,
  subTitle,
  description,
  languages,
  index,
  frontendRepoLink,
  backendRepoLink,
  link,
}: MoreInfoTileProps) => {
  return (
    <Slide
      in={hoveredProject === index}
      direction="right"
    >
      <Stack
        alignItems="center"
        justifyContent="space-between"
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundColor: theme.palette.secondary.dark,
          color: theme.palette.primary.light,
          opacity: "100%",
          top: 0,
          padding: 2,
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <Typography
          variant="subtitle2"
          fontStyle="italic"
        >
          {subTitle}
        </Typography>
        <Typography
          textAlign="center"
          variant="body1"
        >
          {description}
        </Typography>
        <Stack direction="row">
          {frontendRepoLink !== undefined ? (
            <Button>Frontend Repo</Button>
          ) : null}
          {backendRepoLink && <Button>Backend Repo</Button>}
          {link && <Button>Link</Button>}
        </Stack>

        <Stack
          direction="row"
          // gap={2}
          sx={{ width: "100%" }}
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {languages.map((language) => {
            return (
              <Chip
                size="small"
                label={language}
                color="error"
              />
            );
          })}
        </Stack>
      </Stack>
    </Slide>
  );
};
