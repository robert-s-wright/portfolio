import { Typography, Link } from "@mui/material";

export const ResumeSheet = () => {
  return (
    <object
      data=".\assets\Robert Wright CV A4.pdf"
      width="80%"
      style={{ margin: "10px", minHeight: "75vh" }}
      title="CV Robert Wright A4"
    >
      <Typography fontFamily="Montserrat">
        Looks like your browser doesn't support PDFs! Download it{" "}
        <Link
          fontFamily="Montserrat"
          href="./assets/Robert Wright CV A4.pdf"
          download="Robert Wright CV A4"
        >
          here
        </Link>{" "}
        instead
      </Typography>
    </object>
  );
};
