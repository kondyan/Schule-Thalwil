import React from "react";
import Navigation from "../Navigation/Navigation";
import { Container, Toolbar, AppBar } from "@mui/material";

const AppBarComponent = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ px: { xs: "16px" } }}>
        <Toolbar disableGutters sx={{ minHeight: { xs: "64px" } }}>
          <Navigation />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;
