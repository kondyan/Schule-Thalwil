import { useDispatch } from "react-redux";
import css from "./RegisterForm.module.css";
import { register } from "../../redux/auth/operations";
import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { Link } from "react-router";
import { toast } from "sonner";
import { useState } from "react";

const RegisterForm = () => {
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      register({
        username: form.elements.username.value,
        name: form.elements.name.value,
        secondName: form.elements.secondName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Registrierung erfolgreich! Willkommen");
        setIsError(false);
      })
      .catch(() => {
        toast.error(
          "Registrierung fehlgeschlagen. Bitte prüfen Sie Ihre Eingaben"
        );
        setIsError(true);
      });
  };

  return (
    <Paper
      elevation={10}
      sx={{
        width: { xs: "320px", md: "500px", lg: "650px" },
        padding: { xs: "30px", md: "40px", lg: "50px" },
        margin: "100px auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: { xs: "5px", md: "10px", lg: "15px" },
        }}
      >
        <Avatar
          sx={{
            backgroundColor: "#01A2D8",
            scale: { xs: "1", md: "1.2", lg: "1.4" },
          }}
        >
          <LockPersonIcon />
        </Avatar>

        <Typography
          variant="h6"
          component="p"
          sx={{ fontSize: { xs: "16px", md: "24px", lg: "36px" } }}
        >
          Registrieren
        </Typography>

        <form onSubmit={handleSubmit} autoComplete="off">
          <Box
            sx={{
              display: "flex",
              width: { xs: "280px", md: "320px", lg: "350px" },
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: { xs: "20px", md: "30px", lg: "40px" },
            }}
          >
            {!isError && (
              <>
                {" "}
                <TextField
                  sx={{
                    scale: { xs: "1", md: "1.2", lg: "1.4" },
                  }}
                  fullWidth
                  required
                  variant="outlined"
                  label="Benutzername"
                  type="text"
                  name="username"
                  placeholder="Benutzername"
                />
                <TextField
                  sx={{
                    scale: { xs: "1", md: "1.2", lg: "1.4" },
                  }}
                  fullWidth
                  required
                  variant="filled"
                  label="Vorname"
                  type="text"
                  name="name"
                  placeholder="Vorname"
                />
                <TextField
                  sx={{
                    scale: { xs: "1", md: "1.2", lg: "1.4" },
                  }}
                  fullWidth
                  variant="filled"
                  label="Nachname"
                  type="text"
                  name="secondName"
                  placeholder="Nachname"
                />
                <TextField
                  sx={{
                    scale: { xs: "1", md: "1.2", lg: "1.4" },
                  }}
                  fullWidth
                  required
                  variant="filled"
                  label="E-mail"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                />
                <TextField
                  sx={{
                    scale: { xs: "1", md: "1.2", lg: "1.4" },
                  }}
                  color="primary"
                  fullWidth
                  required
                  variant="filled"
                  label="Passwort"
                  type="password"
                  name="password"
                  placeholder="Mindestens 8 Zeichen"
                />
              </>
            )}

            {isError && (
              <>
                <TextField
                  sx={{
                    scale: { xs: "1", md: "1.2", lg: "1.4" },
                  }}
                  error
                  fullWidth
                  required
                  variant="outlined"
                  label="Benutzername"
                  type="text"
                  name="username"
                  placeholder="Benutzername"
                />
                <TextField
                  sx={{
                    scale: { xs: "1", md: "1.2", lg: "1.4" },
                  }}
                  error
                  fullWidth
                  required
                  variant="filled"
                  label="Vorname"
                  type="text"
                  name="name"
                  placeholder="Vorname"
                />
                <TextField
                  sx={{
                    scale: { xs: "1", md: "1.2", lg: "1.4" },
                  }}
                  error
                  fullWidth
                  variant="filled"
                  label="Nachname"
                  type="text"
                  name="secondName"
                  placeholder="Nachname"
                />
                <TextField
                  sx={{
                    scale: { xs: "1", md: "1.2", lg: "1.4" },
                  }}
                  error
                  fullWidth
                  required
                  variant="filled"
                  label="E-mail"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                />
                <TextField
                  sx={{
                    scale: { xs: "1", md: "1.2", lg: "1.4" },
                  }}
                  error
                  color="primary"
                  fullWidth
                  required
                  variant="filled"
                  label="Passwort"
                  type="password"
                  name="password"
                  placeholder="Mindestens 8 Zeichen"
                />
              </>
            )}

            <Button
              sx={{
                color: "#ffffff",
                mt: { xs: "5px", md: "15px", lg: "25px" },
                scale: { xs: "1", md: "1.2", lg: "1.4" },
              }}
              size="large"
              type="submit"
              variant="contained"
            >
              Registrieren
            </Button>

            <Box
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: { xs: "2px", md: "5px", lg: "15px" },
                scale: { xs: "1", md: "1.2", lg: "1.4" },
                gap: { xs: "5px", md: "7px", lg: "12px" },
              }}
            >
              <Typography variant="subtitle1" component="p">
                Hast du schon ein Konto?
              </Typography>

              <Typography variant="button" component="div">
                <Link className={css.openBtn} to={"/login"}>
                  Anmelden
                </Link>
              </Typography>
            </Box>
          </Box>
        </form>
      </Box>
    </Paper>
  );
};

export default RegisterForm;
