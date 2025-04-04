import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectRoles } from "../redux/auth/selectors";
import { Navigate } from "react-router";

const PrivateRoute = ({
  component: Component,
  redirectTo = "/",
  roles = [],
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userRoles = useSelector(selectRoles);

  if (!isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }

  if (roles.length === 0) {
    return Component;
  }

  const hasRole = roles.some((role) => userRoles.includes(role));

  return hasRole ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
