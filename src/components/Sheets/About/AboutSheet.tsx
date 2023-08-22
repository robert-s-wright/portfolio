import {
  Typography,
  Stack,
  Avatar,
  Paper,
  IconButton,
  Link,
  Tooltip,
} from "@mui/material";

import headshot from "./../../../assets/headshot.jpg";

import { theme } from "../../theme";

import { StyledIconProps, SkillStackProps } from "../../Types";

import {
  frontendSkills,
  backendSkills,
  dataSkills,
  versionSkills,
  contactLinks,
  aboutContent,
} from "./AboutSheetData";

export const AboutSheet = () => {
  return (
    <>
      <Stack
        padding={4}
        textAlign="justify"
        spacing={2}
        alignItems="center"
      >
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ xs: 2, sm: 2, md: 8, lg: 8 }}
          paddingX={{ xs: 1, sm: 2, md: 6, lg: 10 }}
        >
          <Stack
            spacing={2}
            flex={1}
          >
            {aboutContent.map((item, index) => {
              if (index < 2)
                return (
                  <Typography
                    fontFamily="Montserrat"
                    fontWeight={{ xs: 400, sm: 500, md: 600 }}
                    fontSize={{ xs: 11, sm: 15, md: 15 }}
                    sx={{
                      textIndent: {
                        xs: "2em",
                        sm: "2em",
                        md: "4em",
                        lg: "4em",
                      },
                    }}
                  >
                    {item}
                  </Typography>
                );
            })}
          </Stack>

          <Stack
            spacing={2}
            flex={1}
          >
            {aboutContent.map((item, index) => {
              if (index >= 2)
                return (
                  <Typography
                    fontFamily="Montserrat"
                    fontWeight={{ xs: 400, sm: 500, md: 600 }}
                    fontSize={{ xs: 11, sm: 15, md: 15 }}
                    sx={{
                      textIndent: {
                        xs: "2em",
                        sm: "2em",
                        md: "4em",
                        lg: "4em",
                      },
                    }}
                  >
                    {item}
                  </Typography>
                );
            })}
          </Stack>
        </Stack>

        <Typography
          textAlign="center"
          fontSize={{ xs: 15, sm: 16, md: 20 }}
          variant="h6"
          fontFamily="Montserrat"
          fontWeight={{ xs: 600, sm: 600, md: 700 }}
        >
          Please send me any questions or comments and I'll do my best to
          respond!
        </Typography>
      </Stack>
      <Stack
        sx={{
          backgroundColor: "#e9e5d7",
          boxShadow: "0px 4px 7px black",
        }}
        alignItems="center"
        width="100%"
        padding={2}
        spacing={2}
      >
        <Stack
          direction={{ xs: "column", sm: "column", med: "row", lg: "row" }}
          justifyContent="space-between"
          width="90%"
          alignItems="center"
          gap={2}
        >
          <Stack
            direction="row"
            gap={5}
          >
            <Stack rowGap={1}>
              <SkillStack {...frontendSkills} />
              <SkillStack {...backendSkills} />
            </Stack>
            <Stack rowGap={1}>
              <SkillStack {...dataSkills} />
              <SkillStack {...versionSkills} />
            </Stack>
          </Stack>
          <Stack
            direction="row"
            gap={4}
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack
              justifyContent="flex-start"
              alignItems="center"
            >
              <Typography
                variant="h6"
                fontFamily="Montserrat"
                fontWeight={700}
                fontSize={{ xs: 16, sm: 17, md: 18, lg: 20 }}
              >
                Contact
              </Typography>
              <Stack
                alignItems="flex-start"
                gap={1}
              >
                {contactLinks.map((obj) => {
                  return (
                    <Link
                      href={obj.link}
                      target="_blank"
                      underline="hover"
                      fontSize={{ xs: 16, sm: 17, md: 18, lg: 20 }}
                    >
                      {obj.title}
                    </Link>
                  );
                })}
              </Stack>
            </Stack>
            <Avatar
              src={headshot}
              sx={{
                height: { xs: 80, sm: 100, md: 150, lg: 150 },
                width: { xs: 80, sm: 100, md: 150, lg: 150 },
                boxShadow: "1px 1px 5px black",
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

const StyledIcon = ({ Icon, link, skillName }: StyledIconProps) => {
  return (
    <Tooltip
      title={skillName}
      placement="top"
    >
      <IconButton
        children={<Icon />}
        size="medium"
        sx={{
          fontSize: { xs: 20, sm: 20, md: 30, lg: 30 },
          "&.MuiIconButton-root:hover": {
            backgroundColor: theme.palette.secondary.light,
            opacity: "60%",
          },
          "&.MuiIconButton-root": {
            color: theme.palette.primary.dark,
            opacity: "80%",
          },
        }}
        onClick={() => window.open(link, "_blank")}
      />
    </Tooltip>
  );
};

const SkillStack = ({ title, skillsArray }: SkillStackProps) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      gap={1}
    >
      <Typography
        variant="h6"
        fontWeight={600}
        fontFamily="Montserrat"
        fontSize={{ xs: 16, sm: 17, md: 18, lg: 20 }}
      >
        {title}
      </Typography>
      <Paper
        sx={{
          backgroundColor: "#F2F0EB",
          padding: 1,
          width: "fit-content",
        }}
        elevation={5}
        square
      >
        <Stack alignItems="center">
          <Stack
            justifyContent="space-evenly"
            alignItems="center"
            direction="row"
            flexWrap="wrap"
            gap={1}
          >
            {skillsArray.map((skill) => {
              return (
                <StyledIcon
                  key={skill.link}
                  Icon={skill.Icon}
                  link={skill.link}
                  skillName={skill.skillName}
                />
              );
            })}
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};
