import { Avatar, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import css from "./ArticlePageComponent.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPost,
  selectCurrentPostIsRefreshing,
} from "../../redux/articles/selectors";
import { getPostById } from "../../redux/articles/operations";
import { useEffect } from "react";
import { useParams } from "react-router";

const ArticlePageComponent = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const post = useSelector(selectCurrentPost);
  const isRefreshing = useSelector(selectCurrentPostIsRefreshing);

  useEffect(() => {
    dispatch(getPostById(params.id));
  }, [dispatch, params.id]);

  const { _id, title, imageUrl, content, author } = post;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: "30px",
      }}
    >
      {!isRefreshing && (
        <Box>
          <Typography variant="h2" component="h1" sx={{ fontWeight: "500" }}>
            {title}
          </Typography>

          <Box>
            <img src={imageUrl} alt={title} width={500} />
          </Box>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "550" }}>
            Beschreibung:
          </Typography>
          <Typography
            variant="paragraph"
            component="p"
            sx={{ width: "1200px" }}
          >
            {content}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              mt: "10px",
            }}
          >
            {author && (
              <>
                <Avatar>{author.avatar}</Avatar>
                <Typography>
                  {author.name} {author.secondName}
                </Typography>
              </>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ArticlePageComponent;
