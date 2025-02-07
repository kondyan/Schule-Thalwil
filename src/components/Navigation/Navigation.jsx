import css from "./Navigation.module.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import HelpPage from "../../pages/HelpPage/HelpPage";
import HomePage from "../../pages/HomePage/HomePage";

const Navigation = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={css.buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/tutorials" className={css.buildLinkClass}>
          Tutorials
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tutorials" element={<HelpPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Navigation;
