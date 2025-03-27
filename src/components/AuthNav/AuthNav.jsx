import { NavLink } from "react-router";
import css from "./AuthNav.module.css";
import { Box, Button, Typography } from "@mui/material";

const AuthNav = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        paddingTop: "5",
        paddingRight: "10",
      }}
    >
      <NavLink className={css.link} to="/register">
        <Button key="home" sx={{ my: 2, color: "white", display: "block" }}>
          <Typography variant="overline" component="p" fontSize="16px">
            Registrieren
          </Typography>
        </Button>
      </NavLink>
      <NavLink className={css.link} to="/login">
        <Button key="home" sx={{ my: 2, color: "white", display: "block" }}>
          <Typography variant="overline" component="p" fontSize="16px">
            Anmelden
          </Typography>
        </Button>
      </NavLink>
    </Box>
  );
};

export default AuthNav;
