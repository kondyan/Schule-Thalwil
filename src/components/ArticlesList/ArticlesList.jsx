import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectCurrentPage,
  selectIsRefreshing,
  selectPosts,
  selectTotalPages,
} from "../../redux/articles/selectors";
import Article from "../Article/Article";
import { getPosts } from "../../redux/articles/operations";
import Grid from "@mui/material/Grid2";
import { Pagination, Stack } from "@mui/material";
import { useSearchParams } from "react-router";

const ArticlesList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isRefreshing = useSelector(selectIsRefreshing);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  const handleChange = (e, value) => {
    setSearchParams((prev) => ({ ...prev, page: value }));
  };

  useEffect(() => {
    const page = searchParams.get("page");
    if (page) {
      dispatch(getPosts(page));
    } else {
      dispatch(getPosts());
    }
  }, [dispatch, searchParams]);
  return (
    <>
      <ul>
        <Grid
          spacing={4}
          container
          display="flex"
          alignItems="flex-start"
          justifyContent={{
            xs: "center",
            md: "flex-start",
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
      <Stack
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          pt: { xs: "50px", md: "55px", lg: "60px" },
          scale: { xs: "1", md: "1.2", lg: "1.4" },
        }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          sx={{ color: "#01A2D8" }}
        />
      </Stack>
    </>
  );
};

export default ArticlesList;
