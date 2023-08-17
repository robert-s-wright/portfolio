import { Typography, Link } from "@mui/material";

export const ResumeSheet = () => {
  return (
    <object
      data=".\assets\CV.pdf"
      width="80%"
      style={{ margin: "10px", minHeight: "70vh", maxHeight: "1000px" }}
    >
      <Typography fontFamily="Montserrat">
        Looks like your browser doesn't support PDFs! Download it{" "}
        <Link
          fontFamily="Montserrat"
          href="./assets/CV.pdf"
          download
        >
          here
        </Link>{" "}
        instead
      </Typography>
    </object>
  );
};
