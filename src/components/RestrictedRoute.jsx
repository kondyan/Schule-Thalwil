import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectRoles } from "../redux/auth/selectors";
import { Navigate } from "react-router";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
