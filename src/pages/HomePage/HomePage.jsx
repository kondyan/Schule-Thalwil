import ArticlesList from "../../components/ArticlesList/ArticlesList";
import DocumentTitle from "../../components/DocumentTitle";
import Hero from "../../components/Hero/Hero";
import css from "./HomePage.module.css";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <Hero />
      <Box>
        <h1 className={css.title}>Schule Thalwil</h1>

        <ArticlesList />
      </Box>
    </>
  );
};

export default HomePage;
