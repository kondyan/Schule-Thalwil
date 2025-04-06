import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useDispatch } from "react-redux";
import { setUserRole } from "../../redux/auth/operations";
import { useState } from "react";

const User = (data) => {
  const { _id, username, name, secondName, email, avatar, role } = data.data;

  const [writer, setWriter] = useState(() => role.includes("writer"));
  const [moderator, setModerator] = useState(() => role.includes("moderator"));
  const [admin, setAdmin] = useState(() => role.includes("admin"));

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const role = [];
    if (writer) {
      role.push("writer");
    }
    if (moderator) {
      role.push("moderator");
    }
    if (admin) {
      role.push("admin");
    }

    dispatch(
      setUserRole({
        _id,
        data: { username, name, secondName, role },
      })
    );
  };
  return (
    <li>
      <Grid sx={{ xs: 12, md: 6, lg: 3 }} width={{ xs: 350, md: 400, lg: 360 }}>
        <Paper
          square={false}
          elevation={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            p: { xs: "7px", md: "13px", lg: "16px" },
          }}
        >
          <Box
            paddingX={1.5}
            sx={{
              display: "flex",
              alignItems: "baseline",
              flexDirection: "column",
              gap: "6px",
              pt: "10px",

              borderRadius: 1,
            }}
          >
            <Avatar sx={{ mb: "5px", ml: "5px" }} src={avatar} />

            <Typography>Benutzername: {username}</Typography>
            <Typography>Vorname: {name}</Typography>
            <Typography>Nachname: {secondName}</Typography>
            <Typography>E-Mail: {email}</Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Box
              paddingX={1.5}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "6px",

                borderRadius: 1,
              }}
            >
              <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                <FormControlLabel
                  control={<Checkbox />}
                  checked={writer}
                  onChange={() => setWriter((prev) => !prev)}
                  label="Writer"
                  name="writer"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  checked={moderator}
                  onChange={() => setModerator((prev) => !prev)}
                  label="Moderator"
                  name="moderator"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  checked={admin}
                  onChange={() => setAdmin((prev) => !prev)}
                  label="Admin"
                  name="admin"
                />
              </FormGroup>
              <Button size="large" type="submit">
                Ändern
              </Button>
            </Box>
          </form>
        </Paper>
      </Grid>
    </li>
  );
};

export default User;
