import React from "react";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBarComponent.module.css";
import { Container, Toolbar, AppBar, Box } from "@mui/material";

const AppBarComponent = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Navigation />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;
