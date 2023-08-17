import { Typography } from "@mui/material";

import { SheetTitleProps } from "../Types";

export const SheetTitle = ({ tabName }: SheetTitleProps) => {
  return (
    <Typography
      fontFamily="Montserrat"
      fontWeight={700}
      mt={2}
      sx={{ typography: { xs: "h6", sm: "h5", md: "h4" } }}
    >
      {tabName}
    </Typography>
  );
};
