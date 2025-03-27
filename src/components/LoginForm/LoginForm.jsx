import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";
import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
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
        padding: "50px",
        width: "50%",
        margin: "100px auto",
      }}
    >
      <Grid
        container
        spacing={1.5}
        direction="column"
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid>
          <Avatar sx={{ backgroundColor: "#01A2D8" }}>
            <PasswordIcon />
          </Avatar>
        </Grid>

        <Grid>
          <Typography variant="h6" component="p">
            Anmelden
          </Typography>
        </Grid>
        <form
          className={css.loginForm}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Grid
            container
            spacing={4}
            direction="column"
            sx={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid>
              <TextField
                sx={{ color: "#01A2D8" }}
                fullWidth
                required
                variant="standard"
                label="E-mail"
                type="email"
                name="email"
                placeholder="E-mail"
              />
            </Grid>

            <Grid>
              <TextField
                color="primary"
                fullWidth
                required
                variant="standard"
                label="Passwort"
                type="password"
                name="password"
                placeholder="Passwort"
              />
            </Grid>

            <Grid size={12} textAlign="center">
              <Button
                sx={{ color: "#ffffff" }}
                size="large"
                type="submit"
                variant="contained"
              >
                Anmelden
              </Button>
            </Grid>
            <Grid
              container
              spacing={0.5}
              direction="column"
              sx={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid>
                <Typography variant="subtitle1" component="p">
                  Hast du noch kein Konto?
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="button" component="div">
                  <Link className={css.openBtn} to={"/register"}>
                    Registrieren
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Paper>
  );
};

export default LoginForm;
