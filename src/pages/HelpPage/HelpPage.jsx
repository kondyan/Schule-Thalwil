import { Outlet } from "react-router";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import css from "./HelpPage.module.css";

const HelpPage = () => {
  return (
    <div>
      <h1>Help Page</h1>
      <CategoriesList />
      <Outlet />
    </div>
  );
};

export default HelpPage;
