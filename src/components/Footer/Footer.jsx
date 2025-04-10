import { Avatar, Box, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#F2F2F2",
        height: { xs: "55vh", md: "60vh", lg: "50vh" },
        mt: "50px",
      }}
    >
      <Typography
        variant="h6"
        component="p"
        sx={{
          fontSize: { xs: "18px", md: "36px", lg: " 46px" },
        }}
      >
        © Inoffiziele Website der Schule Thalwil
      </Typography>
      <Typography
        variant="h6"
        component="p"
        sx={{
          pt: { xs: "15px", md: "17px", lg: "22px" },
          fontSize: { xs: "12px", md: "32px", lg: "36px" },
        }}
      >
        Entwickelt bei{" "}
        <Link
          href="https://github.com/kondyan"
          underline="none"
          variant="h6"
          target="_blank"
          rel="noreferrer"
          sx={{ fontSize: { xs: "18px", md: "32px", lg: "48px" } }}
        >
          {" "}
          Arsenii Kondratenko
        </Link>
      </Typography>
      <ul>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",

            gap: { xs: "40px", md: "50px", lg: "60px" },
            mt: { xs: "80px", md: "90px", lg: "100px" },
          }}
        >
          <li>
            <Link
              href="https://www.schulethalwil.ch/"
              target="_blank"
              rel="noreferrer"
            >
              <Avatar
                src="../../favicon.svg"
                alt="Schule Thalwil"
                variant="rounded"
                sx={{
                  scale: { xs: "1.1", md: "1.3", lg: "1.5" },
                }}
              />
            </Link>
          </li>
          <li>
            <Link href="https://react.dev/" target="_blank" rel="noreferrer">
              <Avatar
                src="../../react.svg"
                alt="React"
                variant="rounded"
                sx={{
                  scale: { xs: "1.1", md: "1.3", lg: "1.5" },
                }}
              />
            </Link>
          </li>
          <li>
            <Link href="https://vite.dev/" target="_blank" rel="noreferrer">
              <Avatar
                src="../../vite.svg"
                alt="Vite"
                variant="rounded"
                sx={{
                  scale: { xs: "1.1", md: "1.3", lg: "1.5" },
                }}
              />
            </Link>
          </li>
        </Box>
      </ul>
    </Box>
  );
};

export default Footer;
