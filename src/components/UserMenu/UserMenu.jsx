import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

// MUI IMPORTS

// import MenuIcon from "@mui/icons-material/Menu";
// import {
//   Box,
//   IconButton,
//   Avatar,
//   Tooltip,
//   Menu,
//   MenuItem,
//   Typography,
// } from "@mui/material";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return <div className={css.wrapper}></div>;
};

export default UserMenu;
