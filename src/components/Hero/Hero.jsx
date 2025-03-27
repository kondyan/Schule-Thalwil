import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import css from "./Hero.module.css";
import image from "../../imgs/panorama.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useRef } from "react";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "900px",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
        marginBottom: "50px",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
        }}
      >
        <Grid container spacing={7} direction="column" sx={{}}>
          <Grid>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                textShadow:
                  "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;",
              }}
            >
              Schule Thalwil
            </Typography>
          </Grid>
          <Grid>
            <Button
              sx={{
                color: "#ffffff",
              }}
              color="primary"
              size="large"
              variant="contained"
              onClick={() => {
                window.scroll({
                  top: 1000,
                  behavior: "smooth",
                });
              }}
            >
              Entdecke unsere Schule
              <ArrowDownwardIcon sx={{ paddingLeft: "5px" }} />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
