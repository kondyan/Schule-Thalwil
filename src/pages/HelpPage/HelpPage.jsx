import { Outlet } from "react-router";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import css from "./HelpPage.module.css";
import { Container } from "@mui/material";
import DocumentTitle from "../../components/DocumentTitle";

const HelpPage = () => {
  return (
    <Container fixed>
      <DocumentTitle>Tutorials</DocumentTitle>

      <h1>Help Page</h1>
      <CategoriesList />
      <Outlet />
    </Container>
  );
};

export default HelpPage;
