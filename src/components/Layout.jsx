import { Suspense } from "react";
import { Outlet } from "react-router";
import AppBar from "./AppBar/AppBar";
import { Container } from "@mui/material";

const Layout = () => {
  return (
    <>
      <AppBar />
      <Container fixed>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
