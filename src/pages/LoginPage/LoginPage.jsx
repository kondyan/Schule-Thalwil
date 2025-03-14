import DocumentTitle from "../../components/DocumentTitle";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div>
      <DocumentTitle>Login</DocumentTitle>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
