import { Input, Link, Stack, TextField } from "@mui/material";
import { SheetTitle } from "../SheetTitle";

import { BiLogoGithub } from "react-icons/bi";

// import cv from "./../../../assets/CV07082023.pdf";

import { SheetProps } from "../../Types";

export const ContactSheet = ({ tabName }: SheetProps) => {
  return (
    <Stack sx={{ overflow: "hidden" }}>
      <SheetTitle tabName={tabName} />
      <Stack
        padding={4}
        textAlign="justify"
        spacing={2}
        justifyContent="space-evenly"
        alignItems="center"
        direction="row"
      >
        <Stack>
          <Input />
          <Input />
        </Stack>
        <Stack>
          <Link
            href="https://github.com/robert-s-wright"
            target="_blank"
          >
            Github
          </Link>
          <Link
            href="https://linkedin.com/in/robertstephenwright"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link href="mailto:rs.wrightdev@gmail.com">
            rs.wrightdev@gmail.com
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
