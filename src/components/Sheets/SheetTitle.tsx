import { Typography } from "@mui/material";

import { SheetTitleProps } from "../Types";

export const SheetTitle = ({ tabName }: SheetTitleProps) => {
  return (
    <Typography
      variant="h4"
      fontFamily="Montserrat"
      fontWeight={700}
      mt={2}
    >
      {tabName}
    </Typography>
  );
};
