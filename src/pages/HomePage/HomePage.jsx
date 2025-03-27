import ArticlesList from "../../components/ArticlesList/ArticlesList";
import DocumentTitle from "../../components/DocumentTitle";
import Hero from "../../components/Hero/Hero";
import css from "./HomePage.module.css";
import { Box, Container } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Schule Thalwil</DocumentTitle>

      <Hero />
      <Container fixed>
        <Box>
          <ArticlesList />
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
