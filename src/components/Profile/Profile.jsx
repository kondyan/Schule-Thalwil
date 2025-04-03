import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import css from "./Profile.module.css";
import { useRef, useState } from "react";
import { updateAvatar, updateUserData } from "../../redux/auth/operations";
import image from "../../imgs/avatar.png";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const fileInputRef = useRef(null);

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(updateAvatar(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      updateUserData({
        username: form.elements.username.value,
        name: form.elements.name.value,
        secondName: form.elements.secondName.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        console.log("update success");
      })
      .catch(() => {
        console.log("update error");
      });
    //   заменить на MUI уведомления
  };

  return (
    <Paper
      elevation={10}
      sx={{
        width: { xs: "350px", md: "550px", lg: "700px" },
        my: "50px",
        p: { xs: "10px", md: "15px", lg: "20px" },
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: { xs: "15px", md: "18px", lg: "25px" },
        }}
      >
        {!user.avatar && (
          <img className={css.img} src={image} alt={user.username} />
        )}

        {user.avatar && (
          <img className={css.img} src={user.avatar} alt={user.username} />
        )}

        <Button
          onClick={openFileInput}
          variant="contained"
          sx={{ color: "white" }}
          size="large"
        >
          Profilbild wächseln
          <input
            type="file"
            id="file-input"
            name="file"
            hidden
            onChange={handleAvatarChange}
            ref={fileInputRef}
          />
        </Button>
      </Box>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            gap: { xs: "15px", md: "20px", lg: "25px" },
            pt: { xs: "35px", md: "40px", lg: "40px" },
            pb: { xs: "20px", md: "25px", lg: "10px" },
          }}
        >
          <Box>
            <TextField
              label="Benutzername"
              name="username"
              defaultValue={user.username}
              placeholder={user.username}
              sx={{ width: { xs: "280px", md: "400px", lg: "550px" } }}
            >
              Benutzername
            </TextField>
          </Box>
          <Box>
            <TextField
              label="Vorname"
              name="name"
              defaultValue={user.name}
              placeholder={user.name}
              sx={{ width: { xs: "280px", md: "400px", lg: "550px" } }}
            >
              Vorname
            </TextField>
          </Box>
          <Box>
            <TextField
              label="Nachname"
              name="secondName"
              defaultValue={user.secondName}
              placeholder={user.secondName}
              sx={{ width: { xs: "280px", md: "400px", lg: "550px" } }}
            >
              Nachname
            </TextField>
          </Box>
          <TextField
            sx={{ width: { xs: "280px", md: "400px", lg: "550px" } }}
            label={user.email}
            variant="outlined"
            disabled
          >
            E-Mail
          </TextField>
          <Box>
            <TextField
              type="password"
              name="password"
              label="Neues Passwort"
              placeholder="*********"
              sx={{ width: { xs: "280px", md: "400px", lg: "550px" } }}
            >
              Passwort
            </TextField>
          </Box>
          <Button
            size="large"
            sx={{
              color: "white",
              width: "200px",
              mt: { xs: "15px", lg: "0px" },
            }}
            variant="contained"
            type="submit"
          >
            Data wächseln
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Profile;
