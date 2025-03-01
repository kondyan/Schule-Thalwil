import { Routes } from "react-router";
import Navigation from "./Navigation/Navigation";
import Layout from "./Layout";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const HelpPage = lazy(() => import("../pages/HelpPage/HelpPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage/ProfilePage"));

const App = () => {
  <Routes>
    <Route path="/" element={<Layout />}>
      {/*  */}
    </Route>
  </Routes>;
};

export default App;
