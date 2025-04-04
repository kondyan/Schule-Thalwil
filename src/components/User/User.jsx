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

const User = (data) => {
  const dispatch = useDispatch();

  const { _id, username, name, secondName, email, avatar, role } = data.data;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const role = [];
    if (form.elements.writer.checked) {
      role.push("writer");
    }
    if (form.elements.moderator.checked) {
      role.push("moderator");
    }
    if (form.elements.admin.checked) {
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
            p: { xs: "10px", md: "13px", lg: "16px" },
          }}
        >
          <Box
            paddingX={1.5}
            sx={{
              display: "flex",
              alignItems: "baseline",
              flexDirection: "column",
              gap: "6px",

              borderRadius: 1,
            }}
          >
            <Typography>Benutzername: {username}</Typography>
            <Typography>Vorname: {name}</Typography>
            <Typography>Nachname: {secondName}</Typography>
            <Typography>E-Mail: {email}</Typography>
            <Typography>Rolen: {role.join(" ") || "keine Rolen"}</Typography>
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
                  label="Writer"
                  name="writer"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Moderator"
                  name="moderator"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Admin"
                  name="admin"
                />
              </FormGroup>
              <Button size="large" type="submit">
                Ändern
              </Button>
            </Box>
          </form>
          <Avatar sx={{ mb: "5px", ml: "5px" }} src={avatar} />
        </Paper>
      </Grid>
    </li>
  );
};

export default User;
