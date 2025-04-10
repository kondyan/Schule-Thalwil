import { Suspense } from "react";
import { Outlet } from "react-router";
import AppBarComponent from "./AppBar/AppBarComponent";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <AppBarComponent />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
