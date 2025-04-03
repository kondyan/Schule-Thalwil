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
      <Grid container>
        {!isRefreshing &&
          users?.map((user) => (
            <User
              key={user._id}
              id={user._id}
              username={user.username}
              name={user.name}
              secondName={user.secondName}
              email={user.email}
              avatar={user.avatar}
            />
          ))}
      </Grid>
    </ul>
  );
};

export default UsersList;
