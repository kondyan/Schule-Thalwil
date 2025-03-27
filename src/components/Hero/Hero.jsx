import { Box } from "@mui/material";
import css from "./Hero.module.css";
import image from "../../imgs/panorama.png";

const Hero = () => {
  return (
    <Box>
      <h1>Hero</h1>
      <img className={css.img} src={image} alt="hero" />
    </Box>
  );
};

export default Hero;
