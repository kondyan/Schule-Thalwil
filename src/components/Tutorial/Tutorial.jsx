import ReactPlayer from "react-player/youtube";
import Grid from "@mui/material/Grid2";
import { Box, Paper, Typography } from "@mui/material";

const Tutorial = ({ title, description, videoUrl }) => {
  return (
    <li>
      <Grid sx={{ xs: 12, md: 6 }} width={{ xs: 350, md: 500, lg: 550 }}>
        <Paper
          square={false}
          elevation={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Box
            p={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: "600", mx: "auto" }}
            >
              {title}
            </Typography>

            <Typography variant="body" component="p">
              {description}
            </Typography>
          </Box>
          <ReactPlayer controls="true" url={videoUrl} width="100%" />
        </Paper>
      </Grid>
    </li>
  );
};

export default Tutorial;
