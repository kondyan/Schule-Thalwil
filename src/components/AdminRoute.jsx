import { useSelector } from "react-redux";
import { selectIsAdmin } from "../redux/auth/selectors";
import { Navigate } from "react-router";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isAdmin = useSelector(selectIsAdmin);

  return isAdmin ? Component : <Navigate to={redirectTo} />;
};

export default RestrictedRoute;
