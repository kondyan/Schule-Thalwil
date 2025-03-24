import { Typography } from "@mui/material";
import logo from "../../imgs/schulethalwil.png";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <Typography>
      <img className={css.logo} src={logo} alt="Schule Thalwil" />
    </Typography>
  );
};

export default Logo;
