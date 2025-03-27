import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectIsRefreshing,
  selectPosts,
} from "../../redux/articles/selectors";
import Article from "../Article/Article";
import css from "./ArticlesList.module.css";
import { getPosts } from "../../redux/articles/operations";
import Grid from "@mui/material/Grid2";

const ArticlesList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <ul>
      <Grid
        spacing={4}
        container
        display="flex"
        alignItems="flex-start"
        justifyContent={{
          mobile: "center",
          tablet: "flex-start",
          desktop: "flex-start",
        }}
      >
        {!isRefreshing &&
          posts?.map((post) => (
            <Article
              key={post._id}
              id={post._id}
              title={post.title}
              imageUrl={post.imageUrl}
              content={post.content}
              author={post.author}
            />
          ))}
      </Grid>
    </ul>
  );
};

export default ArticlesList;
