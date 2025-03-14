import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";

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
    //   заменить на toaster уведомления !!!!
    form.reset();
  };

  return (
    <form className={css.loginForm} onSubmit={handleSubmit} autoComplete="off">
      <p className={css.formTitle}>Log in to your account</p>
      <div className={css.inputContainer}>
        <input type="email" name="email" placeholder="Enter email" />
        <span />
      </div>
      <div className={css.inputContainer}>
        <input type="password" name="password" placeholder="Enter password" />
      </div>
      <button className={css.submit} type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
