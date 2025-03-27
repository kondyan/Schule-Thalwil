import { Container } from "@mui/material";
import DocumentTitle from "../../components/DocumentTitle";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <Container fixed>
      <DocumentTitle>Anmelden</DocumentTitle>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
