import { NavLink } from "react-router";
import css from "./AuthNav.module.css";
import { Box, Button, Typography } from "@mui/material";

const AuthNav = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        gap: "10px",
      }}
    >
      <NavLink className={css.link} to="/login">
        <Button key="home" sx={{ my: 2, color: "white", display: "block" }}>
          <Typography variant="button" component="p" fontSize="16px">
            Anmelden
          </Typography>
        </Button>
      </NavLink>
      <NavLink className={css.link} to="/register">
        <Button key="home" sx={{ my: 2, color: "white", display: "block" }}>
          <Typography variant="button" component="p" fontSize="16px">
            Registrieren
          </Typography>
        </Button>
      </NavLink>
    </Box>
  );
};

export default AuthNav;
