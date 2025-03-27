import { Box, Typography } from "@mui/material";
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
    <Box>
      <Grid
        container
        direction="column"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!isRefreshing && (
          <>
            <Grid>
              <Typography>{title}</Typography>
            </Grid>
            <Grid>
              <Box>
                <img src={imageUrl} alt={title} />
              </Box>
            </Grid>
            <Grid></Grid>
            <Grid></Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default ArticlePageComponent;
