import { Stack } from "@mui/material";
import React, { useState } from "react";

import { SheetTitle } from "../SheetTitle";
import { SheetProps } from "../../Types";

export const ResumeSheet = ({ tabName }: SheetProps) => {
  return (
    <Stack alignItems="center">
      <SheetTitle tabName={tabName} />
      <object
        data=".\assets\CV07082023.pdf"
        height="1000px"
        width="80%"
        style={{ margin: "10px" }}
      />
    </Stack>
  );
};
