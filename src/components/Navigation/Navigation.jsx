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
      <NavLink to="/">
        <Button key="home" sx={{ my: 2, color: "white", display: "block" }}>
          <Typography variant="button" component="p" fontSize="16px">
            Home
          </Typography>
        </Button>
      </NavLink>
      <NavLink to="/help">
        <Button key="help" sx={{ my: 2, color: "white", display: "block" }}>
          <Typography variant="button" component="p" fontSize="16px">
            Help Page
          </Typography>
        </Button>
      </NavLink>
    </Box>
  );
};

export default Navigation;
