import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={css.buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/tutorials" className={css.buildLinkClass}>
          Help Page
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
