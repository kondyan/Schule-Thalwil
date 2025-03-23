import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsLoading, selectPosts } from "../../redux/articles/selectors";
import Article from "../Article/Article";
import css from "./ArticlesList.module.css";
import { getPosts } from "../../redux/articles/operations";
import Grid from "@mui/material/Grid2";
import { ThemeProvider, createTheme } from "@mui/material";

const ArticlesList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <ul>
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
          {!isLoading &&
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
      </ThemeProvider>
    </ul>
  );
};

export default ArticlesList;
