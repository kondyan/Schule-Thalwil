import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBarComponent.module.css";
import { Container, Toolbar, AppBar, Box } from "@mui/material";
import Logo from "../Logo/Logo";
import Grid from "@mui/material/Grid2";

const AppBarComponent = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#01A2D8" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid
            container
            sx={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid size={3}>
              <Logo />
            </Grid>
            <Grid size={3}>
              <Navigation />
            </Grid>
            <Grid size={3}>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;
