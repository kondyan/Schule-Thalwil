import { Container } from "@mui/material";
import css from "./NotFoundPage.module.css";
import DocumentTitle from "../../components/DocumentTitle";

const NotFoundPage = () => {
  return (
    <Container fixed>
      <DocumentTitle>Not Found</DocumentTitle>
      <h1>Not Found Page</h1>
    </Container>
  );
};

export default NotFoundPage;
