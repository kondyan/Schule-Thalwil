import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";

// MUI IMPORTS
// import AppBar from "@mui/material/AppBar";

// import AdbIcon from "@mui/icons-material/Adb";

// import {
//   Button,
//   Container,
//   Menu,
//   Typography,
//   Toolbar,
//   Box,
//   MenuItem,
// } from "@mui/material";

// const pages = ["Home", "Sek Materials"];

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      <div className={css.wrapper}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
