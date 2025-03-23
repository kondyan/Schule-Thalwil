import { Box, Button, Typography } from "@mui/material";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Button key="home" sx={{ my: 2, color: "white", display: "block" }}>
        <Typography variant="button" component="p" fontSize="16px">
          <NavLink to="/" className={css.buildLinkClass}>
            Home
          </NavLink>
        </Typography>
      </Button>
      <Button key="help" sx={{ my: 2, color: "white", display: "block" }}>
        <Typography variant="button" component="p" fontSize="16px">
          <NavLink to="/help" className={css.buildLinkClass}>
            Help Page
          </NavLink>
        </Typography>
      </Button>
    </Box>
  );
};

export default Navigation;
