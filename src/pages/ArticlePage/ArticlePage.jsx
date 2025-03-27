import { Container } from "@mui/material";
import ArticlePageComponent from "../../components/ArticlePageComponent/ArticlePageComponent";
import css from "./ArticlePage.module.css";

const ArticlePage = () => {
  return (
    <Container fixed>
      <ArticlePageComponent />
    </Container>
  );
};

export default ArticlePage;
