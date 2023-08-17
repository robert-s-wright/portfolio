import {
  Paper,
  Stack,
  Typography,
  Button,
  Chip,
  ThemeProvider,
  Modal,
  Fade,
} from "@mui/material";

import { ProjectTileProps } from "../../Types";

import { theme } from "./../../theme";
import { useState } from "react";

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

  const [modalOpen, setModalOpen] = useState<number>();
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
                  style={{
                    width: "75%",
                    maxWidth: "400px",
                    aspectRatio: "auto",
                    cursor: "pointer",
                  }}
                  onClick={() => setModalOpen(index)}
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
                  sx={{
                    ".MuiChip-label": {
                      fontSize: { xs: 11, sm: 12, md: 15, lg: 15 },
                    },
                  }}
                />
              );
            })}
          </Stack>
        </Stack>
      </Paper>
      <Modal
        open={modalOpen !== undefined}
        sx={{
          "&.MuiModal-root": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
        onClose={() => setModalOpen(undefined)}
        closeAfterTransition
      >
        <Fade in={modalOpen !== undefined}>
          <img
            src={imgLinks[0]}
            style={{ alignSelf: "center", maxWidth: "90vw" }}
          ></img>
        </Fade>
      </Modal>
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
      justifyContent="center"
      alignItems="center"
      gap={1}
      flexWrap="wrap"
      sx={{
        ".MuiButton-root": { fontSize: { xs: 11, sm: 12, md: 15, lg: 15 } },
      }}
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
