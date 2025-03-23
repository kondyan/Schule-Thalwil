import css from "./Article.module.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router";
import { Launch } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material";

const Article = ({ id, title, imageUrl, content, author }) => {
  return (
    <li>
      <ThemeProvider
        theme={createTheme({
          breakpoints: {
            values: {
              mobile: 0,
              tablet: 900,
              desktop: 1200,
            },
          },
        })}
      >
        <Grid
          xs={{ mobile: 12, tablet: 6, desktop: 3 }}
          width={{ mobile: 410, tablet: 400, desktop: 360 }}
        >
          <Paper
            square={false}
            elevation={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <img src={imageUrl} alt={title} className={css.img} />
            <Box
              paddingX={1.5}
              sx={{
                display: "flex",
                alignItems: "baseline",
                flexDirection: "column",
                gap: "6px",
                height: 80,

                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              <Typography variant="h5" component="h2" textOverflow="ellipsis">
                {title}
              </Typography>
              <Typography variant="body2" component="p">
                {content}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: "10px",
                paddingBottom: "5px",
                paddingRight: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                }}
              >
                <Avatar src={author.avatar} alt={author.username} />
                <Typography variant="subtitle2" component="span">
                  {author.username}
                </Typography>
              </Box>

              <Typography variant="button" component="div">
                <Link className={css.openBtn} to={id}>
                  Öffnen
                  <Launch />
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </ThemeProvider>
    </li>
  );
};

export default Article;
