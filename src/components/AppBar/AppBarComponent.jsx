import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBarComponent.module.css";
import { Container, Toolbar, AppBar, Box } from "@mui/material";
import Logo from "../Logo/Logo";

const AppBarComponent = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#01A2D8" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;
