import { Avatar, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const User = ({ id, username, name, secondName, email, avatar }) => {
  return (
    <li>
      <Grid>
        <Paper>
          <Typography>{id}</Typography>
          <Typography>{username}</Typography>
          <Typography>{name}</Typography>
          <Typography>{secondName}</Typography>
          <Typography>{email}</Typography>
          <Avatar src={avatar} />
        </Paper>
      </Grid>
    </li>
  );
};

export default User;
