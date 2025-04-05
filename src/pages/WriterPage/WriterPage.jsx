import { Container } from "@mui/material";
import Writer from "../../components/Writer/Writer";
import { Outlet } from "react-router";

const WriterPage = () => {
  return (
    <Container fixed>
      <Writer />
      <Outlet />
    </Container>
  );
};

export default WriterPage;
