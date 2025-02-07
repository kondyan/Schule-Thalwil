import { Outlet } from "react-router";
import Navigation from "../Navigation/Navigation";
import css from "./App.module.css";

const App = () => {
  <>
    <Navigation />
    <Outlet />
  </>;
};

export default App;
