import { NavLink } from "react-router";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
