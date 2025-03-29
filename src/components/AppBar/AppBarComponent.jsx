import React from "react";
import Navigation from "../Navigation/Navigation";
import { Container, Toolbar, AppBar } from "@mui/material";

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
