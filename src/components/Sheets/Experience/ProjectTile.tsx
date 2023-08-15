import {
  Paper,
  Stack,
  Typography,
  Button,
  Chip,
  ThemeProvider,
} from "@mui/material";

import { ProjectTileProps } from "../../Types";

import { theme } from "./../../theme";

export const ProjectTile = ({
  setHoverState,
  hoveredProject,
  imgLinks,
  index,
  ...project
}: ProjectTileProps) => {
  const {
    title,
    subTitle,
    description,
    frontendRepoLink,
    backendRepoLink,
    link,
    languages,
  } = project;
  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{
          width: { sm: "80%", md: "45%" },
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={() => setHoverState(index)}
        onMouseLeave={() => setHoverState(undefined)}
        elevation={10}
        square
      >
        <Stack
          alignItems="center"
          justifyContent="space-between"
          sx={{
            height: "100%",
            width: "100%",
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.light,
            opacity: "100%",
            top: 0,
            padding: 2,
          }}
          gap={1}
        >
          <Typography
            variant="h6"
            sx={{ color: theme.palette.secondary.light }}
          >
            {title}
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={1}
          >
            {imgLinks.map((imgLink) => {
              return (
                <img
                  src={imgLink}
                  style={{ width: "45%", aspectRatio: "auto" }}
                />
              );
            })}
          </Stack>
          <Typography
            variant="subtitle2"
            fontStyle="italic"
            textAlign="center"
          >
            {subTitle}
          </Typography>
          <Typography
            textAlign="center"
            variant="body2"
          >
            {description}
          </Typography>
          <RepoLinks
            frontendRepoLink={frontendRepoLink}
            backendRepoLink={backendRepoLink}
            link={link}
          />

          <Stack
            direction="row"
            sx={{ width: "100%" }}
            justifyContent="center"
            flexWrap="wrap"
            gap={1}
          >
            {languages.map((language) => {
              return (
                <Chip
                  size="small"
                  label={language}
                  color="primary"
                />
              );
            })}
          </Stack>
        </Stack>
      </Paper>
    </ThemeProvider>
  );
};

type RepoLinkProps = {
  frontendRepoLink?: string;
  backendRepoLink?: string;
  link?: string;
};

const RepoLinks = ({
  frontendRepoLink,
  backendRepoLink,
  link,
}: RepoLinkProps) => {
  return (
    <Stack
      direction="row"
      gap={1}
    >
      {frontendRepoLink !== undefined ? (
        <Button
          color="secondary"
          variant="contained"
          sx={{ whiteSpace: "nowrap" }}
          size="small"
          onClick={() => window.open(frontendRepoLink, "_blank")}
        >
          Frontend Repo
        </Button>
      ) : null}
      {backendRepoLink && (
        <Button
          color="secondary"
          variant="contained"
          sx={{ whiteSpace: "nowrap" }}
          size="small"
          onClick={() => window.open(backendRepoLink, "_blank")}
        >
          Backend Repo
        </Button>
      )}
      {link && (
        <Button
          color="secondary"
          variant="contained"
          sx={{ whiteSpace: "nowrap" }}
          size="small"
          onClick={() => window.open(link, "_blank")}
        >
          Link
        </Button>
      )}
    </Stack>
  );
};
