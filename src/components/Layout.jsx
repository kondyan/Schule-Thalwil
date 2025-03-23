import { Suspense } from "react";
import { Outlet } from "react-router";
import { Container } from "@mui/material";
import AppBarComponent from "./AppBar/AppBarComponent";

const Layout = () => {
  return (
    <>
      <AppBarComponent />
      <Container fixed>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
