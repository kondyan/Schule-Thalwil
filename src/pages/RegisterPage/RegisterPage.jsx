import { Container } from "@mui/material";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import css from "./RegisterPage.module.css";
import DocumentTitle from "../../components/DocumentTitle";

const RegisterPage = () => {
  return (
    <Container fixed>
      <DocumentTitle>Registrieren</DocumentTitle>
      <RegisterForm />;
    </Container>
  );
};

export default RegisterPage;
