import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 0,
      }}
    >
      <Tooltip title="Einstellungen">
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{ p: { md: 2 }, mx: { md: "90px" } }}
        >
          <Avatar alt={user.username} src={user.avatar} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <NavLink to="profile">
          <Button
            key="profile"
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
              Profil
            </Typography>
          </Button>
        </NavLink>

        <Button
          key="logout"
          onClick={() => {
            dispatch(logOut());
          }}
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
            Ausloggen
          </Typography>
        </Button>
      </Menu>
    </Box>
  );
};

export default UserMenu;
