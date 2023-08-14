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
        <Typography
          fontFamily="Montserrat"
          fontWeight={600}
        >
          I'm Robbie, a 34 year old web developer with an emphasis on React with
          Javascript and some experience using Typescript. I come from a
          background in engineering working with CAD and estimating for
          prototype/production in a machining & welding environment. While
          managing the engineering team, I initiated multiple projects to
          streamline our procedures and enlisted those with a programming
          background to increase efficiency in the department.
        </Typography>
        <Typography
          fontFamily="Montserrat"
          fontWeight={600}
        >
          I myself began coding at the beginning of 2020 and enrolled in a
          coding bootcamp. I began learning HTML, CSS, and Javascript on my own
          via Free Code Camp, but COVID-19 prevented me from attending the
          instructions in person, so I did not continue.
        </Typography>
        <Typography
          fontFamily="Montserrat"
          fontWeight={600}
        >
          Fast forward to the summer of 2022... My wife and I moved to Sweden
          and I was looking for a new position in manufacturing engineering, the
          industry to which I commited the last 10 years of my life. Having
          experienced so much stagnation within domestic factories and increased
          offshoring of processes, I decided now was the time to commit to
          following my programming path.
        </Typography>
        <Typography
          fontFamily="Montserrat"
          fontWeight={600}
        >
          I attempted to learn coding at a technical institute, but most schools
          require a full year of Swedish language school. I decided I could
          better utilize that time to teach myself programming with online
          resources instead. Since I began in August 2022, I have worked with
          HTML, CSS, Javascript, Typescript, React, C#, .NET, Node.JS, SQL, and
          MongoDB.
        </Typography>
        <Typography
          textAlign="center"
          variant="h6"
          fontFamily="Montserrat"
          fontWeight={700}
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
          direction="row"
          justifyContent="space-between"
          width="90%"
          alignItems="center"
        >
          <Stack
            direction="row"
            gap={5}
          >
            <Stack>
              <SkillStack {...frontendSkills} />
              <SkillStack {...backendSkills} />
            </Stack>
            <Stack>
              <SkillStack {...dataSkills} />
              <SkillStack {...versionSkills} />
            </Stack>
          </Stack>
          <Stack
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography
              variant="h6"
              fontFamily="Montserrat"
              fontWeight={700}
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
              height: 150,
              width: 150,
              boxShadow: "1px 1px 5px black",
            }}
          />
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
        children={<Icon size={30} />}
        size="medium"
        sx={{
          "&.MuiIconButton-root:hover": {
            backgroundColor: theme.palette.secondary.light,
            opacity: "60%",
          },
          "&.MuiIconButton-root": {
            color: theme.palette.secondary.dark,
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
    <Stack alignItems="center">
      <Typography
        variant="h6"
        fontWeight={600}
      >
        {title}
      </Typography>
      <Paper
        sx={{
          backgroundColor: "#F2F0EB",
          padding: 1,
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
