import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F2F2F2",
        height: { xs: "70vh", md: "50vh", lg: "40vh" },
        mt: "50px",
      }}
    >
      <Typography variant="h4" component="p"></Typography>
    </Box>
  );
};

export default Footer;
