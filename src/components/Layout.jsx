import { Suspense } from "react";
import { Outlet } from "react-router";
import AppBar from "./AppBar/AppBar";

const Layout = () => {
  return (
    <>
      <AppBar />
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 16px" }}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
