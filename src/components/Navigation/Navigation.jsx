import { Box, Button, IconButton, Menu, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../imgs/schulethalwil.png";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Typography
        sx={{
          display: { xs: "none", md: "flex" },
          pr: { md: "128.2px" },
        }}
      >
        <img src={logo} width={130} className={css.logo} alt="Schule Thalwil" />
      </Typography>

      <Box
        sx={{ flexGrow: !isLoggedIn && 1, display: { xs: "flex", md: "none" } }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon color="secondary" />
        </IconButton>

        {!isLoggedIn ? (
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <NavLink to="/">
              <Button
                onClick={handleCloseNavMenu}
                key="home"
                sx={{
                  color: "black",
                  display: "block",
                  mx: "auto",
                }}
              >
                <Typography
                  variant="button"
                  component="p"
                  textAlign="center"
                  fontSize="14px"
                >
                  Home
                </Typography>
              </Button>
            </NavLink>
            <NavLink to="/help">
              <Button
                onClick={handleCloseNavMenu}
                key="help"
                sx={{
                  color: "black",
                  display: "block",
                  mx: "auto",
                }}
              >
                <Typography
                  variant="button"
                  component="p"
                  textAlign="center"
                  fontSize="14px"
                >
                  Tutorials
                </Typography>
              </Button>
            </NavLink>
            <NavLink to="/login">
              <Button
                onClick={handleCloseNavMenu}
                key="login"
                sx={{
                  color: "black",
                  display: "block",
                  mx: "auto",
                }}
              >
                <Typography
                  variant="button"
                  component="p"
                  textAlign="center"
                  fontSize="14px"
                >
                  Anmelden
                </Typography>
              </Button>
            </NavLink>
            <NavLink to="/register">
              <Button
                onClick={handleCloseNavMenu}
                key="register"
                sx={{
                  color: "black",
                  display: "block",
                  mx: "auto",
                }}
              >
                <Typography
                  variant="button"
                  component="p"
                  textAlign="center"
                  fontSize="14px"
                >
                  Registrieren
                </Typography>
              </Button>
            </NavLink>
          </Menu>
        ) : (
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <NavLink to="/">
              <Button
                onClick={handleCloseNavMenu}
                key="home"
                sx={{
                  color: "black",
                  display: "block",
                  mx: "auto",
                }}
              >
                <Typography
                  variant="button"
                  component="p"
                  textAlign="center"
                  fontSize="14px"
                >
                  Home
                </Typography>
              </Button>
            </NavLink>
            <NavLink to="/help">
              <Button
                onClick={handleCloseNavMenu}
                key="help"
                sx={{
                  color: "black",
                  display: "block",
                  mx: "auto",
                }}
              >
                <Typography
                  variant="button"
                  component="p"
                  textAlign="center"
                  fontSize="14px"
                >
                  Tutorials
                </Typography>
              </Button>
            </NavLink>
          </Menu>
        )}
      </Box>

      <Typography
        sx={{
          display: { xs: "flex", md: "none" },
          flexGrow: isLoggedIn && 1,
          justifyContent: isLoggedIn && "center",
        }}
      >
        <img src={logo} className={css.logo} width={100} alt="Schule Thalwil" />
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <NavLink to="/">
          <Button
            key="home"
            sx={{
              color: "white",
              display: "block",
            }}
          >
            <Typography
              variant="button"
              component="p"
              textAlign="center"
              fontSize="20px"
            >
              Home
            </Typography>
          </Button>
        </NavLink>
        <NavLink to="/help">
          <Button
            key="help"
            sx={{
              color: "white",
              display: "block",
            }}
          >
            <Typography
              variant="button"
              component="p"
              textAlign="center"
              fontSize="20px"
            >
              Tutorials
            </Typography>
          </Button>
        </NavLink>
      </Box>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};

export default Navigation;
