import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";
import {
  Avatar,
  Button,
  Paper,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import PasswordIcon from "@mui/icons-material/Password";
import { Link } from "react-router";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });
    //   заменить на MUI уведомления
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
          <PasswordIcon />
        </Avatar>

        <Typography
          variant="h6"
          component="p"
          sx={{ fontSize: { xs: "16px", md: "24px", lg: "36px" } }}
        >
          Anmelden
        </Typography>

        <form
          className={css.loginForm}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
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
            <TextField
              sx={{
                scale: { xs: "1", md: "1.2", lg: "1.4" },
              }}
              fullWidth
              required
              variant="standard"
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
              variant="standard"
              label="Passwort"
              type="password"
              name="password"
              placeholder="Passwort"
            />

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
              Anmelden
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
                Hast du noch kein Konto?
              </Typography>

              <Typography variant="button" component="div">
                <Link className={css.openBtn} to={"/register"}>
                  Registrieren
                </Link>
              </Typography>
            </Box>
          </Box>
        </form>
      </Box>
    </Paper>
  );
};

export default LoginForm;
