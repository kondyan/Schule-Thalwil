import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";

// MUI IMPORTS
// import AppBar from "@mui/material/AppBar";

import AdbIcon from "@mui/icons-material/Adb";

import {
  Button,
  Container,
  Menu,
  Typography,
  Toolbar,
  Box,
  MenuItem,
} from "@mui/material";

const pages = ["Home", "Sek Materials"];

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // const [anchorElNav, setAnchorElNav] =
  //   (React.useState < null) | (HTMLElement > null);
  // const [anchorElUser, setAnchorElUser] =
  //   (React.useState < null) | (HTMLElement > null);

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <header className={css.header}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Navigation />
          <div className={css.wrapper}>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </div>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              // anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              // open={Boolean(anchorElNav)}
              // onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  // onClick={handleCloseNavMenu}
                >
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </header>
  );
};

export default AppBar;
