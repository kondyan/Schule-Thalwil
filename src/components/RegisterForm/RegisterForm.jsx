import { useDispatch } from "react-redux";
import css from "./RegisterForm.module.css";
import { register } from "../../redux/auth/operations";
import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { Link } from "react-router";

const RegisterForm = () => {
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
        console.log("register success");
      })
      .catch(() => {
        console.log("register error");
      });
    //   заменить на MUI уведомления
  };

  return (
    <Paper
      elevation={10}
      sx={{
        padding: "50px",
        height: "53vh",
        width: "500px",
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
            <LockPersonIcon />
          </Avatar>
        </Grid>

        <Grid>
          <Typography variant="h6" component="p">
            Registrieren
          </Typography>
        </Grid>
        <form
          className={css.loginForm}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Grid
            container
            sx={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              direction: "row",
              marginBottom: "20px",
            }}
          >
            <Grid>
              <TextField
                sx={{ color: "#01A2D8" }}
                fullWidth
                required
                variant="outlined"
                label="Benutzername"
                type="text"
                name="username"
                placeholder="Benutzername"
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            direction="row"
            sx={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              direction: "row",
            }}
          >
            <Grid size={6}>
              <TextField
                sx={{ color: "#01A2D8" }}
                fullWidth
                required
                variant="filled"
                label="Vorname"
                type="text"
                name="name"
                placeholder="Vorname"
              />
            </Grid>
            <Grid size={6}>
              <TextField
                sx={{ color: "#01A2D8" }}
                fullWidth
                variant="filled"
                label="Nachname"
                type="text"
                name="secondName"
                placeholder="Nachname"
              />
            </Grid>
            <Grid size={6}>
              <TextField
                sx={{ color: "#01A2D8" }}
                fullWidth
                required
                variant="filled"
                label="E-mail"
                type="email"
                name="email"
                placeholder="E-mail"
              />
            </Grid>

            <Grid size={6}>
              <TextField
                color="primary"
                fullWidth
                required
                variant="filled"
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
                  Hast du schon ein Konto?
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="button" component="div">
                  <Link className={css.openBtn} to={"/login"}>
                    Anmelden
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

export default RegisterForm;
