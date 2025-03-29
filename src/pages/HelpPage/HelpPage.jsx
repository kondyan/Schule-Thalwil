import { Outlet } from "react-router";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import css from "./HelpPage.module.css";
import { Container, Paper, Typography } from "@mui/material";
import DocumentTitle from "../../components/DocumentTitle";

const HelpPage = () => {
  return (
    <Container fixed>
      <DocumentTitle>Tutorials</DocumentTitle>

      <Paper
        variant="outlined"
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          width: { xs: 250, md: 300, lg: 350 },
          border: "solid 1.5px black",
          p: "20px",
          mx: "auto",
          mt: "30px",
        }}
      >
        <Typography variant="h3" component="h1" sx={{ fontWeight: "700" }}>
          Tutorials
        </Typography>
        <Typography variant="subtitle1" component="p" align="center">
          Hier kannst du hilfreiche Videos anschauen, und dabei besser für die
          Prüfungen vorbereiten oder allgemein deine Aufklärung verbessern.
          Wähle einfach dein Fach und entdecke die Videos!
        </Typography>
      </Paper>
      <CategoriesList />
      <Outlet />
    </Container>
  );
};

export default HelpPage;
