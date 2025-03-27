import { Suspense } from "react";
import { Outlet } from "react-router";
import AppBarComponent from "./AppBar/AppBarComponent";

const Layout = () => {
  return (
    <>
      <AppBarComponent />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
