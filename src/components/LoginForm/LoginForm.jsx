import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";
import { Avatar, Box, Paper, createTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import LockPersonIcon from "@mui/icons-material/LockPerson";

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        secondary: {
          main: "#ff6f00",
        },
        background: {
          paper: "#FFFFFF",
        },
        text: {
          primary: "#212121",
          secondary: "#757575",
        },
      },
    },
    dark: false,
  },
});

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
    <Grid container spacing={2}>
      <Paper
        elevation={10}
        sx={{
          padding: "20",
          height: "45vh",
          width: "350px",
          margin: "100px auto",
        }}
      >
        <Avatar sx={{ backgroundColor: "black" }}>
          <LockPersonIcon />
        </Avatar>

        <form
          className={css.loginForm}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <p className={css.formTitle}>Log in to your account</p>
          <div className={css.inputContainer}>
            <input type="email" name="email" placeholder="Enter email" />
            <span />
          </div>
          <div className={css.inputContainer}>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
            />
          </div>
          <button className={css.submit} type="submit">
            Log In
          </button>
        </form>
      </Paper>
    </Grid>
  );
};

export default LoginForm;
