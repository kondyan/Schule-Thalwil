import Grid from "@mui/material/Grid2";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredUsers,
  selectisRefreshingUsers,
} from "../../redux/auth/selectors";
import { useEffect } from "react";
import { getUsers } from "../../redux/auth/operations";
import User from "../User/User";

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectFilteredUsers);
  const isRefreshing = useSelector(selectisRefreshingUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <ul>
      <Grid
        mt={6}
        spacing={4}
        container
        display="flex"
        alignItems="flex-start"
        justifyContent={{
          xs: "center",
          md: "flex-start",
        }}
      >
        {!isRefreshing &&
          users?.map((user) => <User key={user._id} data={user} />)}
      </Grid>
    </ul>
  );
};

export default UsersList;
