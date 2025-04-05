import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import css from "./WriterPost.module.css";
import { Link } from "react-router";
import { Launch } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/articles/operations";

const WriterPost = ({ id, title, imageUrl, content, author }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <Grid sx={{ xs: 12, md: 6, lg: 3 }} width={{ xs: 350, md: 400, lg: 350 }}>
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
            </Box>

            <Button
              size="small"
              variant="contained"
              onClick={() => {
                dispatch(deletePost(id));
              }}
              sx={{ backgroundColor: "red", color: "white" }}
            >
              Artikel löschen
            </Button>
          </Box>
        </Paper>
      </Grid>
    </li>
  );
};

export default WriterPost;
